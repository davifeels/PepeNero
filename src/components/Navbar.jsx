import React, { useState, useEffect } from "react";
import { MessageCircle, Menu, X, Phone, Clock, MapPin, Sparkles, Compass } from "lucide-react";
import { getAssetUrl } from "../utils/assets";

export default function Navbar({ onOpenBrandGuide }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Sobre o Pepe Nero", href: "#sobre" },
    { label: "Cardápio Digital", href: "#cardapio" },
    { label: "Galeria", href: "#galeria" },
    { label: "Experiência & Reservas", href: "#reservas" },
    { label: "Localização", href: "#localizacao" },
  ];

  return (
    <>
      {/* Top Heritage Notice Bar */}
      <div className="bg-[#1F0408] border-b border-[#D8B25C]/20 text-[#FAF1D9] text-xs py-2 px-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#D8B25C] animate-pulse"></span>
            <span className="font-serif italic tracking-wide">Dal 2010 • A Alma de Modena no Setor Tradicional de Planaltina-DF</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-[#EDE5D6]/80">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#D8B25C]" />
              Terça a Domingo a partir das 11h
            </span>
            <a 
              href="tel:+5561995530777" 
              className="flex items-center gap-1 text-[#D8B25C] hover:underline"
            >
              <Phone className="w-3.5 h-3.5" />
              (61) 99553-0777
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0E0C0D]/95 backdrop-blur-md border-b border-[#D8B25C]/25 shadow-2xl py-3"
            : "bg-gradient-to-b from-[#0E0C0D]/90 to-transparent py-4 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo Link */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src={getAssetUrl("assets/logos/logo-horizontal.svg")}
              alt="Pepe Nero Ristorante Italiano"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] font-cinzel text-[#EDE5D6]/85 hover:text-[#D8B25C] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D8B25C] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}

            {/* Brand Guide Button */}
            <button
              onClick={onOpenBrandGuide}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#D8B25C]/40 text-[#D8B25C] hover:bg-[#D8B25C]/10 text-xs font-cinzel uppercase tracking-wider transition-all"
              title="Ver redesign da logo e guia de identidade visual"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#ECCF96]" />
              Identidade Visual
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/5561995530777?text=Ol%C3%A1%20Pepe%20Nero!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20card%C3%A1pio%20e%20fazer%20uma%20reserva."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#580E18] to-[#771523] hover:from-[#6D121F] hover:to-[#8E1C2C] text-[#FCF4DF] text-xs font-semibold tracking-wider uppercase border border-[#D8B25C]/30 shadow-lg shadow-[#580E18]/30 transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 text-[#D8B25C]" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenBrandGuide}
              className="p-2 rounded-lg text-[#D8B25C] hover:bg-white/5 border border-[#D8B25C]/20"
              aria-label="Ver Identidade Visual"
            >
              <Sparkles className="w-5 h-5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#EDE5D6] hover:text-[#D8B25C] hover:bg-white/5 focus:outline-none"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-[#0E0C0D]/95 backdrop-blur-xl flex flex-col p-6 animate-fadeIn">
          <div className="flex items-center justify-between pb-6 border-b border-[#D8B25C]/20">
            <img
              src={getAssetUrl("assets/logos/logo-horizontal.svg")}
              alt="Pepe Nero"
              className="h-10 w-auto"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full bg-white/5 text-[#EDE5D6]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-5 py-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-serif tracking-wider text-[#FAF1D9] hover:text-[#D8B25C] border-b border-white/5 pb-2"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBrandGuide();
              }}
              className="flex items-center justify-between text-left text-base font-serif text-[#D8B25C] border-b border-white/5 pb-2 pt-2"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#ECCF96]" />
                Redesign da Logo & Identidade Visual
              </span>
              <span className="text-xs font-sans px-2 py-0.5 rounded bg-[#D8B25C]/20">Ver Guia</span>
            </button>
          </nav>

          <div className="mt-auto space-y-4 pt-6 border-t border-[#D8B25C]/20">
            <div className="text-xs text-[#EDE5D6]/70 space-y-1">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D8B25C]" />
                Praça Cel. Salviano Monteiro, Q. 56, L. 2, Planaltina-DF
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D8B25C]" />
                (61) 99553-0777
              </p>
            </div>

            <a
              href="https://wa.me/5561995530777"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#580E18] to-[#771523] text-[#FAF1D9] font-medium"
            >
              <MessageCircle className="w-5 h-5 text-[#D8B25C]" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
