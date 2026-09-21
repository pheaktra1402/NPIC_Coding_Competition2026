import React, { useState, useEffect, useRef } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Check } from 'lucide-react';

const MONTH_NAMES_EN = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const MONTH_NAMES_KM = [
  'មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា',
  'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ'
];

const DAYS_EN = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const DAYS_KM = ['អា', 'ច', 'អ', 'ព', 'ព្រ', 'សុ', 'ស'];

export default function CustomDatePicker({ value, onChange, lang }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Parse current value (YYYY-MM-DD) or fallback to today
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const initialDate = value ? new Date(value + 'T00:00:00') : today;
  const [viewYear, setViewYear] = useState(initialDate.getFullYear());
  const [viewMonth, setViewMonth] = useState(initialDate.getMonth());

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const monthNames = lang === 'KM' ? MONTH_NAMES_KM : MONTH_NAMES_EN;
  const daysHeader = lang === 'KM' ? DAYS_KM : DAYS_EN;

  // Calendar math
  const firstDayOfMonth = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const handlePrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const selectDate = (dayNumber) => {
    const d = new Date(viewYear, viewMonth, dayNumber);
    if (d < today) return; // Prevent past dates

    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    const formattedStr = `${yyyy}-${mm}-${dd}`;

    onChange(formattedStr);
    setIsOpen(false);
  };

  // Quick preset handlers
  const setQuickPreset = (daysOffset) => {
    const target = new Date();
    target.setDate(target.getDate() + daysOffset);
    const yyyy = target.getFullYear();
    const mm = String(target.getMonth() + 1).padStart(2, '0');
    const dd = String(target.getDate()).padStart(2, '0');
    onChange(`${yyyy}-${mm}-${dd}`);
    setViewYear(target.getFullYear());
    setViewMonth(target.getMonth());
    setIsOpen(false);
  };

  // Display label formatting
  const getDisplayLabel = () => {
    if (!value) return lang === 'KM' ? 'ជ្រើសរើសកាលបរិច្ឆេទ...' : 'Select travel date...';
    const parsed = new Date(value + 'T00:00:00');
    if (isNaN(parsed.getTime())) return value;

    const m = monthNames[parsed.getMonth()];
    const d = parsed.getDate();
    const y = parsed.getFullYear();
    return lang === 'KM' ? `ថ្ងៃទី ${d} ខែ ${m} ឆ្នាំ ${y}` : `${m} ${d}, ${y}`;
  };

  return (
    <div className="relative" ref={containerRef}>
      {/* Date Picker Toggle Input Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full pl-10 pr-4 py-2.5 bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white text-sm font-semibold flex items-center justify-between cursor-pointer focus:outline-none focus:border-amber-400 transition-colors"
      >
        <CalendarIcon className="absolute left-3.5 top-3 w-4 h-4 text-amber-500 dark:text-amber-400 pointer-events-none" />
        <span className={value ? 'text-slate-900 dark:text-white font-bold' : 'text-slate-400'}>
          {getDisplayLabel()}
        </span>
        <span className="text-[10px] uppercase font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded">
          {lang === 'KM' ? 'កាលភាគ' : 'Calendar'}
        </span>
      </button>

      {/* Calendar Dropdown Modal/Card */}
      {isOpen && (
        <div className="absolute left-0 top-full mt-2 z-50 w-72 sm:w-80 rounded-2xl bg-white dark:bg-slate-900 border border-amber-500/40 shadow-2xl p-4 animate-fade-in text-slate-900 dark:text-slate-100">
          {/* Quick Presets */}
          <div className="flex items-center gap-1.5 mb-3 pb-3 border-b border-slate-200 dark:border-slate-800 overflow-x-auto">
            <button
              type="button"
              onClick={() => setQuickPreset(1)}
              className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-amber-500/10 hover:bg-amber-500 hover:text-slate-950 text-amber-600 dark:text-amber-400 transition-colors shrink-0 cursor-pointer"
            >
              {lang === 'KM' ? 'ថ្ងៃស្អែក' : 'Tomorrow'}
            </button>
            <button
              type="button"
              onClick={() => setQuickPreset(7)}
              className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-amber-500/10 hover:bg-amber-500 hover:text-slate-950 text-amber-600 dark:text-amber-400 transition-colors shrink-0 cursor-pointer"
            >
              {lang === 'KM' ? '១ សប្តាហ៍' : 'In 1 Week'}
            </button>
            <button
              type="button"
              onClick={() => setQuickPreset(14)}
              className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-amber-500/10 hover:bg-amber-500 hover:text-slate-950 text-amber-600 dark:text-amber-400 transition-colors shrink-0 cursor-pointer"
            >
              {lang === 'KM' ? '២ សប្តាហ៍' : 'In 2 Weeks'}
            </button>
          </div>

          {/* Month Header Navigation */}
          <div className="flex items-center justify-between mb-3">
            <button
              type="button"
              onClick={handlePrevMonth}
              className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-amber-500 flex items-center justify-center cursor-pointer"
              aria-label="Previous month"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-sm font-extrabold text-slate-900 dark:text-white">
              {monthNames[viewMonth]} {viewYear}
            </span>

            <button
              type="button"
              onClick={handleNextMonth}
              className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-amber-500 flex items-center justify-center cursor-pointer"
              aria-label="Next month"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Days Header */}
          <div className="grid grid-cols-7 gap-1 text-center mb-1">
            {daysHeader.map((d) => (
              <span key={d} className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase py-1">
                {d}
              </span>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-1 text-center">
            {/* Empty slots before first day */}
            {Array.from({ length: firstDayOfMonth }).map((_, idx) => (
              <div key={`empty-${idx}`} />
            ))}

            {/* Days of current month */}
            {Array.from({ length: daysInMonth }).map((_, idx) => {
              const dayNum = idx + 1;
              const cellDate = new Date(viewYear, viewMonth, dayNum);
              cellDate.setHours(0, 0, 0, 0);

              const isPast = cellDate < today;
              const isToday = cellDate.getTime() === today.getTime();

              const yyyy = cellDate.getFullYear();
              const mm = String(cellDate.getMonth() + 1).padStart(2, '0');
              const dd = String(cellDate.getDate()).padStart(2, '0');
              const cellIso = `${yyyy}-${mm}-${dd}`;
              const isSelected = value === cellIso;

              return (
                <button
                  key={dayNum}
                  type="button"
                  disabled={isPast}
                  onClick={() => selectDate(dayNum)}
                  className={`h-8 rounded-lg text-xs font-bold transition-all flex items-center justify-center cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md font-extrabold scale-105'
                      : isPast
                      ? 'text-slate-300 dark:text-slate-700 cursor-not-allowed opacity-40'
                      : isToday
                      ? 'border border-amber-500 text-amber-600 dark:text-amber-400 font-extrabold'
                      : 'hover:bg-amber-500/20 text-slate-800 dark:text-slate-200'
                  }`}
                >
                  {dayNum}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
