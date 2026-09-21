import React, { useState } from 'react';
import { TRAVEL_GUIDE } from '../data/tourismData';
import { FileText, DollarSign, Sun, Bus, ShieldCheck, RefreshCw, CheckCircle, Info } from 'lucide-react';

export default function TravelGuide({ lang }) {
  const [usdAmount, setUsdAmount] = useState(10);
  const rielRate = 4100;

  return (
    <section id="travel-guide" className="py-24 relative bg-slate-950/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{lang === 'EN' ? 'ESSENTIAL TRAVELER KNOWLEDGE' : 'ព័ត៌មានធ្វើដំណើរ'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {lang === 'EN' ? (
              <>
                Cambodia <span className="gold-gradient-text">Travel Essentials</span>
              </>
            ) : (
              <span className="khmer-font text-amber-300">ព័ត៌មានសំខាន់ៗសម្រាប់អ្នកទេសចរ</span>
            )}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {lang === 'EN'
              ? 'Everything you need to know about entry visas, dual-currency tips, weather seasons, and getting around.'
              : 'រាល់ព័ទ៌មានអំពីទិដ្ឋាការ រូបិយប័ណ្ណ រដូវកាល និងការធ្វើដំណើរ។'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Visa Requirements */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{TRAVEL_GUIDE.visa.title}</h3>
              <div className="inline-block px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-lg mb-4">
                {TRAVEL_GUIDE.visa.cost}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {TRAVEL_GUIDE.visa.details}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                {lang === 'EN' ? 'Required Documents:' : 'ឯកសារតម្រូវ៖'}
              </span>
              {TRAVEL_GUIDE.visa.requirements.map((req, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>{req}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Dual Currency & Live Converter */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-amber-500/30 bg-amber-500/5 flex flex-col justify-between space-y-6">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{TRAVEL_GUIDE.currency.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {TRAVEL_GUIDE.currency.details}
              </p>
            </div>

            {/* Interactive Currency Converter Box */}
            <div className="glass-panel p-4 rounded-2xl border border-amber-500/30 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-amber-300">
                <span>USD to KHR Calculator</span>
                <span>Rate: $1 = 4,100 KHR</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-bold">$</span>
                  <input
                    type="number"
                    min="1"
                    value={usdAmount}
                    onChange={(e) => setUsdAmount(Math.max(0, Number(e.target.value)))}
                    className="w-full pl-7 pr-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm font-bold focus:outline-none focus:border-amber-400"
                  />
                </div>
                <RefreshCw className="w-4 h-4 text-amber-400" />
                <div className="flex-1 py-2 px-3 bg-slate-900 border border-slate-700 rounded-xl text-amber-300 text-sm font-extrabold text-right">
                  {(usdAmount * rielRate).toLocaleString()} ៛
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Weather & Seasons */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center mb-4">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Best Weather Seasons</h3>
              <div className="space-y-4">
                {TRAVEL_GUIDE.weather.map((w, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="flex items-center justify-between text-xs font-bold text-amber-400 mb-1">
                      <span>{w.months}</span>
                      <span className="text-slate-300">{w.status}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{w.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Transportation Options */}
        <div className="mt-12 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Bus className="w-5 h-5 text-amber-400" />
            <span>Getting Around Cambodia</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRAVEL_GUIDE.gettingAround.map((g, idx) => (
              <div key={idx} className="glass-card p-4 rounded-2xl border border-slate-800/80">
                <h4 className="text-base font-bold text-amber-300 mb-1">{g.mode}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
