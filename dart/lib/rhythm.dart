/// The metronome's rhythm arithmetic: time signatures, subdivisions, swing,
/// per-beat accents and the two practice trainers. No browser APIs here, so
/// it runs (and is checked) on the command line too.
library;

import 'dart:math' as math;

const minBpm = 20;
const maxBpm = 300;

int clampBpm(num bpm) => bpm.round().clamp(minBpm, maxBpm);

/// What each beat cell plays. Tapping a cell steps through these in order.
enum Level {
  accent('Accent'),
  normal('Normal'),
  ghost('Ghost'),
  mute('Mute');

  const Level(this.label);
  final String label;

  Level get next => Level.values[(index + 1) % Level.values.length];

  static Level byName(String name) =>
      values.firstWhere((l) => l.name == name, orElse: () => normal);
}

/// The sound a single click makes. [sub] is a click between beats;
/// [silent] still lights the beat (a muted cell, or a gap-trainer bar).
enum Voice { accent, normal, ghost, sub, silent }

/// How many clicks each beat cell is split into.
enum Subdivision {
  none(1, 'None (beats only)'),
  eighths(2, 'Eighth notes (2)'),
  triplets(3, 'Triplets (3)'),
  sixteenths(4, 'Sixteenth notes (4)'),
  quintuplets(5, 'Quintuplets (5)'),
  sextuplets(6, 'Sextuplets (6)'),
  septuplets(7, 'Septuplets (7)'),
  thirtySeconds(8, '32nd notes (8)');

  const Subdivision(this.perBeat, this.label);
  final int perBeat;
  final String label;

  /// Swing pairs up clicks, so it needs an even number of them.
  bool get canSwing => perBeat.isEven;

  static Subdivision byName(String name) =>
      values.firstWhere((s) => s.name == name, orElse: () => none);
}

/// A time signature such as 4/4 or 7/8, with how its beats group.
class Meter {
  Meter(this.beats, this.unit, [List<int>? groups])
    : groups = List.unmodifiable(groups ?? defaultGroups(beats, unit)) {
    if (beats < 1 || beats > maxBeats) {
      throw ArgumentError.value(beats, 'beats', 'must be 1 to $maxBeats');
    }
    if (!units.contains(unit)) {
      throw ArgumentError.value(unit, 'unit', 'must be one of $units');
    }
    if (this.groups.any((g) => g < 1) ||
        this.groups.fold(0, (a, b) => a + b) != beats) {
      throw ArgumentError.value(groups, 'groups', 'must add up to $beats');
    }
  }

  static const maxBeats = 32;
  static const units = [2, 4, 8, 16];

  final int beats;
  final int unit;
  final List<int> groups;

  /// 6/8, 9/8, 12/8 and the like: beats grouped in threes, usually felt as
  /// dotted-quarter pulses.
  bool get isCompound =>
      unit >= 8 && beats % 3 == 0 && beats > 3 && groups.every((g) => g == 3);

  /// Where each group starts (0-based cell indexes).
  List<int> get groupStarts {
    final starts = <int>[];
    var at = 0;
    for (final g in groups) {
      starts.add(at);
      at += g;
    }
    return starts;
  }

  /// The usual feel: compound meters in threes, odd eighths as twos then a
  /// three (7/8 = 2+2+3), everything else one beat per group.
  static List<int> defaultGroups(int beats, int unit) {
    if (unit < 8 || beats < 5) return List.filled(beats, 1);
    if (beats % 3 == 0) return List.filled(beats ~/ 3, 3);
    // 5 = 2+3, 7 = 2+2+3, 11 = 2+2+2+2+3 ...
    if (beats.isOdd) return [...List.filled((beats - 3) ~/ 2, 2), 3];
    return List.filled(beats ~/ 2, 2);
  }

  /// Parses "7/8" or "7/8:3+2+2". Returns null for anything invalid.
  static Meter? tryParse(String text) {
    final m = RegExp(
      r'^\s*(\d+)\s*/\s*(\d+)\s*(?::\s*([\d+\s]+))?$',
    ).firstMatch(text);
    if (m == null) return null;
    final beats = int.parse(m[1]!), unit = int.parse(m[2]!);
    List<int>? groups;
    if (m[3] case final g?) {
      groups = [
        for (final part in g.split('+'))
          if (int.tryParse(part.trim()) case final n?) n,
      ];
    }
    try {
      return Meter(beats, unit, groups);
    } on ArgumentError {
      return null;
    }
  }

