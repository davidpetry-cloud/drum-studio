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
import 'package:drum_studio/titles.dart';
import 'package:drum_studio/tuning_data.dart';

import 'dom.dart';

void main() {
  wireThemeToggle();
  wireInstall();
  registerServiceWorker();
  if (document.getElementById('guide') == null) return;
  final guide = Guide()..wire();
  final tuner = Tuner(guide)..wire();
  Planner().wire();
  _renderSources();
  final tabs = Tabs((id) {
    // Never leave the microphone open on a tab you can't see.
    if (id != 'tuner') tuner.pause();
  })..wire();
  final changeDrum = el<Element>('change-drum')..hidden = false;
  on(changeDrum, 'click', () => tabs.select('guide', focus: true));
}

// ---- Section tabs ------------------------------------------------------------------

/// WAI-ARIA tabs: one section at a time, arrow keys between tabs, and the
/// choice kept in the URL (#tuner, #guide …) and on the device.
class Tabs {
  Tabs(this.onChange);
  final void Function(String id) onChange;

  static const ids = ['tuner', 'guide', 'planner', 'howto'];
  static const _key = 'ds-tuning-tab';

  final Element list = el('tuning-tabs');
  late final _tabs = [for (final id in ids) el<Element>('tab-$id')];
  late final _panels = [for (final id in ids) el<Element>(id)];

  void wire() {
    for (var i = 0; i < ids.length; i++) {
      _panels[i]
        ..setAttribute('role', 'tabpanel')
        ..setAttribute('aria-labelledby', 'tab-${ids[i]}');
      final id = ids[i];
      on(_tabs[i], 'click', () => select(id));
    }
    list.addEventListener(
      'keydown',
      ((KeyEvent e) {
        final at = _tabs.indexWhere((t) => t == document.activeElement);
        if (at < 0) return;
        final to = switch (e.key) {
          'ArrowRight' => (at + 1) % ids.length,
          'ArrowLeft' => (at - 1 + ids.length) % ids.length,
          'Home' => 0,
          'End' => ids.length - 1,
          _ => -1,
        };
        if (to < 0) return;
        e.preventDefault();
        select(ids[to], focus: true);
      }).toJS,
    );
    list.hidden = false;
    final fromUrl = urlHash, saved = loadText(_key);
    // Don't write the URL during loading: the browser would then scroll
    // to that section and hide the tabs.
    select(
      ids.contains(fromUrl)
          ? fromUrl
          : (ids.contains(saved) ? saved! : 'tuner'),
      updateUrl: false,
    );
    onWindow('hashchange', () {
      if (ids.contains(urlHash)) select(urlHash);
    });
  }

  void select(String id, {bool focus = false, bool updateUrl = true}) {
    for (var i = 0; i < ids.length; i++) {
      final on = ids[i] == id;
      _tabs[i]
        ..setAttribute('aria-selected', '$on')
        ..setAttribute('tabindex', on ? '0' : '-1');
      _panels[i].hidden = !on;
    }
    saveText(_key, id);
    if (updateUrl) replaceHash(id);
    if (focus) _tabs[ids.indexOf(id)].focus();
    onChange(id);
  }
}

const _drumKey = 'ds-drum';

/// Ranges read best as whole numbers; a reading keeps one decimal, because
/// comparing lugs needs it.
String _hz(double hz) =>
    hz < 100 ? hz.toStringAsFixed(1) : hz.round().toString();
String _reading(double hz) => hz.toStringAsFixed(1);

void _addOptions(Field select, Iterable<(String, String)> options) {
  select.replaceChildren();
  for (final (value, label) in options) {
    select.appendChild(
      make('option', text: label)..setAttribute('value', value),
    );
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
    p.appendChild(
      make('a', text: s.title)
        ..setAttribute('href', s.url)
        ..setAttribute('rel', 'noopener')
        ..setAttribute('target', '_blank'),
    );
  }
  return p;
}

