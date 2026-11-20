// Checks the rhythm, preset, pitch and tuning arithmetic with no packages to
// install:  dart run test/checks.dart   (from the dart/ folder)
import 'dart:io';
import 'dart:math' as math;

import 'package:drum_studio/pitch.dart';
import 'package:drum_studio/presets.dart';
import 'package:drum_studio/rhythm.dart';
import 'package:drum_studio/tuning_data.dart';

var failures = 0;

void check(String what, Object? got, Object? want) {
  // Lists compare by contents, not identity.
  if (got is List && want is List) {
    got = got.join(',');
    want = want.join(',');
  }
  if (got == want) return;
  failures++;
  stderr.writeln('FAIL $what: got $got, want $want');
}

void near(String what, double got, double want, [double tol = 1e-6]) {
  if ((got - want).abs() <= tol) return;
  failures++;
  stderr.writeln('FAIL $what: got $got, want $want ± $tol');
}

void main() {
  rhythm();
  trainers();
  sequencer();
  presets();
  pitch();
  tuning();
  if (failures > 0) {
    stderr.writeln('$failures check(s) failed.');
    exit(1);
  }
  print('All Drum Studio checks passed.');
}

void rhythm() {
  check('clamp low', clampBpm(5), 20);
  check('clamp high', clampBpm(999), 300);
  check('round', clampBpm(96.6), 97);
  check('level cycle', Level.mute.next, Level.accent);
  check('level byName fallback', Level.byName('x'), Level.normal);

  check('4/4 groups', Meter(4, 4).groups, [1, 1, 1, 1]);
  check('7/8 groups', Meter(7, 8).groups.join('+'), '2+2+3');
  check('5/8 groups', Meter(5, 8).groups.join('+'), '2+3');
  check('6/8 compound', Meter(6, 8).isCompound, true);
  check('12/8 groups', Meter(12, 8).groups.join('+'), '3+3+3+3');
  check('3/8 not compound', Meter(3, 8).isCompound, false);
  check('7/8 not compound', Meter(7, 8).isCompound, false);
  check('parse plain', Meter.tryParse('3/4')?.label, '3/4');
  check('compound label', Meter(12, 8).label, '12/8');
  check('compound summary', starterPresets()[3].summary, '72 BPM (dotted quarter) · 12/8');
  check('parse grouped', Meter.tryParse('7/8:3+2+2')?.label, '7/8 (3+2+2)');
  check('parse bad sum', Meter.tryParse('7/8:3+3'), null);
  check('parse bad unit', Meter.tryParse('4/5'), null);
  check('parse junk', Meter.tryParse('hello'), null);
  check('code round trip', Meter.tryParse(Meter(7, 8).code), Meter(7, 8));
  check('7/8 accents', Meter(7, 8).defaultLevels().map((l) => l.name[0]).join(),
      'agngngg');
  check('4/4 accents', Meter(4, 4).defaultLevels().map((l) => l.name[0]).join(),
      'annn');

  final g = Groove(bpm: 120);
  near('quarter at 120', g.cellSeconds, 0.5);
  g.sub = Subdivision.eighths;
  near('straight eighth', g.clickSeconds(0), 0.25);
  g.swing = 67;
  near('swung long', g.clickSeconds(0), 0.5 * 0.67);
  near('swung short', g.clickSeconds(1), 0.5 * 0.33);
  near('swing keeps beat', g.clickSeconds(0) + g.clickSeconds(1), 0.5);
  g.sub = Subdivision.triplets;
  near('triplets ignore swing', g.clickSeconds(1), 0.5 / 3);

  final c = Groove(bpm: 60, meter: Meter(6, 8))..dottedBeat = true;
  near('dotted quarter 6/8 cell', c.cellSeconds, 1 / 3);
  near('6/8 bar at dotted 60', c.barSeconds, 2);
  c.setMeter(Meter(4, 4));
  check('dotted cleared off compound', c.dottedBeat, false);
  check('levels follow meter', c.levels.length, 4);

  final keep = Groove(meter: Meter(7, 8))..levels[3] = Level.mute;
  keep.setMeter(Meter(7, 8));
  check('same meter keeps accents', keep.levels[3], Level.mute);

  final v = Groove()..levels[1] = Level.ghost..levels[2] = Level.mute;
  v.sub = Subdivision.sixteenths;
  check('voice accent', v.voiceAt(0, 0), Voice.accent);
  check('voice sub', v.voiceAt(0, 2), Voice.sub);
  check('voice ghost', v.voiceAt(1, 0), Voice.ghost);
  check('muted cell silent subs', v.voiceAt(2, 3), Voice.silent);

  check('marking', tempoMarking(120), 'Allegro');
  check('marking slow', tempoMarking(50), 'Largo');

  final taps = TapTempo();
  check('one tap', taps.tap(0), null);
  check('two taps', taps.tap(500), 120);
  check('long pause resets', taps.tap(5000), null);
  check('after reset', taps.tap(5600), 100);
}

