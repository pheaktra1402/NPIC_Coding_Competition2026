import React, { useState } from 'react';
import { TRAVEL_GUIDE } from '../data/tourismData';
import { FileText, DollarSign, Sun, Bus, ShieldCheck, RefreshCw, CheckCircle } from 'lucide-react';

export default function TravelGuide({ lang }) {
  const [usdAmount, setUsdAmount] = useState(10);
  const [openFaq, setOpenFaq] = useState(0);
  const rielRate = 4100;

  const faqs =
    lang === 'EN'
      ? [
          { q: 'Do I need a visa?', a: 'Most visitors use the official e-Visa ($30, 30 days) at evisa.gov.kh, or visa on arrival at PNH and SAI airports.' },
          { q: 'Is US dollars accepted?', a: 'Yes. USD and riel are used together. Change under $1 is usually given in riel. ABA / Bakong QR is common in towns.' },
          { q: 'When is the best time to visit?', a: 'November–February is cool and dry — ideal for temples. March–May is hotter and great for islands. June–October is lush with fewer crowds.' },
          { q: 'What should I wear at temples?', a: 'Cover shoulders and knees. A light scarf helps at Angkor. Remove hats in wats. Sunrise visits are cooler and less crowded.' },
        ]
      : [
          { q: 'តើខ្ញុំត្រូវការទិដ្ឋាការទេ?', a: 'ភ្ញៀវភាគច្រើនអាចដាក់ពាក្យ e-Visa $30 តាម evisa.gov.kh ឬទិញនៅពេលមកដល់ព្រលានយន្តហោះ។' },
          { q: 'តើដុល្លារអាមេរិកប្រើបានទេ?', a: 'បាន។ ដុល្លារ និងរៀលប្រើជាមួយគ្នា។ ការផ្លាស់ប្តូរក្រោម $1 ជាធម្មតាជារៀល។' },
          { q: 'ពេលណាល្អបំផុតសម្រាប់ធ្វើដំណើរ?', a: 'វិច្ឆិកា–កុម្ភៈ ត្រជាក់ និងស្ងួត។ មីនា–ឧសភា ក្តៅ ល្អសម្រាប់កោះ។ មិថុនា–តុលា ពណ៌បៃតង មនុស្សតិច។' },
          { q: 'សម្លៀកបំពាក់នៅប្រាសាទ?', a: 'គួរគ្របស្មា និងជង្គង់។ ព្រឹកព្រលឹមត្រជាក់ និងមនុស្សតិចជាង។' },
        ];

  return (
    <section id="travel-guide" className="site-section section-surface-alt relative">
      <div className="site-container">
        <div className="section-header">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{lang === 'EN' ? 'ESSENTIAL TRAVELER KNOWLEDGE' : 'ព័ត៌មានធ្វើដំណើរ'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {lang === 'EN' ? (
              <>
                Cambodia <span className="gold-gradient-text">Travel Essentials</span>
              </>
            ) : (
              <span className="khmer-font text-amber-500 dark:text-amber-300">ព័ត៌មានសំខាន់ៗសម្រាប់អ្នកទេសចរ</span>
            )}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {lang === 'EN'
              ? 'Everything you need to know about entry visas, dual-currency tips, weather seasons, and getting around.'
              : 'រាល់ព័ទ៌មានអំពីទិដ្ឋាការ រូបិយប័ណ្ណ រដូវកាល និងការធ្វើដំណើរ។'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: Visa Requirements */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-6 bg-white dark:bg-slate-900/90">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 dark:text-amber-400 border border-amber-500/30 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{TRAVEL_GUIDE.visa.title}</h3>
              <div className="inline-block px-3 py-1 bg-amber-500/20 text-amber-600 dark:text-amber-300 text-xs font-bold rounded-lg mb-4">
                {TRAVEL_GUIDE.visa.cost}
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4">
                {TRAVEL_GUIDE.visa.details}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                {lang === 'EN' ? 'Required Documents:' : 'ឯកសារតម្រូវ៖'}
              </span>
              {TRAVEL_GUIDE.visa.requirements.map((req, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 flex-shrink-0" />
                  <span>{req}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Dual Currency & Live Converter */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-amber-500/40 bg-white dark:bg-slate-900/90 flex flex-col justify-between space-y-6">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-500 dark:text-amber-400 border border-amber-500/40 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{TRAVEL_GUIDE.currency.title}</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4">
                {TRAVEL_GUIDE.currency.details}
              </p>
            </div>

            {/* Interactive Currency Converter Box */}
            <div className="glass-panel p-4 rounded-2xl border border-amber-500/30 space-y-3 bg-slate-50 dark:bg-slate-950">
              <div className="flex items-center justify-between text-xs font-bold text-amber-600 dark:text-amber-300">
                <span>USD to KHR Calculator</span>
                <span>Rate: $1 = 4,100 KHR</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-2.5 text-xs text-slate-500 font-bold">$</span>
                  <input
                    type="number"
                    min="1"
                    value={usdAmount}
                    onChange={(e) => setUsdAmount(Math.max(0, Number(e.target.value)))}
                    className="w-full pl-7 pr-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white text-sm font-extrabold focus:outline-none focus:border-amber-400"
                  />
                </div>
                <RefreshCw className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                <div className="flex-1 py-2 px-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-amber-600 dark:text-amber-300 text-sm font-extrabold text-right">
                  {(usdAmount * rielRate).toLocaleString()} ៛
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Weather & Seasons */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-6 bg-white dark:bg-slate-900/90">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 dark:text-amber-400 border border-amber-500/30 flex items-center justify-center mb-4">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Best Weather Seasons</h3>
              <div className="space-y-4">
                {TRAVEL_GUIDE.weather.map((w, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center justify-between text-xs font-bold text-amber-600 dark:text-amber-400 mb-1">
                      <span>{w.months}</span>
                      <span className="text-slate-800 dark:text-slate-300">{w.status}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{w.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Transportation Options */}
        <div className="mt-8 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Bus className="w-5 h-5 text-amber-500 dark:text-amber-400" />
            <span>Getting Around Cambodia</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRAVEL_GUIDE.gettingAround.map((g, idx) => (
              <div key={idx} className="glass-card p-4 rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950">
                <h4 className="text-base font-bold text-amber-600 dark:text-amber-300 mb-1">{g.mode}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 max-w-3xl mx-auto space-y-3">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 text-center">
            {lang === 'EN' ? 'Quick answers' : 'សំណួរញឹកញាប់'}
          </h3>
          {faqs.map((faq, idx) => (
            <button
              key={faq.q}
              type="button"
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              className="w-full text-left glass-card p-4 rounded-2xl border border-slate-200 dark:border-slate-800"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-bold text-sm text-slate-900 dark:text-white">{faq.q}</span>
                <span className="text-amber-500 font-extrabold">{openFaq === idx ? '−' : '+'}</span>
              </div>
              {openFaq === idx && (
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{faq.a}</p>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
