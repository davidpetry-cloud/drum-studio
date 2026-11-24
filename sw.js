/* Drum Studio service worker: makes the app work offline.
   Every file the pages need is cached on install. Requests are answered
   from the cache straight away, and refreshed from the network in the
   background, so an update shows up on the next visit.
   Bump VERSION when files are added or removed (see README). */
const VERSION = 'ds-v3';
const FILES = [
  './',
  './index.html',
  './tuning.html',
  './manifest.webmanifest',
  './css/studio.css',
  './js/theme.js',
  './js/metronome.js',
  './js/tuning.js',
  './fonts/fonts.css',
  './fonts/outfit-300-700-latin.woff2',
  './fonts/dm-mono-400-latin.woff2',
  './fonts/dm-mono-500-latin.woff2',
  './fonts/cormorant-garamond-400-600-italic-latin.woff2',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(VERSION).then((cache) => cache.addAll(FILES)).then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  event.respondWith(
    caches.open(VERSION).then(async (cache) => {
      // Pretty URLs (/tuning) share the cached page (/tuning.html).
      const cached = await cache.match(request, { ignoreSearch: true })
        || (request.mode === 'navigate' && await cache.match(new URL(request.url).pathname.replace(/\/?$/, '') + '.html'));
      const fresh = fetch(request)
        .then((response) => {
          if (response.ok && response.type === 'basic') cache.put(request, response.clone());
          return response;
        })
        .catch(() => cached || (request.mode === 'navigate' ? cache.match('./index.html') : Response.error()));
      return cached || fresh;
    }),
  );
});
