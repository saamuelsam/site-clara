import React from "react";
import HeroSection from "../components/home/HeroSection";
import ServicesOverview from "../components/home/ServicesOverview";
import AboutPreview from "../components/home/AboutPreview";
import TestimonialsSection from "../components/home/TestimonialsSection";
import FinalCTA from "../components/home/FinalCTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <AboutPreview />
      <TestimonialsSection />
      <FinalCTA />
    </div>
  );
}