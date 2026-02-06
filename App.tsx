import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './pages/Footer';
import Home from './pages/Home';
import DesignDate from './pages/DesignDate';
import Directory from './pages/Directory';
import Packages from './pages/Packages';
import BecomeKen from './pages/BecomeKen';
import FAQ from './pages/FAQ';
import Success from './pages/Success';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/design-my-date" element={<DesignDate />} />
            <Route path="/kens" element={<Directory />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/become-a-ken" element={<BecomeKen />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/success" element={<Success />} />
            <Route path="/how-it-works" element={<div className="pt-28 pb-20 max-w-4xl mx-auto px-4"><h1 className="text-5xl font-serif-elegant italic mb-8 text-white">How it <span className="text-ken-pink">Works</span></h1><p className="text-stone-400 text-xl italic leading-relaxed">The process is designed to be as elegant as the experience itself. 1. Explore our Kens. 2. Define your storybook fantasy. 3. Finalize with a concierge. 4. Experience the magic.</p></div>} />
            <Route path="/safety" element={<div className="pt-28 pb-20 max-w-4xl mx-auto px-4"><h1 className="text-5xl font-serif-elegant italic mb-8 text-white">Safety & <span className="text-ken-pink">Standards</span></h1><p className="text-stone-400 text-xl leading-relaxed">Your trust is our most valuable asset. We employ rigorous vetting, constant monitoring, and clear conduct guidelines for all Kens. We are a luxury social companion service focusing on safe, respectful, and joyful experiences.</p></div>} />
            <Route path="/contact" element={<div className="pt-28 pb-20 max-w-4xl mx-auto px-4 text-center"><h1 className="text-5xl font-serif-elegant italic mb-8 text-white">Contact the <span className="text-ken-pink">Concierge</span></h1><p className="text-stone-400 text-xl italic">Need a custom request? Reach out to us at <span className="text-pink-500 underline font-bold">concierge@myken.luxury</span></p></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;