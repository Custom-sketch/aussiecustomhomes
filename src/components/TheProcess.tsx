import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../constants';

export const TheProcess = () => {
  return (
    <section id="process" className="py-24 bg-brand-gray/50 text-white border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.4em] mb-4 text-brand-accent">The Journey</p>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              How We <br />
              <span className="text-brand-accent">Deliver</span>
            </h2>
          </div>
          <p className="max-w-md text-white/50 text-lg leading-relaxed pb-2">
            A structured, transparent process designed to give you peace of mind from first contact to final handover.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 px-2">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-12 group"
            >
              <div className="absolute top-0 left-0 text-3xl font-black text-brand-accent/10 group-hover:text-brand-accent/100 transition-colors duration-500">
                {step.id}
              </div>
              <h3 className="text-xl font-black uppercase mb-4 tracking-tight group-hover:text-brand-accent transition-colors">
                {step.title}
              </h3>
              <p className="text-white/50 leading-relaxed font-medium">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
