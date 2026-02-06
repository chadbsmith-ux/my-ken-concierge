
import React, { useState } from 'react';

const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-stone-800">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-6 flex justify-between items-center group"
      >
        <span className="text-xl font-serif-elegant italic text-stone-300 group-hover:text-white transition-colors">{q}</span>
        <span className={`text-2xl transition-transform ${isOpen ? 'rotate-45' : ''} text-ken-pink`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-stone-400 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

const FAQ: React.FC = () => {
  const faqs = [
    { q: "Is My Ken an escort service?", a: "No. My Ken is a luxury companionship and social experience concierge. Our focus is on providing high-end company for events, dining, travel, and social experiences. We emphasize emotional connection, presence, and shared storybook experiences." },
    { q: "How are Kens vetted?", a: "Every Ken undergoes a multi-step vetting process including ID verification, professional background checks, and personal interviews. We curate our roster based on charm, reliability, and social intelligence." },
    { q: "What cities do you operate in?", a: "We currently operate in major US metropolitan areas including NYC, Los Angeles, Chicago, Miami, and San Francisco, with plans to expand to more luxury destinations soon." },
    { q: "Can I request a specific type of Ken?", a: "Absolutely. Our 'Design My Date' builder allows you to specify age range, personality 'vibe', style, and interests. Our concierge then matches you with the most suitable candidate." },
    { q: "Can I send money for my Ken’s outfit?", a: "Yes. In the checkout flow, you can add an optional 'Outfit Budget'. Your Ken will use this to purchase a specific requested attire (e.g., a specific brand or style) to ensure they perfectly match the aesthetic of your date." },
    { q: "Is my information private?", a: "Privacy and discretion are cornerstones of My Ken. All bookings are confidential, and we employ bank-level encryption for all data handling." }
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-serif-elegant mb-12 italic text-center">Curiosities & <br/><span className="text-ken-pink">Clarities</span></h1>
        <div className="space-y-4">
          {faqs.map((faq, idx) => <FAQItem key={idx} {...faq} />)}
        </div>
        <div className="mt-20 p-12 bg-stone-900 rounded-3xl text-center">
          <h3 className="text-2xl font-serif-elegant mb-4 text-white italic">Still wondering?</h3>
          <p className="text-stone-400 mb-8">Our private concierge is available for one-on-one consultations to help you design the perfect experience.</p>
          <button className="bg-pink-500 text-white font-black px-10 py-4 rounded-full hover:bg-pink-400 transition-colors">
            Chat with a Concierge
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
