import React from 'react';
import { motion } from 'motion/react';
import { COMPANIES } from '../constants';

export const About = () => {
  return (
    <section id="story" className="py-24 bg-brand-dark overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-template-columns-[1fr_1.2fr] gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter">
              Precision <br />
              Performance <br />
              <span className="text-brand-accent">Integrity</span>
            </h2>

            <div className="space-y-6">
              <p className="text-xl font-bold text-white leading-tight">
                Aussie Custom Homes is redefining construction excellence in the Australian market.
              </p>
              <p className="text-white/50 leading-relaxed font-medium">
                With a footprint spanning major metropolitan hubs, our ambition is to deliver an unwavering quality guarantee. We merge traditional expertise with modern construction intelligence to create spaces that define future living.
              </p>
            </div>


          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-none shadow-[40px_40px_0px_0px_#F1CB44]">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                alt="Modern Office Architecture"
                className="w-full h-full object-cover"
              />
            </div>
            {/* License Badges */}
            <div className="absolute -bottom-8 -left-8 bg-brand-gray border border-white/5 p-8 text-white hidden md:block shadow-2xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-brand-accent">Registrations</p>
              <div className="grid grid-columns-2 gap-x-8 gap-y-4">
                {COMPANIES.map(comp => (
                  <div key={comp.name}>
                    <p className="text-[9px] font-medium opacity-50 uppercase">{comp.name}</p>
                    <p className="text-xs font-bold leading-none">{comp.acn}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