void trainers() {
  final s = SpeedTrainer(enabled: true, step: 5, everyBars: 2, target: 110);
  check('speed bar 0', s.tempoFor(100, 0), 100);
  check('speed bar 1', s.tempoFor(100, 1), 100);
  check('speed bar 2', s.tempoFor(100, 2), 105);
  check('speed capped', s.tempoFor(100, 40), 110);
  final down = SpeedTrainer(enabled: true, step: -10, everyBars: 1, target: 60);
  check('slow down', down.tempoFor(100, 2), 80);
  check('slow down floor', down.tempoFor(100, 99), 60);
  check('speed off', SpeedTrainer().tempoFor(100, 99), 100);

  final gap = GapTrainer(enabled: true, playBars: 2, muteBars: 1);
  check('gap pattern', [for (var b = 0; b < 6; b++) gap.isMuted(b)],
      [false, false, true, false, false, true]);
  check('gap off', GapTrainer().isMuted(3), false);
}

void sequencer() {
  final g = Groove(bpm: 120, meter: Meter(3, 4), sub: Subdivision.eighths);
  final seq = Sequencer(g);
  final clicks = [for (var i = 0; i < 7; i++) seq.next()];
  check('first is accent', clicks[0].voice, Voice.accent);
  check('second is sub', clicks[1].voice, Voice.sub);
  check('beat 2', clicks[2].voice, Voice.normal);
  check('bar wraps', (clicks[6].bar, clicks[6].cell), (1, 0));
  near('time of bar 2', clicks[6].at, 1.5);

  // Speed trainer raises the tempo at the bar line.
  final g2 = Groove(bpm: 60, meter: Meter(2, 4));
  final s2 = Sequencer(g2,
      speed: SpeedTrainer(enabled: true, step: 60, everyBars: 1, target: 120));
  final t = [for (var i = 0; i < 5; i++) s2.next()];
  check('trainer bpm bar 0', t[1].bpm, 60);
  check('trainer bpm bar 1', t[2].bpm, 120);
  near('trainer timing', t[4].at, 1 + 1 + 0.5 + 0.5);
  check('trainer start kept', s2.startBpm, 60);
  // Moving the tempo by hand mid-run restarts the count at the next bar.
  g2.bpm = 90;
  s2.retempo();
  final after = [for (var i = 0; i < 4; i++) s2.next().bpm];
  check('retempo restarts trainer', after, [90, 90, 90, 120]);

  // Gap trainer silences whole bars but keeps the timing.
  final g3 = Groove(bpm: 60, meter: Meter(1, 4));
  final s3 = Sequencer(g3, gap: GapTrainer(enabled: true, playBars: 1, muteBars: 1));
  final gv = [for (var i = 0; i < 4; i++) s3.next().voice];
  check('gap voices', gv, [Voice.accent, Voice.silent, Voice.accent, Voice.silent]);

  // Shrinking the meter mid-bar never indexes past the end.
  final g4 = Groove(meter: Meter(7, 8));
  final s4 = Sequencer(g4);
  for (var i = 0; i < 5; i++) {
    s4.next();
  }
  g4.setMeter(Meter(3, 4));
  check('shrink wraps to new bar', s4.next().cell, 0);
}

