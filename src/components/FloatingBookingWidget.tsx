import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageSquare, TrendingUp, Send, ChevronRight } from 'lucide-react';

type Step = 'welcome' | 'challenge' | 'property' | 'contact' | 'done';

const challenges = [
  "High OTA Commissions",
  "Low Occupancy Rate",
  "Poor Online Reputation",
  "Weak Direct Bookings",
  "No Digital Presence",
  "Low Revenue Per Room",
];

export const FloatingBookingWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>('welcome');
  const [selected, setSelected] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [property, setProperty] = useState('');

  const reset = () => {
    setStep('welcome');
    setSelected('');
    setName('');
    setPhone('');
    setProperty('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            transition={{ duration: 0.3 }}
            className="mb-4 w-80 sm:w-96 rounded-2xl bg-slate-950 border border-slate-800 shadow-[0_0_50px_-10px_rgba(14,165,233,0.4)] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-sky-600 to-sky-700 p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">HotelCo Strategy Bot</div>
                  <div className="text-sky-200 text-[11px]">Free Revenue Audit</div>
                </div>
              </div>
              <button
                onClick={() => { setIsOpen(false); reset(); }}
                className="p-1 hover:bg-white/20 rounded-full text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-5 min-h-[260px] flex flex-col">
              <AnimatePresence mode="wait">

                {/* STEP 1: Welcome */}
                {step === 'welcome' && (
                  <motion.div key="welcome" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="flex flex-col gap-4 flex-1">
                    <p className="text-slate-300 text-sm leading-relaxed">
                      👋 Hello! I'm your <strong className="text-white">Hospitality Strategy Assistant</strong>.
                    </p>
                    <p className="text-slate-400 text-sm">Let's identify your biggest revenue challenge in under 60 seconds and match you with the right solution.</p>
                    <button
                      onClick={() => setStep('challenge')}
                      className="mt-auto w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      Start Free Audit <ChevronRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                )}

                {/* STEP 2: Pick Challenge */}
                {step === 'challenge' && (
                  <motion.div key="challenge" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="flex flex-col gap-3 flex-1">
                    <p className="text-slate-300 text-sm font-semibold mb-1">What's your #1 challenge right now?</p>
                    <div className="grid grid-cols-2 gap-2">
                      {challenges.map((c) => (
                        <button
                          key={c}
                          onClick={() => { setSelected(c); setStep('property'); }}
                          className="text-left px-3 py-2.5 rounded-xl bg-slate-800 hover:bg-sky-600 text-slate-300 hover:text-white text-xs font-medium border border-slate-700 hover:border-sky-500 transition-all"
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Property Name */}
                {step === 'property' && (
                  <motion.div key="property" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="flex flex-col gap-4 flex-1">
                    <div className="bg-sky-900/30 border border-sky-800/50 rounded-xl px-3 py-2">
                      <p className="text-sky-300 text-xs font-bold uppercase tracking-wider">Challenge Identified</p>
                      <p className="text-white font-semibold text-sm mt-0.5">{selected}</p>
                    </div>
                    <p className="text-slate-400 text-sm">What is the name of your hotel / property?</p>
                    <input
                      type="text"
                      placeholder="E.g., Hotel Grand Godwin"
                      value={property}
                      onChange={e => setProperty(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                    />
                    <button
                      disabled={!property.trim()}
                      onClick={() => setStep('contact')}
                      className="mt-auto w-full bg-sky-500 hover:bg-sky-600 disabled:opacity-40 text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      Continue <ChevronRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                )}

                {/* STEP 4: Contact */}
                {step === 'contact' && (
                  <motion.div key="contact" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="flex flex-col gap-4 flex-1">
                    <p className="text-slate-300 text-sm">Almost done! Where should we send your <strong className="text-white">free audit report</strong>?</p>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="WhatsApp / Phone Number"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                    />
                    <button
                      disabled={!name.trim() || !phone.trim()}
                      onClick={() => setStep('done')}
                      className="mt-auto w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-40 text-slate-900 font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" /> Send My Free Audit
                    </button>
                  </motion.div>
                )}

                {/* STEP 5: Done */}
                {step === 'done' && (
                  <motion.div key="done" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center gap-4 flex-1 text-center py-4">
                    <div className="text-5xl">🎉</div>
                    <p className="text-white font-bold text-lg">You're All Set, {name.split(' ')[0]}!</p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Raman Mankotia will personally review <strong className="text-white">{property}</strong>'s revenue gaps and contact you within <strong className="text-amber-400">4 hours</strong>.
                    </p>
                    <button onClick={reset} className="text-sky-400 text-xs underline hover:text-sky-300 transition-colors">Start over</button>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <motion.button
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-tr from-sky-600 to-sky-400 text-white rounded-full flex items-center justify-center shadow-[0_0_25px_-5px_rgba(56,189,248,0.6)] hover:scale-105 active:scale-95 transition-transform relative"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-3 h-3 bg-amber-400 border-2 border-white rounded-full animate-ping"></span>
        )}
      </motion.button>
    </div>
  );
};
