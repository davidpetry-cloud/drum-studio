// Drum Studio tuning guide (tuning.html). Compiled to ../../js/tuning.js by
// build.sh. Three parts: a microphone tuner that reads one pitch per tap,
// a guide to your drum (size, shell, heads), and a tom interval planner.
//
// Audio from the microphone is analysed in the browser and never leaves
// the device; the microphone only opens when the tuner's button is pressed.
import 'dart:convert';
import 'dart:js_interop';
import 'dart:js_interop_unsafe';
import 'dart:typed_data';

import 'package:drum_studio/pitch.dart';
import 'package:drum_studio/tuning_data.dart';

import 'dom.dart';

void main() {
  wireThemeToggle();
  registerServiceWorker();
  if (document.getElementById('guide') == null) return;
  final guide = Guide()..wire();
  Tuner(guide).wire();
  Planner().wire();
  _renderSources();
}

const _drumKey = 'ds-drum';

/// Ranges read best as whole numbers; a reading keeps one decimal, because
/// comparing lugs needs it.
String _hz(double hz) => hz < 100 ? hz.toStringAsFixed(1) : hz.round().toString();
String _reading(double hz) => hz.toStringAsFixed(1);

void _addOptions(Field select, Iterable<(String, String)> options) {
  select.replaceChildren();
  for (final (value, label) in options) {
    select.appendChild(make('option', text: label)..setAttribute('value', value));
  }
}

String _inches(num n) => n == n.roundToDouble() ? '${n.round()}"' : '$n"';

Element _cite(List<String> ids) {
  final p = make('p', cls: 'cite', text: 'Sources: ');
  var first = true;
  for (final id in ids) {
    final s = sources[id];
    if (s == null) continue;
    if (!first) p.appendChild(make('span', text: ' · '));
    first = false;
    p.appendChild(make('a', text: s.title)
      ..setAttribute('href', s.url)
      ..setAttribute('rel', 'noopener')
      ..setAttribute('target', '_blank'));
  }
  return p;
}

void _renderSources() {
  final list = el<Element>('sources');
  for (final s in sources.values) {
    list.appendChild(make('li')
      ..appendChild(make('a', text: s.title)
        ..setAttribute('href', s.url)
        ..setAttribute('rel', 'noopener')
        ..setAttribute('target', '_blank')));
  }
}

// ---- Guide: your drum ---------------------------------------------------------

class Guide {
  final Field typeSelect = el('drum-type');
  final Field sizeSelect = el('drum-size');
  final Field depthSelect = el('drum-depth');
  final Field materialSelect = el('material');
  final Field batterSelect = el('batter');
  final Field resoSelect = el('reso');
  final Field relationSelect = el('relation');
  final Element title = el('range-title');
  final Element low = el('range-low');
  final Element medium = el('range-med');
  final Element high = el('range-high');
  final Element scaledNote = el('range-scaled');
  final Element notes = el('notes');

  DrumType type = DrumType.snare;
  int diameter = 14;
  num depth = 5.5;

  /// Listeners (the tuner) that want to know when the drum changes.
  final listeners = <void Function()>[];

  PitchRange get range => rangeFor(type, diameter);
  String get drumName => '${_inches(diameter)} ${type.label.toLowerCase()}';

  void wire() {
    _addOptions(typeSelect, [for (final t in DrumType.values) (t.name, t.label)]);
    _addOptions(materialSelect, [for (final m in materials) (m.id, m.label)]);
    _addOptions(batterSelect, [for (final h in batterHeads) (h.id, h.label)]);
    _addOptions(relationSelect, [for (final r in relations) (r.id, r.label)]);
    _restore();
    on(typeSelect, 'change', () {
      type = DrumType.byName(typeSelect.value);
      diameter = type.typicalDiameter;
      depth = type.typicalDepth;
      _fillSizes();
      _update();
    });
    on(sizeSelect, 'change', () {
      diameter = int.tryParse(sizeSelect.value) ?? type.typicalDiameter;
      _update();
    });
    on(depthSelect, 'change', () {
      depth = num.tryParse(depthSelect.value) ?? type.typicalDepth;
      _update();
    });
    for (final s in [materialSelect, batterSelect, resoSelect, relationSelect]) {
      on(s, 'change', _update);
    }
    _update();
  }

  void _fillSizes() {
    _addOptions(sizeSelect, [for (final d in type.diameters) ('$d', '${_inches(d)} diameter')]);
    sizeSelect.value = '$diameter';
    _addOptions(depthSelect, [for (final d in type.depths) ('$d', '${_inches(d)} deep')]);
    depthSelect.value = '$depth';
    // Reso choices depend on the drum: port holes are for kicks, snare-side
    // heads for snares.
    final current = resoSelect.value;
    _addOptions(resoSelect, [
      for (final h in resoHeads)
        if ((h.id != 'port' || type == DrumType.kick) &&
            (h.id != 'snare' || type == DrumType.snare))
          (h.id, h.label),
    ]);
    resoSelect.value = switch (type) {
      DrumType.snare => 'snare',
      _ when current.isNotEmpty && current != 'snare' && (current != 'port' || type == DrumType.kick) => current,
      _ => '1x',
    };
  }

