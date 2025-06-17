import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/home/HeroSection";
import FeaturesPreview from "../components/home/FeaturesPreview";
import TestimonialsSection from "../components/home/TestimonialsSection";
import ContactSection from "../components/home/ContactSection";
import CtaSection from "../components/home/CtaSection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesPreview />
        <TestimonialsSection />
        <ContactSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
