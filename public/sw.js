/*
 * Vøringsfossen Service Worker — legacy cache cleanup.
 *
 * The previous cache-first worker stored the redirect from / to /en.
 * Serving that cached redirected response during a navigation can cause
 * Chrome to fail with net::ERR_FAILED. This replacement deliberately does
 * not intercept fetch requests, leaving routing and caching to the server.
 *
 * Keep the script registered so existing visitors receive the replacement
 * worker and their old caches are cleared on activation.
 */

const LEGACY_CACHE_PREFIX = 'voringsfossen-';

self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key.startsWith(LEGACY_CACHE_PREFIX))
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});
