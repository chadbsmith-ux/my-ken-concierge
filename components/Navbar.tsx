
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Design My Date', path: '/design-my-date' },
    { name: 'Meet the Kens', path: '/kens' },
    { name: 'Princess Packages', path: '/packages' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Safety', path: '/safety' },
    { name: 'Become a Ken', path: '/become-a-ken' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-stone-950/90 backdrop-blur-md border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-stone-300 hover:text-white hover:bg-stone-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/design-my-date"
                className="bg-ken-pink text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-rose-600 transition-all transform hover:scale-105"
              >
                Book Now
              </Link>
            </div>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-400 hover:text-white hover:bg-stone-800 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-stone-900 px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-stone-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/design-my-date"
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-ken-pink text-white block px-3 py-3 rounded-md text-base font-bold mt-4"
          >
            Design My Date
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
