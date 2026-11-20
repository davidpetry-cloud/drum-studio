// Drum Studio metronome (index.html). Compiled to ../../js/metronome.js by
// build.sh. The controls stay hidden unless this runs and the browser can
// make sound, so the page never shows buttons that do nothing.
//
// Timing follows the Web Audio "lookahead" pattern: a short timer schedules
// clicks a little ahead on the audio clock, which is steady, while the beat
// lights follow along on animation frames.
import 'dart:convert';
import 'dart:js_interop';
import 'dart:js_interop_unsafe';
import 'dart:math' as math;

import 'package:drum_studio/presets.dart';
import 'package:drum_studio/rhythm.dart';

import 'dom.dart';

void main() {
  wireThemeToggle();
  registerServiceWorker();
  final panel = document.getElementById('metro');
  if (panel == null) return;
  if (!hasAudio) {
    document.getElementById('no-audio')?.hidden = false;
    return;
  }
  Metronome().wire();
  panel.hidden = false;
}

const _lastKey = 'ds-last';
const _presetsKey = 'ds-presets';
const _prefsKey = 'ds-prefs';

class Metronome {
  final groove = Groove();
  final speed = SpeedTrainer();
  final gap = GapTrainer();
  late final seq = Sequencer(groove, speed: speed, gap: gap);

  // Controls
  final Field bpmInput = el('bpm');
  final Field bpmRange = el('bpm-range');
  final Element tempoUnit = el('tempo-unit');
  final Element tempoWord = el('tempo-word');
  final Element startButton = el('start');
  final Element flash = el('flash');
  final Element position = el('position');
  final Element grid = el('grid');
  final Field beatsSelect = el('meter-beats');
  final Field unitSelect = el('meter-unit');
  final Field groupsSelect = el('meter-groups');
  final Element groupsRow = el('groups-row');
  final Element quick = el('meter-quick');
  final Element dottedRow = el('dotted-row');
  final Field dottedBox = el('dotted');
  final Field subSelect = el('sub');
  final Element swingRow = el('swing-row');
  final Field swingRange = el('swing');
  final Element swingOut = el('swing-out');
  final Field soundSelect = el('sound');
  final Field volumeRange = el('volume');
  final Field subVolumeRange = el('sub-volume');
  final Element vibrateRow = el('vibrate-row');
  final Field vibrateBox = el('vibrate');
  final Field bigFlashBox = el('big-flash');
  final Element status = el('status');
  final Element myList = el('my-presets');
  final Element myEmpty = el('presets-empty');
  final Element starterList = el('starter-presets');
  final Field presetName = el('preset-name');

  // Sound preferences
  String sound = 'wood';
  double volume = 0.8;
  double subVolume = 0.6;
  bool haptics = false;
  bool bigFlash = false;

  // Audio state
  AudioContext? _ctx;
  GainNode? _out;
  AudioBuffer? _noise;
  bool _running = false;
  double _offset = 0; // audio time of the run's start
  Click? _pending;
  int? _timer;
  int? _frame;
  int? _flashTimer;
  final _queue = <(double, Click)>[];
  final _cells = <Element>[];
  int _shownBpm = -1;

  final _taps = TapTempo();
  int? _tapTimer;
  int? _sayTimer;
  final _wake = WakeLock();
  List<Preset> _presets = [];

  late final JSFunction _tickJs = _tick.toJS;
  late final JSFunction _drawJs = _draw.toJS;

  // ---- Setup --------------------------------------------------------------

