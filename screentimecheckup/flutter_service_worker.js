'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8a19e711e155c1a45b1ee55b91d4af7",
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
".git/index": "5ffd600fbdd4ba75f69bd6ed81915cf6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3e392227b22253f82486e81303c5c188",
".git/logs/refs/heads/main": "23da1478044a09e21bcea88ad9c9e789",
".git/logs/refs/remotes/origin/main": "a8e47887e3eed47842b0a27fff0a8548",
".git/objects/00/b8924fc45cc9a5383edb15355ff658fad83566": "eb75e761ccd919e0ba03d1a7060bbdea",
".git/objects/00/e5aeb1c8e46f6e6a4ff94adabfc5356c1d626e": "e5d8834d0894bb1dc3db4516d77f219a",
".git/objects/03/4fbbcc8d2ab85244fe7524bfbe874edfc26b3b": "f65dc2f90f55900388dcad2b63ab33dc",
".git/objects/04/fce0ac98478fa60daac3e23ea8e10a5d0e933d": "c2b395e8e2e064c67657784f5f9271e4",
".git/objects/05/454e19a3bd5d8589e66fb3f8a7adb35df38195": "c971f42749b45e98b259a0c8080aafce",
".git/objects/05/9161b49a16e3cd05b54ae2e04fc39736e7161c": "e6cbff63830b650e6bd73c4658822f69",
".git/objects/07/42fa18c9ef1b01cfa0b3863af842a29d7824bc": "6748c512ae3ff1d9c29c1376649f6ab3",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/09/fa1dbeb3dafa3b188bbc16cd5db596b74ee957": "d18b4774294cb28a44f1c2115b811cd8",
".git/objects/0a/92cca668658b3b45257c637443781668b29c1e": "878573cde9cbacf32be260f88714e4a6",
".git/objects/0c/8c02285a6f3fa28f987428f47891bb01fd7e4a": "b6019ce616b54cb0b48b8e6d2dfdd9f1",
".git/objects/0d/04e4ce6967aeab9c5b851445487736ebef277b": "0f2a29c1f2fdee1722488d362524b976",
".git/objects/0d/b41b4057594f189c06886be15a44d9faae96e4": "f13f4c1f25916931e4971a328f82b73e",
".git/objects/0d/cfd9547cd0840043488b742629c132a62baeca": "a8884223eb34cb4ca46a484c25b0d72f",
".git/objects/0e/57d3b807786d8ed802b57e925045197574c333": "1349f14a9d0fc0992804a34d985a3932",
".git/objects/11/19c4b09a07714948c0a4e905d0a1e2f79dc41a": "fa426f59a02c2ce62b87902bde81477d",
".git/objects/11/59357cecf9a2177d13eebe9a24d17dc473875c": "aba0a798ccfa619624dd426f378dc7b6",
".git/objects/12/2d4a17bf3d104b7826091daa8ac46d49448e93": "e8b700b256c76fde1e2219d81a1326b0",
".git/objects/13/f4d719580907630af15556bcee9cd64fb6123a": "7f98920869a6202011eaf79ae12e5b9b",
".git/objects/16/1627cee37343e92f8fba9d9efcb6ea24b04dc7": "7b4b8b377473736c0748e385ca0e9034",
".git/objects/16/51f518a5931d4d1f87818599dd31280119167c": "224ccdbd0bd8631511fdb7d212c43fff",
".git/objects/18/f20b666cfac744082fdd9e5f8fdc4b9ece2c96": "5fa4c648a69f6c17851204112b7a7949",
".git/objects/1b/c5b0295262ae0eb8f9fb248330314ed963ca93": "21a9ff1554a0a533c363baa5a2b16dfe",
".git/objects/1c/1e189e69502d69b6ee82dd78294493525f9d50": "8a3d50d9dac92ef9a5ee69d936333fcd",
".git/objects/1c/2c0b3acc826d3a879a1f4362fcb739f3da6505": "9ab65110790d5a5958a7687c0fcc5aac",
".git/objects/1c/a6370e4800b47907e378b0c57a9f5cbeb1c773": "cd77d4dc196d5127189bd0f4ee55420e",
".git/objects/1e/660072a037d2234e1a005be694ce01ad1aedd9": "f893990789a2c7ce2c9be29c2896fb06",
".git/objects/1f/7361d45fcd5e0284b80ce5cc8da2ba7c1eabb5": "72e1a96288f7ee92f80362b1a3461173",
".git/objects/1f/a9665b2d7c2d6b8ff9a1910f6950134419bc4e": "249d8d97331ee307669f2657b77e0d52",
".git/objects/1f/f9d177994f080e6fdb9d144a5d007c2602b2b4": "e81dc26d5a394fd0cfea128d4b6dc45c",
".git/objects/20/733b42350c39a66d3960de2e7cd615d11d0f62": "6a3aa56c9e72a271525f5b760a944b30",
".git/objects/23/d047bf27d9e0f974ff44495d3cdd2074f7f8c2": "d11aa9589ec6d8ef1de0d6d69dc84203",
".git/objects/27/995072076635425df6530f01159b16a9b0613e": "434a116fc6f26e18313cf39513bfa3b0",
".git/objects/29/20d08b453c2dab6de9c631ae4d5a05ff6a0b4d": "1271f40e89a9e1d8557ff812194e74f8",
".git/objects/2b/41265cb79b8c25b4042703a6d3cfa00a317131": "372cea4d733c7af5dde3b905d140ca09",
".git/objects/2c/1d25d9e1c07434ed4d3e230f9baa9d3f0ff246": "c4f073ea47432ff9ee0a4675808db933",
".git/objects/2c/2e0385d867c8515455c663149096a661781dc6": "abe846c3f0b5d3457ed0756c84581211",
".git/objects/2d/3f5e46bcbb789aa74c0beb4ce2708bb51d58dd": "1e7fbb6a3043c803be0214493a391bc9",
".git/objects/2d/54a4bf5b603a1863b2f30d200b7b2fae71d97d": "0e1ea436231ed57932d022af7ee47999",
".git/objects/2d/bbd4fd7f3c88ff599041e3d65141e44d86047d": "243b58bbe62048efdbd5ab60c49ad30d",
".git/objects/2f/37b45c87b1cff3bf35e417752f7c3713bd50be": "347b5d1e331930b45aa6b81f618ca1a2",
".git/objects/2f/eae978d12e7a3cb3ad903d8b07c4867eaa7a0d": "d3a523a48b1b48c133ec84129d425ec1",
".git/objects/31/2bb836d72f67fe1c12b2801c287e0a8dd0b6ef": "318bae3a79e6bd2e4b3b46b0c50b9ba9",
".git/objects/31/5df71692b6f6ac534ab867e63bbe061729b3f5": "b58036a6302f7e98bd8c2f4bf4bfbb39",
".git/objects/33/b8af993332e0804d42e2536435b882670936ee": "cbfbe9b0db598d94073f69930255c8ec",
".git/objects/34/ab4c4658ee9c68d652cf1ea0225eb5a66436f2": "35f1c39d5bb6f2b7ed0a792a78f41bcc",
".git/objects/35/1ff34d50298e77ccd7369360443c3bb40febbb": "fa2976ba318c79ce3a7931b00c94559f",
".git/objects/36/ef725a759e85035ce54cc161ba658afbb4b38b": "d6e9eb77d2eeb67c8ae659b25a1ef3e6",
".git/objects/39/8922457f721641af07718fbfcebcc298823488": "e637a235d76092b16d88ef87e304b63a",
".git/objects/39/d1225628ab4fb9258a820e5d1ca690cd4989b6": "43d007ffb56089f549bed642540f2608",
".git/objects/39/d38fa3a5eb5139b42d94cc444119bd4a66c51d": "848190b4e9752831531ac06b67e8c543",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3a/e4e5ad6e2bd8b45c438852e9fb827eea35a278": "0a7eb5fcfe2e8a60193f170c09d153c0",
".git/objects/3a/e4f7277358cad4679e97ff3b3f934acef661bf": "eca51ff5b5552fe63a92ca5239b8f4b6",
".git/objects/3f/6fc99bd2b3cf4dccdd2f5a14928f0dfac167c9": "6507d0a010ba82904e50a28d9b645997",
".git/objects/3f/e316329c2a8bd81a39c486c2df03c233ddf1c7": "28515c89cfb057664a90a149072107da",
".git/objects/40/4c2b6cce13892d38e00c14ecf596088e6a10ae": "19510f50408c265c155b92d6e0f5bbb8",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/2e314cc904432dc23aa171d732740d4088972a": "6cf1205bdb83c0c8489a1c6bdfa299d4",
".git/objects/42/b9e9b61617ceb747d86e4fd9c81d106a610119": "a3c8e88eb2b940f5f2f8af348ab88596",
".git/objects/45/42efa044f164eb997014d2131440af7aa9c746": "e6cb686a386d5aa249efaed0975b8dc1",
".git/objects/46/426bf38f375a102bb404d32d1cb42f9e8e638b": "ea2fe580602a1c912735122c3b623a0b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/d208d5dbbd4aa5e403ba9aaec4ffdcfb6884be": "51414947c7862c4636c7f139dea76010",
".git/objects/49/2a7c79e209fbe8aa326b61438f58b6376dd945": "b8bfa2eb79fb2174f6126021e6bbfbd6",
".git/objects/4a/dec6d2221af25d9f1abe0caa1d958d0b14eadc": "b8ec07d7019e9da275c4d63a5484b021",
".git/objects/4c/e1de0c952e8d26d7a4a1f8c90ce7d16e7cbd79": "913814687d1b8de6fdf0a3617336a014",
".git/objects/4d/ee78c7773ef16d8c7d089dacb3d17d1611c013": "035b2431ac1566028c3216603472cd64",
".git/objects/4e/0a3a8a68a38d427ffc8b46f3c541e0a0e660e9": "4c7533902108e8e4a292507485e5c51a",
".git/objects/4e/13cf8781b2199fe89d6aed95e14a9336744ae6": "a1fc1d4285846c8be11db6588b35b0d6",
".git/objects/4f/867244bcdfb7bc13eadef168f99da9816ce7a3": "747036a65eab8b4edd32fd123a5ef816",
".git/objects/50/4b16d286fcac7ac042f54eb34bdb6f5e96b274": "80c63e4e90325fb675fe560c374c7bac",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/51/c3b117e05c6e2ad5efff204e39e8f7a54fb306": "42e7cb40e55d07f26615b8ca3683f4c3",
".git/objects/52/cd1801c4f329f7afa6263f5aaeb14b76dc3233": "4baae338239431615c95828522029245",
".git/objects/53/223d2a24baf166452dc298ec3d2d098d2bebb3": "7e1dbcef7c4dcad2f77354417a9c892e",
".git/objects/53/50e332c0f19d6b670625e3e2b692477a0d7e0e": "cc46c0d2d01456f2d0345e01ed41458b",
".git/objects/55/e97423b69e632d86554265629f9f27dc1f4301": "aa9360e9006e0e7efc1ead7530dd33cd",
".git/objects/56/bc557c3d53eeb7f37b153f8fc7ad4033a37c88": "10573c9c541d3e6a5ebd9d45b8a78461",
".git/objects/57/b10a06ade12c932e043aad125549419b55565a": "f2747aa33fae1171e35e5d25bfae075b",
".git/objects/57/db35e8fa87349bc2917087dcf6b793bac000bd": "33a934f413599423142f27d8f4f1be6e",
".git/objects/58/1238371ecfd40f7d401c8dbae78b81e8a94370": "60ec482100ac4f0fbff0b4aa020875d4",
".git/objects/5a/aefed7dd6b5ccd0edf66f8bfd8b93321677ea3": "12ee5bb0d34b0f32fb045f1ee1460a70",
".git/objects/5c/6324063d5b9eae29ca4c9f8c724328c159accc": "e0af99f315aada85abecf8b0ba3c2e43",
".git/objects/5c/6555448cb3bbede17e2ddaf1549cdb757526a3": "67683f52216dfa6bfd0034645d9b98b9",
".git/objects/5c/c7b208a15f73e90901dcb42137d25a98198da8": "2a1f00e0ea923a0d1038835f7741cf34",
".git/objects/5e/3f66de4d1776283cb3ab8b8032507f7a708fa2": "b48310e0b7fad5ff5a44672e2c2bc19e",
".git/objects/5f/98dd0fbcdd32c2ecbd60b8006c2788598cb206": "85295ccf80e7a2d059fba16f98230ae0",
".git/objects/60/6d54b24edb9068369371d660cc6326c68f42d3": "180bc3bdd34a661403ab11d722767078",
".git/objects/64/89ef85c27af30273346833bf38ebf67e91b825": "e4600f660986ad3d060b70fb3e6e0b03",
".git/objects/64/e15c5b3526ede554fe2c67013428c97ca60ae4": "b1616e6bb78d0f39b25a61d6787e2e28",
".git/objects/65/e313e97217573a612b35db83a3e1c4bea99eda": "be65931bf9dd1c05ee9089c4552e6d0a",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/1c4248bef4af701fcecdc3811673f7d4ed9eb4": "e1cddbcbc72435ff009418192ad976d4",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/35019258b70582cb9cc24d6228b54d4be5c2ed": "838b5bd184f678fb283c38e4d905a325",
".git/objects/6f/05062d0857af3677f26662ff676c134a4b2c5f": "12a05423225eb990b3950d8d6ef7c38a",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/70/1a86d96b99088f9b61eaa1a8c703fb0910a535": "c0f2ffd285a74482cf4c73bafeb65159",
".git/objects/71/2a6cb78d2ab7bba3ca8ad733e2059db326b30e": "172d61b655fed94750eb4b1828542f16",
".git/objects/73/216bd7a42f781978613e5d5abab85fc743a94c": "8a1da034bcf0ddb59b86be80e8404298",
".git/objects/73/d7ed55bbfebe89a3e790d912bcc1ddfe30b0b8": "e239f13fdc14245750378d2d91ab43b8",
".git/objects/75/98ef289726227885615276e40fa7543dc603e7": "dc13b53e1b9fbc5e6b33e9e68bd04adc",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/76/297423f9bf41bbfe19ec7921a63e3974ec9092": "3b2e7e4c8788f7909cd563d0e37fbbb9",
".git/objects/77/c1ae5c95955f3faedc77b36c3c3c8d8d9df65a": "cd77f198296d7df3c7c1405cd13e4faa",
".git/objects/77/ed3b31f989973fd08a673dfa20b767c0baca75": "5b90a91f174490af798b9796d872f86a",
".git/objects/7a/9954e42dffe9440c8b7f681285188281c56bba": "6d43872f6521199aba619060850985c8",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7c/394db208acf0647d8c0e3ed6b74d5079cf9ed6": "e18d729fd139f71417ea7ff160431b92",
".git/objects/7c/ae4e98cfce9bccee8749d2e042cb77fa0a13da": "d0c14a6e7af27c367ab270206d42bf02",
".git/objects/7c/f15cb7756f7c78b44bf7034f68c36aed555263": "8cf1955b04ce652d005342543e25c2f8",
".git/objects/7d/30a0520ceadd38cc1b79f1e672d15f36cbf291": "ab39568885ebfa036672d063ee7412d5",
".git/objects/7d/31262d4918663e3c9b0e8764d1059c6a965ca8": "cf0ac2affa1b14a0c06d3c3a38a6c7f3",
".git/objects/7e/3d83159083e2f4b16e580c191a2b9693383eed": "1f5f15f35660df005b4932fec7e27ce2",
".git/objects/7e/f78ffbf06ca849752a819022ed558e516da3a8": "73569d31b39f5734c63aa64142468ec6",
".git/objects/7f/9c68797bb646df92a65821d9eda051f605497b": "0eac5b14c7a0d57fd1535b0dafb9f36e",
".git/objects/80/9d2a0c6bd98e1afe394bd1fc4030e0594c6a9c": "f5e02a50adb735dc823902129f3b28a2",
".git/objects/82/6b58387fb275f725b638d89325e7e4da5401ee": "9112cc86e227eac5efbdaef2dc6d5488",
".git/objects/84/4833980cd11d8a74c7ce3c2e29cb1ffdfadcd2": "16184dcbe8a59efccf307219a07e0a85",
".git/objects/84/4ddb47efe880fb4c4fa9715cacf1d10df4862e": "3871c9ab0103fcd8c176e7824cda2b72",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/86/f1a64cccb61dd59812a4871bceb73bb2704d53": "a8e4e842b8c4182a377e858b2e953d0b",
".git/objects/87/5fbf08b9245f7e426eb41d8c31bc88a3f0bdd7": "3e10ccb92c8b9e3fe18cbeeec12d3a72",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8c/69bd3df03fb35fcc1648b1687abc55a9ecb904": "b4438a256f786311c82414353441d8ca",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/2b272514890d9b52295ea9daef604d735a52ba": "1a4c90a1d829c58c2fd554ae01dfe496",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8f/4969767a4f30bd973703abbaa2215b99d4f30f": "e55cb289d1d38e696c095c209374b5bf",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8f/fef45aa9435c89de4255a1d855d86994ccdd2e": "23777aafc0c26ca955b0ab3c38dda9e3",
".git/objects/92/eab450609b7dc5d076ddf6c8416de8209373e0": "9b3d4cb7f5916a87f36a18b466ea7ac4",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/93/cdf54d79427a45eda0a5447b8045f4c187c800": "1f0058341961752cfaecdd5abb5255c2",
".git/objects/95/6cef751e36601a40991e1cd483381727d31d51": "828813266712537870e65fe5657cac5d",
".git/objects/95/b0f2e3fc8abb2886ce8ca089c7992ed0fbff53": "94be927005b656a809b11d20630fca3e",
".git/objects/98/114ea9128e10b1ec38556e21d455159d227d51": "4325133969ad61a5463a6f003ccd1089",
".git/objects/9a/973f43b8c87ef2818599c83667335207ad17c2": "2b11794605324a7eccfb43ee1c0b5016",
".git/objects/9a/ad06b8359bf33accadaa2267874c8c0b6e460d": "1f8b8353f3abd679fd94a02172daff6d",
".git/objects/9d/13505831c731916cebadd2e19aafc4c02683fe": "55b668838a0624bf0388ce4ce3a9f5f5",
".git/objects/9d/650d459ec79195035c1220b6fcce6808bd230c": "07fe5e7b20c9c49baf581f064e692ed6",
".git/objects/9d/74f7ad1634f824df3af8cc6325a0f4d3dd92f9": "b79dd5dd3a83c6ee76d0575d9fa59fdb",
".git/objects/9e/ac060b6314cd1780f036476f8c0cf60f7f6f7f": "114b7ef9c36dcda976cb92f6b65feb79",
".git/objects/a0/c3eeb0df977565a3df62068d31d52af5cc2a6f": "e4bd0b215cc563faddde983ccd58b65d",
".git/objects/a1/12a5fe67985424e55228a8089f5ce062709d8e": "5a37d6cb68ef0eb7a9604cc0e46ca87f",
".git/objects/a1/f617bd8df00a6cfdb05fe29dc4c5a5cbb7a676": "54c1812833d2e15252952777e95193ec",
".git/objects/a2/9d42fc37cc5a2e8cfe73ffc9d4b702e8a881ad": "2cfa439c8cafa123a4fcd1e53522f657",
".git/objects/a3/de25a167f7bad5b6835871fcc8e6cb245620c8": "959996ac88bd9f00c1da7bcd57ba54ee",
".git/objects/a5/7a87afeb4f5afb468dfbebfe6f270f19c3176a": "2a33567adcd70b3693907bfe5c5698e5",
".git/objects/a5/c2053a677c31d0fcd1e05e20b62a7c34150f95": "6dea765a4f2901e8febea05a7c8cdf84",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a7/4e3c11833425fb0ecd433dd15aba93f1e7c2cb": "9608b5ad30c5fba4d55ac9db63dd7e3e",
".git/objects/aa/72426929fc7fefa21a5acd2611716c278ebfba": "a38bad7ba094441cffb111e22c5a3fbf",
".git/objects/ab/72d02af1d1a56c8c1d4e835eb09fb5810ea58f": "b1b6ec39a4819b1ad119cc342b22dbab",
".git/objects/ab/9fecf8cd7f0f2432857dec71e8385bb6007548": "c9556432525a83a23fba8c468367c605",
".git/objects/ab/c59baed2b9b34fb3f03573be3fa6f12c1bf16e": "4183e84e4ad7923ead5d2ea0fd67bc47",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ad/df06099516bb0a7da8ea23b2102a0fa6197692": "e53327ac7bad3d0d68bdbdebec670660",
".git/objects/b0/6c44efea03bcc115d86a90150fdfbe74462ef2": "3ee27144218fdcbae1dd8d4e98d18bec",
".git/objects/b0/8df535489076c0f71d9c8b164c9d9e19c3c678": "ed293c65b258414751ec0bcdce3df257",
".git/objects/b1/8a83bd51aee8a8c2b013de3f64cb522b061131": "a344def66b8455aa56247ee686ff7073",
".git/objects/b2/b2327d9e9d074f53f68567fde0e6e8a2f8ea61": "be48b6c5a11174d8054cd8e5837a5b1e",
".git/objects/b3/24a02dbfe131bfaf505a13b73d32a25eb1a9e7": "3a5c850416e4db3b5d37e9b79a469d85",
".git/objects/b5/5b123d4df66683dd4dfa6ab31d767e66b0d05d": "9512739ff4e257c5c0c10c47cbe16cda",
".git/objects/b6/902749efd14a7f1e58c7ba4dd5faf970cba25e": "cd70a56dba0fbf34c48401e8cc6adbb9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/f59e206a1849b0626f087d88cad3d9d3aec0e2": "d46ceeb7267ddf27a8f5803feedcdb49",
".git/objects/b8/73b85cee08e090f2a1b682749fc8ebe6664462": "dc5c5badb3f4f18b6413b749a5b6e53a",
".git/objects/b8/d227046d3271c33a0bab4c154166b42fe48688": "57fd5956f6fcab86ba63a33f91b29e8e",
".git/objects/b8/f6f9e9a6b388bfaa2c7ca5fa8247b22f02a410": "86836713f8c83815ac503ec7f2c9c6a5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/b9/96579b8d2f7594964510090132bda451106262": "6bcb6e6c05e89cc54b1dd9fd63ab6dd1",
".git/objects/ba/f1c42472dd3db8d04822efad1590f5c865492c": "820f8f45b89388233c7eec4679ce44e7",
".git/objects/bb/c6a1d099235796586c606955db84afc6196c78": "d5401c80dd3ca062c6732bb526bba453",
".git/objects/bb/c74afad7e3732de4b682f08bf1fd5ec0e28c4c": "5ca8f28f76958ee83d6239b066152ccf",
".git/objects/bc/52231e3aa6afadeef6c069807dd0e78477cf74": "5450388958391b84b8994fdef6fb3202",
".git/objects/bf/b51f5034a808edec2fc9fc1f5222dd7e3491a8": "52749130f36c9abda3bc3d59c5ab76df",
".git/objects/c0/575d0754a4bf5fe0ed6acb56209c23ec18d9c5": "d2af5d406a39aa03b295c4bc03ca4959",
".git/objects/c1/618ae83dcab32997469d72ab50c64ab2b63f7d": "69e88f18db25edb653215aee7203cac3",
".git/objects/c2/771b87b1f316ba295605be97c64a2bb5f142c4": "acd3fdf277b1420ab1402d2df9861aa4",
".git/objects/c2/7f9dc973d394fd1d6d7d478f0d4fbf29cb72e0": "8b9e853368241605ce374b6058940830",
".git/objects/c4/f30f74a94b38159381b97e156e0053cb2bbd3f": "a0517dbd78be71e34f55343d821d74e4",
".git/objects/c5/0480639caca4f320724820a498f2ea55300e4e": "ca9dfe03076cebb210ef0fe1e39351c4",
".git/objects/c6/3dba00e6b894dad41ae948150a8dc7bcc761c6": "2f7f3ca18945abc6492176e994c4342e",
".git/objects/c7/6dcafd59dd0645afb0ba764a3eb33b06a60584": "0e8653aabad65b39585e9f1c2c1878d2",
".git/objects/c8/23d97735bda0f65ba0e57da70d57f0203ee18c": "8a3e64be49d85177a2e5934db93b8d87",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c9/647a185fc2aa65d6199ccd9918129c5c56d63b": "618f45466b039361aaafcfdb69a6f57a",
".git/objects/c9/71343c24d31dc0a95caf30be936baad8800eaa": "b517a799a0d2dd6bc77deed9f2620e15",
".git/objects/c9/dbf2dc87483ffe76656cee661b5403af1fa423": "fbae1c8c30c936a814fa37ed709add8f",
".git/objects/cd/90cb0258ee02d97c35a1b3447ba2429c28595e": "3ca69f5a2e1c96bcc86bc3e6737eeacf",
".git/objects/ce/2280098476f94491a0181660a1b895e90feaa2": "72d60378fe28a029561b605afa8a10c4",
".git/objects/ce/3bf35ae8ac6c4753a311185f02a2c8e79652b3": "08740ba0d23d6efd469b2cf7916228ba",
".git/objects/ce/86f7b54ea66bb1cba3c429c5a82700182f6b9f": "b78e74219c4d3d96f005ccb1b1c5c4b8",
".git/objects/cf/1fcb5c14fe2ea3d7f13caa8c87977915e93462": "6540e28f140409e8adfbeeff2ea5df03",
".git/objects/d1/d780452be2e73d973ef52100f225cf8247de5e": "237be9ce830b386edac4cf78dbf38f1e",
".git/objects/d2/eede6a32c5ed230a2637b60fcb5b91c0e7c961": "6a534eb0602512082deb72af1032bee2",
".git/objects/d4/16950b58f1e680fec81c020acbc4caa4fa3fe3": "af8a9b3dc694bf31e89a14e9274947b9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d6/1a38445f62a0439f54df14cc6761c45ba54e39": "afd2e546fc7606d75afe5069baeef804",
".git/objects/d6/59d5292ce6640b6b945998c7e71372ecc29708": "5acfa77f0427e508fbea51b17004af54",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/3d52947db91784fc7fa4e6647544482312fc4c": "8e0e38a5649f5be9128df525697ed2ea",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/db/59049a9f63ae4ccb3e6c933d7d4749c924ade1": "48201dc27f6aa2cdc2a535cdce0a5901",
".git/objects/dd/62bf5e1d8ebf7c912be1f3fb93d0534fa86012": "e10ac710fe38800af2f5cf09d0cea35f",
".git/objects/de/574ddd90dcc6d9b498fe058237785329b9383c": "d2c5f6285595e69c961081a7bc4e1512",
".git/objects/e0/c646d8288a8d3351f6daa53f0c1b6804a2a3a6": "85294fff1dc54274c71a0497b142cf50",
".git/objects/e1/5b7f5e32d4b61b5f4e4db77ff0ed74b78f3c6e": "f3a2c601a81f46382672cceeec054e60",
".git/objects/e2/61215bf34694b5242efc5bb71144c5bc5768a9": "b6d97b634653366696479fdf4173e473",
".git/objects/e3/b8bf9a626f72a683f9abd8e1c27d5c5496be0a": "569ab6f2e8d2034fd453e9317ba3da6d",
".git/objects/e6/e44dde19e6161b754f4d67c70c3ad3b1181274": "76dbbd90a7194ecb1db347169a03ece1",
".git/objects/e7/c138fe363b1460cabea09aab059b64807b3ea1": "d3e099a402648bef19c8d5d2adee5c08",
".git/objects/e8/550b751d59502dfa3a0d58fa987ef7bf81fac4": "f0fbc6097d38d5bd183e7978c471c86a",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/4d16b67d07e1d22966c05eee36401fcf78035e": "c7fa49c70ac1ea92b9131c0bbd30a115",
".git/objects/ec/ca6ff5baf9ec7909a17caeaf7a72576fef571f": "78a0538ed4e25bc5131a9fb101d77ca4",
".git/objects/ec/e24dd9141f5ad9e4031f0158e46b0e608e4074": "bcd91c53565a20ff2f0ebd4a59a523ed",
".git/objects/ef/8bb16ff63c88a02228119f3bcab6ca49712bce": "64a93787a25bac0b0c8eebfd970de9fa",
".git/objects/f2/8733009c8291fdf199b4cdee2b220fbd2290a6": "d22d76e185095de1ab5222e5b77aa25f",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f3/4a4f4257f1f3c39dfb3730100bdf6f2de40175": "0b2d9846e8ca2e7a72362afd1fa7a0cc",
".git/objects/f3/cb3b08a47b089f07361cda021164aad86d88b5": "41c6ae3293675e017152ccdd1c0ab867",
".git/objects/f4/c986570c02bd476acc57a64565dd3f349bfa13": "98c26e42fcd19aa5df2310d3f087de73",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/e745c19a95c5ae6318c5e510fdb30b3977edcf": "ff5d7525b0784b1af1b2d45ac5263bd2",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f6/efaa202b8e4c12765889cea8a5fb2ffb7e4c60": "45b2a443f97da3d37ef7404c8e5a6767",
".git/objects/f8/4095c8571c8673a62a6ba7321b63c477ae724a": "677766eabf52a3f8b4438bfbb284ffb8",
".git/objects/fa/45bd29c7c2bf9e4d9f21cb653b64b94b75e1c2": "d5e825c469cc7a832c8a34eb11e2bc6f",
".git/objects/fa/57de80600a150a4b4cf91f0d0d2628ea4ca986": "87128aca5215f4fe489a34389d0aac07",
".git/objects/fc/f1920ede0e05893a9040842e16034ac42791bc": "e2b673fafce88ed29f01aad6fb972c31",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/refs/heads/main": "30f031998c8b73e04c5619e233c91880",
".git/refs/remotes/origin/main": "30f031998c8b73e04c5619e233c91880",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "cd63c6c7b0ae9cf776667147c14253c5",
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
"flutter_bootstrap.js": "8ad036569d52dd3c829df5778e71601b",
"icons/Icon-192.png": "e3816fa1bc3d8b596ff0c0ac1f57e0f0",
"icons/Icon-512.png": "f7bceefcaef259d863769bd315a77532",
"icons/Icon-maskable-192.png": "172eccbffdcc8c52d08dc80479b48b30",
"icons/Icon-maskable-512.png": "c1e6747af595ecd7dfbaf1e7d7e69f03",
"index.html": "13f71a2212198ca4db1157967722c357",
"/": "13f71a2212198ca4db1157967722c357",
"main.dart.js": "8031c8066ed0bf217f24edcb43b5af0f",
"manifest.json": "f202fc9311e340a76aa4aa7f40e7a73c",
"screentimecheckup/assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"screentimecheckup/assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"screentimecheckup/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"screentimecheckup/assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"screentimecheckup/assets/NOTICES": "cd63c6c7b0ae9cf776667147c14253c5",
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
"screentimecheckup/flutter_bootstrap.js": "52b2e8c5938d73763ed2befd046f2015",
"screentimecheckup/icons/Icon-192.png": "e3816fa1bc3d8b596ff0c0ac1f57e0f0",
"screentimecheckup/icons/Icon-512.png": "f7bceefcaef259d863769bd315a77532",
"screentimecheckup/icons/Icon-maskable-192.png": "172eccbffdcc8c52d08dc80479b48b30",
"screentimecheckup/icons/Icon-maskable-512.png": "c1e6747af595ecd7dfbaf1e7d7e69f03",
"screentimecheckup/index.html": "13f71a2212198ca4db1157967722c357",
"screentimecheckup/main.dart.js": "738da11d4c31d9cc21b48f66e4c4e8f8",
"screentimecheckup/manifest.json": "f202fc9311e340a76aa4aa7f40e7a73c",
"screentimecheckup/version.json": "7e60d192adac141e42d792d93aefb6f9",
"version.json": "7e60d192adac141e42d792d93aefb6f9"};
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
