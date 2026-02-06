
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-[95vh] flex items-center overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 bg-black">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-70 scale-105 animate-slow-zoom"
            style={{ 
              backgroundImage: `url('https://i.imgur.com/oRCxrUH.jpg')`,
              backgroundPosition: 'center 30%'
            }}
            role="img"
            aria-label="Luxury rooftop sunset with champagne"
          ></div>
          
          {/* Gradients for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
              <span className="text-pink-500 text-xs font-black uppercase tracking-[0.3em]">The Elite Social Concierge</span>
            </div>
            
            <h1 className="font-serif-elegant text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.9] tracking-tighter text-white">
              Design Your <br />
              <span className="italic pink-gradient">Storybook</span> <br />
              Moment.
            </h1>
            
            <p className="text-xl md:text-2xl text-stone-200 max-w-xl mb-12 leading-relaxed font-light drop-shadow-lg">
              Premium companionship redefined for the modern woman. From rooftop cocktails to black-tie galas, your perfect <span className="text-pink-500 font-bold italic">Ken</span> is waiting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/design-my-date"
                className="bg-pink-500 text-white px-12 py-6 rounded-full text-xl font-black hover:bg-pink-400 transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(236,72,153,0.3)] text-center"
              >
                Design My Date
              </Link>
              <Link
                to="/kens"
                className="group flex items-center justify-center gap-4 px-12 py-6 rounded-full border border-stone-400 text-white text-xl font-bold hover:bg-white/10 backdrop-blur-sm transition-all text-center"
              >
                Meet the Roster
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Detail */}
        <div className="absolute bottom-10 right-10 hidden lg:block">
          <div className="p-6 border border-stone-700 rounded-2xl backdrop-blur-xl bg-black/40 max-w-xs">
            <p className="text-pink-500 font-black text-[10px] uppercase tracking-widest mb-2">Current Vibe</p>
            <p className="text-white text-sm italic font-serif-elegant">"A golden hour sunset over Manhattan, followed by private rooftop service."</p>
          </div>
        </div>
      </div>

      {/* Stats/Quick Info */}
      <section className="py-12 bg-stone-950 border-y border-stone-900">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Vetted Kens', val: '500+' },
            { label: 'US Cities', val: '12' },
            { label: 'Luxury Partners', val: '80+' },
            { label: 'Success Rate', val: '99%' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-serif-elegant text-white mb-1">{stat.val}</div>
              <div className="text-[10px] uppercase tracking-widest text-stone-600 font-black">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-serif-elegant mb-6 italic">The My <span className="text-pink-500">Ken</span> Experience</h2>
              <p className="text-stone-400 text-lg leading-relaxed">We don't just provide companionship; we curate cinematic social experiences tailored to your highest standards.</p>
            </div>
            <Link to="/how-it-works" className="text-pink-500 font-black uppercase tracking-widest text-xs border-b border-pink-500/30 pb-1 hover:text-pink-400 transition-colors">
              The Protocol
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Select City', desc: 'Explore the elite roster in your metropolitan hub.' },
              { step: '02', title: 'Set the Vibe', desc: 'Define the aesthetic and narrative of your date.' },
              { step: '03', title: 'Secure Match', desc: 'Seamless, discreet booking with concierge oversight.' },
              { step: '04', title: 'Live the Moment', desc: 'The storybook experience you\'ve envisioned.' }
            ].map((item, idx) => (
              <div key={idx} className="relative group p-10 rounded-[2.5rem] bg-stone-900/30 border border-stone-900 hover:border-pink-500/30 transition-all duration-500">
                <div className="text-pink-500 font-black text-xs mb-8 tracking-[0.3em]">{item.step}</div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-pink-500 transition-colors">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed italic">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-32 bg-stone-950">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-block p-5 bg-pink-500/10 rounded-full mb-10 border border-pink-500/20">
            <svg className="w-8 h-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif-elegant mb-10 italic">Excellence & Discretion</h2>
          <p className="text-xl text-stone-400 leading-relaxed mb-16 font-light max-w-3xl mx-auto">
            Every Ken is rigorously vetted through professional background checks and internal charm assessments. We guarantee total privacy and a strictly professional standard of luxury companionship.
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-stone-500 font-black uppercase tracking-[0.2em] text-[10px]">
            <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-pink-500 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.8)]"></span> 100% Identity Verified</div>
            <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-pink-500 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.8)]"></span> Multi-Step Background Checks</div>
            <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-pink-500 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.8)]"></span> Privacy Shield Protection</div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default Home;
