
import React, { useState } from 'react';

const BecomeKen: React.FC = () => {
  const vettingSteps = [
    {
      step: 'Step 1',
      title: 'Initial Application Review',
      duration: '2-3 business days',
      details: [
        'Background check authorization',
        'Professional reference verification',
        'Social media presence evaluation',
        'Criminal record screening',
        'Identity verification'
      ]
    },
    {
      step: 'Step 2',
      title: 'Video Interview',
      duration: '30 minutes',
      details: [
        'Conversational skills assessment',
        'Style and presentation evaluation',
        'Scenario-based situational questions',
        'Communication style analysis',
        'Cultural awareness evaluation'
      ]
    },
    {
      step: 'Step 3',
      title: 'Training & Onboarding',
      duration: '2 weeks',
      details: [
        'Platform orientation and app training',
        'Client interaction guidelines',
        'Safety protocols and emergency procedures',
        'Ongoing mentorship program',
        'Performance standards'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-24 text-center">
          <h1 className="text-6xl md:text-8xl font-serif-elegant mb-8 leading-tight text-white italic">
            Join the <span className="text-pink-500">Gentleman</span> Roster
          </h1>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
            We are seeking exceptional men to join our elite concierge service. Being a <span className="text-ken-pink italic">Ken</span> means more than just a date; it means providing high-end companionship, intellectual engagement, and storybook charm.
          </p>
        </div>

        {/* Vetting Process Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif-elegant text-white mb-4 italic">Our Rigorous Vetting Process</h2>
            <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full"></div>
            <p className="text-stone-500 mt-6 uppercase tracking-[0.3em] text-[10px] font-black">Ensuring Excellence & Safety</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {vettingSteps.map((s, idx) => (
              <div key={idx} className="relative group">
                <div className="bg-stone-900/40 border border-stone-800 p-8 rounded-[2.5rem] h-full hover:border-pink-500/30 transition-all duration-500">
                  <div className="text-pink-500 font-black text-xs mb-4 tracking-widest">{s.step}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                  <div className="text-[10px] text-stone-500 uppercase tracking-widest font-black mb-6">{s.duration}</div>
                  <ul className="space-y-3">
                    {s.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-stone-400 text-xs italic leading-relaxed">
                        <span className="text-pink-500 mt-1">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Section */}
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <h2 className="text-4xl font-serif-elegant mb-8 text-white">The Opportunity</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-500/10 border border-pink-500/20 flex items-center justify-center rounded-2xl text-pink-500 font-bold">01</div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Premium Experience</h3>
                    <p className="text-stone-400 text-sm leading-relaxed">Represent the My Ken brand with absolute discretion and class at the world's finest venues.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-500/10 border border-pink-500/20 flex items-center justify-center rounded-2xl text-pink-500 font-bold">02</div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Curated Lifestyle</h3>
                    <p className="text-stone-400 text-sm leading-relaxed">Attend gala events, fine dining, and luxury weekend escapes as a professional socialite.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-500/10 border border-pink-500/20 flex items-center justify-center rounded-2xl text-pink-500 font-bold">03</div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Professional Growth</h3>
                    <p className="text-stone-400 text-sm leading-relaxed">Ongoing training in etiquette, social grace, and networking through our mentorship program.</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 p-8 bg-stone-900/50 border border-stone-800 rounded-3xl">
                <p className="text-stone-500 italic text-sm text-center">"Being a Ken is more than a role; it is an embodiment of modern chivalry."</p>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="bg-stone-900 border border-stone-800 p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              
              <h2 className="text-3xl font-serif-elegant mb-10 text-white italic">Candidate Application</h2>
              
              <form className="space-y-10 relative">
                {/* Personal Information */}
                <div>
                  <h4 className="text-pink-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6">Section I: Personal Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-xs uppercase text-stone-500 font-bold mb-3">Legal Name</label>
                      <input type="text" className="w-full bg-black border border-stone-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-pink-500 transition-colors" placeholder="Full legal name" />
                    </div>
                    <div>
                      <label className="block text-xs uppercase text-stone-500 font-bold mb-3">Age</label>
                      <input type="number" className="w-full bg-black border border-stone-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-pink-500 transition-colors" placeholder="25+" />
                    </div>
                    <div>
                      <label className="block text-xs uppercase text-stone-500 font-bold mb-3">Primary City</label>
                      <input type="text" className="w-full bg-black border border-stone-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-pink-500 transition-colors" placeholder="Location" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs uppercase text-stone-500 font-bold mb-3">Languages Spoken</label>
                      <input type="text" className="w-full bg-black border border-stone-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-pink-500 transition-colors" placeholder="e.g. English, French, Spanish" />
                    </div>
                  </div>
                </div>

                {/* Professional Background */}
                <div>
                  <h4 className="text-pink-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6">Section II: Professional & Background</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase text-stone-500 font-bold mb-3">Occupation / Professional Background</label>
                      <input type="text" className="w-full bg-black border border-stone-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-pink-500 transition-colors" placeholder="Current profession" />
                    </div>
                    <div>
                      <label className="block text-xs uppercase text-stone-500 font-bold mb-3">Education Level</label>
                      <input type="text" className="w-full bg-black border border-stone-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-pink-500 transition-colors" placeholder="Highest degree earned" />
                    </div>
                    <div>
                      <label className="block text-xs uppercase text-stone-500 font-bold mb-3">LinkedIn Profile URL</label>
                      <input type="url" className="w-full bg-black border border-stone-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-pink-500 transition-colors" placeholder="linkedin.com/in/..." />
                    </div>
                    <div>
                      <label className="block text-xs uppercase text-stone-500 font-bold mb-3">Instagram Handle</label>
                      <input type="text" className="w-full bg-black border border-stone-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-pink-500 transition-colors" placeholder="@username" />
                    </div>
                  </div>
                </div>

                {/* Logistics & Vibe */}
                <div>
                  <h4 className="text-pink-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6">Section III: Logistics & Vibe</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase text-stone-500 font-bold mb-3">Preferred Ken Archetype</label>
                      <select className="w-full bg-black border border-stone-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-pink-500 appearance-none transition-colors">
                        <option>Gentleman Scholar</option>
                        <option>Wall Street Ken</option>
                        <option>Adventure Ken</option>
                        <option>Wellness Ken</option>
                        <option>Creative Ken</option>
                        <option>Party Ken</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs uppercase text-stone-500 font-bold mb-3">Availability</label>
                      <select className="w-full bg-black border border-stone-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-pink-500 appearance-none transition-colors">
                        <option>Full-time</option>
                        <option>Part-time (Evenings)</option>
                        <option>Weekend Only</option>
                        <option>Spontaneous / Flexible</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs uppercase text-stone-500 font-bold mb-3">Special Skills / Interests</label>
                      <input type="text" className="w-full bg-black border border-stone-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-pink-500 transition-colors" placeholder="e.g. Wine knowledge, Salsa dancing, Equestrian, Piano..." />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs uppercase text-stone-500 font-bold mb-3">Emergency Contact Information</label>
                      <input type="text" className="w-full bg-black border border-stone-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-pink-500 transition-colors" placeholder="Name and Phone Number" />
                    </div>
                  </div>
                </div>

                {/* Bio & Media */}
                <div>
                  <h4 className="text-pink-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6">Section IV: Presence & Story</h4>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs uppercase text-stone-500 font-bold mb-3">Short Bio / Story</label>
                      <textarea rows={5} className="w-full bg-black border border-stone-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-pink-500 transition-colors" placeholder="Tell us why you would be an exceptional addition to the roster..."></textarea>
                    </div>
                    <div>
                      <label className="block text-xs uppercase text-stone-500 font-bold mb-3">Professional Portrait URL</label>
                      <input type="text" className="w-full bg-black border border-stone-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-pink-500 transition-colors" placeholder="Link to a high-quality headshot..." />
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button type="submit" className="w-full bg-pink-500 text-white font-black py-6 rounded-2xl hover:bg-pink-400 transition-all shadow-[0_10px_30px_rgba(236,72,153,0.3)] hover:scale-[1.01] uppercase tracking-[0.2em] text-sm">
                    Submit Candidate Application
                  </button>
                  <p className="text-center text-stone-600 text-[10px] mt-6 uppercase tracking-widest leading-loose">
                    By submitting, you agree to undergo a comprehensive background check and interview process. All data is handled with bank-level encryption and strict confidentiality.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeKen;
