'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section id="projets" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#41D0D1]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#064663]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-[#041C32] to-[#064663] rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12 lg:p-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Prêt à accélérer votre <span className="gradient-text">transformation digitale</span> ?
                </h2>
                
                <p className="text-white/80 text-lg mb-8 max-w-xl">
                  Ne laissez pas vos idées attendre. Avec Devio, passez du concept au produit fini en 30 jours seulement.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="#contact" 
                    className="px-8 py-4 bg-[#41D0D1] text-[#04293A] font-semibold rounded-md text-center hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Commencer mon projet
                  </Link>
                  
                  <Link 
                    href="#services" 
                    className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-md text-center hover:bg-white/20 transition-all"
                  >
                    Explorer les services
                  </Link>
                </div>
                
                <div className="mt-12 pt-8 border-t border-white/10">
                  <h3 className="text-[#41D0D1] font-semibold mb-4">
                    Pourquoi choisir Devio ?
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-[#41D0D1]/20 flex items-center justify-center text-[#41D0D1] mr-3 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Livraison rapide</h4>
                        <p className="text-white/70 text-sm">40% plus rapide que la moyenne du marché</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-[#41D0D1]/20 flex items-center justify-center text-[#41D0D1] mr-3 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Qualité garantie</h4>
                        <p className="text-white/70 text-sm">Standards de développement les plus élevés</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-[#41D0D1]/20 flex items-center justify-center text-[#41D0D1] mr-3 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Prix transparent</h4>
                        <p className="text-white/70 text-sm">Pas de frais cachés ni de surprises</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-[#41D0D1]/20 flex items-center justify-center text-[#41D0D1] mr-3 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Support dédié</h4>
                        <p className="text-white/70 text-sm">Assistance personnalisée à chaque étape</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="relative h-full min-h-[500px] hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#064663] opacity-20 z-10"></div>
              
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="glass-effect w-full h-full rounded-2xl p-8 text-white relative overflow-hidden shadow-lg">
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#41D0D1]/30 rounded-full mix-blend-multiply filter blur-xl"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-6">Ce que nos clients disent</h3>
                    
                    <div className="space-y-8">
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-[#41D0D1]/20 rounded-full flex items-center justify-center text-[#41D0D1] font-bold text-xl">E</div>
                          <div>
                            <h4 className="font-semibold">Ecommerce Premium</h4>
                            <p className="text-sm text-white/70">Client depuis 2022</p>
                          </div>
                        </div>
                        <p className="text-white/90">
                          "L'équipe de Devio a livré notre plateforme e-commerce en moins d'un mois. Résultat : +35% de conversions dès le premier trimestre."
                        </p>
                      </div>
                      
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-[#41D0D1]/20 rounded-full flex items-center justify-center text-[#41D0D1] font-bold text-xl">M</div>
                          <div>
                            <h4 className="font-semibold">MediTech Solutions</h4>
                            <p className="text-sm text-white/70">Client depuis 2021</p>
                          </div>
                        </div>
                        <p className="text-white/90">
                          "Excellente qualité technique et méthode de travail efficace. Notre application médicale répond parfaitement aux besoins de nos utilisateurs."
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex justify-center mt-8">
                      <div className="flex space-x-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-[#41D0D1]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-center text-white/70 mt-2 text-sm">4.9/5 basé sur 50+ avis clients</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 