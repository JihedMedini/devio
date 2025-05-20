'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const PartnerSection = () => {
  const partners = [
    {
      name: 'TechCorp',
      logo: '/images/partners/techcorp.svg',
      category: 'Technology'
    },
    {
      name: 'FinServe',
      logo: '/images/partners/finserve.svg',
      category: 'Finance'
    },
    {
      name: 'MediHealth',
      logo: '/images/partners/medihealth.svg',
      category: 'Healthcare'
    },
    {
      name: 'EduLearn',
      logo: '/images/partners/edulearn.svg',
      category: 'Education'
    },
    {
      name: 'RetailPlus',
      logo: '/images/partners/retailplus.svg',
      category: 'Retail'
    },
    {
      name: 'TravelGo',
      logo: '/images/partners/travelgo.svg',
      category: 'Travel'
    },
  ];

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#064663] font-medium uppercase tracking-wider text-sm">Nos partenaires</span>
          <h2 className="text-4xl font-bold mt-2 mb-6 text-[#04293A]">
            Ils nous font <span className="gradient-text">confiance</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Des entreprises innovantes dans divers secteurs nous confient leurs projets digitaux.
            Rejoignez notre réseau de clients satisfaits.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1
                }}
              >
                <div className="relative h-16 w-full flex items-center justify-center mb-4">
                  <div className="opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Placeholder for partner logo */}
                    <div className="w-36 h-12 bg-gradient-to-r from-[#04293A]/10 to-[#064663]/10 rounded-md flex items-center justify-center text-[#064663] font-bold">
                      {partner.name}
                    </div>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{partner.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-24 pt-20 border-t border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#04293A] mb-6">
              Prêt à rejoindre notre liste de clients satisfaits ?
            </h3>
            <p className="text-gray-600 mb-10">
              Qu'il s'agisse d'une startup ou d'une entreprise établie, nous avons les compétences et l'expertise
              pour transformer votre vision en une solution digitale performante.
            </p>
            
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#064663] to-[#04293A] text-white font-semibold rounded-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <a href="#contact" className="flex items-center">
                Discuter de votre projet
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-24 bg-gray-50 rounded-2xl p-10 relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#41D0D1]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#064663]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-[#04293A] mb-4">Nos certifications & technologies</h3>
              <p className="text-gray-600">
                Nous utilisons les dernières technologies et respectons les standards de l'industrie
                pour développer des solutions fiables et performantes.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['React', 'Next.js', 'Node.js', 'Flutter', 'AWS', 'Firebase', 'Stripe', 'MongoDB'].map((tech, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-16"
                >
                  <span className="font-medium text-[#064663]">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection; 