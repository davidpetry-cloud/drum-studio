/// Pitch arithmetic for the drum tuner: note names, finding the strongest
/// peak in a spectrum, picking one reading per drum hit, and comparing lugs.
/// No browser APIs here, so it runs (and is checked) on the command line.
library;

import 'dart:math' as math;

const noteNames = [
  'C',
  'C♯',
  'D',
  'D♯',
  'E',
  'F',
  'F♯',
  'G',
  'G♯',
  'A',
  'A♯',
  'B',
];

/// A frequency described as the nearest note plus how far off it is.
class Note {
  const Note(this.midi, this.cents);

  /// MIDI number of the nearest note (A4 = 69).
  final int midi;

  /// -50 to +50: how far the frequency sits from that note.
  final int cents;

  String get name => noteNames[midi % 12];
  int get octave => midi ~/ 12 - 1;
  String get label => '$name$octave';

  /// "A2 −12¢", "D3 +4¢", "E2 in tune" (within 2 cents).
  String get describe {
    if (cents.abs() <= 2) return '$label in tune';
    final sign = cents > 0 ? '+' : '−';
    return '$label $sign${cents.abs()}¢';
  }
}

Note noteFor(double hz, {double a4 = 440}) {
  final exact = 69 + 12 * log2(hz / a4);
  final midi = exact.round();
  return Note(midi, ((exact - midi) * 100).round());
}

double hzFor(int midi, {double a4 = 440}) =>
    a4 * math.pow(2, (midi - 69) / 12).toDouble();

double log2(double x) => math.log(x) / math.ln2;

/// Cents from [from] to [to] (positive if [to] is higher).
double centsBetween(double from, double to) => 1200 * log2(to / from);

/// Moves [hz] by [semitones] (negative = lower).
double shift(double hz, num semitones) =>
    hz * math.pow(2, semitones / 12).toDouble();

/// Root-mean-square level of a block of samples (0 = silence, 1 = full scale).
double rms(List<double> samples) {
  if (samples.isEmpty) return 0;
  var sum = 0.0;
  for (final s in samples) {
    sum += s * s;
  }
  return math.sqrt(sum / samples.length);
}

/// The strongest frequency between [minHz] and [maxHz] in a spectrum of
/// decibel values (as a Web Audio AnalyserNode gives them), refined between
/// bins by fitting a parabola. Null if nothing stands [minProminence] dB
/// above the median of the searched band.
double? peakHz(
  List<double> db, {
  required double sampleRate,
  required int fftSize,
  double minHz = 40,
  double maxHz = 1000,
  double minProminence = 18,
}) {
  final binHz = sampleRate / fftSize;
  final lo = math.max(1, (minHz / binHz).floor());
  final hi = math.min(db.length - 2, (maxHz / binHz).ceil());
  if (hi <= lo) return null;

  var best = lo;
  final band = <double>[];
  for (var i = lo; i <= hi; i++) {
    final v = db[i].isFinite ? db[i] : -200.0;
    band.add(v);
    if (v > (db[best].isFinite ? db[best] : -200.0)) best = i;
  }
  band.sort();
  final median = band[band.length ~/ 2];
  final peak = db[best];
  if (!peak.isFinite || peak - median < minProminence) return null;

  final a = db[best - 1], b = peak, c = db[best + 1];
  var offset = 0.0;
  if (a.isFinite && c.isFinite) {
    final denom = a - 2 * b + c;
    if (denom != 0) offset = (0.5 * (a - c) / denom).clamp(-0.5, 0.5);
  }
  return (best + offset) * binHz;
}

double median(List<double> values) {
  final sorted = [...values]..sort();
  final mid = sorted.length ~/ 2;
  return sorted.length.isOdd
      ? sorted[mid]
      : (sorted[mid - 1] + sorted[mid]) / 2;
}

/// Turns a stream of analyser frames into one reading per hit: wait for the
/// level to jump (a tap), skip the noisy first moments of the attack, then
/// take the median pitch over the ring that follows.
class HitTracker {
  HitTracker({
    this.threshold = 0.02,
    this.skipMs = 40,
    this.listenMs = 260,
    this.minFrames = 3,
  });

  /// RMS level a tap must reach.
  double threshold;
  final double skipMs;
  final double listenMs;
  final int minFrames;

  double? _hitAt;
  double _floor = 0;
  final _pitches = <double>[];

  bool get listening => _hitAt != null;