  void wire() {
    _restore();
    _fillSelects();
    _buildQuickMeters();

    on(bpmRange, 'input', () => _setBpm(_int(bpmRange.value) ?? groove.bpm));
    on(bpmInput, 'input', () {
      final n = _int(bpmInput.value);
      if (n != null && n >= minBpm && n <= maxBpm) _setBpm(n, keepTyping: true);
    });
    on(bpmInput, 'change', () => _setBpm(_int(bpmInput.value) ?? groove.bpm));
    onId('bpm-down', 'click', () => _nudge(-1));
    onId('bpm-up', 'click', () => _nudge(1));
    onId('bpm-down-5', 'click', () => _nudge(-5));
    onId('bpm-up-5', 'click', () => _nudge(5));
    on(startButton, 'click', toggle);
    onId('tap', 'click', _tap);

    on(beatsSelect, 'change', _meterFromSelects);
    on(unitSelect, 'change', _meterFromSelects);
    on(groupsSelect, 'change', () {
      final m = Meter.tryParse(groupsSelect.value);
      if (m != null) _setMeter(m);
    });
    on(dottedBox, 'change', () {
      groove.dottedBeat = dottedBox.checked;
      _showTempo();
      _save();
    });
    onId('reset-accents', 'click', () {
      groove.levels = groove.meter.defaultLevels();
      _buildGrid();
      _save();
      _say('Accents reset.');
    });

    on(subSelect, 'change', () {
      groove.sub = Subdivision.byName(subSelect.value);
      _showSwing();
      _save();
    });
    on(swingRange, 'input', () {
      groove.swing = _int(swingRange.value) ?? 50;
      _showSwing();
      _save();
    });

    on(soundSelect, 'change', () {
      sound = soundSelect.value;
      _savePrefs();
      if (!_running) _preview();
    });
    on(volumeRange, 'input', () {
      volume = (_int(volumeRange.value) ?? 80) / 100;
      _out?.gain.value = volume;
      _savePrefs();
    });
    on(subVolumeRange, 'input', () {
      subVolume = (_int(subVolumeRange.value) ?? 60) / 100;
      _savePrefs();
    });
    if (canVibrate) {
      vibrateRow.hidden = false;
      on(vibrateBox, 'change', () {
        haptics = vibrateBox.checked;
        _savePrefs();
      });
    }
    on(bigFlashBox, 'change', () {
      bigFlash = bigFlashBox.checked;
      _savePrefs();
    });

    _wireTrainers();
    _wirePresets();
    _wireKeys();
    document.addEventListener(
      'visibilitychange',
      ((JSAny? _) {
        if (!document.hidden && _running && _wake.wanted) _wake.acquire();
      }).toJS,
    );

    _showAll();
  }

  void _fillSelects() {
    for (var n = 1; n <= Meter.maxBeats; n++) {
      beatsSelect.appendChild(make('option', text: '$n')..setAttribute('value', '$n'));
    }
    for (final u in Meter.units) {
      unitSelect.appendChild(make('option', text: '$u')..setAttribute('value', '$u'));
    }
    for (final s in Subdivision.values) {
      subSelect.appendChild(make('option', text: s.label)..setAttribute('value', s.name));
    }
  }

  void _buildQuickMeters() {
    for (final code in ['4/4', '3/4', '2/4', '5/4', '6/8', '7/8', '9/8', '12/8']) {
      final b = make('button', cls: 'chip', text: code)
        ..setAttribute('type', 'button')
        ..setAttribute('aria-label', 'Time signature $code');
      on(b, 'click', () {
        _setMeter(Meter.tryParse(code)!);
        _say('Time signature ${Meter.tryParse(code)!.label}.');
      });
      quick.appendChild(b);
    }
  }

  // ---- Tempo ----------------------------------------------------------------

  int? _int(String text) => num.tryParse(text.trim())?.round();

  void _nudge(int by) => _setBpm(groove.bpm + by);

  void _setBpm(num value, {bool keepTyping = false}) {
    groove.bpm = clampBpm(value);
    seq.retempo();
    _showTempo(keepTyping: keepTyping);
    _save();
  }

  void _showTempo({bool keepTyping = false}) {
    final bpm = groove.bpm;
    _shownBpm = bpm;
    bpmRange.value = '$bpm';
    if (!keepTyping) bpmInput.value = '$bpm';
    tempoWord.textContent = tempoMarking(bpm);
    final unit = groove.dottedBeat && groove.meter.isCompound
        ? 'dotted quarter'
        : switch (groove.meter.unit) {
            2 => 'half note',
            4 => 'quarter note',
            8 => 'eighth note',
            _ => 'sixteenth note',
          };
    tempoUnit.textContent = 'Beats per minute, counting each $unit';
  }

  void _tap() {
    final tempo = _taps.tap(performance.now());
    if (_tapTimer case final id?) clearTimeout(id);
    if (tempo == null) {
      _say('Tap again in time with the beat.');
      return;
    }
    _setBpm(tempo);
    // Announce once the tapping settles, not on every tap.
    _tapTimer = setTimeout((() => _say('Tempo set to ${groove.bpm} BPM.')).toJS, 900);
  }

  // ---- Meter and accents ----------------------------------------------------------

