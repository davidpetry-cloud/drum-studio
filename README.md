# Drum Studio

A drummer's practice app by David Petry: a metronome built for drummers and a
drum tuning guide with a microphone tuner. It installs on a phone like an app
and works offline.

**▶ Open the app: https://davidpetry-cloud.github.io/drum-studio/**

© 2026 David Petry. All rights reserved. This is proprietary software (see
[`LICENSE`](LICENSE)); third-party parts are listed in
[`THIRD-PARTY-NOTICES.md`](THIRD-PARTY-NOTICES.md).

## What's in it

**Metronome** (`index.html`)
- 20–300 BPM: type it, slide it, nudge it ±1/±5, tap it, or use the arrow keys
- Any time signature from 1 to 32 beats over 2, 4, 8 or 16, with quick picks
  and groupings for odd meters (7/8 as 2+2+3, 3+2+2 …)
- Compound meters (6/8, 9/8, 12/8) can count the tempo in dotted quarters
- Subdivisions from eighths to 32nds, including quintuplets and septuplets,
  with swing from straight (50%) to a dotted feel (75%)
- Every beat can be an accent, a normal click, a ghost note or a rest. Each
  has its own shape as well as its own colour
- Saved tempos (kept on the device), plus starting points
- Speed trainer (raise the tempo every few bars) and gap trainer (muted bars)
- Four click sounds, separate subdivision volume, a large beat light, optional
  vibration (Android), keeps the screen awake while playing

**Tuning** (`tuning.html`)
- Your drum: type, size, depth, shell material, batter and resonant heads and
  how they relate, giving a starting pitch range with note names and cited
  notes on what each choice tends to do
- Tuner: reads one pitch per tap, compares lugs and says which to adjust. The
  microphone opens only on request, and audio never leaves the device
- Tom interval planner: spaces toms by a third, fourth or fifth and checks each
  lands in its range
- The step-by-step tuning method and the full source list

## How it's built

Static HTML and CSS with no build step on the server. The behaviour is written
in Dart and compiled to JavaScript, and the compiled files in `js/` are
committed, so GitHub Pages just publishes the folder.

| Path | Purpose |
|---|---|
| `index.html`, `tuning.html` | The two pages |
| `css/studio.css` | The one stylesheet: design tokens (shared with david-petry.netlify.app), then components |
| `js/theme.js` | Applies light/dark before first paint (hand-written, tiny) |
| `js/metronome.js`, `js/tuning.js` | **Compiled from Dart; don't edit by hand** |
| `dart/lib/` | Pure Dart: rhythm, presets, pitch maths, tuning data (no browser code, all checked) |
| `dart/web/` | The browser side of each page, plus shared DOM bindings |
| `dart/test/checks.dart` | Checks for everything in `dart/lib/` |
| `sw.js`, `manifest.webmanifest`, `icons/` | Offline support and installing |
| `.nojekyll` | Tells GitHub Pages to publish the files as they are |

### Rebuilding after a Dart change

Needs the Dart SDK 3.9 or later (`brew install dart`):

```sh
sh dart/build.sh
```

That runs the analyzer, the checks, and then compiles both pages into `js/`.

### Releasing a change to installed apps

The service worker serves the cached app first and refreshes it in the
background, so returning visitors get updates on their next visit. If you
**add or remove** files, list them in `FILES` in `sw.js` and bump `VERSION`.

### Hosting: GitHub Pages

Published from the `main` branch, root folder (Settings → Pages → Deploy from
a branch). Every push to `main` goes live in a minute or two at
https://davidpetry-cloud.github.io/drum-studio/. All links are relative, so
the app works in that `/drum-studio/` folder and on a custom domain alike.

### Security

Each page sets a strict Content-Security-Policy in a `<meta>` tag (GitHub
Pages can't send custom headers): no inline scripts or styles and nothing
loaded from other sites. Scripts change the look only through CSS custom
properties. If you edit the policy, change it in both pages. The microphone
is only requested on the tuning page, and only when you press Start tuner.

## Tuning data

Pitch ranges and descriptions live in `dart/lib/tuning_data.dart`, each tied
to a source. Sizes no source covered are scaled from the nearest size and
labelled as such on the page. Where sources disagree (for example, which way
the pitch bends when the resonant head is higher), the guide says so. Last
researched 2026-11-19.
