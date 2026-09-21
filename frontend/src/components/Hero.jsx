import React, { useMemo, useState } from 'react';
import { Search, ArrowRight, Sparkles, ChevronDown, MapPin } from 'lucide-react';
import { DESTINATIONS } from '../data/tourismData';
import SafeImage from './SafeImage';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80';

export default function Hero({ onSearch, onSelectCategory, onOpenBooking, lang }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState('All');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return DESTINATIONS.slice(0, 4);
    return DESTINATIONS.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.khmerName.includes(searchTerm) ||
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
    { label: lang === 'EN' ? 'Angkor' : 'អង្គរ', term: 'Siem Reap', cat: 'Temples' },
    { label: lang === 'EN' ? 'Koh Rong' : 'កោះរ៉ុង', term: 'Koh Rong', cat: 'Beaches' },
    { label: lang === 'EN' ? 'Phnom Penh' : 'ភ្នំពេញ', term: 'Phnom Penh', cat: 'Culture' },
    { label: lang === 'EN' ? 'Kampot' : 'កំពត', term: 'Kampot', cat: 'Food' },
  ];

  const stats = [
    { value: '1,000+', label: lang === 'EN' ? 'Ancient temples' : 'ប្រាសាទបុរាណ', cls: 'gold-gradient-text' },
    { value: '7', label: lang === 'EN' ? 'UNESCO sites' : 'បេតិកភណ្ឌពិភពលោក', cls: 'gold-gradient-text' },
    { value: '440 km', label: lang === 'EN' ? 'Coastline' : 'ឆ្នេរសមុទ្រ', cls: 'cyan-gradient-text' },
    { value: '25', label: lang === 'EN' ? 'Provinces' : 'រាជធានី-ខេត្ត', cls: 'emerald-gradient-text' },
  ];

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-[5.75rem] pb-16 sm:pb-20">
      <div className="absolute inset-0 z-0 bg-slate-950">
        <SafeImage
          src={HERO_IMAGE}
          alt="Angkor Wat at sunrise"
          eager
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/25 to-slate-950/55" />
      </div>

      <div className="relative z-10 site-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-amber-400/50 mb-5 shadow-xl shadow-amber-500/10">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-amber-300">
                {lang === 'EN' ? 'Kingdom of Wonder travel guide' : 'មគ្គុទ្ទេសក៍ទេសចរណ៍កម្ពុជា'}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white mb-4 max-w-xl mx-auto lg:mx-0 leading-[1.15] drop-shadow-lg">
              {lang === 'EN' ? (
                <>
                  Discover the <span className="gold-gradient-text">Kingdom of Wonder</span>
                </>
              ) : (
                <span className="khmer-font text-amber-300 leading-snug">ស្វែងយល់ពីព្រះរាជាណាចក្រកម្ពុជា</span>
              )}
            </h1>

            <p className="text-base sm:text-lg text-slate-200 max-w-lg mx-auto lg:mx-0 mb-7 leading-relaxed">
              {lang === 'EN'
                ? 'Ancient temples, turquoise islands, Khmer cuisine, and warm hospitality — search a place, save a shortlist, then request a custom tour.'
                : 'ទស្សនាប្រាសាទបុរាណ កោះសមុទ្រ ម្ហូបឆ្ងាញ់ និងការស្វាគមន៍កក់ក្តៅ — ស្វែងរក រក្សាទុក និងស្នើសុំដំណើរផ្ទាល់ខ្លួន។'}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 text-sm font-extrabold shadow-lg shadow-amber-500/30 flex items-center gap-2 hover:scale-[1.02] transition-transform"
              >
                <Sparkles className="w-4 h-4" />
                {lang === 'EN' ? 'Plan my trip' : 'រៀបចំដំណើរ'}
              </button>
              <a
                href="#provinces"
                className="px-5 py-3 rounded-xl glass-panel border border-amber-400/30 text-amber-100 text-sm font-bold flex items-center gap-2 hover:border-amber-400"
              >
                <MapPin className="w-4 h-4" />
                {lang === 'EN' ? 'Browse 25 provinces' : 'មើលខេត្តទាំង ២៥'}
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-panel px-3 py-3.5 rounded-2xl border border-amber-500/25 text-center bg-slate-950/70">
                  <div className={`text-xl sm:text-2xl font-extrabold ${stat.cls}`}>{stat.value}</div>
                  <div className="text-[10px] font-bold text-slate-300 mt-1 uppercase tracking-wider leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <form
              onSubmit={handleSearchSubmit}
              className="w-full glass-panel p-4 sm:p-5 rounded-3xl border border-amber-400/35 shadow-2xl space-y-3 relative"
              translate="no"
            >
              <div className="text-left mb-1">
                <p className="text-xs font-extrabold uppercase tracking-wider text-amber-300">
                  {lang === 'EN' ? 'Where to next?' : 'តើអ្នកចង់ទៅណា?'}
                </p>
                <p className="text-xs text-slate-300 mt-1">
                  {lang === 'EN' ? 'Search a city, temple, island, or food.' : 'ស្វែងរកខេត្ត ប្រាសាទ កោះ ឬម្ហូប។'}
                </p>
              </div>

              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-400 pointer-events-none" />
                <input
                  type="search"
                  placeholder={lang === 'EN' ? 'Siem Reap, Koh Rong, temples...' : 'សៀមរាប, កោះរ៉ុង, ម្ហូប...'}
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 180)}
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-950/90 border border-slate-700 rounded-2xl text-white placeholder-slate-400 text-sm font-medium focus:border-amber-400"
                  aria-label="Search destinations"
                />
                {showSuggestions && suggestions.length > 0 && (
                  <div className="absolute left-0 right-0 top-full mt-2 z-20 rounded-2xl overflow-hidden bg-slate-950 border border-amber-500/30 text-left shadow-xl">
                    {suggestions.map((d) => (
                      <button
                        key={d.id}
                        type="button"
                        onMouseDown={() => {
                          setSearchTerm(d.name);
                          setSelectedCat(d.category);
                          runSearch(d.name, d.category);
                        }}
                        className="w-full px-4 py-2.5 text-sm text-slate-200 hover:bg-amber-500/15 flex items-center justify-between gap-3"
                      >
                        <span className="truncate">{d.name}</span>
                        <span className="text-[10px] uppercase font-bold text-amber-400 shrink-0">{d.category}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <select
                  value={selectedCat}
                  onChange={(e) => setSelectedCat(e.target.value)}
                  className="flex-1 py-3.5 px-3 bg-slate-950/90 border border-slate-700 rounded-2xl text-slate-100 text-sm font-semibold"
                  aria-label="Category"
                >
                  <option value="All">{lang === 'EN' ? 'All categories' : 'គ្រប់ប្រភេទ'}</option>
                  <option value="Temples">{lang === 'EN' ? 'Ancient temples' : 'ប្រាសាទបុរាណ'}</option>
                  <option value="Beaches">{lang === 'EN' ? 'Tropical beaches' : 'តំបន់ឆ្នេរ'}</option>
                  <option value="Culture">{lang === 'EN' ? 'Culture & cities' : 'វប្បធម៌'}</option>
                  <option value="Food">{lang === 'EN' ? 'Food & cuisine' : 'ម្ហូបអាហារ'}</option>
                  <option value="Nature">{lang === 'EN' ? 'Nature & wildlife' : 'ធម្មជាតិ'}</option>
                </select>
                <button
                  type="submit"
                  className="sm:w-40 px-6 py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-extrabold rounded-2xl shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
                >
                  <span>{lang === 'EN' ? 'Explore' : 'ស្វែងរក'}</span>
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
                    className="px-3 py-1.5 rounded-full text-[11px] font-bold text-amber-100 border border-amber-400/30 bg-slate-950/50 hover:bg-amber-500/20"
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
          className="mt-10 mx-auto w-fit text-slate-300 hover:text-amber-300 flex flex-col items-center gap-1 text-xs font-semibold"
        >
          {lang === 'EN' ? 'Scroll to explore' : 'រំកិលមើលបន្ត'}
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
