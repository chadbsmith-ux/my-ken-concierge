import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRINCESS_PACKAGES } from '../constants';
import { PackageInclusion, PrincessPackage } from '../types';

const InclusionItem: React.FC<{ inclusion: PackageInclusion }> = ({ inclusion }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-stone-800/50 rounded-xl overflow-hidden bg-stone-950/30">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left p-3 flex items-start gap-3 transition-all hover:bg-stone-800/30"
      >
        <svg 
          className={`w-4 h-4 mt-0.5 text-ken-pink transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
        </svg>
        <span className={`text-sm font-medium transition-colors ${isExpanded ? 'text-white' : 'text-stone-400'}`}>
          {inclusion.title}
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-40 border-t border-stone-800/30' : 'max-h-0'}`}>
        <p className="p-4 text-xs text-stone-500 leading-relaxed italic">
          {inclusion.detail}
        </p>
      </div>
    </div>
  );
};

const Packages: React.FC = () => {
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handleBookPackage = async (pkg: PrincessPackage) => {
    setLoadingId(pkg.id);
    try {
      const priceNumeric = parseFloat(pkg.priceRange.replace(/[^0-9.]/g, ''));
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          price: priceNumeric,
          packageName: pkg.name,
          packageId: pkg.id
        }),
      });

      const { url, error } = await response.json();
      if (error) throw new Error(error);
      if (url) window.location.href = url;
    } catch (err) {
      console.error('Checkout error:', err);
      alert('Failed to initiate booking. Please contact our concierge.');
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif-elegant mb-6 italic">Princess <span className="text-ken-pink">Packages</span></h1>
          <p className="text-stone-400 text-xl max-w-2xl mx-auto">Skip the planning and step directly into a curated fairytale. Choose from our most requested storybook experiences.</p>
        </div>

        <div className="space-y-12">
          {PRINCESS_PACKAGES.map((pkg, idx) => (
            <div 
              key={pkg.id} 
              className={`flex flex-col lg:flex-row bg-stone-900 rounded-3xl overflow-hidden border border-stone-800 hover:border-pink-500/30 transition-all ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/2 h-[400px] lg:h-auto overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.name} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="text-pink-500 font-bold tracking-widest uppercase mb-4 text-sm">{pkg.priceRange} Package</div>
                <h2 className="text-3xl md:text-4xl font-serif-elegant text-white mb-6 italic">{pkg.name}</h2>
                <p className="text-stone-400 text-lg mb-8 leading-relaxed italic">"{pkg.description}"</p>
                <div className="mb-10">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-ken-pink"></span> What's Included (Tap to reveal details)
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {pkg.includes.map((inclusion, i) => (
                      <InclusionItem key={i} inclusion={inclusion} />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => handleBookPackage(pkg)}
                    disabled={loadingId === pkg.id}
                    className="bg-white text-stone-950 px-8 py-4 rounded-full font-black text-center transition-all hover:bg-ken-pink hover:text-white disabled:opacity-50 disabled:cursor-wait"
                  >
                    {loadingId === pkg.id ? 'Securing Spot...' : 'Book This Package'}
                  </button>
                  <Link 
                    to="/design-my-date" 
                    className="border border-stone-700 text-stone-400 px-8 py-4 rounded-full font-bold text-center hover:bg-stone-800 transition-all"
                  >
                    Customize Further
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;