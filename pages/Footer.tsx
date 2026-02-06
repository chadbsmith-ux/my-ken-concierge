
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 border-t border-stone-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Logo size="lg" />
            <p className="text-stone-500 leading-relaxed italic">
              "Choose your Ken. Design your perfect date."
              A premium companionship concierge service redefined for the modern woman.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Concierge</h4>
            <ul className="space-y-4 text-stone-400">
              <li><Link to="/design-my-date" className="hover:text-ken-pink">Design My Date</Link></li>
              <li><Link to="/packages" className="hover:text-ken-pink">Princess Packages</Link></li>
              <li><Link to="/kens" className="hover:text-ken-pink">Meet the Kens</Link></li>
              <li><Link to="/how-it-works" className="hover:text-ken-pink">How It Works</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-stone-400">
              <li><Link to="/faq" className="hover:text-ken-pink">FAQ</Link></li>
              <li><Link to="/safety" className="hover:text-ken-pink">Safety & Standards</Link></li>
              <li><Link to="/contact" className="hover:text-ken-pink">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-ken-pink">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Join Us</h4>
            <ul className="space-y-4 text-stone-400">
              <li><Link to="/become-a-ken" className="hover:text-ken-pink">Become a Ken</Link></li>
              <li><Link to="/careers" className="hover:text-ken-pink">Careers</Link></li>
              <li><Link to="/affiliate" className="hover:text-ken-pink">Affiliate Perks</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-600 text-sm">
          <p>&copy; {new Date().getFullYear()} My Ken Concierge. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
            <span className="hover:text-white cursor-pointer transition-colors">Threads</span>
            <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
