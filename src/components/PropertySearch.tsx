import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, SlidersHorizontal, X, ChevronDown, Check } from 'lucide-react';
import { cn } from '../lib/utils';

interface SearchFilters {
  bedrooms: string;
  bathrooms: string;
  carSpaces: string;
  landSizeFrom: string;
  landSizeTo: string;
  isNew: boolean;
  outdoorFeatures: string[];
  indoorFeatures: string[];
  climateControl: string[];
  keywords: string;
}

export const PropertySearch = ({ 
  isOpen, 
  setIsOpen, 
  onSearch 
}: { 
  isOpen: boolean, 
  setIsOpen: (val: boolean) => void,
  onSearch: (filters: { 
    query: string, 
    category: string, 
    beds: string, 
    baths: string, 
    cars: string,
    keywords: string 
  }) => void
}) => {
  const [localQuery, setLocalQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [filters, setFilters] = useState<SearchFilters>({
    bedrooms: 'Any',
    bathrooms: 'Any',
    carSpaces: 'Any',
    landSizeFrom: '',
    landSizeTo: '',
    isNew: false,
    outdoorFeatures: [],
    indoorFeatures: [],
    climateControl: [],
    keywords: '',
  });

  const handleSearch = () => {
    onSearch({
      query: localQuery,
      category,
      beds: filters.bedrooms,
      baths: filters.bathrooms,
      cars: filters.carSpaces,
      keywords: filters.keywords
    });
    setIsOpen(false);
    // Smooth scroll to projects section
    const projectsSection = document.getElementById('houses');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFeature = (category: keyof SearchFilters, feature: string) => {
    setFilters(prev => {
      const current = prev[category] as string[];
      if (current.includes(feature)) {
        return { ...prev, [category]: current.filter(f => f !== feature) };
      }
      return { ...prev, [category]: [...current, feature] };
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 mt-12 relative z-40">
      {/* Quick Search Bar */}
      <div className="bg-white p-2 flex flex-col md:flex-row items-center gap-2 shadow-2xl">
        <div className="flex-1 w-full flex items-center bg-gray-50 px-4 md:border-r border-gray-200">
           <span className="text-[10px] font-black uppercase text-gray-400 mr-2 whitespace-nowrap">I am interested in</span>
           <select 
             value={category}
             onChange={(e) => setCategory(e.target.value)}
             className="bg-transparent py-4 text-xs font-bold font-display outline-none cursor-pointer"
           >
              <option>All</option>
              <option>Houses</option>
              <option>Duplex</option>
              <option>Residential</option>
              <option>Apartments</option>
              <option value="Land Only">Land</option>
           </select>
        </div>
        
        <div className="flex-[2] w-full flex items-center bg-gray-50 px-4">
          <Search className="w-4 h-4 text-gray-400 mr-3" />
          <input 
            type="text" 
            placeholder="Search for properties, suburbs, postcodes, etc."
            className="w-full bg-transparent py-4 text-xs font-bold outline-none placeholder:text-gray-400"
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          {localQuery && (
            <button 
              onClick={() => {
                setLocalQuery('');
                onSearch({
                  query: '',
                  category,
                  beds: filters.bedrooms,
                  baths: filters.bathrooms,
                  cars: filters.carSpaces,
                  keywords: filters.keywords
                });
              }}
              className="p-2 bg-gray-100 hover:bg-brand-accent text-gray-400 hover:text-brand-dark transition-all rounded-lg flex items-center gap-2"
            >
              <span className="text-[8px] font-black uppercase tracking-widest px-1">Clear</span>
              <X className="w-3 h-3" />
            </button>
          )}
          <button 
            onClick={() => setIsOpen(true)}
            className="p-2 hover:bg-gray-200 transition-colors rounded-lg ml-2"
          >
            <SlidersHorizontal className="w-4 h-4 text-brand-accent" />
          </button>
        </div>

        <button 
          onClick={handleSearch}
          className="w-full md:w-auto bg-brand-accent text-brand-dark px-10 py-4 text-sm font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all"
        >
          Find Property
        </button>
      </div>

      {/* Advanced Filter Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-dark z-[150] overflow-y-auto pt-24 pb-12 px-6"
          >
            <div className="max-w-4xl mx-auto relative bg-brand-gray border border-white/10 p-8 md:p-12 shadow-2xl">
              <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-6">
                <h2 className="text-2xl font-black uppercase tracking-tighter text-white">Advanced Search Filters</h2>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-white hover:text-brand-accent transition-colors font-black uppercase text-xs bg-white/5 px-4 py-2 rounded-full border border-white/10"
                >
                  Close <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 text-white">
                {/* Selects */}
                <div className="space-y-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Bedrooms</label>
                    <select 
                      value={filters.bedrooms}
                      onChange={(e) => setFilters({...filters, bedrooms: e.target.value})}
                      className="w-full bg-transparent border-b border-white/20 py-2 text-sm font-bold outline-none focus:border-brand-accent transition-colors"
                    >
                      <option className="bg-brand-dark">Any</option>
                      <option className="bg-brand-dark">1+</option>
                      <option className="bg-brand-dark">2+</option>
                      <option className="bg-brand-dark">3+</option>
                      <option className="bg-brand-dark">4+</option>
                      <option className="bg-brand-dark">5+</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Bathrooms</label>
                    <select 
                      value={filters.bathrooms}
                      onChange={(e) => setFilters({...filters, bathrooms: e.target.value})}
                      className="w-full bg-transparent border-b border-white/20 py-2 text-sm font-bold outline-none focus:border-brand-accent transition-colors"
                    >
                      <option className="bg-brand-dark">Any</option>
                      <option className="bg-brand-dark">1+</option>
                      <option className="bg-brand-dark">2+</option>
                      <option className="bg-brand-dark">3+</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Car Spaces</label>
                    <select 
                      value={filters.carSpaces}
                      onChange={(e) => setFilters({...filters, carSpaces: e.target.value})}
                      className="w-full bg-transparent border-b border-white/20 py-2 text-sm font-bold outline-none focus:border-brand-accent transition-colors"
                    >
                      <option className="bg-brand-dark">Any</option>
                      <option className="bg-brand-dark">1+</option>
                      <option className="bg-brand-dark">2+</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Land Size</label>
                    <div className="flex items-center gap-4">
                      <input 
                        type="text" 
                        placeholder="From sqm"
                        className="w-full bg-transparent border-b border-white/20 py-2 text-sm font-bold outline-none focus:border-brand-accent transition-colors"
                      />
                      <input 
                        type="text" 
                        placeholder="To sqm"
                        className="w-full bg-transparent border-b border-white/20 py-2 text-sm font-bold outline-none focus:border-brand-accent transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => setFilters({...filters, isNew: !filters.isNew})}
                      className={cn(
                        "w-5 h-5 border flex items-center justify-center transition-colors",
                        filters.isNew ? "bg-brand-accent border-brand-accent text-brand-dark" : "border-white/30"
                      )}
                    >
                      {filters.isNew && <Check className="w-4 h-4 font-black" />}
                    </button>
                    <span className="text-xs font-bold uppercase tracking-wider">New or Established Property</span>
                  </div>
                </div>

                {/* Features Checklist */}
                <div className="space-y-8">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-4">Outdoor Features</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {['Swimming pool', 'Garage', 'Balcony', 'Outdoor Area'].map(feat => (
                        <button 
                          key={feat}
                          onClick={() => toggleFeature('outdoorFeatures', feat)}
                          className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider group text-left"
                        >
                          <div className={cn(
                            "w-4 h-4 border flex items-center justify-center transition-colors",
                            filters.outdoorFeatures.includes(feat) ? "bg-brand-accent border-brand-accent text-brand-dark" : "border-white/30 group-hover:border-white/60"
                          )}>
                            {filters.outdoorFeatures.includes(feat) && <Check className="w-3 h-3" />}
                          </div>
                          {feat}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-4">Indoor Features</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {['Ensuite', 'Dishwasher', 'Study', 'Built In Robes'].map(feat => (
                        <button 
                          key={feat}
                          onClick={() => toggleFeature('indoorFeatures', feat)}
                          className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider group text-left"
                        >
                          <div className={cn(
                            "w-4 h-4 border flex items-center justify-center transition-colors",
                            filters.indoorFeatures.includes(feat) ? "bg-brand-accent border-brand-accent text-brand-dark" : "border-white/30 group-hover:border-white/60"
                          )}>
                            {filters.indoorFeatures.includes(feat) && <Check className="w-3 h-3" />}
                          </div>
                          {feat}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* More Features */}
                <div className="space-y-8">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-4">Climate Control & Energy</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {['Air Conditioning', 'Solar Panels', 'Heating', 'High Energy Efficiency'].map(feat => (
                        <button 
                          key={feat}
                          onClick={() => toggleFeature('climateControl', feat)}
                          className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider group text-left"
                        >
                          <div className={cn(
                            "w-4 h-4 border flex items-center justify-center transition-colors",
                            filters.climateControl.includes(feat) ? "bg-brand-accent border-brand-accent text-brand-dark" : "border-white/30 group-hover:border-white/60"
                          )}>
                            {filters.climateControl.includes(feat) && <Check className="w-3 h-3" />}
                          </div>
                          {feat}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Keywords</label>
                    <input 
                      type="text"
                      placeholder="Air con pool, garage, solar..."
                      value={filters.keywords}
                      onChange={(e) => setFilters({...filters, keywords: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 px-4 py-4 text-xs font-bold outline-none focus:border-brand-accent"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-16 flex flex-col items-center gap-6">
                <button 
                  onClick={handleSearch}
                  className="bg-brand-accent text-brand-dark px-24 py-6 text-base font-black uppercase tracking-[0.2em] hover:bg-white transition-all shadow-2xl w-full md:w-auto"
                >
                  Find Property Now
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-white/40 hover:text-white transition-colors font-black uppercase text-[10px] tracking-widest px-8 py-4 border border-white/5 hover:border-white/20 rounded-full"
                >
                  <X className="w-4 h-4" /> Cancel & Close Window
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

