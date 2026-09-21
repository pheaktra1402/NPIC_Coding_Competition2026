import db, { initDB } from '../config/db.js';

const DESTINATIONS = [
  {
    id: 'siem-reap',
    name: 'Siem Reap & Angkor',
    khmer_name: 'សៀមរាប',
    region: 'Northwest',
    category: 'Temples',
    rating: 4.9,
    reviews_count: 14200,
    hero_image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    gallery: JSON.stringify([
      'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80'
    ]),
    tagline: 'Gateway to the Ancient Khmer Empire & World Heritage',
    description: 'Siem Reap is world-famous as the home of Angkor Wat, the world’s largest religious monument. Explore grand stone temples overrun by giant tree roots, vibrant night markets, cultural Apsara performances, and serene floating villages on Tonle Sap Lake.',
    highlights: JSON.stringify(['Angkor Wat Sunrise', 'Bayon Face Towers', 'Ta Prohm Root Temple', 'Pub Street & Night Market', 'Tonle Sap Floating Village']),
    best_time: 'November to February (Cool & Dry)',
    entry_fee: '$37 (1-Day Angkor Pass) / $62 (3-Day)',
    location: 'Siem Reap Province, Northwest Cambodia'
  },
  {
    id: 'phnom-penh',
    name: 'Phnom Penh',
    khmer_name: 'ភ្នំពេញ',
    region: 'Central',
    category: 'Culture',
    rating: 4.7,
    reviews_count: 8900,
    hero_image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80',
    gallery: JSON.stringify([
      'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
    ]),
    tagline: 'The Pearl of Asia — Capital of Heritage & Modern Energy',
    description: 'Cambodia’s capital sits at the confluence of the Mekong and Tonle Sap rivers. Experience the glittering Royal Palace, Emerald Buddha, poignant Khmer Rouge memorials (Tuol Sleng & Choeung Ek), chic rooftop bars, and riverside dining.',
    highlights: JSON.stringify(['Royal Palace & Silver Pagoda', 'National Museum of Cambodia', 'Sisowath Quay Riverside', 'Tuol Sleng Genocide Museum', 'Central Market (Phsar Thmei)']),
    best_time: 'November to March',
    entry_fee: 'Royal Palace: $10 | Museum: $10',
    location: 'Chaktomuk River Junction, Capital Region'
  },
  {
    id: 'koh-rong',
    name: 'Koh Rong & Koh Rong Sanloem',
    khmer_name: 'កោះរ៉ុង',
    region: 'South Coast',
    category: 'Beaches',
    rating: 4.9,
    reviews_count: 6300,
    hero_image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    gallery: JSON.stringify([
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80'
    ]),
    tagline: 'Tropical Island Paradise with Bioluminescent Waters',
    description: 'Pristine white sand beaches, crystal clear turquoise ocean, thriving coral reefs, and magical glowing bioluminescent plankton at night. Koh Rong offers island bliss from lively beach resorts to quiet eco-lodges on Saracen Bay.',
    highlights: JSON.stringify(['Long Set Beach & Sok San', 'Bioluminescent Plankton Tours', 'Scuba Diving & Snorkeling', 'Saracen Bay Quiet Escapes', 'Sunset Point Hikes']),
    best_time: 'December to April (Sunny & Warm)',
    entry_fee: 'Ferry Speedboat: $25 Return',
    location: 'Gulf of Thailand, Sihanoukville Coast'
  },
  {
    id: 'kampot-kep',
    name: 'Kampot & Kep',
    khmer_name: 'កំពត និង កែប',
    region: 'South Coast',
    category: 'Food',
    rating: 4.8,
    reviews_count: 5100,
    hero_image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    gallery: JSON.stringify([
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    ]),
    tagline: 'French Colonial Charm, World Famous Pepper & Fresh Crab',
    description: 'A lazy riverside town backed by the misty Bokor Mountains. Kampot is renowned worldwide for Kampot Green Pepper plantations, French colonial shopfronts, kayak tours along Green Loop, and Kep’s famous fresh blue crab market.',
    highlights: JSON.stringify(['Bokor National Park Hill Station', 'Kampot Pepper Plantation Tours', 'Kep Crab Market Feast', 'Rabbit Island (Koh Tonsay)', 'River Sunset Cruises']),
    best_time: 'November to April',
    entry_fee: 'Bokor Park Entrance: Free / Tour dependent',
    location: 'Southern Coastal Province'
  },
  {
    id: 'mondulkiri',
    name: 'Mondulkiri & Elephant Valley',
    khmer_name: 'មណ្ឌលគិរី',
    region: 'East',
    category: 'Nature',
    rating: 4.8,
    reviews_count: 3200,
    hero_image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80',
    gallery: JSON.stringify(['https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80']),
    tagline: 'Rolling Pine Hills, Majestic Waterfalls & Ethical Elephant Sanctuary',
    description: 'Escape to Cambodia’s wild Eastern Highlands with cool temperatures, pine forests, indigenous Bunong tribal culture, multi-tiered waterfalls like Bousra, and ethical elephant rehabilitation sanctuaries where elephants roam free.',
    highlights: JSON.stringify(['Elephant Valley Project Sanctuary', 'Bousra Waterfall (Double Tier)', 'Bunong Cultural Homestay', 'Sea of Forests Viewpoint', 'Jungle Trekking']),
    best_time: 'October to February (Fresh & Lush)',
    entry_fee: 'Sanctuary Visits: ~$50 - $90/day',
    location: 'Eastern Border Highlands'
  },
  {
    id: 'battambang',
    name: 'Battambang',
    khmer_name: 'បាត់ដំបង',
    region: 'Northwest',
    category: 'Culture',
    rating: 4.7,
    reviews_count: 4400,
    hero_image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80',
    gallery: JSON.stringify(['https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80']),
    tagline: 'Artistic Capital, Famous Bamboo Train & Million Bat Caves',
    description: 'Cambodia’s creative hub known for beautifully preserved French architecture, indie art galleries, the legendary Bamboo Train (Norry), and Phnom Sampeau where millions of bats fly out into the sunset sky in dramatic clouds.',
    highlights: JSON.stringify(['The Iconic Bamboo Train', 'Phnom Sampeau Sunset Bat Cave', 'Phare Circus Performance Arts', 'Wat Ek Phnom Ancient Ruins', 'Local Rice Paper Workshops']),
    best_time: 'November to March',
    entry_fee: 'Bamboo Train Ride: ~$5 | Bat Cave: $3',
    location: 'Sangkae River Valley, Northwest'
  }
];

