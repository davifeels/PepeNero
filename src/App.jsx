import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import MenuSection from "./components/MenuSection";
import GallerySection from "./components/GallerySection";
import ExperienceSection from "./components/ExperienceSection";
import LocationHoursSection from "./components/LocationHoursSection";
import BrandShowcaseSection from "./components/BrandShowcaseSection";
import Footer from "./components/Footer";
import BrandIdentityModal from "./components/BrandIdentityModal";
import { MessageCircle, Phone, Utensils, Sparkles } from "lucide-react";

export default function App() {
  const [isBrandModalOpen, setIsBrandModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#0E0C0D] text-[#EDE5D6] selection:bg-[#580E18] selection:text-[#FAF1D9]">
      {/* Navigation Header */}
      <Navbar onOpenBrandGuide={() => setIsBrandModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Dobra Inicial */}
        <Hero onOpenBrandGuide={() => setIsBrandModalOpen(true)} />

        {/* 2. Sobre o Pepe Nero */}
        <AboutSection />

        {/* 3. Cardápio Digital Interativo */}
        <MenuSection />

        {/* 4. Galeria Gastronômica & Ensaio Fotográfico */}
        <GallerySection />

        {/* 5. Experiência de Atendimento, Reservas e Relacionamento */}
        <ExperienceSection />

        {/* 6. Localização & Horários de Funcionamento */}
        <LocationHoursSection />

        {/* 7. Redesign Conceitual da Marca & Brand Showcase */}
        <BrandShowcaseSection onOpenFullGuide={() => setIsBrandModalOpen(true)} />
      </main>

      {/* Footer Oficial com Declaração Obrigatória */}
      <Footer onOpenBrandGuide={() => setIsBrandModalOpen(true)} />

      {/* Modal Interativo do Guia de Identidade Visual */}
      <BrandIdentityModal
        isOpen={isBrandModalOpen}
        onClose={() => setIsBrandModalOpen(false)}
      />

      {/* Floating Action Button (Mobile & Desktop Quick Contact) */}
      <aside aria-label="Acesso rápido WhatsApp" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        <a
          href="https://wa.me/5561995530777?text=Ol%C3%A1%20Pepe%20Nero!%20Gostaria%20de%20consultar%20o%20card%C3%A1pio%20e%20fazer%20uma%20reserva."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-medium text-xs tracking-wider shadow-2xl shadow-emerald-900/50 hover:scale-105 transition-all border border-emerald-300/30"
          title="Fale conosco no WhatsApp Oficial"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline-block font-sans font-semibold">WhatsApp Oficial</span>
        </a>
      </aside>
    </div>
  );
}
