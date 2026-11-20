# Instructions for working on Drum Studio

- New pages use the design tokens in `css/studio.css` (shared with
  david-petry-site's `site.css`) and add no inline styles: no `<style>`
  blocks and no `style=""` attributes. The Content-Security-Policy (a
  `<meta>` tag at the top of each page; copy it into any new page) forbids
  them; scripts may only set CSS custom properties through the CSSOM.
- Label music and tuning data as starting points, and cite current sources.
  Every material, head and range entry in `dart/lib/tuning_data.dart` names
  its source; sizes no source covers are scaled and say so on the page.

## Working notes

- Behaviour is Dart in `dart/`, compiled to `js/` with `sh dart/build.sh`
  (analyze, checks, compile). Commit the compiled output: the Pages workflow
  (`.github/workflows/pages.yml`) runs the checks but doesn't compile.
- Keep logic that doesn't need the browser in `dart/lib/` and cover it in
  `dart/test/checks.dart`.
- If files are added or removed, update `FILES` and bump `VERSION` in `sw.js`,
  and add new top-level files or folders to the workflow's copy step.
- Accessibility: every state shown by colour also has a shape or text, and
  controls are at least 44px tall. Announce changes through the page's
  `role="status"` region.
- Licensing (see `LICENSE`): code is PolyForm Noncommercial 1.0.0, content
  is CC BY-NC 4.0, both crediting David Petry. Keep the `Required Notice`
  line intact. Don't add third-party code or assets without recording their
  licence in `THIRD-PARTY-NOTICES.md`.

## Security by default

For all code: apply least privilege and defense in depth. Never commit
secrets or personal data. Access to devices (microphone, camera, location,
Bluetooth, USB, IoT) only after a real user action, with clear on-screen
state, automatic shutoff, no network exfiltration, and refusal inside other
sites' frames. Use strict security policies (CSP, no third-party scripts
unless needed and pinned). Test like an attacker before shipping, document
protections in `SECURITY.md`, and keep dependencies patched (Dependabot).
Obscurity is never the protection.

Before merging any new screen, run the accessibility-review and
security-review skills and fix what they find.

In this repo that means: keep `connect-src 'none'` and `script-src 'self'`
in both pages' CSP; keep the tuner's protections (real tap only, no frames,
auto-off, one audio channel) and update `SECURITY.md` if they change; review
and merge Dependabot pull requests promptly.
