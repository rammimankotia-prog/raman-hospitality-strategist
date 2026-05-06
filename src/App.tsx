/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Hotel, 
  TrendingUp, 
  Globe, 
  Star, 
  Users, 
  ArrowRight, 
  MapPin, 
  Mail, 
  Linkedin,
  Search,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  X,
  Heart,
  Layout,
  Settings,
  BarChart3
} from "lucide-react";
import React, { useState } from "react";
import AIContentGenerator from "./components/AIContentGenerator";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  const [showAITool, setShowAITool] = useState(false);
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'contact'>('home');

  return (
    <div className="min-h-screen bg-bg p-6 selection:bg-accent selection:text-bg">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-4">
        
        {/* Navigation / Header */}
        <nav className="flex justify-between items-center bg-card-bg border border-border rounded-2xl px-6 py-3">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => setActiveTab('home')}>
            <div className="relative">
              <Hotel className="w-6 h-6 text-accent" />
              <div className="absolute -bottom-1 -right-1 bg-bg p-0.5 rounded-full">
                <TrendingUp className="w-3 h-3 text-accent" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-black tracking-tighter text-xs uppercase leading-none">Hotel</span>
              <span className="font-serif italic text-accent text-sm leading-none">co</span>
            </div>
          </div>
          <div className="flex gap-6 items-center text-[10px] uppercase tracking-widest font-sans font-medium">
            <button 
              onClick={() => setActiveTab('home')} 
              className={`transition-colors ${activeTab === 'home' ? 'text-accent font-bold underline underline-offset-4 decoration-2' : 'text-text-dim hover:text-text-main'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setActiveTab('about')} 
              className={`transition-colors ${activeTab === 'about' ? 'text-accent font-bold underline underline-offset-4 decoration-2' : 'text-text-dim hover:text-text-main'}`}
            >
              About
            </button>
            <button 
              onClick={() => setActiveTab('contact')} 
              className={`bg-accent text-bg px-4 py-1.5 rounded-full font-bold text-[9px] hover:scale-105 transition-transform active:scale-95 ${activeTab === 'contact' ? 'scale-105 ring-2 ring-accent/20' : ''}`}
            >
              Contact
            </button>
          </div>
        </nav>

        {/* Content Area */}
        <main className="flex-1">
          <AnimatePresence mode="wait">
            {activeTab === 'home' && (
              <motion.div 
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-min md:auto-rows-[100px]"
              >
                {/* Hero Card */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="md:col-span-8 md:row-span-4 bento-card bg-gradient-to-br from-card-bg to-bg border-l-4 border-l-accent"
                >
                  {/* ... contents stayed same ... */}
                <div>
                  <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-[10px] font-bold tracking-widest mb-4">
                    Hospitality Strategist & Revenue Expert
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-[1.1] mb-4">
                    Raman Mankotia
                  </h1>
                  <p className="text-text-dim text-lg max-w-2xl font-body leading-relaxed">
                    Multi-profile Hospitality Veteran & Digital Growth Architect. Expert in OTA ecosystem mastery, strategic tech adoption, and SEO/SMO—now pioneering the AI revolution in modern hospitality revenue with <strong>Hotelco</strong>.
                  </p>
                </div>
                <div className="flex gap-8 mt-6">
                  <div className="text-[11px]">
                    <strong className="text-accent block uppercase tracking-wide">Founder</strong>
                    <span className="text-text-dim">Hotelco</span>
                  </div>
                  <div className="text-[11px]">
                    <strong className="text-accent block uppercase tracking-wide">Ex-GM</strong>
                    <span className="text-text-dim">Hotel Grand Godwin</span>
                  </div>
                </div>
              </motion.div>

              {/* Vision Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="md:col-span-4 md:row-span-4 bento-card bg-accent text-bg"
              >
                <div>
                  <div className="text-[11px] uppercase tracking-widest font-bold opacity-60 mb-2">Core Philosophy</div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold italic leading-tight mb-4">
                    "The Digital Hotelier Vision"
                  </h2>
                  <p className="text-sm font-medium leading-relaxed opacity-90">
                    "After years of establishing excellence in the hospitality industry, I am launching a platform dedicated to maximizing the revenue potential of individual hotel properties."
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-bg/10 flex items-center justify-between cursor-pointer group" onClick={() => setActiveTab('about')}>
                  <span className="text-[10px] uppercase font-bold tracking-widest group-hover:text-bg/80 transition-colors">Read Story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>

              {/* Expertise Cards */}
              <ExpertiseBento 
                delay={0.2}
                icon={<Globe className="w-5 h-5" />}
                title="Omni-Channel Sales"
                subtitle="OTA & Direct Growth"
                desc="Optimization of Booking.com, MMT, and Agoda combined with aggressive direct booking setups."
              />
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.25 }}
                onClick={() => setShowAITool(true)}
                className="md:col-span-4 md:row-span-3 bento-card bg-white/5 border-dashed border-accent/40 cursor-pointer group hover:bg-white/10"
              >
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="px-2 py-1 bg-accent/10 rounded text-[8px] font-bold text-accent uppercase tracking-widest">Live Demo</div>
                </div>
                <div>
                  <div className="card-title text-text-dim">AI Strategy Tool</div>
                  <h3 className="text-lg font-bold mb-2">Dynamic Content Engine</h3>
                  <p className="text-[11px] text-text-dim/80 leading-relaxed italic">
                    AI-driven generation of room descriptions & blog posts based on occupancy & audience.
                  </p>
                </div>
              </motion.div>

              <ExpertiseBento 
                delay={0.3}
                icon={<Search className="w-5 h-5" />}
                title="Digital Branding"
                subtitle="Identity & SEO"
                desc="Website maintenance, Database synchronization, and GEO-fencing strategies to dominate local search."
              />
              <ExpertiseBento 
                delay={0.4}
                icon={<Star className="w-5 h-5" />}
                title="Reputation Management"
                subtitle="AI-Driven ORM"
                desc="Monitoring guest reviews and improving ratings through strategic digital feedback loops."
              />

              <ExpertiseBento 
                delay={0.5}
                icon={<Heart className="w-5 h-5" />}
                title="CRM & Loyalty"
                subtitle="Enterprise Engagement"
                desc="Utilizing deep guest data to create personalized email marketing and automated guest journeys, mirroring global loyalty standards."
              />
              <ExpertiseBento 
                delay={0.55}
                icon={<Layout className="w-5 h-5" />}
                title="Full-Funnel Stack"
                subtitle="Comprehensive Ecosystem"
                desc="A total solution including high-end website design, professional visual staging, and proprietary-grade booking engine architecture."
              />
              <ExpertiseBento 
                delay={0.6}
                icon={<Settings className="w-5 h-5" />}
                title="Technical Discovery"
                subtitle="Schema & SEO 'Plumbing'"
                desc="Specialists in technical SEO and Schemas. We handle the internet 'plumbing' ensuring search engines and voice assistants find you with precision."
              />

              <ExpertiseBento 
                delay={0.65}
                icon={<Sparkles className="w-5 h-5" />}
                title="Generative Intelligence"
                subtitle="GEO & AI Automation"
                desc="Ensuring your hotel dominates in Generative Search (Gemini, ChatGPT). We implement AI reservation desks and fully automated WhatsApp marketing ecosystems."
              />
              <ExpertiseBento 
                delay={0.7}
                icon={<TrendingUp className="w-5 h-5" />}
                title="Profit Protection"
                subtitle="Direct Strategy"
                desc="Aggressive reduction of OTA commissions through high-converting proprietary websites and precision-targeted Meta/Google performance ads."
              />
              <ExpertiseBento 
                delay={0.75}
                icon={<BarChart3 className="w-5 h-5" />}
                title="Growth Velocity"
                subtitle="Data-Driven PR"
                desc="Utilizing advanced brand scaling algorithms and strategic PR to position your property as the undisputed dominant leader in your local market."
              />

              {/* Specialization Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.45 }}
                className="md:col-span-8 md:row-span-3 bento-card bg-accent/5 border-accent/20 flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="w-20 h-20 shrink-0 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                  <Hotel className="w-10 h-10" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-accent mb-2">The Strategic Edge</div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3 italic">"Built by hoteliers, for hoteliers."</h3>
                  <p className="text-sm text-text-dim leading-relaxed max-w-xl">
                    We specialize in <span className="text-white font-bold">hotel openings</span> and <span className="text-white font-bold">brand conversions</span>. Making us the definitive choice if you are launching a new property and need operational grit paired with digital speed.
                  </p>
                </div>
              </motion.div>

              {/* Professional Journey List */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="md:col-span-5 md:row-span-5 bento-card"
              >
                <div>
                  <div className="card-title">Professional Track Record</div>
                  <div className="space-y-4 mt-4">
                    <JourneyListItem title="General Manager" org="Hotel Grand Godwin & Godwin Deluxe" />
                    <JourneyListItem title="Founder" org="Hotelco (Voyage of India)" />
                    <JourneyListItem title="Authorized Agent" org="IRCTC Distribution & B2B Portals" />
                    <JourneyListItem title="Tech Specialist" org="GitHub & GoDaddy UI/UX Optimization" />
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="flex items-center gap-1 text-[9px] uppercase tracking-widest bg-white/5 px-2 py-1 rounded">
                    <MapPin className="w-3 h-3 text-accent" /> Pan India
                  </div>
                  <div className="flex items-center gap-1 text-[9px] uppercase tracking-widest bg-white/5 px-2 py-1 rounded">
                    <Users className="w-3 h-3 text-accent" /> 500+ Connections
                  </div>
                </div>
              </motion.div>

              {/* Stats Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="md:col-span-4 md:row-span-5 bento-card items-center justify-center text-center py-12"
              >
                <div className="card-title">Target Impact</div>
                <div className="my-auto">
                  <span className="text-6xl md:text-8xl font-serif font-extrabold text-accent leading-none">90%<span className="text-3xl">+</span></span>
                  <div className="text-[12px] uppercase tracking-[0.2em] text-text-dim mt-4">Average Occupancy Rate Goal</div>
                </div>
                <p className="text-[10px] text-text-dim/60 mt-4 font-medium max-w-[200px] mx-auto italic">
                  "We transform stagnated sales into consistent high-volume revenue streams."
                </p>
              </motion.div>

              {/* CTA Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="md:col-span-3 md:row-span-5 bento-card bg-blue-cta text-white border-0 text-center items-center justify-center"
              >
                <div className="text-5xl mb-4 self-center">🤝</div>
                <h3 className="text-xl font-bold mb-2">Start Your Transformation</h3>
                <p className="text-xs opacity-80 mb-8 leading-relaxed px-4">
                  Get a Complimentary AI-Generated Reputation Audit for your property today.
                </p>
                <button 
                  onClick={() => setActiveTab('contact')}
                  className="bg-white text-blue-cta w-full py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] transition-transform active:scale-[0.98] shadow-lg"
                >
                  Connect Now
                </button>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'about' && (
            <AboutSection onContactClick={() => setActiveTab('contact')} />
          )}

          {activeTab === 'contact' && (
            <ContactSection />
          )}
        </AnimatePresence>
      </main>

      {/* Footer Rail */}
      <footer className="flex flex-col md:flex-row justify-between items-center bg-card-bg border border-border rounded-2xl px-8 py-4 mt-2">
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest opacity-60">
            <span>© 2026 Raman Mankotia</span>
            <span className="hidden sm:inline">|</span>
            <span className="italic">Hotelco</span>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors"><Linkedin className="w-4 h-4" /></a>
            <a href="#" className="hover:text-accent transition-colors"><Mail className="w-4 h-4" /></a>
            <a href="#" className="hover:text-accent transition-colors font-bold text-[10px] tracking-tighter">B2B PORTAL</a>
          </div>
        </footer>
      </div>

      {/* AI Tool Modal */}
      <AnimatePresence>
        {showAITool && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-bg/90 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-5xl h-full max-h-[850px] relative"
            >
              <button 
                onClick={() => setShowAITool(false)}
                className="absolute -top-4 -right-4 md:top-4 md:right-4 z-10 p-3 bg-accent text-bg rounded-full shadow-2xl hover:scale-110 transition-transform"
              >
                <X className="w-5 h-5" />
              </button>
              <AIContentGenerator onClose={() => setShowAITool(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ExpertiseBento({ icon, title, subtitle, desc, delay }: { icon: React.ReactNode, title: string, subtitle: string, desc: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="md:col-span-4 md:row-span-3 bento-card group hover:border-accent/40"
    >
      <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <div className="card-title">{title}</div>
        <h3 className="text-lg font-bold mb-2 leading-tight">{subtitle}</h3>
        <p className="text-[12px] text-text-dim leading-relaxed font-body">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

function JourneyListItem({ title, org }: { title: string, org: string }) {
  return (
    <div className="border-b border-border/50 pb-3 last:border-0 last:pb-0">
      <span className="font-bold text-sm block">{title}</span>
      <small className="text-text-dim text-[11px] italic">{org}</small>
    </div>
  );
}

