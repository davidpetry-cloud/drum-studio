/// Reference data for the tuning guide: starting pitch ranges by drum and
/// size, and what shell materials, heads and head relationships tend to do.
///
/// Everything here is a starting point, not a rule: sources disagree, and
/// tuning is partly taste. Ranges that come straight from a source say so;
/// sizes no source covered are scaled from the nearest one (a drum's pitch
/// at the same tension goes roughly as 1 / diameter) and are flagged.
/// Researched 2026-11-19; see [sources].
library;

import 'dart:math' as math;

import 'pitch.dart';

class Source {
  const Source(this.title, this.url);
  final String title;
  final String url;
}

const sources = {
  'dtchart': Source(
    'Drum Tuning: frequency chart',
    'https://drum-tuning.com/drum-tuning-chart/',
  ),
  'tunebot': Source(
    'Tune-Bot: artist tuning settings',
    'https://tune-bot.com/artists/',
  ),
  'yamaha2': Source(
    'Yamaha Hub: discover the sonic possibilities of your drums, part 2',
    'https://hub.yamaha.com/drums/d-how-to/discover-the-sonic-possibilities-of-your-drums-part-2/',
  ),
  'yamahaSnare': Source(
    'Yamaha Hub: the five different kinds of snare drums',
    'https://hub.yamaha.com/drums/stage/the-five-different-kinds-of-snare-drums-explained',
  ),
  'thomannShell': Source(
    'Thomann: snare drum shell materials',
    'https://www.thomannmusic.com/onlineexpert_page_snare_drums_shell_materials.html',
  ),
  'thomannTuning': Source(
    'Thomann: drumheads and drum tuning',
    'https://www.thomann.co.uk/onlineexpert_page_drumheads_drum_tuning.html',
  ),
  'lm': Source(
    'Long & McQuade: a guide to the sound of different shell materials',
    'https://www.long-mcquade.com/blog/576/The-Heart-of-Your-Drums-A-Guide-to-the-Sound-of-Different-Shell-Materials.htm',
  ),
  'g4m': Source(
    'Gear4music: your guide to shell materials',
    'https://www.gear4music.com/blog/what-wood-sounds-good-your-guide-to-shell-materials',
  ),
  'md': Source(
    'Modern Drummer: what you need to know about drum shells',
    'https://www.moderndrummer.com/2015/02/need-know-drum-shells/',
  ),
  'dcp': Source(
    'Drum Center of Portsmouth: coated vs clear drum heads',
    'https://drumcenternh.com/blogs/news/coated-drum-heads-vs-clear-drum-heads-which-is-best',
  ),
  'gc': Source(
    'Guitar Center: best drum heads guide',
    'https://www.guitarcenter.com/riffs/buying-guides/drums/best-drum-heads-guide',
  ),
  'daddario': Source(
    "D'Addario: how to choose a bass drumhead",
    'https://www.daddario.com/en-de/blogs/percussion/how-to-choose-a-bass-drumhead',
  ),
};

// ---- Drums and sizes ------------------------------------------------------

enum DrumType {
  snare('Snare', [10, 12, 13, 14], 14, [3.5, 4, 5, 5.5, 6, 6.5, 7, 8], 5.5, 10),
  rackTom('Rack tom', [8, 10, 12, 13], 12, [6, 7, 8, 9, 10], 8, 6),
  floorTom('Floor tom', [14, 16, 18], 16, [12, 13, 14, 16], 14, 8),
  kick('Bass drum (kick)', [18, 20, 22, 24, 26], 22, [14, 16, 18, 20], 18, 10);

  const DrumType(
    this.label,
    this.diameters,
    this.typicalDiameter,
    this.depths,
    this.typicalDepth,
    this.typicalLugs,
  );
  final String label;
  final List<int> diameters;
  final int typicalDiameter;
  final List<num> depths;
  final num typicalDepth;

  /// A common number of tension rods per head, used as the tuner's default
  /// (drums vary: 8-lug snares and 8-lug kicks are common too).
  final int typicalLugs;

  static DrumType byName(String name) =>
      values.firstWhere((t) => t.name == name, orElse: () => snare);
}

/// A range of fundamental pitches, low to high, in Hz.
class PitchRange {
  const PitchRange(this.low, this.high, {this.scaledFrom, this.source});

  final double low;
  final double high;

  /// The diameter this was scaled from, if no source covered this size.
  final int? scaledFrom;
  final String? source;

