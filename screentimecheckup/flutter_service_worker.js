'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "33f083388bc0dd18df7d15a459c55d0b",
".git/config": "74df3bdcd7d4042aa2c712b9dabcdb8b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5e50aa7070750ace11f0d4996f67306d",
".git/HEAD": "d6031fb5589310f411023f12cf98eed6",
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
".git/index": "eceaecb5a326d425ab9ad24d44fbf08e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6f039a46f2c773a0443f6812c40089a0",
".git/logs/refs/heads/root": "6f039a46f2c773a0443f6812c40089a0",
".git/logs/refs/remotes/origin/HEAD": "169190e3614900a57d7519dbb8a5d31d",
".git/logs/refs/remotes/origin/main": "a455036cf8f00b57582ea400a7384527",
".git/objects/01/f219271574b8140e40aeba2f99c6a5e675ff8b": "0a291edeb9799c2fc198c88264f0665a",
".git/objects/05/b7fa635260cdf0cd57f670918ac8a50a04b9a1": "965cdecccbdb3742419ec35e962bb464",
".git/objects/07/882eecba4c87c1776a052fdb979b9e1a572a12": "9f84d3c643218d31334db35bb9e823a4",
".git/objects/10/34f128232dc790a6429ad9d8db0d154ba6dafb": "ea0c5e1657c10023feb261072f1931ce",
".git/objects/16/18b5b3d39bf29c1b358d1d3184d38aff27fcc3": "ca1d3d2390152744dc6fb3f25f6b21e7",
".git/objects/20/bc811b3017186c1245755ea496ddd1c0fe659e": "94dc8f64716ac9a45652aa11f0e23c35",
".git/objects/23/2a36fd6eb69b4ac85bf00897f1eb4614fe9c80": "2cd89ce08be7a5469cbbb03e07146760",
".git/objects/27/b9066f55e594e4275f21c4b79ea3266ccad174": "e52ce8646a87215f686782ba19f19587",
".git/objects/2e/fca786aee10f7556e9a30c2acbd7a81544dfd1": "fd94d0e773dc38f054e9c0e4d95eb22a",
".git/objects/30/16fa59dacf7846b2903303144a576c95a22aff": "65152a4897726df3d9800ddbae4b3593",
".git/objects/33/6fd6eac4c077df226c60975b49bc432c2a290d": "300ca649fa28ce95ea30092d39faccf8",
".git/objects/33/e471b02a7b1d7a4227a9d9b4a2cb10f5bcd2a0": "da17b36bf2ff29be2df7253f5b9b74dd",
".git/objects/3a/47b1e7e59f882aa3b2bc4030864b23968b6883": "a6f570f4550f17dbe01395b437870dbf",
".git/objects/3a/fa6a9130315be15dba40b39f71d1601ac8b413": "300400a1021ff2ef67c3884c5a48d397",
".git/objects/41/f6fa2f571762a48a24946beb9a4c52e0fd879d": "972cca357fa71f8fc2c35e6ff07b5ba3",
".git/objects/44/0f21ea0932abc68f36acd656d7b1644cd55d58": "8435a96d3c3f564727129af563c2cfda",
".git/objects/46/449f4cac9ce4a9c59843f8986c11b16a5a0f6a": "568c15869e2c7780b2e0785d62faa220",
".git/objects/48/8144f437c3b63015d24417e84fb1c5cd4bafff": "4333a25f1242607f71ea7ac2c2351f83",
".git/objects/4a/022943a62dc8b4202cbb5bd29c83576f1d29e2": "bff08952242f5b6dd6206b1138dea928",
".git/objects/4e/31f40d825d46d3b801496d07da03b73c93b44d": "66e9a4180f722357aa9bbd8ec23c66a1",
".git/objects/51/7f2d73e3b00b5b369d15e9a4d32da8cd21a330": "aba192522ad40cf986d8b8e1af46dbf3",
".git/objects/56/355e65f0dc81ae0c5db7fb0483719fe574f1df": "f794ad4fdcb09bd6d43185783fd2ad89",
".git/objects/5c/11a8e0b725102cf20a00def15777f23ddc0958": "f69193fac012478d97e6ab140b61b187",
".git/objects/5d/a0a523fb8b2c2a8bded2211f0a8d81c667cbb7": "03861a1130a60c9414f3a911d8568b07",
".git/objects/5d/c37abb547457227100f3f15b3328d234f70256": "bb1aada359d4c598b049b0f7b8720894",
".git/objects/62/9d7ceced34a26c967d9b8d96f119b513f3fde5": "c2d774e35ca1f281b8b8aaa1e29db772",
".git/objects/69/a86b5b8d4284e868192d39f0df2f13c1c7e4fc": "f4f45e1118da74ef4de8e31f0786e1ee",
".git/objects/6e/8386d45cf45b39fce2870306b137458c7119b3": "5c4654e17245ea83e8fd4102845d5929",
".git/objects/6e/fdeb2133b4cf9fb1f5877dd4dadff60dfa9fb0": "5d4a82b12701427af3039f87e2bb94c3",
".git/objects/7d/2ae7b19a24df228314da1bdd63368221096196": "2be246089a3760bc807d98368fb46b19",
".git/objects/82/5fa8574166379a11675e5d6a9dd6c6c6f124ad": "935e29369d15bbcfcc67738f1830fe23",
".git/objects/8a/fb64f46eee47ae3bf9f4dc2dce3e496c5fbc88": "f940ed9e7f22271224a94d075f5aab1e",
".git/objects/8f/237f84e44a94b17260ab1a77fb7e77cfdbf07b": "c6f47639826233e839a1ee66165406ce",
".git/objects/93/548683fc955b2d44754311a38a431ccd765b62": "bcc50df9e419811610f69e6da73cde49",
".git/objects/98/6e549378636155932f7a3047f8452666980d70": "7b2c2afa48c1e82731feaf665f8a997d",
".git/objects/9a/ae94f31c9b1da17f6b5fe34cb05ef183613a5f": "1b6333e8eea77fb69971bc35857ee192",
".git/objects/9e/938530a89c651ab3101b557155319d930ccded": "bbc92888b6fd60cbf64243835373f81b",
".git/objects/9e/97ab38815d03b99f580957e6acace7453b5469": "dbf515a54441e9d17075db83d8bbe58b",
".git/objects/a3/4e907827bbbeeebf329462cff3ba89e2383db2": "f342841c94c55b612bdeac236887bb60",
".git/objects/a5/c40c855b20572dfdf20e175a78670c9608d098": "6b0b5069a07837965015730653d57541",
".git/objects/a8/2305ca4bb0666e9b73f1727bb731264244346c": "2854c7306c8c1abfdb6211be5073e05f",
".git/objects/ab/80cac2fd86abbb93d51998db919993df3352fa": "84587fc946e65639d53c70c04b70a494",
".git/objects/b0/5ec1337d9ee09fc3758ce2b39bbf2e0d807079": "ac3acdd4d1eec31d6c5e7faf9946e533",
".git/objects/b7/c33a10fc29bbb0b81566fb9a685fefd699652f": "55d61e1c89cfccba83eba3c8ec5b4515",
".git/objects/bb/39a6da52036ba095bb4d5f6665c541434ac801": "afaf37d310333849571fc8cbef25e119",
".git/objects/bb/abe9118db39f9debf09e7594ce9f0222246346": "f867cb70c0f461961f6e6a59f48a9919",
".git/objects/c3/492d572f4c4fce2b94b6fdc633e19e288f35f5": "f4f54a749547d0a63dda80638c5bd7b0",
".git/objects/c4/62c4cb424d8c188bef8baf19f4d133b6be2ca3": "9e7ee4af6d0e53eaaa262519137938d8",
".git/objects/c4/fda3906eb1bc3a1fa763847cac8570fbf2929f": "8b675a0bdc72fa8ea2b48059d9ac8c0c",
".git/objects/c6/7554037b144d900e49f7b274cf3bae2e3a783d": "3121cc2c827560c4cb68bd4d3e429af1",
".git/objects/ca/92a0f59d0d4c427fa676a488d7fe07f9e2f24d": "7e57f502078393157f767c10686a9fae",
".git/objects/cc/99ec49596a80dbc45955b3be574934ee81896b": "5dfb252accf576dc03ebb9ffcedb9fa5",
".git/objects/ce/5c17b7fa78a434916dc19921c6625093c18c5e": "f28d79b13a3567d453433d197fa601e7",
".git/objects/ce/7946fb17a01f0af7dc0657b36d35abee87450a": "662dd065682dfe49a17587624e592559",
".git/objects/d0/86931ac1e254641bcd3287048ca901c0c68318": "c2eb3e33604e34d5cdc75195da3d58fe",
".git/objects/d1/b92d6f128136cd64ea105313d49c79f245d25c": "2a327b7b399725df5c4d468e01f5814a",
".git/objects/d4/9cc6ce41abf0b4760b94ad627b0755889675ff": "40689e35353be937f0b8aa564c3248e1",
".git/objects/d5/cefb7ba5be8950d9696fdbf4d2f9db5e3cc934": "d8c48440c31060d6c090a3666fa0f1e7",
".git/objects/db/5643dae32f4b5eeacd1354e4ea4cb22857a4b8": "f9b52241771925e509fcc7c027e48cbd",
".git/objects/df/fa84a43183cd89378b3e840c3b8c44cb1f1e30": "74b5685acc746f38b7a8942acaf15d29",
".git/objects/e2/bb431d7ea9936de3a887495cabeb852c98ba1a": "7f0f44c791eba345665a00c56e9cd686",
".git/objects/e4/8ff752e29459e03d4fe43f275bc6dfe8531a25": "a20e5d492763566b479683d19f1efbd9",
".git/objects/e5/396e0874105b3d47a7a850b8ae02e8bfb6ca5f": "b07eca8ce304c1ff963a3221af116850",
".git/objects/ea/6ec18774be95fd308ccead4c522979467db129": "f9844792de8e8e57af7160219203a992",
".git/objects/ed/ee81c1f9a302d013ed15b90949a1e2df350fe5": "c364e0eb8d984ed11d1cc7509a746c8c",
".git/objects/fd/11b1b3d761d0d57674570fc855cdcd239271b2": "fb390b6dbc7dde996d1b585d38775d3b",
".git/objects/fd/52ec3d2b7b1349d166a69bed0d7a340e71a0c7": "005c32ab35f7224fb1415a5b6d33a319",
".git/objects/fd/6a3d278a0d5ad59de5e8ccc788b00b859ef8cd": "80354b877e9560daf88f4becd991fc69",
".git/objects/pack/pack-07572c5185d8c502461d588405aaa5184df3d43d.idx": "237877c7d07ec10ba31de442c61f8017",
".git/objects/pack/pack-07572c5185d8c502461d588405aaa5184df3d43d.pack": "e7fbfdb59d7d88cdd2ea21174442acd4",
".git/objects/pack/pack-07572c5185d8c502461d588405aaa5184df3d43d.rev": "08c1b2f3490130483dff6fff2be5a558",
".git/refs/heads/root": "e361c488a6c76d23e40a0987475962e3",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "e361c488a6c76d23e40a0987475962e3",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "ce50f736ba333e7385c7646bf1e3307d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
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
"flutter_bootstrap.js": "a6d4d2bb1c21ac6f21cb71331ed6b022",
"icons/Icon-192.png": "e3816fa1bc3d8b596ff0c0ac1f57e0f0",
"icons/Icon-512.png": "f7bceefcaef259d863769bd315a77532",
"icons/Icon-maskable-192.png": "172eccbffdcc8c52d08dc80479b48b30",
"icons/Icon-maskable-512.png": "c1e6747af595ecd7dfbaf1e7d7e69f03",
"index.html": "13f71a2212198ca4db1157967722c357",
"/": "13f71a2212198ca4db1157967722c357",
"main.dart.js": "6572d241b5256875b453027ed65dc822",
"manifest.json": "f202fc9311e340a76aa4aa7f40e7a73c",
"privacy-policy/index.html": "afd2d5d7b72e6758084b2e76a8b60e03",
"screentimecheckup/assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"screentimecheckup/assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"screentimecheckup/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"screentimecheckup/assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"screentimecheckup/assets/NOTICES": "ce50f736ba333e7385c7646bf1e3307d",
"screentimecheckup/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"screentimecheckup/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"screentimecheckup/assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"screentimecheckup/canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"screentimecheckup/canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"screentimecheckup/canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"screentimecheckup/canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"screentimecheckup/canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"screentimecheckup/canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"screentimecheckup/canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"screentimecheckup/canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"screentimecheckup/canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"screentimecheckup/canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"screentimecheckup/canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"screentimecheckup/canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"screentimecheckup/favicon.png": "028d579fc508665af3ab11292aec2476",
"screentimecheckup/flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"screentimecheckup/flutter_bootstrap.js": "7ed2e6693c97a563f3e60bc636a8e87b",
"screentimecheckup/icons/Icon-192.png": "e3816fa1bc3d8b596ff0c0ac1f57e0f0",
"screentimecheckup/icons/Icon-512.png": "f7bceefcaef259d863769bd315a77532",
"screentimecheckup/icons/Icon-maskable-192.png": "172eccbffdcc8c52d08dc80479b48b30",
"screentimecheckup/icons/Icon-maskable-512.png": "c1e6747af595ecd7dfbaf1e7d7e69f03",
"screentimecheckup/index.html": "13f71a2212198ca4db1157967722c357",
"screentimecheckup/main.dart.js": "5b388b8394c812b0f6df5c431ecc0b34",
"screentimecheckup/manifest.json": "f202fc9311e340a76aa4aa7f40e7a73c",
"screentimecheckup/version.json": "c5aa4018a3725bab0835a0097951e0ff",
"version.json": "c5aa4018a3725bab0835a0097951e0ff"};
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
