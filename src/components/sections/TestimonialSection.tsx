'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "L'équipe de Devio a transformé notre vision en une plateforme web performante en seulement 4 semaines. Leur expertise technique et leur méthodologie agile ont été déterminantes pour le succès de notre projet.",
      author: "Sophie Martin",
      position: "CEO, TechStartup",
      avatar: "/images/testimonials/avatar1.jpg",
      rating: 5
    },
    {
      quote: "Nous avions besoin d'une application mobile innovante pour notre service de livraison, et Devio a dépassé toutes nos attentes. Leur approche orientée résultats et leur réactivité ont fait toute la différence.",
      author: "Thomas Dubois",
      position: "CTO, DeliveryPlus",
      avatar: "/images/testimonials/avatar2.jpg",
      rating: 5
    },
    {
      quote: "La qualité du code et l'attention aux détails de l'équipe Devio sont remarquables. Notre plateforme e-commerce est non seulement visuellement attractive, mais aussi extrêmement performante.",
      author: "Emma Laurent",
      position: "Directrice Marketing, Fashion Online",
      avatar: "/images/testimonials/avatar3.jpg",
      rating: 5
    }
  ];

  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const handleNext = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setAutoplay(false);
    setCurrent(index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-40 right-0 w-80 h-80 bg-[#41D0D1]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute -bottom-40 left-0 w-80 h-80 bg-[#064663]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#064663] font-medium uppercase tracking-wider text-sm">Témoignages</span>
          <h2 className="text-4xl font-bold mt-2 mb-6 text-[#04293A]">
            Ce que disent <span className="gradient-text">nos clients</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Découvrez les expériences de nos clients et comment nous avons contribué à transformer leurs idées en solutions digitales performantes.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-[#041C32] to-[#064663]"></div>
            
            <div className="pt-16 px-8 pb-8 md:px-16 md:pb-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col"
                >
                  <div className="mb-8 text-center">
                    <div className="inline-block p-1 bg-white rounded-full shadow-lg mb-3 transform -translate-y-24">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#04293A]/10 to-[#064663]/10 flex items-center justify-center overflow-hidden">
                        {/* Avatar placeholder */}
                        <div className="text-4xl font-bold text-[#064663]">
                          {testimonials[current].author.charAt(0)}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    <blockquote className="text-xl md:text-2xl text-[#04293A] font-light leading-relaxed mb-6">
                      "{testimonials[current].quote}"
                    </blockquote>
                    
                    <div>
                      <h4 className="text-lg font-bold text-[#064663]">{testimonials[current].author}</h4>
                      <p className="text-gray-500">{testimonials[current].position}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <div className="flex justify-center items-center mt-8 gap-4">
                <button 
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-[#064663] hover:bg-[#064663] hover:text-white transition-colors"
                  aria-label="Témoignage précédent"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        current === index ? 'bg-[#064663]' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Aller au témoignage ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-[#064663] hover:bg-[#064663] hover:text-white transition-colors"
                  aria-label="Témoignage suivant"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#041C32] via-[#064663] to-[#41D0D1]"></div>
          </div>
          
          <div className="mt-24 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#064663]/10 flex items-center justify-center text-[#064663]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#04293A] mb-3">50+</h3>
              <p className="text-gray-600">Clients satisfaits</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#064663]/10 flex items-center justify-center text-[#064663]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#04293A] mb-3">100+</h3>
              <p className="text-gray-600">Projets livrés</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#064663]/10 flex items-center justify-center text-[#064663]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#04293A] mb-3">98%</h3>
              <p className="text-gray-600">Taux de satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection; 