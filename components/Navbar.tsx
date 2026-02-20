
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Design My Date', path: '/design-my-date' },
    { name: 'Meet the Kens', path: '/kens' },
    { name: 'Princess Packages', path: '/packages' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Safety', path: '/safety' },
    { name: 'Become a Ken', path: '/become-a-ken' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      scrolled ? 'bg-stone-950/95 backdrop-blur-lg border-b border-stone-800 py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>
          
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  location.pathname === link.path 
                    ? 'text-pink-500 bg-pink-500/5' 
                    : 'text-stone-300 hover:text-white hover:bg-stone-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pl-4">
              <Link
                to="/design-my-date"
                className="bg-ken-pink text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-pink-400 shadow-lg shadow-pink-500/20 active:scale-95 transition-all"
              >
                Book Now
              </Link>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-3 rounded-xl text-stone-300 hover:text-white hover:bg-stone-900 focus:outline-none transition-all"
              aria-label="Toggle menu"
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

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[-1]" 
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Content */}
      <div className={`lg:hidden fixed top-[64px] md:top-[80px] left-0 right-0 bg-stone-950 border-b border-stone-800 overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pt-4 pb-8 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-4 py-4 rounded-2xl text-base font-semibold transition-all ${
                location.pathname === link.path 
                  ? 'bg-pink-500/10 text-pink-500' 
                  : 'text-stone-300 hover:text-white hover:bg-stone-900'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 px-4">
            <Link
              to="/design-my-date"
              className="w-full text-center bg-ken-pink text-white block py-5 rounded-2xl text-lg font-black shadow-xl shadow-pink-500/20"
            >
              Design My Date
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
