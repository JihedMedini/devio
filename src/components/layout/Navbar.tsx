'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { throttle } from '@/lib/utils';

const navItems = [
  { name: 'Accueil', id: '#accueil' },
  { name: 'Services', id: '#services' },
  { name: 'Projets', id: '#projets' },
  { name: 'À propos', id: '#about' },
  { name: 'Blog', id: '#blog' },
  { name: 'Contact', id: '#contact' }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Performance optimized scroll handler with throttling
  const handleScroll = useCallback(throttle(() => {
    const scrollTop = window.scrollY;
    if (scrollTop > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    
    // Visual feedback when scrolling
    setIsScrolling(true);
    
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 150);
  }, 100), []);
  
  // Optimized smooth scroll with visual feedback
  const scrollToSection = useCallback((sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    
    if (element) {
      setIsScrolling(true);
      
      // Highlight clicked menu item immediately for better visual feedback
      setActiveSection(sectionId);
      
      // Use scrollIntoView with smooth behavior
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // End scrolling indication after animation completes
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  }, []);
  
  // Set up IntersectionObserver for section tracking
  useEffect(() => {
    const sectionIds = ['accueil', 'services', 'projets', 'about', 'blog', 'contact'];
    
    // Clean up any existing observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    // Create a new observer with optimized options
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3, // Require 30% visibility to trigger
    };
    
    // Track which sections are visible and their visibility ratio
    const visibleSections = new Map<string, number>();
    
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        
        // Update visibility map
        if (entry.isIntersecting) {
          visibleSections.set(id, entry.intersectionRatio);
        } else {
          visibleSections.delete(id);
        }
      });
      
      // If we have visible sections, set the most visible one as active
      if (visibleSections.size > 0) {
        // Find the section with the highest visibility ratio
        let maxRatio = 0;
        let maxId = '';
        
        visibleSections.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            maxId = id;
          }
        });
        
        // Only update if it's different to avoid unnecessary re-renders
        if (maxId && maxId !== activeSection) {
          setActiveSection(maxId);
        }
      }
    }, options);
    
    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observerRef.current?.observe(element);
      }
    });
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Trigger initial scroll check
    handleScroll();
    
    // Clean up
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [activeSection, handleScroll]);
  
  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 hardware-accelerated ${
        isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
      } ${isScrolling ? 'will-change-transform' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link 
              href="/" 
              onClick={() => scrollToSection('accueil')}
              className="font-bold text-xl text-primary-600 flex items-center"
            >
              <Image 
                src="/images/logo.svg" 
                alt="Devio Logo" 
                width={40} 
                height={40} 
                className="mr-2"
                loading="eager"
                priority
              />
              <span className={`transition-colors duration-300 ${isScrolled ? 'text-primary-600' : 'text-white'}`}>
                Devio
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.id}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id.substring(1));
                }}
                className={`
                  text-sm font-medium transition-all will-change-transform
                  ${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white/90 hover:text-white'}
                  ${activeSection === item.id.substring(1) ? 
                    (isScrolled ? 'text-primary-600 font-bold' : 'text-white font-bold') : ''}
                  relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center
                  after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300
                  ${activeSection === item.id.substring(1) ? 'after:scale-x-100 after:bg-primary-500' : 'after:bg-primary-400'}
                `}
                aria-current={activeSection === item.id.substring(1) ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm' : 'bg-gray-900/95 backdrop-blur-sm'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.id}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id.substring(1));
              }}
              className={`
                block px-3 py-2 rounded-md text-base font-medium transition-colors
                ${activeSection === item.id.substring(1) 
                  ? (isScrolled ? 'bg-primary-100 text-primary-700' : 'bg-gray-800 text-white') 
                  : (isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-gray-300 hover:bg-gray-700')}
              `}
              aria-current={activeSection === item.id.substring(1) ? 'page' : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 