  void _restore() {
    Map<Object?, Object?> saved = {};
    try {
      final data = jsonDecode(loadText(_drumKey) ?? '{}');
      if (data is Map) saved = data;
    } on FormatException {
      // Start fresh.
    }
    type = DrumType.byName('${saved['type'] ?? 'snare'}');
    final d = saved['diameter'];
    diameter = d is int && type.diameters.contains(d) ? d : type.typicalDiameter;
    final dp = saved['depth'];
    depth = dp is num && type.depths.contains(dp) ? dp : type.typicalDepth;
    typeSelect.value = type.name;
    _fillSizes();
    void pick(Field f, Object? v) {
      if (v is String && v.isNotEmpty) f.value = v;
    }

    pick(materialSelect, saved['material']);
    pick(batterSelect, saved['batter']);
    pick(resoSelect, saved['reso']);
    pick(relationSelect, saved['relation']);
    // A value the select doesn't offer leaves it blank: fall back.
    for (final f in [materialSelect, batterSelect, resoSelect, relationSelect]) {
      if (f.value.isEmpty) f.value = ((f as JSObject)['options'] as JSObject)
          .callMethod<Field>('item'.toJS, 0.toJS).value;
    }
  }

  void _update() {
    final r = range;
    title.textContent = 'Starting range for a $drumName';
    void show(Element e, double hz) => e.textContent = '${_hz(hz)} Hz · ${noteFor(hz).label}';
    show(low, r.low);
    show(medium, r.medium);
    show(high, r.high);
    scaledNote.textContent = r.scaledFrom != null
        ? 'No source we found lists this size, so this range is scaled from the ${_inches(r.scaledFrom!)} range (pitch goes roughly as one over the diameter). Treat it as a rough guide.'
        : 'Range from ${sources[r.source]?.title ?? 'the sources below'}. A starting point: tune by ear from here.';

    final material = materialById(materialSelect.value);
    final batter = headById(batterHeads, batterSelect.value);
    final reso = headById(resoHeads, resoSelect.value);
    final relation = relationById(relationSelect.value);

    notes.replaceChildren();
    void note(String heading, String body, List<String> cites) {
      notes.appendChild(make('li', cls: 'note-card')
        ..appendChild(make('h3', text: heading))
        ..appendChild(make('p', text: body))
        ..appendChild(cites.isEmpty ? make('span') : _cite(cites)));
    }

    note('Shell: ${material.label}', material.sound, material.sources);
    note('Depth: ${_inches(depth)}', depthNote(type, depth), const ['yamahaSnare', 'md']);
    note('Batter head: ${batter.label}', batter.sound, batter.sources);
    note('Resonant head: ${reso.label}', reso.sound, reso.sources);
    if (type == DrumType.snare) {
      note('Batter and snare side', snareRelationNote, const []);
    } else {
      note('Head relationship: ${relation.label}', relation.sound, relation.sources);
    }
    el<Element>('relation-row').hidden = type == DrumType.snare;

    saveText(_drumKey, jsonEncode({
      'type': type.name,
      'diameter': diameter,
      'depth': depth,
      'material': materialSelect.value,
      'batter': batterSelect.value,
      'reso': resoSelect.value,
      'relation': relationSelect.value,
    }));
    for (final l in listeners) {
      l();
    }
  }
}

// ---- Tuner ----------------------------------------------------------------------

class Tuner {
  Tuner(this.guide);
  final Guide guide;

  final Element startButton = el('mic-start');
  final Element readingHz = el('reading-hz');
  final Element readingNote = el('reading-note');
  final Element needle = el('needle');
  final Element level = el('level');
  final Element listenState = el('listen-state');
  final Field sensitivity = el('sensitivity');
  final Element lugList = el('lugs');
  final Element lugStatus = el('lug-status');
  final Element targetLine = el('target-line');
  final Element targetMark = el('target-mark');
  final Element status = el('tuner-status');

  AudioContext? _ctx;
  MediaStream? _stream;
  AnalyserNode? _spectrum, _wave;
  late Float32List _db, _samples;
  int? _frame;
  bool _running = false;
  final _hits = HitTracker();
  final _lugs = <double>[];
  double? _last;

  late final JSFunction _drawJs = _draw.toJS;

