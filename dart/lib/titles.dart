/// Title case for headings the app builds from data, such as
/// "Batter head: Single-ply, coated" → "Batter Head: Single-Ply, Coated".
///
/// Follows the common (Chicago-style) rule: capitalize every word except
/// articles, short conjunctions and prepositions, which stay lowercase
/// unless they start or end the title or follow a colon. Parts of hyphenated
/// words are capitalized too. Words already holding capitals (BPM, Hz) keep
/// them. No browser APIs, so it is checked on the command line.
library;

const _minorWords = {
  'a', 'an', 'the', //
  'and', 'but', 'or', 'nor', 'for', 'so', 'yet', //
  'as', 'at', 'by', 'in', 'of', 'on', 'per', 'to', 'up', 'via', 'vs', //
  'from', 'into', 'onto', 'over', 'than', 'upon', 'with',
};

String titleCase(String text) {
  final words = text.split(' ');
  final last = words.lastIndexWhere((w) => w.isNotEmpty);
  var startOfPhrase = true;
  final out = <String>[];
  for (var i = 0; i < words.length; i++) {
    final word = words[i];
    if (word.isEmpty) {
      out.add(word);
      continue;
    }
    final keepSmall =
        !startOfPhrase &&
        i != last &&
        _minorWords.contains(_bare(word).toLowerCase());
    out.add(keepSmall ? word.toLowerCase() : _capitalizeParts(word));
    // A colon starts a new phrase: its next word is capitalized.
    startOfPhrase = word.endsWith(':');
  }
  return out.join(' ');
}

/// The word without surrounding punctuation, for the minor-word lookup.
String _bare(String word) => word.replaceAll(RegExp(r'^[^\w]+|[^\w]+$'), '');

/// Capitalizes the first letter of each hyphen-separated part, skipping
/// leading punctuation such as "(" or a quote.
String _capitalizeParts(String word) => word
    .split('-')
    .map((part) {
      final m = RegExp(r'[A-Za-z]').firstMatch(part);
      if (m == null) return part;
      return part.substring(0, m.start) +
          part[m.start].toUpperCase() +
          part.substring(m.start + 1);
    })
    .join('-');
