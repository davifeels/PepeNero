import React from "react";
import { 
  MapPin, Phone, Clock, MessageCircle, 
  ArrowUp, Sparkles, Heart 
} from "lucide-react";

export default function Footer({ onOpenBrandGuide }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#090708] border-t border-[#D8B25C]/25 text-[#EDE5D6] pt-16 pb-12 overflow-hidden">
      {/* Decorative top gold gradient line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D8B25C]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <img
              src="/assets/logos/logo-horizontal.svg"
              alt="Pepe Nero Ristorante"
              className="h-12 w-auto"
            />
            <p className="text-xs sm:text-sm text-[#EDE5D6]/75 leading-relaxed max-w-sm">
              Tradição da culinária italiana, massas frescas feitas diariamente à mão e hospitalidade acolhedora no coração do Centro Histórico de Planaltina-DF desde 2010.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/pepenerobistorante/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#181517] border border-white/10 hover:border-[#D8B25C] flex items-center justify-center text-[#D8B25C] hover:scale-110 transition-all"
                title="Instagram @pepenerobistorante"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href="https://wa.me/5561995530777"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#181517] border border-white/10 hover:border-[#D8B25C] flex items-center justify-center text-[#D8B25C] hover:scale-110 transition-all"
                title="WhatsApp (61) 99553-0777"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <button
                onClick={onOpenBrandGuide}
                className="px-3.5 py-2 rounded-full bg-[#1F0408] border border-[#D8B25C]/40 text-[#D8B25C] text-xs font-cinzel tracking-wider uppercase hover:bg-[#2A050B] transition-colors flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Guia da Marca
              </button>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-cinzel uppercase tracking-[0.2em] text-[#D8B25C] font-semibold">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs text-[#EDE5D6]/70">
              <li>
                <a href="#sobre" className="hover:text-[#D8B25C] transition-colors">Sobre o Pepe Nero</a>
              </li>
              <li>
                <a href="#cardapio" className="hover:text-[#D8B25C] transition-colors">Cardápio Digital & Especialidades</a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-[#D8B25C] transition-colors">Galeria Gastronômica</a>
              </li>
              <li>
                <a href="#reservas" className="hover:text-[#D8B25C] transition-colors">Solicitar Reserva & Atendimento</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#D8B25C] transition-colors">Localização & Como Chegar</a>
              </li>
              <li>
                <a href="#identidade" className="hover:text-[#D8B25C] transition-colors">Redesign & Identidade Visual</a>
              </li>
            </ul>
          </div>

          {/* Location & Hours Summary (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-cinzel uppercase tracking-[0.2em] text-[#D8B25C] font-semibold">
              Endereço & Atendimento
            </h4>
            
            <div className="space-y-2.5 text-xs text-[#EDE5D6]/75">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D8B25C] shrink-0 mt-0.5" />
                <span>Praça Coronel Salviano Monteiro, Quadra 56, Lote 2, Setor Tradicional – Planaltina, Brasília - DF</span>
              </p>
              
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D8B25C] shrink-0" />
                <a href="tel:+5561995530777" className="hover:text-[#D8B25C] transition-colors font-mono">
                  (61) 99553-0777
                </a>
              </p>

              <p className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D8B25C] shrink-0 mt-0.5" />
                <span>Terça a Sábado: 11h às 23h30 • Domingo: 11h às 23h • Segunda: 11h às 16h</span>
              </p>
            </div>
          </div>

        </div>

        {/* Mandatory Transparency Notice Box (Strictly per user instruction) */}
        <div className="my-8 p-4 sm:p-5 rounded-2xl bg-[#14080B] border border-[#D8B25C]/30 text-center">
          <p className="text-xs sm:text-sm font-sans text-[#FAF1D9] leading-relaxed">
            "Projeto demonstrativo desenvolvido por Davi Anderson. Esta apresentação é conceitual e não representa um sistema/site oficial do Pepe Nero Restaurante."
          </p>
          <span className="block mt-1 text-[11px] text-[#EDE5D6]/60">
            Todos os direitos de marca pertencem aos seus respectivos titulares. Desenvolvido para apresentação comercial e visual de excelência digital.
          </span>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EDE5D6]/60 pt-4">
          <div>
            © {new Date().getFullYear()} Pepe Nero Ristorante • Planaltina-DF • Dal 2010. Todos os direitos reservados.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-[#D8B25C] hover:text-[#140306] text-[#EDE5D6] transition-all font-cinzel text-[11px] uppercase tracking-wider"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
