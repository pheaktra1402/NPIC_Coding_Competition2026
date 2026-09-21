import React, { createContext, useContext, useEffect, useState } from 'react';

const TripContext = createContext(null);
const STORAGE_KEY = 'cambodia-saved-trip';

export function TripProvider({ children }) {
  const [saved, setSaved] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch {
      return [];
    }
  });
  const [toast, setToast] = useState('');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  }, [saved]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(''), 2200);
    return () => clearTimeout(timer);
  }, [toast]);

  const toggleSave = (item) => {
    setSaved((prev) => {
      const exists = prev.some((entry) => entry.id === item.id);
      if (exists) {
        setToast(item.lang === 'KM' ? 'បានដកចេញពីដំណើរ' : 'Removed from your trip');
        return prev.filter((entry) => entry.id !== item.id);
      }
      setToast(item.lang === 'KM' ? 'បានរក្សាទុកក្នុងដំណើរ' : 'Saved to your trip');
      const { lang: _lang, ...rest } = item;
      return [...prev, rest];
    });
  };

  const isSaved = (id) => saved.some((entry) => entry.id === id);

  const clearSaved = () => {
    setSaved([]);
    setToast('Trip list cleared');
  };

  return (
    <TripContext.Provider value={{ saved, toggleSave, isSaved, clearSaved, toast }}>
      {children}
    </TripContext.Provider>
  );
}

export function useTrip() {
  const ctx = useContext(TripContext);
  if (!ctx) throw new Error('useTrip must be used inside TripProvider');
  return ctx;
}
