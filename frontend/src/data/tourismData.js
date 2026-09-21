import { LOCAL_PROVINCE_IMAGES, LOCAL_TRAVEL_IMAGES, getOfflineIllustration } from './localImages';

export const DESTINATIONS = [
  {
    id: 'siem-reap',
    name: 'Siem Reap & Angkor',
    khmerName: 'សៀមរាប និង អង្គរវត្ត',
    zhName: '暹粒与吴哥窟',
    frName: 'Siem Reap & Angkor',
    region: 'Northwest',
    category: 'Temples',
    rating: 4.9,
    reviewsCount: 14200,
    heroImage: LOCAL_TRAVEL_IMAGES['angkor-wat'] || LOCAL_PROVINCE_IMAGES['siem-reap'],
    gallery: [
      LOCAL_TRAVEL_IMAGES['angkor-wat'] || LOCAL_PROVINCE_IMAGES['siem-reap'],
      LOCAL_TRAVEL_IMAGES['bayon-ta-prohm'] || LOCAL_PROVINCE_IMAGES['banteay-meanchey'],
      LOCAL_PROVINCE_IMAGES['siem-reap']
    ],
    tagline: 'Gateway to the Ancient Khmer Empire & World Heritage',
    taglineKm: 'ទ្វារទៅកាន់អាណាចក្រខ្មែរបុរាណ និងបេតិកភណ្ឌពិភពលោក',
    taglineZh: '通往高棉帝国通途与世界遗产之门',
    taglineFr: 'Porte d\'entrée de l\'ancien empire khmer et du patrimoine mondial',
    description: 'Siem Reap is world-famous as the home of Angkor Wat, the world’s largest religious monument. Explore grand stone temples overrun by giant tree roots, vibrant night markets, cultural Apsara performances, and serene floating villages on Tonle Sap Lake.',
    descriptionKm: 'សៀមរាបជាទីតាំងនៃប្រាសាទអង្គរវត្ត ដែលជាបូជនីយដ្ឋានសាសនាធំជាងគេលើពិភពលោក។ ទស្សនាប្រាសាទបុរាណ ផ្សាររាត្រី របាំអប្សរា និងភូមិបណ្តែតទឹកលើបឹងទន្លេសាប។',
    descriptionZh: '暹粒因世界上最大的宗教古迹吴哥窟而享誉全球。探索巨树根盘绕的石砌古神庙、热闹的夜市、精彩的阿普萨拉舞蹈表演以及洞里萨河上的水上浮村。',
    descriptionFr: 'Siem Reap est célèbre dans le monde entier pour le temple d\'Angkor Wat. Explorez de grands temples en pierre, des marchés nocturnes et des villages flottants.',
    highlights: ['Angkor Wat Sunrise', 'Bayon Face Towers', 'Ta Prohm Root Temple', 'Pub Street & Night Market', 'Tonle Sap Floating Village'],
    bestTime: 'November to February (Cool & Dry)',
    entryFee: '$37 (1-Day Pass) / $62 (3-Day Pass)',
    location: 'Siem Reap Province, Northwest Cambodia'
  },
  {
    id: 'phnom-penh',
    name: 'Phnom Penh',
    khmerName: 'រាជធានីភ្នំពេញ',
    zhName: '金边市',
    frName: 'Phnom Penh',
    region: 'Central',
    category: 'Culture',
    rating: 4.7,
    reviewsCount: 8900,
    heroImage: LOCAL_PROVINCE_IMAGES['phnom-penh'] || getOfflineIllustration('Culture', 'Phnom Penh Royal Palace'),
    gallery: [
      LOCAL_PROVINCE_IMAGES['phnom-penh'],
      LOCAL_PROVINCE_IMAGES['kandal']
    ],
    tagline: 'The Pearl of Asia — Capital of Heritage & Modern Energy',
    taglineKm: 'កែវមុជដុតៃអាស៊ី — រាជធានីនៃបេតិកភណ្ឌ និងថាមពលទំនើប',
    taglineZh: '东方明珠——兼居历史遗产与现代活力的国都',
    taglineFr: 'La Perle de l\'Asie — Capitale de patrimoine et d\'énergie moderne',
    description: 'Cambodia’s capital sits at the confluence of the Mekong and Tonle Sap rivers. Experience the glittering Royal Palace, Emerald Buddha, poignant Khmer Rouge memorials (Tuol Sleng & Choeung Ek), chic rooftop bars, and riverside dining.',
    descriptionKm: 'រាជធានីភ្នំពេញស្ថិតនៅប្រសព្វទន្លេបួនមុខ។ ទស្សនាព្រះបរមរាជវាំង ព្រះកែវមរកត សារមន្ទីរប្រវត្តិសាស្ត្រទួលស្លែង និងអាហារដ្ឋានមាត់ទន្លេ។',
    descriptionZh: '柬埔寨首都坐落于湄公河与洞里萨河交汇处。感受璀璨的皇宫、翡翠佛、触动人心的图斯兰遗迹以及宜人的河畔酒吧餐厅。',
    descriptionFr: 'La capitale du Cambodge se dresse au confluent du Mékong. Découvrez le Palais Royal, le Bouddha d\'Émeraude et les musées historiques.',
    highlights: ['Royal Palace & Silver Pagoda', 'National Museum of Cambodia', 'Sisowath Quay Riverside', 'Tuol Sleng Genocide Museum', 'Central Market (Phsar Thmei)'],
    bestTime: 'November to March',
    entryFee: 'Royal Palace: $10 | Museum: $10',
    location: 'Chaktomuk River Junction, Capital Region'
  },
  {
    id: 'koh-rong',
    name: 'Koh Rong & Koh Rong Sanloem',
    khmerName: 'កោះរ៉ុង និង កោះរ៉ុងសន្លឹម',
    zhName: '高龙岛与高龙冷岛',
    frName: 'Koh Rong & Koh Rong Sanloem',
    region: 'South Coast',
    category: 'Beaches',
    rating: 4.9,
    reviewsCount: 6300,
    heroImage: LOCAL_TRAVEL_IMAGES['koh-rong'] || LOCAL_PROVINCE_IMAGES['preah-sihanouk'],
    gallery: [
      LOCAL_TRAVEL_IMAGES['koh-rong'] || LOCAL_PROVINCE_IMAGES['preah-sihanouk'],
      LOCAL_PROVINCE_IMAGES['preah-sihanouk']
    ],
    tagline: 'Tropical Island Paradise with Bioluminescent Waters',
    taglineKm: 'ឋានសួគ៌កោះសមុទ្រ ជាមួយទឹកសមុទ្រភ្លឺចែងចាំងនៅពេលយប់',
    taglineZh: '热带海岛天堂与奇幻发光夜光藻水域',
    taglineFr: 'Paradis d\'île tropicale aux eaux bioluminescentes',
    description: 'Pristine white sand beaches, crystal clear turquoise ocean, thriving coral reefs, and magical glowing bioluminescent plankton at night. Koh Rong offers island bliss from lively beach resorts to quiet eco-lodges on Saracen Bay.',
    descriptionKm: 'ឆ្នេរខ្សាច់សស្អាត ទឹកសមុទ្រពណ៌ខៀវស្រងាត់ ផ្កាថ្ម និងប្លង់តុងភ្លឺផ្លេកៗនៅពេលយប់។ កោះរ៉ុងផ្តល់ជូនបទពិសោធន៍កម្សាន្តកោះយ៉ាងអស្ចារ្យ។',
    descriptionZh: '原始洁白的沙滩、晶莹剔透的绿松石色海水、繁茂的珊瑚礁和夜间神奇的发光海藻。高龙岛为您提供从热闹海滩到宁静生态旅馆的度假享受。',
    descriptionFr: 'Plages de sable blanc magnifiques, eaux turquoise cristallines, récifs coralliens et plancton bioluminescent magique la nuit.',
    highlights: ['Long Set Beach & Sok San', 'Bioluminescent Plankton Tours', 'Scuba Diving & Snorkeling', 'Saracen Bay Quiet Escapes', 'Sunset Point Hikes'],
    bestTime: 'December to April (Sunny & Warm)',
    entryFee: 'Ferry Speedboat: $25 Return',
    location: 'Gulf of Thailand, Sihanoukville Coast'
  },
  {
    id: 'kampot-kep',
    name: 'Kampot & Kep',
    khmerName: 'កំពត និង កែប',
    zhName: '贡布与白马',
    frName: 'Kampot & Kep',
    region: 'South Coast',
    category: 'Food',
    rating: 4.8,
    reviewsCount: 5100,
    heroImage: LOCAL_PROVINCE_IMAGES['kampot'] || LOCAL_PROVINCE_IMAGES['kep'],
    gallery: [
      LOCAL_PROVINCE_IMAGES['kampot'],
      LOCAL_PROVINCE_IMAGES['kep']
    ],
    tagline: 'French Colonial Charm, World Famous Pepper & Fresh Crab',
    taglineKm: 'អគារបារាំងបុរាណ ម្រេចកំពតល្បីលើពិភពលោក និងក្តាមសេះស្រស់កែប',
    taglineZh: '法式殖民风情、享誉全球的胡椒与鲜美海蟹',
    taglineFr: 'Charme colonial français, poivre célèbre et crabe frais',
    description: 'A lazy riverside town backed by the misty Bokor Mountains. Kampot is renowned worldwide for Kampot Green Pepper plantations, French colonial shopfronts, kayak tours along Green Loop, and Kep’s famous fresh blue crab market.',
    descriptionKm: 'ក្រុងមាត់ព្រែកស្ងប់ស្ងាត់អមដោយជួរភ្នំបូកគោ។ កំពត និងកែបល្បីល្បាញខាងចំការម្រេចកំពត អាគារបារាំង អុំទូកកាយ៉ាក់ និងផ្សារក្តាមសេះកែប។',
    descriptionZh: '背靠云雾缭绕的波哥山，惬意的河畔小镇。贡布因贡布绿胡椒农场、法式建筑、绿环泛舟以及白马市著名的鲜花蟹市场而闻名。',
    descriptionFr: 'Une paisible ville fluviale adossée aux monts Bokor. Kampot est réputée pour son poivre vert et ses marchés de crabes.',
    highlights: ['Bokor National Park Hill Station', 'Kampot Pepper Plantation Tours', 'Kep Crab Market Feast', 'Rabbit Island (Koh Tonsay)', 'River Sunset Cruises'],
    bestTime: 'November to April',
    entryFee: 'Bokor Park Entrance: Free / Tour dependent',
    location: 'Southern Coastal Province'
  },
  {
    id: 'mondulkiri',
    name: 'Mondulkiri & Elephant Valley',
    khmerName: 'មណ្ឌលគិរី និង ជម្រកដំរី',
    zhName: '蒙多基里与大象谷',
    frName: 'Mondulkiri & Vallée des Éléphants',
    region: 'East',
    category: 'Nature',
    rating: 4.8,
    reviewsCount: 3200,
    heroImage: LOCAL_TRAVEL_IMAGES['mondulkiri'] || LOCAL_PROVINCE_IMAGES['mondulkiri'],
    gallery: [
      LOCAL_TRAVEL_IMAGES['mondulkiri'] || LOCAL_PROVINCE_IMAGES['mondulkiri'],
      LOCAL_PROVINCE_IMAGES['ratanakiri']
    ],
    tagline: 'Rolling Pine Hills, Majestic Waterfalls & Ethical Elephant Sanctuary',
    taglineKm: 'ព្រៃស្រល់លាស់ខៀវស្រងាត់ ទឹកធ្លាក់ប៊ូស្រា និងជម្រកការពារដំរី',
    taglineZh: '起伏的松林丘陵、壮丽多层瀑布与人道大象保护区',
    taglineFr: 'Collines de pins, cascades majestueuses et sanctuaire d\'éléphants',
    description: 'Escape to Cambodia’s wild Eastern Highlands with cool temperatures, pine forests, indigenous Bunong tribal culture, multi-tiered waterfalls like Bousra, and ethical elephant rehabilitation sanctuaries where elephants roam free.',
    descriptionKm: 'ទស្សនាភូមិភាគខាងកើតនៃប្រទេសកម្ពុជាដែលមានអាកាសធាតុត្រជាក់ ព្រៃស្រល់ វប្បធម៌ជនជាតិដើមភាគតិចពូនង ទឹកធ្លាក់ប៊ូស្រា និងជម្រកដំរីធម្មជាតិ។',
    descriptionZh: '逃离喧嚣前往柬埔寨野趣盎然的东部高原，体验凉爽气候、松林、布侬原住民文化、布斯拉多层瀑布以及让大象自由漫步的保护区。',
    descriptionFr: 'Échappez-vous dans les hauts plateaux sauvages de l\'Est au climat frais, forêts de pins et sanctuaires d\'éléphants.',
    highlights: ['Elephant Valley Project Sanctuary', 'Bousra Waterfall (Double Tier)', 'Bunong Cultural Homestay', 'Sea of Forests Viewpoint', 'Jungle Trekking'],
    bestTime: 'October to February (Fresh & Lush)',
    entryFee: 'Sanctuary Visits: ~$50 - $90/day',
    location: 'Eastern Border Highlands'
  },
  {
    id: 'battambang',
    name: 'Battambang',
    khmerName: 'បាត់ដំបង',
    zhName: '马德望省',
    frName: 'Battambang',
    region: 'Northwest',
    category: 'Culture',
    rating: 4.7,
    reviewsCount: 4400,
    heroImage: LOCAL_PROVINCE_IMAGES['battambang'],
    gallery: [
      LOCAL_PROVINCE_IMAGES['battambang'],
      LOCAL_PROVINCE_IMAGES['pursat']
    ],
    tagline: 'Artistic Capital, Famous Bamboo Train & Million Bat Caves',
    taglineKm: 'រាជធានីសិល្បៈ ឡូរីជិះកម្សាន្ត និងល្អាងប្រជៀវរាប់លានក្បាល',
    taglineZh: '艺术之都、传奇竹木火车与百万蝙蝠出洞奇观',
    taglineFr: 'Capitale artistique, train de bambou et grottes aux millions de chauves-souris',
    description: 'Cambodia’s creative hub known for beautifully preserved French architecture, indie art galleries, the legendary Bamboo Train (Norry), and Phnom Sampeau where millions of bats fly out into the sunset sky in dramatic clouds.',
    descriptionKm: 'មជ្ឈមណ្ឌលសិល្បៈច្នៃប្រឌិតនៃកម្ពុជា ដែលមានអគារបារាំងបុរាណ ឡូរីជិះកម្សាន្ត (Norry) និងភ្នំសំពៅដែលមានប្រជៀវរាប់លានហោះចេញពេលថ្ងៃលិច។',
    descriptionZh: '柬埔寨的创意重镇，以保存完好的法式建筑、独立艺术画廊、传奇的竹木火车，以及黄昏时分数百万只蝙蝠倾巢而出飞入晚霞的萨姆普山闻名。',
    descriptionFr: 'Centre créatif du Cambodge réputé pour son architecture française, le train de bambou et les grottes de Phnom Sampeau.',
    highlights: ['The Iconic Bamboo Train', 'Phnom Sampeau Sunset Bat Cave', 'Phare Circus Performance Arts', 'Wat Ek Phnom Ancient Ruins', 'Local Rice Paper Workshops'],
    bestTime: 'November to March',
    entryFee: 'Bamboo Train Ride: ~$5 | Bat Cave: $3',
    location: 'Sangkae River Valley, Northwest'
  }
];

