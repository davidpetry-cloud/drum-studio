# Security

## How the microphone is protected

The tuner on the Drum Tuning page is the only part of Drum Studio that uses
the microphone. It is built so the microphone can't be opened quietly, kept
open, or used to send sound anywhere.

| Protection | What it means |
|---|---|
| **Your permission, every site** | The browser asks before any site can use the microphone, and you can revoke it at any time in the browser's site settings. Drum Studio can't bypass this. |
| **Only on a real tap** | The tuner starts only from a genuine click or tap on **Start tuner**; clicks faked by scripts are ignored. |
| **Never inside another site** | If another website embeds the tuning page in a frame (a "clickjacking" trick to get people to grant access), the tuner refuses to start. |
| **Secure pages only** | The microphone is used only over https. |
| **Switches itself off** | After 2 minutes without a tap; when you switch apps or tabs, lock the screen, leave the page or leave the Tuner tab. |
| **Least access** | One audio channel, no camera, one request at a time; every track is stopped when the tuner turns off. |
| **Nothing leaves the device** | Sound is measured in memory to find a pitch. It is never recorded, stored or uploaded. Each page's security policy (`connect-src 'none'`) forbids the page from making any network request at all, so even injected code couldn't send audio anywhere. |
| **No third-party code** | Every script comes from this site, and the policy forbids inline and outside scripts (`script-src 'self'`). The app has no analytics, ads or trackers. |

### What we can't control

- The browser and the operating system: keep them up to date.
- A device that's already compromised by malware.
- GitHub Pages can't send some protective HTTP headers (for example
  `frame-ancestors`), so framing is blocked in code instead (see above).

## On hiding the code

The published JavaScript is compiled and minified, but no website can truly
hide its code: the browser has to download it to run it. Drum Studio's
security therefore comes from the protections above, not from secrecy.
The source code in this public repository is licensed for noncommercial use
only (see `LICENSE`).

## Reporting a vulnerability

Please report security problems privately, not in a public issue:

- Use **"Report a vulnerability"** under this repository's **Security** tab
  (if private vulnerability reporting is enabled), or
- contact David Petry through https://david-petry.netlify.app/.

Please include the steps to reproduce. Thank you for helping keep drummers'
microphones safe.
