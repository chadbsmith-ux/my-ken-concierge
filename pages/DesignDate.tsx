
import React, { useState } from 'react';
import { Setting } from '../types';

const DesignDate: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    city: '',
    date: '',
    duration: 'evening',
    budget: 'luxury',
    settings: [] as Setting[],
    kenAge: '30-40',
    vibes: [] as string[],
    outfit: 'Sharp business suit',
    outfitBudget: '',
    fantasy: ''
  });

  const settingsOptions: Setting[] = [
    'Fine dining', 'Gala / black-tie events', 'Shopping and spoiling', 
    'Travel / weekend away', 'Spa and wellness', 'Sports / active experiences', 
    'Arts and culture', 'Casual fun'
  ];

  const durationOptions = [
    { id: '2h', label: '2 Hour Block', description: 'Quick & Charming' },
    { id: '4h', label: '4 Hour Block', description: 'Standard Evening' },
    { id: '6h', label: '6 Hour Block', description: 'Extended Night Out' },
    { id: 'half-day', label: 'Half Day', description: 'Afternoon & Evening' },
    { id: 'full-day', label: 'Full Day', description: 'Complete Experience' },
    { id: 'weekend', label: 'Weekend', description: 'Storybook Getaway' }
  ];

  const vibeOptions = ['Gentlemanly', 'Adventurous', 'Romantic', 'Intellectual', 'Playful', 'Sophisticated', 'Creative', 'Party', 'Low-key'];

  const nextStep = () => setStep(s => Math.min(s + 1, 6));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleToggleSetting = (s: Setting) => {
    setFormData(prev => ({
      ...prev,
      settings: prev.settings.includes(s) 
        ? prev.settings.filter(x => x !== s) 
        : [...prev.settings, s]
    }));
  };

  const handleToggleVibe = (v: string) => {
    setFormData(prev => ({
      ...prev,
      vibes: prev.vibes.includes(v) 
        ? prev.vibes.filter(x => x !== v) 
        : [...prev.vibes, v]
    }));
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-black">
      <div className="max-w-3xl mx-auto px-4">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between text-[10px] text-stone-500 mb-2 uppercase tracking-[0.2em] font-black">
            <span>Step {step} of 6</span>
            <span>{Math.round((step / 6) * 100)}% Complete</span>
          </div>
          <div className="h-1 bg-stone-900 rounded-full overflow-hidden">
            <div 
              className="h-full bg-ken-pink transition-all duration-500" 
              style={{ width: `${(step / 6) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-stone-900/40 border border-stone-800 rounded-[2.5rem] p-8 md:p-12 shadow-2xl backdrop-blur-sm">
          {step === 1 && (
            <div className="space-y-8">
              <h2 className="text-4xl font-serif-elegant mb-8 text-white italic tracking-tight">Step 1: City & Timing</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-stone-400 mb-3">Primary US City</label>
                  <input 
                    type="text" 
                    placeholder="e.g. New York, Los Angeles, Chicago..."
                    className="w-full bg-stone-950 border border-stone-800 rounded-2xl px-6 py-4 text-white placeholder:text-stone-700 focus:outline-none focus:border-ken-pink transition-colors"
                    value={formData.city}
                    onChange={e => setFormData({...formData, city: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-400 mb-3">Preferred Date</label>
                  <input 
                    type="date" 
                    className="w-full bg-stone-950 border border-stone-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-ken-pink transition-colors appearance-none"
                    value={formData.date}
                    onChange={e => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-400 mb-3">Duration</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {durationOptions.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setFormData({...formData, duration: opt.id})}
                        className={`px-6 py-4 rounded-2xl border text-left transition-all group ${
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
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-3xl font-serif-elegant mb-6 text-white italic">Step 2: Budget & Setting</h2>
              <div>
                <label className="block text-sm font-medium text-stone-400 mb-4">Preferred Setting (Select multiple)</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {settingsOptions.map(s => (
                    <button
                      key={s}
                      onClick={() => handleToggleSetting(s)}
                      className={`px-4 py-3 rounded-xl border text-left transition-all ${
                        formData.settings.includes(s) 
                          ? 'bg-ken-pink border-ken-pink text-white' 
                          : 'bg-stone-950 border-stone-800 text-stone-400 hover:border-stone-500'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-3xl font-serif-elegant mb-6 text-white italic">Step 3: Your Ken Preferences</h2>
              <div>
                <label className="block text-sm font-medium text-stone-400 mb-2">Age Range</label>
                <select 
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-ken-pink transition-colors"
                  value={formData.kenAge}
                  onChange={e => setFormData({...formData, kenAge: e.target.value})}
                >
                  <option value="25-35">25 - 35</option>
                  <option value="30-40">30 - 40</option>
                  <option value="40-50">40 - 50</option>
                  <option value="50+">50+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-400 mb-4">Personality / Vibe (Select multiple)</label>
                <div className="flex flex-wrap gap-2">
                  {vibeOptions.map(v => (
                    <button
                      key={v}
                      onClick={() => handleToggleVibe(v)}
                      className={`px-4 py-2 rounded-full border text-sm transition-all ${
                        formData.vibes.includes(v) 
                          ? 'bg-pink-500 border-pink-500 text-white font-bold' 
                          : 'bg-stone-950 border-stone-800 text-stone-400 hover:border-stone-500'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <h2 className="text-3xl font-serif-elegant mb-6 text-white italic">Step 4: Dress Your Ken</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {['Black-tie tux', 'Sharp business suit', 'Smart casual', 'Trendy street style', 'Resort wear'].map(style => (
                  <button
                    key={style}
                    onClick={() => setFormData({...formData, outfit: style})}
                    className={`px-4 py-6 rounded-xl border text-center transition-all ${
                      formData.outfit === style 
                        ? 'border-ken-pink bg-ken-pink/10 text-ken-pink' 
                        : 'bg-stone-950 border-stone-800 text-stone-400'
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
              <div className="mt-8 p-6 bg-pink-500/5 rounded-2xl border border-pink-500/10">
                <h4 className="text-pink-500 font-bold mb-2">Outfit Budget (Optional)</h4>
                <p className="text-stone-400 text-sm mb-4 italic">Provide a budget and your Ken will purchase a specific outfit for the date.</p>
                <input 
                  type="number" 
                  placeholder="$ Amount"
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-white"
                  value={formData.outfitBudget}
                  onChange={e => setFormData({...formData, outfitBudget: e.target.value})}
                />
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-6">
              <h2 className="text-3xl font-serif-elegant mb-6 text-white italic">Step 5: Fantasy & Story</h2>
              <div>
                <label className="block text-sm font-medium text-stone-400 mb-4">Tell us your storybook date fantasy</label>
                <textarea 
                  rows={6}
                  placeholder="Describe the vibe, the specific requests, the dream scenario..."
                  className="w-full bg-stone-950 border border-stone-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-ken-pink transition-colors"
                  value={formData.fantasy}
                  onChange={e => setFormData({...formData, fantasy: e.target.value})}
                />
              </div>
            </div>
          )}

          {step === 6 && (
            <div className="space-y-8">
              <h2 className="text-3xl font-serif-elegant mb-6 text-white italic">Step 6: Review & Match</h2>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-stone-800 pb-2">
                  <span className="text-stone-500">City</span>
                  <span className="text-white font-bold">{formData.city || 'Not specified'}</span>
                </div>
                <div className="flex justify-between border-b border-stone-800 pb-2">
                  <span className="text-stone-500">Date</span>
                  <span className="text-white font-bold">{formData.date || 'Not specified'}</span>
                </div>
                <div className="flex justify-between border-b border-stone-800 pb-2">
                  <span className="text-stone-500">Duration</span>
                  <span className="text-white font-bold capitalize">{formData.duration}</span>
                </div>
                <div className="flex justify-between border-b border-stone-800 pb-2">
                  <span className="text-stone-500">Ken Preference</span>
                  <span className="text-white font-bold">{formData.kenAge} | {formData.vibes.join(', ')}</span>
                </div>
                <div className="flex justify-between border-b border-stone-800 pb-2">
                  <span className="text-stone-500">Style</span>
                  <span className="text-white font-bold">{formData.outfit}</span>
                </div>
              </div>
              <div className="p-6 bg-stone-800/20 rounded-2xl border border-stone-800">
                <p className="text-stone-400 italic text-sm">"We'll match you with the best local Ken based on your storybook fantasy. Expect a call from your personal concierge within 2 hours."</p>
              </div>
              <button className="w-full bg-ken-pink text-white py-5 rounded-full text-xl font-bold shadow-xl hover:bg-rose-600 transition-all">
                Submit & Continue to Booking
              </button>
            </div>
          )}

          <div className="flex justify-between mt-12">
            {step > 1 ? (
              <button 
                onClick={prevStep}
                className="text-stone-500 font-bold hover:text-white transition-colors px-4 py-2"
              >
                &larr; Back
              </button>
            ) : <div />}
            {step < 6 && (
              <button 
                onClick={nextStep}
                className="bg-stone-900 text-white px-10 py-4 rounded-full font-bold hover:bg-stone-800 transition-all border border-stone-800"
              >
                Continue &rarr;
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignDate;