  void _meterFromSelects() {
    final beats = _int(beatsSelect.value) ?? 4;
    final unit = _int(unitSelect.value) ?? 4;
    _setMeter(Meter(beats, unit));
  }

  void _setMeter(Meter m) {
    groove.setMeter(m);
    _showMeter();
    _buildGrid();
    _showTempo();
    _save();
  }

  void _showMeter() {
    final m = groove.meter;
    beatsSelect.value = '${m.beats}';
    unitSelect.value = '${m.unit}';
    final options = groupings(m.beats, m.unit);
    groupsRow.hidden = options.length < 2;
    groupsSelect.replaceChildren();
    for (final g in options) {
      groupsSelect.appendChild(
        make('option', text: g.groups.every((x) => x == 1) ? 'Every beat' : g.groups.join(' + '))
          ..setAttribute('value', g.code),
      );
    }
    groupsSelect.value = m.code;
    dottedRow.hidden = !m.isCompound;
    dottedBox.checked = groove.dottedBeat;
    for (final chip in _children(quick)) {
      chip.setAttribute('aria-pressed', '${chip.textContent == m.name && m.code == Meter.tryParse(m.name)?.code}');
    }
  }

  void _buildGrid() {
    grid.replaceChildren();
    _cells.clear();
    final starts = groove.meter.groupStarts.toSet();
    final grouped = !groove.meter.groups.every((g) => g == 1);
    for (var i = 0; i < groove.meter.beats; i++) {
      final cell = make('button', cls: 'cell')..setAttribute('type', 'button');
      if (grouped && starts.contains(i) && i > 0) cell.classList.add('group-start');
      cell
        ..appendChild(make('span', cls: 'cell-num', text: '${i + 1}'))
        ..appendChild(make('span', cls: 'cell-mark')..setAttribute('aria-hidden', 'true'))
        ..appendChild(make('span', cls: 'cell-level'));
      final index = i;
      on(cell, 'click', () {
        groove.levels[index] = groove.levels[index].next;
        _paintCell(index);
        _save();
        _say('Beat ${index + 1}: ${groove.levels[index].label}.');
      });
      grid.appendChild(cell);
      _cells.add(cell);
      _paintCell(i);
    }
    _light(null);
  }

  void _paintCell(int i) {
    final level = groove.levels[i];
    final cell = _cells[i];
    for (final l in Level.values) {
      cell.classList.toggle('lv-${l.name}', l == level);
    }
    _children(cell)[2].textContent = level.label;
    cell.setAttribute('aria-label', 'Beat ${i + 1}, ${level.label}. Press to change.');
  }

  // ---- Subdivision and swing ------------------------------------------------

  void _showSwing() {
    subSelect.value = groove.sub.name;
    swingRow.hidden = !groove.sub.canSwing;
    swingRange.value = '${groove.swing}';
    swingOut.textContent = switch (groove.swing) {
      50 => 'Straight (50%)',
      >= 66 && <= 68 => 'Triplet swing (${groove.swing}%)',
      75 => 'Dotted feel (75%)',
      final s => '$s%',
    };
  }

  // ---- Trainers -------------------------------------------------------------

  void _wireTrainers() {
    final Field speedOn = el('speed-on'), step = el('speed-step'),
        every = el('speed-every'), target = el('speed-target');
    final Field gapOn = el('gap-on'), play = el('gap-play'), mute = el('gap-mute');
    void read() {
      speed
        ..enabled = speedOn.checked
        ..step = (_int(step.value) ?? 4).clamp(-50, 50)
        ..everyBars = (_int(every.value) ?? 4).clamp(1, 64)
        ..target = clampBpm(_int(target.value) ?? 140);
      gap
        ..enabled = gapOn.checked
        ..playBars = (_int(play.value) ?? 2).clamp(1, 64)
        ..muteBars = (_int(mute.value) ?? 2).clamp(1, 64);
      seq.retempo();
    }

    for (final f in [speedOn, step, every, target, gapOn, play, mute]) {
      on(f, 'change', read);
    }
    read();
  }

  // ---- Presets ----------------------------------------------------------------

  void _wirePresets() {
    _presets = decodePresets(loadText(_presetsKey));
    el<Element>('preset-form').addEventListener(
      'submit',
      ((Event e) {
        e.preventDefault();
        _savePreset();
      }).toJS,
    );
    for (final p in starterPresets()) {
      starterList.appendChild(_presetRow(p, starter: true));
    }
    _showPresets();
  }

