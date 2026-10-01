"use client";

import React, { useState, useEffect } from "react";

import HeroSection from "./components/HeroSection";
import MachineAnatomySection from "./components/MachineAnatomySection";
import SubstratesSection from "./components/SubstratesSection";
import ProductsSection from "./components/ProductsSection";
import ProductsCatalogSection from "./components/ProductsCatalogSection";
import AboutSection from "./components/AboutSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FaqSection from "./components/FaqSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import ScrollRevealSection from "./components/ScrollRevealSection";

export default function VivaArchitecturalMonochromePage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [selectedFeature, setSelectedFeature] = useState<number>(0);
  const [selectedSubstrate, setSelectedSubstrate] = useState<number>(0);
  const [quoteSent, setQuoteSent] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem("viva-theme");
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("viva-theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return (
    <SmoothScroll>
      <div
        data-theme={theme}
        style={{
          backgroundColor: "var(--bg-dark)",
          color: "var(--text-main)",
          minHeight: "100vh",
          overflowX: "hidden",
          fontFamily: "var(--font-body)",
          transition: "background-color 0.25s ease, color 0.25s ease",
        }}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <HeroSection theme={theme} onToggleTheme={toggleTheme} />

        <main id="main-content" role="main">
          {/* Section 1: Machine Anatomy - 3D Depth & Tilt entry */}
          <ScrollRevealSection animationType="perspective-3d">
            <MachineAnatomySection
              selectedFeature={selectedFeature}
              onFeatureSelect={setSelectedFeature}
            />
          </ScrollRevealSection>

          {/* Section 2: Substrates & Materials - Horizontal sliding glide */}
          <ScrollRevealSection animationType="slide-horizontal">
            <SubstratesSection
              selectedSubstrate={selectedSubstrate}
              onSubstrateSelect={setSelectedSubstrate}
            />
          </ScrollRevealSection>

          {/* Section 3: Flagship Products Showcase - Cinematic curtain rise */}
          <ScrollRevealSection animationType="curtain-rise">
            <ProductsSection />
          </ScrollRevealSection>

          {/* Section 4: Shop by Category Bento Grid - Cyber-bloom aperture expansion */}
          <ScrollRevealSection animationType="cyber-bloom">
            <ProductsCatalogSection />
          </ScrollRevealSection>

          {/* Section 5: Manufacturing Heritage / About - Diagonal architectural split slide */}
          <ScrollRevealSection animationType="diagonal-reveal">
            <AboutSection />
          </ScrollRevealSection>

          {/* Section 6: Client Endorsements - Floating cascade wave */}
          <ScrollRevealSection animationType="cascade-wave">
            <TestimonialsSection />
          </ScrollRevealSection>

          {/* Section 7: Technical Specifications FAQ - Precision vertical focus */}
          <ScrollRevealSection animationType="focus-expand">
            <FaqSection
              activeFaq={activeFaq}
              onFaqToggle={setActiveFaq}
            />
          </ScrollRevealSection>

          {/* Section 8: Rapid RFQ Engineering Consultation - Grounding ascent */}
          <ScrollRevealSection animationType="magnetic-ground">
            <ContactSection
              quoteSent={quoteSent}
              onQuoteSent={setQuoteSent}
            />
          </ScrollRevealSection>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