  String get name => '$beats/$unit';

  /// "7/8 (2+2+3)", or just "4/4" when every group is one beat, or "12/8"
  /// when a compound meter is grouped in threes as usual.
  String get label => groups.every((g) => g == 1) || isCompound
      ? name
      : '$name (${groups.join('+')})';

  /// Round-trips through [tryParse].
  String get code =>
      groups.every((g) => g == 1) ? name : '$name:${groups.join('+')}';

  /// Accent on 1, normal on the start of each later group, ghosts inside
  /// groups (so 7/8 reads > . | . | . .).
  List<Level> defaultLevels() {
    final starts = groupStarts.toSet();
    return [
      for (var i = 0; i < beats; i++)
        i == 0
            ? Level.accent
            : starts.contains(i)
            ? Level.normal
            : (groups.every((g) => g == 1) ? Level.normal : Level.ghost),
    ];
  }

  @override
  bool operator ==(Object other) => other is Meter && other.code == code;

  @override
  int get hashCode => code.hashCode;
}

/// Everything the metronome needs to know to play.
class Groove {
  Groove({
    this.bpm = 96,
    Meter? meter,
    List<Level>? levels,
    this.sub = Subdivision.none,
    this.swing = 50,
    this.dottedBeat = false,
  }) : meter = meter ?? Meter(4, 4),
       levels = levels ?? (meter ?? Meter(4, 4)).defaultLevels();

  int bpm;
  Meter meter;
  List<Level> levels;
  Subdivision sub;

  /// Percent of each swung pair given to its first click: 50 is straight,
  /// about 67 is triplet swing, 75 is a dotted-eighth feel.
  int swing;

  /// Count the tempo in dotted quarters (one per group of three) instead of
  /// one per cell. Only meaningful for compound meters.
  bool dottedBeat;

  static const minSwing = 50;
  static const maxSwing = 75;

  /// Changing the meter keeps the accents you set where they still fit.
  void setMeter(Meter next) {
    final sameShape =
        next.beats == meter.beats &&
        next.groups.join('+') == meter.groups.join('+');
    if (!next.isCompound) dottedBeat = false;
    if (!sameShape) levels = next.defaultLevels();
    meter = next;
  }

  /// Seconds one beat cell lasts.
  double get cellSeconds {
    final perMinute = 60 / bpm;
    return dottedBeat && meter.isCompound ? perMinute / 3 : perMinute;
  }

  /// Seconds the [subIndex]th click in a cell lasts, with swing applied to
  /// each pair of clicks.
  double clickSeconds(int subIndex) {
    final even = cellSeconds / sub.perBeat;
    if (!sub.canSwing || swing == 50) return even;
    final pair = even * 2;
    final ratio = swing.clamp(minSwing, maxSwing) / 100;
    return subIndex.isEven ? pair * ratio : pair * (1 - ratio);
  }

  double get barSeconds => cellSeconds * meter.beats;

  Voice voiceAt(int cell, int subIndex) {
    final level = levels[cell];
    if (level == Level.mute) return Voice.silent;
    if (subIndex > 0) return Voice.sub;
    return switch (level) {
      Level.accent => Voice.accent,
      Level.normal => Voice.normal,
      Level.ghost => Voice.ghost,
      Level.mute => Voice.silent,
    };
  }
}

/// Raise the tempo by [step] every [everyBars] bars, up to [target].
class SpeedTrainer {
  SpeedTrainer({
    this.enabled = false,
    this.step = 4,
    this.everyBars = 4,
    this.target = 140,
  });

  bool enabled;
  int step;
  int everyBars;
  int target;

  /// Whether the run actually moves: on, a real step, and the target lies
  /// in the direction of the step (rising toward a higher target, or
  /// falling toward a lower one).
  bool movesFrom(int startBpm) =>
      enabled &&
      everyBars >= 1 &&
      step != 0 &&
      (step > 0 ? clampBpm(target) > startBpm : clampBpm(target) < startBpm);

