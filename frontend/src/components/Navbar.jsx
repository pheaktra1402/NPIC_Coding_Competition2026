import React, { useState, useEffect } from 'react';
import { Compass, Globe, Menu, X, Sparkles, Sun, Moon } from 'lucide-react';

export default function Navbar({ onOpenBooking, lang, setLang, theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: lang === 'EN' ? '25 Provinces' : 'រាជធានី-ខេត្តទាំង២៥', href: '#provinces' },
    { name: lang === 'EN' ? 'Destinations' : 'តំបន់ទេសចរណ៍', href: '#destinations' },
    { name: lang === 'EN' ? 'Ancient Temples' : 'ប្រាសាទបុរាណ', href: '#temples' },
    { name: lang === 'EN' ? 'Culture & Food' : 'វប្បធម៌ និងម្ហូប', href: '#culture' },
    { name: lang === 'EN' ? 'Itineraries' : 'កម្មវិធីដើរកម្សាន្ត', href: '#itineraries' },
    { name: lang === 'EN' ? 'Travel Guide' : 'មគ្គុទ្ទេសក៍', href: '#travel-guide' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-panel py-3 shadow-2xl backdrop-blur-xl border-b border-amber-500/30'
          : 'bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-105 transition-transform duration-300">
            <Compass className="w-6 h-6 text-slate-950" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-wider text-white gold-gradient-text drop-shadow-sm">
              CAMBODIA
            </span>
            <span className="text-[10px] text-amber-300 tracking-widest uppercase font-semibold -mt-1 khmer-font">
              {lang === 'EN' ? 'Kingdom of Wonder' : 'ព្រះរាជាណាចក្រកម្ពុជា'}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links — High contrast white text with glowing amber hover */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-slate-900/60 dark:bg-slate-900/80 light:bg-white/80 p-1.5 rounded-full border border-amber-500/20 shadow-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-bold text-slate-100 hover:text-amber-300 dark:hover:text-amber-300 light:text-slate-800 hover:bg-amber-500/20 rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls: Theme Switcher, Language Toggle, and Booking CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 text-slate-200 dark:text-slate-200 light:text-slate-800 bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200 hover:bg-amber-500/20 border border-slate-700/60 rounded-full transition-all cursor-pointer shadow-sm"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === 'EN' ? 'KM' : 'EN')}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-slate-100 dark:text-slate-100 light:text-slate-800 bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200 hover:bg-slate-700 border border-slate-700/60 rounded-full transition-all cursor-pointer shadow-sm"
          >
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === 'EN' ? 'EN | ខ្មែរ' : 'ខ្មែរ | EN'}</span>
          </button>

          {/* Plan My Trip CTA */}
          <button
            onClick={onOpenBooking}
            className="flex items-center gap-2 px-4 py-2 text-xs font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-full shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>{lang === 'EN' ? 'Plan My Trip' : 'រៀបចំដំណើរកម្សាន្ត'}</span>
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-200 bg-slate-800/80 rounded-lg"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setLang(lang === 'EN' ? 'KM' : 'EN')}
            className="p-2 text-xs text-amber-400 font-bold bg-slate-800/80 rounded-lg"
          >
            {lang}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-200 bg-slate-800/80 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-b border-amber-500/30 px-4 pt-3 pb-6 mt-3 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-bold text-slate-100 hover:text-amber-400 rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 flex items-center justify-center gap-2 font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'EN' ? 'Plan My Trip Now' : 'រៀបចំដំណើរកម្សាន្តឥឡូវនេះ'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
