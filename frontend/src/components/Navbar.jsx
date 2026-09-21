import React, { useState, useEffect } from 'react';
import { Compass, Globe, Menu, X, Sparkles, Sun, Moon, Search, Heart } from 'lucide-react';
import { useTrip } from '../context/TripContext';

export default function Navbar({
  onOpenBooking,
  lang,
  setLang,
  theme,
  toggleTheme,
  onOpenSearch,
  onOpenSaved,
  activeSection
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { saved } = useTrip();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: lang === 'EN' ? 'Provinces' : 'ខេត្ត', href: '#provinces', id: 'provinces' },
    { name: lang === 'EN' ? 'Destinations' : 'តំបន់', href: '#destinations', id: 'destinations' },
    { name: lang === 'EN' ? 'Temples' : 'ប្រាសាទ', href: '#temples', id: 'temples' },
    { name: lang === 'EN' ? 'Culture' : 'វប្បធម៌', href: '#culture', id: 'culture' },
    { name: lang === 'EN' ? 'Itineraries' : 'កម្មវិធី', href: '#itineraries', id: 'itineraries' },
    { name: lang === 'EN' ? 'Guide' : 'មគ្គុទ្ទេសក៍', href: '#travel-guide', id: 'travel-guide' },
  ];

  const controlBtn = `p-2.5 rounded-full border transition-all cursor-pointer ${
    isDark
      ? 'text-slate-200 bg-slate-800/80 border-slate-700/60 hover:bg-amber-500/20'
      : 'text-slate-800 bg-white/90 border-slate-200 hover:bg-amber-50 shadow-sm'
  }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-panel py-3 shadow-2xl backdrop-blur-xl border-b border-amber-500/30'
          : isDark
            ? 'bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-transparent py-4'
            : 'bg-gradient-to-b from-white/90 via-white/70 to-transparent py-4'
      }`}
    >
      <a href="#main-content" className="skip-link">
        {lang === 'EN' ? 'Skip to content' : 'រំលងទៅខ្លឹមសារ'}
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-105 transition-transform">
            <Compass className="w-6 h-6 text-slate-950" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-wider gold-gradient-text">CAMBODIA</span>
            <span className="text-[10px] text-amber-600 dark:text-amber-300 tracking-widest uppercase font-semibold -mt-1 khmer-font">
              {lang === 'EN' ? 'Kingdom of Wonder' : 'ព្រះរាជាណាចក្រកម្ពុជា'}
            </span>
          </div>
        </a>

        <nav className={`hidden lg:flex items-center gap-1 p-1.5 rounded-full border shadow-md ${
          isDark ? 'bg-slate-900/70 border-amber-500/20' : 'bg-white/90 border-slate-200'
        }`}>
          {navLinks.map((link) => {
            const active = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all ${
                  active
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : isDark
                      ? 'text-slate-100 hover:text-amber-300 hover:bg-amber-500/20'
                      : 'text-slate-700 hover:text-amber-700 hover:bg-amber-50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <button type="button" onClick={onOpenSearch} className={controlBtn} title="Search (Ctrl+K)" aria-label="Open search">
            <Search className="w-4 h-4 text-amber-500" />
          </button>

          <button type="button" onClick={onOpenSaved} className={`${controlBtn} relative`} aria-label="Open saved trip">
            <Heart className={`w-4 h-4 ${saved.length ? 'fill-amber-500 text-amber-500' : 'text-amber-500'}`} />
            {saved.length > 0 && (
              <span className="absolute -top-1 -right-1 min-w-4 h-4 px-1 rounded-full bg-amber-500 text-slate-950 text-[10px] font-extrabold flex items-center justify-center">
                {saved.length}
              </span>
            )}
          </button>

          <button type="button" onClick={toggleTheme} className={controlBtn} aria-label="Toggle theme">
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          <button
            type="button"
            onClick={() => setLang(lang === 'EN' ? 'KM' : 'EN')}
            className={`${controlBtn} flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold`}
          >
            <Globe className="w-3.5 h-3.5 text-amber-500" />
            <span>{lang === 'EN' ? 'EN' : 'ខ្មែរ'}</span>
          </button>

          <button
            type="button"
            onClick={onOpenBooking}
            className="flex items-center gap-2 px-4 py-2 text-xs font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-full shadow-lg shadow-amber-500/30 hover:scale-105 transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>{lang === 'EN' ? 'Plan My Trip' : 'រៀបចំដំណើរ'}</span>
          </button>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <button type="button" onClick={onOpenSearch} className={controlBtn} aria-label="Search">
            <Search className="w-4 h-4 text-amber-500" />
          </button>
          <button type="button" onClick={onOpenSaved} className={`${controlBtn} relative`} aria-label="Saved trip">
            <Heart className="w-4 h-4 text-amber-500" />
            {saved.length > 0 && (
              <span className="absolute -top-1 -right-1 min-w-4 h-4 px-1 rounded-full bg-amber-500 text-slate-950 text-[10px] font-extrabold">
                {saved.length}
              </span>
            )}
          </button>
          <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={controlBtn} aria-label="Menu">
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-b border-amber-500/30 px-4 pt-3 pb-6 mt-3 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-bold text-slate-800 dark:text-slate-100 hover:text-amber-500 rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button type="button" onClick={toggleTheme} className={`${controlBtn} flex-1 flex justify-center`}>
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              type="button"
              onClick={() => setLang(lang === 'EN' ? 'KM' : 'EN')}
              className={`${controlBtn} flex-1 flex items-center justify-center gap-1 text-xs font-bold`}
            >
              <Globe className="w-3.5 h-3.5 text-amber-500" />
              {lang}
            </button>
          </div>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full py-3 flex items-center justify-center gap-2 font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl"
          >
            <Sparkles className="w-4 h-4" />
            <span>{lang === 'EN' ? 'Plan My Trip Now' : 'រៀបចំដំណើរឥឡូវនេះ'}</span>
          </button>
        </div>
      )}
    </header>
  );
}