  /// The tempo to use at the start of bar [bar] (0-based), given the tempo
  /// the run started at. If the target is already reached or lies the other
  /// way, the tempo simply stays put.
  int tempoFor(int startBpm, int bar) {
    if (!movesFrom(startBpm)) return startBpm;
    final goal = clampBpm(target);
    final moved = startBpm + step * (bar ~/ everyBars);
    return clampBpm(step > 0 ? math.min(moved, goal) : math.max(moved, goal));
  }

  /// Bars from bar [bar] (counted from the run's start) until the next tempo
  /// change, or null once the target is reached or nothing will change.
  int? barsUntilNextStep(int startBpm, int bar) {
    if (!movesFrom(startBpm) || tempoFor(startBpm, bar) == clampBpm(target)) {
      return null;
    }
    return everyBars - bar % everyBars;
  }

  /// A one-line progress report for the screen, e.g.
  /// "104 → 140 BPM · next +4 in 2 bars".
  String progress(int startBpm, int bar) {
    if (!enabled) return '';
    if (!movesFrom(startBpm)) {
      return step == 0
          ? 'Speed trainer: set a change other than 0 BPM.'
          : 'Speed trainer: the target ($target BPM) is ${step > 0 ? 'not above' : 'not below'} the current tempo, so the tempo will stay put.';
    }
    final now = tempoFor(startBpm, bar);
    final next = barsUntilNextStep(startBpm, bar);
    if (next == null)
      return 'Speed trainer: reached $target BPM. Holding here.';
    final sign = step > 0 ? '+' : '−';
    return 'Speed trainer: $now → $target BPM · next $sign${step.abs()} in $next bar${next == 1 ? '' : 's'}';
  }
}

/// Play [playBars] bars, then mute [muteBars] bars, to test your inner time.
class GapTrainer {
  GapTrainer({this.enabled = false, this.playBars = 2, this.muteBars = 2});

  bool enabled;
  int playBars;
  int muteBars;

  bool isMuted(int bar) {
    if (!enabled || muteBars < 1 || playBars < 1) return false;
    return bar % (playBars + muteBars) >= playBars;
  }
}

/// One scheduled click.
class Click {
  const Click(
    this.at,
    this.voice,
    this.bar,
    this.cell,
    this.sub,
    this.bpm, {
    this.countIn = false,
    this.count = 0,
    this.countOf = 0,
  });

  /// Seconds from the start of the run.
  final double at;
  final Voice voice;
  final int bar;
  final int cell;
  final int sub;

  /// The tempo in force for this click (it changes under the speed trainer).
  final int bpm;

  /// Part of the count-in before the groove. Count-in bars are numbered
  /// below zero (-2, -1), so the groove's first bar is still bar 0.
  final bool countIn;

  /// For a count-in click: which count this is (1-based) and out of how
  /// many in the bar, e.g. 2 of 4. Odd meters count their groups: 7/8 as
  /// 2+2+3 counts 1, 2, 3.
  final int count;
  final int countOf;

  @override
  String toString() =>
      'Click(${at.toStringAsFixed(3)}, $voice, bar $bar, cell $cell.$sub)';
}

/// Walks through the groove one click at a time. The browser asks for clicks
/// a little ahead of the audio clock; settings can change between calls.
class Sequencer {
  Sequencer(this.groove, {SpeedTrainer? speed, GapTrainer? gap})
    : speed = speed ?? SpeedTrainer(),
      gap = gap ?? GapTrainer(),
      _startBpm = groove.bpm;

  final Groove groove;
  final SpeedTrainer speed;
  final GapTrainer gap;

  int _startBpm;
  int _startBar = 0;

  /// Bars of count-in before the groove (0 for none); takes effect at
  /// [reset].
  int countInBars = 0;
  int _countLeft = 0, _countIndex = 0;
  int _bar = 0, _cell = 0, _sub = 0;
  double _time = 0;

  int get bar => _bar;

  /// The tempo the speed trainer counts up from.
  int get startBpm => _startBpm;

  /// The bar the speed trainer started counting from.
  int get startBar => _startBar;

