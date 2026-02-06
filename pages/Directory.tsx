
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { KENS } from '../constants';

interface Archetype {
  id: string;
  title: string;
  description: string;
  tagMapping: string[];
}

const ARCHETYPES: Archetype[] = [
  { 
    id: 'scholar', 
    title: 'Gentleman Scholar', 
    description: 'Intellectual conversation, museum dates, wine knowledge, refined presence',
    tagMapping: ['Intellectual', 'Sophisticated']
  },
  { 
    id: 'wallstreet', 
    title: 'Wall Street Ken', 
    description: 'Business savvy, power networking, confident in corporate settings',
    tagMapping: ['Gentlemanly', 'Sophisticated']
  },
  { 
    id: 'adventure', 
    title: 'Adventure Ken', 
    description: 'Travel companion, outdoor activities, spontaneous spirit, global experience',
    tagMapping: ['Adventurous']
  },
  { 
    id: 'wellness', 
    title: 'Wellness Ken', 
    description: 'Fitness-focused, mindful presence, spa-ready, healthy lifestyle advocate',
    tagMapping: ['Low-key']
  },
  { 
    id: 'creative', 
    title: 'Creative Ken', 
    description: 'Arts & culture enthusiast, gallery openings, theater nights, artistic soul',
    tagMapping: ['Creative']
  },
  { 
    id: 'party', 
    title: 'Party Ken', 
    description: 'Nightlife expert, high-energy, social butterfly, rooftop bars & events',
    tagMapping: ['Party']
  },
];

const Directory: React.FC = () => {
  const [filterCity, setFilterCity] = useState('');
  const [activeArchetype, setActiveArchetype] = useState<string | null>(null);

  const filteredKens = useMemo(() => {
    return KENS.filter(k => {
      const matchesCity = !filterCity || k.city.toLowerCase().includes(filterCity.toLowerCase());
      
      let matchesArchetype = true;
      if (activeArchetype) {
        const archetype = ARCHETYPES.find(a => a.id === activeArchetype);
        if (archetype) {
          // Check if any of the archetype's mapped tags exist in the Ken's vibeTags
          matchesArchetype = archetype.tagMapping.some(tag => k.vibeTags.includes(tag));
        }
      }
      
      return matchesCity && matchesArchetype;
    });
  }, [filterCity, activeArchetype]);

  return (
    <div className="min-h-screen pt-28 pb-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-20 text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-serif-elegant mb-6 italic">
            Meet the <span className="text-ken-pink">Kens</span>
          </h1>
          <p className="text-stone-400 text-xl max-w-2xl leading-relaxed">
            Browse our curated roster of premium companions. Every Ken is strictly vetted and background-checked for your peace of mind.
          </p>
        </div>

        {/* Archetypes Section */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif-elegant text-white mb-2 italic">Choose Your Ken Archetype</h2>
              <p className="text-stone-500">Every Ken brings his own energy. Filter by the vibe you're seeking.</p>
            </div>
            {activeArchetype && (
              <button 
                onClick={() => setActiveArchetype(null)}
                className="text-ken-pink text-sm font-black uppercase tracking-widest hover:underline"
              >
                Clear Archetype Filter
              </button>
            )}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARCHETYPES.map((arch) => (
              <button
                key={arch.id}
                onClick={() => setActiveArchetype(arch.id === activeArchetype ? null : arch.id)}
                className={`text-left p-8 rounded-[2rem] border transition-all duration-500 group relative overflow-hidden ${
                  activeArchetype === arch.id 
                    ? 'border-pink-400 bg-pink-500/10 ring-1 ring-pink-400/50' 
                    : 'border-stone-800 bg-stone-900/40 hover:border-pink-500/50 hover:bg-stone-900/60'
                }`}
              >
                {/* Accent Decoration */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full`} />
                
                <h3 className={`text-xl font-serif-elegant mb-3 transition-colors ${
                  activeArchetype === arch.id ? 'text-pink-500' : 'text-white group-hover:text-pink-400'
                }`}>
                  {arch.title}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed italic">
                  "{arch.description}"
                </p>
                
                {activeArchetype === arch.id && (
                  <div className="mt-4 inline-flex items-center text-[10px] font-black uppercase tracking-widest text-pink-500">
                    <span className="w-4 h-[1px] bg-pink-500 mr-2"></span> Active Filter
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Directory Filter & Grid */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <h2 className="text-3xl font-serif-elegant text-white italic">Available Roster</h2>
          <div className="w-full md:w-80">
            <label className="block text-[10px] uppercase tracking-[0.2em] font-black text-stone-500 mb-3">Filter by City</label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Enter city (e.g. NYC, LA...)"
                className="w-full bg-stone-950 border border-stone-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-pink-500 transition-colors placeholder:text-stone-800"
                value={filterCity}
                onChange={e => setFilterCity(e.target.value)}
              />
              <svg className="w-5 h-5 text-stone-700 absolute right-6 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredKens.map(ken => (
            <div key={ken.id} className="group relative bg-stone-900 border border-stone-800 rounded-[2rem] overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-pink-500/30">
              <div className="aspect-[3/4] overflow-hidden relative">
                <img 
                  src={ken.photo} 
                  alt={ken.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <h3 className="text-2xl font-serif-elegant text-white leading-none mb-1">{ken.name}</h3>
                    <p className="text-pink-500 font-black text-[10px] tracking-widest uppercase">{ken.city}</p>
                  </div>
                  <div className="text-stone-500 text-xs font-black uppercase tracking-tighter">{ken.ageRange}</div>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {ken.vibeTags.map(tag => (
                    <span key={tag} className="text-[9px] uppercase tracking-wider font-black bg-stone-800/80 text-stone-300 px-2.5 py-1 rounded-full border border-stone-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-stone-400 text-xs mb-6 line-clamp-2 italic leading-relaxed">"{ken.bio}"</p>
                <Link 
                  to="/design-my-date"
                  className="block w-full text-center bg-white text-stone-950 font-black py-4 rounded-2xl hover:bg-ken-pink hover:text-white transition-all uppercase tracking-widest text-[10px]"
                >
                  Book {ken.name}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredKens.length === 0 && (
          <div className="text-center py-24 bg-stone-900/20 rounded-[3rem] border border-dashed border-stone-800">
            <div className="mb-6 inline-block p-4 bg-stone-800/50 rounded-full">
               <svg className="w-10 h-10 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <p className="text-stone-500 text-2xl font-serif-elegant italic">No Kens matched your specific criteria...</p>
            <p className="text-stone-600 mt-2 mb-8">Try adjusting your filters or contact our private concierge.</p>
            <Link 
              to="/contact" 
              className="text-pink-500 font-black uppercase tracking-widest text-xs hover:text-pink-400 transition-colors border-b-2 border-pink-500/20 pb-1"
            >
              Contact Concierge
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Directory;
