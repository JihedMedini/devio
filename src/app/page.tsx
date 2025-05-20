'use client';

import HeroSection from '@/components/sections/HeroSection';
import ServiceSection from '@/components/sections/ServiceSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import PartnerSection from '@/components/sections/PartnerSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import MetricsSection from '@/components/sections/MetricsSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MetricsSection />
      <ServiceSection />
      <AboutSection />
      <TestimonialSection />
      <PartnerSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
}
