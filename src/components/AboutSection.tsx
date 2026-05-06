import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, Award, Target, Users2, ShieldCheck, ArrowRight, Laptop, Share2, 
  Layout, Database, Globe, ShoppingCart, CreditCard, Instagram, Facebook, 
  Linkedin as LinkedinIcon, Youtube, Search, Image as ImageIcon, Tags, 
  MessageCircle, Share, TrendingUp, Sparkles, Star, Zap, UserPlus, BarChart3, Heart, MousePointer2 
} from 'lucide-react';

interface AboutSectionProps {
  onContactClick: () => void;
}

export default function AboutSection({ onContactClick }: AboutSectionProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-min"
    >
      {/* Main Biography Card */}
      <div className="md:col-span-8 md:row-span-6 bento-card border-l-4 border-l-accent overflow-hidden relative">
        <div className="card-title">Founder's Vision</div>
        <h3 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
          Hospitality Discipline Meets <span className="text-accent italic">Digital Strategy</span> Speed.
        </h3>
        <div className="space-y-6 font-body text-base text-text-dim leading-relaxed max-w-2xl">
          <p>
            I operate at the intersection of a multi-profile hospitality background and digital innovation. As a veteran General Manager, I don't just "handle" OTAs—I master their ecosystems while aggressively driving technology adoption across independent properties.
          </p>
          <p>
            <strong>Hotelco</strong> was built on the pillars of SEO, SMO, and advanced digital branding. We empower owners to reclaim their narrative from third-party platforms and build sustainable direct revenue streams.
          </p>
          <p>
            Today, I am leveraging the latest boom in <strong>Artificial Intelligence</strong> to automate guest engagement and predictive revenue management, ensuring your property is not just competitive, but future-proof.
          </p>
          <div className="mt-8 pt-6 border-t border-white/5">
            <div className="text-accent font-bold italic text-lg leading-snug">
              "Our mission is simple: Once a customer finds you, they stay yours forever."
            </div>
          </div>
        </div>
        <button 
          onClick={onContactClick}
          className="mt-10 flex items-center gap-3 bg-accent text-bg px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl shadow-accent/20"
        >
          Work With Me <ArrowRight className="w-4 h-4" />
        </button>
        <div className="absolute top-10 right-10 opacity-5 pointer-events-none">
          <HotelIcon className="w-64 h-64" />
        </div>
      </div>

      {/* Stats/Achievements Grid */}
      <div className="md:col-span-4 md:row-span-3 bento-card bg-card-bg/50">
        <div className="card-title">Experience Metrics</div>
        <div className="mt-6 space-y-6">
          <div>
            <div className="text-4xl font-serif font-bold text-accent">15+</div>
            <div className="text-[10px] uppercase font-bold text-text-dim tracking-widest mt-1">Years in Hospitality</div>
          </div>
          <div>
            <div className="text-4xl font-serif font-bold text-accent">500+</div>
            <div className="text-[10px] uppercase font-bold text-text-dim tracking-widest mt-1">Properties Consulted</div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="md:col-span-4 md:row-span-3 bento-card bg-accent/5">
        <div className="card-title">Our Pillars</div>
        <div className="mt-4 space-y-4">
          <ValueItem icon={<ShieldCheck className="w-5 h-5" />} text="Revenue Integrity" />
          <ValueItem icon={<Target className="w-5 h-5" />} text="OTA Compliance" />
          <ValueItem icon={<Users2 className="w-5 h-5" />} text="Guest Loyalty First" />
        </div>
      </div>

      {/* Strategic Partnerships Card */}
      <div className="md:col-span-12 md:row-span-2 bento-card bg-card-bg/30 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* ... existing partnership content ... */}
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
            <Award className="w-10 h-10 text-accent" />
          </div>
          <div>
            <h4 className="text-xl font-bold mb-1">Strategic Partnerships</h4>
            <p className="text-sm text-text-dim italic">Authorized IRCTC Distribution Partner & Digital Growth Consultant for leading hotel chains.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-white/5 rounded-lg border border-border text-[10px] font-bold uppercase tracking-widest">IRCTC Partner</div>
          <div className="px-4 py-2 bg-white/5 rounded-lg border border-border text-[10px] font-bold uppercase tracking-widest">B2B Guru</div>
        </div>
      </div>

      {/* Core Functions: What We Do */}
      <div className="md:col-span-12 mt-12 mb-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-border/50"></div>
          <h2 className="text-2xl font-serif text-white px-4">Strategic Core Functions</h2>
          <div className="h-px flex-1 bg-border/50"></div>
        </div>

        <div className="max-w-3xl mb-12">
          <p className="text-lg text-text-dim leading-relaxed">
            From a marketing standpoint, our firm focuses on one primary goal: <strong className="text-white">maximizing RevPAR (Revenue Per Available Room)</strong> while building a sustainable brand. We move beyond simple advertising to manage the entire guest journey—from the first search to the post-stay review.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CoreFunctionCard 
            icon={<Share2 className="w-6 h-6" />}
            title="Distribution & OTA Management"
            desc="Visible wherever guests book. We optimize OTA presence (Booking, Expedia, Agoda) while driving Direct Booking strategies to minimize commissions."
            bullets={["OTA Optimization", "Direct Booking Strategy", "Metasearch Management"]}
          />
          <CoreFunctionCard 
            icon={<TrendingUp className="w-6 h-6" />}
            title="Revenue & Dynamic Pricing"
            desc="Maximizing RevPAR through real-time Yield Management. We adjust rates based on local demand and maintain strict inventory control."
            bullets={["Yield Management", "Inventory Control", "Demand Forecasting"]}
          />
          <CoreFunctionCard 
            icon={<Sparkles className="w-6 h-6" />}
            title="Digital Brand & GEO"
            desc="Focusing on Generative Engine Optimization (GEO) to stay relevant in the AI-search era. E-E-A-T compliant content and visual storytelling."
            bullets={["Content Strategy", "Visual Storytelling", "AI-Ready SEO"]}
          />
          <CoreFunctionCard 
            icon={<Star className="w-6 h-6" />}
            title="Reputation & Social Proof"
            desc="In hospitality, reputation IS marketing. We manage review solicitation, crisis handling, and high-impact social media partnerships."
            bullets={["Review Solicitation", "Crisis Management", "Influencer Relations"]}
          />
          <CoreFunctionCard 
            icon={<Zap className="w-6 h-6" />}
            title="Performance Marketing"
            desc="Targeted paid media campaigns that drive immediate ROI. We protect your brand clicks and retarget high-intent visitors."
            bullets={["Google Ads (SEM)", "Retargeting Ads", "Social Performance"]}
          />
          <CoreFunctionCard 
            icon={<UserPlus className="w-6 h-6" />}
            title="CRM & Loyalty Marketing"
            desc="Retaining guests is cheaper than finding new ones. We implement personalized email marketing and database segmentation."
            bullets={["Email Campaigns", "VIP Segmentation", "Loyalty Programs"]}
          />
        </div>
      </div>

      {/* KPIs Section */}
      <div className="md:col-span-12 bento-card bg-accent/5 border-accent/20 mb-12">
        <div className="card-title text-accent">Key Performance Indicators (KPIs)</div>
        <p className="text-sm text-text-dim mt-2 mb-8">How we measure your property's success and our performance.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <KPIMetric title="Look-to-Book Ratio" desc="The percentage of visitors who convert into confirmed reservations." />
          <KPIMetric title="Cost per Acquisition (CPA)" desc="Marketing spend efficiency for every guest booking acquired." />
          <KPIMetric title="Direct vs. OTA Mix" desc="Optimizing the ratio of direct bookings to third-party channel sales." />
        </div>
      </div>
      {/* Hospitality Tech Stack Section */}
      <div className="md:col-span-12 mt-8">
        <div className="card-title mb-4">The Hospitality Tech Ecosystem</div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <TechCard 
            icon={<Database className="w-5 h-5 text-accent" />}
            title="PMS"
            fullName="Property Management System"
            desc="The central hub for front-desk, billing, and housekeeping."
            recommendation="Cloudbeds (Small-Mid) / IDS Next (Enterprise)"
          />
          <TechCard 
            icon={<Share2 className="w-5 h-5 text-accent" />}
            title="Channel Manager"
            fullName="Distribution Gateway"
            desc="Synchronizes prices and inventory across all OTAs in real-time."
            recommendation="STAAH (APAC/India) / SiteMinder (Global)"
          />
          <TechCard 
            icon={<Layout className="w-5 h-5 text-accent" />}
            title="CMS"
            fullName="Content Management"
            desc="Controls your website and direct booking engine UI/UX."
            recommendation="React+Vite (Speed) / WordPress (Ease)"
          />
          <TechCard 
            icon={<Laptop className="w-5 h-5 text-accent" />}
            title="IDS"
            fullName="Internet Distribution System"
            desc="Bridges the property to GDS and global corporate portals."
            recommendation="STAAH Max / RateGain"
          />
        </div>
      </div>
      {/* Direct Booking Infrastructure Section */}
      <div className="md:col-span-12 mt-8">
        <div className="card-title mb-4">Direct Booking Infrastructure</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <TechCard 
            icon={<Globe className="w-5 h-5 text-accent" />}
            title="Website"
            fullName="The Digital Showcase"
            desc="Optimized UI/UX for mobile-first hospitality browsing with ultra-fast load times."
            recommendation="React/Next.js (Performance) or Simplotel (Hospitality Specific)"
          />
          <TechCard 
            icon={<ShoppingCart className="w-5 h-5 text-accent" />}
            title="IBE"
            fullName="Internet Booking Engine"
            desc="The checkout funnel that converts visitors into confirmed reservations without OTA commissions."
            recommendation="STAAH Max / Simplotel / Synxis"
          />
          <TechCard 
            icon={<CreditCard className="w-5 h-5 text-accent" />}
            title="Payment Gateway"
            fullName="Secure Transaction Hub"
            desc="Compliant and smooth payment processing for international and domestic guests."
            recommendation="Razorpay (India) / Stripe (Global / High-End)"
          />
        </div>
      </div>
      {/* Social Media Branding & Conversion Section */}
      <div className="md:col-span-12 mt-8">
        <div className="card-title mb-4">Social Media: Branding & Conversion</div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <TechCard 
            icon={<Instagram className="w-5 h-5 text-accent" />}
            title="Instagram"
            fullName="Visual Storytelling"
            desc="The primary platform for 'Inspirational' branding. Perfect for high-quality reels and guest-generated content."
            recommendation="Focus on Reels & Influencer Collaborations"
          />
          <TechCard 
            icon={<Facebook className="w-5 h-5 text-accent" />}
            title="Facebook"
            fullName="Community & Ad Engine"
            desc="Essential for community building and highly targeted Meta-ads aimed at families and older demographics."
            recommendation="Use for Direct Booking Retargeting Ads"
          />
          <TechCard 
            icon={<LinkedinIcon className="w-5 h-5 text-accent" />}
            title="LinkedIn"
            fullName="B2B & Corporate Travel"
            desc="Critical for attracting corporate accounts, MICE events, and positioning yourself as a thought leader."
            recommendation="Connect with Corporate Travel Managers"
          />
          <TechCard 
            icon={<Youtube className="w-5 h-5 text-accent" />}
            title="YouTube"
            fullName="Long-Form Video & SEO"
            desc="The 2nd largest search engine. Ideal for room tours, culinary showcases, and destination guides that build trust."
            recommendation="Optimized Property Tours & Educational Content"
          />
        </div>
      </div>

      {/* Strategic Execution Blueprint */}
      <div className="md:col-span-12 mt-8">
        <div className="card-title mb-4">The Growth Blueprint: Strategic Execution</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ExecutionItem 
            icon={<Search className="w-4 h-4" />} 
            title="Local Business Mastery" 
            desc="Deep configuration of GMB (Google My Business) for local dominant search presence."
          />
          <ExecutionItem 
            icon={<ImageIcon className="w-4 h-4" />} 
            title="Visual Asset Optimization" 
            desc="Proper image compression, ALT configuration, and high-fidelity visual staging."
          />
          <ExecutionItem 
            icon={<Tags className="w-4 h-4" />} 
            title="Metadata & Tag Strategy" 
            desc="Micro-tagging every digital asset to ensure search engines understand your value proposition."
          />
          <ExecutionItem 
            icon={<Layout className="w-4 h-4" />} 
            title="Dynamic Content Feed" 
            desc="Consistent posting and narrative updates to keep your property relevant in the algorithms."
          />
          <ExecutionItem 
            icon={<MessageCircle className="w-4 h-4" />} 
            title="Ecosystem Integration" 
            desc="Seamlessly connecting Website to WhatsApp for instant 1:1 guest conversion."
          />
          <ExecutionItem 
            icon={<Share className="w-4 h-4" />} 
            title="Social Media Schema" 
            desc="Advanced Schema.org integration to link your social authority directly to your domain."
          />
        </div>
      </div>
    </motion.div>
  );
}

function ExecutionItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex gap-4 items-start p-4 bg-white/[0.02] border border-border/20 rounded-2xl hover:border-accent/40 transition-colors">
      <div className="w-8 h-8 shrink-0 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
        {icon}
      </div>
      <div>
        <div className="text-[12px] font-bold text-white mb-1">{title}</div>
        <p className="text-[10px] text-text-dim leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function TechCard({ icon, title, fullName, desc, recommendation }: { icon: React.ReactNode, title: string, fullName: string, desc: string, recommendation: string }) {
  return (
    <div className="bento-card border border-border/50 group hover:border-accent/40 bg-card-bg/20">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-white/5 rounded-lg">{icon}</div>
        <span className="text-[10px] font-black text-accent tracking-tighter">{title}</span>
      </div>
      <div>
        <div className="text-[9px] uppercase font-bold text-text-dim tracking-widest mb-1">{fullName}</div>
        <p className="text-[11px] text-text-main/80 leading-relaxed mb-4">{desc}</p>
        <div className="pt-4 border-t border-border/30">
          <div className="text-[8px] uppercase font-bold text-accent tracking-tighter opacity-70 mb-1">Expert Recommendation</div>
          <div className="text-[10px] font-bold text-white italic">{recommendation}</div>
        </div>
      </div>
    </div>
  );
}