  void _savePreset() {
    var name = Preset.cleanName(presetName.value);
    if (name.isEmpty) {
      name = '${groove.bpm} BPM ${groove.meter.label}';
    }
    final replacing = _presets.any((p) => p.name.toLowerCase() == name.toLowerCase());
    _presets = upsert(_presets, Preset.of(name, groove));
    saveText(_presetsKey, encodePresets(_presets));
    presetName.value = '';
    _showPresets();
    _say(replacing ? 'Updated “$name”.' : 'Saved “$name”.');
  }

  void _showPresets() {
    myList.replaceChildren();
    for (final p in _presets) {
      myList.appendChild(_presetRow(p));
    }
    myEmpty.hidden = _presets.isNotEmpty;
  }

  Element _presetRow(Preset p, {bool starter = false}) {
    final row = make('li', cls: 'preset');
    final load = make('button', cls: 'preset-load')
      ..setAttribute('type', 'button')
      ..appendChild(make('span', cls: 'preset-name', text: p.name))
      ..appendChild(make('span', cls: 'preset-sum', text: p.summary));
    on(load, 'click', () {
      p.applyTo(groove);
      seq.retempo();
      _showAll();
      _save();
      _say('Loaded “${p.name}”: ${p.summary}.');
    });
    row.appendChild(load);
    if (!starter) {
      final del = make('button', cls: 'preset-del', text: '×')
        ..setAttribute('type', 'button')
        ..setAttribute('aria-label', 'Delete “${p.name}”');
      on(del, 'click', () {
        _presets = [for (final q in _presets) if (q.name != p.name) q];
        saveText(_presetsKey, encodePresets(_presets));
        _showPresets();
        _say('Deleted “${p.name}”.');
        presetName.focus();
      });
      row.appendChild(del);
    }
    return row;
  }

  // ---- Remembering settings ---------------------------------------------------

  void _restore() {
    final last = decodePresets(loadText(_lastKey));
    if (last.isNotEmpty) last.first.applyTo(groove);
    try {
      final prefs = jsonDecode(loadText(_prefsKey) ?? '{}');
      if (prefs is Map) {
        if (prefs['sound'] case final String s when _sounds.contains(s)) sound = s;
        if (prefs['volume'] case final num v) volume = v.clamp(0, 1).toDouble();
        if (prefs['subVolume'] case final num v) subVolume = v.clamp(0, 1).toDouble();
        haptics = prefs['haptics'] == true;
        bigFlash = prefs['bigFlash'] == true;
      }
    } on FormatException {
      // Ignore unreadable preferences.
    }
  }

  void _save() => saveText(_lastKey, encodePresets([Preset.of('last', groove)]));

  void _savePrefs() => saveText(
    _prefsKey,
    jsonEncode({
      'sound': sound,
      'volume': volume,
      'subVolume': subVolume,
      'haptics': haptics,
      'bigFlash': bigFlash,
    }),
  );

  void _showAll() {
    _showMeter();
    _buildGrid();
    _showSwing();
    _showTempo();
    soundSelect.value = sound;
    volumeRange.value = '${(volume * 100).round()}';
    subVolumeRange.value = '${(subVolume * 100).round()}';
    vibrateBox.checked = haptics;
    bigFlashBox.checked = bigFlash;
  }

  // ---- Keyboard -----------------------------------------------------------------

  void _wireKeys() {
    document.addEventListener(
      'keydown',
      ((KeyEvent e) {
        if (e.ctrlKey || e.metaKey || e.altKey) return;
        final tag = e.target?.tagName ?? '';
        final typing = tag == 'INPUT' || tag == 'SELECT' || tag == 'TEXTAREA';
        final onControl = typing || tag == 'BUTTON' || tag == 'A' || tag == 'SUMMARY';
        switch (e.key) {
          case ' ' when !onControl:
            e.preventDefault();
            toggle();
          case 'ArrowUp' when !typing:
            e.preventDefault();
            _nudge(e.shiftKey ? 10 : 1);
            _sayLater('${groove.bpm} BPM');
          case 'ArrowDown' when !typing:
            e.preventDefault();
            _nudge(e.shiftKey ? -10 : -1);
            _sayLater('${groove.bpm} BPM');
          case 't' || 'T' when !typing && !e.repeat:
            _tap();
        }
      }).toJS,
    );
  }

  // ---- Playing ------------------------------------------------------------------

  void toggle() => _running ? _stop() : _start();

