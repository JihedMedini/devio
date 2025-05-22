'use client';

// Updated page component for fresh deployment
import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ServiceSection from '@/components/sections/ServiceSection';
import AboutSection from '@/components/sections/AboutSection';
import CTASection from '@/components/sections/CTASection';
import PartnerSection from '@/components/sections/PartnerSection';
import ContactSection from '@/components/sections/ContactSection';
import MetricsSection from '@/components/sections/MetricsSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <MetricsSection />
      <CTASection />
      <TestimonialSection />
      <PartnerSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
