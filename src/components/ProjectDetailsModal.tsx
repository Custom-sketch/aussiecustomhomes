import React from 'react';
import { X, MapPin, Bed, Bath, Car, Calendar, Ruler, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../constants';
import { cn } from '../lib/utils';

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailsModal = ({ project, onClose }: ProjectDetailsModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-dark/95 backdrop-blur-xl"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="relative w-full max-w-6xl bg-brand-dark border border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-brand-accent text-brand-dark flex items-center justify-center rounded-full hover:bg-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Section */}
            <div className="w-full md:w-1/2 h-[300px] md:h-auto relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent md:hidden" />
              <div className="absolute bottom-6 left-6 md:hidden">
                <span className="bg-brand-accent text-brand-dark px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                  {project.type}
                </span>
                <h2 className="text-3xl font-black uppercase tracking-tighter text-white mt-2 leading-none">
                  {project.title}
                </h2>
              </div>
            </div>

            {/* Info Section */}
            <div className="flex-1 overflow-y-auto p-8 md:p-16 custom-scrollbar">
              <div className="hidden md:block mb-12">
                <span className="bg-brand-accent text-brand-dark px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                  {project.type}
                </span>
                <h2 className="text-5xl font-black uppercase tracking-tighter text-white mt-4 leading-none">
                  {project.title}
                </h2>
                <div className="flex items-center gap-3 text-brand-accent mt-4 font-bold uppercase tracking-widest text-sm">
                  <MapPin className="w-4 h-4" /> {project.location}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-12">
                {(project.beds || project.baths || project.cars) && (
                  <div className="col-span-2 grid grid-cols-3 md:grid-cols-4 gap-6 bg-white/5 p-6 rounded-lg border border-white/5">
                    {project.beds && (
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-bold uppercase text-white/30 tracking-widest">Bedrooms</span>
                        <div className="flex items-center gap-2 text-white">
                          <Bed className="w-4 h-4 text-brand-accent" />
                          <span className="text-lg font-black">{project.beds}</span>
                        </div>
                      </div>
                    )}
                    {project.baths && (
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-bold uppercase text-white/30 tracking-widest">Bathrooms</span>
                        <div className="flex items-center gap-2 text-white">
                          <Bath className="w-4 h-4 text-brand-accent" />
                          <span className="text-lg font-black">{project.baths}</span>
                        </div>
                      </div>
                    )}
                    {project.cars && (
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-bold uppercase text-white/30 tracking-widest">Car Spaces</span>
                        <div className="flex items-center gap-2 text-white">
                          <Car className="w-4 h-4 text-brand-accent" />
                          <span className="text-lg font-black">{project.cars}</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="space-y-12">
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-brand-accent mb-4 border-b border-white/10 pb-2">Description</h3>
                  <p className="text-white/60 leading-relaxed font-medium">
                    {project.title} in {project.location} represents the pinnacle of {project.type.toLowerCase()} architecture. 
                    This meticulously crafted property features premium finishes, innovative spatial design, and 
                    a seamless integration with its surroundings. Part of the Aussie Custom Homes premium portfolio, 
                    it embodies our commitment to excellence in construction and design.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-widest text-brand-accent mb-4 border-b border-white/10 pb-2">Features</h3>
                    <ul className="space-y-3 text-sm font-bold text-white/70">
                      <li className="flex items-center gap-2">• Premium Finishes</li>
                      <li className="flex items-center gap-2">• Smart Home Ready</li>
                      <li className="flex items-center gap-2">• Sustainable Design</li>
                      <li className="flex items-center gap-2">• Architecturally Designed</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-widest text-brand-accent mb-4 border-b border-white/10 pb-2">Status</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-white/70 font-bold uppercase tracking-widest text-[10px]">
                        <Calendar className="w-4 h-4 text-brand-accent" /> Completed 2024
                      </div>
                      <div className="flex items-center gap-3 text-white/70 font-bold uppercase tracking-widest text-[10px]">
                        <Ruler className="w-4 h-4 text-brand-accent" /> Luxury Collection
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:+61401651269"
                    className="flex-1 bg-brand-accent text-brand-dark py-4 text-center font-black uppercase tracking-widest text-sm hover:bg-white transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" /> Enquire Now
                  </a>
                  <a 
                    href="mailto:admin@thecapitalre.com.au"
                    className="flex-1 border border-white/20 text-white py-4 text-center font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" /> Email Agent
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