  void _start() {
    final ctx = _ctx ??= AudioContext();
    playThroughSilentMode();
    ctx.resume();
    _out = ctx.createGain()..connect(ctx.destination);
    _out!.gain.value = volume;
    _running = true;
    seq.reset();
    _queue.clear();
    _pending = null;
    _offset = ctx.currentTime + 0.08;
    _tick();
    _timer = setInterval(_tickJs, 25);
    _frame = requestAnimationFrame(_drawJs);
    startButton
      ..textContent = 'Stop'
      ..setAttribute('aria-pressed', 'true')
      ..classList.toggle('is-running', true);
    _wake.acquire();
    _say('Playing at ${groove.bpm} BPM, ${groove.meter.label}.');
  }

  void _stop() {
    _running = false;
    if (_timer case final id?) clearInterval(id);
    if (_frame case final id?) cancelAnimationFrame(id);
    // Cutting the output silences clicks already scheduled ahead.
    _out?.disconnect();
    _out = null;
    _ctx?.suspend();
    _queue.clear();
    _wake.release();
    final reached = groove.bpm;
    // Go back to where a speed run started.
    if (speed.enabled) groove.bpm = seq.startBpm;
    _light(null);
    startButton
      ..textContent = 'Start'
      ..setAttribute('aria-pressed', 'false')
      ..classList.toggle('is-running', false);
    _showTempo();
    _say(speed.enabled ? 'Stopped. You reached $reached BPM.' : 'Stopped.');
  }

  void _tick() {
    final ctx = _ctx, out = _out;
    if (!_running || ctx == null || out == null) return;
    // Timers slow down in background tabs, so look further ahead there.
    final ahead = document.hidden ? 1.5 : 0.12;
    while (true) {
      final click = _pending ?? seq.next();
      var at = _offset + click.at;
      // After a stall, skip forward instead of firing a burst of late clicks.
      if (at < ctx.currentTime) {
        _offset += ctx.currentTime + 0.05 - at;
        at = _offset + click.at;
      }
      if (at >= ctx.currentTime + ahead) {
        _pending = click;
        break;
      }
      _pending = null;
      _play(ctx, out, click.voice, at);
      _queue.add((at, click));
    }
    while (_queue.length > 128) {
      _queue.removeAt(0);
    }
  }

  // ---- Sounds -------------------------------------------------------------------

  static const _sounds = ['wood', 'beep', 'stick'];

  void _preview() {
    final ctx = _ctx ??= AudioContext();
    playThroughSilentMode();
    ctx.resume();
    final out = ctx.createGain()..connect(ctx.destination);
    out.gain.value = volume;
    final t = ctx.currentTime + 0.05;
    _play(ctx, out, Voice.accent, t);
    _play(ctx, out, Voice.normal, t + 0.25);
  }

  void _play(AudioContext ctx, AudioNode out, Voice voice, double at) {
    final level = switch (voice) {
      Voice.accent => 1.0,
      Voice.normal => 0.6,
      Voice.ghost => 0.24,
      Voice.sub => 0.36 * subVolume,
      Voice.silent => 0.0,
    };
    if (level < 0.005) return;
    final high = voice == Voice.accent;
    final low = voice == Voice.sub;
    switch (sound) {
      case 'beep':
        _tone(ctx, out, 'sine', high ? 1760 : (low ? 880 : 1320), level, at, 0.05);
      case 'stick':
        _noiseHit(ctx, out, high ? 3200 : (low ? 1800 : 2500), level * 1.4, at);
      default: // wood
        final pitch = high ? 1250.0 : (low ? 760.0 : 950.0);
        final band = ctx.createBiquadFilter()
          ..type = 'bandpass'
          ..connect(out);
        band.frequency.value = pitch;
        band.Q.value = 6;
        _tone(ctx, band, 'triangle', pitch, level * 2.2, at, 0.04);
        _noiseHit(ctx, out, pitch * 2, level * 0.25, at);
    }
  }

  void _tone(AudioContext ctx, AudioNode out, String type, double hz, double level,
      double at, double length) {
    final osc = ctx.createOscillator()..type = type;
    final env = ctx.createGain();
    osc.frequency.value = hz;
    env.gain
      ..setValueAtTime(level, at)
      ..exponentialRampToValueAtTime(0.0001, at + length);
    osc.connect(env).connect(out);
    osc
      ..start(at)
      ..stop(at + length + 0.01);
  }

