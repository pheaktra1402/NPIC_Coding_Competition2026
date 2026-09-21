import React, { useState, useEffect } from 'react';
import { Compass, Calendar, Globe, Menu, X, Sparkles, MapPin, Heart } from 'lucide-react';

export default function Navbar({ onOpenBooking, activeSection, lang, setLang }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
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
          ? 'glass-panel py-3 shadow-xl shadow-black/40 border-b border-amber-500/20'
          : 'bg-gradient-to-b from-slate-950/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
            <Compass className="w-6 h-6 text-slate-950" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-wider gold-gradient-text">
              CAMBODIA
            </span>
            <span className="text-[10px] text-amber-200/80 tracking-widest uppercase font-medium -mt-1 khmer-font">
              {lang === 'EN' ? 'Kingdom of Wonder' : 'ព្រះរាជាណាចក្រកម្ពុជា'}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-amber-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'EN' ? 'KM' : 'EN')}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 bg-slate-800/80 hover:bg-slate-700 border border-slate-700/60 rounded-full transition-all duration-200"
            title="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === 'EN' ? 'EN | ខ្មែរ' : 'ខ្មែរ | EN'}</span>
          </button>

          {/* Book / Plan Trip CTA */}
          <button
            onClick={onOpenBooking}
            className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-md shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>{lang === 'EN' ? 'Plan My Trip' : 'រៀបចំដំណើរកម្សាន្ត'}</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setLang(lang === 'EN' ? 'KM' : 'EN')}
            className="p-2 text-xs text-amber-400 font-bold bg-slate-800/80 rounded-lg"
          >
            {lang}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white bg-slate-800/60 rounded-lg"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-amber-500/20 px-4 pt-3 pb-6 mt-3 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-800/60 rounded-lg"
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
              className="w-full py-3 flex items-center justify-center gap-2 font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl"
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
