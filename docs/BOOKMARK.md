# Bookmark: where Drum Studio stands

**Saved:** 2026-11-20 · **Owner:** David Petry
**To resume:** open a new Claude Code session on this repo and say
*"Read docs/BOOKMARK.md and docs/ux-ui-audit-2026-11-20.md, then continue."*

---

## Live

| What | Where |
|---|---|
| App | https://davidpetry-cloud.github.io/drum-studio/ (Metronome) · `/tuning.html` (Drum Tuning) |
| This repo | https://github.com/davidpetry-cloud/drum-studio |
| Website (links to the app from its Exercises page) | https://david-petry.netlify.app/drum-exercises.html, repo `davidpetry-cloud/david-petry-site` |

## Built so far

- **Metronome:** 20–300 BPM, classic metronome-mark steps, tap tempo, any time signature with odd-meter groupings, dotted-quarter
  counting, subdivisions to 32nds with swing, per-beat accent/normal/ghost/mute, saved tempos plus
  starting points, speed and gap trainers, count-in (off/1/2 bars), subdivision ticks in the beat
  grid, tempo word with its BPM range, three click sounds (woodblock, beep, stick), beat light,
  vibration (Android), screen wake lock, keyboard shortcuts.
- **Drum Tuning:** guide by drum, size, depth, shell, heads and head relationship, with cited
  starting ranges; microphone tuner with lug-by-lug evenness check; tom planner with same, per-gap
  or free spacing.
- **Everywhere:** installable and offline, light/dark themes, title-case headings, "by David Petry"
  byline, WCAG 2.2 AA (0 axe violations).

## Decisions made (and why)

| Decision | Reason |
|---|---|
| Separate repo, two pages | Keep the portfolio site lean; each page focused |
| Dart compiled to JS, output committed | Consistent with the site's metronome; no server build |
| **GitHub Pages** via `.github/workflows/pages.yml` | Free with no deploy limits (Netlify credits are limited). Settings → Pages → Source must stay **GitHub Actions** |
| Public repo | Required for free GitHub Pages |
| **Licensing:** code PolyForm Noncommercial 1.0.0, content CC BY-NC 4.0 | Noncommercial collaboration welcome with credit (`Required Notice:` line); commercial use needs permission. States AI assistance honestly; app name not claimed as copyright |
| Website: code PolyForm NC, content all rights reserved | Code open to collaborate; PDFs, prompt book, art, photos and music stay protected |
| Cowbell removed | David's call |
| Microphone hardening (see `SECURITY.md`) | Real taps only, refused inside other sites' frames, auto-off (2 min idle, hidden page, other tab), minimal request, and `connect-src 'none'` so nothing can leave the page. Hiding code isn't real security; these are |

## How to change things

1. `sh dart/build.sh` (needs the Dart SDK 3.9+): analyze, checks, compile into `js/`.
2. Commit the compiled `js/` along with the source; open a pull request.
3. Merging to `main` publishes automatically in about a minute (watch the **Actions** tab).
4. New top-level files: add them to the workflow's copy step and to `FILES` in `sw.js` (bump `VERSION`).

## Next up (backlog)

1. **UX audit fixes:** see `docs/ux-ui-audit-2026-11-20.md`. Done: #1–#6, #8, #9, #12–#14.
   Left: #7 per-lug tuner (lug count, re-read one lug), #10 install button, #11 hold-to-repeat
   on the ± buttons.
2. **Phase 3: play-along grooves** (synthesized rock, bossa, songo, swing, clave) that follow the
   metronome's tempo, with voice muting.
3. **Real-device testing:** iPhone silent switch, Android vibration, tuner on a real drum, installing
   and using offline.
4. **Housekeeping:** update the Pages actions when Node 24 versions ship (the run logs show a
   Node 20 deprecation warning); optional USPTO search for the "Drum Studio" name; optional About
   box on GitHub (website: the app URL; topics: drums, metronome, drum-tuning, pwa, dart).

## Suggested model and effort

- Feature work (audit fixes, play-along): **Opus 5.5, medium effort**.
- Copy and styling tweaks: **Sonnet 5.5**; tiny text fixes: **Haiku 5.5**.