  /// The middle in musical terms (geometric mean), a "medium" tuning.
  double get medium => math.sqrt(low * high);

  /// Lower and upper thirds of the range, in musical terms.
  double get lowish => math.pow(low * low * high, 1 / 3).toDouble();
  double get highish => math.pow(low * high * high, 1 / 3).toDouble();

  bool contains(double hz) => hz >= low && hz <= high;

  /// 0 at [low], 1 at [high], on a musical (log) scale; may fall outside.
  double position(double hz) => log2(hz / low) / log2(high / low);
}

/// Ranges given by a source for a size, by drum type. Sizes not listed are
/// scaled from the nearest listed size.
const _sourced = <DrumType, Map<int, (double, double, String)>>{
  DrumType.snare: {14: (170, 250, 'dtchart')},
  DrumType.rackTom: {
    10: (130, 180, 'dtchart'),
    12: (100, 150, 'dtchart'),
    13: (90, 140, 'dtchart'),
  },
  DrumType.floorTom: {14: (80, 120, 'dtchart'), 16: (65, 100, 'dtchart')},
  DrumType.kick: {20: (55, 80, 'dtchart'), 22: (50, 70, 'dtchart')},
};

PitchRange rangeFor(DrumType type, int diameter) {
  final table = _sourced[type]!;
  if (table[diameter] case (final lo, final hi, final src)) {
    return PitchRange(lo, hi, source: src);
  }
  final nearest = table.keys.reduce(
    (a, b) => (a - diameter).abs() <= (b - diameter).abs() ? a : b,
  );
  final (lo, hi, src) = table[nearest]!;
  final k = nearest / diameter;
  return PitchRange(
    (lo * k).roundToDouble(),
    (hi * k).roundToDouble(),
    scaledFrom: nearest,
    source: src,
  );
}

/// What depth does, compared with the drum's typical depth.
String depthNote(DrumType type, num depth) {
  final typical = type.typicalDepth;
  if ((depth - typical).abs() < 0.75) {
    return 'A common depth for a ${type.label.toLowerCase()}: a balance of attack and body.';
  }
  return depth < typical
      ? 'Shallower than usual: tends toward a quicker, more cutting attack and a shorter, tighter sound.'
      : 'Deeper than usual: tends toward more body and low end, with a fuller, longer sound.';
}

// ---- Shell materials ------------------------------------------------------

enum Family { wood, synthetic, metal }

class Material {
  const Material(this.id, this.label, this.family, this.sound, this.sources);
  final String id;
  final String label;
  final Family family;
  final String sound;
  final List<String> sources;
}

const materials = [
  Material(
    'maple',
    'Maple',
    Family.wood,
    'Warm and balanced: an even spread of lows and highs with slightly boosted mids. The all-rounder.',
    ['lm', 'g4m'],
  ),
  Material(
    'birch',
    'Birch',
    Family.wood,
    'Brighter and more focused than maple, with a crisp, dry “pop” on the attack. A studio favorite.',
    ['lm', 'g4m'],
  ),
  Material(
    'mahogany',
    'Mahogany',
    Family.wood,
    'Warm and dark: robust lows, mellow highs, and less projection than birch. A vintage feel.',
    ['lm', 'g4m'],
  ),
  Material(
    'oak',
    'Oak',
    Family.wood,
    'Dry and punchy with strong projection and a solid low-mid.',
    ['lm', 'g4m'],
  ),
  Material(
    'walnut',
    'Walnut',
    Family.wood,
    'Warm and rounded, with an even spread of lows, mids and highs and a darker, vintage character.',
    ['g4m', 'md'],
  ),
  Material(
    'acrylic',
    'Acrylic',
    Family.synthetic,
    'Strong, focused attack and plenty of projection. Sources disagree on whether it reads bright or warm; acrylic kicks often want some damping.',
    ['md', 'lm'],
  ),
  Material(
    'steel',
    'Steel',
    Family.metal,
    'Bright and cutting with long sustain and a penetrating rimshot. Heavier and more aggressive than aluminum.',
    ['thomannShell', 'yamahaSnare'],
  ),
  Material(
    'aluminum',
    'Aluminum',
    Family.metal,
    'Dry, bright and crisp with a short sustain, so it often needs little or no damping.',
    ['thomannShell', 'yamahaSnare'],
  ),
  Material(
    'brass',
    'Brass',
    Family.metal,
    'Dry and articulate with darker overtones, a sharp crack and more low end than most metals.',
    ['yamahaSnare', 'thomannShell'],
  ),
  Material(
    'bronze',
    'Bronze',
    Family.metal,
    'Dark and warm, more subdued than brass or steel. Increasingly popular on high-end snares.',
    ['thomannShell'],
  ),
  Material(
    'copper',
    'Copper',
    Family.metal,
    'Warmer, with more low end than brass or steel. A long-time orchestral choice.',
    ['thomannShell'],
  ),
];

