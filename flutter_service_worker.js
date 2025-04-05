'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "89233a3987cf3d1071c91ff8472efe87",
"assets/AssetManifest.bin.json": "a6d004b7aa57c1e677dfae9e69b832d6",
"assets/AssetManifest.json": "c87d33dad27000eea019b65b5e37c580",
"assets/assets/images/Aata.jpg": "223a059543509931959d7e39923ad348",
"assets/assets/images/Almond.jpg": "dd70faa03a97353efcac7aa29c756174",
"assets/assets/images/Amaranth.jpg": "dd70faa03a97353efcac7aa29c756174",
"assets/assets/images/Arrowroot.jpg": "dd70faa03a97353efcac7aa29c756174",
"assets/assets/images/Bajra.jpg": "dd70faa03a97353efcac7aa29c756174",
"assets/assets/images/Barley.jpg": "dd70faa03a97353efcac7aa29c756174",
"assets/assets/images/Besan.jpg": "dd70faa03a97353efcac7aa29c756174",
"assets/assets/images/Buckwheat.jpg": "dd70faa03a97353efcac7aa29c756174",
"assets/assets/images/Coconut.jpg": "dd70faa03a97353efcac7aa29c756174",
"assets/assets/images/Corn.jpg": "dd70faa03a97353efcac7aa29c756174",
"assets/assets/images/FingerMillet.jpg": "dd70faa03a97353efcac7aa29c756174",
"assets/assets/images/Jowar.jpg": "dd70faa03a97353efcac7aa29c756174",
"assets/assets/images/Logo-N.png": "a48add0333709426d15a4ba9ee5c629f",
"assets/assets/images/Logo.png": "ee7805b6d37ddfb8e42aea3ef63b2aa8",
"assets/assets/images/Maida.jpg": "dd70faa03a97353efcac7aa29c756174",
"assets/assets/images/MoongDal.jpg": "dd70faa03a97353efcac7aa29c756174",
"assets/assets/images/Multigrain.jpg": "dd70faa03a97353efcac7aa29c756174",
"assets/assets/images/Oats.jpg": "dd70faa03a97353efcac7aa29c756174",
"assets/assets/images/Quinoa.jpg": "dd70faa03a97353efcac7aa29c756174",
"assets/assets/images/Ragi.jpg": "dd70faa03a97353efcac7aa29c756174",
"assets/assets/images/Rice.jpg": "dd70faa03a97353efcac7aa29c756174",
"assets/assets/images/Rye.jpg": "dd70faa03a97353efcac7aa29c756174",
"assets/assets/images/slider1.jpeg": "6bb7de16514c9ef74d95badfd5ba2b03",
"assets/assets/images/slider2.jpeg": "cfcfcdfb4ea94765ff6f7e40bd1ec66f",
"assets/assets/images/slider3.jpeg": "46131c4d32fcdd44e1ce5842706d19cf",
"assets/assets/images/Sorghum.jpg": "dd70faa03a97353efcac7aa29c756174",
"assets/assets/images/Soya.jpg": "dd70faa03a97353efcac7aa29c756174",
"assets/assets/images/Tapioca.jpg": "dd70faa03a97353efcac7aa29c756174",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "948a1ca909ca78a9ddae1818aff4592d",
"assets/NOTICES": "2a68aa5e070a3dca1168127975d41ca1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "1d09b414d16824798c0e6be60f50b9db",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "33cef1b6121855ee50b16873e948dad4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "09a52066faf762e5f5db4ed6c4a3f8f5",
"/": "09a52066faf762e5f5db4ed6c4a3f8f5",
"main.dart.js": "8a466087399015895f3a0d11b5aa193c",
"manifest.json": "9290e7459863d9d92728d6b9c8f8d9a8",
"version.json": "6ae3c1a02949d9c80a74b1bf94790c23"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