  /// Start over from the top of bar 1, keeping the current tempo as the
  /// speed trainer's starting point.
  void reset() {
    _bar = _cell = _sub = _startBar = 0;
    _time = 0;
    _startBpm = groove.bpm;
    _countIndex = 0;
    _countLeft = math.max(0, countInBars) * groove.meter.groups.length;
  }

  /// True while the count-in is still playing.
  bool get countingIn => _countLeft > 0;

  /// The user moved the tempo by hand: the trainer starts again from there,
  /// counting bars from the next bar line.
  void retempo() {
    _startBpm = groove.bpm;
    _startBar = _cell == 0 && _sub == 0 ? _bar : _bar + 1;
  }

  Click next() {
    if (_countLeft > 0) return _nextCount();
    // Settings may have changed since the last click.
    if (_cell >= groove.meter.beats) {
      _cell = 0;
      _sub = 0;
      _bar++;
    }
    if (_sub >= groove.sub.perBeat) _sub = 0;
    if (_cell == 0 && _sub == 0 && speed.enabled) {
      groove.bpm = speed.tempoFor(_startBpm, _bar - _startBar);
    }

    final voice = gap.isMuted(_bar)
        ? Voice.silent
        : groove.voiceAt(_cell, _sub);
    final click = Click(_time, voice, _bar, _cell, _sub, groove.bpm);

    _time += groove.clickSeconds(_sub);
    _sub++;
    if (_sub >= groove.sub.perBeat) {
      _sub = 0;
      _cell++;
      if (_cell >= groove.meter.beats) {
        _cell = 0;
        _bar++;
      }
    }
    return click;
  }

  /// One count-in click: one per beat, or per group in grouped meters, at
  /// the start of each group, the first of each bar accented.
  Click _nextCount() {
    final groups = groove.meter.groups;
    final starts = groove.meter.groupStarts;
    final g = _countIndex % groups.length;
    final click = Click(
      _time,
      g == 0 ? Voice.accent : Voice.normal,
      -countInBars + _countIndex ~/ groups.length,
      starts[g],
      0,
      groove.bpm,
      countIn: true,
      count: g + 1,
      countOf: groups.length,
    );
    _time += groove.cellSeconds * groups[g];
    _countIndex++;
    _countLeft--;
    return click;
  }
}

/// Turns taps into a tempo: the average gap over the last few taps. A pause
/// longer than [resetAfterMs] starts a fresh count.
class TapTempo {
  TapTempo({this.resetAfterMs = 2000, this.window = 4});

  final double resetAfterMs;
  final int window;
  final _taps = <double>[];

  /// Returns the tempo once there are two taps, otherwise null.
  int? tap(double nowMs) {
    if (_taps.isNotEmpty && nowMs - _taps.last > resetAfterMs) _taps.clear();
    _taps.add(nowMs);
    if (_taps.length > window + 1) _taps.removeAt(0);
    if (_taps.length < 2) return null;
    final gap = (_taps.last - _taps.first) / (_taps.length - 1);
    return clampBpm(60000 / gap);
  }
}

/// The classical tempo words and the BPM each starts at. Boundaries vary
/// between sources; these are common modern ones.
const tempoMarkings = [
  (minBpm, 'Grave'),
  (40, 'Largo'),
  (60, 'Larghetto'),
  (66, 'Adagio'),
  (76, 'Andante'),
  (108, 'Moderato'),
  (120, 'Allegro'),
  (156, 'Vivace'),
  (176, 'Presto'),
  (200, 'Prestissimo'),
];

int _markingIndex(int bpm) {
  var i = 0;
  while (i + 1 < tempoMarkings.length && bpm >= tempoMarkings[i + 1].$1) {
    i++;
  }
  return i;
}

/// The classical tempo word for a BPM, as a learning aid.
String tempoMarking(int bpm) => tempoMarkings[_markingIndex(bpm)].$2;

/// The BPM range of that tempo word, e.g. (76, 107) for Andante.
(int, int) tempoRange(int bpm) {
  final i = _markingIndex(bpm);
  final hi = i + 1 < tempoMarkings.length
      ? tempoMarkings[i + 1].$1 - 1
      : maxBpm;
  return (tempoMarkings[i].$1, hi);
}
