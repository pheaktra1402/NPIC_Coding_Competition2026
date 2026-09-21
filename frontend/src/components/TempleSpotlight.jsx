import React, { useState } from 'react';
import { TEMPLES } from '../data/tourismData';
import { Sparkles, Eye, Compass, CheckCircle2, MapPin } from 'lucide-react';
import { getTranslation } from '../data/translations';
import SafeImage from './SafeImage';

export default function TempleSpotlight({ lang, onOpenMap }) {
  const [activeTempleId, setActiveTempleId] = useState('angkor-wat');
  const [activeHotspotIndex, setActiveHotspotIndex] = useState(0);

  const selectedTemple = TEMPLES.find((t) => t.id === activeTempleId) || TEMPLES[0];

  const getTempleName = (t) => {
    if (lang === 'KM') return t.khmerName;
    if (lang === 'ZH') return t.zhName;
    if (lang === 'FR') return t.frName || t.name;
    return t.name;
  };

  const getTempleDesc = (t) => {
    if (lang === 'KM') return t.descriptionKm || t.description;
    if (lang === 'ZH') return t.descriptionZh || t.description;
    if (lang === 'FR') return t.descriptionFr || t.description;
    return t.description;
  };

  return (
    <section id="temples" className="site-section relative">
      <div className="site-container relative z-10">
        <div className="section-header">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>{getTranslation('temples.badge', lang)}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            <span>{getTranslation('temples.titlePrefix', lang)} </span>
            <span className="gold-gradient-text">{getTranslation('temples.titleHighlight', lang)}</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            {getTranslation('temples.desc', lang)}
          </p>
        </div>

        {/* Temple Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {TEMPLES.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setActiveTempleId(t.id);
                setActiveHotspotIndex(0);
              }}
              type="button"
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeTempleId === t.id
                  ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 shadow-xl shadow-amber-500/20'
                  : 'glass-card text-slate-700 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-300 border border-slate-200 dark:border-slate-800'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>{getTempleName(t)}</span>
            </button>
          ))}
        </div>

        {/* Interactive Spotlight Card */}
        <div className="glass-panel rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white dark:bg-slate-900">
          <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[480px]">
            <SafeImage
              src={selectedTemple.image}
              alt={getTempleName(selectedTemple)}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/40" />

            <div className="absolute top-6 left-6 right-6">
              <span className="text-xs font-bold tracking-widest text-amber-300 uppercase glass-panel px-3 py-1 rounded-full border border-amber-500/40">
                {selectedTemple.century}
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 drop-shadow-md">
                {getTempleName(selectedTemple)}
              </h3>
            </div>

            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                {getTranslation('temples.hotspotsTitle', lang)}
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedTemple.hotspots.map((hs, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveHotspotIndex(idx)}
                    type="button"
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      activeHotspotIndex === idx
                        ? 'bg-amber-400 text-slate-950 shadow-md scale-105'
                        : 'glass-panel text-slate-100 hover:text-amber-300 border border-slate-700'
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{hs.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white dark:bg-slate-900/95">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1">
                {selectedTemple.style}
              </div>
              <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-3">
                {selectedTemple.highlight}
              </h4>
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                {getTempleDesc(selectedTemple)}
              </p>

              {selectedTemple.hotspots[activeHotspotIndex] && (
                <div className="glass-card p-4 rounded-2xl border border-amber-500/40 bg-amber-500/10 animate-fade-in">
                  <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-extrabold text-sm mb-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{selectedTemple.hotspots[activeHotspotIndex].title}</span>
                  </div>
                  <p className="text-slate-800 dark:text-slate-200 text-xs sm:text-sm leading-relaxed font-medium">
                    {selectedTemple.hotspots[activeHotspotIndex].desc}
                  </p>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 space-y-2">
              <div className="flex items-center justify-between">
                <span>Recommended Visit Time:</span>
                <span className="text-slate-900 dark:text-slate-200 font-bold">5:30 AM Sunrise / 4:30 PM Sunset</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Dress Code:</span>
                <span className="text-slate-900 dark:text-slate-200 font-bold">Shoulders & Knees Covered</span>
              </div>
              <button
                type="button"
                onClick={() => onOpenMap?.(getTempleName(selectedTemple), selectedTemple.khmerName)}
                className="w-full mt-2 py-2.5 bg-amber-500/15 hover:bg-amber-500 hover:text-slate-950 text-amber-600 dark:text-amber-400 text-xs font-bold rounded-xl border border-amber-500/30 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <MapPin className="w-4 h-4" />
                <span>{lang === "KM" ? "មើល Google Maps" : "View on Google Maps"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
