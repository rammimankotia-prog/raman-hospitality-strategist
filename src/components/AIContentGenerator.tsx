import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Loader2, Copy, Check, Send, X } from 'lucide-react';
import { generateHotelContent, ContentType } from '../services/geminiService';

interface AIContentGeneratorProps {
  onClose?: () => void;
}

export default function AIContentGenerator({ onClose }: AIContentGeneratorProps) {
  const [type, setType] = useState<ContentType>('room');
  const [hotelName, setHotelName] = useState('Godwin Grand');
  const [details, setDetails] = useState('');
  const [audience, setAudience] = useState('Business Travelers');
  const [occupancy, setOccupancy] = useState('60');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [copied, setCopied] = useState(false);
  const [bookingUrl, setBookingUrl] = useState('');
  const [showLinkPrompt, setShowLinkPrompt] = useState(false);

  const handleGenerate = async () => {
    if (!details) return;
    setLoading(true);
    setResult('');
    try {
      const content = await generateHotelContent({
        type,
        hotelName,
        details,
        audience,
        occupancy
      });
      setResult(content || '');
    } catch (error) {
      setResult('Error generating content. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-card-bg border border-border rounded-[32px] overflow-hidden flex flex-col md:flex-row h-full max-h-[800px] w-full max-w-5xl shadow-2xl">
      {/* Sidebar Controls */}
      <div className="w-full md:w-80 border-r border-border p-6 space-y-6 bg-bg/50">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2 text-accent">
            <Sparkles className="w-5 h-5" />
            <h2 className="font-sans font-bold text-sm uppercase tracking-widest">AI Copywriter</h2>
          </div>
          {onClose && (
            <button onClick={onClose} className="p-1 hover:bg-white/5 rounded-full text-text-dim hover:text-text-main transition-colors md:hidden">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        <div className="space-y-4">
          <label className="block">
            <span className="text-[10px] uppercase font-bold text-text-dim tracking-widest mb-2 block">Content Type</span>
            <div className="grid grid-cols-1 gap-2">
              {(['room', 'offer', 'blog'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    type === t 
                    ? 'bg-accent text-bg shadow-lg shadow-accent/20' 
                    : 'bg-white/5 text-text-dim hover:bg-white/10'
                  }`}
                >
                  {t === 'room' ? 'Room Description' : t === 'offer' ? 'Special Offer' : 'Local Blog Post'}
                </button>
              ))}
            </div>
          </label>

          <label className="block">
            <span className="text-[10px] uppercase font-bold text-text-dim tracking-widest mb-2 block">Hotel Name</span>
            <input
              type="text"
              value={hotelName}
              onChange={(e) => setHotelName(e.target.value)}
              className="w-full bg-white/5 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
            />
          </label>

          <label className="block">
            <span className="text-[10px] uppercase font-bold text-text-dim tracking-widest mb-2 block">Occupancy ({occupancy}%)</span>
            <input
              type="range"
              min="0"
              max="100"
              value={occupancy}
              onChange={(e) => setOccupancy(e.target.value)}
              className="w-full accent-accent bg-transparent cursor-pointer"
            />
          </label>

          <label className="block">
            <span className="text-[10px] uppercase font-bold text-text-dim tracking-widest mb-2 block">Target Audience</span>
            <select
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              className="w-full bg-white/5 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent appearance-none transition-colors"
            >
              <option value="Business Travelers">Business Travelers</option>
              <option value="Luxury Seekers">Luxury Seekers</option>
              <option value="Families">Families & Kids</option>
              <option value="Solo Adventurers">Solo Adventurers</option>
            </select>
          </label>

          <label className="block pt-4 border-t border-border">
            <span className="text-[10px] uppercase font-bold text-text-dim tracking-widest mb-2 block">Booking Link Config</span>
            <div className="relative">
              <input
                type="url"
                value={bookingUrl}
                onChange={(e) => {
                  setBookingUrl(e.target.value);
                  setShowLinkPrompt(false);
                }}
                placeholder="https://hotel-booking-engine.com"
                className="w-full bg-white/5 border border-border rounded-xl px-4 py-3 text-[10px] focus:outline-none focus:border-accent transition-colors"
              />
              {!bookingUrl && (
                <div className="mt-2 text-[9px] text-accent font-medium animate-pulse">
                  ⚠️ Configure link to enable 'Book Now'
                </div>
              )}
            </div>
          </label>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 p-8 overflow-y-auto font-body">
          <label className="block mb-6">
            <span className="text-[10px] uppercase font-bold text-text-dim tracking-widest mb-2 block">Key Details (What should the AI build on?)</span>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder={type === 'room' ? 'e.g. King size bed, city view, 45sqm, Italian marble' : type === 'offer' ? 'e.g. 20% off for 3 nights, includes breakfast and spa' : 'e.g. Red Fort, Chandni Chowk food walk, Lotus Temple'}
              className="w-full bg-transparent text-xl font-light leading-relaxed focus:outline-none resize-none min-h-[150px]"
            />
          </label>

          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-12 gap-4 text-accent/60"
              >
                <Loader2 className="w-8 h-8 animate-spin" />
                <span className="text-xs uppercase tracking-[0.3em] animate-pulse">Strategizing Content...</span>
              </motion.div>
            ) : result ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/5 border border-border rounded-2xl p-6 relative group"
              >
                <button 
                  onClick={copyToClipboard}
                  className="absolute top-4 right-4 p-2 bg-bg/80 border border-border rounded-lg text-text-dim hover:text-accent transition-all opacity-0 group-hover:opacity-100"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
                <div className="prose prose-invert max-w-none prose-sm whitespace-pre-wrap leading-relaxed text-text-main/90">
                  {result}
                </div>

                {/* Book Now Action Area */}
                <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center gap-4">
                  <button 
                    onClick={() => {
                      if (!bookingUrl) {
                        setShowLinkPrompt(true);
                        document.querySelector('input[type="url"]')?.parentElement?.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        window.open(bookingUrl, '_blank');
                      }
                    }}
                    className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all ${
                      bookingUrl 
                      ? 'bg-accent text-bg hover:scale-105 active:scale-95 shadow-lg shadow-accent/20' 
                      : 'bg-white/10 text-text-dim border border-border cursor-not-allowed'
                    }`}
                  >
                    Book Now
                  </button>
                  {showLinkPrompt && !bookingUrl && (
                    <motion.p 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-[10px] text-accent font-bold uppercase tracking-tighter"
                    >
                      ← Please configure your booking URL in the sidebar
                    </motion.p>
                  )}
                </div>
              </motion.div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-text-dim/30 border-2 border-dashed border-border rounded-2xl">
                <Sparkles className="w-12 h-12 mb-4" />
                <p className="text-sm">Ready to generate high-conversion copy</p>
              </div>
            )}
          </AnimatePresence>
        </div>

        <div className="p-6 border-t border-border bg-bg/50 flex justify-between items-center">
          <p className="text-[10px] text-text-dim max-w-xs uppercase tracking-wider">
            Content is optimized for {audience} based on {occupancy}% occupancy.
          </p>
          <button 
            onClick={handleGenerate}
            disabled={loading || !details}
            className="flex items-center gap-2 bg-accent text-bg px-8 py-3 rounded-xl font-bold text-sm shadow-xl shadow-accent/20 hover:scale-[1.02] transition-all active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
          >
            Generate <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
