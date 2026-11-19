/// The metronome's rhythm arithmetic: time signatures, subdivisions, swing,
/// per-beat accents and the two practice trainers. No browser APIs here, so
/// it runs (and is checked) on the command line too.
library;

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
    final m = RegExp(r'^\s*(\d+)\s*/\s*(\d+)\s*(?::\s*([\d+\s]+))?$')
        .firstMatch(text);
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

  /// The tempo to use at the start of bar [bar] (0-based), given the tempo
  /// the run started at.
  int tempoFor(int startBpm, int bar) {
    if (!enabled || everyBars < 1 || step == 0) return startBpm;
    final raised = startBpm + step * (bar ~/ everyBars);
    return clampBpm(
      step > 0 ? raised.clamp(startBpm, target) : raised.clamp(target, startBpm),
    );
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
  const Click(this.at, this.voice, this.bar, this.cell, this.sub, this.bpm);

  /// Seconds from the start of the run.
  final double at;
  final Voice voice;
  final int bar;
  final int cell;
  final int sub;

  /// The tempo in force for this click (it changes under the speed trainer).
  final int bpm;

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
  int _bar = 0, _cell = 0, _sub = 0;
  double _time = 0;

  int get bar => _bar;

  /// The tempo the speed trainer counts up from.
  int get startBpm => _startBpm;

  /// Start over from the top of bar 1, keeping the current tempo as the
  /// speed trainer's starting point.
  void reset() {
    _bar = _cell = _sub = _startBar = 0;
    _time = 0;
    _startBpm = groove.bpm;
  }

  /// The user moved the tempo by hand: the trainer starts again from there,
  /// counting bars from the next bar line.
  void retempo() {
    _startBpm = groove.bpm;
    _startBar = _cell == 0 && _sub == 0 ? _bar : _bar + 1;
  }

  Click next() {
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

    final voice = gap.isMuted(_bar) ? Voice.silent : groove.voiceAt(_cell, _sub);
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

/// The classical tempo word for a BPM, as a learning aid. Boundaries vary
/// between sources; these are common modern ones.
String tempoMarking(int bpm) => switch (bpm) {
  < 40 => 'Grave',
  < 60 => 'Largo',
  < 66 => 'Larghetto',
  < 76 => 'Adagio',
  < 108 => 'Andante',
  < 120 => 'Moderato',
  < 156 => 'Allegro',
  < 176 => 'Vivace',
  < 200 => 'Presto',
  _ => 'Prestissimo',
};
