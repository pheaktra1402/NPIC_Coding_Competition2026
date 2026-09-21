import React, { useMemo, useState } from 'react';
import { Search, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import { DESTINATIONS } from '../data/tourismData';

const HERO_IMAGE =
  'https://upload.wikimedia.org/wikipedia/commons/d/d4/20171126_Angkor_Wat_4712_DxO.jpg';

export default function Hero({ onSearch, onOpenBooking, lang }) {
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
    setShowSuggestions(false);
    document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    runSearch();
  };

  const quickChips = [
    { label: 'Angkor', term: 'Siem Reap', cat: 'Temples' },
    { label: 'Koh Rong', term: 'Koh Rong', cat: 'Beaches' },
    { label: 'Phnom Penh', term: 'Phnom Penh', cat: 'Culture' },
    { label: 'Kampot', term: 'Kampot', cat: 'Food' },
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Angkor Wat at sunrise"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-slate-950/70" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-amber-400/50 mb-6 shadow-xl shadow-amber-500/10">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-bold tracking-widest uppercase text-amber-300">
            {lang === 'EN' ? 'Official Cambodia tourism guide' : 'មគ្គុទ្ទេសក៍ទេសចរណ៍ផ្លូវការ'}
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-5 max-w-4xl leading-tight drop-shadow-lg">
          {lang === 'EN' ? (
            <>
              Discover the <span className="gold-gradient-text">Kingdom of Wonder</span>
            </>
          ) : (
            <span className="khmer-font text-amber-300 leading-snug">ស្វែងយល់ពីព្រះរាជាណាចក្រកម្ពុជា</span>
          )}
        </h1>

        <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mb-8 leading-relaxed font-medium drop-shadow">
          {lang === 'EN'
            ? 'Ancient Khmer temples, turquoise islands, street food, and warm hospitality — plan a trip in minutes.'
            : 'ទស្សនាប្រាសាទបុរាណ កោះសមុទ្រ ម្ហូបឆ្ងាញ់ និងការស្វាគមន៍កក់ក្តៅ។'}
        </p>

        <form
          onSubmit={handleSearchSubmit}
          className="w-full max-w-3xl glass-panel p-3 rounded-2xl border border-amber-400/40 shadow-2xl mb-4 flex flex-col sm:flex-row items-stretch gap-2 relative"
        >
          <div className="relative flex-1 w-full flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-amber-400 pointer-events-none" />
            <input
              type="search"
              placeholder={lang === 'EN' ? 'Search Siem Reap, Koh Rong, temples, food...' : 'ស្វែងរក សៀមរាប, កោះរ៉ុង, ម្ហូប...'}
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 180)}
              className="w-full pl-12 pr-4 py-3.5 bg-slate-900/90 border border-slate-700/90 rounded-xl text-white placeholder-slate-400 text-sm font-medium focus:outline-none focus:border-amber-400"
              aria-label="Search destinations"
            />
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-2 z-20 rounded-xl overflow-hidden bg-slate-900 border border-amber-500/30 text-left shadow-xl">
                {suggestions.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onMouseDown={() => {
                      setSearchTerm(d.name);
                      runSearch(d.name, d.category);
                    }}
                    className="w-full px-4 py-2.5 text-sm text-slate-200 hover:bg-amber-500/15 flex items-center justify-between"
                  >
                    <span>{d.name}</span>
                    <span className="text-[10px] uppercase font-bold text-amber-400">{d.category}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="w-full sm:w-48">
            <select
              value={selectedCat}
              onChange={(e) => setSelectedCat(e.target.value)}
              className="w-full py-3.5 px-3 bg-slate-900/90 border border-slate-700/90 rounded-xl text-slate-100 text-sm font-semibold focus:outline-none focus:border-amber-400"
              aria-label="Category"
            >
              <option value="All">{lang === 'EN' ? 'All categories' : 'គ្រប់ប្រភេទ'}</option>
              <option value="Temples">{lang === 'EN' ? 'Ancient temples' : 'ប្រាសាទបុរាណ'}</option>
              <option value="Beaches">{lang === 'EN' ? 'Tropical beaches' : 'តំបន់ឆ្នេរ'}</option>
              <option value="Culture">{lang === 'EN' ? 'Culture & cities' : 'វប្បធម៌'}</option>
              <option value="Food">{lang === 'EN' ? 'Food & cuisine' : 'ម្ហូបអាហារ'}</option>
              <option value="Nature">{lang === 'EN' ? 'Nature & wildlife' : 'ធម្មជាតិ'}</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-extrabold rounded-xl shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2 hover:scale-105 transition-all"
          >
            <span>{lang === 'EN' ? 'Explore' : 'ស្វែងរក'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {quickChips.map((chip) => (
            <button
              key={chip.label}
              type="button"
              onClick={() => {
                setSearchTerm(chip.term);
                setSelectedCat(chip.cat);
                runSearch(chip.term, chip.cat);
              }}
              className="px-3 py-1.5 rounded-full text-xs font-bold text-amber-200 border border-amber-400/30 bg-slate-900/50 hover:bg-amber-500/20"
            >
              {chip.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => onOpenBooking()}
            className="px-3 py-1.5 rounded-full text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300"
          >
            {lang === 'EN' ? 'Talk to a planner' : 'និយាយជាមួយអ្នករៀបចំ'}
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl">
          {[
            { value: '1,000+', label: lang === 'EN' ? 'Ancient temples' : 'ប្រាសាទបុរាណ', cls: 'gold-gradient-text' },
            { value: '7', label: lang === 'EN' ? 'UNESCO sites' : 'បេតិកភណ្ឌពិភពលោក', cls: 'gold-gradient-text' },
            { value: '440 km', label: lang === 'EN' ? 'Coastline & islands' : 'ឆ្នេរសមុទ្រ និងកោះ', cls: 'cyan-gradient-text' },
            { value: '25', label: lang === 'EN' ? 'Provinces to explore' : 'រាជធានី-ខេត្ត', cls: 'emerald-gradient-text' },
          ].map((stat) => (
            <div key={stat.label} className="glass-panel p-4 sm:p-5 rounded-2xl border border-amber-500/30 text-center bg-slate-900/85">
              <div className={`text-3xl sm:text-4xl font-extrabold ${stat.cls}`}>{stat.value}</div>
              <div className="text-xs font-bold text-slate-200 mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        <a href="#provinces" className="mt-12 text-slate-300 hover:text-amber-300 flex flex-col items-center gap-1 text-xs font-semibold">
          {lang === 'EN' ? 'Browse all 25 provinces' : 'មើលខេត្តទាំង ២៥'}
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