function ValueItem({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-center gap-3 group translate-x-0 hover:translate-x-2 transition-transform">
      <div className="text-accent">{icon}</div>
      <span className="text-xs font-bold text-text-main/80">{text}</span>
    </div>
  );
}

function CoreFunctionCard({ icon, title, desc, bullets }: { icon: React.ReactNode, title: string, desc: string, bullets: string[] }) {
  return (
    <div className="bento-card border border-border/30 hover:border-accent/40 bg-card-bg/20 transition-all group h-full">
      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h4 className="text-lg font-bold mb-3">{title}</h4>
      <p className="text-xs text-text-dim leading-relaxed mb-6">
        {desc}
      </p>
      <div className="space-y-2 mt-auto">
        {bullets.map((bullet, idx) => (
          <div key={idx} className="flex items-center gap-2 text-[10px] font-bold text-white/70 uppercase">
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            {bullet}
          </div>
        ))}
      </div>
    </div>
  );
}

function KPIMetric({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="relative pl-6 border-l-2 border-accent/30 group hover:border-accent transition-colors">
      <div className="text-base font-bold text-white mb-1">{title}</div>
      <p className="text-xs text-text-dim leading-relaxed">{desc}</p>
    </div>
  );
}

function HotelIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19,13V18H5V13H19M22,10V21H2V10H22M17,10V7H7V10H2V7L5.5,2H18.5L22,7V10H17M10,4.5A1.5,1.5 0 0,1 11.5,6A1.5,1.5 0 0,1 10,7.5A1.5,1.5 0 0,1 8.5,6A1.5,1.5 0 0,1 10,4.5M14,4.5A1.5,1.5 0 0,1 15.5,6A1.5,1.5 0 0,1 14,7.5A1.5,1.5 0 0,1 12.5,6A1.5,1.5 0 0,1 14,4.5Z" />
    </svg>
  );
}
