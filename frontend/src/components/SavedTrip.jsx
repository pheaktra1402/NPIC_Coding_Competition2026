import React, { useEffect } from 'react';
import { useTrip } from '../context/TripContext';
import { Heart, X, MapPin, Sparkles, Trash2 } from 'lucide-react';

export default function SavedTrip({ isOpen, onClose, onOpenBooking, lang }) {
  const { saved, toggleSave, clearSaved } = useTrip();

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[65] flex justify-end bg-slate-950/60 backdrop-blur-sm" onClick={onClose}>
      <aside
        className="w-full max-w-md h-full glass-panel border-l border-amber-500/30 p-6 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label={lang === 'EN' ? 'Saved trip' : 'ដំណើររក្សាទុក'}
      >
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-wider mb-1">
              <Heart className="w-4 h-4 fill-amber-500" />
              <span>{lang === 'EN' ? 'Your trip' : 'ដំណើររបស់អ្នក'}</span>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {saved.length} {lang === 'EN' ? 'saved places' : 'ទីកន្លែង'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center"
            aria-label="Close saved trip"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {saved.length === 0 ? (
          <div className="text-center py-16 text-slate-500 text-sm">
            {lang === 'EN'
              ? 'Tap the heart on any destination or province to build a shortlist.'
              : 'ចុចបេះដូងលើទីតាំងណាមួយដើម្បីរក្សាទុក។'}
          </div>
        ) : (
          <div className="space-y-3">
            {saved.map((item) => (
              <div key={item.id} className="glass-card rounded-2xl p-3 border border-slate-200 dark:border-slate-800 flex gap-3">
                {item.image && (
                  <img src={item.image} alt="" className="w-16 h-16 rounded-xl object-cover shrink-0" />
                )}
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-amber-600">{item.kind}</div>
                  <div className="font-bold text-slate-900 dark:text-white truncate">{item.name}</div>
                  <div className="text-xs text-slate-500 truncate">{item.meta}</div>
                </div>
                <button
                  type="button"
                  onClick={() => toggleSave(item)}
                  className="p-2 text-slate-400 hover:text-rose-500"
                  aria-label="Remove"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}

            <div className="pt-4 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  const names = saved.map((s) => s.name).join(', ');
                  onClose();
                  onOpenBooking(names);
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                {lang === 'EN' ? 'Request a custom tour' : 'ស្នើសុំដំណើរផ្ទាល់ខ្លួន'}
              </button>
              <button
                type="button"
                onClick={clearSaved}
                className="w-full py-2.5 text-xs font-semibold text-slate-500 hover:text-rose-500"
              >
                {lang === 'EN' ? 'Clear all' : 'លុបទាំងអស់'}
              </button>
            </div>
          </div>
        )}

        <p className="mt-8 text-[11px] text-slate-500 flex items-center gap-1">
          <MapPin className="w-3 h-3" />
          {lang === 'EN' ? 'Saved on this device only — nothing is sent until you book.' : 'រក្សាទុកក្នុងឧបករណ៍នេះតែប៉ុណ្ណោះ។'}
        </p>
      </aside>
    </div>
  );
}
