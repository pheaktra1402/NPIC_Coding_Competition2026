import React, { useState } from 'react';
import { Search, MapPin, Compass, Play, ArrowRight, ShieldCheck, Award, Sun, Sparkles } from 'lucide-react';

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
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Dark & Royal Amber Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Angkor Wat Sunrise"
          className="w-full h-full object-cover object-center scale-105 transform animate-pulse-slow filter brightness-75"
        />
        {/* Layered Overlay for visual depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-transparent to-slate-950/80" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Crown / Heritage Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-amber-500/40 mb-6 shadow-lg shadow-amber-500/10 animate-fade-in">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-bold tracking-widest uppercase text-amber-300">
            {lang === 'EN' ? 'OFFICIAL CAMBODIA TOURISM GUIDE' : 'មគ្គុទ្ទេសក៍ទេសចរណ៍ផ្លូវការ'}
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 max-w-4xl leading-tight">
          {lang === 'EN' ? (
            <>
              Discover the <span className="gold-gradient-text">Kingdom of Wonder</span>
            </>
          ) : (
            <span className="khmer-font text-amber-300 leading-snug">
              ស្វែងយល់ពីព្រះរាជាណាចក្រកម្ពុជា
            </span>
          )}
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed font-normal">
          {lang === 'EN'
            ? 'Immerse yourself in thousand-year-old ancient Khmer temples, turquoise island waters, vibrant street cuisine, and warm Cambodian hospitality.'
            : 'ទស្សនាប្រាសាទបុរាណរាប់ពាន់ឆ្នាំ កោះសមុទ្រខៀវស្រងាត់ ម្ហូបអាហារឈ្ងុយឆ្ងាញ់ និងការស្វាគមន៍យ៉ាងកក់ក្តៅ។'}
        </p>

        {/* Search & Filter Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="w-full max-w-3xl glass-panel p-2.5 sm:p-3 rounded-2xl border border-amber-500/30 shadow-2xl shadow-amber-500/10 mb-12 flex flex-col sm:flex-row items-center gap-2"
        >
          {/* Input text */}
          <div className="relative flex-1 w-full flex items-center">
            <Search className="absolute left-3.5 w-5 h-5 text-amber-400/80" />
            <input
              type="text"
              placeholder={lang === 'EN' ? 'Search Siem Reap, Koh Rong, Temples, Food...' : 'ស្វែងរកទីតាំង សៀមរាប, កោះរ៉ុង, ម្ហូប...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-900/80 border border-slate-700/80 rounded-xl text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:border-amber-400 transition-all"
            />
          </div>

          {/* Category Dropdown */}
          <div className="w-full sm:w-48">
            <select
              value={selectedCat}
              onChange={(e) => setSelectedCat(e.target.value)}
              className="w-full py-3 px-3 bg-slate-900/80 border border-slate-700/80 rounded-xl text-slate-200 text-sm focus:outline-none focus:border-amber-400 transition-all"
            >
              <option value="All">{lang === 'EN' ? 'All Categories' : 'គ្រប់ប្រភេទ'}</option>
              <option value="Temples">{lang === 'EN' ? 'Ancient Temples' : 'ប្រាសាទបុរាណ'}</option>
              <option value="Beaches">{lang === 'EN' ? 'Tropical Beaches' : 'តំបន់ឆ្នេរ'}</option>
              <option value="Culture">{lang === 'EN' ? 'Culture & Cities' : 'វប្បធម៌'}</option>
              <option value="Food">{lang === 'EN' ? 'Food & Cuisine' : 'ម្ហូបអាហារ'}</option>
              <option value="Nature">{lang === 'EN' ? 'Nature & Wildlife' : 'ធម្មជាតិ'}</option>
            </select>
          </div>

          {/* Submit Search Button */}
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold rounded-xl shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
          >
            <span>{lang === 'EN' ? 'Explore' : 'ស្វែងរក'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Highlight Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl">
          <div className="glass-card p-4 rounded-2xl border border-amber-500/20 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold gold-gradient-text">1,000+</div>
            <div className="text-xs text-slate-300 font-medium mt-1">
              {lang === 'EN' ? 'Ancient Temples' : 'ប្រាសាទបុរាណ'}
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-amber-500/20 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold gold-gradient-text">7</div>
            <div className="text-xs text-slate-300 font-medium mt-1">
              {lang === 'EN' ? 'UNESCO Sites' : 'បេតិកភណ្ឌពិភពលោក'}
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-amber-500/20 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold cyan-gradient-text">440 km</div>
            <div className="text-xs text-slate-300 font-medium mt-1">
              {lang === 'EN' ? 'Coastline & Islands' : 'ឆ្នេរសមុទ្រ និងកោះ'}
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-amber-500/20 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold emerald-gradient-text">25</div>
            <div className="text-xs text-slate-300 font-medium mt-1">
              {lang === 'EN' ? 'Provinces to Explore' : 'រាជធានី-ខេត្ត'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
