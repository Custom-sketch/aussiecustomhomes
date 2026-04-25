import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';
import { PropertySearch } from './PropertySearch';

export const Hero = ({ 
  isSearchOpen, 
  setIsSearchOpen, 
  onSearch 
}: { 
  isSearchOpen: boolean, 
  setIsSearchOpen: (val: boolean) => void,
  onSearch: (filters: { 
    query: string, 
    category: string, 
    beds: string, 
    baths: string, 
    cars: string,
    keywords: string 
  }) => void
}) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60 scale-105"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-building-exterior-441-large.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-brand-dark/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full text-white">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl sm:text-6xl md:text-[6rem] font-black leading-[0.9] mb-8 uppercase tracking-tighter"
            >
              Building <br />
              Excellence <br />
              <span className="text-brand-accent">in Construction</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xs sm:text-sm md:text-base font-medium text-white/90 mb-10 max-w-2xl leading-relaxed"
            >
              Aussie Custom Homes is a distinguished and high-achieving development and construction group. For 25 years, we have dedicated ourselves to delivering quality properties to all our customers. We are proud to be a key industry player, championing innovation and value in everything we do.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
};
