import React, { useState } from 'react';
import { TEMPLES } from '../data/tourismData';
import { Sparkles, Eye, Compass, Info, CheckCircle2 } from 'lucide-react';

export default function TempleSpotlight({ lang }) {
  const [activeTempleId, setActiveTempleId] = useState('angkor-wat');
  const [activeHotspotIndex, setActiveHotspotIndex] = useState(0);

  const selectedTemple = TEMPLES.find((t) => t.id === activeTempleId) || TEMPLES[0];

  return (
    <section id="temples" className="py-24 relative bg-slate-950">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>{lang === 'EN' ? 'UNESCO WORLD HERITAGE SPOTLIGHT' : 'អច្ឆរិយៈប្រាសាទបុរាណ'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {lang === 'EN' ? (
              <>
                Wonders of <span className="gold-gradient-text">Khmer Architecture</span>
              </>
            ) : (
              <span className="khmer-font text-amber-300">ស្ថាបត្យកម្មប្រាសាទបុរាណខ្មែរ</span>
            )}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {lang === 'EN'
              ? 'Explore the rich symbolism, intricate sandstone carvings, and mystical stone faces of ancient Cambodia.'
              : 'ស្វែងយល់ពីអត្ថន័យ និងភាពស្មុគស្មាញនៃចម្លាក់ប្រាសាទបុរាណខ្មែរ។'}
          </p>
        </div>

        {/* Temple Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {TEMPLES.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setActiveTempleId(t.id);
                setActiveHotspotIndex(0);
              }}
              className={`px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeTempleId === t.id
                  ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 shadow-xl shadow-amber-500/20 scale-105'
                  : 'glass-card text-slate-300 hover:text-amber-300 border border-slate-800 hover:border-amber-500/30'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.name}</span>
              <span className="text-[10px] opacity-80 khmer-font">({t.khmerName})</span>
            </button>
          ))}
        </div>

        {/* Interactive Spotlight Card */}
        <div className="glass-panel rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Column: Visual Hotspot Canvas */}
          <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[480px]">
            <img
              src={selectedTemple.image}
              alt={selectedTemple.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />

            {/* Title Overlay */}
            <div className="absolute top-6 left-6 right-6">
              <span className="text-xs font-bold tracking-widest text-amber-300 uppercase glass-panel px-3 py-1 rounded-full border border-amber-500/40">
                {selectedTemple.century}
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
                {selectedTemple.name}
              </h3>
            </div>

            {/* Interactive Hotspot Buttons over Image */}
            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                {lang === 'EN' ? 'Interactive Architectural Hotspots:' : 'ចំណុចស្ថាបត្យកម្មពិសេស៖'}
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedTemple.hotspots.map((hs, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveHotspotIndex(idx)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      activeHotspotIndex === idx
                        ? 'bg-amber-400 text-slate-950 shadow-md scale-105'
                        : 'glass-panel text-slate-200 hover:text-amber-300 border border-slate-700'
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{hs.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Temple Facts & Active Hotspot Info */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-slate-900/90">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                {selectedTemple.style}
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {selectedTemple.highlight}
              </h4>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {selectedTemple.description}
              </p>

              {/* Active Hotspot Detail Card */}
              {selectedTemple.hotspots[activeHotspotIndex] && (
                <div className="glass-card p-4 rounded-2xl border border-amber-500/30 bg-amber-500/5 animate-fade-in">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{selectedTemple.hotspots[activeHotspotIndex].title}</span>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {selectedTemple.hotspots[activeHotspotIndex].desc}
                  </p>
                </div>
              )}
            </div>

            {/* Quick Visit Tips */}
            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-1">
              <div className="flex items-center justify-between">
                <span>{lang === 'EN' ? 'Recommended Time:' : 'ពេលវេលាស័ក្តិសម៖'}</span>
                <span className="text-slate-200 font-semibold">{lang === 'EN' ? '5:30 AM Sunrise / 4:30 PM Sunset' : 'ម៉ោង ៥:៣០ ព្រឹក ឬ ៤:៣០ ល្ងាច'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>{lang === 'EN' ? 'Dress Code:' : 'សម្លៀកបំពាក់៖'}</span>
                <span className="text-slate-200 font-semibold">{lang === 'EN' ? 'Shoulders & Knees Covered' : 'គួរសមរម្យគ្របស្មា និងជង្គង់'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
