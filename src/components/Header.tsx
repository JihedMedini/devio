'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 z-10">
            <div className="relative h-10 w-10 bg-[#3DD2CC] rounded-lg flex items-center justify-center text-white font-bold text-lg">ST</div>
            <span className={`text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-[#0F2942]' : 'text-white'}`}>SynergieTech</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-[#3DD2CC]' : 'text-white/80 hover:text-white'}`}
            >
              Accueil
            </Link>
            <Link 
              href="#about" 
              className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-[#3DD2CC]' : 'text-white/80 hover:text-white'}`}
            >
              À propos
            </Link>
            <Link 
              href="#services" 
              className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-[#3DD2CC]' : 'text-white/80 hover:text-white'}`}
            >
              Nos Services
            </Link>
            <Link 
              href="#method" 
              className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-[#3DD2CC]' : 'text-white/80 hover:text-white'}`}
            >
              Notre Méthode
            </Link>
            <Link 
              href="#projects" 
              className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-[#3DD2CC]' : 'text-white/80 hover:text-white'}`}
            >
              Projets réalisés
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="#contact" 
              className={`${isScrolled 
                ? 'bg-[#3DD2CC] text-white hover:bg-[#2cb8b3]' 
                : 'bg-white text-[#0F2942] hover:bg-opacity-90'} 
                px-6 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5`}
            >
              Démarrer votre projet
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none z-10"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <div className={`w-8 h-8 flex items-center justify-center rounded-md ${isScrolled || isMenuOpen ? 'bg-[#0F2942]' : 'bg-white/20 backdrop-blur-md'}`}>
              <svg
                className={`w-5 h-5 ${isScrolled ? 'text-white' : 'text-white'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-[#0F2942] bg-opacity-95 z-0 flex items-center justify-center">
            <nav className="flex flex-col items-center space-y-8 py-8">
              <Link 
                href="/" 
                className="text-white text-xl font-medium hover:text-[#3DD2CC] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                href="#about" 
                className="text-white text-xl font-medium hover:text-[#3DD2CC] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link 
                href="#services" 
                className="text-white text-xl font-medium hover:text-[#3DD2CC] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Nos Services
              </Link>
              <Link 
                href="#method" 
                className="text-white text-xl font-medium hover:text-[#3DD2CC] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Notre Méthode
              </Link>
              <Link 
                href="#projects" 
                className="text-white text-xl font-medium hover:text-[#3DD2CC] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projets réalisés
              </Link>
              <Link 
                href="#contact" 
                className="text-white text-xl font-medium hover:text-[#3DD2CC] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="#contact" 
                className="mt-4 bg-[#3DD2CC] text-[#0F2942] py-3 px-8 rounded-lg font-medium hover:bg-opacity-90 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Démarrer votre projet
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 