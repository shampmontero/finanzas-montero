const CACHE_NAME = 'finanzas-abel-v1';
// Cambiamos index.html por ganancias.html
const urlsToCache = ['./', 'index.html'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
