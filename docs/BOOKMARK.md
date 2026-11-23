# Bookmark: where Drum Studio stands

**Saved:** 2026-11-23 (simulated phone test done) · **Owner:** David Petry
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
  grid, Italian tempo word with its English meaning and BPM range, three click sounds (woodblock, beep, stick), beat light,
  vibration (Android), screen wake lock, keyboard shortcuts.
- **Drum Tuning:** guide by drum, size, depth, shell, heads and head relationship, with cited
  starting ranges; microphone tuner with numbered lug slots (lug count per drum, tap a lug to
  re-read it, the one to adjust selected automatically); tom planner with same, per-gap
  or free spacing. Sections switch with four large icon buttons (Tuner, Your Drum, Planner,
  How to Tune): 16px semibold Outfit, 52px tall, the selected one filled amber, 2×2 on phones.
- **Everywhere:** installable and offline, light/dark themes, title-case headings, "by David Petry"
  byline, WCAG 2.2 AA (0 axe violations). Each page looks the same on every visit (PR #14 fixed
  the Metronome jumping about 115px on phones after a trip to Tuning). Offline cache: `ds-v2`.

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
| Intro always shows on phones (audit #4 revised) | Hiding it after the first visit made pages jump between visits. Consistency beats saving a few lines; the quick bar keeps Start on the first screen |
| Security by default (both repos' `CLAUDE.md`) | Every future change: least privilege, strict CSP (`script-src 'self'`, `connect-src 'none'`), device access only after a real tap, Dependabot keeps dependencies patched. The website's inline scripts and Suno toolkit loader were fixed to match |
| Microphone hardening (see `SECURITY.md`) | Real taps only, refused inside other sites' frames, auto-off (2 min idle, hidden page, other tab), minimal request, and `connect-src 'none'` so nothing can leave the page. Hiding code isn't real security; these are |

## How to change things

1. `sh dart/build.sh` (needs the Dart SDK 3.9+): analyze, checks, compile into `js/`.
2. Commit the compiled `js/` along with the source; open a pull request.
3. Merging to `main` publishes automatically in about a minute (watch the **Actions** tab).
4. New top-level files: add them to the workflow's copy step and to `FILES` in `sw.js` (bump `VERSION`).

## Latest on the website

- 2026-11-23 (david-petry-site PR #28): added **Audio Engineer & Producer** to the homepage intro,
  the homepage search data (job title and skills), and the Music page (tab title, and the
  section once called "Music Engineering"). It describes work the site already documents, not a
  job title. Suggested: use the same title on LinkedIn.
- 2026-11-23 (david-petry-site PR #29): homepage now leads with audio, not AI consulting.
  Hero: "Ears on the mix. Hands on the build." / "Audio Engineer, Music Producer and Live Sound
  Engineer. Drummer, Percussionist and Composer." About: "Many rooms, one good ear". Tab title
  "David Petry — Audio Engineer & Drummer"; og-card.jpg redrawn.
- **Facts to keep straight:** live sound since **June 2026**; working alongside professional
  producers and engineers as a drummer since **1999**. Most current work is audio engineering
  and live sound. David wants the copy **simple: state roles, no years, don't over-explain**.
- Website deploys cost Netlify credits (15 of 300 a month per merge): batch changes into one PR.

## Right now: David's two checklists

A private checklist page (https://claude.ai/artifact/99auR6DqbSdvc5byf2W2LV) holds both:
1. **GitHub security** (11 steps): two-factor sign-in and recovery codes; per repo, Dependabot
   alerts and security updates, secret scanning, push protection, private vulnerability reporting;
   a "Protect main" ruleset (no deletions, no force pushes, pull request required, 0 approvals).
2. **Phone and drum test** (18 steps with expected results): install and offline, silent switch,
   timing at 60/120/200, vibration, tuner lug by lug against another tuner, mic auto-off,
   large text, screen reader, both themes.

**2026-11-23 update:** Claude ran the phone test on a simulated iPhone 13 and Pixel 7. 14 steps
passed and are marked "Simulated: passed" on the page. Only 4 need real hardware: iPhone silent
switch, steady timing at 60/120/200 BPM by ear, locking the phone mid-play, and one lug against
another tuner on a real drum. A full-history secret scan of both repos found nothing; GitHub's
own scanner refused ("Advanced Security not enabled"), confirming Part 1 is still to do.
Lessons for re-running the simulation: the pages' `connect-src 'none'` blocks in-page fetch (use
Playwright's request API); fake leaving the app by setting `document.hidden`; wait for the 0.2 s
theme fade before contrast checks; use real touch events (CDP) for hold-to-repeat.

Its **Copy my results** button makes a summary. When David pastes it into a session: fix what
failed, then run the second UX audit from the real-device notes.

**Optional meanwhile:** practice exercises for the website's Exercises page (easy to hard, each
linking into Drum Studio at the right settings). Ask who it's for, then outline before building.

## Next up (backlog)

1. ~~**UX audit fixes**~~: all 14 items in `docs/ux-ui-audit-2026-11-20.md` are done. A fresh
   audit after real-device testing is a good next check.
2. **Phase 3: play-along grooves.** Brainstormed with the Superpowers plugin on 2026-11-20 (no
   design approved yet, nothing built). Agreed so far:
   - **Why:** practise time and feel against a band-like backing, not learn the grooves.
   - **Forms:** 12-bar blues and 32-bar AABA, any style with either form; generic changes
     (blues in F, AABA in C) so no song copyright; on-screen form map with chorus and bar.
   - **Band moments (option C):** intro, trading (band lays out every other 4 or 8 bars),
     stop-time hits, ending after a set number of choruses. Mute any part, e.g. the drums.
   - **Sound test result:** fully synthesized instruments (walking bass, piano comping, ride)
     sounded **"too cheesy"**, so pure synthesis is ruled out.
   - **Status: parked (David, 2026-11-20).** If it comes back, the remaining path is freely
     licensed recorded instrument samples shipped with the app (offline, ~5–15 MB, licences in
     THIRD-PARTY-NOTICES.md), a new sound test first, then a design doc in
     `docs/superpowers/specs/`, a plan, and the build.
3. **Real-device testing:** iPhone silent switch, Android vibration, tuner on a real drum, installing
   and using offline.
4. **GitHub security switches (David, in Settings):** two-factor sign-in, secret scanning with
   push protection, private vulnerability reporting, and a ruleset protecting `main`. Review and
   merge Dependabot pull requests when they appear.
5. **Housekeeping:** optional USPTO search for the "Drum Studio" name. (Done: Pages actions
   moved to Node 24 versions by Dependabot, PR #9; About box and app URL set.)

## Plugins worth using

- **Before merging any new screen** (now a rule in both repos' `CLAUDE.md`): run
  `design:accessibility-review` and `security-review`, and fix what they find.
- **Phase 3 design:** `frontend-design`, `design:design-critique`, `design:ux-copy`.
- **Practice content:** AudioPod stems (pull the drums out of a song) and MIDI (your playing into
  notes), for personal practice only; never publish stems of copyrighted songs or put them in the app.
  AudioPod, Develop21 and EasedUP don't connect from cloud sessions; use the desktop app or claude.ai.
- **Lessons and the Exercises page:** education-agent-skills such as `spaced-practice-scheduler`,
  `practice-problem-sequence-designer` and `worked-example-fading-designer`.
- Superpowers (Jesse Vincent) is installed: brainstorm → design → plan → test-first build.
- Being turned off by David: AudioPod and audiorective (neither is part of the plan).
- Skipped: audiorective (a second, npm-based audio engine would duplicate the Dart engine and add
  third-party code); EasedUP (school curricula, not private drum teaching).

## Suggested model and effort

- Feature work (audit fixes, play-along): **Opus 5.5, medium effort**.
- Copy and styling tweaks: **Sonnet 5.5**; tiny text fixes: **Haiku 5.5**.
