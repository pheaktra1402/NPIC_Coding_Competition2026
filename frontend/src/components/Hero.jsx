import React, { useMemo, useState } from 'react';
import { Search, ArrowRight, Sparkles, ChevronDown, MapPin } from 'lucide-react';
import { DESTINATIONS } from '../data/tourismData';
import { getOfflineIllustration, LOCAL_PROVINCE_IMAGES } from '../data/localImages';
import { getTranslation } from '../data/translations';
import SafeImage from './SafeImage';

export default function Hero({ onSearch, onSelectCategory, onOpenBooking, lang }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState('All');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const heroBg = LOCAL_PROVINCE_IMAGES['siem-reap'] || getOfflineIllustration('Heritage', 'Angkor Wat Sunrise');

  const suggestions = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return DESTINATIONS.slice(0, 4);
    return DESTINATIONS.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        (d.khmerName && d.khmerName.includes(searchTerm)) ||
        (d.zhName && d.zhName.includes(searchTerm)) ||
        d.category.toLowerCase().includes(q)
    ).slice(0, 5);
  }, [searchTerm]);

  const runSearch = (term = searchTerm, category = selectedCat) => {
    onSearch(term, category);
    onSelectCategory?.(category);
    setShowSuggestions(false);
    document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    runSearch();
  };

  const quickChips = [
    { label: lang === 'KM' ? 'អង្គរ' : lang === 'ZH' ? '吴哥窟' : 'Angkor', term: 'Siem Reap', cat: 'Temples' },
    { label: lang === 'KM' ? 'កោះរ៉ុង' : lang === 'ZH' ? '高龙岛' : 'Koh Rong', term: 'Koh Rong', cat: 'Beaches' },
    { label: lang === 'KM' ? 'ភ្នំពេញ' : lang === 'ZH' ? '金边' : 'Phnom Penh', term: 'Phnom Penh', cat: 'Culture' },
    { label: lang === 'KM' ? 'កំពត' : lang === 'ZH' ? '贡布' : 'Kampot', term: 'Kampot', cat: 'Food' },
  ];

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-[5.75rem] pb-14 sm:pb-16">
      {/* Clearer, warm-glowing background photo with soft blur */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-slate-950">
        <SafeImage
          src={heroBg}
          alt="Angkor Wat Sunrise"
          eager
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 blur-[2px] brightness-110 contrast-[1.05] transition-all duration-700"
        />
        {/* Soft, subtle gradients to ensure text contrast while keeping Angkor Wat clear */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/25 to-slate-950/50" />
      </div>

      <div className="relative z-10 site-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-amber-400/40 mb-4 shadow-lg backdrop-blur-md bg-slate-900/50">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-amber-300">
                {getTranslation('hero.badge', lang)}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white mb-4 max-w-xl mx-auto lg:mx-0 leading-[1.15] drop-shadow-md">
              <span>{getTranslation('hero.titlePrefix', lang)} </span>
              <span className="gold-gradient-text">{getTranslation('hero.titleHighlight', lang)}</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-100 max-w-lg mx-auto lg:mx-0 mb-2 leading-relaxed font-medium drop-shadow-sm">
              {getTranslation('hero.description', lang)}
            </p>
          </div>

          <div className="lg:col-span-6">
            <form
              onSubmit={handleSearchSubmit}
              className="w-full glass-panel p-5 sm:p-6 rounded-3xl border border-amber-400/30 shadow-2xl space-y-4 relative backdrop-blur-xl bg-slate-900/60"
              translate="no"
            >
              <div className="text-left">
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">
                  {getTranslation('hero.searchTitle', lang)}
                </span>
              </div>

              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-400 pointer-events-none" />
                <input
                  type="search"
                  placeholder={getTranslation('hero.searchPlaceholder', lang)}
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 180)}
                  className="w-full pl-12 pr-4 py-3 bg-slate-950/80 border border-slate-700/80 rounded-2xl text-white placeholder-slate-400 text-sm font-medium focus:border-amber-400 focus:outline-none shadow-inner"
                  aria-label="Search destinations"
                />
                {showSuggestions && suggestions.length > 0 && (
                  <div className="absolute left-0 right-0 top-full mt-2 z-20 rounded-2xl overflow-hidden bg-slate-950/95 border border-amber-500/30 text-left shadow-2xl backdrop-blur-xl">
                    {suggestions.map((d) => (
                      <button
                        key={d.id}
                        type="button"
                        onMouseDown={() => {
                          const destTitle = lang === 'KM' ? d.khmerName : lang === 'ZH' ? d.zhName : d.name;
                          setSearchTerm(destTitle);
                          setSelectedCat(d.category);
                          runSearch(d.name, d.category);
                        }}
                        className="w-full px-4 py-2.5 text-sm text-slate-200 hover:bg-amber-500/15 flex items-center justify-between gap-3 cursor-pointer"
                      >
                        <span className="truncate">
                          {lang === 'KM' ? d.khmerName : lang === 'ZH' ? d.zhName : d.name}
                        </span>
                        <span className="text-[10px] uppercase font-bold text-amber-400 shrink-0">{d.category}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <select
                  value={selectedCat}
                  onChange={(e) => setSelectedCat(e.target.value)}
                  className="flex-1 py-3 px-3.5 bg-slate-950/80 border border-slate-700/80 rounded-2xl text-slate-100 text-sm font-semibold cursor-pointer focus:outline-none focus:border-amber-400"
                  aria-label="Category"
                >
                  <option value="All">{getTranslation('categories.All', lang)}</option>
                  <option value="Temples">{getTranslation('categories.Temples', lang)}</option>
                  <option value="Beaches">{getTranslation('categories.Beaches', lang)}</option>
                  <option value="Culture">{getTranslation('categories.Culture', lang)}</option>
                  <option value="Food">{getTranslation('categories.Food', lang)}</option>
                  <option value="Nature">{getTranslation('categories.Nature', lang)}</option>
                </select>
                <button
                  type="submit"
                  className="sm:w-36 px-5 py-3 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-extrabold rounded-2xl shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer text-xs uppercase tracking-wider"
                >
                  <span>{getTranslation('hero.btnExplore', lang)}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {quickChips.map((chip) => (
                  <button
                    key={chip.label}
                    type="button"
                    onClick={() => {
                      setSearchTerm(chip.term);
                      setSelectedCat(chip.cat);
                      runSearch(chip.term, chip.cat);
                    }}
                    className="px-3 py-1 rounded-xl text-[11px] font-bold text-amber-200 border border-amber-400/30 bg-slate-950/50 hover:bg-amber-500/20 transition-colors cursor-pointer"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </form>
          </div>
        </div>

        <a
          href="#provinces"
          className="mt-8 mx-auto w-fit text-amber-200/80 hover:text-amber-300 flex flex-col items-center gap-1 text-xs font-semibold transition-colors"
        >
          <span>{getTranslation('hero.scrollExplore', lang)}</span>
          <ChevronDown className="w-5 h-5 animate-bounce text-amber-400" />
        </a>
      </div>
    </section>
  );
}
