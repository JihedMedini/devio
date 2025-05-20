'use client';

import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import the AnimatedBackground with no SSR
const AnimatedBackground = dynamic(
  () => import('../3D/AnimatedBackground'),
  { ssr: false }
);

const HeroSection = () => {
  return (
    <section id="accueil" className="relative bg-gradient-to-r from-[#041C32] to-[#064663] text-white py-28 md:py-36 lg:py-48 overflow-hidden">
      {/* Three.js animated background */}
      <AnimatedBackground height="100%" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h5 className="text-md md:text-lg uppercase tracking-widest text-[#41D0D1] font-medium mb-4 opacity-90">Nous transformons vos idées en réalité</h5>
        </div>
        
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 max-w-3xl mx-auto text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              <span className="block">Vous pensez,</span>
              <span className="gradient-text">Nous créons</span>
            </h1>
            
            <div className="my-10 py-4 border-y border-white/10 font-light text-lg md:text-xl max-w-2xl mx-auto md:mx-0">
              <p className="leading-relaxed opacity-90">
                Un projet informatique prend en moyenne 
                <span className="line-through opacity-70 mx-2">80 jours</span> 
                à se concrétiser.
              </p>
              <p className="text-3xl font-semibold text-[#41D0D1] mt-3">
                Nous le réalisons en 30 jours.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 mt-10 justify-center md:justify-start">
              <Link 
                href="#contact" 
                className="bg-[#41D0D1] text-[#04293A] px-8 py-4 rounded-md font-medium text-center text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Démarrer votre projet
              </Link>
              <Link 
                href="#speed-test" 
                className="glass-effect px-8 py-4 rounded-md font-medium text-center text-lg hover:bg-white/20 transition-all"
              >
                Test de vitesse
              </Link>
            </div>
            
            <div className="mt-16 flex flex-wrap gap-6 items-center justify-center md:justify-start">
              <span className="text-sm uppercase tracking-wider text-white/70">Secteurs d'expertise</span>
              {['E-commerce', 'Santé', 'Finance', 'Éducation', 'SaaS'].map((sector, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium"
                >
                  {sector}
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-5 relative hidden md:block">
            <div className="relative glass-effect rounded-2xl p-8 shadow-2xl">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#41D0D1] rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
              
              <h3 className="text-2xl font-bold mb-6 gradient-text">Nos réalisations récentes</h3>
              
              <div className="space-y-6">
                <div className="bg-white/10 rounded-lg p-5 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-bold text-lg">Application E-commerce</h4>
                      <p className="text-white/70 text-sm">Pour Retailer Premium</p>
                    </div>
                    <span className="text-xs bg-[#41D0D1]/20 text-[#41D0D1] px-2 py-1 rounded-full">E-commerce</span>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-[#04293A] to-[#064663] rounded-md flex items-center justify-center mt-2">
                    <span className="text-white/50 text-sm">Aperçu du projet</span>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-5 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-bold text-lg">Plateforme médicale</h4>
                      <p className="text-white/70 text-sm">Pour HealthConnect</p>
                    </div>
                    <span className="text-xs bg-[#41D0D1]/20 text-[#41D0D1] px-2 py-1 rounded-full">Santé</span>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-[#04293A] to-[#064663] rounded-md flex items-center justify-center mt-2">
                    <span className="text-white/50 text-sm">Aperçu du projet</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 text-center">
          <div className="inline-block text-gray-300 relative animate-float">
            <svg className="w-8 h-8 text-[#41D0D1] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
            <span className="text-sm font-light">Découvrez nos services</span>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-24 md:h-36" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C50,0,100,19.67,150,42.31,209.44,68.26,260.94,81.88,321.39,56.44Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection; 