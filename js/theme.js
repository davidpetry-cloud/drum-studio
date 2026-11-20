/* Applies the saved (or system) light/dark theme before first paint, so the
   page never flashes the wrong colours. Loaded in <head>; kept tiny and
   separate so the security policy needs no inline scripts. */
(function () {
  var t;
  try { t = localStorage.getItem('ds-theme'); } catch (e) {}
  if (t !== 'light' && t !== 'dark') {
    t = window.matchMedia && matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  document.documentElement.setAttribute('data-theme', t);
  document.documentElement.classList.add('js');
  // Pages look the same on every visit. Tidy away the old first-visit flag.
  try { localStorage.removeItem('ds-visited'); } catch (e) {}
})();
