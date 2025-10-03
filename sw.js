const staticCacheName = 'site-static-v1'
const assets = [
    '.',
    'index.html',
    'images/img.png',
    'css/style.css',
    'manifest_and_icons/icon512_maskable.png',
    'manifest_and_icons/icon512_rounded.png'
]

self.addEventListener('install', evt => {
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('assets')
            cache.addAll(assets)
        })
    )
})

self.addEventListener('activate', evt => {
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== staticCacheName)
                    .map(key => caches.delete(key))
            )
        })
    )
})

self.addEventListener('fetch', evt => {
    evt.respondWith(
        caches.match(evt.request).then(cache => {
            return cache || fetch(evt.request)
        })
    )
})