  void wire() {
    final devices = navigator.mediaDevices;
    if (devices == null || !hasAudio) {
      el<Element>('tuner-body').hidden = true;
      el<Element>('no-mic').hidden = false;
      return;
    }
    on(startButton, 'click', () => _running ? _stop() : _start());
    on(sensitivity, 'input', _readSensitivity);
    onId('lugs-clear', 'click', () {
      _lugs.clear();
      _showLugs();
      _say('Lug readings cleared.');
    });
    guide.listeners.add(_showTarget);
    _readSensitivity();
    _showLugs();
    _showTarget();
  }

  void _readSensitivity() {
    // Slider 1 (least sensitive) to 10 (most): the tap level needed.
    final s = (int.tryParse(sensitivity.value) ?? 6).clamp(1, 10);
    _hits.threshold = 0.08 / (s * s / 4 + 1);
  }

  Future<void> _start() async {
    _say('Asking for the microphone…');
    try {
      final constraints = {
        'audio': {
          'echoCancellation': false,
          'noiseSuppression': false,
          'autoGainControl': false,
        },
      }.jsify()! as JSObject;
      final stream = await navigator.mediaDevices!.getUserMedia(constraints).toDart;
      final ctx = AudioContext();
      await ctx.resume().toDart;
      final source = ctx.createMediaStreamSource(stream);
      final spectrum = ctx.createAnalyser()
        ..fftSize = 8192
        ..smoothingTimeConstant = 0;
      final wave = ctx.createAnalyser()..fftSize = 1024;
      source
        ..connect(spectrum)
        ..connect(wave);
      _ctx = ctx;
      _stream = stream;
      _spectrum = spectrum;
      _wave = wave;
      _db = Float32List(spectrum.fftSize ~/ 2);
      _samples = Float32List(wave.fftSize);
      _running = true;
      startButton
        ..textContent = 'Stop tuner'
        ..setAttribute('aria-pressed', 'true')
        ..classList.toggle('is-running', true);
      listenState.textContent = 'Listening: tap the drum';
      _say('Tuner on. Tap the drum lightly about an inch from a tension rod.');
      _frame = requestAnimationFrame(_drawJs);
    } catch (e) {
      _say('The microphone isn’t available. Check that this site is allowed to use it '
          '(usually the icon by the address bar), then try again.');
    }
  }

  void _stop() {
    _running = false;
    if (_frame case final id?) cancelAnimationFrame(id);
    final tracks = _stream?.getTracks().toDart ?? const [];
    for (final t in tracks) {
      t.stop();
    }
    _ctx?.close();
    _ctx = null;
    _stream = null;
    startButton
      ..textContent = 'Start tuner'
      ..setAttribute('aria-pressed', 'false')
      ..classList.toggle('is-running', false);
    listenState.textContent = 'Microphone off';
    level.style.setProperty('--level', '0');
    _say('Tuner off. The microphone is closed.');
  }

  void _draw(double now) {
    final ctx = _ctx, spectrum = _spectrum, wave = _wave;
    if (!_running || ctx == null || spectrum == null || wave == null) return;
    wave.getFloatTimeDomainData(_samples.toJS);
    spectrum.getFloatFrequencyData(_db.toJS);
    final lvl = rms(_samples);
    level.style.setProperty('--level', (lvl * 8).clamp(0, 1).toStringAsFixed(3));
    final hz = peakHz(_db, sampleRate: ctx.sampleRate, fftSize: spectrum.fftSize,
        minHz: 35, maxHz: 1200);
    final reading = _hits.feed(level: lvl, hz: hz, nowMs: now);
    listenState.textContent = _hits.listening ? 'Reading…' : 'Listening: tap the drum';
    if (reading != null) _record(reading);
    _frame = requestAnimationFrame(_drawJs);
  }

  void _record(double hz) {
    _last = hz;
    final note = noteFor(hz);
    readingHz.textContent = '${_reading(hz)} Hz';
    readingNote.textContent = note.describe;
    needle
      ..hidden = false
      ..style.setProperty('--cents', '${note.cents}');
    _lugs.add(hz);
    if (_lugs.length > 12) _lugs.removeAt(0);
    _showLugs();
    _showTarget();
    _say('${_reading(hz)} hertz, ${note.describe.replaceAll('♯', ' sharp').replaceAll('¢', ' cents').replaceAll('−', 'minus ')}.');
  }

