'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

const ServiceSection = () => {
  const services = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 6.5C3 5.11929 4.11929 4 5.5 4H18.5C19.8807 4 21 5.11929 21 6.5V17.5C21 18.8807 19.8807 20 18.5 20H5.5C4.11929 20 3 18.8807 3 17.5V6.5ZM5.5 6C5.22386 6 5 6.22386 5 6.5V17.5C5 17.7761 5.22386 18 5.5 18H18.5C18.7761 18 19 17.7761 19 17.5V6.5C19 6.22386 18.7761 6 18.5 6H5.5Z"></path>
          <path d="M10 9H14V11H10V9Z"></path>
          <path d="M7 13H17V15H7V13Z"></path>
        </svg>
      ),
      title: 'Développement Web',
      description: 'Applications et sites web modernes et dynamiques conçus avec les dernières technologies.',
      features: ['React & Next.js', 'Node.js & Express', 'API RESTful', 'E-commerce'],
      color: 'from-[#041C32] to-[#064663]',
      url: '/services/developpement-web',
      schema: {
        "@type": "Service",
        "name": "Développement Web",
        "description": "Applications et sites web modernes et dynamiques conçus avec les dernières technologies.",
        "provider": {
          "@type": "Organization",
          "name": "Devio"
        }
      }
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 5H17V7H7V5Z"></path>
          <path d="M7 9H11V11H7V9Z"></path>
          <path d="M15 9H17V11H15V9Z"></path>
          <path d="M7 13H9V15H7V13Z"></path>
          <path d="M13 13H17V15H13V13Z"></path>
          <path d="M7 17H17V19H7V17Z"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M2 2C2 1.44772 2.44772 1 3 1H21C21.5523 1 22 1.44772 22 2V22C22 22.5523 21.5523 23 21 23H3C2.44772 23 2 22.5523 2 22V2ZM4 3V21H20V3H4Z"></path>
        </svg>
      ),
      title: 'Applications Mobiles',
      description: 'Apps natives et cross-platform avec une expérience utilisateur fluide et intuitive.',
      features: ['React Native', 'Flutter', 'iOS & Android', 'PWA'],
      color: 'from-[#064663] to-[#04293A]',
      url: '/services/applications-mobiles',
      schema: {
        "@type": "Service",
        "name": "Applications Mobiles",
        "description": "Apps natives et cross-platform avec une expérience utilisateur fluide et intuitive.",
        "provider": {
          "@type": "Organization",
          "name": "Devio"
        }
      }
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"></path>
          <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"></path>
        </svg>
      ),
      title: 'Conseil & Stratégie',
      description: 'Expertise stratégique pour guider vos choix technologiques et optimiser vos processus.',
      features: ['Audit technique', 'Roadmap produit', 'Optimisation UX', 'Formation'],
      color: 'from-[#04293A] to-[#041C32]',
      url: '/services/conseil-strategie',
      schema: {
        "@type": "Service",
        "name": "Conseil & Stratégie",
        "description": "Expertise stratégique pour guider vos choix technologiques et optimiser vos processus.",
        "provider": {
          "@type": "Organization",
          "name": "Devio"
        }
      }
    },
  ];

  const customServices = [
    {
      title: 'E-commerce',
      description: 'Solutions de vente en ligne complètes avec gestion des stocks, paiements et livraisons.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
        </svg>
      ),
      url: '/services/ecommerce'
    },
    {
      title: 'SaaS',
      description: 'Création d\'applications cloud, évolutives et sécurisées avec modèle d\'abonnement.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
        </svg>
      ),
      url: '/services/saas'
    },
    {
      title: 'FinTech',
      description: 'Applications financières sécurisées intégrant les dernières normes de conformité.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      url: '/services/fintech'
    },
    {
      title: 'MedTech',
      description: 'Solutions pour le secteur médical avec un accent sur la sécurité et la confidentialité.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      ),
      url: '/services/medtech'
    },
  ];

  // JSON-LD Schema for services
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": service.schema
    }))
  };

  return (
    <>
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <header className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#064663] font-medium uppercase tracking-wider text-sm">Nos expertises</span>
            <h2 className="text-4xl font-bold mt-2 mb-6 text-[#04293A]">
              Services <span className="gradient-text">sur mesure</span> pour vos besoins digitaux
            </h2>
            <p className="text-gray-600">
              De la conception à la mise en production, nous vous accompagnons à chaque étape 
              pour transformer vos idées en solutions digitales performantes.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <article 
                key={index} 
                className={`rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
                itemScope 
                itemType="https://schema.org/Service"
              >
                <div className={`bg-gradient-to-br ${service.color} p-8 text-white`}>
                  <div className="mb-4" aria-hidden="true">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3" itemProp="name">{service.title}</h3>
                  <p className="text-white/80 mb-6" itemProp="description">{service.description}</p>
                </div>
                <div className="bg-white p-6">
                  <h4 className="font-medium text-[#064663] mb-4">Technologies & compétences</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-[#41D0D1] rounded-full" aria-hidden="true"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-4 border-t border-gray-100">
                    <Link 
                      href={service.url} 
                      className="text-[#064663] font-medium flex items-center hover:text-[#41D0D1] transition-colors"
                      itemProp="url"
                    >
                      En savoir plus
                      <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-20 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-12 bg-gradient-to-r from-[#041C32] to-[#064663] text-white">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Solutions sectorielles</h3>
                  <p className="text-white/80">
                    Nous développons des solutions spécifiques pour répondre aux défis uniques de votre secteur d'activité.
                  </p>
                </div>
                <Link
                  href="#contact"
                  className="px-6 py-3 bg-[#41D0D1] text-[#04293A] rounded-md font-medium hover:shadow-lg transition-all whitespace-nowrap"
                >
                  Discuter de votre projet
                </Link>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-4">
              {customServices.map((service, index) => (
                <article 
                  key={index} 
                  className="p-8 border-b sm:border-r sm:last:border-r-0 last:border-b-0 border-gray-100 hover:bg-gray-50 transition-colors"
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#064663]/10 flex items-center justify-center text-[#064663] mb-6" aria-hidden="true">
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-bold text-[#04293A] mb-3" itemProp="name">{service.title}</h4>
                  <p className="text-gray-600 text-sm" itemProp="description">{service.description}</p>
                  <meta itemProp="provider" content="Devio" />
                  <Link href={service.url} className="hidden" itemProp="url">{service.url}</Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection; 