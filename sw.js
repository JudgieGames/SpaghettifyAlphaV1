// Spaghettify: keeps the game on the phone so it opens offline (a new build replaces the old copy)
const C = 'spaghettify-v273', FILES = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "icon-maskable-512.png", "game-1.js", "game-2.js", "data-ship-glb-data.js", "data-music-ascending.js", "data-music-descending.js", "data-title-glb-data.js"];
self.addEventListener('install', e => { e.waitUntil(caches.open(C).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== C).map(x => caches.delete(x))))); self.clients.claim(); });
self.addEventListener('fetch', e => { if(e.request.method !== 'GET') return; e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => { if(res.ok && new URL(e.request.url).origin === location.origin){ const cp = res.clone(); caches.open(C).then(c => c.put(e.request, cp)); } return res; }))); });
