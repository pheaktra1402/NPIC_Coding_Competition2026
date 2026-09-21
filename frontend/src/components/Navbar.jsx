import React, { useState, useEffect, useRef } from "react";
import {
  Compass,
  Globe,
  Menu,
  X,
  Sparkles,
  Sun,
  Moon,
  Search,
  Heart,
  ChevronDown
} from "lucide-react";
import { useTrip } from "../context/TripContext";
import { getTranslation } from "../data/translations";

const LANGUAGES = [
  { code: "EN", label: "English", flag: "🇬🇧" },
  { code: "KM", label: "ភាសាខ្មែរ", flag: "🇰🇭" },
  { code: "ZH", label: "中文", flag: "🇨🇳" },
  { code: "FR", label: "Français", flag: "🇫🇷" }
];

export default function Navbar({
  onOpenBooking,
  lang,
  setLang,
  theme,
  toggleTheme,
  onOpenSearch,
  onOpenSaved,
  activeSection,
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { saved } = useTrip();
  const isDark = theme === "dark";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: getTranslation("nav.provinces", lang), href: "#provinces", id: "provinces" },
    { name: getTranslation("nav.destinations", lang), href: "#destinations", id: "destinations" },
    { name: getTranslation("nav.temples", lang), href: "#temples", id: "temples" },
    { name: getTranslation("nav.culture", lang), href: "#culture", id: "culture" },
    { name: getTranslation("nav.itineraries", lang), href: "#itineraries", id: "itineraries" },
    { name: getTranslation("nav.guide", lang), href: "#travel-guide", id: "travel-guide" }
  ];

  const currentLangObj = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  const controlBtn = `p-2.5 rounded-2xl border transition-all duration-300 cursor-pointer active:scale-95 ${
    isDark
      ? "text-slate-200 bg-slate-900/80 border-slate-700/60 hover:bg-amber-500/20 hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/10"
      : "text-slate-800 bg-white/90 border-slate-200/80 hover:bg-amber-50 hover:border-amber-300 hover:shadow-md"
  }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || mobileMenuOpen
          ? "py-3 bg-slate-950/85 dark:bg-slate-950/90 backdrop-blur-2xl shadow-xl shadow-black/10 border-b border-amber-500/20"
          : isDark
            ? "bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-transparent py-5"
            : "bg-gradient-to-b from-white/90 via-white/40 to-transparent py-5"
      }`}
      translate="no"
    >
      <a href="#main-content" className="skip-link">
        {getTranslation("nav.skipContent", lang)}
      </a>

      <div className="site-container flex items-center justify-between gap-4">
        {/* Logo Section */}
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-500 to-amber-300 flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <Compass className="w-6 h-6 text-slate-950 animate-pulse-slow" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-black tracking-wider gold-gradient-text">
              CAMBODIA
            </span>
            <span className="text-[10px] text-amber-600 dark:text-amber-400 tracking-widest uppercase font-bold mt-1 khmer-font">
              {getTranslation("nav.kingdom", lang)}
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav
          className={`hidden xl:flex items-center gap-1 p-1.5 rounded-full border backdrop-blur-md transition-all ${
            isDark
              ? "bg-slate-900/60 border-amber-500/20 shadow-inner"
              : "bg-white/80 border-slate-200/80 shadow-sm"
          }`}
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const active = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all duration-300 whitespace-nowrap ${
                  active
                    ? "bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 shadow-md shadow-amber-500/30 scale-105"
                    : isDark
                      ? "text-slate-300 hover:text-amber-300 hover:bg-amber-500/15"
                      : "text-slate-700 hover:text-amber-700 hover:bg-amber-50"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Controls & CTA */}
        <div className="hidden md:flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenSearch}
            className={controlBtn}
            title={getTranslation("nav.search", lang)}
            aria-label="Open search"
          >
            <Search className="w-4 h-4 text-amber-500 hover:rotate-12 transition-transform" />
          </button>

          <button
            type="button"
            onClick={onOpenSaved}
            className={`${controlBtn} relative`}
            aria-label="Open saved trip"
            title={getTranslation("nav.savedTrip", lang)}
          >
            <Heart
              className={`w-4 h-4 transition-transform hover:scale-110 ${saved.length ? "fill-amber-500 text-amber-500" : "text-amber-500"}`}
            />
            {saved.length > 0 && (
              <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 text-[10px] font-black flex items-center justify-center shadow-md animate-bounce">
                {saved.length}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className={controlBtn}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400 rotate-0 hover:rotate-90 transition-transform duration-300" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700 hover:-rotate-12 transition-transform duration-300" />
            )}
          </button>

          {/* 4-Language Dropdown Selector */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className={`${controlBtn} flex items-center gap-1.5 px-3 py-2 text-xs font-bold`}
              aria-label="Language menu"
            >
              <span className="text-sm">{currentLangObj.flag}</span>
              <span className="font-extrabold">{currentLangObj.code}</span>
              <ChevronDown className="w-3.5 h-3.5 text-amber-500" />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-40 rounded-2xl bg-slate-900 border border-amber-500/30 shadow-2xl p-1.5 z-50 animate-fadeIn">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => {
                      setLang(l.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold transition-all text-left ${
                      lang === l.code
                        ? "bg-amber-500 text-slate-950 shadow-md"
                        : "text-slate-200 hover:bg-amber-500/15 hover:text-amber-300"
                    }`}
                  >
                    <span className="text-base">{l.flag}</span>
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={onOpenBooking}
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 text-xs font-black text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-2xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 animate-spin-slow" />
            <span>{getTranslation("nav.planTrip", lang)}</span>
          </button>
        </div>

        {/* Mobile Toggle Group */}
        <div className="xl:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenSearch}
            className={`md:hidden ${controlBtn}`}
            aria-label="Search"
          >
            <Search className="w-4 h-4 text-amber-500" />
          </button>
          <button
            type="button"
            onClick={onOpenSaved}
            className={`md:hidden ${controlBtn} relative`}
            aria-label="Saved trip"
          >
            <Heart className="w-4 h-4 text-amber-500" />
            {saved.length > 0 && (
              <span className="absolute -top-1 -right-1 min-w-4 h-4 px-1 rounded-full bg-amber-500 text-slate-950 text-[10px] font-extrabold">
                {saved.length}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={controlBtn}
            aria-label="Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-amber-500" />
            ) : (
              <Menu className="w-5 h-5 text-amber-500" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden site-container pt-4 pb-2 animate-fadeIn">
          <div className="glass-panel rounded-3xl border border-amber-500/30 p-4 space-y-4 shadow-2xl backdrop-blur-2xl bg-slate-900/95 dark:bg-slate-950/95">
            <nav className="flex flex-col gap-1.5" aria-label="Mobile">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-bold rounded-2xl transition-all ${
                    activeSection === link.id
                      ? "bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 shadow-md shadow-amber-500/20"
                      : "text-slate-200 hover:bg-amber-500/10 hover:text-amber-300"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="pt-2 border-t border-slate-800 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-slate-400">Language:</span>
                <div className="flex items-center gap-1.5">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      type="button"
                      onClick={() => setLang(l.code)}
                      className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all ${
                        lang === l.code
                          ? "bg-amber-500 text-slate-950"
                          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                      }`}
                    >
                      {l.flag} {l.code}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className={`${controlBtn} flex-1 flex justify-center py-3`}
                >
                  {isDark ? (
                    <Sun className="w-4 h-4 text-amber-400" />
                  ) : (
                    <Moon className="w-4 h-4 text-slate-200" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 flex items-center justify-center gap-2 font-black text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-2xl shadow-lg shadow-amber-500/30 active:scale-95 transition-transform"
            >
              <Sparkles className="w-4 h-4" />
              <span>{getTranslation("nav.planTrip", lang)}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