export const TEMPLES = [
  {
    id: 'angkor-wat',
    name: 'Angkor Wat',
    khmerName: 'អង្គរវត្ត',
    zhName: '吴哥窟',
    frName: 'Angkor Wat',
    century: '12th Century (Suryavarman II)',
    style: 'Khmer High Classical Architecture',
    highlight: 'World’s Largest Religious Monument & Symbol of Cambodia',
    description: 'Built as a Hindu temple dedicated to Vishnu and gradually transformed into a Buddhist temple, Angkor Wat represents the earthly embodiment of Mt. Meru. Famous for its symmetrical lotus-bud towers, intricate bas-relief carvings depicting Hindu mythology, and legendary reflection pool sunrise.',
    descriptionKm: 'កសាងឡើងជាប្រាសាទព្រហ្មញ្ញសាសនាឧទ្ទិសជូនព្រះវិស្ណុ និងបានក្លាយជាប្រាសាទព្រះពុទ្ធសាសនា។ អង្គរវត្តតំណាងឱ្យភ្នំព្រះសុមេរុ មានកំពូលផ្កាឈូក និងចម្លាក់ថ្វាយព្រះ។',
    descriptionZh: '作为献给毗湿奴的印度教神庙而建，后逐渐演变为佛教神庙。吴哥窟代表须弥山在人间之化身。以对称的莲花蕾宝塔、精美的壁画浮雕和日出倒影池闻名于世。',
    descriptionFr: 'Construit comme un temple hindou dédié à Vishnou, Angkor Wat représente le mont Meru sur Terre. Célèbre pour ses tours en bouton de lotus et son lever de soleil.',
    image: LOCAL_TRAVEL_IMAGES['angkor-wat'] || LOCAL_PROVINCE_IMAGES['siem-reap'],
    hotspots: [
      { title: 'Central Sanctuary Towers', desc: 'Representing the 5 peaks of Mount Meru, rising 65 meters above ground level.' },
      { title: 'Bas-Relief Gallery of Churning the Ocean of Milk', desc: 'Famous 49-meter carved wall showing 88 devas and 92 asuras wrestling the cosmic serpent.' },
      { title: 'Reflection Pond Sunrise View', desc: 'The iconic vantage point where travelers gather before dawn to catch five towers reflecting on lotus ponds.' }
    ]
  },
  {
    id: 'bayon',
    name: 'Bayon Temple (Angkor Thom)',
    khmerName: 'ប្រាសាទបាយ័ន',
    zhName: '巴戎寺 (大吴哥城)',
    frName: 'Temple de Bayon (Angkor Thom)',
    century: 'Late 12th Century (Jayavarman VII)',
    style: 'Mahayana Buddhist Architecture',
    highlight: '216 Enigmatic Smiling Stone Faces of Lokeshvara',
    description: 'Located at the exact heart of the ancient walled city Angkor Thom, Bayon stands out for its 54 gothic towers carved with serene, smiling stone faces looking out in all cardinal directions. The walls tell vivid stories of 12th-century naval battles and everyday Khmer life.',
    descriptionKm: 'ស្ថិតនៅចំកណ្តាលរាជធានីអង្គរធំ ប្រាសាទបាយ័នមានប្រាសាទកំពូល ៥៤ ដែលមានចម្លាក់ព្រហ្មមុខ ៤ ញញឹមយ៉ាងប្រៀបប្រដៅ។',
    descriptionZh: '位于古城大吴哥城的核心正中，巴戎寺因其54座哥特式宝塔上雕刻的宁静微笑四面石佛雕像而独树一帜，墙壁展示了12世纪高棉海军交战与平民生活。',
    descriptionFr: 'Situé au cœur de la ville fortifiée d\'Angkor Thom, le Bayon se distingue par ses 54 tours sculptées de visage souriants.',
    image: LOCAL_TRAVEL_IMAGES['bayon-ta-prohm'] || LOCAL_PROVINCE_IMAGES['banteay-meanchey'],
    hotspots: [
      { title: 'Smiling Towers', desc: 'Carved giant stone faces said to represent King Jayavarman VII and Avalokiteshvara.' },
      { title: 'Outer Wall Bas-Reliefs', desc: 'Carvings portraying naval battles with the Chams, market vendors, and cockfights.' }
    ]
  },
  {
    id: 'ta-prohm',
    name: 'Ta Prohm (The Tomb Raider Temple)',
    khmerName: 'ប្រាសាទតាព្រហ្ម',
    zhName: '塔普伦寺 (古墓丽影神庙)',
    frName: 'Ta Prohm (Le temple Tomb Raider)',
    century: 'Late 12th Century (Jayavarman VII)',
    style: 'Buddhist Monastery & University',
    highlight: 'Colossal Silk-Cotton & Banyan Tree Roots Embracing Ruins',
    description: 'Left largely in the state in which it was discovered, Ta Prohm is famous for massive strangler fig tree roots coiling over ancient stone corridors. Built as a monastery for the King’s mother, it leaves visitors with a sense of lost ancient civilization.',
    descriptionKm: 'រក្សាទុកក្នុងស្ថានភាពដើម ប្រាសាទតាព្រហ្មល្បីល្បាញខាងឫសឈើធំៗ (ដើមស្ពង់) ដុះព័ទ្ធលើជញ្ជាំងថ្មបុរាណ។',
    descriptionZh: '很大程度上保留了发现时的原始状态，塔普伦寺因巨型木棉树根缠绕交错于千年古石廊之上而闻名。作为国王为其母亲修建的修道院，给人无限古老文明的震撼。',
    descriptionFr: 'Laissé dans son état de découverte, Ta Prohm est célèbre pour ses racines colossales d\'arbres enveloppant les ruines.',
    image: LOCAL_TRAVEL_IMAGES['bayon-ta-prohm'] || LOCAL_PROVINCE_IMAGES['kampot'],
    hotspots: [
      { title: 'Crocodile Tree Root Wall', desc: 'Massive root structure strangling ancient sandstone archway.' },
      { title: 'Crocodile Root Courtyard', desc: 'The iconic Hollywood film setting for Tomb Raider.' }
    ]
  },
  {
    id: 'banteay-srei',
    name: 'Banteay Srei',
    khmerName: 'ប្រាសាទបន្ទាយស្រី',
    zhName: '女王宫 (班迭斯雷)',
    frName: 'Banteay Srei',
    century: '10th Century (Rajendravarman / Jayavarman V)',
    style: 'Pink Sandstone Jewel',
    highlight: 'Citadel of Beauty with Micro-Detailed Sandstone Carvings',
    description: 'Known as the "Jewel of Khmer Art", Banteay Srei is built from pinkish sandstone with three-dimensional carvings so delicate they look like carved wood. Dedicated to Shiva, it boasts the finest preservation of detail in all of Angkor.',
    descriptionKm: 'ស្គាល់ថាជា «កែវមុជសិល្បៈខ្មែរ» កសាងពីថ្មភក់ពណ៌ផ្កាឈូក មានចម្លាក់យ៉ាងល្អិតល្អន់ និងស្រស់ស្អាតបំផុត។',
    descriptionZh: '被誉为“高棉艺术的皇冠明珠”，女王宫由粉红色砂岩打造，拥有如雕花木艺般精致立体的三维壁雕。供奉湿婆神，拥有全吴哥保护最完好的雕刻细节。',
    descriptionFr: 'Connu comme le "Joyau de l\'art khmer", Banteay Srei est construit en grès rose avec des sculptures en micro-détail.',
    image: LOCAL_PROVINCE_IMAGES['siem-reap'],
    hotspots: [
      { title: 'Pink Sandstone Devatas', desc: 'Exquisite female guardian deities carved into niches.' },
      { title: 'Lintels of Ramayana Myth', desc: 'Intricate lintels illustrating stories of Ravana and Indra.' }
    ]
  }
];

