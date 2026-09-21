import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProvincesExplorer from './components/ProvincesExplorer';
import Destinations from './components/Destinations';
import TempleSpotlight from './components/TempleSpotlight';
import CultureSection from './components/CultureSection';
import ItineraryPlanner from './components/ItineraryPlanner';
import TravelGuide from './components/TravelGuide';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';
import SearchPalette from './components/SearchPalette';
import SavedTrip from './components/SavedTrip';
import { Sparkles, ArrowUp } from 'lucide-react';
import { useTrip } from './context/TripContext';

const SECTION_IDS = ['provinces', 'destinations', 'temples', 'culture', 'itineraries', 'travel-guide'];

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('cambodia-theme') || 'dark');
  const [lang, setLang] = useState(() => localStorage.getItem('cambodia-lang') || 'EN');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingDestination, setBookingDestination] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [savedOpen, setSavedOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { saved, toast } = useTrip();

  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(theme);
    localStorage.setItem('cambodia-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('cambodia-lang', lang);
    document.documentElement.lang = lang === 'KM' ? 'km' : 'en';
  }, [lang]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const observers = [];
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -50% 0px', threshold: 0.1 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  const handleOpenBooking = (destName = '') => {
    setBookingDestination(destName || 'Siem Reap & Angkor');
    setIsBookingOpen(true);
  };

  const handleSearch = (query, category) => {
    setSearchQuery(query);
    setSelectedCategory(category);
  };

  const notesPrefill = saved.length
    ? `Saved places: ${saved.map((s) => s.name).join(', ')}`
    : '';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} font-sans selection:bg-amber-500 selection:text-slate-950`}>
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        lang={lang}
        setLang={setLang}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenSaved={() => setSavedOpen(true)}
        activeSection={activeSection}
      />

      <Hero
        onSearch={handleSearch}
        onSelectCategory={setSelectedCategory}
        onOpenBooking={() => handleOpenBooking()}
        lang={lang}
      />

      <main id="main-content">
        <ProvincesExplorer onOpenBooking={handleOpenBooking} lang={lang} />

        <Destinations
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          onOpenBooking={handleOpenBooking}
          lang={lang}
          onClearSearch={() => {
            setSearchQuery('');
            setSelectedCategory('All');
          }}
        />

        <TempleSpotlight lang={lang} />
        <CultureSection lang={lang} />
        <ItineraryPlanner onOpenBooking={handleOpenBooking} lang={lang} />
        <TravelGuide lang={lang} />
      </main>

      <Footer onOpenBooking={handleOpenBooking} lang={lang} />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialDestination={bookingDestination}
        lang={lang}
        notesPrefill={notesPrefill}
      />

      <SearchPalette
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        lang={lang}
        onOpenBooking={handleOpenBooking}
      />

      <SavedTrip
        isOpen={savedOpen}
        onClose={() => setSavedOpen(false)}
        onOpenBooking={handleOpenBooking}
        lang={lang}
      />

      {toast && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[80] px-4 py-2.5 rounded-full bg-slate-900 text-amber-200 text-xs font-bold shadow-xl border border-amber-500/30">
          {toast}
        </div>
      )}

      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {showTop && (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-full glass-panel border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-amber-500 flex items-center justify-center shadow-lg hover:scale-110 transition-all cursor-pointer"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        <button
          type="button"
          onClick={() => handleOpenBooking()}
          className="px-5 py-3 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-extrabold shadow-xl shadow-amber-500/30 flex items-center gap-2 hover:scale-105 transition-all cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          <span>{lang === 'EN' ? 'Plan Trip' : 'រៀបចំដំណើរកម្សាន្ត'}</span>
        </button>
      </div>
    </div>
  );
}
