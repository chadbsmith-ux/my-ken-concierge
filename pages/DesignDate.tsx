
import React, { useState, useEffect } from 'react';

const DesignDate: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    city: '',
    date: '',
    duration: '4h',
    setting: '',
    otherSetting: '',
    kenAge: '30-40',
    vibes: [] as string[],
    otherVibe: '',
    outfit: 'Sharp business suit',
    customStyle: '',
    outfitBudget: '',
    fantasy: ''
  });

  const [errors, setErrors] = useState<{ fullName?: string; email?: string }>({});

  const settingsOptions = [
    'Fine dining', 'Gala / black-tie events', 'Shopping and spoiling', 
    'Travel / weekend away', 'Spa and wellness', 'Sports / active experiences', 
    'Arts and culture', 'Casual fun', 'Other'
  ];

  const durationOptions = [
    { id: '2h', label: '2 Hour Block', description: 'Quick & Charming' },
    { id: '4h', label: '4 Hour Block', description: 'Standard Evening' },
    { id: '6h', label: '6 Hour Block', description: 'Extended Night Out' },
    { id: 'half-day', label: 'Half Day', description: 'Afternoon & Evening' },
    { id: 'full-day', label: 'Full Day', description: 'Complete Experience' },
    { id: 'weekend', label: 'Weekend', description: 'Storybook Getaway' }
  ];

  const vibeOptions = [
    'Gentlemanly', 'Adventurous', 'Romantic', 'Intellectual', 'Playful', 
    'Sophisticated', 'Creative', 'Party', 'Low-key', 
    'Nurturing', 'Witty', 'Protective', 'Stoic', 'Ambitious', 'Charismatic',
    'Chivalrous', 'Enigmatic', 'Devoted', 'Worldly', 'Gallant', 'Other'
  ];

  const outfitOptions = ['Black-tie tux', 'Sharp business suit', 'Smart casual', 'Trendy street style', 'Resort wear'];

  // Scroll to top on step change for mobile friendliness and progressive feel
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  const validateStep1 = () => {
    const newErrors: { fullName?: string; email?: string } = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    // Identity check required on step 1 before any progression
    if (step === 1 && !validateStep1()) return;
    setStep(s => Math.min(s + 1, 7));
  };
  
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleToggleVibe = (v: string) => {
    setFormData(prev => ({
      ...prev,
      vibes: prev.vibes.includes(v) 
        ? prev.vibes.filter(x => x !== v) 
        : [...prev.vibes, v]
    }));
  };

  const renderStep = () => {
    switch (step) {
      case 1: // Identity Step
        return (
          <div className="space-y-8 animate-step-in">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-serif-elegant mb-4 text-white italic tracking-tight">Who are we designing for?</h2>
              <p className="text-stone-400 text-lg italic">Let's start with the basics. Your details remain private.</p>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-500 font-black mb-3">Your Full Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Isabella Sterling"
                  className={`w-full bg-stone-950 border ${errors.fullName ? 'border-red-500' : 'border-stone-800'} rounded-2xl px-6 py-5 text-white placeholder:text-stone-800 focus:outline-none focus:border-ken-pink transition-all`}
                  value={formData.fullName}
                  onChange={e => {
                    setFormData({...formData, fullName: e.target.value});
                    if (errors.fullName) setErrors({...errors, fullName: undefined});
                  }}
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-2 italic">{errors.fullName}</p>}
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-500 font-black mb-3">Email Address</label>
                <input 
                  type="email" 
                  placeholder="isabella@example.com"
                  className={`w-full bg-stone-950 border ${errors.email ? 'border-red-500' : 'border-stone-800'} rounded-2xl px-6 py-5 text-white placeholder:text-stone-800 focus:outline-none focus:border-ken-pink transition-all`}
                  value={formData.email}
                  onChange={e => {
                    setFormData({...formData, email: e.target.value});
                    if (errors.email) setErrors({...errors, email: undefined});
                  }}
                />
                {errors.email && <p className="text-red-500 text-xs mt-2 italic">{errors.email}</p>}
              </div>
            </div>
          </div>
        );
      case 2: // Logistics
        return (
          <div className="space-y-8 animate-step-in">
            <h2 className="text-4xl md:text-5xl font-serif-elegant mb-4 text-white italic tracking-tight text-center md:text-left">When and where?</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-500 font-black mb-3">City of Choice</label>
                <input 
                  type="text" 
                  placeholder="e.g. Manhattan, NY"
                  className="w-full bg-stone-950 border border-stone-800 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-ken-pink transition-all"
                  value={formData.city}
                  onChange={e => setFormData({...formData, city: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-500 font-black mb-3">Date Selection</label>
                <div className="relative group">
                  <input 
                    type="date" 
                    className="w-full bg-stone-950 border border-stone-800 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-ken-pink transition-all cursor-pointer block"
                    value={formData.date}
                    onChange={e => setFormData({...formData, date: e.target.value})}
                  />
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-stone-600 group-hover:text-pink-500 transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-500 font-black mb-3">Time Investment</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {durationOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setFormData({...formData, duration: opt.id})}
                      className={`px-6 py-5 rounded-2xl border text-left transition-all group ${
                        formData.duration === opt.id 
                          ? 'border-ken-pink bg-ken-pink/5 text-ken-pink ring-1 ring-ken-pink/20' 
                          : 'bg-stone-950 border-stone-800 text-stone-500 hover:border-stone-600'
                      }`}
                    >
                      <div className={`font-bold text-base mb-0.5 ${formData.duration === opt.id ? 'text-white' : 'text-stone-300'}`}>
                        {opt.label}
                      </div>
                      <div className="text-[10px] uppercase tracking-widest font-black opacity-60">
                        {opt.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case 3: // Setting Selection
        return (
          <div className="space-y-8 animate-step-in">
            <h2 className="text-4xl md:text-5xl font-serif-elegant mb-4 text-white italic tracking-tight text-center md:text-left">Choose your setting.</h2>
            <div className="grid grid-cols-1 gap-3">
              {settingsOptions.map(s => (
                <div key={s} className="space-y-3">
                  <button
                    onClick={() => setFormData({...formData, setting: s})}
                    className={`w-full px-6 py-5 rounded-2xl border text-left transition-all flex items-center justify-between group ${
                      formData.setting === s 
                        ? 'bg-ken-pink border-ken-pink text-white shadow-lg' 
                        : 'bg-stone-950 border-stone-800 text-stone-400 hover:border-stone-500'
                    }`}
                  >
                    <span className="font-bold text-lg">{s}</span>
                    {formData.setting === s && (
                      <svg className="w-6 h-6 text-white animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                  {s === 'Other' && formData.setting === 'Other' && (
                    <div className="animate-step-in pt-2">
                      <input 
                        type="text" 
                        placeholder="Describe your unique setting..."
                        className="w-full bg-stone-900 border border-pink-500/50 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-ken-pink transition-all italic"
                        value={formData.otherSetting}
                        onChange={e => setFormData({...formData, otherSetting: e.target.value})}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      case 4: // Personality Multi-select
        return (
          <div className="space-y-8 animate-step-in">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-serif-elegant mb-4 text-white italic tracking-tight">Curate his essence.</h2>
              <p className="text-stone-400 text-lg italic">Select the personality traits that define your companion.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {vibeOptions.map(v => (
                <button
                  key={v}
                  onClick={() => handleToggleVibe(v)}
                  className={`px-5 py-4 rounded-full border text-sm transition-all flex items-center gap-3 ${
                    formData.vibes.includes(v) 
                      ? 'bg-pink-500 border-pink-500 text-white font-black scale-105 shadow-xl shadow-pink-500/20' 
                      : 'bg-stone-950 border-stone-800 text-stone-400 hover:border-stone-500'
                  }`}
                >
                  {v}
                  {formData.vibes.includes(v) && (
                    <span className="bg-white/20 rounded-full p-0.5">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  )}
                </button>
              ))}
            </div>
            {formData.vibes.includes('Other') && (
              <div className="animate-step-in pt-4">
                <label className="block text-xs uppercase tracking-widest text-stone-500 font-black mb-3">Custom Traits</label>
                <input 
                  type="text" 
                  placeholder="e.g. Multilingual, Sarcastic, Master Chef..."
                  className="w-full bg-stone-950 border border-stone-800 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-ken-pink transition-all"
                  value={formData.otherVibe}
                  onChange={e => setFormData({...formData, otherVibe: e.target.value})}
                />
              </div>
            )}
            <div>
              <label className="block text-xs uppercase tracking-widest text-stone-500 font-black mb-3">Age Preference</label>
              <select 
                className="w-full bg-stone-950 border border-stone-800 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-ken-pink transition-all appearance-none cursor-pointer"
                value={formData.kenAge}
                onChange={e => setFormData({...formData, kenAge: e.target.value})}
              >
                <option value="25-35">Early Professional (25 - 35)</option>
                <option value="30-40">The Prime Years (30 - 40)</option>
                <option value="40-50">Distinguished (40 - 50)</option>
                <option value="50+">Classic (50+)</option>
              </select>
            </div>
          </div>
        );
      case 5: // Styling
        return (
          <div className="space-y-8 animate-step-in">
            <h2 className="text-4xl md:text-5xl font-serif-elegant mb-4 text-white italic tracking-tight text-center md:text-left">Dress your Ken.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {outfitOptions.map(style => (
                <button
                  key={style}
                  onClick={() => setFormData({...formData, outfit: style})}
                  className={`px-6 py-6 rounded-2xl border text-left transition-all ${
                    formData.outfit === style 
                      ? 'border-ken-pink bg-ken-pink/10 text-ken-pink ring-1 ring-ken-pink/30' 
                      : 'bg-stone-950 border-stone-800 text-stone-400'
                  }`}
                >
                  <div className={`font-bold mb-1 ${formData.outfit === style ? 'text-white' : 'text-stone-300'}`}>{style}</div>
                </button>
              ))}
            </div>
            <div className="space-y-6 pt-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-500 font-black mb-3">Custom Style Description</label>
                <input 
                  type="text" 
                  placeholder="e.g. 90s Minimalist, Vintage Hollywood, Avant-Garde..."
                  className="w-full bg-stone-950 border border-stone-800 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-ken-pink transition-all"
                  value={formData.customStyle}
                  onChange={e => setFormData({...formData, customStyle: e.target.value})}
                />
              </div>
              <div className="p-8 bg-pink-500/5 rounded-[2.5rem] border border-pink-500/10">
                <h4 className="text-pink-500 font-black text-[10px] uppercase tracking-widest mb-3">Shopping & Curation Budget</h4>
                <p className="text-stone-500 text-xs mb-6 italic">Your Ken will procure a bespoke ensemble for the occasion.</p>
                <div className="relative">
                  <span className="absolute left-6 top-1/2 -translate-y-1/2 text-pink-500 font-bold">$</span>
                  <input 
                    type="number" 
                    placeholder="Enter custom amount..."
                    className="w-full bg-black border border-stone-800 rounded-2xl pl-12 pr-6 py-5 text-white placeholder:text-stone-800 focus:outline-none focus:border-ken-pink transition-all"
                    value={formData.outfitBudget}
                    onChange={e => setFormData({...formData, outfitBudget: e.target.value})}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case 6: // Narrative
        return (
          <div className="space-y-8 animate-step-in">
            <h2 className="text-4xl md:text-5xl font-serif-elegant mb-4 text-white italic tracking-tight text-center md:text-left">The narrative.</h2>
            <div>
              <label className="block text-xs uppercase tracking-widest text-stone-500 font-black mb-4">Describe your storybook date fantasy</label>
              <textarea 
                rows={8}
                placeholder="Paint the picture. The dialogue, the lingering looks, the specific feeling you want to capture..."
                className="w-full bg-stone-950 border border-stone-800 rounded-[2.5rem] px-8 py-8 text-white focus:outline-none focus:border-ken-pink transition-all leading-relaxed italic placeholder:text-stone-800 shadow-inner"
                value={formData.fantasy}
                onChange={e => setFormData({...formData, fantasy: e.target.value})}
              />
            </div>
          </div>
        );
      case 7: // Review
        return (
          <div className="space-y-8 animate-step-in">
            <h2 className="text-4xl md:text-5xl font-serif-elegant mb-6 text-white italic tracking-tight text-center md:text-left">Final Review.</h2>
            <div className="bg-stone-950 rounded-[3rem] border border-stone-800 overflow-hidden shadow-2xl">
              <div className="p-8 md:p-12 space-y-5">
                <div className="flex justify-between items-center py-3 border-b border-stone-900">
                  <span className="text-stone-500 text-xs uppercase tracking-widest font-black">Designed For</span>
                  <span className="text-white font-serif-elegant italic text-xl">{formData.fullName}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-stone-900">
                  <span className="text-stone-500 text-xs uppercase tracking-widest font-black">Logistics</span>
                  <span className="text-white font-bold">{formData.city || 'Private Location'} • {formData.date || 'TBD'}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-stone-900">
                  <span className="text-stone-500 text-xs uppercase tracking-widest font-black">Vibe Setting</span>
                  <span className="text-pink-500 font-bold">{formData.setting === 'Other' ? formData.otherSetting : formData.setting}</span>
                </div>
                <div className="flex justify-between items-start py-3 border-b border-stone-900">
                  <span className="text-stone-500 text-xs uppercase tracking-widest font-black">The Personality</span>
                  <span className="text-white font-medium text-right text-sm max-w-[200px]">
                    {formData.vibes.filter(v => v !== 'Other').join(', ')} 
                    {formData.otherVibe && ` (+ ${formData.otherVibe})`}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-stone-500 text-xs uppercase tracking-widest font-black">Ken Style</span>
                  <span className="text-white font-medium">{formData.outfit}</span>
                </div>
              </div>
            </div>
            <div className="p-10 bg-pink-500/10 rounded-[3rem] border border-pink-500/20 text-center relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              <p className="text-stone-300 italic text-base leading-relaxed relative z-10">
                "Our private concierge is now standing by to curate your match. We will contact you within 2 hours to confirm details and finalize your storybook moment."
              </p>
            </div>
            <button className="w-full bg-ken-pink text-white py-7 rounded-3xl text-2xl font-black shadow-[0_30px_60px_rgba(236,72,153,0.3)] hover:bg-rose-600 hover:scale-[1.02] transition-all active:scale-[0.98]">
              Send Design to Concierge
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-black">
      <div className="max-w-3xl mx-auto px-4">
        {/* Progress Header */}
        <div className="mb-14 text-center">
          <h1 className="text-pink-500 font-black text-[11px] uppercase tracking-[0.5em] mb-5">Step {step} of 7</h1>
          <div className="flex justify-center items-center gap-3 mb-6">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div 
                key={i}
                className={`h-2 rounded-full transition-all duration-700 ${
                  i === step ? 'w-14 bg-ken-pink' : i < step ? 'w-8 bg-stone-700' : 'w-8 bg-stone-900'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Card Container */}
        <div className="relative">
          <div className="bg-stone-900/40 border border-stone-800 rounded-[3.5rem] p-8 md:p-16 shadow-2xl backdrop-blur-3xl min-h-[550px] flex flex-col relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-pink-500/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-pink-500/5 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="flex-grow">
              {renderStep()}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-14 pt-10 border-t border-stone-800/60">
              {step > 1 ? (
                <button 
                  onClick={prevStep}
                  className="group flex items-center gap-3 text-stone-500 font-black uppercase tracking-[0.2em] text-xs hover:text-white transition-all py-4 px-2"
                >
                  <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  Back
                </button>
              ) : <div />}
              
              {step < 7 && (
                <button 
                  onClick={nextStep}
                  className="bg-white text-stone-950 px-10 py-5 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-ken-pink hover:text-white transition-all shadow-2xl active:scale-95 flex items-center gap-3"
                >
                  Continue
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
        
        {/* Helper Footer */}
        <div className="mt-10 text-center">
           <p className="text-stone-600 text-[10px] uppercase tracking-widest font-black flex items-center justify-center gap-2">
             <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
             Bank-Level Encryption Enabled
           </p>
        </div>
      </div>
    </div>
  );
};

export default DesignDate;
