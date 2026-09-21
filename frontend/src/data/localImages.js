import kandalImg from '../assets/provinces/កណ្តាល.jpg';
import kepImg from '../assets/provinces/កែប.jpg';
import kohKongImg from '../assets/provinces/កោះកុង.jpg';
import kampongChamImg from '../assets/provinces/កំពង់ចាម.jpg';
import kampongChhnangImg from '../assets/provinces/កំពង់ឆ្នាំង.jpg';
import kampongThomImg from '../assets/provinces/កំពង់ធំ.jpg';
import kampongSpeuImg from '../assets/provinces/កំពង់ស្ពឺ.jpg';
import kampotImg from '../assets/provinces/កំពត.jpg';
import kratieImg from '../assets/provinces/ក្រចេះ.jpg';
import takeoImg from '../assets/provinces/តាកែវ.jpg';
import tbkImg from '../assets/provinces/ត្បូងឃ្មុំ.jpg';
import banteayMeancheyImg from '../assets/provinces/បន្ទាយមានជ័យ.jpg';
import btbImg from '../assets/provinces/បាត់ដំបង.jpg';
import bailenImg from '../assets/provinces/ប៉ៃលិន.jpg';
import pousatImg from '../assets/provinces/ពោធិ៍សាត់.jpg';
import preyVengImg from '../assets/provinces/ព្រៃវែង.jpg';
import preahVihearImg from '../assets/provinces/ព្រះវិហារ.jpg';
import preahSihanoukImg from '../assets/provinces/ព្រះសីហនុ.jpg';
import phnomPenhImg from '../assets/provinces/ភ្នំពេញ.jpg';
import mondulkiriImg from '../assets/provinces/មណ្ឌលគិរី.jpg';
import ratanakiriImg from '../assets/provinces/រតនគិរី.jpg';
import siemReapImg from '../assets/provinces/សៀមរាប.jpg';
import stungTrengImg from '../assets/provinces/ស្ទឹងត្រែង.jpg';
import svayRiengImg from '../assets/provinces/ស្វាយរៀង.jpg';
import odorMeancheyImg from '../assets/provinces/ឧត្តរមានជ័យ.jpg';

import angkorWatTravelImg from '../assets/travel/AngkorWat.jpg';
import bayonTaProhmTravelImg from '../assets/travel/BayonTaProhm,.jpg';
import kohRongTravelImg from '../assets/travel/KohRongKohRongSanloem.jpg';
import mondulkiriTravelImg from '../assets/travel/Mondulkiri.jpg';

import ahMokImg from '../assets/cuisine/AhMok.jpg';
import beefLokLakImg from '../assets/cuisine/BeefLokLak.png';
import kampotPepperCrabImg from '../assets/cuisine/KampotPepperCrab.jpg';
import numBanhChokImg from '../assets/cuisine/NumBanhChok.jpg';

import apsaraDanceImg from '../assets/ArtsFestivals/ApsaraCelestialDance.jpg';
import waterFestivalImg from '../assets/ArtsFestivals/BonOmToukWaterFestival.jpg';
import khmerNewYearImg from '../assets/ArtsFestivals/KhmerNewYearChaulChnamThmey.png';

import angkorWatTempleImg from '../assets/temple/ប្រាសាទអង្គរវត្ត.jpg';
import bayonTempleImg from '../assets/temple/ប្រាសាទបាយន្ត.jpg';
import taProhmTempleImg from '../assets/temple/ប្រាសាទតាព្រហ្ម.jpg';
import banteaySreiTempleImg from '../assets/temple/ប្រាសាទបន្ទាយស្រី.jpg';

// Map of all 25 provinces/capital to offline local imported image assets
export const LOCAL_PROVINCE_IMAGES = {
  'siem-reap': siemReapImg,
  'phnom-penh': phnomPenhImg,
  'preah-sihanouk': preahSihanoukImg,
  'kampot': kampotImg,
  'kep': kepImg,
  'battambang': btbImg,
  'mondulkiri': mondulkiriImg,
  'ratanakiri': ratanakiriImg,
  'preah-vihear': preahVihearImg,
  'kratie': kratieImg,
  'stung-treng': stungTrengImg,
  'koh-kong': kohKongImg,
  'pursat': pousatImg,
  'banteay-meanchey': banteayMeancheyImg,
  'oddar-meanchey': odorMeancheyImg,
  'pailin': bailenImg,
  'kampong-cham': kampongChamImg,
  'kampong-chhnang': kampongChhnangImg,
  'kampong-speu': kampongSpeuImg,
  'kampong-thom': kampongThomImg,
  'kandal': kandalImg,
  'takeo': takeoImg,
  'prey-veng': preyVengImg,
  'svay-rieng': svayRiengImg,
  'tboung-khmum': tbkImg
};

