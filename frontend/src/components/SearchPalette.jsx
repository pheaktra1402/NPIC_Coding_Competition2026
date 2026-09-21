import React, { useEffect, useMemo, useRef, useState } from 'react';
import { DESTINATIONS, TEMPLES, CUISINE, ITINERARIES } from '../data/tourismData';
import { PROVINCES_DATA } from '../data/provincesData';
import { Search, MapPin, Landmark, Utensils, Calendar, Compass, X } from 'lucide-react';
import { getTranslation } from '../data/translations';

export default function SearchPalette({ isOpen, onClose, lang, onOpenBooking, onOpenMap }) {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const match = (text) => !q || String(text).toLowerCase().includes(q);

    const destinations = DESTINATIONS.filter(
      (d) => match(d.name) || match(d.khmerName) || match(d.category) || match(d.description)
    ).map((d) => ({
      id: `dest-${d.id}`,
      title: lang === 'KM' ? d.khmerName : lang === 'ZH' ? d.zhName : d.name,
      subtitle: `${d.khmerName} · ${d.category}`,
      href: '#destinations',
      type: 'Destination',
      icon: MapPin,
      bookingName: d.name
    }));

    const provinces = PROVINCES_DATA.filter(
      (p) => match(p.name) || match(p.khmerName) || match(p.zhName) || p.topAttractions.some((a) => match(a))
    ).map((p) => ({
      id: `prov-${p.id}`,
      title: lang === 'KM' ? p.khmerName : lang === 'ZH' ? p.zhName : p.name,
      subtitle: `${p.khmerName} · ${p.region}`,
      href: '#provinces',
      type: 'Province',
      icon: Compass,
      bookingName: p.name
    }));

    const temples = TEMPLES.filter((t) => match(t.name) || match(t.khmerName)).map((t) => ({
      id: `temple-${t.id}`,
      title: lang === 'KM' ? t.khmerName : lang === 'ZH' ? t.zhName : t.name,
      subtitle: t.khmerName,
      href: '#temples',
      type: 'Temple',
      icon: Landmark
    }));

    const food = CUISINE.filter((c) => match(c.name) || c.ingredients.some((i) => match(i))).map((c) => ({
      id: `food-${c.id}`,
      title: lang === 'KM' ? c.name : lang === 'ZH' ? c.zhName : c.name,
      subtitle: c.category,
      href: '#culture',
      type: 'Cuisine',
      icon: Utensils
    }));

    const trips = ITINERARIES.filter((i) => match(i.title) || match(i.style)).map((i) => ({
      id: `trip-${i.id}`,
      title: lang === 'KM' ? i.title : lang === 'ZH' ? i.zhTitle : i.title,
      subtitle: `${i.duration} · ${i.budget}`,
      href: '#itineraries',
      type: 'Itinerary',
      icon: Calendar,
      bookingName: i.title
    }));

    return [...destinations, ...provinces, ...temples, ...food, ...trips].slice(0, 12);
  }, [query, lang]);

  useEffect(() => {
    if (!isOpen) return undefined;
    setQuery('');
    setActiveIndex(0);
    const timer = setTimeout(() => inputRef.current?.focus(), 30);
    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const goTo = (item) => {
    onClose();
    const el = document.querySelector(item.href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, Math.max(results.length - 1, 0)));
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      }
      if (e.key === 'Enter' && results[activeIndex]) {
        e.preventDefault();
        goTo(results[activeIndex]);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, results, activeIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-[12vh] bg-slate-950/70 backdrop-blur-md" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        className="glass-panel w-full max-w-2xl rounded-3xl border border-amber-500/30 shadow-2xl overflow-hidden bg-slate-900 text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-800">
          <Search className="w-5 h-5 text-amber-500" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={getTranslation('searchPalette.placeholder', lang)}
            className="flex-1 bg-transparent text-white text-sm py-2 outline-none placeholder:text-slate-400"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white cursor-pointer"
            aria-label="Close search"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-[50vh] overflow-y-auto p-2">
          {results.length === 0 ? (
            <p className="px-4 py-8 text-center text-sm text-slate-400">
              {getTranslation('searchPalette.noResults', lang)}
            </p>
          ) : (
            results.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer ${
                    idx === activeIndex ? 'bg-amber-500/20' : 'hover:bg-slate-800/80'
                  }`}
                  onMouseEnter={() => setActiveIndex(idx)}
                >
                  <button type="button" onClick={() => goTo(item)} className="flex flex-1 items-center gap-3 text-left min-w-0 cursor-pointer">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-bold text-white truncate">{item.title}</div>
                      <div className="text-[11px] text-slate-400 truncate">{item.subtitle}</div>
                    </div>
                    <span className="ml-auto text-[10px] font-bold uppercase tracking-wider text-amber-400">
                      {item.type}
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenMap?.(item.title);
                    }}
                    className="shrink-0 px-2 py-1 text-[10px] font-bold rounded-lg bg-amber-500/20 text-amber-300 hover:bg-amber-500 hover:text-slate-950 cursor-pointer transition-colors"
                    title="View Map"
                  >
                    Map
                  </button>
                  {item.bookingName && (
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onOpenBooking(item.bookingName);
                      }}
                      className="shrink-0 px-2.5 py-1 text-[10px] font-extrabold rounded-lg bg-amber-500 text-slate-950 cursor-pointer"
                    >
                      Book
                    </button>
                  )}
                </div>
              );
            })
          )}
        </div>

        <div className="px-4 py-2.5 border-t border-slate-800 text-[10px] text-slate-400 flex justify-between">
          <span>↑ ↓ navigate · Enter open</span>
          <span>Esc close</span>
        </div>
      </div>
    </div>
  );
}
