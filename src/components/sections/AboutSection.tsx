'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutSection = () => {
  const stats = [
    { label: 'Projets livrés', value: '100+' },
    { label: 'Clients satisfaits', value: '50+' },
    { label: 'Experts en développement', value: '15' },
    { label: 'Années d\'expérience', value: '8' }
  ];

  const team = [
    {
      name: 'Thomas Martin',
      role: 'CEO & Fondateur',
      bio: 'Expert en stratégie numérique avec plus de 10 ans d\'expérience dans l\'industrie tech.',
      image: '/images/team/thomas.jpg'
    },
    {
      name: 'Sophie Dubois',
      role: 'CTO',
      bio: 'Architecte logiciel spécialisée en solutions scalables et performantes.',
      image: '/images/team/sophie.jpg'
    },
    {
      name: 'Marc Laurent',
      role: 'Directeur Design',
      bio: 'Designer UX/UI passionné par la création d\'expériences utilisateur intuitives.',
      image: '/images/team/marc.jpg'
    }
  ];
  
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#41D0D1]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#064663]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            
            <div className="relative z-10 grid grid-cols-12 grid-rows-6 gap-4 h-[540px]">
              <div className="col-span-8 row-span-4 col-start-1 row-start-1 rounded-2xl overflow-hidden shadow-xl">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/about/team-meeting.jpg"
                    alt="L'équipe Devio en réunion"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-2xl"
                  />
                </div>
              </div>
              
              <div className="col-span-6 row-span-3 col-start-7 row-start-3 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[#041C32] to-[#064663] p-6 flex items-center justify-center text-white">
                <div className="text-center">
                  <span className="text-5xl font-bold gradient-text">40%</span>
                  <p className="mt-2 text-white/80">Plus rapide que la moyenne du marché</p>
                </div>
              </div>
              
              <div className="col-span-5 row-span-2 col-start-1 row-start-5 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[#041C32] to-[#064663] p-4 flex items-center justify-center">
                <div className="text-center text-white">
                  <span className="text-3xl font-bold gradient-text">100%</span>
                  <p className="mt-1 text-white/80 text-sm">Satisfaction client</p>
                </div>
              </div>
              
              <div className="col-span-6 row-span-3 col-start-7 row-start-1 glass-effect rounded-2xl p-5 flex items-center justify-center shadow-xl">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/about/office.jpg"
                    alt="Bureaux de Devio"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="mb-6">
              <span className="text-[#064663] font-medium uppercase tracking-wider text-sm">À propos de nous</span>
              <h2 className="text-4xl font-bold mt-2 mb-6 text-[#04293A]">
                Expertise et innovation au service de votre <span className="gradient-text">transformation digitale</span>
              </h2>
            </div>
            
            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                Fondée en 2015, Devio est une agence de développement web et mobile spécialisée dans la création de solutions digitales sur mesure. Notre mission est simple : transformer vos idées en réalité numérique avec efficacité et excellence.
              </p>
              <p>
                Nous nous distinguons par notre approche axée sur la rapidité et la qualité. Grâce à notre méthodologie éprouvée et à notre équipe d'experts passionnés, nous livrons des projets 40% plus rapidement que la moyenne du marché, sans compromettre la qualité.
              </p>
            </div>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#041C32] flex items-center justify-center text-[#41D0D1] mr-4 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#064663] mb-2">Qualité garantie</h3>
                  <p className="text-gray-600">Nous ne sacrifions jamais la qualité pour la vitesse. Chaque ligne de code est soumise à des tests rigoureux.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#041C32] flex items-center justify-center text-[#41D0D1] mr-4 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#064663] mb-2">Livraison rapide</h3>
                  <p className="text-gray-600">Notre processus optimisé nous permet de livrer des projets complets en 30 jours en moyenne.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#041C32] flex items-center justify-center text-[#41D0D1] mr-4 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0
                    019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#064663] mb-2">Équipe dédiée</h3>
                  <p className="text-gray-600">Pour chaque projet, une équipe d'experts est dédiée à votre service du début à la fin.</p>
                </div>
              </div>
            </div>
            
            <Link 
              href="#contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#064663] to-[#04293A] text-white font-medium rounded-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Découvrir notre équipe
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
        
        <div className="text-center mb-16">
          <span className="text-[#064663] font-medium uppercase tracking-wider text-sm">Nos chiffres</span>
          <h2 className="text-4xl font-bold mt-2 mb-6 text-[#04293A]">
            Des résultats qui <span className="gradient-text">parlent d'eux-mêmes</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#041C32] to-[#064663] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <p className="text-4xl font-bold mb-2 text-[#064663] group-hover:text-white transition-colors duration-300">{stat.value}</p>
                <p className="text-gray-600 group-hover:text-white/80 transition-colors duration-300">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mb-16">
          <span className="text-[#064663] font-medium uppercase tracking-wider text-sm">Notre équipe</span>
          <h2 className="text-4xl font-bold mt-2 mb-6 text-[#04293A]">
            Des experts <span className="gradient-text">passionnés</span> et dédiés
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Notre force réside dans notre équipe multidisciplinaire, composée d'experts passionnés par l'innovation numérique et engagés pour votre réussite.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#041C32] to-transparent opacity-60 z-10"></div>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6 relative">
                <div className="absolute -top-10 right-6 w-12 h-12 rounded-full bg-[#41D0D1] flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold text-[#04293A] mb-1">{member.name}</h3>
                <p className="text-[#41D0D1] font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
                
                <div className="mt-6 pt-6 border-t border-gray-100 flex space-x-4">
                  {['linkedin', 'twitter', 'github'].map((social) => (
                    <a 
                      key={social}
                      href="#" 
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#064663] hover:text-white transition-colors"
                      aria-label={`${member.name} sur ${social}`}
                    >
                      <span className="sr-only">{social}</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        {social === 'linkedin' && (
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        )}
                        {social === 'twitter' && (
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        )}
                        {social === 'github' && (
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        )}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 bg-gradient-to-r from-[#064663] to-[#04293A] rounded-2xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">Prêt à transformer vos idées en réalité ?</h3>
              <p className="mb-8 text-white/80">
                Nous sommes passionnés par les défis numériques et impatients de vous aider à concrétiser votre vision. Contactez-nous dès aujourd'hui pour discuter de votre projet.
              </p>
              <Link 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 bg-[#41D0D1] text-[#04293A] font-semibold rounded-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Démarrer un projet
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            
            <div className="relative min-h-[320px] md:min-h-full">
              <Image
                src="/images/about/collaboration.jpg"
                alt="Collaboration et innovation"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#064663] opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 