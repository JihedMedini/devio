'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MetricsSection = () => {
  const metrics = [
    {
      value: '40%',
      label: 'Plus rapide',
      description: 'que la moyenne du marché',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      value: '99.9%',
      label: 'Disponibilité',
      description: 'de nos applications en production',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      value: '30',
      label: 'Jours',
      description: 'pour livrer votre projet complet',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      value: '98%',
      label: 'Satisfaction',
      description: 'de nos clients',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#41D0D1]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#064663]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#064663] font-medium uppercase tracking-wider text-sm">Nos performances</span>
            <h2 className="text-4xl font-bold mt-2 mb-6 text-[#04293A]">
              Des <span className="gradient-text">chiffres</span> qui parlent d'eux-mêmes
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Notre méthodologie de développement agile et notre expertise technique nous permettent 
              d'atteindre des performances exceptionnelles dans tous nos projets.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {metrics.map((metric, index) => (
              <div 
                key={index} 
                className="glass-card relative overflow-hidden rounded-2xl shadow-xl border border-white/20 p-8 group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#41D0D1]/20 to-[#064663]/20 rounded-full transform translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-500"></div>
                
                <div className="flex items-center">
                  <div className="mr-6 text-[#064663] group-hover:text-[#41D0D1] transition-colors">
                    {metric.icon}
                  </div>
                  
                  <div>
                    <div className="flex items-baseline">
                      <span className="text-4xl lg:text-5xl font-bold text-[#064663]">{metric.value}</span>
                      <span className="ml-2 text-xl text-[#41D0D1] font-semibold">{metric.label}</span>
                    </div>
                    <p className="mt-2 text-gray-600">{metric.description}</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="h-2.5 rounded-full bg-gradient-to-r from-[#064663] to-[#41D0D1]" 
                      style={{ width: metric.value.replace('%', '') + '%' }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 bg-gradient-to-r from-[#041C32] to-[#064663] rounded-2xl p-10 text-white text-center relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#41D0D1]/20 rounded-full transform translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#41D0D1]/20 rounded-full transform -translate-x-32 translate-y-32"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Nous transformons les standards de l'industrie
              </h3>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                Grâce à notre processus optimisé et notre méthodologie agile, nous livrons des résultats
                exceptionnels en un temps record, sans jamais compromettre la qualité.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 mt-6">
                <a 
                  href="#speed-test" 
                  className="px-6 py-3 bg-white text-[#064663] rounded-md font-semibold hover:bg-[#41D0D1] hover:text-[#04293A] transition-colors"
                >
                  Tester notre vitesse
                </a>
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-[#41D0D1] text-[#04293A] rounded-md font-semibold hover:bg-white hover:text-[#064663] transition-colors"
                >
                  Discuter de votre projet
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection; 