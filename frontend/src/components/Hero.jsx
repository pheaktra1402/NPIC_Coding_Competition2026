import React, { useState } from 'react';
import { Search, ArrowRight, Sparkles } from 'lucide-react';

export default function Hero({ onSearch, onSelectCategory, onOpenBooking, lang }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState('All');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm, selectedCat);
    const element = document.getElementById('destinations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* High-Impact Authentic Angkor Wat Sunrise Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Angkor Wat Majestic Sunrise"
          className="w-full h-full object-cover object-center scale-105 transform animate-pulse-slow filter brightness-75"
        />
        {/* Layered Vignette and Gradient Overlay for Maximum Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Official Tourism Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-amber-400/50 mb-6 shadow-xl shadow-amber-500/10">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-bold tracking-widest uppercase text-amber-300">
            {lang === 'EN' ? 'OFFICIAL CAMBODIA TOURISM GUIDE' : 'មគ្គុទ្ទេសក៍ទេសចរណ៍ផ្លូវការ'}
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-5 max-w-4xl leading-tight drop-shadow-lg">
          {lang === 'EN' ? (
            <>
              Discover the <span className="gold-gradient-text drop-shadow-md">Kingdom of Wonder</span>
            </>
          ) : (
            <span className="khmer-font text-amber-300 leading-snug">
              ស្វែងយល់ពីព្រះរាជាណាចក្រកម្ពុជា
            </span>
          )}
        </h1>

        <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mb-10 leading-relaxed font-medium drop-shadow">
          {lang === 'EN'
            ? 'Immerse yourself in thousand-year-old ancient Khmer temples, turquoise island waters, vibrant street cuisine, and warm Cambodian hospitality.'
            : 'ទស្សនាប្រាសាទបុរាណរាប់ពាន់ឆ្នាំ កោះសមុទ្រខៀវស្រងាត់ ម្ហូបអាហារឈ្ងុយឆ្ញាញ់ និងការស្វាគមន៍យ៉ាងកក់ក្តៅ។'}
        </p>

        {/* Search & Filter Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="w-full max-w-3xl glass-panel p-3 rounded-2xl border border-amber-400/40 shadow-2xl mb-14 flex flex-col sm:flex-row items-center gap-2"
        >
          {/* Search input */}
          <div className="relative flex-1 w-full flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-amber-400" />
            <input
              type="text"
              placeholder={lang === 'EN' ? 'Search Siem Reap, Koh Rong, Temples, Food...' : 'ស្វែងរកទីតាំង សៀមរាប, កោះរ៉ុង, ម្ហូប...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-slate-900/90 border border-slate-700/90 rounded-xl text-white placeholder-slate-400 text-sm font-medium focus:outline-none focus:border-amber-400 transition-all"
            />
          </div>

          {/* Category Selector */}
          <div className="w-full sm:w-48">
            <select
              value={selectedCat}
              onChange={(e) => setSelectedCat(e.target.value)}
              className="w-full py-3.5 px-3 bg-slate-900/90 border border-slate-700/90 rounded-xl text-slate-100 text-sm font-semibold focus:outline-none focus:border-amber-400 transition-all"
            >
              <option value="All">{lang === 'EN' ? 'All Categories' : 'គ្រប់ប្រភេទ'}</option>
              <option value="Temples">{lang === 'EN' ? 'Ancient Temples' : 'ប្រាសាទបុរាណ'}</option>
              <option value="Beaches">{lang === 'EN' ? 'Tropical Beaches' : 'តំបន់ឆ្នេរ'}</option>
              <option value="Culture">{lang === 'EN' ? 'Culture & Cities' : 'វប្បធម៌'}</option>
              <option value="Food">{lang === 'EN' ? 'Food & Cuisine' : 'ម្ហូបអាហារ'}</option>
              <option value="Nature">{lang === 'EN' ? 'Nature & Wildlife' : 'ធម្មជាតិ'}</option>
            </select>
          </div>

          {/* Search CTA Button */}
          <button
            type="submit"
            className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-extrabold rounded-xl shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer hover:scale-105"
          >
            <span>{lang === 'EN' ? 'Explore' : 'ស្វែងរក'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Polished Glassmorphism Stat Cards with High Text Contrast */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl">
          <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-amber-500/30 text-center bg-slate-900/85 backdrop-blur-md shadow-lg">
            <div className="text-3xl sm:text-4xl font-extrabold gold-gradient-text">1,000+</div>
            <div className="text-xs font-bold text-slate-200 mt-1 uppercase tracking-wider">
              {lang === 'EN' ? 'Ancient Temples' : 'ប្រាសាទបុរាណ'}
            </div>
          </div>

          <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-amber-500/30 text-center bg-slate-900/85 backdrop-blur-md shadow-lg">
            <div className="text-3xl sm:text-4xl font-extrabold gold-gradient-text">7</div>
            <div className="text-xs font-bold text-slate-200 mt-1 uppercase tracking-wider">
              {lang === 'EN' ? 'UNESCO Sites' : 'បេតិកភណ្ឌពិភពលោក'}
            </div>
          </div>

          <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-amber-500/30 text-center bg-slate-900/85 backdrop-blur-md shadow-lg">
            <div className="text-3xl sm:text-4xl font-extrabold cyan-gradient-text">440 km</div>
            <div className="text-xs font-bold text-slate-200 mt-1 uppercase tracking-wider">
              {lang === 'EN' ? 'Coastline & Islands' : 'ឆ្នេរសមុទ្រ និងកោះ'}
            </div>
          </div>

          <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-amber-500/30 text-center bg-slate-900/85 backdrop-blur-md shadow-lg">
            <div className="text-3xl sm:text-4xl font-extrabold emerald-gradient-text">25</div>
            <div className="text-xs font-bold text-slate-200 mt-1 uppercase tracking-wider">
              {lang === 'EN' ? 'Provinces to Explore' : 'រាជធានី-ខេត្ត'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
