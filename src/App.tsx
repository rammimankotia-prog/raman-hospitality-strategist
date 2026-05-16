import React from "react";
import { motion } from "motion/react";
import { 
  ArrowRight, ShieldCheck, Target, Users, Award, 
  Share2, TrendingUp, Sparkles, Star, MapPin, Phone, Mail, Building
} from "lucide-react";
import { FloatingBookingWidget } from "./components/FloatingBookingWidget";
import { seoData } from "./data/seoData";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-300 font-sans selection:bg-amber-500 selection:text-white pb-20">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#0B1120]/90 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-amber-500">
            <Building className="w-6 h-6" />
            <div className="flex flex-col">
              <span className="font-sans font-black tracking-tight text-xl text-white leading-none">HOTEL</span>
              <span className="font-body text-amber-500 text-[10px] font-bold tracking-widest uppercase">CO</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
            <a href="#" className="hover:text-amber-400 transition-colors">Home</a>
            <a href="#about" className="text-amber-500 border-b-2 border-amber-500 pb-1">About</a>
            <button className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-2 rounded-full font-bold transition-all hover:scale-105 active:scale-95">
              Contact
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-32 space-y-6">
        
        {/* Top Bento Box */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Founder's Vision */}
          <div className="lg:col-span-2 bg-[#151E32] rounded-3xl p-10 border border-slate-800/50 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
            
            <h4 className="text-amber-500 font-bold tracking-widest text-xs uppercase mb-6">Founder's Vision</h4>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 leading-tight">
              Hospitality Discipline Meets <br/>
              <span className="text-amber-500 italic">Digital Strategy</span> Speed.
            </h1>
            
            <div className="space-y-6 text-slate-400 font-body text-lg leading-relaxed max-w-2xl relative z-10">
              <p>
                I operate at the intersection of a multi-profile hospitality background and digital innovation. As a veteran General Manager, I don't just "handle" OTAs—I master their ecosystems while aggressively driving technology adoption across independent properties.
              </p>
              <p>
                <strong className="text-white">Hotelco</strong> was built on the pillars of SEO, SMO, and advanced digital branding. We empower owners to reclaim their narrative from third-party platforms and build sustainable direct revenue streams.
              </p>
              
              <div className="pt-6 border-t border-slate-700/50">
                <p className="text-amber-500 font-bold italic text-xl">
                  "Our mission is simple: Once a customer finds you, they stay yours forever."
                </p>
              </div>
              
              <div className="pt-4">
                <button className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 rounded-xl font-bold text-sm tracking-widest uppercase transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2">
                  Work With Me <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Experience Metrics */}
          <div className="bg-[#151E32] rounded-3xl p-10 border border-slate-800/50 flex flex-col">
            <h4 className="text-amber-500 font-bold tracking-widest text-xs uppercase mb-10">Experience Metrics</h4>
            
            <div className="space-y-10 flex-grow">
              <div>
                <div className="text-5xl font-serif text-amber-500 font-bold mb-2">15+</div>
                <div className="text-xs font-bold tracking-widest text-slate-400 uppercase">Years in Hospitality</div>
              </div>
              
              <div>
                <div className="text-5xl font-serif text-amber-500 font-bold mb-2">500+</div>
                <div className="text-xs font-bold tracking-widest text-slate-400 uppercase">Properties Consulted</div>
              </div>
            </div>
            
            <div className="pt-10 border-t border-slate-700/50 space-y-4">
              {[
                { icon: ShieldCheck, text: "Revenue Integrity" },
                { icon: Target, text: "OTA Compliance" },
                { icon: Users, text: "Guest Loyalty First" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-slate-300 font-medium">
                  <item.icon className="w-5 h-5 text-amber-500" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Strategic Partnerships */}
        <div className="bg-[#151E32] rounded-3xl p-8 border border-slate-800/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 flex-shrink-0">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Strategic Partnerships</h3>
              <p className="text-slate-400 font-body text-sm md:text-base">
                Authorized IRCTC Distribution Partner & Digital Growth Consultant for leading hotel chains.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 rounded-lg bg-[#0B1120] border border-slate-700 text-xs font-bold tracking-widest text-white uppercase">
              IRCTC Partner
            </div>
            <div className="px-4 py-2 rounded-lg bg-[#0B1120] border border-slate-700 text-xs font-bold tracking-widest text-white uppercase">
              B2B Guru
            </div>
          </div>
        </div>

        {/* Strategic Core Functions */}
        <div id="services" className="pt-16 pb-10">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px bg-gradient-to-r from-transparent to-slate-700 w-32"></div>
            <h2 className="text-2xl md:text-3xl font-serif text-white">Strategic Core Functions</h2>
            <div className="h-px bg-gradient-to-l from-transparent to-slate-700 w-32"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg md:text-xl text-slate-400 font-body leading-relaxed">
              From a marketing standpoint, our firm focuses on one primary goal: <strong className="text-white">maximizing RevPAR (Revenue Per Available Room)</strong> while building a sustainable brand. We move beyond simple advertising to manage the entire guest journey—from the first search to the post-stay review.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Function 1 */}
            <div className="bg-[#151E32] rounded-3xl p-10 border border-slate-800/50 hover:border-amber-500/30 transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-[#0B1120] flex items-center justify-center text-amber-500 mb-8 border border-slate-800 group-hover:scale-110 transition-transform">
                <Share2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Distribution & OTA Management</h3>
              <p className="text-slate-400 font-body leading-relaxed mb-8 min-h-[80px]">
                Visible wherever guests book. We optimize OTA presence (Booking, Expedia, Agoda) while driving Direct Booking strategies to minimize commissions.
              </p>
              <ul className="space-y-4">
                {['OTA OPTIMIZATION', 'DIRECT BOOKING STRATEGY', 'METASEARCH MANAGEMENT'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs font-bold tracking-widest text-slate-300 uppercase">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Function 2 */}
            <div className="bg-[#151E32] rounded-3xl p-10 border border-slate-800/50 hover:border-amber-500/30 transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-[#0B1120] flex items-center justify-center text-amber-500 mb-8 border border-slate-800 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Revenue & Dynamic Pricing</h3>
              <p className="text-slate-400 font-body leading-relaxed mb-8 min-h-[80px]">
                Maximizing RevPAR through real-time Yield Management. We adjust rates based on local demand and maintain strict inventory control.
              </p>
              <ul className="space-y-4">
                {['YIELD MANAGEMENT', 'INVENTORY CONTROL', 'DEMAND FORECASTING'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs font-bold tracking-widest text-slate-300 uppercase">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Function 3 */}
            <div className="bg-[#151E32] rounded-3xl p-10 border border-slate-800/50 hover:border-amber-500/30 transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-[#0B1120] flex items-center justify-center text-amber-500 mb-8 border border-slate-800 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Digital Brand & GEO</h3>
              <p className="text-slate-400 font-body leading-relaxed mb-8 min-h-[80px]">
                Focusing on Generative Engine Optimization (GEO) to stay relevant in the AI-search era. E-E-A-T compliant content and visual storytelling.
              </p>
              <ul className="space-y-4">
                {['CONTENT STRATEGY', 'VISUAL STORYTELLING', 'AI-READY SEO'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs font-bold tracking-widest text-slate-300 uppercase">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Function 4 */}
            <div className="bg-[#151E32] rounded-3xl p-10 border border-slate-800/50 hover:border-amber-500/30 transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-[#0B1120] flex items-center justify-center text-amber-500 mb-8 border border-slate-800 group-hover:scale-110 transition-transform">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Reputation & Social Proof</h3>
              <p className="text-slate-400 font-body leading-relaxed mb-8 min-h-[80px]">
                In hospitality, reputation IS marketing. We manage review solicitation, crisis handling, and high-impact social media partnerships.
              </p>
              <ul className="space-y-4">
                {['REVIEW SOLICITATION', 'CRISIS MANAGEMENT', 'INFLUENCER RELATIONS'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs font-bold tracking-widest text-slate-300 uppercase">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#0B1120] border-t border-slate-800 mt-20 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
               <div className="flex items-center gap-2 text-amber-500 mb-6">
                <Building className="w-5 h-5" />
                <div className="flex flex-col">
                  <span className="font-sans font-black tracking-tight text-lg text-white leading-none">HOTEL</span>
                  <span className="font-body text-amber-500 text-[8px] font-bold tracking-widest uppercase">CO</span>
                </div>
              </div>
              <p className="text-slate-500 font-body max-w-sm mb-6 leading-relaxed">
                Expert in Revenue Growth, Hotel Operations, and Digital Marketing Strategies for the Hospitality Industry.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-white mb-4">Quick Links</h5>
              <ul className="space-y-3 text-slate-500 text-sm font-medium">
                <li><a href="#" className="hover:text-amber-500 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-amber-500 transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-amber-500 transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-white mb-4">Contact Info</h5>
              <ul className="space-y-3 text-slate-500 text-sm font-medium">
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-amber-500" /> New Delhi, India</li>
                <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-amber-500" /> +91 (XXX) XXX-XXXX</li>
                <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-amber-500" /> info@hotelco.in</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-slate-600 text-sm font-medium pt-8 border-t border-slate-800">
            © 2026 HotelCo.in - Hospitality Strategist. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating Widget Component */}
      <FloatingBookingWidget />
    </div>
  );
}
