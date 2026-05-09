import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Users, Car, Hotel, X, MessageSquare, Wind, Zap } from 'lucide-react';

export const FloatingBookingWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'hotel' | 'taxi'>('hotel');

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="mb-4 w-80 sm:w-96 rounded-2xl bg-white/80 backdrop-blur-xl border border-sky-200/50 shadow-[0_0_40px_-10px_rgba(56,189,248,0.4)] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-sky-500/10 p-4 border-b border-sky-100 flex justify-between items-center">
              <h3 className="text-sky-900 font-semibold flex items-center gap-2">
                <Calendar className="w-5 h-5 text-sky-500" />
                Quick Booking
              </h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-sky-100 rounded-full text-sky-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-sky-100">
              <button
                className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${activeTab === 'hotel' ? 'text-sky-600 border-b-2 border-sky-500 bg-sky-50/50' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'}`}
                onClick={() => setActiveTab('hotel')}
              >
                <Hotel className="w-4 h-4" /> Hotel
              </button>
              <button
                className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${activeTab === 'taxi' ? 'text-sky-600 border-b-2 border-sky-500 bg-sky-50/50' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'}`}
                onClick={() => setActiveTab('taxi')}
              >
                <Car className="w-4 h-4" /> Transport
              </button>
            </div>

            {/* Content */}
            <div className="p-5">
              <AnimatePresence mode="wait">
                {activeTab === 'hotel' ? (
                  <motion.div
                    key="hotel"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1">Destination / Hotel</label>
                      <input type="text" placeholder="E.g., Luxury Hotels Delhi" className="w-full px-3 py-2 bg-white border border-sky-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-300 text-sm" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-500 mb-1">Check-in</label>
                        <input type="date" className="w-full px-3 py-2 bg-white border border-sky-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-300 text-sm" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-500 mb-1">Check-out</label>
                        <input type="date" className="w-full px-3 py-2 bg-white border border-sky-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-300 text-sm" />
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="taxi"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1">Pickup Location</label>
                      <input type="text" placeholder="E.g., North India" className="w-full px-3 py-2 bg-white border border-sky-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-300 text-sm" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                         <label className="block text-xs font-medium text-slate-500 mb-1">Vehicle Capacity</label>
                         <div className="relative">
                            <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-sky-400" />
                            <select className="w-full pl-9 pr-3 py-2 bg-white border border-sky-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-300 text-sm appearance-none">
                              <option>1-4 Pax (Sedan)</option>
                              <option>5-6 Pax (SUV)</option>
                              <option>7-12 Pax (Tempo)</option>
                            </select>
                         </div>
                      </div>
                      <div>
                         <label className="block text-xs font-medium text-slate-500 mb-1">AC Preference</label>
                         <div className="relative">
                            <Wind className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-sky-400" />
                            <select className="w-full pl-9 pr-3 py-2 bg-white border border-sky-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-300 text-sm appearance-none">
                              <option>AC Required</option>
                              <option>Non-AC</option>
                            </select>
                         </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button className="w-full mt-6 bg-sky-500 hover:bg-sky-600 text-white font-medium py-2.5 rounded-lg shadow-md shadow-sky-200 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                <Zap className="w-4 h-4" /> Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        animate={{ y: [0, -10, 0] }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-tr from-sky-500 to-sky-300 text-white rounded-full flex items-center justify-center shadow-[0_0_25px_-5px_rgba(56,189,248,0.6)] hover:scale-105 active:scale-95 transition-transform relative"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-400 border-2 border-white rounded-full animate-ping"></span>
        )}
      </motion.button>
    </div>
  );
};
