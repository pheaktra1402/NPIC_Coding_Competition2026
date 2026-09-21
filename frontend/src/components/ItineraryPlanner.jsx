import React, { useState } from 'react';
import { ITINERARIES } from '../data/tourismData';
import { Calendar, Clock, Sparkles, CheckCircle2 } from 'lucide-react';
import { getTranslation } from '../data/translations';

export default function ItineraryPlanner({ onOpenBooking, lang }) {
  const [selectedItineraryId, setSelectedItineraryId] = useState('3-day-angkor');
  const [activeDayNumber, setActiveDayNumber] = useState(1);
  const [tripDays, setTripDays] = useState('3');
  const [tripStyle, setTripStyle] = useState('history');

  const activeItinerary = ITINERARIES.find((i) => i.id === selectedItineraryId) || ITINERARIES[0];

  const getItineraryTitle = (item) => {
    if (lang === 'KM') return item.title;
    if (lang === 'ZH') return item.zhTitle || item.title;
    if (lang === 'FR') return item.frTitle || item.title;
    return item.title;
  };

  return (
    <section id="itineraries" className="site-section relative">
      <div className="site-container">
        <div className="section-header">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>{getTranslation('itineraries.badge', lang)}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            <span>{getTranslation('itineraries.titlePrefix', lang)} </span>
            <span className="gold-gradient-text">{getTranslation('itineraries.titleHighlight', lang)}</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            {getTranslation('itineraries.desc', lang)}
          </p>
        </div>

        <div className="glass-card max-w-3xl mx-auto mb-8 p-5 rounded-2xl border border-amber-500/30 flex flex-col sm:flex-row gap-3 items-stretch sm:items-end">
          <label className="flex-1 text-xs font-bold text-slate-600 dark:text-slate-300">
            Duration
            <select
              value={tripDays}
              onChange={(e) => setTripDays(e.target.value)}
              className="mt-1.5 w-full px-3 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-sm font-semibold"
            >
              <option value="3">3 Days</option>
              <option value="5">5 Days</option>
              <option value="7">7 Days</option>
            </select>
          </label>
          <label className="flex-1 text-xs font-bold text-slate-600 dark:text-slate-300">
            Style
            <select
              value={tripStyle}
              onChange={(e) => setTripStyle(e.target.value)}
              className="mt-1.5 w-full px-3 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-sm font-semibold"
            >
              <option value="history">Temples & History</option>
              <option value="beach">Beach & Coastal</option>
              <option value="mix">Complete Experience</option>
            </select>
          </label>
          <button
            type="button"
            onClick={() => {
              const match =
                tripStyle === 'beach'
                  ? '5-day-coastal-escape'
                  : tripDays === '7' || tripStyle === 'mix'
                    ? '7-day-cambodia-grand'
                    : '3-day-angkor';
              setSelectedItineraryId(match);
              setActiveDayNumber(1);
            }}
            className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 text-xs font-extrabold cursor-pointer"
          >
            Find Route
          </button>
        </div>

        {/* Itinerary Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {ITINERARIES.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setSelectedItineraryId(item.id);
                setActiveDayNumber(1);
              }}
              type="button"
              className={`p-6 rounded-2xl text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                selectedItineraryId === item.id
                  ? 'glass-panel border-amber-500 bg-amber-500/10 shadow-xl shadow-amber-500/10 ring-2 ring-amber-400'
                  : 'glass-card hover:border-amber-500/40 border-slate-200 dark:border-slate-800'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-amber-600 dark:text-amber-400 mb-2">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {item.duration}
                  </span>
                  <span className="bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded text-[11px] text-slate-800 dark:text-slate-300 font-semibold">
                    {item.style}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{getItineraryTitle(item)}</h3>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>{getTranslation('itineraries.budget', lang)}</span>
                <span className="font-extrabold text-amber-600 dark:text-amber-300">{item.budget}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Active Itinerary Day Timeline Box */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/30 shadow-2xl space-y-8 bg-white dark:bg-slate-900/90">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4" />
                <span>{activeItinerary.duration} • {activeItinerary.style}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">{getItineraryTitle(activeItinerary)}</h3>
            </div>

            <button
              type="button"
              onClick={() => onOpenBooking(getItineraryTitle(activeItinerary))}
              className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-extrabold rounded-xl shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer hover:scale-105 transition-transform text-xs"
            >
              <Sparkles className="w-4 h-4" />
              <span>{getTranslation('itineraries.planThis', lang)}</span>
            </button>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {activeItinerary.days.map((d) => (
              <button
                key={d.day}
                onClick={() => setActiveDayNumber(d.day)}
                type="button"
                className={`px-5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeDayNumber === d.day
                    ? 'bg-amber-400 text-slate-950 shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-white border border-slate-200 dark:border-slate-700'
                }`}
              >
                {getTranslation('itineraries.dayLabel', lang)} {d.day}
              </button>
            ))}
          </div>

          {activeItinerary.days.map((dayData) => {
            if (dayData.day !== activeDayNumber) return null;
            return (
              <div key={dayData.day} className="space-y-6 animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/40 font-extrabold flex items-center justify-center text-lg">
                    {dayData.day}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">{dayData.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Scheduled Daily Experience</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {dayData.activities.map((act, idx) => (
                    <div
                      key={idx}
                      className="glass-card p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-start gap-3 bg-slate-50 dark:bg-slate-900/60"
                    >
                      <CheckCircle2 className="w-5 h-5 text-amber-500 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-800 dark:text-slate-200 text-sm font-medium leading-relaxed">{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