void presets() {
  final g = Groove(bpm: 72, meter: Meter(12, 8), sub: Subdivision.none)
    ..dottedBeat = true;
  g.levels[4] = Level.mute;
  final p = Preset.of('  Slow   shuffle ', g);
  final back = decodePresets(encodePresets([p]));
  check('round trip count', back.length, 1);
  check('name cleaned', back.single.name, 'Slow shuffle');
  check('clean name', Preset.cleanName('  Slow   shuffle '), 'Slow shuffle');
  check('meter kept', back.single.meter, Meter(12, 8));
  check('levels kept', back.single.levels[4], Level.mute);
  check('dotted kept', back.single.dottedBeat, true);

  final g2 = Groove();
  back.single.applyTo(g2);
  check('apply bpm', g2.bpm, 72);
  near('apply dotted', g2.cellSeconds, 60 / 72 / 3);

  check('junk json', decodePresets('{not json'), <Preset>[]);
  check('wrong shape', decodePresets('{"a":1}'), <Preset>[]);
  final mixed = decodePresets(
      '[{"name":"ok","bpm":999,"meter":"4/4"},{"name":"","bpm":1},5,'
      '{"name":"bad meter","bpm":90,"meter":"4/5"},'
      '{"name":"short levels","bpm":90,"meter":"3/4","levels":["mute"],"swing":99}]');
  check('skips bad entries', mixed.map((p) => p.name).toList(), ['ok', 'short levels']);
  check('clamps bpm', mixed.first.bpm, 300);
  check('fixes levels', mixed.last.levels.length, 3);
  check('clamps swing', mixed.last.swing, 75);

  final list = upsert(upsert([], p), Preset.of('SLOW   SHUFFLE  ', Groove(bpm: 80)));
  check('upsert replaces by name', list.length, 1);
  final cleaned = upsert([Preset.of('Groove', Groove())], Preset.of('groove', Groove(bpm: 50)));
  check('upsert ignores case', (cleaned.length, cleaned.first.bpm), (1, 50));

  check('starter presets parse', starterPresets().length, 7);
  check('summary', starterPresets()[2].summary, '140 BPM · 4/4 · Eighth notes · swing 67%');
}

void pitch() {
  check('A4', noteFor(440).describe, 'A4 in tune');
  check('A2 flat', noteFor(110 * math.pow(2, -12 / 1200).toDouble()).describe, 'A2 −12¢');
  check('middle C', noteFor(261.63).label, 'C4');
  check('sharp name', noteFor(hzFor(61)).label, 'C♯4');
  near('hzFor A3', hzFor(57), 220, 1e-9);
  near('octave cents', centsBetween(100, 200), 1200, 1e-9);
  near('shift fourth down', shift(200, -5), 200 / math.pow(2, 5 / 12), 1e-9);
  near('rms', rms([1, -1, 1, -1]), 1);

  // A synthetic spectrum: noise floor plus a peak between bins.
  const sampleRate = 48000.0, fftSize = 8192;
  const binHz = sampleRate / fftSize;
  const trueHz = 147.3;
  final db = List<double>.generate(fftSize ~/ 2, (i) {
    final d = (i * binHz - trueHz) / binHz;
    return -90 + 70 * math.exp(-d * d / 2);
  });
  final found = peakHz(db, sampleRate: sampleRate, fftSize: fftSize)!;
  near('peak between bins', found, trueHz, binHz * 0.1);
  check('quiet spectrum', peakHz(List.filled(4096, -90.0),
      sampleRate: sampleRate, fftSize: fftSize), null);
  check('peak outside band', peakHz(db, sampleRate: sampleRate, fftSize: fftSize,
      minHz: 400, maxHz: 900), null);

  // A hit: quiet, a jump, a ring at ~200 Hz, then decay.
  final hits = HitTracker();
  double? reading;
  for (var t = 0.0; t < 600; t += 16) {
    final level = t < 100 ? 0.002 : (t < 400 ? 0.2 * math.exp(-(t - 100) / 150) : 0.001);
    final hz = t >= 100 && t < 400 ? 200 + (t % 32 == 0 ? 0.6 : -0.4) : null;
    reading ??= hits.feed(level: level, hz: hz, nowMs: t);
  }
  check('hit read', reading != null, true);
  near('hit pitch', reading ?? 0, 200, 1);

  final lugs = LugCheck([200, 201, 199.5, 200.4]);
  check('even lugs', lugs.isEven, true);
  check('no worst', lugs.worst, null);
  final off = LugCheck([200, 201, 192, 200.4]);
  check('uneven lugs', off.isEven, false);
  check('worst lug', off.worst, 2);
}

