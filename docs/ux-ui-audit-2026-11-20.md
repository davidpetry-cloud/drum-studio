# Drum Studio: UX & UI audit

**Date:** 2026-11-20 · **Build:** `main` at 7335a46 (live at https://davidpetry-cloud.github.io/drum-studio/)
**Method:** Nielsen's 10 usability heuristics, WCAG 2.2 AA (axe-core), mobile ergonomics
(thumb reach, first-screen content), and a five-senses accessibility review. Measured in
Chromium on iPhone SE (375×667), iPhone 13 (390×844), Pixel 7 (412×915) and a 1280×720 laptop.

**Severity:** 🔴 high (hurts a core task every session) · 🟠 medium (friction or a missing
expectation) · 🟢 low (polish). **Effort:** S (under an hour) · M (a few hours) · L (a day+).

---

## What already works well

- **Accessibility foundation.** 0 axe-core violations (WCAG 2.2 AA) on both pages in both themes.
  Beat levels use shape + label, not colour alone. Status changes are announced. Keyboard
  shortcuts (Space, ↑/↓, T) and a logical tab order. Reduced motion is respected.
- **Trust and privacy.** Works offline; settings stay on the device; the microphone opens only on
  request and audio never leaves the phone; tuning data is cited and labelled as starting points.
- **Learnability.** Tempo words (Andante, Allegro), a beat legend, plain-language hints, sensible
  defaults, and everything remembered between visits.
- **Consistency.** One design system shared with david-petry.netlify.app; title-case headings;
  44px controls throughout (the only smaller targets are inline text links, which WCAG 2.5.8 exempts).

---

## Findings

| # | Sev | Area | Finding (evidence) | Recommendation | Effort |
|---|---|---|---|---|---|
| 1 | 🔴 | Metronome, phone | **Start is below the first screen on every phone tested**: 16px (Pixel 7), 220px (iPhone 13), 376px (iPhone SE) below. The most-used button needs a scroll every session. *Heuristics: flexibility & efficiency; Fitts's law.* | Add a **sticky transport bar** at the bottom on phones: Start/Stop, BPM −/+, Tap. Bottom placement is also in easy thumb reach. | M |
| 2 | 🔴 | Tuning, phone | **The tuner is ~1,600–1,800px down** (2+ screens) and the page is 7–9 screens long. At the kit, the job is "tap and read", but the form comes first. *Heuristics: match the real world; efficiency.* | Add **section tabs** at the top (Tuner · Your Drum · Planner · How-to) and put the tuner first, or keep a "Start tuner" shortcut in the header. | M |
| 3 | 🔴 | Saved tempos | **Delete is instant with no undo** (tested: one tap removed the preset for good). *Heuristics: error prevention; help users recover.* | After deleting, show **"Deleted 'X' · Undo"** for about 8 seconds. | S |
| 4 | 🟠 | Both pages, phone | The page header (eyebrow, title, byline, intro) fills **~55% of the first phone screen**. That's fine for a first visit, wasteful for a tool you open daily. *Heuristic: aesthetic & minimalist design.* | On phones, use a smaller title and show the intro only on the first visit (or as a one-line summary). | S |
| 5 | 🟠 | Metronome | **No count-in.** Drummers expect a bar of clicks (or a spoken count) before the groove. *Heuristic: match the real world.* | Optional **count-in: off / 1 bar / 2 bars**, shown as "Count-in 1 2 3 4" in the beat light. | S–M |
| 6 | 🟠 | Speed trainer | Progress is invisible apart from the BPM number changing. *Heuristic: visibility of system status.* | Show a line such as "Speed trainer: 104 → 140 BPM · next +4 in 2 bars". | S |
| 7 | 🟠 | Tuner | Lug readings are numbered in tap order. One mis-tap shifts every lug after it, and the only fix is "Clear" (all). *Heuristic: user control & freedom.* | Let the user pick the lug count (6/8/10), tap a lug to re-read it, and remove a single reading. | M |
| 8 | 🟠 | Tuner | One generic message covers every microphone problem. *Heuristic: help users recognise, diagnose and recover from errors.* | Separate messages for *permission denied* (with iPhone and Android steps), *no microphone found*, and *page not secure*. | S |
| 9 | 🟠 | Beat grid | **Subdivisions aren't shown**, only beats light up, so 16ths and triplets are heard but not seen. This matters for hearing-impaired and visual learners. *Five senses: sight.* | Small sub-pulse ticks under each beat cell that light in time. | M |
| 10 | 🟠 | Install | The app can be installed, but nothing says so. *Heuristic: recognition rather than recall.* | An **"Install app"** button (Android/desktop Chrome) and a short "Add to Home Screen" tip for iPhone. | S–M |
| 11 | 🟢 | Tempo slider | 20–300 BPM on a ~200px phone slider is ~1.4 BPM per pixel, so fine control is hard. The ± buttons help. | **Press-and-hold** on ± to repeat, and accelerate after a second. | S |
| 12 | 🟢 | Sources list | Inline links are ~18px tall and stacked closely on phones. They pass WCAG's inline exception but are fiddly. | Add vertical spacing between source links on phones. | S |
| 13 | 🟢 | Remembered settings | Users aren't told that tempo, accents and tuning choices are remembered. | A one-line note in the footer or hints: "Your settings are saved on this device." | S |
| 14 | 🟢 | Tempo words | "Andante" is a nice learning aid, but its BPM range isn't shown. | Show the range on hover/tap ("Andante · 76–107 BPM"). | S |

---

## Five-senses review

| Sense | Today | Gap / idea |
|---|---|---|
| **Sight** | Big beat light, optional full flash, shapes + labels, high contrast in both themes | Show subdivisions (#9); count-in shown visually (#5) |
| **Hearing** | Three click sounds, separate accent/ghost/subdivision levels | Optional spoken count-in ("one, two, three, four") |
| **Touch** | 44px targets; vibration on Android | iPhone browsers don't allow vibration (platform limit). A sticky bottom bar (#1) improves one-handed use |
| **Taste / Smell** | Not applicable | — |

---

## Suggested order

1. **Quick wins (S):** #3 undo delete, #6 trainer progress, #8 mic messages, #4 compact phone header, #13, #12
2. **Biggest impact (M):** #1 sticky transport bar, #2 tuning page tabs
3. **Drummer features:** #5 count-in, #9 subdivision ticks, #7 per-lug tuner
4. **Polish:** #10 install button, #11 hold-to-repeat, #14 tempo ranges

Re-run the measurements after changes: Start must be visible on the first screen of an
iPhone SE, and axe-core must still report 0 violations in both themes.