const TEMPLES = [
  {
    id: 'angkor-wat',
    name: 'Angkor Wat',
    khmer_name: 'អង្គរវត្ត',
    century: '12th Century (Suryavarman II)',
    style: 'Khmer High Classical Architecture',
    highlight: 'World’s Largest Religious Monument & Symbol of Cambodia',
    description: 'Built as a Hindu temple dedicated to Vishnu and gradually transformed into a Buddhist temple, Angkor Wat represents the earthly embodiment of Mt. Meru. Famous for its symmetrical lotus-bud towers, intricate bas-relief carvings depicting Hindu mythology, and legendary reflection pool sunrise.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    hotspots: JSON.stringify([
      { title: 'Central Sanctuary Towers', desc: 'Representing the 5 peaks of Mount Meru, rising 65 meters above ground level.' },
      { title: 'Bas-Relief Gallery of Churning the Ocean of Milk', desc: 'Famous 49-meter carved wall showing 88 devas and 92 asuras wrestling the cosmic serpent.' },
      { title: 'Reflection Pond Sunrise View', desc: 'The iconic vantage point where travelers gather before dawn to catch five towers reflecting on lotus ponds.' }
    ])
  },
  {
    id: 'bayon',
    name: 'Bayon Temple (Angkor Thom)',
    khmer_name: 'ប្រាសាទបាយ័ន',
    century: 'Late 12th Century (Jayavarman VII)',
    style: 'Mahayana Buddhist Architecture',
    highlight: '216 Enigmatic Smiling Stone Faces of Lokeshvara',
    description: 'Located at the exact heart of the ancient walled city Angkor Thom, Bayon stands out for its 54 gothic towers carved with serene, smiling stone faces looking out in all cardinal directions.',
    image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80',
    hotspots: JSON.stringify([
      { title: 'Smiling Towers', desc: 'Carved giant stone faces said to represent King Jayavarman VII and Avalokiteshvara.' },
      { title: 'Outer Wall Bas-Reliefs', desc: 'Carvings portraying naval battles with the Chams, market vendors, and cockfights.' }
    ])
  },
  {
    id: 'ta-prohm',
    name: 'Ta Prohm (The Tomb Raider Temple)',
    khmer_name: 'ប្រាសាទតាព្រហ្ម',
    century: 'Late 12th Century (Jayavarman VII)',
    style: 'Buddhist Monastery & University',
    highlight: 'Colossal Silk-Cotton & Banyan Tree Roots Embracing Ruins',
    description: 'Left largely in the state in which it was discovered, Ta Prohm is famous for massive strangler fig tree roots coiling over ancient stone corridors.',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    hotspots: JSON.stringify([
      { title: 'Crocodile Tree Root Wall', desc: 'Massive root structure strangling ancient sandstone archway.' },
      { title: 'Crocodile Root Courtyard', desc: 'The iconic Hollywood film setting for Tomb Raider.' }
    ])
  }
];

