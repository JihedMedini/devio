'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    privacy: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send the form data to your backend
    console.log('Form submitted:', formData);
    // Show success message or redirect
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#064663] font-medium uppercase tracking-wider text-sm">Contact</span>
          <h2 className="text-4xl font-bold mt-2 mb-6 text-[#04293A]">
            Prêt à <span className="gradient-text">concrétiser</span> votre projet ?
          </h2>
          <p className="text-gray-600">
            Discutons ensemble de vos besoins et de comment nous pouvons vous aider à transformer vos idées en réalité.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5 lg:col-span-4">
            <div className="bg-gradient-to-br from-[#041C32] to-[#064663] rounded-xl text-white p-8 h-full shadow-xl">
              <h3 className="text-2xl font-bold mb-8">Informations de contact</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#41D0D1]/20 flex items-center justify-center text-[#41D0D1] mt-1 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-[#41D0D1] text-lg">Téléphone</h4>
                    <p className="mt-1 text-white/90 font-light">+33 1 23 45 67 89</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#41D0D1]/20 flex items-center justify-center text-[#41D0D1] mt-1 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-[#41D0D1] text-lg">Email</h4>
                    <p className="mt-1 text-white/90 font-light">contact@devio.fr</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#41D0D1]/20 flex items-center justify-center text-[#41D0D1] mt-1 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-[#41D0D1] text-lg">Adresse</h4>
                    <p className="mt-1 text-white/90 font-light">75 Rue de Paris, 75001 Paris, France</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-16">
                <h4 className="font-medium text-[#41D0D1] mb-4 text-lg">Heures d'ouverture</h4>
                <div className="space-y-3 font-light">
                  <p className="flex justify-between">
                    <span className="text-white/70">Lundi - Vendredi:</span>
                    <span className="text-white">9:00 - 18:00</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-white/70">Samedi:</span>
                    <span className="text-white">10:00 - 15:00</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-white/70">Dimanche:</span>
                    <span className="text-white">Fermé</span>
                  </p>
                </div>
              </div>
              
              <div className="mt-12 pt-12 border-t border-white/20">
                <h4 className="font-medium text-[#41D0D1] mb-6 text-lg">Réseaux sociaux</h4>
                <div className="flex space-x-5">
                  {['linkedin', 'twitter', 'github', 'instagram'].map((social) => (
                    <a 
                      key={social}
                      href="#" 
                      className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#41D0D1]/40 transition-colors duration-300"
                      aria-label={`Suivez-nous sur ${social}`}
                    >
                      <span className="sr-only">{social}</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        {social === 'linkedin' && (
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        )}
                        {social === 'twitter' && (
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        )}
                        {social === 'github' && (
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        )}
                        {social === 'instagram' && (
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        )}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-7 lg:col-span-8">
            <div className="bg-white shadow-xl rounded-xl overflow-hidden">
              <div className="p-6 md:p-8 lg:p-10 bg-gradient-to-r from-[#04293A] to-[#064663] text-white">
                <h3 className="text-2xl font-bold mb-2">Envoyez-nous un message</h3>
                <p className="text-white/80">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les 24 heures.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6 md:p-8 lg:p-10">
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#41D0D1] focus:border-transparent transition-colors"
                      placeholder="Votre prénom"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#41D0D1] focus:border-transparent transition-colors"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#41D0D1] focus:border-transparent transition-colors"
                      placeholder="Votre email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#41D0D1] focus:border-transparent transition-colors"
                      placeholder="Votre téléphone"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#41D0D1] focus:border-transparent transition-colors"
                    required
                  >
                    <option value="" disabled>Sélectionnez un sujet</option>
                    <option value="devis">Demande de devis</option>
                    <option value="information">Demande d'information</option>
                    <option value="partenariat">Proposition de partenariat</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#41D0D1] focus:border-transparent transition-colors"
                    placeholder="Décrivez votre projet ou votre demande en détail..."
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-center mb-8">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    checked={formData.privacy}
                    onChange={handleChange}
                    className="h-5 w-5 text-[#064663] focus:ring-[#41D0D1] border-gray-300 rounded cursor-pointer"
                    required
                  />
                  <label htmlFor="privacy" className="ml-3 block text-sm text-gray-700">
                    J'accepte que mes données soient traitées selon la <a href="#privacy" className="text-[#064663] hover:underline font-medium">politique de confidentialité</a> <span className="text-red-500">*</span>
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-[#064663] to-[#04293A] text-white font-medium rounded-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Envoyer le message
                </button>
                
                <p className="text-xs text-gray-500 mt-4">
                  Les champs marqués d'un <span className="text-red-500">*</span> sont obligatoires
                </p>
              </form>
            </div>
            
            <div className="mt-12 bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h4 className="text-xl font-bold text-[#04293A] mb-6">Questions fréquentes</h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold text-[#064663]">Quel est le délai moyen pour un projet ?</h5>
                  <p className="text-gray-600 mt-2">Nous livrons généralement les projets en 30 jours, soit 40% plus rapidement que la moyenne du marché.</p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-[#064663]">Comment se déroule le processus de développement ?</h5>
                  <p className="text-gray-600 mt-2">Notre processus comprend une phase de conception, de développement et de tests rigoureux avant la mise en production.</p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-[#064663]">Proposez-vous un support après la livraison ?</h5>
                  <p className="text-gray-600 mt-2">Oui, nous offrons un support technique et une maintenance continue pour tous nos projets.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 relative h-96 rounded-xl overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-t from-[#064663] to-transparent opacity-20 z-10"></div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047342325!2d2.3354330156743847!3d48.87456857928882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e38f817b573%3A0x48d69c30470e7aeb!2s75%20Rue%20de%20Paris%2C%2075001%20Paris!5e0!3m2!1sen!2sfr!4v1623245095972!5m2!1sen!2sfr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            className="absolute inset-0"
            title="Google Maps - Notre localisation à Paris"
          ></iframe>
          
          <div className="absolute bottom-4 left-4 z-20 bg-white p-4 rounded-lg shadow-lg max-w-xs">
            <h4 className="text-[#064663] font-semibold">Devio Paris</h4>
            <p className="text-gray-600 text-sm mt-1">75 Rue de Paris, 75001 Paris, France</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 