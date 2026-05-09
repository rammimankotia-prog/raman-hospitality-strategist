import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Hotel, 
  MapPin, 
  Briefcase, 
  Car, 
  TrendingUp, 
  ArrowRight,
  Star,
  Users,
  Compass,
  Phone,
  Mail,
  ChevronRight
} from "lucide-react";
import { FloatingBookingWidget } from "./components/FloatingBookingWidget";
import { seoData } from "./data/seoData";

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-bg text-text-main font-sans selection:bg-accent selection:text-white pb-20">
      {/* Sticky Blurred Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/70 backdrop-blur-md border-b border-sky-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-sky-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-sky-500/30">
              <Hotel className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-black tracking-tight text-xl text-sky-900 leading-none">HotelCo.in</span>
              <span className="font-body text-sky-600 text-xs font-medium tracking-wide">Hospitality Strategist</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-sky-800">
            <a href="#strategic-management" className="hover:text-sky-500 transition-colors">Strategic Management</a>
            <a href="#destinations" className="hover:text-sky-500 transition-colors">Destinations</a>
            <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2.5 rounded-full font-bold shadow-md shadow-sky-200 transition-all hover:scale-105 active:scale-95">
              Book Now
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-32">
        {/* Floating Hero Section */}
        <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center py-20">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
            <motion.div 
              animate={{ 
                x: mousePosition.x * -50,
                y: mousePosition.y * -50,
              }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
              className="absolute top-20 left-10 w-64 h-64 bg-sky-200/30 rounded-full blur-3xl"
            />
            <motion.div 
              animate={{ 
                x: mousePosition.x * 60,
                y: mousePosition.y * 60,
              }}
              transition={{ type: "spring", stiffness: 40, damping: 20 }}
              className="absolute bottom-20 right-10 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-10 flex flex-col items-center"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-50 border border-sky-100 rounded-full text-sky-700 font-semibold text-sm mb-8 shadow-sm">
                <TrendingUp className="w-4 h-4" />
                {seoData.content.hero.subtitle}
              </div>
            </motion.div>
            
            <motion.h1 
              animate={{ 
                x: mousePosition.x * 20,
                y: mousePosition.y * 20,
              }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6 max-w-5xl"
            >
              {seoData.content.hero.title}
            </motion.h1>
            
            <motion.p 
              animate={{ 
                x: mousePosition.x * 10,
                y: mousePosition.y * 10,
              }}
              className="text-lg md:text-xl text-slate-600 max-w-2xl font-body leading-relaxed mb-10"
            >
              {seoData.content.about.text}
            </motion.p>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl flex items-center gap-3 transition-colors"
            >
              {seoData.content.hero.cta}
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </section>

        {/* Strategic Management */}
        <section id="strategic-management" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-sky-500 uppercase mb-3">Our Core Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900">Strategic Management</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl border border-sky-50 shadow-xl shadow-sky-900/5 group"
            >
              <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 mb-8 group-hover:scale-110 transition-transform">
                <Briefcase className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Hotel Operations Excellence</h4>
              <p className="text-slate-600 leading-relaxed font-body mb-6">
                Maximizing property performance through advanced revenue strategies, staff training, and deep OTA optimizations. Transform your underperforming hotel into a local market leader.
              </p>
              <ul className="space-y-3">
                {['Revenue Maximization', 'Digital Branding & SEO', 'OTA Ecosystem Mastery'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center text-sky-500">
                      <Star className="w-3 h-3" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-sky-500 to-sky-700 p-10 rounded-3xl shadow-xl shadow-sky-900/10 text-white group"
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                <Car className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Private Tour Transport Services</h4>
              <p className="text-sky-100 leading-relaxed font-body mb-6">
                Premium North India transportation tailored for luxury and comfort. We manage highly reliable fleets delivering top-tier experiences for demanding travelers.
              </p>
              <ul className="space-y-3">
                {['Jim Corbett Tour Packages', 'Luxury Sedan & SUV Fleets', 'Bespoke Travel Itineraries'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-sky-50">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white">
                      <Users className="w-3 h-3" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Travel Destinations */}
        <section id="destinations" className="py-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-sky-500 uppercase mb-3">Explore with us</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900">Curated Travel Destinations</h3>
            </div>
            <button className="text-sky-600 font-bold hover:text-sky-800 flex items-center gap-2 transition-colors">
              View All Destinations <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Kashmir", subtitle: "Paradise on Earth", color: "from-blue-400 to-indigo-600" },
              { title: "Ladakh", subtitle: "The High Passes", color: "from-amber-500 to-orange-600" },
              { title: "Rajasthan", subtitle: "Royal Heritage", color: "from-rose-400 to-red-600" }
            ].map((dest, index) => (
              <motion.div
                key={dest.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -15 }}
                className="relative h-96 rounded-3xl overflow-hidden group cursor-pointer"
              >
                {/* Fallback gradient if we don't have images */}
                <div className={`absolute inset-0 bg-gradient-to-br ${dest.color} opacity-90 transition-opacity group-hover:opacity-100`}></div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white bg-gradient-to-t from-slate-900/80 to-transparent">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.2 }}
                  >
                    <div className="flex items-center gap-2 text-white/80 font-medium text-sm mb-2 uppercase tracking-wider">
                      <Compass className="w-4 h-4" /> {dest.subtitle}
                    </div>
                    <h4 className="text-3xl font-black mb-4">{dest.title}</h4>
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-2">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-sky-100 mt-20 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
               <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center text-white">
                  <Hotel className="w-4 h-4" />
                </div>
                <span className="font-black text-lg text-slate-900">HotelCo.in</span>
              </div>
              <p className="text-slate-500 font-body max-w-sm mb-6 leading-relaxed">
                Expert in Revenue Growth, Hotel Operations, and Premium North India Transport Services.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 mb-4">Quick Links</h5>
              <ul className="space-y-3 text-slate-500 text-sm font-medium">
                <li><a href="#" className="hover:text-sky-500 transition-colors">Home</a></li>
                <li><a href="#strategic-management" className="hover:text-sky-500 transition-colors">Services</a></li>
                <li><a href="#destinations" className="hover:text-sky-500 transition-colors">Destinations</a></li>
                <li><a href="#" className="hover:text-sky-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 mb-4">Contact Info</h5>
              <ul className="space-y-3 text-slate-500 text-sm font-medium">
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-sky-400" /> New Delhi, India</li>
                <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-sky-400" /> +91 (XXX) XXX-XXXX</li>
                <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-sky-400" /> info@raman-hospitality.com</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-slate-400 text-sm font-medium pt-8 border-t border-sky-50">
            © 2026 HotelCo.in - Hospitality Strategist. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating Widget Component */}
      <FloatingBookingWidget />
    </div>
  );
}
