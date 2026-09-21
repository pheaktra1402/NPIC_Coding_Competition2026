import React, { useEffect, useState } from 'react';
import { DESTINATIONS } from '../data/tourismData';
import { MapPin, Star, Calendar, ArrowUpRight, X, CheckCircle, Info, Sparkles, Heart } from 'lucide-react';
import { useTrip } from '../context/TripContext';
import SafeImage from './SafeImage';

export default function Destinations({ searchQuery, selectedCategory, onOpenBooking, lang, onClearSearch }) {
  const [activeTab, setActiveTab] = useState(selectedCategory || 'All');
  const [activeDestination, setActiveDestination] = useState(null);
  const [sortBy, setSortBy] = useState('rating');
  const { toggleSave, isSaved } = useTrip();

  const categories = [
    { key: 'All', en: 'All', km: 'ទាំងអស់' },
    { key: 'Temples', en: 'Temples', km: 'ប្រាសាទ' },
    { key: 'Beaches', en: 'Beaches', km: 'ឆ្នេរ' },
    { key: 'Culture', en: 'Culture', km: 'វប្បធម៌' },
    { key: 'Food', en: 'Food', km: 'ម្ហូប' },
    { key: 'Nature', en: 'Nature', km: 'ធម្មជាតិ' },
  ];

  useEffect(() => {
    if (selectedCategory) setActiveTab(selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    if (!activeDestination) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setActiveDestination(null);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [activeDestination]);

  const filteredDestinations = DESTINATIONS.filter((item) => {
    const matchesCategory = activeTab === 'All' || item.category === activeTab;
    const matchesSearch =
      !searchQuery ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.khmerName.includes(searchQuery);
    return matchesCategory && matchesSearch;
  }).sort((a, b) => (sortBy === 'rating' ? b.rating - a.rating : a.name.localeCompare(b.name)));

  const saveItem = (item) => {
    toggleSave({
      id: `dest-${item.id}`,
      name: item.name,
      kind: lang === 'EN' ? 'Destination' : 'តំបន់',
      meta: item.region,
      image: item.heroImage,
      lang
    });
  };

  return (
    <section id="destinations" className="site-section section-surface-alt relative">
      <div className="site-container">
        <div className="section-header">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>{lang === 'EN' ? 'PREMIER DESTINATIONS' : 'តំបន់ទេសចរណ៍ពេញនិយម'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {lang === 'EN' ? (
              <>
                Unforgettable <span className="gold-gradient-text">Destinations</span>
              </>
            ) : (
              <span className="khmer-font text-amber-500 dark:text-amber-300">តំបន់ទេសចរណ៍ល្បីៗនៅកម្ពុជា</span>
            )}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {lang === 'EN'
              ? 'From the legendary temples of Siem Reap to pristine island beaches in the Gulf of Thailand.'
              : 'ពីប្រាសាទបុរាណដ៏អស្ចារ្យនៅសៀមរាប រហូតដល់ឆ្នេរសមុទ្រដ៏ស្រស់ស្អាតនៅកោះរ៉ុង។'}
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveTab(cat.key)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  activeTab === cat.key
                    ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-lg shadow-amber-500/25'
                    : 'glass-card text-slate-700 dark:text-slate-300 hover:text-amber-500 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {lang === 'EN' ? cat.en : cat.km}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 text-xs">
            <label className="text-slate-500 font-semibold">
              {lang === 'EN' ? 'Sort' : 'តម្រៀប'}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="ml-2 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-bold text-slate-800 dark:text-slate-200"
              >
                <option value="rating">{lang === 'EN' ? 'Top rated' : 'ពិន្ទុខ្ពស់'}</option>
                <option value="name">{lang === 'EN' ? 'A–Z' : 'ឈ្មោះ'}</option>
              </select>
            </label>
            {searchQuery && (
              <button
                type="button"
                onClick={onClearSearch}
                className="px-3 py-1.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300 font-bold"
              >
                {lang === 'EN' ? `Clear “${searchQuery}”` : 'សម្អាតការស្វែងរក'}
              </button>
            )}
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl overflow-hidden glass-card-hover group flex flex-col border border-slate-200 dark:border-slate-800 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <SafeImage
                  src={item.heroImage}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                <div className="absolute top-4 left-4 glass-panel px-3 py-1 rounded-full flex items-center gap-1.5 border border-amber-400/40 shadow-md">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-extrabold text-amber-300">{item.rating}</span>
                  <span className="text-[10px] text-slate-300">({item.reviewsCount.toLocaleString()})</span>
                </div>
                <button
                  type="button"
                  onClick={() => saveItem(item)}
                  className="absolute top-4 right-14 w-9 h-9 rounded-full glass-panel border border-amber-400/40 flex items-center justify-center"
                  aria-label={isSaved(`dest-${item.id}`) ? 'Remove from trip' : 'Save to trip'}
                >
                  <Heart className={`w-4 h-4 ${isSaved(`dest-${item.id}`) ? 'fill-amber-400 text-amber-400' : 'text-amber-200'}`} />
                </button>

                {/* Region Tag */}
                <div className="absolute top-4 right-4 bg-slate-900/80 px-3 py-1 rounded-full text-xs font-bold text-slate-200 border border-slate-700">
                  {item.region}
                </div>

                {/* Location & Title overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-400 tracking-wider uppercase khmer-font">
                      {item.khmerName}
                    </span>
                    <span className="text-xs font-semibold text-slate-200 bg-slate-800/80 px-2.5 py-0.5 rounded-md">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white group-hover:text-amber-300 transition-colors">
                    {item.name}
                  </h3>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-3 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights preview */}
                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {lang === 'EN' ? 'Top Highlights:' : 'ចំណុចសំខាន់ៗ៖'}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.highlights.slice(0, 3).map((hl, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-amber-200/90 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700/60 font-medium"
                      >
                        ✓ {hl}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Card Footer */}
                <div className="pt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                    <span>{item.bestTime}</span>
                  </div>

                  <button
                    onClick={() => setActiveDestination(item)}
                    className="flex items-center gap-1 px-4 py-2 bg-amber-500/10 hover:bg-amber-500 text-amber-600 dark:text-amber-400 hover:text-slate-950 text-xs font-extrabold rounded-xl transition-all cursor-pointer border border-amber-500/30"
                  >
                    <span>{lang === 'EN' ? 'Explore Details' : 'មើលលម្អិត'}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="text-center py-16 glass-card rounded-2xl max-w-lg mx-auto">
            <Info className="w-12 h-12 text-amber-500 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
              {lang === 'EN' ? 'No destinations match your filter' : 'មិនមានលទ្ធផលស្វែងរក'}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
              {lang === 'EN' ? 'Try another keyword or show every destination.' : 'សូមព្យាយាមស្វែងរកពាក្យផ្សេងទៀត។'}
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveTab('All');
                onClearSearch?.();
              }}
              className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 text-xs font-extrabold"
            >
              {lang === 'EN' ? 'Show all destinations' : 'បង្ហាញទាំងអស់'}
            </button>
          </div>
        )}
      </div>

      {/* Destination Detail Modal */}
      {activeDestination && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in" onClick={() => setActiveDestination(null)}>
          <div className="glass-panel w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-amber-500/40 shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActiveDestination(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/70 hover:bg-slate-900 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 sm:h-80">
              <SafeImage
                src={activeDestination.heroImage}
                alt={activeDestination.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-amber-400 text-sm font-bold uppercase tracking-widest khmer-font">
                  {activeDestination.khmerName} • {activeDestination.region}
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-1">
                  {activeDestination.name}
                </h2>
                <p className="text-amber-200/90 text-sm sm:text-base mt-1 italic">
                  "{activeDestination.tagline}"
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{lang === 'EN' ? 'About Destination' : 'អំពីទីតាំងទេសចរណ៍'}</h4>
                <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                  {activeDestination.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glass-card p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                  <h5 className="text-xs font-bold text-amber-500 dark:text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4" />
                    <span>{lang === 'EN' ? 'Must-See Highlights' : 'ទីតាំងមិនគួររំលង'}</span>
                  </h5>
                  <ul className="space-y-2">
                    {activeDestination.highlights.map((hl, idx) => (
                      <li key={idx} className="text-sm text-slate-700 dark:text-slate-300 flex items-center gap-2 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass-card p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
                  <h5 className="text-xs font-bold text-amber-500 dark:text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>{lang === 'EN' ? 'Traveler Essentials' : 'ព័ត៌មានចាំបាច់'}</span>
                  </h5>
                  <div className="text-sm text-slate-700 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-white">{lang === 'EN' ? 'Best Season:' : 'រដូវកាលល្អបំផុត៖'}</strong> {activeDestination.bestTime}
                  </div>
                  <div className="text-sm text-slate-700 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-white">{lang === 'EN' ? 'Entrance Pass / Tickets:' : 'តម្លៃសំបុត្រចូលទស្សនា៖'}</strong> {activeDestination.entryFee}
                  </div>
                  <div className="text-sm text-slate-700 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-white">{lang === 'EN' ? 'Location:' : 'ទីតាំង៖'}</strong> {activeDestination.location}
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-end gap-3 border-t border-slate-200 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => saveItem(activeDestination)}
                  className="w-full sm:w-auto px-6 py-2.5 glass-card border border-amber-500/30 text-amber-600 dark:text-amber-400 font-semibold rounded-xl text-xs flex items-center justify-center gap-2"
                >
                  <Heart className={`w-4 h-4 ${isSaved(`dest-${activeDestination.id}`) ? 'fill-amber-400' : ''}`} />
                  {isSaved(`dest-${activeDestination.id}`)
                    ? (lang === 'EN' ? 'Saved' : 'បានរក្សាទុក')
                    : (lang === 'EN' ? 'Save to trip' : 'រក្សាទុក')}
                </button>
                <button
                  onClick={() => setActiveDestination(null)}
                  className="w-full sm:w-auto px-6 py-2.5 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-300 font-semibold rounded-xl text-xs"
                >
                  {lang === 'EN' ? 'Close Window' : 'បិទ'}
                </button>

                <button
                  onClick={() => {
                    setActiveDestination(null);
                    onOpenBooking(activeDestination.name);
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{lang === 'EN' ? `Book Tour to ${activeDestination.name}` : 'កក់កញ្ចប់ទេសចរណ៍'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