  void _noiseHit(AudioContext ctx, AudioNode out, double hz, double level, double at) {
    final buffer = _noise ??= _makeNoise(ctx);
    final src = ctx.createBufferSource()..buffer = buffer;
    final band = ctx.createBiquadFilter()..type = 'bandpass';
    band.frequency.value = hz;
    band.Q.value = 1.5;
    final env = ctx.createGain();
    env.gain
      ..setValueAtTime(level, at)
      ..exponentialRampToValueAtTime(0.0001, at + 0.03);
    src.connect(band).connect(env).connect(out);
    src
      ..start(at)
      ..stop(at + 0.04);
  }

  AudioBuffer _makeNoise(AudioContext ctx) {
    final length = (ctx.sampleRate * 0.05).round();
    final buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    final data = buffer.getChannelData(0).toDart;
    final rnd = math.Random(7);
    for (var i = 0; i < length; i++) {
      data[i] = rnd.nextDouble() * 2 - 1;
    }
    return buffer;
  }

  // ---- Visuals ------------------------------------------------------------------

  void _draw(double _) {
    final ctx = _ctx;
    if (!_running || ctx == null) return;
    Click? due;
    while (_queue.isNotEmpty && _queue.first.$1 <= ctx.currentTime) {
      final click = _queue.removeAt(0).$2;
      if (click.sub == 0) due = click;
    }
    if (due != null) _light(due);
    _frame = requestAnimationFrame(_drawJs);
  }

  /// Lights one beat (or none) and writes where we are in words.
  void _light(Click? click) {
    final cell = click?.cell ?? -1;
    if (click == null) {
      for (final c in _cells) {
        c.classList.toggle('is-on', false);
      }
      flash.className = 'flash';
      position.textContent = 'Not playing';
      return;
    }
    for (var i = 0; i < _cells.length; i++) {
      _cells[i].classList.toggle('is-on', i == cell);
    }
    final silentBar = gap.isMuted(click.bar);
    position.textContent = silentBar
        ? 'Bar ${click.bar + 1} · silent: keep the time going'
        : 'Bar ${click.bar + 1} · Beat ${cell + 1} of ${groove.meter.beats}';
    final kind = switch (click.voice) {
      Voice.accent => 'is-accent',
      Voice.normal || Voice.sub => 'is-normal',
      Voice.ghost => 'is-ghost',
      Voice.silent => 'is-silent',
    };
    flash.className = 'flash $kind${bigFlash && click.voice != Voice.silent ? ' is-big' : ''}';
    if (_flashTimer case final id?) clearTimeout(id);
    _flashTimer = setTimeout((() => flash.classList.add('is-fading')).toJS, 90);
    if (haptics && click.voice != Voice.silent) {
      vibrate(click.voice == Voice.accent ? 45 : 20);
    }
    // The speed trainer moves the tempo; follow it unless someone is typing.
    if (click.bpm != _shownBpm && document.activeElement != bpmInput) {
      _showTempo();
    }
  }

  // ---- Announcements ------------------------------------------------------------

  void _say(String message) => status.textContent = message;

  void _sayLater(String message) {
    if (_sayTimer case final id?) clearTimeout(id);
    _sayTimer = setTimeout((() => _say(message)).toJS, 600);
  }
}

List<Element> _children(Element e) {
  final list = (e as JSObject)['children'] as JSObject;
  final n = (list['length'] as JSNumber).toDartInt;
  return [for (var i = 0; i < n; i++) list.callMethod<Element>('item'.toJS, i.toJS)];
}

/// The groupings offered for a meter: the default first, then other ways to
/// split it into twos and threes, then one per beat.
List<Meter> groupings(int beats, int unit) {
  final plain = Meter(beats, unit, List.filled(beats, 1));
  if (unit < 8 || beats < 4) return [Meter(beats, unit)];
  final out = <String>{};
  void build(int left, List<int> acc) {
    if (out.length >= 12) return;
    if (left == 0) {
      out.add(acc.join('+'));
      return;
    }
    for (final g in [2, 3]) {
      if (g <= left && left - g != 1) build(left - g, [...acc, g]);
    }
  }

  build(beats, []);
  final first = Meter(beats, unit);
  return [
    first,
    for (final code in out)
      if (code != first.groups.join('+'))
        Meter(beats, unit, [for (final s in code.split('+')) int.parse(s)]),
    plain,
  ];
}
