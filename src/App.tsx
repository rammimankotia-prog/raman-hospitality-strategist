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
  ChevronRight,
  ClipboardCheck,
  MonitorSmartphone,
  Target,
  MessageSquareHeart,
  LineChart
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
            <h2 className="text-sm font-bold tracking-widest text-sky-500 uppercase mb-3">Hotel Marketing Strategies</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900">Our 5-Pillar Approach</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Onboarding */}
            <motion.div whileHover={{ y: -10 }} className="bg-white p-8 rounded-3xl border border-sky-50 shadow-xl shadow-sky-900/5 group">
              <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 mb-6 group-hover:scale-110 transition-transform">
                <ClipboardCheck className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">1. Onboarding Essentials</h4>
              <p className="text-slate-600 text-sm leading-relaxed font-body mb-4">
                Before any campaigns launch, we deeply understand the product. High-Quality Visual Assets, Clear Value Proposition, Accurate Inventory, and Tech Stack Access are mandatory.
              </p>
            </motion.div>

            {/* 2. Digital Infrastructure */}
            <motion.div whileHover={{ y: -10 }} className="bg-white p-8 rounded-3xl border border-sky-50 shadow-xl shadow-sky-900/5 group">
              <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 mb-6 group-hover:scale-110 transition-transform">
                <MonitorSmartphone className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">2. Strong Digital Infrastructure</h4>
              <p className="text-slate-600 text-sm leading-relaxed font-body mb-4">
                A high-converting website, advanced SEO (Traditional & AI Search Readiness), and flawless OTA & Meta-Search Management (rate parity, profile details) form the backbone.
              </p>
            </motion.div>

            {/* 3. Targeted Traffic */}
            <motion.div whileHover={{ y: -10 }} className="bg-gradient-to-br from-sky-500 to-sky-700 p-8 rounded-3xl shadow-xl shadow-sky-900/10 text-white group md:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold mb-3">3. Targeted Traffic & Visibility</h4>
              <p className="text-sky-100 text-sm leading-relaxed font-body mb-4">
                Driving traffic through localized Paid Campaigns (PPC), engaging Social Media storytelling with influencers, and smart Remarketing Campaigns for abandoned bookings.
              </p>
            </motion.div>

            {/* 4. Reputation */}
            <motion.div whileHover={{ y: -10 }} className="bg-white p-8 rounded-3xl border border-sky-50 shadow-xl shadow-sky-900/5 group md:col-span-1 lg:col-span-2">
              <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 mb-6 group-hover:scale-110 transition-transform">
                <MessageSquareHeart className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">4. Operational & Reputation Management</h4>
              <p className="text-slate-600 text-sm leading-relaxed font-body mb-4">
                Promoting a hotel goes beyond the website. We aggregate and respond to guest feedback on Google and OTAs. We utilize CRM for email marketing, personalized loyalty offers, and exclusive direct-booking discounts.
              </p>
            </motion.div>

            {/* 5. Analytics */}
            <motion.div whileHover={{ y: -10 }} className="bg-white p-8 rounded-3xl border border-sky-50 shadow-xl shadow-sky-900/5 group">
              <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 mb-6 group-hover:scale-110 transition-transform">
                <LineChart className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">5. Analytics & Business Intelligence</h4>
              <p className="text-slate-600 text-sm leading-relaxed font-body mb-4">
                Continuous data tracking to measure ROI. We monitor profitable channels, cost per acquisition (CPA), and geographic trends to refine where marketing budgets are spent.
              </p>
            </motion.div>
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
                Expert in Revenue Growth, Hotel Operations, and Digital Marketing Strategies for the Hospitality Industry.
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
