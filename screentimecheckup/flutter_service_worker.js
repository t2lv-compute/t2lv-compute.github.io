'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "2f448760e0236147a3e91e49ba18d6f9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "81d16f4aa8d01633b597921579df120e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3602fd3e92eab0510c8b22d2170786d1",
".git/logs/refs/heads/main": "3602fd3e92eab0510c8b22d2170786d1",
".git/logs/refs/remotes/origin/HEAD": "3602fd3e92eab0510c8b22d2170786d1",
".git/objects/pack/pack-26913b305bd82ec71e8302356cfb67ad581ad707.idx": "25929f04b2515c1b441ec82871ef4b27",
".git/objects/pack/pack-26913b305bd82ec71e8302356cfb67ad581ad707.pack": "b16618268fd7ef7c0156f8c351ff73aa",
".git/objects/pack/pack-26913b305bd82ec71e8302356cfb67ad581ad707.rev": "4b1b066dbb762a3859f54796522f61b5",
".git/packed-refs": "8d890706c778cf81d7a572527bd3e66b",
".git/refs/heads/main": "473c51a5b92a0aabe5371dbf802e1394",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d9ada5e03d87f8efecc4c54a98b244a4",
"assets/NOTICES": "ce50f736ba333e7385c7646bf1e3307d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "028d579fc508665af3ab11292aec2476",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "a1c36ddbc02e65ef889d2b8aca72a405",
"icons/Icon-192.png": "e3816fa1bc3d8b596ff0c0ac1f57e0f0",
"icons/Icon-512.png": "f7bceefcaef259d863769bd315a77532",
"icons/Icon-maskable-192.png": "172eccbffdcc8c52d08dc80479b48b30",
"icons/Icon-maskable-512.png": "c1e6747af595ecd7dfbaf1e7d7e69f03",
"index.html": "13f71a2212198ca4db1157967722c357",
"/": "13f71a2212198ca4db1157967722c357",
"main.dart.js": "68a24590a63929b72b3d77da3944d94b",
"manifest.json": "f202fc9311e340a76aa4aa7f40e7a73c",
"privacy-policy/index.html": "5509f995b86fa18afc551247973d40d4",
"screentimecheckup/assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"screentimecheckup/assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"screentimecheckup/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"screentimecheckup/assets/fonts/MaterialIcons-Regular.otf": "d9ada5e03d87f8efecc4c54a98b244a4",
"screentimecheckup/assets/NOTICES": "17092b912f5f4d76ee289debb9a0ae53",
"screentimecheckup/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"screentimecheckup/assets/shaders/ink_sparkle.frag": "9bb2aaa0f9a9213b623947fa682efa76",
"screentimecheckup/assets/shaders/stretch_effect.frag": "a70217f9ceba606e287441a0df5be64d",
"screentimecheckup/canvaskit/canvaskit.js": "4d1e85fa7485c3b2f38877206ad60089",
"screentimecheckup/canvaskit/canvaskit.js.symbols": "cd60996d998c96148c6b3245aa4f79be",
"screentimecheckup/canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"screentimecheckup/canvaskit/chromium/canvaskit.js": "5986f8281d3ff5aa43516ec637c2352b",
"screentimecheckup/canvaskit/chromium/canvaskit.js.symbols": "abce3e84295438db81e9753c30fe3c2b",
"screentimecheckup/canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"screentimecheckup/canvaskit/skwasm.js": "d16458b3d26fe6c8c52bf62df5e5a52f",
"screentimecheckup/canvaskit/skwasm.js.symbols": "148546317b68494b4e09dcab02f87135",
"screentimecheckup/canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"screentimecheckup/canvaskit/skwasm_heavy.js": "d684311c36a7a439e12bebd0b63a9bea",
"screentimecheckup/canvaskit/skwasm_heavy.js.symbols": "218aadf9004b320bc6cf0d0bb04ed157",
"screentimecheckup/canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"screentimecheckup/favicon.png": "028d579fc508665af3ab11292aec2476",
"screentimecheckup/flutter.js": "1c7e59be1cc906f8d37361ad32ed7e52",
"screentimecheckup/flutter_bootstrap.js": "31d7a0238ca3570b516b72f240d0d7da",
"screentimecheckup/icons/Icon-192.png": "e3816fa1bc3d8b596ff0c0ac1f57e0f0",
"screentimecheckup/icons/Icon-512.png": "f7bceefcaef259d863769bd315a77532",
"screentimecheckup/icons/Icon-maskable-192.png": "172eccbffdcc8c52d08dc80479b48b30",
"screentimecheckup/icons/Icon-maskable-512.png": "c1e6747af595ecd7dfbaf1e7d7e69f03",
"screentimecheckup/index.html": "13f71a2212198ca4db1157967722c357",
"screentimecheckup/main.dart.js": "2d17e03944634cb2052118c5220476a6",
"screentimecheckup/manifest.json": "f202fc9311e340a76aa4aa7f40e7a73c",
"screentimecheckup/version.json": "011fa5f48a888c8c20f06458456c641e",
"version.json": "011fa5f48a888c8c20f06458456c641e"};
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