// Map of travel featured images
export const LOCAL_TRAVEL_IMAGES = {
  'angkor-wat': angkorWatTravelImg,
  'bayon-ta-prohm': bayonTaProhmTravelImg,
  'koh-rong': kohRongTravelImg,
  'mondulkiri': mondulkiriTravelImg
};

// Map of cuisine dishes images
export const LOCAL_CUISINE_IMAGES = {
  'fish-amok': ahMokImg,
  'beef-lok-lak': beefLokLakImg,
  'kampot-pepper-crab': kampotPepperCrabImg,
  'num-banh-chok': numBanhChokImg
};

// Map of Arts and Festivals images
export const LOCAL_ARTS_FESTIVAL_IMAGES = {
  'apsara': apsaraDanceImg,
  'bon-om-touk': waterFestivalImg,
  'khmer-new-year': khmerNewYearImg
};

// Map of Temple images
export const LOCAL_TEMPLE_IMAGES = {
  'angkor-wat': angkorWatTempleImg,
  'bayon': bayonTempleImg,
  'ta-prohm': taProhmTempleImg,
  'banteay-srei': banteaySreiTempleImg
};

// Helper SVG generator for offline fallback graphics if needed
export const getOfflineIllustration = (category = 'Heritage', title = 'Cambodia') => {
  const encTitle = encodeURIComponent(title);
  
  if (category === 'Heritage' || category === 'Temples' || category === 'UNESCO Heritage' || category === 'UNESCO Pre-Angkor') {
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%230f172a"/><stop offset="50%" stop-color="%231e1b4b"/><stop offset="100%" stop-color="%23451a03"/></linearGradient></defs><rect width="800" height="500" fill="url(%23g)"/><circle cx="400" cy="200" r="140" fill="%23f59e0b" opacity="0.15"/><path d="M 250,380 L 280,260 L 310,380 L 370,220 L 400,160 L 430,220 L 490,380 L 520,260 L 550,380 Z" fill="%23d97706" opacity="0.85"/><path d="M 180,420 L 220,320 L 260,420 L 540,420 L 580,320 L 620,420 Z" fill="%23b45309" opacity="0.9"/><rect x="100" y="410" width="600" height="50" fill="%2378350f"/><text x="400" y="470" font-family="sans-serif" font-size="22" font-weight="bold" fill="%23fef3c7" text-anchor="middle">${encTitle}</text></svg>`;
  }

  if (category === 'Coastal' || category === 'Beaches' || category === 'Coastal & Islands' || category === 'Seafood & Beaches') {
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%"><defs><linearGradient id="bg" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="%230284c7"/><stop offset="60%" stop-color="%2338bdf8"/><stop offset="100%" stop-color="%23fef08a"/></linearGradient></defs><rect width="800" height="500" fill="url(%23bg)"/><circle cx="650" cy="120" r="70" fill="%23fef08a" opacity="0.8"/><path d="M0,320 Q200,280 400,320 T800,320 L800,500 L0,500 Z" fill="%230284c7" opacity="0.7"/><path d="M0,360 Q200,340 400,360 T800,360 L800,500 L0,500 Z" fill="%230369a1"/><path d="M 0,440 Q 400,390 800,440 L 800,500 L 0,500 Z" fill="%23fde047" opacity="0.9"/><text x="400" y="475" font-family="sans-serif" font-size="22" font-weight="bold" fill="%230f172a" text-anchor="middle">${encTitle}</text></svg>`;
  }

  if (category === 'Eco-Tourism & Wildlife' || category === 'Nature' || category === 'Jungle & Mangroves' || category === 'Mountain & Eco') {
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%"><defs><linearGradient id="ng" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23064e3b"/><stop offset="50%" stop-color="%23047857"/><stop offset="100%" stop-color="%23022c22"/></linearGradient></defs><rect width="800" height="500" fill="url(%23ng)"/><path d="M 100,420 L 250,200 L 400,420 L 300,420 L 480,180 L 660,420 L 550,420 L 720,240 L 820,420 Z" fill="%2310b981" opacity="0.35"/><path d="M 0,430 Q 400,380 800,430 L 800,500 L 0,500 Z" fill="%23065f46"/><text x="400" y="475" font-family="sans-serif" font-size="22" font-weight="bold" fill="%23ecfdf5" text-anchor="middle">${encTitle}</text></svg>`;
  }

  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%"><defs><linearGradient id="cg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%231e293b"/><stop offset="50%" stop-color="%23475569"/><stop offset="100%" stop-color="%230f172a"/></linearGradient></defs><rect width="800" height="500" fill="url(%23cg)"/><circle cx="400" cy="220" r="110" fill="%23f59e0b" opacity="0.2"/><text x="400" y="240" font-family="sans-serif" font-size="32" font-weight="extrabold" fill="%23fbbf24" text-anchor="middle">🇰🇭 ${encTitle}</text><text x="400" y="460" font-family="sans-serif" font-size="18" font-weight="bold" fill="%2394a3b8" text-anchor="middle">Cambodia Tourism Directory</text></svg>`;
};
