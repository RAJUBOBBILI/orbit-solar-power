import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBenefits } from './components/TrustBenefits';
import { ServicesSection } from './components/ServicesSection';
import { SolarExplanation } from './components/SolarExplanation';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { HowItWorks } from './components/HowItWorks';
import { SolarCalculator } from './components/SolarCalculator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { SolarGuides } from './components/SolarGuides';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [calculatorPreset, setCalculatorPreset] = useState<{
    monthlyBill?: number;
    propertyType?: string;
    location?: string;
    systemSize?: number;
  } | undefined>(undefined);

  const handleOpenQuoteModal = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedService(serviceTitle);
    }
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedService(undefined);
  };

  const handleCalculatorQuote = (data: {
    monthlyBill: number;
    propertyType: string;
    location: string;
    systemSize: number;
    annualSavings: number;
  }) => {
    setCalculatorPreset({
      monthlyBill: data.monthlyBill,
      propertyType: data.propertyType,
      location: data.location,
      systemSize: data.systemSize
    });
    setSelectedService(`${data.systemSize} kW ${data.propertyType} Solar System`);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 antialiased font-sans">
      {/* 1. Header with Sticky Navigation & Contact Bar */}
      <Header onOpenQuoteModal={() => handleOpenQuoteModal()} />

      <main className="flex-1 pb-16 md:pb-0">
        {/* 2. Hero Section */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 3. Quick Trust & Value Benefits */}
        <TrustBenefits />

        {/* 4. Core Solar Services */}
        <ServicesSection onSelectServiceForQuote={(title) => handleOpenQuoteModal(title)} />

        {/* 5. How Solar Works & System Types (On-Grid / Off-Grid / Hybrid) */}
        <SolarExplanation />

        {/* 6. Why Choose Orbit Power Solutions */}
        <WhyChooseUs />

        {/* 7. Recent Projects & Work Showcase */}
        <ProjectsShowcase onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 8. How It Works (6-Step Roadmap) */}
        <HowItWorks onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 9. Interactive Solar ROI & Savings Calculator */}
        <SolarCalculator onCalculateQuote={handleCalculatorQuote} />

        {/* 10. Customer Testimonials */}
        <TestimonialsSection />

        {/* Solar Resources / Knowledge Guides */}
        <SolarGuides />

        {/* 11. FAQ Section */}
        <FAQSection />

        {/* 12. Final High-Converting CTA */}
        <FinalCTA onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 13. Contact Section & Direct Quotation Form */}
        <ContactSection
          initialService={selectedService}
          initialBill={calculatorPreset?.monthlyBill ? `₹${calculatorPreset.monthlyBill.toLocaleString('en-IN')}` : undefined}
        />
      </main>

      {/* 14. Comprehensive Footer */}
      <Footer />

      {/* Interactive Global Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        presetService={selectedService}
        presetData={calculatorPreset}
      />

      {/* Mobile Sticky Quick Action Bar & WhatsApp Floating Bubble */}
      <MobileStickyBar onOpenQuoteModal={() => handleOpenQuoteModal()} />
    </div>
  );
}