  /// Feed one frame. Returns a frequency when a hit's reading is complete.
  double? feed({
    required double level,
    required double? hz,
    required double nowMs,
  }) {
    final hitAt = _hitAt;
    if (hitAt == null) {
      // A hit is a jump well above the recent background level.
      if (level > threshold && level > _floor * 3) {
        _hitAt = nowMs;
        _pitches.clear();
      } else {
        _floor = _floor * 0.9 + level * 0.1;
      }
      return null;
    }
    final since = nowMs - hitAt;
    if (since >= skipMs && since <= skipMs + listenMs && hz != null) {
      _pitches.add(hz);
    }
    // Done when the window has passed or the ring has died away.
    if (since > skipMs + listenMs ||
        (since > skipMs && level < threshold / 4)) {
      _hitAt = null;
      _floor = level;
      if (_pitches.length < minFrames) return null;
      return median(_pitches);
    }
    return null;
  }
}

/// How even a set of lug readings is.
class LugCheck {
  LugCheck(List<double> readings)
    : readings = List.unmodifiable(readings),
      center = readings.isEmpty ? 0 : median(readings);

  /// Within this many cents of the middle counts as even. A rule of thumb:
  /// small differences are hard to hear but add up as uneven decay.
  static const evenCents = 20;

  final List<double> readings;
  final double center;

  List<double> get offsetsCents => [
    for (final r in readings) centsBetween(center, r),
  ];

  bool get isEven =>
      readings.length >= 2 && offsetsCents.every((c) => c.abs() <= evenCents);

  /// Index of the lug furthest from the middle, or null if all are even.
  int? get worst {
    if (readings.length < 2) return null;
    final offs = offsetsCents;
    var worst = 0;
    for (var i = 1; i < offs.length; i++) {
      if (offs[i].abs() > offs[worst].abs()) worst = i;
    }
    return offs[worst].abs() > evenCents ? worst : null;
  }
}

/// The tuner's lug slots: one reading per tension rod, in order around the
/// drum. Readings fill the next empty lug; tapping a lug re-reads it, and a
/// single lug can be cleared without losing the others.
class LugSet {
  LugSet(int count) : _hz = List<double?>.filled(_clampCount(count), null);

  static const minLugs = 3, maxLugs = 16;
  static int _clampCount(int n) => n.clamp(minLugs, maxLugs);

  List<double?> _hz;
  int _next = 0;

  int get count => _hz.length;

  /// The lug the next reading goes to (0-based).
  int get next => _next;
  List<double?> get readings => List.unmodifiable(_hz);
  int get filled => _hz.where((h) => h != null).length;

  /// Changes the number of lugs, keeping the readings that still fit.
  void resize(int n) {
    final size = _clampCount(n);
    _hz = [for (var i = 0; i < size; i++) i < _hz.length ? _hz[i] : null];
    if (_next >= size) _next = 0;
  }

  /// Stores a reading in the next lug, then moves on to the next empty lug
  /// (or simply the next lug round once all are full).
  void record(double hz) {
    _hz[_next] = hz;
    for (var step = 1; step <= count; step++) {
      final i = (_next + step) % count;
      if (_hz[i] == null) {
        _next = i;
        return;
      }
    }
    _next = (_next + 1) % count;
  }

  /// The next reading goes to lug [i] (to re-read it).
  void select(int i) => _next = i.clamp(0, count - 1);

  /// Removes lug [i]'s reading; it becomes the next to read.
  void clear(int i) {
    _hz[i] = null;
    _next = i;
  }

  void clearAll() {
    _hz = List<double?>.filled(count, null);
    _next = 0;
  }

  LugCheck get _check => LugCheck([for (final h in _hz) ?h]);

  /// The middle (median) reading, or 0 with none.
  double get center => _check.center;

  /// Each lug's distance from the middle in cents (null where not read).
  List<double?> get offsetsCents {
    final c = center;
    return [for (final h in _hz) h == null ? null : centsBetween(c, h)];
  }

  /// Every read lug within [LugCheck.evenCents] of the middle (2+ read).
  bool get isEven => _check.isEven;

  /// The lug furthest from the middle, if it's outside the even band.
  int? get worst {
    if (filled < 2) return null;
    final offs = offsetsCents;
    int? worst;
    for (var i = 0; i < offs.length; i++) {
      final o = offs[i];
      if (o == null) continue;
      if (worst == null || o.abs() > offs[worst]!.abs()) worst = i;
    }
    return worst != null && offs[worst]!.abs() > LugCheck.evenCents
        ? worst
        : null;
  }
}
