import React, { useState } from 'react';
import { CUISINE, CULTURE_ARTS } from '../data/tourismData';
import { Utensils, Music, Flame, Sparkles, Heart } from 'lucide-react';

export default function CultureSection({ lang }) {
  const [activeTab, setActiveTab] = useState('cuisine');

  return (
    <section id="culture" className="py-24 relative bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Utensils className="w-3.5 h-3.5" />
            <span>{lang === 'EN' ? 'HERITAGE & FLAVORS' : 'វប្បធម៌ និងអាហារ'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {lang === 'EN' ? (
              <>
                Rich Khmer <span className="gold-gradient-text">Culture & Flavors</span>
              </>
            ) : (
              <span className="khmer-font text-amber-300">វប្បធម៌ និងរសជាតិអាហារខ្មែរ</span>
            )}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {lang === 'EN'
              ? 'Taste mouth-watering fragrant curries and experience UNESCO classical performing arts and vibrant local festivals.'
              : 'ភ្លក់រសជាតិអាហារដ៏ឆ្ងាញ់ពិសា និងទស្សនាសិល្បៈវប្បធម៌ខ្មែរ។'}
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('cuisine')}
            className={`px-6 py-3 rounded-2xl text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'cuisine'
                ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-105'
                : 'glass-card text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            <Utensils className="w-4 h-4" />
            <span>{lang === 'EN' ? 'Khmer Cuisine' : 'ម្ហូបអាហារខ្មែរ'}</span>
          </button>

          <button
            onClick={() => setActiveTab('culture')}
            className={`px-6 py-3 rounded-2xl text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'culture'
                ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-105'
                : 'glass-card text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            <Music className="w-4 h-4" />
            <span>{lang === 'EN' ? 'Arts & Festivals' : 'សិល្បៈ និងបុណ្យប្រពៃណី'}</span>
          </button>
        </div>

        {/* Cuisine Grid */}
        {activeTab === 'cuisine' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CUISINE.map((food) => (
              <div
                key={food.id}
                className="glass-card rounded-2xl overflow-hidden glass-card-hover border border-slate-800 flex flex-col justify-between"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <span className="absolute top-3 right-3 bg-slate-900/80 px-2.5 py-1 rounded-full text-[11px] font-semibold text-amber-300 border border-slate-700">
                    {food.category}
                  </span>
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-xs text-amber-400/90 font-medium mb-1">
                      <Flame className="w-3.5 h-3.5 text-amber-500" />
                      <span>{food.spiciness}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{food.name}</h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {food.description}
                    </p>
                  </div>

                  {/* Key Ingredients */}
                  <div className="pt-3 border-t border-slate-800">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                      {lang === 'EN' ? 'Key Ingredients:' : 'គ្រឿងផ្សំសំខាន់ៗ៖'}
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {food.ingredients.map((ing, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700/60"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Arts & Festivals Grid */}
        {activeTab === 'culture' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CULTURE_ARTS.map((item) => (
              <div
                key={item.id}
                className="glass-card rounded-2xl overflow-hidden glass-card-hover border border-slate-800 flex flex-col justify-between"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 glass-panel px-3 py-1 rounded-full text-xs font-bold text-amber-300 border border-amber-500/30">
                    {item.type}
                  </span>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {item.summary}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 italic">
                    💡 {item.details}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
