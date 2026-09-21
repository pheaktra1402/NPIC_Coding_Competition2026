import React, { useEffect, useState } from "react";
import { PROVINCES_DATA } from "../data/provincesData";
import {
  Map,
  Search,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  X,
  Compass,
  Heart,
  Info,
  MapPin,
} from "lucide-react";
import { useTrip } from "../context/TripContext";
import { getTranslation } from "../data/translations";
import SafeImage from "./SafeImage";

export default function ProvincesExplorer({ onOpenBooking, onOpenMap, lang }) {
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProvince, setActiveProvince] = useState(null);
  const { toggleSave, isSaved } = useTrip();

  const regions = [
    "All",
    "Northwest",
    "Central & Mekong",
    "Coastal",
    "Eastern Eco-Highlands",
  ];

  const filteredProvinces = PROVINCES_DATA.filter((item) => {
    const matchesRegion =
      selectedRegion === "All" || item.region === selectedRegion;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      item.name.toLowerCase().includes(q) ||
      (item.khmerName && item.khmerName.includes(q)) ||
      (item.zhName && item.zhName.includes(q)) ||
      (item.frName && item.frName.toLowerCase().includes(q)) ||
      item.topAttractions.some((a) => a.toLowerCase().includes(q));
    return matchesRegion && matchesSearch;
  });

  useEffect(() => {
    if (!activeProvince) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setActiveProvince(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeProvince]);

  const getProvinceTitle = (p) => {
    if (lang === "KM") return p.khmerName;
    if (lang === "ZH") return p.zhName;
    if (lang === "FR") return p.frName || p.name;
    return p.name;
  };

  const getProvinceDesc = (p) => {
    if (lang === "KM") return p.descriptionKm || p.description;
    if (lang === "ZH") return p.descriptionZh || p.description;
    if (lang === "FR") return p.descriptionFr || p.description;
    return p.description;
  };

  return (
    <section id="provinces" className="site-section relative">
      <div className="site-container">
        <div className="section-header">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Map className="w-3.5 h-3.5" />
            <span>{getTranslation("provinces.badge", lang)}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
            <span>{getTranslation("provinces.titlePrefix", lang)} </span>
            <span className="gold-gradient-text">
              {getTranslation("provinces.titleHighlight", lang)}
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            {getTranslation("provinces.desc", lang)}
          </p>
        </div>

        {/* Search & Region Filter Bar */}
        <div className="space-y-5 mb-8">
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-amber-500 dark:text-amber-400 pointer-events-none" />
            <input
              type="text"
              placeholder={getTranslation("provinces.searchPlaceholder", lang)}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-slate-900 dark:text-white text-sm shadow-md focus:outline-none focus:border-amber-500 transition-all"
            />
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {regions.map((regKey) => (
              <button
                key={regKey}
                onClick={() => setSelectedRegion(regKey)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedRegion === regKey
                    ? "bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-105"
                    : "glass-card text-slate-700 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-300 border border-slate-200 dark:border-slate-800"
                }`}
              >
                {getTranslation("regions." + regKey, lang)}
              </button>
            ))}
          </div>
        </div>

        {/* Province Grid Summary count */}
        <div className="mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
          <span>
            {getTranslation("provinces.showing", lang)}{" "}
            <strong>{filteredProvinces.length}</strong>{" "}
            {getTranslation("provinces.ofProvinces", lang)}
          </span>
          <span className="font-semibold text-amber-600 dark:text-amber-400">
            {getTranslation("provinces.summaryNote", lang)}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProvinces.map((prov) => {
            const title = getProvinceTitle(prov);
            const desc = getProvinceDesc(prov);
            return (
              <div
                key={prov.id}
                className="glass-card rounded-2xl overflow-hidden glass-card-hover border border-slate-200 dark:border-slate-800/80 flex flex-col justify-between group"
              >
                <div className="relative h-44 overflow-hidden bg-slate-900">
                  <SafeImage
                    src={prov.image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <span className="absolute top-3 left-3 bg-slate-900/80 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-amber-400 border border-slate-700">
                    {getTranslation("regions." + prov.region, lang) ||
                      prov.region}
                  </span>
                  <div className="absolute top-3 right-3 flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => onOpenMap?.(title, prov.khmerName)}
                      className="w-8 h-8 rounded-full bg-slate-900/80 border border-amber-400/40 flex items-center justify-center cursor-pointer text-amber-400 hover:scale-110 transition-transform"
                      title="Google Maps"
                      aria-label="Google Maps"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        toggleSave({
                          id: `prov-${prov.id}`,
                          name: title,
                          kind: "Province",
                          meta: prov.region,
                          image: prov.image,
                          lang,
                        })
                      }
                      className="w-8 h-8 rounded-full bg-slate-900/80 border border-amber-400/40 flex items-center justify-center cursor-pointer"
                      aria-label="Save province"
                    >
                      <Heart
                        className={`w-3.5 h-3.5 ${isSaved(`prov-${prov.id}`) ? "fill-amber-400 text-amber-400" : "text-amber-200"}`}
                      />
                    </button>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-amber-300 uppercase tracking-widest block">
                        {prov.khmerName}
                      </span>
                      <h3 className="text-xl font-extrabold text-white">
                        {title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                    {desc}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 block">
                      {getTranslation("provinces.topAttractions", lang)}
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {prov.topAttractions.slice(0, 3).map((att, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => onOpenMap?.(att, prov.khmerName)}
                          className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300 hover:text-amber-400 hover:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700/60 transition-colors cursor-pointer"
                        >
                          • {att}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 mt-2">
                    <button
                      type="button"
                      onClick={() => onOpenMap?.(title, prov.khmerName)}
                      className="px-3 py-2 bg-amber-500/15 hover:bg-amber-500 hover:text-slate-950 text-amber-500 dark:text-amber-400 text-xs font-bold rounded-xl border border-amber-500/30 transition-all flex items-center justify-center gap-1 cursor-pointer shrink-0"
                      title="View Map"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{lang === "KM" ? "ផែនទី" : "Map"}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveProvince(prov)}
                      className="flex-1 py-2 bg-amber-500/10 hover:bg-amber-500 hover:text-slate-950 text-amber-600 dark:text-amber-400 text-xs font-bold rounded-xl border border-amber-500/30 transition-all flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>
                        {getTranslation("provinces.viewAttractions", lang)}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProvinces.length === 0 && (
          <div className="text-center py-14 glass-card rounded-2xl max-w-lg mx-auto mt-6">
            <Info className="w-10 h-10 text-amber-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
              {getTranslation("provinces.noResultsTitle", lang)}
            </h3>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedRegion("All");
              }}
              className="mt-3 px-4 py-2 rounded-xl bg-amber-500 text-slate-950 text-xs font-extrabold cursor-pointer"
            >
              {getTranslation("provinces.resetFilters", lang)}
            </button>
          </div>
        )}

        {/* Modal Detail for Active Province */}
        {activeProvince && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in"
            onClick={() => setActiveProvince(null)}
          >
            <div
              className="glass-panel w-full max-w-2xl rounded-3xl border border-amber-500/30 shadow-2xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveProvince(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                    {activeProvince.khmerName} •{" "}
                    {getTranslation("regions." + activeProvince.region, lang) ||
                      activeProvince.region}
                  </span>
                  <h3 className="text-3xl font-extrabold text-white">
                    {getProvinceTitle(activeProvince)}
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {getProvinceDesc(activeProvince)}
              </p>

              <div className="glass-card p-4 rounded-2xl border border-slate-800 mb-6 space-y-3">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>
                    {getTranslation("provinces.landmarksHeader", lang)}
                  </span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeProvince.topAttractions.map((spot, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => onOpenMap?.(spot, activeProvince.khmerName)}
                      className="p-2.5 bg-slate-900/80 hover:bg-amber-500/20 rounded-xl text-xs text-slate-200 border border-slate-800 flex items-center justify-between gap-2 transition-all cursor-pointer group text-left"
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                        <span className="truncate">{spot}</span>
                      </div>
                      <MapPin className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Embedded Google Map Preview */}
              <div className="mb-6 rounded-2xl overflow-hidden border border-amber-500/30 h-52 relative bg-slate-950">
                <iframe
                  title={`Google Map - ${activeProvince.name}`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(`${activeProvince.name} ${activeProvince.khmerName} Cambodia`)}&t=&z=10&ie=UTF8&iwloc=&output=embed`}
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => {
                    const title = getProvinceTitle(activeProvince);
                    onOpenMap?.(title, activeProvince.khmerName);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 bg-amber-500/20 text-amber-300 hover:bg-amber-500 hover:text-slate-950 text-xs font-bold rounded-xl border border-amber-500/40 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MapPin className="w-4 h-4" />
                  <span>{lang === "KM" ? "មើល Google Maps ពេញអេក្រង់" : "View Full Map"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveProvince(null)}
                  className="w-full sm:w-auto px-5 py-2.5 bg-slate-800 text-slate-300 text-xs font-semibold rounded-xl cursor-pointer"
                >
                  {getTranslation("provinces.close", lang)}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveProvince(null);
                    onOpenBooking(getProvinceTitle(activeProvince));
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-xs font-extrabold rounded-xl shadow-lg flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{getTranslation("provinces.bookTour", lang)}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