export const CUISINE = [
  {
    id: 'fish-amok',
    name: 'Fish Amok (អាម៉ុកត្រី)',
    zhName: '高棉清蒸鲜鱼阿摩客 (Fish Amok)',
    frName: 'Amok de Poisson (Fish Amok)',
    category: 'Mains',
    spiciness: 'Mild & Aromatic',
    image: getOfflineIllustration('Food', 'Fish Amok'),
    description: 'Cambodia’s signature national dish. Fresh river fish steamed in banana leaf with rich coconut milk cream, kroeung (lemongrass, galangal, turmeric paste), kaffir lime leaves, and noni leaves.',
    ingredients: ['Snakehead Fish / Catfish', 'Fresh Coconut Cream', 'Kroeung Herb Paste', 'Slok Ngor Leaves', 'Banana Leaf Bowl']
  },
  {
    id: 'beef-lok-lak',
    name: 'Beef Lok Lak (ឡុកឡាក់សាច់គោ)',
    zhName: '法式高棉摇滚牛肉 (Beef Lok Lak)',
    frName: 'Lok Lak de Bœuf',
    category: 'Mains',
    spiciness: 'Savory & Peppery',
    image: getOfflineIllustration('Food', 'Beef Lok Lak'),
    description: 'Stir-fried tender marinated beef cubes served over crisp lettuce, sweet tomatoes, and red onions. Accompanied by Kampot black pepper and lime dipping sauce.',
    ingredients: ['Tenderloin Beef', 'Kampot Pepper Lime Dip', 'Crisp Salad Bed', 'Fried Egg (Optional)']
  },
  {
    id: 'num-banh-chok',
    name: 'Num Banh Chok (នំបញ្ចុក)',
    zhName: '高棉传统鲜米粉 (Num Banh Chok)',
    frName: 'Num Banh Chok (Nouilles Khmères)',
    category: 'Breakfast / Noodles',
    spiciness: 'Fragrant',
    image: getOfflineIllustration('Food', 'Num Banh Chok'),
    description: 'Khmer Noodles. Fresh handmade rice noodles topped with warm green fish curry gravy made from lemongrass, turmeric, and fresh river herbs, served with banana flower and cucumber slices.',
    ingredients: ['Fresh Rice Noodles', 'Lemongrass Fish Curry', 'Banana Flower', 'Long Beans', 'Fresh Mint']
  },
  {
    id: 'kampot-pepper-crab',
    name: 'Kampot Pepper Crab (ក្តាមឆាម្រេចខ្ចី)',
    zhName: '白马鲜鲜胡椒炒花蟹 (Kampot Crab)',
    frName: 'Crabe au Poivre de Kampot',
    category: 'Seafood',
    spiciness: 'Zesty & Fiery',
    image: getOfflineIllustration('Food', 'Kampot Pepper Crab'),
    description: 'Fresh ocean blue swimmer crabs from Kep sauteed directly with stems of fresh green Kampot peppercorns, garlic, and sweet soy sauce.',
    ingredients: ['Fresh Kep Blue Crab', 'Fresh Green Kampot Peppercorn Clusters', 'Garlic', 'Palm Sugar']
  }
];

