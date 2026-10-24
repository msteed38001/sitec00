const CACHE_NAME = 'intranet-cache-v1';
const ASSETS_TO_CACHE = [
    'app.html',
    'content.db',
    'js/sql-wasm.js',
    'js/sql-wasm.wasm',
    'manifest.json'
];

// Install the Service Worker and cache the files
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// Intercept network requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            // Return the cached file if found, otherwise fetch from network
            return response || fetch(event.request);
        })
    );
});