const CUISINE = [
  {
    id: 'fish-amok',
    name: 'Fish Amok (អាម៉ុកត្រី)',
    category: 'Mains',
    spiciness: 'Mild & Aromatic',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    description: 'Cambodia’s signature national dish. Fresh river fish steamed in banana leaf with rich coconut milk cream, kroeung herb paste, and noni leaves.',
    ingredients: JSON.stringify(['Snakehead Fish / Catfish', 'Fresh Coconut Cream', 'Kroeung Herb Paste', 'Slok Ngor Leaves', 'Banana Leaf Bowl'])
  },
  {
    id: 'beef-lok-lak',
    name: 'Beef Lok Lak (ឡុកឡាក់សាច់គោ)',
    category: 'Mains',
    spiciness: 'Savory & Peppery',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    description: 'Stir-fried tender marinated beef cubes served over crisp lettuce, sweet tomatoes, and red onions. Accompanied by Kampot black pepper and lime dipping sauce.',
    ingredients: JSON.stringify(['Tenderloin Beef', 'Kampot Pepper Lime Dip', 'Crisp Salad Bed', 'Fried Egg (Optional)'])
  }
];

export const seedDatabase = async () => {
  await initDB();

  console.log('🌱 Seeding SQLite database with Cambodia tourism data...');

  // Seed Destinations
  const destStmt = db.prepare(`
    INSERT OR REPLACE INTO destinations (
      id, name, khmer_name, region, category, rating, reviews_count, hero_image, gallery, tagline, description, highlights, best_time, entry_fee, location
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
  for (const d of DESTINATIONS) {
    destStmt.run(d.id, d.name, d.khmer_name, d.region, d.category, d.rating, d.reviews_count, d.hero_image, d.gallery, d.tagline, d.description, d.highlights, d.best_time, d.entry_fee, d.location);
  }
  destStmt.finalize();

  // Seed Temples
  const templeStmt = db.prepare(`
    INSERT OR REPLACE INTO temples (
      id, name, khmer_name, century, style, highlight, description, image, hotspots
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
  for (const t of TEMPLES) {
    templeStmt.run(t.id, t.name, t.khmer_name, t.century, t.style, t.highlight, t.description, t.image, t.hotspots);
  }
  templeStmt.finalize();

  // Seed Cuisine
  const cuisineStmt = db.prepare(`
    INSERT OR REPLACE INTO cuisine (
      id, name, category, spiciness, image, description, ingredients
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
  `);
  for (const c of CUISINE) {
    cuisineStmt.run(c.id, c.name, c.category, c.spiciness, c.image, c.description, c.ingredients);
  }
  cuisineStmt.finalize();

  console.log('✨ SQLite Database Seeding Completed!');
};

seedDatabase();