Material materialById(String id) =>
    materials.firstWhere((m) => m.id == id, orElse: () => materials.first);

// ---- Heads ------------------------------------------------------------------

class Head {
  const Head(this.id, this.label, this.sound, this.sources);
  final String id;
  final String label;
  final String sound;
  final List<String> sources;
}

const batterHeads = [
  Head(
    '1c',
    'Single-ply, coated',
    'Open and warm with lots of overtones and touch sensitivity. The classic for jazz and for brushes.',
    ['dcp', 'gc'],
  ),
  Head(
    '1x',
    'Single-ply, clear',
    'The most open and bright: maximum sustain and overtones, very responsive to dynamics.',
    ['dcp', 'gc'],
  ),
  Head(
    '2c',
    'Two-ply, coated',
    'Deeper and more controlled with shorter sustain, plus the durability of two plies.',
    ['dcp', 'gc'],
  ),
  Head(
    '2x',
    'Two-ply, clear',
    'Punchy and fat with a bright attack and a controlled ring. Built for heavy hitting.',
    ['dcp', 'gc'],
  ),
  Head(
    'ring',
    'With a muffling ring or built-in control',
    'Fewer overtones and a shorter ring, so the drum needs less extra damping.',
    ['gc'],
  ),
];

const resoHeads = [
  Head(
    '1x',
    'Single-ply, clear',
    'The usual choice: thin enough to let the shell resonate and carry the note.',
    ['gc', 'dcp'],
  ),
  Head(
    '1c',
    'Single-ply, coated',
    'Like clear single-ply with slightly softened overtones.',
    ['dcp'],
  ),
  Head(
    '2',
    'Two-ply',
    'Rarely recommended underneath: the extra mass tends to choke the shell’s tone.',
    ['gc'],
  ),
  Head(
    'port',
    'Kick front head with a port hole',
    'Releases air so the kick sounds punchier with less boom, and gives a microphone a way in.',
    ['daddario'],
  ),
  Head(
    'snare',
    'Snare-side (very thin)',
    'Made thin so the snare wires respond to the lightest notes.',
    ['yamahaSnare'],
  ),
];

Head headById(List<Head> list, String id) =>
    list.firstWhere((h) => h.id == id, orElse: () => list.first);

// ---- Batter and resonant head relationship -----------------------------------

class Relation {
  const Relation(this.id, this.label, this.sound, this.sources);
  final String id;
  final String label;
  final String sound;
  final List<String> sources;
}

const relations = [
  Relation(
    'same',
    'Same pitch',
    'The most sustain and the steadiest pitch. Yamaha suggests it as the starting point for toms and kick.',
    ['yamaha2'],
  ),
  Relation(
    'higher',
    'Resonant head higher',
    'Less sustain and a pitch that bends as the note dies away. Sources disagree on which way it bends, so listen on your own drum.',
    ['yamaha2', 'thomannTuning'],
  ),
  Relation(
    'lower',
    'Resonant head lower',
    'Less sustain with a slight pitch bend, often heard as a “dropping” tom. As above, sources disagree on the direction; trust your ears.',
    ['yamaha2', 'thomannTuning'],
  ),
];

Relation relationById(String id) =>
    relations.firstWhere((r) => r.id == id, orElse: () => relations.first);

/// The snare is the exception, so say so where it applies.
const snareRelationNote =
    'On a snare, many drummers tune the snare-side head higher than the batter for a crisp wire response. Treat it as a starting point and adjust by ear.';

// ---- Tom interval planner ----------------------------------------------------

/// How the planner spaces the toms.
enum Spacing {
  same('Same interval', 'Every tom the same interval below the one above it.'),
  perGap(
    'Custom per gap',
    'Choose the interval between each pair of neighbouring toms.',
  ),
  free(
    'Free tuning',
    'Type each tom’s pitch. Nothing is enforced; the planner shows the intervals you end up with.',
  );

