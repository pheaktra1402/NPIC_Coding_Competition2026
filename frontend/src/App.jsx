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
import { Sparkles, ArrowUp } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState('EN');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingDestination, setBookingDestination] = useState('');

  // Toggle dark/light theme class on root body element
  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenBooking = (destName = '') => {
    setBookingDestination(destName || 'Siem Reap & Angkor');
    setIsBookingOpen(true);
  };

  const handleSearch = (query, category) => {
    setSearchQuery(query);
    setSelectedCategory(category);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} font-sans selection:bg-amber-500 selection:text-slate-950`}>
      {/* Navigation Bar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        lang={lang}
        setLang={setLang}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Hero Banner */}
      <Hero
        onSearch={handleSearch}
        onSelectCategory={setSelectedCategory}
        onOpenBooking={() => handleOpenBooking()}
        lang={lang}
      />

      {/* Main Content Sections */}
      <main>
        {/* NEW: Interactive All 25 Provinces Explorer */}
        <ProvincesExplorer
          onOpenBooking={handleOpenBooking}
          lang={lang}
        />

        {/* Featured Destinations & Regions */}
        <Destinations
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          onOpenBooking={handleOpenBooking}
          lang={lang}
        />

        {/* Ancient Temples UNESCO Spotlight */}
        <TempleSpotlight lang={lang} />

        {/* Khmer Culture & Cuisine */}
        <CultureSection lang={lang} />

        {/* Curated Itinerary Planner */}
        <ItineraryPlanner
          onOpenBooking={handleOpenBooking}
          lang={lang}
        />

        {/* Visa & Practical Travel Guide */}
        <TravelGuide lang={lang} />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={handleOpenBooking}
        lang={lang}
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialDestination={bookingDestination}
        lang={lang}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full glass-panel border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-amber-500 flex items-center justify-center shadow-lg hover:scale-110 transition-all cursor-pointer"
          title="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

        <button
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
