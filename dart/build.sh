#!/bin/sh
# Checks the Dart code, then compiles both pages' scripts into ../js/.
# Run from anywhere: sh dart/build.sh   (needs the Dart SDK 3.9 or later)
set -e
cd "$(dirname "$0")"
dart pub get --offline >/dev/null
dart analyze --fatal-infos
dart run test/checks.dart
for page in metronome tuning; do
  dart compile js -O2 --no-source-maps -o "../js/$page.js" "web/$page.dart"
  rm -f "../js/$page.js.deps"
done
