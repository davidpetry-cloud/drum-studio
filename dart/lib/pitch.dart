/// Pitch arithmetic for the drum tuner: note names, finding the strongest
/// peak in a spectrum, picking one reading per drum hit, and comparing lugs.
/// No browser APIs here, so it runs (and is checked) on the command line.
library;

import 'dart:math' as math;

const noteNames = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'];

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
  return sorted.length.isOdd ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
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
  double? feed({required double level, required double? hz, required double nowMs}) {
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
    if (since > skipMs + listenMs || (since > skipMs && level < threshold / 4)) {
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

  List<double> get offsetsCents =>
      [for (final r in readings) centsBetween(center, r)];

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
