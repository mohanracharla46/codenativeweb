import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import ClientTicker from "./components/ClientTicker";
import SelectedWork from "./components/SelectedWork";
import SystemArchitecture from "./components/SystemArchitecture";
import ProjectModal from "./components/ProjectModal";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import RegionalPresence from "./components/RegionalPresence";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import AmbientCursorFollower from "./components/AmbientCursorFollower";

export default function App() {
  // Default to light mode per explicit user request
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("codenative_theme");
    return saved === "dark";
  });

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactInterest, setContactInterest] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("codenative_theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("codenative_theme", "light");
    }
  }, [isDark]);

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleOpenContact = (interest = "") => {
    setContactInterest(interest);
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
    setContactInterest("");
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className={`min-h-screen ${isDark ? "dark bg-[#08090E] text-[#EDEDEF]" : "bg-[#F8FAFC] text-[#0F172A]"} font-sans antialiased selection:bg-[#5145E6] selection:text-white relative bg-grid-pattern transition-colors duration-300`}>
      {/* Dynamic 3D Ambient Cursor Light */}
      <AmbientCursorFollower />

      {/* 0. Global Smooth Top Reading Progress Bar & Floating Navigator */}
      <ScrollProgress />

      {/* 1. Navigation with Theme Toggle */}
      <Navbar
        onOpenContact={() => handleOpenContact()}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Content Sections with Scroll-Driven Animations */}
      <main>
        {/* 1. Hero Section (with Parallax & Scroll Down Indicator) */}
        <Hero onOpenContact={() => handleOpenContact()} />

        {/* 2. Systems & Partner Ticker */}
        <ClientTicker />

        {/* 3. Selected Work / Mission-Critical Systems (with Staggered Scroll-In) */}
        <SelectedWork onSelectProject={handleSelectProject} />

        {/* 4. System Architecture & Cloud Infrastructure */}
        <SystemArchitecture />

        {/* 5. Services Section ("What we engineer") */}
        <Services onOpenContact={handleOpenContact} />

        {/* 6. Why CodeNative ("Zero Technical Debt & Senior Engineers") */}
        <WhyUs />

        {/* 7. Regional Presence & Hyderabad Engineering Center */}
        <RegionalPresence onOpenContact={handleOpenContact} />

        {/* 8. Process Section ("From architecture to scale") */}
        <Process />

        {/* 9. Pricing / Engagement & Interactive Estimator */}
        <Pricing onOpenContact={handleOpenContact} />

        {/* 10. Testimonials ("What founders & CTOs say") */}
        <Testimonials />

        {/* 11. FAQ Section */}
        <FAQ onOpenContact={handleOpenContact} />

        {/* 12. Final CTA ("Have a system to build? Let's engineer it.") */}
        <FinalCTA onOpenContact={() => handleOpenContact()} />
      </main>

      {/* Footer */}
      <Footer onOpenContact={() => handleOpenContact()} />

      {/* Interactive Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseProject}
          onOpenContact={handleOpenContact}
        />
      )}

      {/* Interactive Project Inquiry Modal */}
      <ContactModal
        key={contactInterest || "default"}
        isOpen={isContactOpen}
        onClose={handleCloseContact}
        initialInterest={contactInterest}
      />
    </div>
  );
}