export const CULTURE_ARTS = [
  {
    id: 'apsara',
    title: 'Apsara Celestial Dance (របាំអប្សរា)',
    zhTitle: '阿普萨拉宫廷宫仙舞蹈',
    frTitle: 'Danse Céleste Apsara',
    type: 'Performing Arts',
    image: getOfflineIllustration('Culture', 'Apsara Celestial Dance'),
    summary: 'Recognized by UNESCO Intangible Cultural Heritage, Apsara is a classical dance drama created to honor royal deities. Dancers wear elaborate gold headpieces and silk sampots, performing slow, hypnotic hand gestures representing flowers and life.',
    details: 'Each hand gesture (mudra) holds distinct meaning — from a lotus bud opening to a fruit ripening on the tree. Training starts in childhood requiring extraordinary flexibility.'
  },
  {
    id: 'bon-om-touk',
    title: 'Bon Om Touk Water Festival (ពិធីបុណ្យអុំទូក)',
    zhTitle: '送水节龙舟赛与祭月节',
    frTitle: 'Fête des Eaux (Bon Om Touk)',
    type: 'Annual Festival (November)',
    image: LOCAL_PROVINCE_IMAGES['phnom-penh'] || getOfflineIllustration('Culture', 'Water Festival Dragon Boats'),
    summary: 'Celebrates the reversal of the Tonle Sap river flow — a natural wonder! Millions gather along Phnom Penh’s riverbank to watch colorful dragon boat races, evening illuminated floats (Loy Pratip), and full moon moon-worshipping ceremonies.',
    details: 'Held over 3 days every November during the full moon of Kadduk month, signaling the end of the rainy season and abundant fishing.'
  },
  {
    id: 'khmer-new-year',
    title: 'Khmer New Year — Chaul Chnam Thmey (ចូលឆ្នាំខ្មែរ)',
    zhTitle: '柬埔寨传统新年 (宋干节)',
    frTitle: 'Nouvel An Khmer (Chaul Chnam Thmey)',
    type: 'Annual Festival (Mid-April)',
    image: LOCAL_TRAVEL_IMAGES['angkor-wat'] || getOfflineIllustration('Culture', 'Khmer New Year Angkor Sangkranta'),
    summary: 'The biggest holiday of the year! Celebrated in mid-April over 3 days (Moha Songkran, Virak Wanabat, Virak Loeung Sak). Cambodians return to home provinces, visit pagodas, splash water, and play traditional games like Teanh Tret (Tug of War).',
    details: 'Angkor Sangkranta in Siem Reap brings thousands together for traditional dance records, folk games, and festive celebrations under ancient temple lights.'
  }
];

