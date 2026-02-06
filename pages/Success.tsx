import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const Success: React.FC = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <div className="min-h-screen pt-28 pb-20 bg-black flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-stone-900/40 border border-stone-800 p-12 rounded-[3rem] text-center backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="w-20 h-20 bg-pink-500/20 border border-pink-500/30 rounded-full flex items-center justify-center mx-auto mb-10">
          <svg className="w-10 h-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-4xl md:text-6xl font-serif-elegant text-white mb-6 italic">Booking Confirmed</h1>
        <p className="text-xl text-stone-300 mb-10 leading-relaxed font-light">
          Your storybook moment is now in motion. A personal concierge will contact you within 2 hours to finalize the details and introduce you to your Ken.
        </p>

        <div className="bg-black/50 border border-stone-800 p-6 rounded-2xl mb-12 text-left">
          <p className="text-stone-500 text-[10px] uppercase tracking-widest font-black mb-2">Order Reference</p>
          <p className="text-white font-mono text-sm break-all">{sessionId || 'N/A'}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link 
            to="/" 
            className="bg-pink-500 text-white px-10 py-4 rounded-full font-black hover:bg-pink-400 transition-all shadow-xl"
          >
            Return Home
          </Link>
          <Link 
            to="/kens" 
            className="border border-stone-700 text-stone-400 px-10 py-4 rounded-full font-bold hover:bg-stone-800 transition-all"
          >
            View the Roster
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;