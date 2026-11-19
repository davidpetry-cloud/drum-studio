# Third-party notices

Drum Studio is proprietary (see `LICENSE`). It includes the third-party
components below, which keep their own licences. Those licences apply only
to these components, not to the rest of the repository.

## Fonts: SIL Open Font License 1.1

Served from `fonts/`. The full licence text for each family is in that folder.

| Font | Copyright | Licence file |
|---|---|---|
| Outfit | The Outfit Project Authors | `fonts/OFL-outfit.txt` |
| DM Mono | The DM Mono Project Authors | `fonts/OFL-dm-mono.txt` |
| Cormorant Garamond | The Cormorant Project Authors | `fonts/OFL-cormorant-garamond.txt` |

The OFL lets the fonts be bundled with software as long as the licence comes
with them and the fonts are not sold on their own.

## Dart SDK runtime: BSD 3-Clause

`js/metronome.js` and `js/tuning.js` are compiled from this repository's Dart
code with the Dart SDK's `dart compile js`. The output includes parts of the
Dart runtime and core libraries, under this licence:

```
Copyright 2012, the Dart project authors.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
      copyright notice, this list of conditions and the following
      disclaimer in the documentation and/or other materials provided
      with the distribution.
    * Neither the name of Google LLC nor the names of its
      contributors may be used to endorse or promote products derived
      from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```

## Research sources

The tuning guide links to the published articles it draws on (listed on the
Tuning page and in `dart/lib/tuning_data.dart`). Their text is not copied;
the guide summarises them in its own words and links to them.
