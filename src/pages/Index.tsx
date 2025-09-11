import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AdmissionsSection from "@/components/AdmissionsSection";
import NewsSection from "@/components/NewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [currentSection, setCurrentSection] = useState("home");

  // Intersection Observer to track which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all sections
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen font-inter">
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      
      <main className="container mx-auto px-4 py-8 space-y-16">
        <HeroSection setCurrentSection={setCurrentSection} />
        <AboutSection />
        <AdmissionsSection setCurrentSection={setCurrentSection} />
        <NewsSection />
        <ContactSection />
      </main>
      
      <div className="container mx-auto px-4">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