export const ITINERARIES = [
  {
    id: '3-day-angkor',
    title: '3-Day Highlights of Angkor',
    zhTitle: '3天吴哥窟全景精华之旅',
    frTitle: 'Circuit 3 Jours Incontournables d\'Angkor',
    duration: '3 Days / 2 Nights',
    style: 'History & Culture',
    budget: '$180 - $350 per person',
    days: [
      {
        day: 1,
        title: 'Grand Angkor Sunrise & Inner Circuit',
        activities: ['5:00 AM Sunrise at Angkor Wat reflection pool', 'Explore Central Towers & bas-relief galleries', 'Visit Jayavarman VII’s Bayon Temple & Angkor Thom City Gate', 'Sunset at Phnom Bakheng hill']
      },
      {
        day: 2,
        title: 'Tomb Raider Roots & Pink Sandstone Jewel',
        activities: ['Morning visit to Ta Prohm tree root monastery', 'Scenic drive through countryside to pink Banteay Srei', 'Banteay Samre & Pre Rup ancient brick temple', 'Evening Apsara Dance Dinner Show in Siem Reap town']
      },
      {
        day: 3,
        title: 'Tonle Sap Lake & Local Artisan Crafts',
        activities: ['Morning boat trip to Kampong Phluk stilt village', 'Artisans d’Angkor silk & wood carving workshop', 'Explore Old Market (Phsar Chas) for spices & gifts', 'Relaxing traditional Khmer herbal massage']
      }
    ]
  },
  {
    id: '7-day-cambodia-grand',
    title: '7-Day Ultimate Kingdom Explorer',
    zhTitle: '7天柬埔寨神奇王国全景深度游',
    frTitle: 'Circuit 7 Jours Grand Tour du Cambodge',
    duration: '7 Days / 6 Nights',
    style: 'Complete Experience',
    budget: '$500 - $950 per person',
    days: [
      { day: 1, title: 'Arrival in Siem Reap & Night Market', activities: ['Hotel check-in', 'Pub Street strolling & Street food tasting'] },
      { day: 2, title: 'Angkor Wat & Bayon Marvels', activities: ['Sunrise Angkor Wat tour', 'Bayon stone faces & Ta Prohm'] },
      { day: 3, title: 'Countryside & Fly to Phnom Penh / Express Highway', activities: ['Banteay Srei', 'Travel to capital city Phnom Penh'] },
      { day: 4, title: 'Royal Heritage & Mekong River Cruise', activities: ['Royal Palace & Silver Pagoda', 'National Museum', 'Sunset Mekong River boat cruise'] },
      { day: 5, title: 'Travel South to Kampot River & Pepper Farm', activities: ['Drive through scenic countryside', 'Kampot Pepper Farm tour', 'Kayaking down Green Loop'] },
      { day: 6, title: 'Kep Seafood & Koh Rong Island Speedboat', activities: ['Fresh Crab Market feast in Kep', 'Speedboat to Koh Rong tropical island'] },
      { day: 7, title: 'Island Paradise Relaxation & Departure', activities: ['Beach swimming, snorkeling, return transfer'] }
    ]
  },
  {
    id: '5-day-coastal-escape',
    title: '5-Day Coastal & Island Beach Escape',
    zhTitle: '5天南部海岛与沿海渡假之旅',
    frTitle: 'Circuit 5 Jours Évasion Balnéaire & Îles',
    duration: '5 Days / 4 Nights',
    style: 'Beach & Nature',
    budget: '$320 - $600 per person',
    days: [
      { day: 1, title: 'Arrival & Speedboat to Koh Rong', activities: ['Speedboat from Sihanoukville port to Saracen Bay'] },
      { day: 2, title: 'Bioluminescent Plankton & Snorkeling', activities: ['Coral reef snorkeling trip', 'Night plankton glowing swim'] },
      { day: 3, title: 'Island Hopping to Koh Rong Sanloem', activities: ['Long Set Beach chill', 'Sunset cocktail cruises'] },
      { day: 4, title: 'Kampot River Kayak & Bokor Mountain', activities: ['Return to mainland Kampot', 'Bokor National Park exploration'] },
      { day: 5, title: 'Kep Fresh Crab Feast & Return', activities: ['Seafood feast and souvenir pepper shopping'] }
    ]
  }
];

