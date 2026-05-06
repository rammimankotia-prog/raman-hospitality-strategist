import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, MapPin, Phone, MessageSquare, Clock, Globe } from 'lucide-react';

export default function ContactSection() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-min"
    >
      {/* Contact Form Card */}
      <div className="md:col-span-8 md:row-span-6 bento-card">
        <div className="card-title">Consultation Request</div>
        <h3 className="text-3xl font-serif mb-8 leading-tight">Start Your Digital Property Audit <span className="text-accent italic">Today</span>.</h3>
        
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold text-text-dim tracking-widest pl-1">Property Name / Your Name</label>
            <input 
              type="text" 
              className="w-full bg-white/5 border border-border rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-accent transition-all hover:bg-white/10" 
              placeholder="Godwin Group / Raman" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold text-text-dim tracking-widest pl-1">Email Address</label>
            <input 
              type="email" 
              className="w-full bg-white/5 border border-border rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-accent transition-all hover:bg-white/10" 
              placeholder="rammimankotia@gmail.com" 
            />
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-[10px] uppercase font-bold text-text-dim tracking-widest pl-1">Primary Challenge</label>
            <select className="w-full bg-white/10 border border-border rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-accent appearance-none cursor-pointer">
              <option className="bg-bg">High OTA Commissions Audit</option>
              <option className="bg-bg">Direct Booking Setup</option>
              <option className="bg-bg">Website UI/UX & SEO</option>
              <option className="bg-bg">Full Revenue Management</option>
            </select>
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-[10px] uppercase font-bold text-text-dim tracking-widest pl-1">Message / Requirements</label>
            <textarea 
              className="w-full bg-white/5 border border-border rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-accent transition-all min-h-[150px] resize-none hover:bg-white/10" 
              placeholder="Tell us about the challenges your property is facing..."
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <button className="w-full bg-accent text-bg py-5 rounded-xl font-black text-xs uppercase tracking-[0.3em] shadow-2xl shadow-accent/20 hover:scale-[1.01] transition-transform active:scale-[0.99] group flex items-center justify-center gap-4">
              Send Audit Request <MessageSquare className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </form>
      </div>

      {/* Quick Contact Links */}
      <div className="md:col-span-4 md:row-span-4 bento-card bg-card-bg/50">
        <div className="card-title">Direct Connection</div>
        <div className="mt-8 space-y-8">
          <ContactItem 
            icon={<Phone className="w-5 h-5" />} 
            label="WhatsApp / Call" 
            value="+91 97XXXXXX73" 
            sub="Raman Mankotia"
          />
          <ContactItem 
            icon={<Mail className="w-5 h-5" />} 
            label="Professional Email" 
            value="rammimankotia@gmail.com" 
          />
          <ContactItem 
            icon={<Linkedin className="w-5 h-5" />} 
            label="LinkedIn Strategy" 
            value="Raman Mankotia" 
          />
        </div>
      </div>

      {/* Office/Location Detail */}
      <div className="md:col-span-4 md:row-span-2 bento-card bg-blue-cta/5 border-blue-cta/20 flex flex-col justify-between">
         <div className="flex justify-between items-start">
            <MapPin className="w-6 h-6 text-blue-cta opacity-60" />
            <div className="text-[8px] font-bold text-blue-cta uppercase tracking-widest">Base Operations</div>
         </div>
         <div>
            <div className="text-lg font-bold text-white mb-1">Jammu & Kashmir</div>
            <p className="text-[10px] text-text-dim uppercase tracking-widest">Servicing Pan India Clients</p>
         </div>
      </div>

      {/* Availability Card */}
      <div className="md:col-span-12 md:row-span-1 bento-card flex flex-col md:flex-row justify-between items-center bg-accent text-bg py-4">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 opacity-60" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Typical Response Time: &lt; 4 Hours</span>
        </div>
        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <Globe className="w-4 h-4 opacity-60" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Available for Remote & On-Site Consultation</span>
        </div>
      </div>
    </motion.div>
  );
}

function ContactItem({ icon, label, value, sub }: { icon: React.ReactNode, label: string, value: string, sub?: string }) {
  return (
    <div className="flex items-start gap-4 group cursor-pointer">
      <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <div className="text-[8px] uppercase font-bold text-text-dim tracking-widest mb-1">{label}</div>
        <div className="text-sm font-bold text-text-main group-hover:text-accent transition-colors">{value}</div>
        {sub && <div className="text-[10px] text-text-dim italic mt-0.5">{sub}</div>}
      </div>
    </div>
  );
}
