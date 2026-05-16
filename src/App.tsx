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
  Target,
  MessageSquareHeart,
  LineChart,
  ShieldCheck,
  Award,
  Share2,
  Sparkles,
  Zap,
  UserPlus,
  Database,
  Network,
  LayoutTemplate,
  Laptop,
  Globe,
  ShoppingCart,
  CreditCard,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Search,
  Image as ImageIcon,
  Tag,
  Layout,
  MessageCircle,
  ExternalLink,
  Building,
  Heart,
  Settings,
  Clock,
  TrendingUp,
  BarChart,
  AppWindow,
  Star
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
            <a href="#about-us" className="hover:text-sky-500 transition-colors">About Us</a>
            <a href="#contact" className="hover:text-sky-500 transition-colors">Contact</a>
            <a href="#contact" className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2.5 rounded-full font-bold shadow-md shadow-sky-200 transition-all hover:scale-105 active:scale-95">
              Book Now
            </a>
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
            
            <motion.div 
              animate={{ 
                x: mousePosition.x * 10,
                y: mousePosition.y * 10,
              }}
              className="text-lg md:text-xl text-slate-600 max-w-3xl font-body leading-relaxed mb-8 flex flex-col gap-4 text-left md:text-center"
            >
              <p>
                I operate at the intersection of a multi-profile hospitality background and digital innovation. As a veteran General Manager, I don't just "handle" OTAs—I master their ecosystems while aggressively driving technology adoption across independent properties.
              </p>
              <p>
                <strong className="text-slate-900 font-bold">Hotelco</strong> was built on the pillars of SEO, SMO, and advanced digital branding. We empower owners to reclaim their narrative from third-party platforms and build sustainable direct revenue streams.
              </p>
              <div className="pt-6 pb-2">
                <p className="text-sky-600 font-bold italic text-xl md:text-2xl">
                  "Our mission is simple: Once a customer finds you, they stay yours forever."
                </p>
              </div>
            </motion.div>
            
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

        {/* Experience Metrics & Partnerships */}
        <section className="py-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Experience Metrics */}
            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl border border-sky-50 shadow-xl shadow-sky-900/5 lg:col-span-2 flex flex-col md:flex-row justify-between gap-8 items-center">
              <div className="flex flex-col gap-6 w-full">
                <h4 className="text-sky-500 font-bold tracking-widest text-xs uppercase">Experience Metrics</h4>
                <div className="flex justify-around items-center w-full">
                  <div className="text-center">
                    <div className="text-5xl font-black text-slate-900 mb-2">15+</div>
                    <div className="text-xs font-bold tracking-widest text-slate-400 uppercase">Years in Hospitality</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-black text-slate-900 mb-2">500+</div>
                    <div className="text-xs font-bold tracking-widest text-slate-400 uppercase">Properties Consulted</div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-auto flex flex-col gap-4 bg-sky-50/50 p-6 rounded-2xl border border-sky-100">
                {[
                  { icon: ShieldCheck, text: "Revenue Integrity" },
                  { icon: Target, text: "OTA Compliance" },
                  { icon: Users, text: "Guest Loyalty First" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-700 font-medium whitespace-nowrap">
                    <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center text-sky-500">
                      <item.icon className="w-4 h-4" />
                    </div>
                    {item.text}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Strategic Partnerships */}
            <motion.div whileHover={{ y: -5 }} className="bg-gradient-to-br from-sky-500 to-sky-700 p-8 rounded-3xl shadow-xl shadow-sky-900/10 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Strategic Partnerships</h3>
              </div>
              <p className="text-sky-100 text-sm leading-relaxed font-body mb-6 relative z-10">
                Authorized IRCTC Distribution Partner & Digital Growth Consultant for leading hotel chains.
              </p>
              <div className="flex gap-3 relative z-10">
                <div className="px-3 py-1.5 rounded-md bg-white/20 backdrop-blur-sm text-[10px] font-bold tracking-widest text-white uppercase border border-white/30">
                  IRCTC Partner
                </div>
                <div className="px-3 py-1.5 rounded-md bg-white/20 backdrop-blur-sm text-[10px] font-bold tracking-widest text-white uppercase border border-white/30">
                  B2B Guru
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about-us" className="py-20">
          <div className="bg-slate-950 rounded-[3rem] p-6 md:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background Decorators */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="text-center mb-16 relative z-10">
              <h2 className="text-sm font-bold tracking-widest text-sky-500 uppercase mb-3">About Us</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6">Redefining Hospitality Strategy</h3>
            </div>

            <div className="relative z-10">
              {/* Profile & Philosophy Row */}
              <div className="grid lg:grid-cols-3 gap-6 mb-6">
                <div className="lg:col-span-2 bg-slate-900/80 backdrop-blur-sm p-10 rounded-3xl border border-slate-800 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-4 py-1.5 bg-slate-800 text-amber-500 text-xs font-bold rounded-full mb-8">Hospitality Strategist & Revenue Expert</span>
                    <h3 className="text-5xl font-serif mb-6 text-white">Raman Mankotia</h3>
                    <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl">
                      Multi-profile Hospitality Veteran & Digital Growth Architect. Expert in OTA ecosystem mastery, strategic tech adoption, and SEO/SMO—now pioneering the AI revolution in modern hospitality revenue with <strong>Hotelco</strong>.
                    </p>
                  </div>
                  <div className="flex gap-12">
                    <div>
                      <div className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-2">Founder</div>
                      <div className="text-slate-300 text-sm">Hotelco</div>
                    </div>
                    <div>
                      <div className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-2">Ex-GM</div>
                      <div className="text-slate-300 text-sm">Hotel Grand Godwin</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-amber-500 p-10 rounded-3xl text-slate-900 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute -right-10 -bottom-10 opacity-10">
                    <Building className="w-64 h-64" />
                  </div>
                  <div className="relative z-10">
                    <div className="text-xs font-bold uppercase tracking-widest mb-8 text-amber-900">Core Philosophy</div>
                    <h3 className="text-4xl font-serif italic mb-8">"The Digital Hotelier Vision"</h3>
                    <p className="text-amber-950 font-medium leading-relaxed text-lg">
                      "After years of establishing excellence in the hospitality industry, I am launching a platform dedicated to maximizing the revenue potential of individual hotel properties."
                    </p>
                  </div>
                  <div className="mt-12 flex justify-between items-center font-bold text-sm tracking-widest uppercase cursor-pointer hover:translate-x-2 transition-transform relative z-10">
                    Read Story <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Roles, Target Impact, CTA Row */}
              <div className="grid lg:grid-cols-3 gap-6 mb-16">
                {/* Roles */}
                <div className="bg-slate-900/80 backdrop-blur-sm p-10 rounded-3xl border border-slate-800 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div>
                      <div className="font-bold text-white text-lg">General Manager</div>
                      <div className="text-slate-400 text-sm italic">Hotel Grand Godwin & Godwin Deluxe</div>
                    </div>
                    <div className="border-t border-slate-800/50 pt-6">
                      <div className="font-bold text-white text-lg">Founder</div>
                      <div className="text-slate-400 text-sm italic">Hotelco (Voyage of India)</div>
                    </div>
                    <div className="border-t border-slate-800/50 pt-6">
                      <div className="font-bold text-white text-lg">Authorized Agent</div>
                      <div className="text-slate-400 text-sm italic">IRCTC Distribution & B2B Portals</div>
                    </div>
                    <div className="border-t border-slate-800/50 pt-6">
                      <div className="font-bold text-white text-lg">Tech Specialist</div>
                      <div className="text-slate-400 text-sm italic">GitHub & GoDaddy UI/UX Optimization</div>
                    </div>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg text-xs font-bold text-slate-300">
                      <MapPin className="w-4 h-4 text-amber-500" /> PAN INDIA
                    </div>
                    <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg text-xs font-bold text-slate-300">
                      <Users className="w-4 h-4 text-amber-500" /> 500+ CONNECTIONS
                    </div>
                  </div>
                </div>

                {/* Target Impact */}
                <div className="bg-slate-900/80 backdrop-blur-sm p-10 rounded-3xl border border-slate-800 flex flex-col items-center justify-center text-center">
                  <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-10">Target Impact</div>
                  <div className="mb-10">
                    <div className="text-8xl font-serif text-amber-500 mb-6 drop-shadow-lg">90%<span className="text-5xl align-top">+</span></div>
                    <div className="text-slate-300 text-sm tracking-widest font-bold uppercase leading-relaxed max-w-[200px] mx-auto">
                      Average Occupancy Rate Goal
                    </div>
                  </div>
                  <div className="text-slate-500 text-sm italic leading-relaxed max-w-[250px]">
                    "We transform stagnated sales into consistent high-volume revenue streams."
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-blue-600 p-10 rounded-3xl flex flex-col items-center justify-center text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                  <div className="text-5xl mb-8 relative z-10">🤝</div>
                  <h3 className="text-3xl font-bold text-white mb-6 relative z-10">Start Your Transformation</h3>
                  <p className="text-blue-100 mb-10 leading-relaxed relative z-10">
                    Get a Complimentary AI-Generated Reputation Audit for your property today.
                  </p>
                  <button className="bg-white text-blue-600 font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition-transform w-full relative z-10">
                    Connect Now
                  </button>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Globe, title: "Omni-Channel Sales", subtitle: "OTA & Direct Growth", desc: "Optimization of Booking.com, MMT, and Agoda combined with aggressive direct booking setups." },
                  { icon: Sparkles, title: "AI Strategy Tool", subtitle: "Dynamic Content Engine", desc: "AI-driven generation of room descriptions & blog posts based on occupancy & audience.", badge: "LIVE DEMO" },
                  { icon: Search, title: "Digital Branding", subtitle: "Identity & SEO", desc: "Website maintenance, Database synchronization, and GEO-fencing strategies to dominate local search." },
                  { icon: Star, title: "Reputation Management", subtitle: "AI-Driven ORM", desc: "Monitoring guest reviews and improving ratings through strategic digital feedback loops." },
                  { icon: Heart, title: "CRM & Loyalty", subtitle: "Enterprise Engagement", desc: "Utilizing deep guest data to create personalized email marketing and automated guest journeys, mirroring global loyalty standards." },
                  { icon: AppWindow, title: "Full-Funnel Stack", subtitle: "Comprehensive Ecosystem", desc: "A total solution including high-end website design, professional visual staging, and proprietary-grade booking engine architecture." },
                  { icon: Settings, title: "Technical Discovery", subtitle: "Schema & SEO 'Plumbing'", desc: "Specialists in technical SEO and Schemas. We handle the internet 'plumbing' ensuring search engines and voice assistants find you with precision." },
                  { icon: Sparkles, title: "Generative Intelligence", subtitle: "GEO & AI Automation", desc: "Ensuring your hotel dominates in Generative Search (Gemini, ChatGPT). We implement AI reservation desks and fully automated WhatsApp marketing ecosystems." },
                  { icon: TrendingUp, title: "Profit Protection", subtitle: "Direct Strategy", desc: "Aggressive reduction of OTA commissions through high-converting proprietary websites and precision-targeted Meta/Google performance ads." },
                  { icon: BarChart, title: "Growth Velocity", subtitle: "Data-Driven PR", desc: "Utilizing advanced brand scaling algorithms and strategic PR to position your property as the undisputed dominant leader in your local market." }
                ].map((item, i) => (
                  <div key={i} className="bg-slate-900/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-800 flex flex-col group hover:border-slate-600 transition-colors">
                    <div className="flex justify-between items-start mb-12">
                      <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-slate-300 group-hover:text-white transition-colors shadow-inner shadow-black/20">
                        <item.icon className="w-6 h-6" />
                      </div>
                      {item.badge && <span className="text-[10px] font-bold text-amber-500 bg-amber-500/10 px-3 py-1 rounded-md uppercase tracking-wider border border-amber-500/20">{item.badge}</span>}
                    </div>
                    <div className="text-amber-500 text-[10px] font-bold uppercase tracking-widest mb-3">{item.title}</div>
                    <h4 className="text-2xl font-bold text-white mb-4">{item.subtitle}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
                
                {/* The Strategic Edge - Wide Card */}
                <div className="bg-slate-900/80 backdrop-blur-sm p-10 rounded-3xl border border-slate-800 flex flex-col md:col-span-2 lg:col-span-2 group hover:border-slate-600 transition-colors">
                  <div className="flex flex-col md:flex-row gap-10 items-start md:items-center">
                    <div className="w-24 h-24 bg-amber-900/30 rounded-3xl flex items-center justify-center text-amber-500 flex-shrink-0 shadow-inner shadow-amber-900/50">
                      <Building className="w-12 h-12" />
                    </div>
                    <div>
                      <div className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-4">The Strategic Edge</div>
                      <h4 className="text-3xl font-serif italic text-white mb-6">"Built by hoteliers, for hoteliers."</h4>
                      <p className="text-slate-400 leading-relaxed text-lg">
                        We specialize in <strong className="text-white">hotel openings</strong> and <strong className="text-white">brand conversions</strong>. Making us the definitive choice if you are launching a new property and need operational grit paired with digital speed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Core Functions */}
        <section id="strategic-management" className="py-20">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-sm font-bold tracking-widest text-sky-500 uppercase mb-3">Maximizing RevPAR</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Strategic Core Functions</h3>
            <p className="text-slate-600 font-body leading-relaxed text-lg">
              From a marketing standpoint, our firm focuses on one primary goal: <strong className="text-slate-900">maximizing RevPAR</strong> while building a sustainable brand. We move beyond simple advertising to manage the entire guest journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 1. Distribution */}
            <motion.div whileHover={{ y: -10 }} className="bg-white p-8 rounded-3xl border border-sky-50 shadow-xl shadow-sky-900/5 group">
              <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 mb-6 group-hover:scale-110 transition-transform">
                <Share2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Distribution & OTA Management</h4>
              <p className="text-slate-600 text-sm leading-relaxed font-body mb-6 min-h-[60px]">
                Visible wherever guests book. We optimize OTA presence (Booking, Expedia, Agoda) while driving Direct Booking strategies to minimize commissions.
              </p>
              <div className="flex flex-wrap gap-2">
                {['OTA OPTIMIZATION', 'DIRECT BOOKING', 'METASEARCH'].map((badge, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-50 text-slate-600 text-[10px] font-bold tracking-widest uppercase rounded-full border border-slate-100">{badge}</span>
                ))}
              </div>
            </motion.div>

            {/* 2. Revenue */}
            <motion.div whileHover={{ y: -10 }} className="bg-white p-8 rounded-3xl border border-sky-50 shadow-xl shadow-sky-900/5 group">
              <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Revenue & Dynamic Pricing</h4>
              <p className="text-slate-600 text-sm leading-relaxed font-body mb-6 min-h-[60px]">
                Maximizing RevPAR through real-time Yield Management. We adjust rates based on local demand and maintain strict inventory control.
              </p>
              <div className="flex flex-wrap gap-2">
                {['YIELD MANAGEMENT', 'INVENTORY CONTROL', 'FORECASTING'].map((badge, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-50 text-slate-600 text-[10px] font-bold tracking-widest uppercase rounded-full border border-slate-100">{badge}</span>
                ))}
              </div>
            </motion.div>

            {/* 3. Digital Brand */}
            <motion.div whileHover={{ y: -10 }} className="bg-white p-8 rounded-3xl border border-sky-50 shadow-xl shadow-sky-900/5 group">
              <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Digital Brand & GEO</h4>
              <p className="text-slate-600 text-sm leading-relaxed font-body mb-6 min-h-[60px]">
                Focusing on Generative Engine Optimization (GEO) to stay relevant in the AI-search era. E-E-A-T compliant content and visual storytelling.
              </p>
              <div className="flex flex-wrap gap-2">
                {['CONTENT STRATEGY', 'STORYTELLING', 'AI-READY SEO'].map((badge, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-50 text-slate-600 text-[10px] font-bold tracking-widest uppercase rounded-full border border-slate-100">{badge}</span>
                ))}
              </div>
            </motion.div>

            {/* 4. Reputation */}
            <motion.div whileHover={{ y: -10 }} className="bg-white p-8 rounded-3xl border border-sky-50 shadow-xl shadow-sky-900/5 group">
              <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 mb-6 group-hover:scale-110 transition-transform">
                <Star className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Reputation & Social Proof</h4>
              <p className="text-slate-600 text-sm leading-relaxed font-body mb-6 min-h-[60px]">
                In hospitality, reputation IS marketing. We manage review solicitation, crisis handling, and high-impact social media partnerships.
              </p>
              <div className="flex flex-wrap gap-2">
                {['REVIEWS', 'CRISIS MGMT', 'INFLUENCERS'].map((badge, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-50 text-slate-600 text-[10px] font-bold tracking-widest uppercase rounded-full border border-slate-100">{badge}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Marketing Add-ons & CRM */}
        <section className="py-10">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl border border-sky-50 shadow-xl shadow-sky-900/5 group">
              <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Performance Marketing</h4>
              <p className="text-slate-600 text-sm leading-relaxed font-body mb-6">
                Targeted paid media campaigns that drive immediate ROI. We protect your brand clicks and retarget high-intent visitors.
              </p>
              <ul className="space-y-3">
                {['GOOGLE ADS (SEM)', 'RETARGETING ADS', 'SOCIAL PERFORMANCE'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl border border-sky-50 shadow-xl shadow-sky-900/5 group">
              <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 mb-6 group-hover:scale-110 transition-transform">
                <UserPlus className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">CRM & Loyalty Marketing</h4>
              <p className="text-slate-600 text-sm leading-relaxed font-body mb-6">
                Retaining guests is cheaper than finding new ones. We implement personalized email marketing and database segmentation.
              </p>
              <ul className="space-y-3">
                {['EMAIL CAMPAIGNS', 'VIP SEGMENTATION', 'LOYALTY PROGRAMS'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* KPIs */}
        <section className="py-10">
          <div className="bg-slate-900 p-10 rounded-3xl shadow-xl shadow-slate-900/20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
            <h2 className="text-xs font-bold tracking-widest text-sky-400 uppercase mb-3 relative z-10">Key Performance Indicators (KPIs)</h2>
            <p className="text-slate-300 font-body mb-10 text-lg relative z-10">How we measure your property's success and our performance.</p>
            
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              <div className="border-l-2 border-sky-500/30 pl-6">
                <h4 className="text-xl font-bold mb-2">Look-to-Book Ratio</h4>
                <p className="text-slate-400 text-sm leading-relaxed">The percentage of visitors who convert into confirmed reservations.</p>
              </div>
              <div className="border-l-2 border-sky-500/30 pl-6">
                <h4 className="text-xl font-bold mb-2">Cost per Acquisition (CPA)</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Marketing spend efficiency for every guest booking acquired.</p>
              </div>
              <div className="border-l-2 border-sky-500/30 pl-6">
                <h4 className="text-xl font-bold mb-2">Direct vs. OTA Mix</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Optimizing the ratio of direct bookings to third-party channel sales.</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Hospitality Tech Ecosystem */}
        <section className="py-10">
          <h2 className="text-sm font-bold tracking-widest text-sky-500 uppercase mb-8 text-center md:text-left">The Hospitality Tech Ecosystem</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Database, title: "PMS", subtitle: "PROPERTY MANAGEMENT SYSTEM", desc: "The central hub for front-desk, billing, and housekeeping.", rec: "Cloudbeds (Small-Mid) / IDS Next (Enterprise)" },
              { icon: Network, title: "Channel Manager", subtitle: "DISTRIBUTION GATEWAY", desc: "Synchronizes prices and inventory across all OTAs in real-time.", rec: "STAAH (APAC/India) / SiteMinder (Global)" },
              { icon: LayoutTemplate, title: "CMS", subtitle: "CONTENT MANAGEMENT", desc: "Controls your website and direct booking engine UI/UX.", rec: "React+Vite (Speed) / WordPress (Ease)" },
              { icon: Laptop, title: "IDS", subtitle: "INTERNET DISTRIBUTION SYSTEM", desc: "Bridges the property to GDS and global corporate portals.", rec: "STAAH Max / RateGain" }
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl border border-sky-50 shadow-lg shadow-sky-900/5 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-slate-900">{item.title}</span>
                </div>
                <h5 className="text-xs font-bold tracking-wider text-slate-500 uppercase mb-2">{item.subtitle}</h5>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
                <div className="pt-4 border-t border-sky-50">
                  <span className="block text-[10px] font-bold tracking-widest text-sky-500 uppercase mb-1">Expert Recommendation</span>
                  <span className="text-sm font-bold text-slate-800 italic">{item.rec}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Direct Booking Infrastructure */}
        <section className="py-10">
          <h2 className="text-sm font-bold tracking-widest text-sky-500 uppercase mb-8 text-center md:text-left">Direct Booking Infrastructure</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: "Website", subtitle: "THE DIGITAL SHOWCASE", desc: "Optimized UI/UX for mobile-first hospitality browsing with ultra-fast load times.", rec: "React/Next.js (Performance) or Simplotel (Hospitality Specific)" },
              { icon: ShoppingCart, title: "IBE", subtitle: "INTERNET BOOKING ENGINE", desc: "The checkout funnel that converts visitors into confirmed reservations without OTA commissions.", rec: "STAAH Max / Simplotel / Synxis" },
              { icon: CreditCard, title: "Payment Gateway", subtitle: "SECURE TRANSACTION HUB", desc: "Compliant and smooth payment processing for international and domestic guests.", rec: "Razorpay (India) / Stripe (Global / High-End)" }
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl border border-sky-50 shadow-lg shadow-sky-900/5 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-slate-900">{item.title}</span>
                </div>
                <h5 className="text-xs font-bold tracking-wider text-slate-500 uppercase mb-2">{item.subtitle}</h5>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
                <div className="pt-4 border-t border-sky-50">
                  <span className="block text-[10px] font-bold tracking-widest text-sky-500 uppercase mb-1">Expert Recommendation</span>
                  <span className="text-sm font-bold text-slate-800 italic">{item.rec}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Social Media: Branding & Conversion */}
        <section className="py-10 pb-20">
          <h2 className="text-sm font-bold tracking-widest text-sky-500 uppercase mb-8 text-center md:text-left">Social Media: Branding & Conversion</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Instagram, title: "Instagram", subtitle: "VISUAL STORYTELLING", desc: "The primary platform for 'Inspirational' branding. Perfect for high-quality reels and guest-generated content.", rec: "Focus on Reels & Influencer Collaborations" },
              { icon: Facebook, title: "Facebook", subtitle: "COMMUNITY & AD ENGINE", desc: "Essential for community building and highly targeted Meta-ads aimed at families and older demographics.", rec: "Use for Direct Booking Retargeting Ads" },
              { icon: Linkedin, title: "LinkedIn", subtitle: "B2B & CORPORATE TRAVEL", desc: "Critical for attracting corporate accounts, MICE events, and positioning yourself as a thought leader.", rec: "Connect with Corporate Travel Managers" },
              { icon: Youtube, title: "YouTube", subtitle: "LONG-FORM VIDEO & SEO", desc: "The 2nd largest search engine. Ideal for room tours, culinary showcases, and destination guides that build trust.", rec: "Optimized Property Tours & Educational Content" }
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl border border-sky-50 shadow-lg shadow-sky-900/5 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-slate-900">{item.title}</span>
                </div>
                <h5 className="text-xs font-bold tracking-wider text-slate-500 uppercase mb-2">{item.subtitle}</h5>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
                <div className="pt-4 border-t border-sky-50">
                  <span className="block text-[10px] font-bold tracking-widest text-sky-500 uppercase mb-1">Expert Recommendation</span>
                  <span className="text-sm font-bold text-slate-800 italic">{item.rec}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* The Growth Blueprint: Strategic Execution */}
        <section className="py-10 pb-20">
          <div className="bg-slate-900 p-10 rounded-3xl shadow-xl shadow-slate-900/20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <h2 className="text-xs font-bold tracking-widest text-sky-400 uppercase mb-10 relative z-10">The Growth Blueprint: Strategic Execution</h2>
            
            <div className="grid md:grid-cols-2 gap-6 relative z-10">
              {[
                { icon: Search, title: "Local Business Mastery", desc: "Deep configuration of GMB (Google My Business) for local dominant search presence." },
                { icon: ImageIcon, title: "Visual Asset Optimization", desc: "Proper image compression, ALT configuration, and high-fidelity visual staging." },
                { icon: Tag, title: "Metadata & Tag Strategy", desc: "Micro-tagging every digital asset to ensure search engines understand your value proposition." },
                { icon: Layout, title: "Dynamic Content Feed", desc: "Consistent posting and narrative updates to keep your property relevant in the algorithms." },
                { icon: MessageCircle, title: "Ecosystem Integration", desc: "Seamlessly connecting Website to WhatsApp for instant 1:1 guest conversion." },
                { icon: ExternalLink, title: "Social Media Schema", desc: "Advanced Schema.org integration to link your social authority directly to your domain." }
              ].map((item, i) => (
                <motion.div key={i} whileHover={{ y: -5 }} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 shadow-lg flex gap-5 items-start">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-sky-400 flex-shrink-0 shadow-inner shadow-black/20">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <div className="max-w-7xl mx-auto px-6">
        {/* Contact Us Section */}
        <section id="contact" className="py-10 pb-20">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Consultation Form */}
            <div className="lg:col-span-2 bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-800 text-white shadow-xl shadow-slate-900/20">
              <div className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-4">Consultation Request</div>
              <h3 className="text-3xl md:text-4xl font-serif mb-10">Start Your Digital Property Audit <span className="text-amber-500 italic">Today</span>.</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Property Name / Your Name</label>
                    <input type="text" placeholder="Godwin Group / Raman" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Email Address</label>
                    <input type="email" placeholder="rammimankotia@gmail.com" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Primary Challenge</label>
                  <input type="text" placeholder="High OTA Commissions Audit" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Message / Requirements</label>
                  <textarea rows={4} placeholder="Tell us about the challenges your property is facing..." className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"></textarea>
                </div>
                <button type="button" className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold uppercase tracking-widest text-sm px-8 py-5 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-3 mt-8">
                  SEND AUDIT REQUEST <MessageCircle className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Direct Connection */}
            <div className="bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-800 text-white flex flex-col justify-between shadow-xl shadow-slate-900/20">
              <div>
                <div className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-10">Direct Connection</div>
                
                <div className="space-y-10">
                  <div className="flex gap-5 items-start group">
                    <div className="w-12 h-12 bg-amber-900/30 rounded-full flex items-center justify-center text-amber-500 flex-shrink-0 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors cursor-pointer">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">WhatsApp / Call</div>
                      <div className="text-lg font-bold text-white mb-1">+91 97XXXXXX73</div>
                      <div className="text-slate-500 text-sm italic">Raman Mankotia</div>
                    </div>
                  </div>

                  <div className="flex gap-5 items-start group">
                    <div className="w-12 h-12 bg-amber-900/30 rounded-full flex items-center justify-center text-amber-500 flex-shrink-0 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors cursor-pointer">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Professional Email</div>
                      <div className="text-lg font-bold text-white mb-1 break-all">rammimankotia@gmail.com</div>
                    </div>
                  </div>

                  <div className="flex gap-5 items-start group">
                    <div className="w-12 h-12 bg-amber-900/30 rounded-full flex items-center justify-center text-amber-500 flex-shrink-0 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors cursor-pointer">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">LinkedIn Strategy</div>
                      <div className="text-lg font-bold text-white mb-1">Raman Mankotia</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-slate-800/50">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-slate-500 mt-1" />
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">Jammu & Kashmir</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Servicing PAN India Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-500 rounded-2xl px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-4 mt-6 shadow-xl shadow-amber-500/10">
            <div className="flex items-center gap-3 text-slate-900 font-bold text-[11px] md:text-xs tracking-widest uppercase">
              <Clock className="w-5 h-5" /> TYPICAL RESPONSE TIME: &lt; 4 HOURS
            </div>
            <div className="flex items-center gap-3 text-slate-900 font-bold text-[11px] md:text-xs tracking-widest uppercase">
              <Globe className="w-5 h-5" /> AVAILABLE FOR REMOTE & ON-SITE CONSULTATION
            </div>
          </div>

          <footer className="bg-slate-900/50 py-8 border-t border-slate-800/50 mt-6 rounded-3xl px-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl shadow-slate-900/20 backdrop-blur-sm">
            <div className="flex items-center gap-4 text-[11px] font-bold text-slate-400 tracking-widest uppercase">
              <span>© 2026 RAMAN MANKOTIA</span>
              <span className="w-px h-3 bg-slate-700"></span>
              <span className="italic">HOTELCO</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="mailto:rammimankotia@gmail.com" className="text-slate-400 hover:text-amber-500 transition-colors"><Mail className="w-5 h-5" /></a>
              <a href="#" className="text-white font-bold text-xs tracking-widest uppercase hover:text-amber-500 transition-colors">B2B PORTAL</a>
            </div>
          </footer>
        </section>
      </div>

      {/* Floating Widget Component */}
      <FloatingBookingWidget />
    </div>
  );
}