  const Spacing(this.label, this.hint);
  final String label;
  final String hint;

  static Spacing byName(String name) =>
      values.firstWhere((s) => s.name == name, orElse: () => same);
}

/// Interval names by semitones, unison to octave.
const intervalNames = [
  'Unison',
  'Minor second',
  'Major second',
  'Minor third',
  'Major third',
  'Perfect fourth',
  'Tritone',
  'Perfect fifth',
  'Minor sixth',
  'Major sixth',
  'Minor seventh',
  'Major seventh',
  'Octave',
];

class Interval {
  const Interval(this.semitones, this.label);
  final int semitones;
  final String label;
}

/// Every interval from a minor second to an octave.
final intervals = List<Interval>.unmodifiable([
  for (var s = 1; s <= 12; s++)
    Interval(s, '${intervalNames[s]} ($s semitone${s == 1 ? '' : 's'})'),
]);

/// Names any distance in semitones, including in-between ones from free
/// tuning: 5 → "Perfect fourth", 5.12 → "Perfect fourth +12¢",
/// 19 → "Octave + perfect fifth". The sign is ignored.
String describeInterval(double semitones) {
  final size = semitones.abs();
  final whole = size.round();
  final cents = ((size - whole) * 100).round();
  final octaves = whole ~/ 12, rest = whole % 12;
  final octaveName = octaves == 1 ? 'Octave' : '$octaves octaves';
  final name = octaves == 0
      ? intervalNames[rest]
      : rest == 0
      ? octaveName
      : '$octaveName + ${intervalNames[rest].toLowerCase()}';
  if (cents.abs() <= 2) return name;
  return '$name ${cents > 0 ? '+' : '−'}${cents.abs()}¢';
}

class PlannedDrum {
  const PlannedDrum(this.type, this.diameter, this.hz, this.range);
  final DrumType type;
  final int diameter;
  final double hz;
  final PitchRange range;
  bool get fits => range.contains(hz);

  /// Stable key for remembering settings per drum, e.g. "rackTom-12".
  String get id => '${type.name}-$diameter';
}

List<(DrumType, int)> _smallestFirst(List<(DrumType, int)> toms) =>
    [...toms]..sort((a, b) => a.$2.compareTo(b.$2));

/// Spaces toms from [topHz] on the smallest drum down: [gaps]`[i]` is the
/// interval in semitones between the i-th and the next tom, smallest first.
/// Missing gaps repeat the last one given (a perfect fourth if none).
/// [toms] are (type, diameter) pairs in any order.
List<PlannedDrum> planToms(
  List<(DrumType, int)> toms,
  double topHz,
  List<int> gaps,
) {
  final sorted = _smallestFirst(toms);
  final out = <PlannedDrum>[];
  var hz = topHz;
  for (var i = 0; i < sorted.length; i++) {
    if (i > 0) {
      final gap = i - 1 < gaps.length
          ? gaps[i - 1]
          : (gaps.isEmpty ? 5 : gaps.last);
      hz = shift(hz, -gap);
    }
    out.add(
      PlannedDrum(
        sorted[i].$1,
        sorted[i].$2,
        hz,
        rangeFor(sorted[i].$1, sorted[i].$2),
      ),
    );
  }
  return out;
}

/// Every tom the same [semitones] apart.
List<PlannedDrum> planSame(
  List<(DrumType, int)> toms,
  double topHz,
  int semitones,
) =>
    planToms(toms, topHz, List.filled(math.max(0, toms.length - 1), semitones));

/// Free tuning: [hz]`[i]` is the pitch of the i-th tom, smallest first.
List<PlannedDrum> planFree(List<(DrumType, int)> toms, List<double> hz) {
  final sorted = _smallestFirst(toms);
  return [
    for (var i = 0; i < sorted.length && i < hz.length; i++)
      PlannedDrum(
        sorted[i].$1,
        sorted[i].$2,
        hz[i],
        rangeFor(sorted[i].$1, sorted[i].$2),
      ),
  ];
}

/// The distance in semitones from each tom down to the next: positive when
/// the larger tom is lower, as expected; negative when it is higher.
List<double> gapsBetween(List<PlannedDrum> plan) => [
  for (var i = 0; i + 1 < plan.length; i++)
    12 * log2(plan[i].hz / plan[i + 1].hz),
];
