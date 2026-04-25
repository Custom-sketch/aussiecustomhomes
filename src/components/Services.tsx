import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hammer, Paintbrush, Ruler, Home, Layers, Box, Wrench, X, HardHat, Shovel } from 'lucide-react';

const SERVICE_DETAILS: Record<string, { icon: any; description: string; points: string[] }> = {
  "Carpentry": {
    icon: Hammer,
    description: "Expert structural and finishing carpentry for residential and commercial projects.",
    points: ["Structural Framing & Roofing", "Internal Fit-outs & Architraves", "Decking & Pergolas", "Lock-up Stage Management"]
  },
  "Bricklaying": {
    icon: Layers,
    description: "Precision masonry work ensuring structural integrity and aesthetic excellence.",
    points: ["Common & Face Brickwork", "Blockwork Systems", "Feature Retaining Walls", "Heritage Masonry Repairs"]
  },
  "Painting and decorating": {
    icon: Paintbrush,
    description: "High-end finishes and color consultation to transform any space.",
    points: ["Interior & Exterior Painting", "Custom Texture Coatings", "Heritage Restoration", "Protective Wood Finishes"]
  },
  "Roofing": {
    icon: Home,
    description: "Complete roofing solutions focused on durability and weatherproofing.",
    points: ["Metal & Tile Installation", "Roof Plumbing & Gutters", "Insulation & Ventilation", "Restoration & Repairs"]
  },
  "Tiling": {
    icon: Box,
    description: "Premium floor and wall tiling with attention to layout and finish.",
    points: ["Bathroom Renovations", "Large Format Floor Tiles", "Kitchen Splashbacks", "Waterproofing Systems"]
  },
  "Gyprocking": {
    icon: Ruler,
    description: "Specialized internal wall and ceiling lining for a perfect smooth finish.",
    points: ["Sheet Installation & Setting", "Custom Bulkheads", "Soundproofing Solutions", "Cornice Installation"]
  },
  "Cabinet Making": {
    icon: Wrench,
    description: "Bespoke joinery and cabinetry tailored to your specific storage needs.",
    points: ["Luxury Kitchen Joinery", "Walk-in Wardrobes", "Custom TV Units", "Commercial Fit-outs"]
  },
  "Concreting": {
    icon: Shovel,
    description: "Professional concrete placement for structural and decorative applications.",
    points: ["House Slabs & Foundations", "Decorative Driveways", "Pool Surrounds", "Stamped & Coloured Finishes"]
  },
  "Plumbing": {
    icon: Wrench,
    description: "Full service residential and commercial plumbing solutions.",
    points: ["Drainage & Civil Works", "Hot Water Systems", "Gas Fitting", "Bathroom & Kitchen Rough-ins"]
  },
  "Landscaping": {
    icon: HardHat,
    description: "Complete outdoor living transformations from concept to completion.",
    points: ["Hardscaping & Paving", "Softscaping & Planting", "Retaining Walls", "Outdoor Kitchen Areas"]
  }
};

export const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const services = Object.keys(SERVICE_DETAILS);

  return (
    <section id="services" className="py-16 bg-brand-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.4em] mb-4 text-brand-accent"
          >
            Specialist Units
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black uppercase tracking-tighter"
          >
            Trade Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-white/50 max-w-2xl mx-auto text-lg"
          >
            Our dedicated team handles every aspect of the build with precision and craft excellence. Click any trade to see more details.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {services.map((service, index) => {
            const Icon = SERVICE_DETAILS[service].icon;
            return (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedService(service)}
                className="group p-6 md:p-10 bg-brand-dark hover:bg-brand-accent transition-all cursor-pointer border border-white/5"
              >
                <div className="mb-4 md:mb-6">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-brand-accent group-hover:text-brand-dark transition-colors" />
                </div>
                <h3 className="text-[10px] md:text-sm font-black uppercase tracking-widest leading-relaxed group-hover:text-brand-dark">
                  {service}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-brand-dark/95 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-brand-dark border border-white/10 p-6 md:p-12 max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 text-white/50 hover:text-white transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-accent rounded-none flex items-center justify-center shrink-0">
                  {React.createElement(SERVICE_DETAILS[selectedService].icon, { className: "w-6 h-6 md:w-8 md:h-8 text-brand-dark" })}
                </div>
                <div>
                  <h3 className="text-xl md:text-3xl font-black uppercase tracking-tighter text-white leading-none">
                    {selectedService}
                  </h3>
                  <div className="w-12 h-1 bg-brand-accent mt-2" />
                </div>
              </div>

              <p className="text-lg md:text-xl text-white font-medium leading-relaxed mb-6 md:mb-8">
                {SERVICE_DETAILS[selectedService].description}
              </p>

              <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                {SERVICE_DETAILS[selectedService].points.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-brand-accent shrink-0" />
                    <span className="text-sm md:text-base text-white/60 font-medium">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <button 
                  onClick={() => {
                    setSelectedService(null);
                    window.location.href = "#contact";
                  }}
                  className="bg-brand-accent text-brand-dark px-8 py-4 font-black uppercase tracking-widest text-sm hover:bg-white transition-all"
                >
                  Inquire Now
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
