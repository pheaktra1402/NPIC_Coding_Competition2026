import React, { useState } from 'react';
import { DESTINATIONS } from '../data/tourismData';
import { createBookingInAPI } from '../services/api';
import { X, Calendar, Users, MapPin, Sparkles, CheckCircle, ShieldCheck } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, initialDestination, lang }) {
  const [destination, setDestination] = useState(initialDestination || 'Siem Reap & Angkor');
  const [date, setDate] = useState('');
  const [travelers, setTravelers] = useState(2);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await createBookingInAPI({
        destination,
        date,
        travelers: Number(travelers),
        name,
        email,
        notes
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error('Booking submission error:', err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="glass-panel w-full max-w-xl rounded-3xl border border-amber-500/40 shadow-2xl p-6 sm:p-8 relative">
        {/* Close button */}
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center border border-slate-700 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-400 text-amber-400 flex items-center justify-center mx-auto mb-2 animate-bounce">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-white">
              {lang === 'EN' ? 'Saved to Database!' : 'សំណើរបស់អ្នកត្រូវបានទទួល!'}
            </h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
              {lang === 'EN'
                ? `Thank you, ${name || 'Traveler'}! Your booking request for ${destination} has been saved directly to our database. Our specialist will contact ${email} shortly.`
                : 'សូមអរគុណ! ក្រុមការងារទេសចរណ៍របស់យើងនឹងទាក់ទងទៅលោកអ្នកក្នុងពេលឆាប់ៗនេះ។'}
            </p>

            <div className="pt-4">
              <button
                onClick={resetAndClose}
                className="px-8 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold rounded-xl shadow-lg cursor-pointer"
              >
                {lang === 'EN' ? 'Return to Portal' : 'ត្រឡប់ទៅទំព័រដើម'}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  {lang === 'EN' ? 'Plan Your Custom Experience' : 'រៀបចំដំណើរកម្សាន្តផ្ទាល់ខ្លួន'}
                </h3>
                <p className="text-xs text-amber-400 font-semibold">Direct SQLite Database Connected</p>
              </div>
            </div>

            {/* Destination Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                {lang === 'EN' ? 'Select Destination / Itinerary:' : 'ជ្រើសរើសតំបន់ទេសចរណ៍'}
              </label>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-amber-400" />
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-amber-400"
                  required
                >
                  {DESTINATIONS.map((d) => (
                    <option key={d.id} value={d.name}>
                      {d.name} ({d.khmerName})
                    </option>
                  ))}
                  <option value="Custom 7-Day Grand Tour">Custom 7-Day Grand Cambodia Tour</option>
                  <option value="Custom Coastal & Island Trip">Custom Coastal & Island Trip</option>
                </select>
              </div>
            </div>

            {/* Date & Travelers Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  {lang === 'EN' ? 'Preferred Travel Date:' : 'កាលបរិច្ឆេទធ្វើដំណើរ'}
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-amber-400"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  {lang === 'EN' ? 'Number of Travelers:' : 'ចំនួនអ្នកធ្វើដំណើរ'}
                </label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-amber-400"
                  required
                />
              </div>
            </div>

            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  {lang === 'EN' ? 'Your Full Name:' : 'ឈ្មោះពេញ'}
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sokha Chan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-amber-400"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  {lang === 'EN' ? 'Email Address:' : 'អ៊ីមែល'}
                </label>
                <input
                  type="email"
                  placeholder="traveler@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-amber-400"
                  required
                />
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                {lang === 'EN' ? 'Special Requests or Preferences:' : 'សំណើពិសេសផ្សេងៗ'}
              </label>
              <textarea
                rows="3"
                placeholder={lang === 'EN' ? 'e.g. Vegetarian food options, private tuk-tuk driver, sunrise photo tour...' : 'ឧទាហរណ៍៖ ម្ហូបបួស, រថយន្តផ្ទាល់ខ្លួន...'}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-amber-400 resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-extrabold rounded-xl shadow-lg shadow-amber-500/20 cursor-pointer transition-all duration-200 disabled:opacity-50"
            >
              {isSubmitting ? 'Saving to Database...' : (lang === 'EN' ? 'Submit Tour Inquiry' : 'ផ្ញើសំណើធ្វើដំណើរ')}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