  void _showLugs() {
    lugList.replaceChildren();
    final check = LugCheck(_lugs);
    final offsets = check.offsetsCents;
    for (var i = 0; i < _lugs.length; i++) {
      final off = offsets[i].round();
      final sign = off > 0 ? '+' : (off < 0 ? '−' : '±');
      final item = make('li', cls: 'lug')
        ..appendChild(make('span', cls: 'lug-n', text: 'Lug ${i + 1}'))
        ..appendChild(make('span', cls: 'lug-hz', text: '${_reading(_lugs[i])} Hz'))
        ..appendChild(make('span', cls: 'lug-off', text: _lugs.length > 1 ? '$sign${off.abs()}¢' : ''));
      if (check.worst == i) item.classList.add('is-worst');
      lugList.appendChild(item);
    }
    lugStatus.textContent = switch (_lugs.length) {
      0 => 'Tap near each tension rod in turn. Readings appear here so you can compare them.',
      1 => 'One reading. Tap the next lug.',
      _ when check.isEven =>
        'Even: every lug is within ${LugCheck.evenCents}¢ of the middle reading (${_reading(check.center)} Hz).',
      _ => () {
          final w = check.worst!;
          final off = check.offsetsCents[w];
          return 'Lug ${w + 1} is ${off.abs().round()}¢ ${off > 0 ? 'sharp: loosen it slightly' : 'flat: tighten it slightly'}, then tap it again.';
        }(),
    };
  }

  void _showTarget() {
    final r = guide.range;
    targetLine.textContent = 'Target for your ${guide.drumName}: about ${_hz(r.low)} to ${_hz(r.high)} Hz '
        '(${noteFor(r.low).label} to ${noteFor(r.high).label}). Hit the centre to compare.';
    final last = _last;
    targetMark.hidden = last == null;
    if (last != null) {
      targetMark.style.setProperty('--pos', r.position(last).clamp(-0.08, 1.08).toStringAsFixed(3));
      targetMark.setAttribute('title', '${_reading(last)} Hz');
    }
  }

  void _say(String message) => status.textContent = message;
}

// ---- Tom interval planner ---------------------------------------------------------

class Planner {
  final Element sizes = el('plan-sizes');
  final Field interval = el('plan-interval');
  final Field top = el('plan-top');
  final Element out = el('plan-out');
  final Element summary = el('plan-summary');
  final _chosen = <(DrumType, int)>{(DrumType.rackTom, 10), (DrumType.rackTom, 12), (DrumType.floorTom, 16)};
  final _boxes = <(DrumType, int), Field>{};

  void wire() {
    for (final t in [DrumType.rackTom, DrumType.floorTom]) {
      for (final d in t.diameters) {
        final id = 'plan-${t.name}-$d';
        final box = make('input') as Field
          ..setAttribute('type', 'checkbox')
          ..setAttribute('id', id);
        box.checked = _chosen.contains((t, d));
        final label = make('label', cls: 'chip-check')
          ..setAttribute('for', id)
          ..appendChild(box)
          ..appendChild(make('span', text: '${_inches(d)} ${t == DrumType.rackTom ? 'rack' : 'floor'}'));
        on(box, 'change', () {
          box.checked ? _chosen.add((t, d)) : _chosen.remove((t, d));
          _update();
        });
        _boxes[(t, d)] = box;
        sizes.appendChild(label);
      }
    }
    _addOptions(interval, [for (final i in intervals) ('${i.semitones}', i.label)]);
    interval.value = '5';
    on(interval, 'change', _update);
    on(top, 'input', _update);
    onId('plan-suggest', 'click', () {
      _suggestTop();
      _update();
    });
    _suggestTop();
    _update();
  }

  List<(DrumType, int)> get _toms =>
      [..._chosen]..sort((a, b) => a.$2.compareTo(b.$2));

  void _suggestTop() {
    final toms = _toms;
    if (toms.isEmpty) return;
    top.value = rangeFor(toms.first.$1, toms.first.$2).medium.round().toString();
  }

  void _update() {
    out.replaceChildren();
    final toms = _toms;
    final hz = double.tryParse(top.value);
    if (toms.isEmpty || hz == null || hz < 30 || hz > 1000) {
      summary.textContent = toms.isEmpty
          ? 'Pick at least one tom.'
          : 'Enter a pitch for your smallest tom, between 30 and 1000 Hz.';
      return;
    }
    final plan = planToms(toms, hz, int.tryParse(interval.value) ?? 5);
    for (final p in plan) {
      final row = make('tr')
        ..appendChild(make('th', text: '${_inches(p.diameter)} ${p.type == DrumType.rackTom ? 'rack' : 'floor'}')
          ..setAttribute('scope', 'row'))
        ..appendChild(make('td', text: '${_hz(p.hz)} Hz'))
        ..appendChild(make('td', text: noteFor(p.hz).label))
        ..appendChild(make('td', cls: p.fits ? 'fits' : 'outside',
            text: p.fits ? 'In range' : (p.hz > p.range.high ? 'Above range' : 'Below range')));
      out.appendChild(row);
    }
    final outside = plan.where((p) => !p.fits).length;
    summary.textContent = outside == 0
        ? 'Every tom lands inside its starting range.'
        : '$outside ${outside == 1 ? 'tom lands' : 'toms land'} outside the starting range. Try a smaller interval or a different top pitch.';
  }
}