export const TRAVEL_GUIDE = {
  visa: {
    title: 'Visa & Entry Requirements',
    type: 'e-Visa / Arrival',
    cost: '$30 Tourist Visa (30 Days)',
    details: 'Apply easily online at evisa.gov.kh or obtain a Tourist Visa on Arrival at Siem Reap (SAI) and Phnom Penh (PNH) airports.',
    requirements: ['Passport valid 6+ months', 'Passport photo / digital upload', '1 blank passport page']
  },
  currency: {
    title: 'Currency & Payment Tips',
    usdRate: '$1 = ~4,100 KHR',
    details: 'US Dollars and Cambodian Riel (KHR) are accepted interchangeably. Mobile QR payments (ABA & Bakong) are supported everywhere.'
  },
  weather: [
    { months: 'Nov - Feb', status: 'Cool & Dry (Peak)', desc: 'Warm sunny days (24°C-30°C), low humidity. Ideal for temple exploring!' },
    { months: 'Mar - May', status: 'Hot Season', desc: 'Sunny (35°C+). Perfect for island escapes in Koh Rong & Kampot.' },
    { months: 'Jun - Oct', status: 'Green Season', desc: 'Lush green landscapes, fewer crowds, and dramatic skies at Angkor.' }
  ],
  gettingAround: [
    { mode: 'Grab / PassApp Tuk-Tuk', desc: 'Inexpensive, convenient auto-rickshaws booked via mobile apps ($1–$3).' },
    { mode: 'Express Bus & Vans', desc: 'Comfortable air-conditioned buses connecting Siem Reap, Phnom Penh, Kampot.' },
    { mode: 'Domestic Flights', desc: 'Direct 45-minute flights between Phnom Penh and Siem Reap (SAI).' }
  ]
};

