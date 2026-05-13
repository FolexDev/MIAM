const CACHE = 'miam-v1';
const ASSETS = ['/', '/MIAM/', '/MIAM/index.html', '/MIAM/icon-192.png', '/MIAM/icon-512.png'];
 
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});
 
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
 
