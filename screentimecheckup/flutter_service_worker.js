'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e333f1094ad9af9b5f29028b26301a0b",
".git/config": "2f448760e0236147a3e91e49ba18d6f9",
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
".git/index": "4bd364db8e4bac6b592078248594b393",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "276e9cc6c945bb242960a4b4d35bcadb",
".git/logs/refs/heads/main": "0afb9cfc9d061f940a8600d9082f8e31",
".git/logs/refs/remotes/origin/main": "9436da4e2f344fc8f35bb97b7a7b654e",
".git/objects/07/42fa18c9ef1b01cfa0b3863af842a29d7824bc": "6748c512ae3ff1d9c29c1376649f6ab3",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/09/fa1dbeb3dafa3b188bbc16cd5db596b74ee957": "d18b4774294cb28a44f1c2115b811cd8",
".git/objects/0a/92cca668658b3b45257c637443781668b29c1e": "878573cde9cbacf32be260f88714e4a6",
".git/objects/0c/8c02285a6f3fa28f987428f47891bb01fd7e4a": "b6019ce616b54cb0b48b8e6d2dfdd9f1",
".git/objects/0d/04e4ce6967aeab9c5b851445487736ebef277b": "0f2a29c1f2fdee1722488d362524b976",
".git/objects/0d/cfd9547cd0840043488b742629c132a62baeca": "a8884223eb34cb4ca46a484c25b0d72f",
".git/objects/0e/57d3b807786d8ed802b57e925045197574c333": "1349f14a9d0fc0992804a34d985a3932",
".git/objects/12/2d4a17bf3d104b7826091daa8ac46d49448e93": "e8b700b256c76fde1e2219d81a1326b0",
".git/objects/18/f20b666cfac744082fdd9e5f8fdc4b9ece2c96": "5fa4c648a69f6c17851204112b7a7949",
".git/objects/1b/c5b0295262ae0eb8f9fb248330314ed963ca93": "21a9ff1554a0a533c363baa5a2b16dfe",
".git/objects/1c/2c0b3acc826d3a879a1f4362fcb739f3da6505": "9ab65110790d5a5958a7687c0fcc5aac",
".git/objects/27/995072076635425df6530f01159b16a9b0613e": "434a116fc6f26e18313cf39513bfa3b0",
".git/objects/2c/1d25d9e1c07434ed4d3e230f9baa9d3f0ff246": "c4f073ea47432ff9ee0a4675808db933",
".git/objects/2d/3f5e46bcbb789aa74c0beb4ce2708bb51d58dd": "1e7fbb6a3043c803be0214493a391bc9",
".git/objects/2f/37b45c87b1cff3bf35e417752f7c3713bd50be": "347b5d1e331930b45aa6b81f618ca1a2",
".git/objects/34/ab4c4658ee9c68d652cf1ea0225eb5a66436f2": "35f1c39d5bb6f2b7ed0a792a78f41bcc",
".git/objects/36/ef725a759e85035ce54cc161ba658afbb4b38b": "d6e9eb77d2eeb67c8ae659b25a1ef3e6",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3a/e4f7277358cad4679e97ff3b3f934acef661bf": "eca51ff5b5552fe63a92ca5239b8f4b6",
".git/objects/42/2e314cc904432dc23aa171d732740d4088972a": "6cf1205bdb83c0c8489a1c6bdfa299d4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/e1de0c952e8d26d7a4a1f8c90ce7d16e7cbd79": "913814687d1b8de6fdf0a3617336a014",
".git/objects/50/4b16d286fcac7ac042f54eb34bdb6f5e96b274": "80c63e4e90325fb675fe560c374c7bac",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/51/c3b117e05c6e2ad5efff204e39e8f7a54fb306": "42e7cb40e55d07f26615b8ca3683f4c3",
".git/objects/52/cd1801c4f329f7afa6263f5aaeb14b76dc3233": "4baae338239431615c95828522029245",
".git/objects/53/50e332c0f19d6b670625e3e2b692477a0d7e0e": "cc46c0d2d01456f2d0345e01ed41458b",
".git/objects/55/e97423b69e632d86554265629f9f27dc1f4301": "aa9360e9006e0e7efc1ead7530dd33cd",
".git/objects/57/db35e8fa87349bc2917087dcf6b793bac000bd": "33a934f413599423142f27d8f4f1be6e",
".git/objects/5c/6324063d5b9eae29ca4c9f8c724328c159accc": "e0af99f315aada85abecf8b0ba3c2e43",
".git/objects/64/89ef85c27af30273346833bf38ebf67e91b825": "e4600f660986ad3d060b70fb3e6e0b03",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/73/d7ed55bbfebe89a3e790d912bcc1ddfe30b0b8": "e239f13fdc14245750378d2d91ab43b8",
".git/objects/75/98ef289726227885615276e40fa7543dc603e7": "dc13b53e1b9fbc5e6b33e9e68bd04adc",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7c/394db208acf0647d8c0e3ed6b74d5079cf9ed6": "e18d729fd139f71417ea7ff160431b92",
".git/objects/7c/f15cb7756f7c78b44bf7034f68c36aed555263": "8cf1955b04ce652d005342543e25c2f8",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/87/5fbf08b9245f7e426eb41d8c31bc88a3f0bdd7": "3e10ccb92c8b9e3fe18cbeeec12d3a72",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/9a/973f43b8c87ef2818599c83667335207ad17c2": "2b11794605324a7eccfb43ee1c0b5016",
".git/objects/9d/74f7ad1634f824df3af8cc6325a0f4d3dd92f9": "b79dd5dd3a83c6ee76d0575d9fa59fdb",
".git/objects/a1/f617bd8df00a6cfdb05fe29dc4c5a5cbb7a676": "54c1812833d2e15252952777e95193ec",
".git/objects/a5/c2053a677c31d0fcd1e05e20b62a7c34150f95": "6dea765a4f2901e8febea05a7c8cdf84",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ad/df06099516bb0a7da8ea23b2102a0fa6197692": "e53327ac7bad3d0d68bdbdebec670660",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/b9/96579b8d2f7594964510090132bda451106262": "6bcb6e6c05e89cc54b1dd9fd63ab6dd1",
".git/objects/bb/c74afad7e3732de4b682f08bf1fd5ec0e28c4c": "5ca8f28f76958ee83d6239b066152ccf",
".git/objects/c2/7f9dc973d394fd1d6d7d478f0d4fbf29cb72e0": "8b9e853368241605ce374b6058940830",
".git/objects/c8/23d97735bda0f65ba0e57da70d57f0203ee18c": "8a3e64be49d85177a2e5934db93b8d87",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c9/647a185fc2aa65d6199ccd9918129c5c56d63b": "618f45466b039361aaafcfdb69a6f57a",
".git/objects/c9/71343c24d31dc0a95caf30be936baad8800eaa": "b517a799a0d2dd6bc77deed9f2620e15",
".git/objects/ce/3bf35ae8ac6c4753a311185f02a2c8e79652b3": "08740ba0d23d6efd469b2cf7916228ba",
".git/objects/d4/16950b58f1e680fec81c020acbc4caa4fa3fe3": "af8a9b3dc694bf31e89a14e9274947b9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/db/59049a9f63ae4ccb3e6c933d7d4749c924ade1": "48201dc27f6aa2cdc2a535cdce0a5901",
".git/objects/de/574ddd90dcc6d9b498fe058237785329b9383c": "d2c5f6285595e69c961081a7bc4e1512",
".git/objects/e6/e44dde19e6161b754f4d67c70c3ad3b1181274": "76dbbd90a7194ecb1db347169a03ece1",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/8733009c8291fdf199b4cdee2b220fbd2290a6": "d22d76e185095de1ab5222e5b77aa25f",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f3/4a4f4257f1f3c39dfb3730100bdf6f2de40175": "0b2d9846e8ca2e7a72362afd1fa7a0cc",
".git/objects/f3/cb3b08a47b089f07361cda021164aad86d88b5": "41c6ae3293675e017152ccdd1c0ab867",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/e745c19a95c5ae6318c5e510fdb30b3977edcf": "ff5d7525b0784b1af1b2d45ac5263bd2",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f6/efaa202b8e4c12765889cea8a5fb2ffb7e4c60": "45b2a443f97da3d37ef7404c8e5a6767",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/refs/heads/main": "518b6801ba7baffd66a66ea9f3d254f4",
".git/refs/remotes/origin/main": "518b6801ba7baffd66a66ea9f3d254f4",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9350383c320d424cfc4db1abcec57203",
"assets/NOTICES": "12d812a603cfd342ad633355e52ed2a4",
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
"flutter_bootstrap.js": "c8d4104a89b85e2fddba4b845919ce6c",
"icons/Icon-192.png": "e3816fa1bc3d8b596ff0c0ac1f57e0f0",
"icons/Icon-512.png": "f7bceefcaef259d863769bd315a77532",
"icons/Icon-maskable-192.png": "172eccbffdcc8c52d08dc80479b48b30",
"icons/Icon-maskable-512.png": "c1e6747af595ecd7dfbaf1e7d7e69f03",
"index.html": "13f71a2212198ca4db1157967722c357",
"/": "13f71a2212198ca4db1157967722c357",
"main.dart.js": "34862dc1e877bac43966690b198d14fd",
"manifest.json": "f202fc9311e340a76aa4aa7f40e7a73c",
"version.json": "3c2fd1984737ac150bb4a389732785fe"};
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
