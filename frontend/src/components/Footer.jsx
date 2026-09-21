import React, { useState } from 'react';
import { Compass, Phone, Mail, MapPin, Send, Check } from 'lucide-react';
import { subscribeNewsletterInAPI } from '../services/api';
import { getTranslation } from '../data/translations';

export default function Footer({ lang }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    await subscribeNewsletterInAPI(newsletterEmail.trim());
    setSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-slate-950 border-t border-amber-500/20 pt-14 pb-8 text-slate-400 text-sm">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl font-extrabold gold-gradient-text">CAMBODIA</div>
                <div className="text-[10px] text-amber-300 uppercase tracking-widest khmer-font">
                  {getTranslation('nav.kingdom', lang)}
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {getTranslation('footer.tagline', lang)}
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Phnom Penh & Siem Reap, Cambodia</span>
              </div>
              <a href="tel:+85523724789" className="flex items-center gap-2 hover:text-amber-400">
                <Phone className="w-4 h-4 shrink-0" />
                +855 23 724 789
              </a>
              <a href="mailto:hello@cambodia.travel" className="flex items-center gap-2 hover:text-amber-400">
                <Mail className="w-4 h-4 shrink-0" />
                hello@cambodia.travel
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">
              {getTranslation('footer.quickLinks', lang)}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { href: '#destinations', label: 'Siem Reap & Angkor Wat' },
                { href: '#destinations', label: 'Koh Rong Islands' },
                { href: '#destinations', label: 'Phnom Penh Royal Palace' },
                { href: '#destinations', label: 'Kampot & Kep' },
                { href: '#culture', label: 'Apsara Dance & Cuisine' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-amber-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">
              {getTranslation('footer.contact', lang)}
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl glass-card border border-slate-800 space-y-1">
                <div className="text-amber-400 font-bold">Tourist Police Hotline</div>
                <div className="text-white font-extrabold">+855 23 724 789 / 117</div>
              </div>
              <div className="p-3 rounded-xl glass-card border border-slate-800 space-y-1">
                <div className="text-amber-400 font-bold">Official e-Visa Portal</div>
                <a href="https://www.evisa.gov.kh" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-amber-400">
                  evisa.gov.kh
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">
              {getTranslation('footer.newsletterTitle', lang)}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {getTranslation('footer.newsletterDesc', lang)}
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400" />
                <span>{getTranslation('footer.subscribed', lang)}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder={getTranslation('footer.emailPlaceholder', lang)}
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:border-amber-400"
                  required
                />
                <button
                  type="submit"
                  className="p-2.5 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold rounded-xl cursor-pointer"
                  aria-label="Subscribe"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>
            © {new Date().getFullYear()} Tourism in Cambodia — Kingdom of Wonder. {getTranslation('footer.rights', lang)} Developed by Thorn Chansopheaktra.
          </p>
          <p className="khmer-font text-amber-400 font-bold">ព្រះរាជាណាចក្រកម្ពុជា ជាតិ សាសនា ព្រះមហាក្សត្រ</p>
        </div>
      </div>
    </footer>
  );
}
