import React, { useState } from 'react';
import { Compass, Phone, Mail, MapPin, Heart, Send, Sparkles, Check } from 'lucide-react';

export default function Footer({ onOpenBooking, lang }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-amber-500/20 pt-16 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl font-extrabold gold-gradient-text">CAMBODIA</div>
                <div className="text-[10px] text-amber-300 uppercase tracking-widest khmer-font">
                  {lang === 'EN' ? 'Kingdom of Wonder' : 'ព្រះរាជាណាចក្រកម្ពុជា'}
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {lang === 'EN'
                ? 'Official tourist discovery portal for the Kingdom of Cambodia. Explore ancient Angkor temples, tropical island beaches, and authentic Khmer hospitality.'
                : 'ទំព័រដើមមគ្គុទ្ទេសក៍ទេសចរណ៍ផ្លូវការនៃព្រះរាជាណាចក្រកម្ពុជា។'}
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-bold pt-1">
              <MapPin className="w-4 h-4" />
              <span>Phnom Penh & Siem Reap, Cambodia</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white text-base font-bold uppercase tracking-wider">
              {lang === 'EN' ? 'Explore Highlights' : 'តំបន់ទេសចរណ៍'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#destinations" className="hover:text-amber-400 transition-colors">
                  Siem Reap & Angkor Wat
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-amber-400 transition-colors">
                  Koh Rong Tropical Islands
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-amber-400 transition-colors">
                  Phnom Penh Royal Palace
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-amber-400 transition-colors">
                  Kampot & Kep Coastal Escape
                </a>
              </li>
              <li>
                <a href="#culture" className="hover:text-amber-400 transition-colors">
                  Traditional Apsara Dance & Cuisine
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Tourist Emergency & Assistance */}
          <div className="space-y-3">
            <h4 className="text-white text-base font-bold uppercase tracking-wider">
              {lang === 'EN' ? 'Tourist Assistance' : 'លេខទូរស័ព្ទបន្ទាន់'}
            </h4>
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl glass-card border border-slate-800 space-y-1">
                <div className="text-amber-400 font-bold">Tourist Police Hotline</div>
                <div className="text-white font-extrabold text-sm">+855 23 724 789 / 117</div>
              </div>
              <div className="p-3 rounded-xl glass-card border border-slate-800 space-y-1">
                <div className="text-amber-400 font-bold">Official e-Visa Portal</div>
                <div className="text-slate-300">evisa.gov.kh</div>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h4 className="text-white text-base font-bold uppercase tracking-wider">
              {lang === 'EN' ? 'Kingdom Travel Updates' : 'ទទួលបានព័ត៌មានថ្មីៗ'}
            </h4>
            <p className="text-xs text-slate-400">
              {lang === 'EN'
                ? 'Subscribe for monthly seasonal travel guides, festival dates, and tour specials.'
                : 'ចុះឈ្មោះដើម្បីទទួលបានព័ត៌មាន និងការផ្តល់ជូនពិសេស។'}
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400" />
                <span>{lang === 'EN' ? 'Subscribed successfully!' : 'ចុះឈ្មោះជោគជ័យ!'}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Your email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  required
                />
                <button
                  type="submit"
                  className="p-2.5 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold rounded-xl cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} Tourism in Cambodia — Kingdom of Wonder. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="khmer-font text-amber-400">ព្រះរាជាណាចក្រកម្ពុជា ជាតិ សាសនា ព្រះមហាក្សត្រ</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