void tuning() {
  final sourced = rangeFor(DrumType.floorTom, 16);
  check('sourced range', (sourced.low, sourced.high, sourced.scaledFrom), (65.0, 100.0, null));
  final scaled = rangeFor(DrumType.snare, 12);
  check('scaled from 14', scaled.scaledFrom, 14);
  check('scaled values', (scaled.low, scaled.high), (198.0, 292.0));
  near('medium is geometric', sourced.medium, math.sqrt(6500));
  near('position low', sourced.position(65), 0);
  near('position high', sourced.position(100), 1);
  check('every size has a range', [
    for (final t in DrumType.values)
      for (final d in t.diameters) rangeFor(t, d).low > 0,
  ].every((ok) => ok), true);
  check('every material cited', materials.every((m) =>
      m.sources.isNotEmpty && m.sources.every(sources.containsKey)), true);
  check('every head cited', [...batterHeads, ...resoHeads, ...relations.map((r) =>
      Head(r.id, r.label, r.sound, r.sources))].every((h) =>
      h.sources.every(sources.containsKey)), true);
  check('11 materials', materials.length, 11);

  final plan = planSame([(DrumType.floorTom, 16), (DrumType.rackTom, 10), (DrumType.rackTom, 12)], 180, 5);
  check('plan order', plan.map((p) => p.diameter).toList(), [10, 12, 16]);
  near('plan step', plan[1].hz, shift(180, -5), 1e-9);
  check('plan fits', plan.map((p) => p.fits).toList(), [true, true, false]);
  // Interval names, including in-between and compound ones.
  check('12 intervals', intervals.length, 12);
  check('interval label', intervals[4].label, 'Perfect fourth (5 semitones)');
  check('interval 1 label', intervals.first.label, 'Minor second (1 semitone)');
  check('name 5', describeInterval(5), 'Perfect fourth');
  check('name 5.12', describeInterval(5.12), 'Perfect fourth +12¢');
  check('name 6.9', describeInterval(6.9), 'Perfect fifth −10¢');
  check('name unison', describeInterval(0.01), 'Unison');
  check('name compound', describeInterval(19), 'Octave + perfect fifth');
  check('name two octaves', describeInterval(24), '2 octaves');
  check('name ignores sign', describeInterval(-3), 'Minor third');
  check('spacing byName', Spacing.byName('free'), Spacing.free);
  check('spacing fallback', Spacing.byName('x'), Spacing.same);

  // Custom gaps: a fourth then a fifth adds up to an octave.
  final toms3 = [(DrumType.floorTom, 16), (DrumType.rackTom, 10), (DrumType.rackTom, 12)];
  final custom = planToms(toms3, 180, [5, 7]);
  near('custom gap 1', custom[1].hz, shift(180, -5), 1e-9);
  near('custom gap 2 = octave', custom[2].hz, 90, 1e-9);
  check('custom ids', custom.map((p) => p.id).toList(), ['rackTom-10', 'rackTom-12', 'floorTom-16']);
  near('missing gaps repeat the last', planToms(toms3, 180, [3])[2].hz, shift(180, -6), 1e-9);
  near('no gaps means a fourth', planToms(toms3, 180, [])[1].hz, shift(180, -5), 1e-9);
  check('same matches custom', planSame(toms3, 180, 4).map((p) => p.hz).toList(),
      planToms(toms3, 180, [4, 4]).map((p) => p.hz).toList());
  check('one tom, no gaps', planSame([(DrumType.rackTom, 10)], 150, 5).length, 1);

  // Free tuning: report what the gaps turn out to be.
  final free = planFree(toms3, [160, 120, 125]);
  final gaps = gapsBetween(free);
  check('free order', free.map((p) => p.diameter).toList(), [10, 12, 16]);
  check('free gap names', gaps.map(describeInterval).toList(), ['Perfect fourth', 'Minor second −29¢']);
  check('inverted gap is negative', gaps[1] < 0, true);
  check('free fits', free.map((p) => p.fits).toList(), [true, true, false]);

  check('depth note shallow', depthNote(DrumType.snare, 3.5).startsWith('Shallower'), true);
  check('depth note typical', depthNote(DrumType.snare, 5).startsWith('A common'), true);
}