void _renderSources() {
  final list = el<Element>('sources');
  for (final s in sources.values) {
    list.appendChild(
      make('li')..appendChild(
        make('a', text: s.title)
          ..setAttribute('href', s.url)
          ..setAttribute('rel', 'noopener')
          ..setAttribute('target', '_blank'),
      ),
    );
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
    _addOptions(typeSelect, [
      for (final t in DrumType.values) (t.name, t.label),
    ]);
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
    for (final s in [
      materialSelect,
      batterSelect,
      resoSelect,
      relationSelect,
    ]) {
      on(s, 'change', _update);
    }
    _update();
  }

  void _fillSizes() {
    _addOptions(sizeSelect, [
      for (final d in type.diameters) ('$d', '${_inches(d)} diameter'),
    ]);
    sizeSelect.value = '$diameter';
    _addOptions(depthSelect, [
      for (final d in type.depths) ('$d', '${_inches(d)} deep'),
    ]);
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
      _
          when current.isNotEmpty &&
              current != 'snare' &&
              (current != 'port' || type == DrumType.kick) =>
        current,
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
    diameter = d is int && type.diameters.contains(d)
        ? d
        : type.typicalDiameter;
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
    for (final f in [
      materialSelect,
      batterSelect,
      resoSelect,
      relationSelect,
    ]) {
      if (f.value.isEmpty)
        f.value = ((f as JSObject)['options'] as JSObject)
            .callMethod<Field>('item'.toJS, 0.toJS)
            .value;
    }
  }

  void _update() {
    final r = range;
    title.textContent = titleCase('Starting range for a $drumName');
    void show(Element e, double hz) =>
        e.textContent = '${_hz(hz)} Hz · ${noteFor(hz).label}';
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
      notes.appendChild(
        make('li', cls: 'note-card')
          ..appendChild(make('h3', text: titleCase(heading)))
          ..appendChild(make('p', text: body))
          ..appendChild(cites.isEmpty ? make('span') : _cite(cites)),
      );
    }

    note('Shell: ${material.label}', material.sound, material.sources);
    note('Depth: ${_inches(depth)}', depthNote(type, depth), const [
      'yamahaSnare',
      'md',
    ]);
    note('Batter head: ${batter.label}', batter.sound, batter.sources);
    note('Resonant head: ${reso.label}', reso.sound, reso.sources);
    if (type == DrumType.snare) {
      note('Batter and snare side', snareRelationNote, const []);
    } else {
      note(
        'Head relationship: ${relation.label}',
        relation.sound,
        relation.sources,
      );
    }
    el<Element>('relation-row').hidden = type == DrumType.snare;

    saveText(
      _drumKey,
      jsonEncode({
        'type': type.name,
        'diameter': diameter,
        'depth': depth,
        'material': materialSelect.value,
        'batter': batterSelect.value,
        'reso': resoSelect.value,
        'relation': relationSelect.value,
      }),
    );
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
  late final LugSet _lugs = LugSet(guide.type.typicalLugs);
  DrumType _lugType = DrumType.snare; // set in wire()
  final Field lugCount = el('lug-count');
  double? _last;

  late final JSFunction _drawJs = _draw.toJS;
  bool _starting = false;

  /// When a tap was last heard; after [idleLimitMs] of quiet the microphone
  /// switches itself off.
  double _lastActivity = 0;
  static const idleLimitMs = 120000;

  void wire() {
    final devices = navigator.mediaDevices;
    if (devices == null || !hasAudio) {
      el<Element>('tuner-body').hidden = true;
      el<Element>('no-mic').hidden = false;
      return;
    }
    startButton.addEventListener(
      'click',
      ((Event e) {
        // Only a real tap or click may open the microphone; scripted clicks
        // are ignored.
        if (!e.isTrusted) return;
        _running ? _stop() : _start();
      }).toJS,
    );
    // Close the microphone whenever the page can't be seen: another app or
    // tab, a locked screen, or leaving the page.
    document.addEventListener(
      'visibilitychange',
      ((JSAny? _) {
        if (document.hidden) pause('Tuner off because the page was hidden.');
      }).toJS,
    );
    onWindow('pagehide', () => pause());
    on(sensitivity, 'input', _readSensitivity);
    onId('lugs-clear', 'click', () {
      _lugs.clearAll();
      _showLugs();
      _say('Lug readings cleared.');
    });
    for (var n = LugSet.minLugs; n <= LugSet.maxLugs; n++) {
      lugCount.appendChild(
        make('option', text: '$n')..setAttribute('value', '$n'),
      );
    }
    lugCount.value = '${_lugs.count}';
    on(lugCount, 'change', () {
      _lugs.resize(int.tryParse(lugCount.value) ?? _lugs.count);
      _showLugs();
      _say('${_lugs.count} lugs.');
    });
    // A different drum: start fresh with that drum's usual lug count.
    _lugType = guide.type;
    guide.listeners.add(() {
      if (guide.type == _lugType) return;
      _lugType = guide.type;
      _lugs
        ..resize(_lugType.typicalLugs)
        ..clearAll();
      lugCount.value = '${_lugs.count}';
      _showLugs();
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
    if (_starting || _running) return; // one request at a time
    // Refuse inside another site's frame (see isFramed).
    if (isFramed) {
      _say(_micProblem('framed'));
      return;
    }
    // Browsers only offer the microphone on secure (https) pages.
    if (globalContext['isSecureContext'] case final JSBoolean secure
        when !secure.toDart) {
      _say(_micProblem('insecure'));
      return;
    }
    _say('Asking for the microphone…');
    _starting = true;
    try {
      final constraints =
          {
                // Ask for the least we need: one audio channel, no camera.
                'audio': {
                  'channelCount': 1,
                  'echoCancellation': false,
                  'noiseSuppression': false,
                  'autoGainControl': false,
                },
                'video': false,
              }.jsify()!
              as JSObject;
      final stream = await navigator.mediaDevices!
          .getUserMedia(constraints)
          .toDart;
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
      _lastActivity = performance.now();
      startButton
        ..textContent = 'Stop tuner'
        ..setAttribute('aria-pressed', 'true')
        ..classList.toggle('is-running', true);
      listenState.textContent = 'Listening: tap the drum';
      _say('Tuner on. Tap the drum lightly about an inch from a tension rod.');
      _frame = requestAnimationFrame(_drawJs);
    } catch (e) {
      _say(_micProblem(_errorName(e)));
    } finally {
      _starting = false;
    }
  }

  /// The DOMException name ("NotAllowedError" and so on), if there is one.
  static String? _errorName(Object error) {
    try {
      final name = (error as JSObject)['name'];
      return name.isA<JSString>() ? (name as JSString).toDart : null;
    } catch (_) {
      return null;
    }
  }

  /// What went wrong and what to do about it, in plain words.
  static String _micProblem(String? name) => switch (name) {
    'NotAllowedError' || 'SecurityError' =>
      'Microphone access is blocked for this site. '
          'iPhone/iPad (Safari): tap the page-settings icon in the address bar, choose Website Settings, set Microphone to Allow. '
          'Android (Chrome): tap the icon at the left of the address bar, open Permissions, allow Microphone. '
          'Then press Start tuner again.',
    'NotFoundError' || 'OverconstrainedError' =>
      'No microphone was found. Connect one, or check that the device’s microphone is switched on, then press Start tuner again.',
    'NotReadableError' || 'AbortError' =>
      'The microphone is busy, probably in a call or another recording app. Close that app, then press Start tuner again.',
    'framed' =>
      'For your privacy, the tuner only uses the microphone when Drum Studio is open in its own tab. Open https://davidpetry-cloud.github.io/drum-studio/tuning.html directly.',
    'insecure' =>
      'The tuner needs a secure (https) page to use the microphone. Open the app from https://davidpetry-cloud.github.io/drum-studio/tuning.html.',
    _ =>
      'The microphone couldn’t start. Check that this site is allowed to use it (usually the icon by the address bar), then press Start tuner again.',
  };

  /// Turns the tuner off if it's on (its tab or the page was hidden).
  void pause([String why = 'Tuner off while you’re on another tab.']) {
    if (!_running) return;
    _stop();
    _say('$why The microphone is closed.');
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
    level.style.setProperty(
      '--level',
      (lvl * 8).clamp(0, 1).toStringAsFixed(3),
    );
    final hz = peakHz(
      _db,
      sampleRate: ctx.sampleRate,
      fftSize: spectrum.fftSize,
      minHz: 35,
      maxHz: 1200,
    );
    final reading = _hits.feed(level: lvl, hz: hz, nowMs: now);
    listenState.textContent = _hits.listening
        ? 'Reading…'
        : 'Listening: tap the drum';
    if (reading != null) _record(reading);
    if (_hits.listening) _lastActivity = now;
    // Don't leave the microphone open if nobody is tuning.
    if (now - _lastActivity > idleLimitMs) {
      pause('Tuner off after 2 minutes without a tap.');
      return;
    }
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
    final lug = _lugs.next;
    _lugs.record(hz);
    _showLugs();
    _showTarget();
    _say(
      'Lug ${lug + 1}: ${_reading(hz)} hertz, ${note.describe.replaceAll('♯', ' sharp').replaceAll('¢', ' cents').replaceAll('−', 'minus ')}.',
    );
  }

  /// One slot per lug: its reading and distance from the middle, the lug
  /// the next tap goes to, and the one to adjust. Tap a lug to re-read it.
  void _showLugs() {
    // Once every lug is read and one is off, select it for re-reading.
    final worst = _lugs.worst;
    if (worst != null && _lugs.filled == _lugs.count) _lugs.select(worst);
    final offsets = _lugs.offsetsCents;
    lugList.replaceChildren();
    for (var i = 0; i < _lugs.count; i++) {
      final hz = _lugs.readings[i];
      final off = offsets[i]?.round();
      final sign = off == null ? '' : (off > 0 ? '+' : (off < 0 ? '−' : '±'));
      final isNext = i == _lugs.next;
      final words = hz == null
          ? 'not read yet'
          : '${_reading(hz)} hertz${_lugs.filled > 1 && off != null ? ', ${off.abs()} cents ${off > 0 ? 'sharp' : (off < 0 ? 'flat' : 'even')}' : ''}';
      final slot = make('button', cls: 'lug')
        ..setAttribute('type', 'button')
        ..setAttribute('aria-pressed', '$isNext')
        ..setAttribute(
          'aria-label',
          'Lug ${i + 1}: $words.${isNext ? ' Next reading goes here.' : ' Press to read it next.'}',
        )
        ..appendChild(
          make(
            'span',
            cls: 'lug-n',
            text: 'Lug ${i + 1}${isNext ? ' · next' : ''}',
          ),
        )
        ..appendChild(
          make(
            'span',
            cls: 'lug-hz',
            text: hz == null ? '–' : '${_reading(hz)} Hz',
          ),
        )
        ..appendChild(
          make(
            'span',
            cls: 'lug-off',
            text: _lugs.filled > 1 && off != null ? '$sign${off.abs()}¢' : '',
          ),
        );
      if (isNext) slot.classList.add('is-next');
      if (worst == i) slot.classList.add('is-worst');
      final index = i;
      on(slot, 'click', () {
        _lugs.select(index);
        _showLugs();
        _say('The next reading goes to lug ${index + 1}.');
      });
      final row = make('li', cls: 'lug-row')..appendChild(slot);
      if (hz != null) {
        final clear = make('button', cls: 'lug-clear', text: '×')
          ..setAttribute('type', 'button')
          ..setAttribute('aria-label', 'Clear lug ${index + 1}');
        on(clear, 'click', () {
          _lugs.clear(index);
          _showLugs();
          _say('Lug ${index + 1} cleared. It’s next to read.');
        });
        row.appendChild(clear);
      }
      lugList.appendChild(row);
    }
    lugStatus.textContent = switch (_lugs.filled) {
      0 =>
        'Tap about an inch from any tension rod: that’s lug 1. Then work round the drum. Each reading fills the next lug, and you can tap a lug to re-read it.',
      1 => 'One lug read. Next: lug ${_lugs.next + 1}.',
      _ when _lugs.isEven =>
        'Even: every lug read is within ${LugCheck.evenCents}¢ of the middle (${_reading(_lugs.center)} Hz).${_lugs.filled < _lugs.count ? ' Next: lug ${_lugs.next + 1}.' : ''}',
      _ => () {
        final w = worst!;
        final o = offsets[w]!;
        final fix = o > 0
            ? 'sharp: loosen it slightly'
            : 'flat: tighten it slightly';
        return 'Lug ${w + 1} is ${o.abs().round()}¢ $fix.'
            '${_lugs.next == w ? ' It’s selected, so your next tap re-reads it.' : ' Next: lug ${_lugs.next + 1}.'}';
      }(),
    };
  }

  void _showTarget() {
    final r = guide.range;
    targetLine.textContent =
        'Target for your ${guide.drumName}: about ${_hz(r.low)} to ${_hz(r.high)} Hz '
        '(${noteFor(r.low).label} to ${noteFor(r.high).label}). Hit the centre to compare.';
    final last = _last;
    targetMark.hidden = last == null;
    if (last != null) {
      targetMark.style.setProperty(
        '--pos',
        r.position(last).clamp(-0.08, 1.08).toStringAsFixed(3),
      );
      targetMark.setAttribute('title', '${_reading(last)} Hz');
    }
  }

  void _say(String message) => status.textContent = message;
}

// ---- Tom interval planner ---------------------------------------------------------

const _planKey = 'ds-plan';

String _tomName(DrumType type, int diameter) =>
    '${_inches(diameter)} ${type == DrumType.rackTom ? 'rack' : 'floor'}';

/// One table row: the controls that stay put while you type, and the cells
/// that get refreshed.
class _PlanRow {
  _PlanRow(this.type, this.diameter);
  final DrumType type;
  final int diameter;
  String get id => '${type.name}-$diameter';
  late final Element pitchCell, noteCell, gapCell, checkCell;
  Field? pitchInput; // free tuning
  Field? gapSelect; // custom per gap (not on the last tom)
}

class Planner {
  final Element sizes = el('plan-sizes');
  final Element spacingBox = el('plan-spacing');
  final Element spacingHint = el('plan-spacing-hint');
  final Element intervalRow = el('plan-interval-row');
  final Field interval = el('plan-interval');
  final Element topRow = el('plan-top-row');
  final Field top = el('plan-top');
  final Element out = el('plan-out');
  final Element summary = el('plan-summary');

  final _chosen = <(DrumType, int)>{
    (DrumType.rackTom, 10),
    (DrumType.rackTom, 12),
    (DrumType.floorTom, 16),
  };
  var spacing = Spacing.same;
  var sameSemitones = 5;

  /// Custom gaps, keyed "smallerId>largerId", so they survive adding toms.
  final _gaps = <String, int>{};

  /// Free-tuning pitches by tom id.
  final _freeHz = <String, double>{};
  final _rows = <_PlanRow>[];

  void wire() {
    _restore();
    for (final t in [DrumType.rackTom, DrumType.floorTom]) {
      for (final d in t.diameters) {
        final id = 'plan-${t.name}-$d';
        final box = make('input') as Field
          ..setAttribute('type', 'checkbox')
          ..setAttribute('id', id);
        box.checked = _chosen.contains((t, d));
        sizes.appendChild(
          make('label', cls: 'chip-check')
            ..setAttribute('for', id)
            ..appendChild(box)
            ..appendChild(make('span', text: _tomName(t, d))),
        );
        on(box, 'change', () {
          box.checked ? _chosen.add((t, d)) : _chosen.remove((t, d));
          _build();
        });
      }
    }
    for (final sp in Spacing.values) {
      final id = 'plan-spacing-${sp.name}';
      final radio = make('input') as Field
        ..setAttribute('type', 'radio')
        ..setAttribute('name', 'plan-spacing')
        ..setAttribute('id', id)
        ..setAttribute('value', sp.name);
      radio.checked = sp == spacing;
      spacingBox.appendChild(
        make('label', cls: 'chip-check')
          ..setAttribute('for', id)
          ..appendChild(radio)
          ..appendChild(make('span', text: sp.label)),
      );
      on(radio, 'change', () {
        if (radio.checked) _setSpacing(sp);
      });
    }
    _addOptions(interval, [
      for (final i in intervals) ('${i.semitones}', i.label),
    ]);
    interval.value = '$sameSemitones';
    on(interval, 'change', () {
      sameSemitones = int.tryParse(interval.value) ?? 5;
      _refresh();
    });
    on(top, 'input', _refresh);
    onId('plan-suggest', 'click', () {
      _suggestTop();
      _refresh();
    });
    if (top.value.isEmpty) _suggestTop();
    _build();
  }

  List<(DrumType, int)> get _toms =>
      [..._chosen]..sort((a, b) => a.$2.compareTo(b.$2));

  double? get _topHz {
    final hz = double.tryParse(top.value);
    return hz != null && hz >= 30 && hz <= 1000 ? hz : null;
  }

  void _suggestTop() {
    final toms = _toms;
    if (toms.isEmpty) return;
    top.value = rangeFor(
      toms.first.$1,
      toms.first.$2,
    ).medium.round().toString();
  }

  String _gapKey(int i) => '${_rows[i].id}>${_rows[i + 1].id}';

  int _gapAt(int i) => _gaps[_gapKey(i)] ?? sameSemitones;

  void _setSpacing(Spacing next) {
    // Carry the current pitches over, so switching modes never jumps.
    final current = _plan();
    if (next == Spacing.free && current != null) {
      for (final p in current) {
        _freeHz[p.id] = double.parse(p.hz.toStringAsFixed(1));
      }
    }
    if (next == Spacing.perGap && spacing == Spacing.same) {
      for (var i = 0; i + 1 < _rows.length; i++) {
        _gaps.putIfAbsent(_gapKey(i), () => sameSemitones);
      }
    }
    spacing = next;
    _build();
  }

  /// Rebuilds the rows: only when the toms or the spacing mode change.
  void _build() {
    _rows
      ..clear()
      ..addAll([for (final (t, d) in _toms) _PlanRow(t, d)]);
    out.replaceChildren();
    spacingHint.textContent = spacing.hint;
    intervalRow.hidden = spacing != Spacing.same;
    topRow.hidden = spacing == Spacing.free;

    for (var i = 0; i < _rows.length; i++) {
      final row = _rows[i];
      final name = _tomName(row.type, row.diameter);
      final tr = make('tr')
        ..appendChild(make('th', text: name)..setAttribute('scope', 'row'));
      row.pitchCell = make('td');
      if (spacing == Spacing.free) {
        final input = make('input') as Field
          ..setAttribute('type', 'number')
          ..setAttribute('min', '30')
          ..setAttribute('max', '1000')
          ..setAttribute('step', '0.1')
          ..setAttribute('inputmode', 'decimal')
          ..setAttribute('aria-label', 'Pitch for the $name tom, in hertz')
          ..className = 'plan-hz';
        input.value =
            (_freeHz[row.id] ?? rangeFor(row.type, row.diameter).medium)
                .toStringAsFixed(1);
        on(input, 'input', () {
          final hz = double.tryParse(input.value);
          if (hz != null) _freeHz[row.id] = hz;
          _refresh();
        });
        row.pitchInput = input;
        row.pitchCell.appendChild(input);
      }
      row.noteCell = make('td');
      row.gapCell = make('td');
      if (spacing == Spacing.perGap && i + 1 < _rows.length) {
        final next = _rows[i + 1];
        final select = make('select') as Field
          ..setAttribute(
            'aria-label',
            'Interval from the $name tom down to the ${_tomName(next.type, next.diameter)} tom',
          );
        _addOptions(select, [
          for (final iv in intervals) ('${iv.semitones}', iv.label),
        ]);
        select.value = '${_gapAt(i)}';
        final index = i;
        on(select, 'change', () {
          _gaps[_gapKey(index)] = int.tryParse(select.value) ?? 5;
          _refresh();
        });
        row.gapSelect = select;
        row.gapCell.appendChild(select);
      }
      row.checkCell = make('td');
      tr
        ..appendChild(row.pitchCell)
        ..appendChild(row.noteCell)
        ..appendChild(row.gapCell)
        ..appendChild(row.checkCell);
      out.appendChild(tr);
    }
    _refresh();
  }

  /// The plan for the current mode, or null while an entry is missing or
  /// out of bounds.
  List<PlannedDrum>? _plan() {
    final toms = _toms;
    if (toms.isEmpty) return null;
    switch (spacing) {
      case Spacing.same:
        final hz = _topHz;
        return hz == null ? null : planSame(toms, hz, sameSemitones);
      case Spacing.perGap:
        final hz = _topHz;
        if (hz == null || _rows.length != toms.length) return null;
        return planToms(toms, hz, [
          for (var i = 0; i + 1 < _rows.length; i++) _gapAt(i),
        ]);
      case Spacing.free:
        final hz = [
          for (final r in _rows)
            _freeHz[r.id] ?? rangeFor(r.type, r.diameter).medium,
        ];
        if (hz.any((h) => h < 30 || h > 1000)) return null;
        return planFree(toms, hz);
    }
  }

  /// Updates the numbers without touching the controls being used.
  void _refresh() {
    _save();
    final plan = _plan();
    if (plan == null) {
      for (final r in _rows) {
        if (r.pitchInput == null) r.pitchCell.textContent = '–';
        r.noteCell.textContent = '–';
        if (r.gapSelect == null) r.gapCell.textContent = '';
        r.checkCell
          ..textContent = ''
          ..className = '';
      }
      summary.textContent = _rows.isEmpty
          ? 'Pick at least one tom.'
          : spacing == Spacing.free
          ? 'Enter a pitch between 30 and 1000 Hz for every tom.'
          : 'Enter a pitch for your smallest tom, between 30 and 1000 Hz.';
      return;
    }
    final gaps = gapsBetween(plan);
    for (var i = 0; i < plan.length; i++) {
      final p = plan[i], r = _rows[i];
      if (r.pitchInput == null) r.pitchCell.textContent = '${_hz(p.hz)} Hz';
      r.noteCell.textContent = noteFor(p.hz).describe;
      if (r.gapSelect == null) {
        r.gapCell.textContent = i < gaps.length
            ? (gaps[i] < 0
                  ? '${describeInterval(gaps[i])} (next tom is higher)'
                  : describeInterval(gaps[i]))
            : '—';
      }
      r.checkCell
        ..className = p.fits ? 'fits' : 'outside'
        ..textContent = p.fits
            ? 'In range'
            : (p.hz > p.range.high ? 'Above range' : 'Below range');
    }
    final outside = plan.where((p) => !p.fits).length;
    final inverted = gaps.where((g) => g < 0).length;
    final parts = [
      outside == 0
          ? 'Every tom lands inside its starting range.'
          : '$outside ${outside == 1 ? 'tom lands' : 'toms land'} outside its starting range.',
      if (inverted > 0)
        '$inverted ${inverted == 1 ? 'larger tom is' : 'larger toms are'} tuned higher than the tom above.',
      if (outside > 0 && spacing != Spacing.free) _advice(plan),
    ];
    summary.textContent = parts.join(' ');
  }

  /// What to change when toms fall outside their ranges: lower toms that sit
  /// too high need wider intervals, ones that sit too low need narrower ones.
  String _advice(List<PlannedDrum> plan) {
    final lower = plan.skip(1);
    final tooHigh = lower.any((p) => p.hz > p.range.high);
    final tooLow = lower.any((p) => p.hz < p.range.low);
    if (tooHigh && !tooLow)
      return 'Try wider intervals, or a lower pitch on the smallest tom.';
    if (tooLow && !tooHigh)
      return 'Try narrower intervals, or a higher pitch on the smallest tom.';
    return 'Try a different pitch on the smallest tom, or adjust the intervals.';
  }

  void _restore() {
    Map<Object?, Object?> saved = {};
    try {
      final data = jsonDecode(loadText(_planKey) ?? '{}');
      if (data is Map) saved = data;
    } on FormatException {
      return;
    }
    if (saved['toms'] case final List toms) {
      final picked = <(DrumType, int)>{};
      for (final t in toms) {
        final parts = '$t'.split('-');
        if (parts.length != 2) continue;
        final type = DrumType.values
            .where((x) => x.name == parts[0])
            .firstOrNull;
        final d = int.tryParse(parts[1]);
        if (type != null && d != null && type.diameters.contains(d))
          picked.add((type, d));
      }
      if (picked.isNotEmpty) {
        _chosen
          ..clear()
          ..addAll(picked);
      }
    }
    spacing = Spacing.byName('${saved['spacing']}');
    if (saved['interval'] case final int n when n >= 1 && n <= 12)
      sameSemitones = n;
    if (saved['top'] case final num hz) top.value = hz.toString();
    if (saved['gaps'] case final Map gaps) {
      gaps.forEach((k, v) {
        if (v is int && v >= 1 && v <= 12) _gaps['$k'] = v;
      });
    }
    if (saved['free'] case final Map free) {
      free.forEach((k, v) {
        if (v is num) _freeHz['$k'] = v.toDouble();
      });
    }
  }

  void _save() => saveText(
    _planKey,
    jsonEncode({
      'toms': [for (final (t, d) in _chosen) '${t.name}-$d'],
      'spacing': spacing.name,
      'interval': sameSemitones,
      if (double.tryParse(top.value) case final hz?) 'top': hz,
      'gaps': _gaps,
      'free': _freeHz,
    }),
  );
}
