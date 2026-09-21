import React, { useEffect } from 'react';
import { MapPin, X, ExternalLink, Navigation, Sparkles } from 'lucide-react';

export default function GoogleMapModal({ isOpen, onClose, locationName, khmerName, queryOverride, lang }) {
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const searchQuery = queryOverride || `${locationName || ''} ${khmerName || ''} Cambodia`.trim();
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(searchQuery)}&t=&z=11&ie=UTF8&iwloc=&output=embed`;
  const directMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchQuery)}`;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="glass-panel w-full max-w-4xl rounded-3xl border border-amber-500/40 shadow-2xl overflow-hidden bg-slate-900 text-slate-100 relative flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between gap-3 bg-slate-950/80">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center font-bold shrink-0 shadow-md">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 block">
                Google Maps Navigation • {khmerName}
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-white truncate">
                {locationName}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={directMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-amber-500/15 hover:bg-amber-500 hover:text-slate-950 text-amber-400 text-xs font-bold transition-all flex items-center gap-1.5 border border-amber-500/30 cursor-pointer"
            >
              <span>{lang === 'KM' ? 'បើកក្នុង Google Maps' : 'Open in Maps'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 cursor-pointer"
              aria-label="Close Map"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded Interactive Google Map Iframe */}
        <div className="relative flex-1 min-h-[380px] sm:min-h-[480px] bg-slate-950">
          <iframe
            title={`Google Map - ${locationName}`}
            src={embedUrl}
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Modal Footer Info */}
        <div className="p-3 sm:p-4 border-t border-slate-800 bg-slate-950/90 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Navigation className="w-4 h-4 text-amber-400" />
            <span>Interactive map centered on <strong>{locationName}</strong>, Kingdom of Cambodia</span>
          </div>
          <span className="text-[11px] text-amber-400/90 font-semibold">
            ✨ Click and drag to navigate or zoom in/out
          </span>
        </div>
      </div>
    </div>
  );
}
