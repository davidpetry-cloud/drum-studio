/// Saved tempos ("presets"): a name plus everything needed to rebuild a
/// [Groove]. Stored as JSON in the browser; anything read back is checked,
/// because storage can hold old or hand-edited data.
library;

import 'dart:convert';

import 'rhythm.dart';

class Preset {
  Preset({
    required this.name,
    required this.bpm,
    required this.meter,
    required this.levels,
    this.sub = Subdivision.none,
    this.swing = 50,
    this.dottedBeat = false,
  });

  factory Preset.of(String name, Groove g) => Preset(
    name: cleanName(name),
    bpm: g.bpm,
    meter: g.meter,
    levels: [...g.levels],
    sub: g.sub,
    swing: g.swing,
    dottedBeat: g.dottedBeat,
  );

  static const maxName = 40;

  final String name;
  final int bpm;
  final Meter meter;
  final List<Level> levels;
  final Subdivision sub;
  final int swing;
  final bool dottedBeat;

  void applyTo(Groove g) {
    g
      ..bpm = bpm
      ..meter = meter
      ..levels = [...levels]
      ..sub = sub
      ..swing = swing
      ..dottedBeat = dottedBeat && meter.isCompound;
  }

  /// "Songo · 112 · 4/4 · 16ths"
  String get summary {
    final parts = [
      '$bpm BPM${dottedBeat ? ' (dotted quarter)' : ''}',
      meter.label,
      if (sub != Subdivision.none) sub.label.replaceAll(RegExp(r' \(\d\)'), ''),
      if (sub.canSwing && swing > 50) 'swing $swing%',
    ];
    return parts.join(' · ');
  }

  Map<String, Object> toJson() => {
    'name': name,
    'bpm': bpm,
    'meter': meter.code,
    'levels': [for (final l in levels) l.name],
    'sub': sub.name,
    'swing': swing,
    'dotted': dottedBeat,
  };

  /// Returns null if [json] is not a usable preset.
  static Preset? fromJson(Object? json) {
    if (json is! Map) return null;
    final name = json['name'], bpm = json['bpm'], meterCode = json['meter'];
    if (name is! String || name.trim().isEmpty) return null;
    if (bpm is! num || meterCode is! String) return null;
    final meter = Meter.tryParse(meterCode);
    if (meter == null) return null;
    final rawLevels = json['levels'];
    var levels = rawLevels is List
        ? [for (final l in rawLevels) Level.byName('$l')]
        : meter.defaultLevels();
    if (levels.length != meter.beats) levels = meter.defaultLevels();
    final swing = json['swing'];
    return Preset(
      name: cleanName(name),
      bpm: clampBpm(bpm),
      meter: meter,
      levels: levels,
      sub: Subdivision.byName('${json['sub']}'),
      swing: swing is num
          ? swing.round().clamp(Groove.minSwing, Groove.maxSwing)
          : 50,
      dottedBeat: json['dotted'] == true && meter.isCompound,
    );
  }

  /// Trims, collapses spaces and caps the length.
  static String cleanName(String raw) {
    final name = raw.trim().replaceAll(RegExp(r'\s+'), ' ');
    return name.length > maxName ? name.substring(0, maxName) : name;
  }
}

String encodePresets(List<Preset> presets) =>
    jsonEncode([for (final p in presets) p.toJson()]);

/// Never throws: bad JSON or bad entries are skipped.
List<Preset> decodePresets(String? text) {
  if (text == null || text.isEmpty) return [];
  Object? data;
  try {
    data = jsonDecode(text);
  } on FormatException {
    return [];
  }
  if (data is! List) return [];
  return [
    for (final item in data)
      if (Preset.fromJson(item) case final p?) p,
  ];
}

/// Saving under a name that already exists replaces it (names match
/// ignoring case). Newest first.
List<Preset> upsert(List<Preset> presets, Preset preset) => [
  preset,
  for (final p in presets)
    if (p.name.toLowerCase() != preset.name.toLowerCase()) p,
];

/// A few starting points, so the list is never empty on first visit.
/// Tempos are typical practice tempos, not rules.
List<Preset> starterPresets() {
  Preset make(
    String name,
    int bpm,
    String meter, {
    Subdivision sub = Subdivision.none,
    int swing = 50,
    bool dotted = false,
  }) {
    final m = Meter.tryParse(meter)!;
    return Preset(
      name: name,
      bpm: bpm,
      meter: m,
      levels: m.defaultLevels(),
      sub: sub,
      swing: swing,
      dottedBeat: dotted,
    );
  }

  return [
    make('Rock eighths', 100, '4/4', sub: Subdivision.eighths),
    make('Funk sixteenths', 92, '4/4', sub: Subdivision.sixteenths),
    make('Swing', 140, '4/4', sub: Subdivision.eighths, swing: 67),
    make('Shuffle 12/8', 72, '12/8', dotted: true),
    make('Jazz waltz', 150, '3/4'),
    make('Songo', 112, '4/4', sub: Subdivision.sixteenths),
    make('Odd: 7/8', 180, '7/8:2+2+3'),
  ];
}
