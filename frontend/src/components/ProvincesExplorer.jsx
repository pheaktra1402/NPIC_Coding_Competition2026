import React, { useEffect, useState } from 'react';
import { PROVINCES_DATA } from '../data/provincesData';
import { Map, Search, Sparkles, CheckCircle2, ArrowUpRight, X, Compass, Heart } from 'lucide-react';
import { useTrip } from '../context/TripContext';

export default function ProvincesExplorer({ onOpenBooking, lang }) {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProvince, setActiveProvince] = useState(null);
  const { toggleSave, isSaved } = useTrip();

  const regions = [
    { key: 'All', nameEn: 'All 25 Provinces', nameKm: 'ទាំង ២៥ រាជធានី-ខេត្ត' },
    { key: 'Northwest', nameEn: 'Northwest', nameKm: 'ភាគពាយព្យ' },
    { key: 'Central & Mekong', nameEn: 'Central & Mekong', nameKm: 'ភាគកណ្តាល និងមេគង្គ' },
    { key: 'Coastal', nameEn: 'Coastal Coast', nameKm: 'តំបន់ឆ្នេរ' },
    { key: 'Eastern Eco-Highlands', nameEn: 'Eastern Eco-Highlands', nameKm: 'ភូមិភាគអសមត្ថភាព' }
  ];

  const filteredProvinces = PROVINCES_DATA.filter((item) => {
    const matchesRegion = selectedRegion === 'All' || item.region === selectedRegion;
    const matchesSearch =
      !searchQuery ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.khmerName.includes(searchQuery) ||
      item.topAttractions.some((a) => a.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesRegion && matchesSearch;
  });

  return (
    <section id="provinces" className="py-24 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Map className="w-3.5 h-3.5" />
            <span>{lang === 'EN' ? 'KINGDOM OF CAMBODIA DIRECTORY' : 'តារាងរាជធានី-ខេត្តទាំង ២៥'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
            {lang === 'EN' ? (
              <>
                Explore All <span className="gold-gradient-text">25 Provinces</span>
              </>
            ) : (
              <span className="khmer-font text-amber-500 dark:text-amber-300">ស្វែងយល់ពីរាជធានី-ខេត្តទាំង ២៥ នៅកម្ពុជា</span>
            )}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {lang === 'EN'
              ? 'Discover unique ancient temples, waterfalls, floating villages, coastal beaches, and eco-sanctuaries across every province.'
              : 'ស្វែងរកទីតាំងទេសចរណ៍ តំបន់ឆ្នេរ ទឹកធ្លាក់ និងប្រាសាទបុរាណនៅគ្រប់ខេត្ត។'}
          </p>
        </div>

        {/* Search & Region Filter Bar */}
        <div className="space-y-6 mb-12">
          {/* Search box */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-amber-500 dark:text-amber-400" />
            <input
              type="text"
              placeholder={lang === 'EN' ? 'Search by province or landmark (e.g. Mondulkiri, Waterfall, Pepper)...' : 'ស្វែងរកតាមឈ្មោះខេត្ត ឬទីតាំង...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-slate-900 dark:text-white text-sm shadow-md focus:outline-none focus:border-amber-500 transition-all"
            />
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {regions.map((reg) => (
              <button
                key={reg.key}
                onClick={() => setSelectedRegion(reg.key)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedRegion === reg.key
                    ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-105'
                    : 'glass-card text-slate-700 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-300 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {lang === 'EN' ? reg.nameEn : reg.nameKm}
              </button>
            ))}
          </div>
        </div>

        {/* Province Grid (Showing count badge) */}
        <div className="mb-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>Showing <strong>{filteredProvinces.length}</strong> of 25 Provinces & Capital</span>
          <span className="khmer-font">កម្ពុជាមាន ២៤ ខេត្ត និង ១ រាជធានី</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProvinces.map((prov) => (
            <div
              key={prov.id}
              className="glass-card rounded-2xl overflow-hidden glass-card-hover border border-slate-200 dark:border-slate-800/80 flex flex-col justify-between group"
            >
              {/* Province Image Header */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={prov.image}
                  alt={prov.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <span className="absolute top-3 left-3 bg-slate-900/80 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-amber-400 border border-slate-700">
                  {prov.region}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    toggleSave({
                      id: `prov-${prov.id}`,
                      name: prov.name,
                      kind: lang === 'EN' ? 'Province' : 'ខេត្ត',
                      meta: prov.region,
                      image: prov.image,
                      lang
                    })
                  }
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/80 border border-amber-400/40 flex items-center justify-center"
                  aria-label="Save province"
                >
                  <Heart className={`w-3.5 h-3.5 ${isSaved(`prov-${prov.id}`) ? 'fill-amber-400 text-amber-400' : 'text-amber-200'}`} />
                </button>

                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-amber-300 uppercase tracking-widest khmer-font block">
                      {prov.khmerName}
                    </span>
                    <h3 className="text-xl font-extrabold text-white">{prov.name}</h3>
                  </div>
                </div>
              </div>

              {/* Province Description & Top Attractions preview */}
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                  {prov.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 block">
                    {lang === 'EN' ? 'Top Attractions:' : 'តំបន់ទេសចរណ៍ល្បីៗ៖'}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {prov.topAttractions.slice(0, 3).map((att, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700/60"
                      >
                        • {att}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setActiveProvince(prov)}
                  className="w-full mt-2 py-2 bg-amber-500/10 hover:bg-amber-500 hover:text-slate-950 text-amber-600 dark:text-amber-400 text-xs font-bold rounded-xl border border-amber-500/30 transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>{lang === 'EN' ? 'View Top Attractions' : 'មើលតំបន់ទេសចរណ៍'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Detail for Active Province */}
        {activeProvince && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in" onClick={() => setActiveProvince(null)}>
            <div className="glass-panel w-full max-w-2xl rounded-3xl border border-amber-500/30 shadow-2xl p-6 sm:p-8 relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setActiveProvince(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest khmer-font">
                    {activeProvince.khmerName} • {activeProvince.region}
                  </span>
                  <h3 className="text-3xl font-extrabold text-white">{activeProvince.name}</h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {activeProvince.description}
              </p>

              <div className="glass-card p-4 rounded-2xl border border-slate-800 mb-6 space-y-3">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{lang === 'EN' ? 'Top Landmarks & Places to Travel:' : 'កន្លែងទេសចរណ៍សំខាន់ៗ៖'}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeProvince.topAttractions.map((spot, idx) => (
                    <div key={idx} className="p-2 bg-slate-900/80 rounded-xl text-xs text-slate-200 border border-slate-800 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <span>{spot}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  onClick={() => setActiveProvince(null)}
                  className="w-full sm:w-auto px-5 py-2.5 bg-slate-800 text-slate-300 text-xs font-semibold rounded-xl"
                >
                  {lang === 'EN' ? 'Close' : 'បិទ'}
                </button>
                <button
                  onClick={() => {
                    setActiveProvince(null);
                    onOpenBooking(activeProvince.name);
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-xs font-extrabold rounded-xl shadow-lg flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{lang === 'EN' ? `Book Tour to ${activeProvince.name}` : 'កក់កញ្ចប់ទេសចរណ៍'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
