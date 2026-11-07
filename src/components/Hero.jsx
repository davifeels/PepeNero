import React from "react";
import { ChevronDown, Utensils, MessageCircle, Sparkles, Award, MapPin } from "lucide-react";
import { getAssetUrl } from "../utils/assets";

export default function Hero({ onOpenBrandGuide }) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-12 pb-20">
      {/* Background Photography with Sophisticated Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=2000&q=85"
          alt="Ambiente acolhedor e gastronomia italiana sofisticada"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.38] contrast-[1.08]"
        />
        {/* Radial Darkening and Wine Glow Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0D] via-[#0E0C0D]/70 to-[#2A050B]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(88,14,24,0.35)_0%,rgba(14,12,13,0.85)_75%)]" />
      </div>

      {/* Decorative Golden Ambient Sparks & Rings */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[340px] bg-[#D8B25C]/8 rounded-full blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Top Heritage Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#180205]/90 border border-[#D8B25C]/35 backdrop-blur-md mb-8 shadow-lg shadow-black/40">
          <Award className="w-3.5 h-3.5 text-[#D8B25C]" />
          <span className="text-[11px] font-cinzel tracking-[0.25em] text-[#FAF1D9] uppercase">
            Dal 2010 • Setor Tradicional • Planaltina-DF
          </span>
        </div>

        {/* Primary Redesigned Medallion Logo */}
        <div className="w-full max-w-[340px] sm:max-w-[420px] md:max-w-[480px] mb-8 transition-transform duration-500 hover:scale-[1.02]">
          <img
            src={getAssetUrl("assets/logos/logo-principal.svg")}
            alt="Pepe Nero Ristorante Italiano"
            className="w-full h-auto drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]"
          />
        </div>

        {/* Original Institutional Phrase */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl font-display italic text-[#FAF1D9]/95 leading-relaxed mb-10 px-4">
          "A autêntica alma gastronômica italiana no coração histórico de Planaltina. 
          Massas frescas preparadas com a devoção de Modena, pizzas de longa fermentação 
          e encontros inesquecíveis ao redor da mesa."
        </p>

        {/* Dual Primary Call-to-Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
          {/* Button: Conheça nosso cardápio */}
          <a
            href="#cardapio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D8B25C] via-[#ECCF96] to-[#C5A059] text-[#1A0306] font-semibold text-sm tracking-wider uppercase shadow-xl shadow-[#D8B25C]/20 hover:brightness-110 hover:shadow-[#D8B25C]/30 transition-all hover:scale-105"
          >
            <Utensils className="w-4 h-4 text-[#1A0306]" />
            <span>Conheça nosso cardápio</span>
          </a>

          {/* Button: Fale conosco / WhatsApp */}
          <a
            href="#reservas"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-[#180205]/85 hover:bg-[#2A050B] text-[#FAF1D9] border border-[#D8B25C]/40 backdrop-blur-md text-sm font-medium tracking-wider uppercase transition-all hover:border-[#D8B25C] hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 text-[#D8B25C]" />
            <span>Fale conosco & Reservas</span>
          </a>
        </div>

        {/* Three Value Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl text-left pt-6 border-t border-[#D8B25C]/20">
          <div className="p-4 rounded-xl bg-[#161416]/60 border border-white/5 backdrop-blur-sm">
            <span className="block text-[#D8B25C] font-cinzel text-xs tracking-wider uppercase mb-1">
              • Paste Fresche
            </span>
            <p className="text-xs text-[#EDE5D6]/80 leading-relaxed">
              Massas artesanais abertas diariamente com farinha de grano duro e ovos caipiras.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#161416]/60 border border-white/5 backdrop-blur-sm">
            <span className="block text-[#D8B25C] font-cinzel text-xs tracking-wider uppercase mb-1">
              • Tradição de Modena
            </span>
            <p className="text-xs text-[#EDE5D6]/80 leading-relaxed">
              Receitas clássicas do norte italiano comandadas com afeto e rigor culinário.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#161416]/60 border border-white/5 backdrop-blur-sm">
            <span className="block text-[#D8B25C] font-cinzel text-xs tracking-wider uppercase mb-1">
              • Ambiente Acolhedor
            </span>
            <p className="text-xs text-[#EDE5D6]/80 leading-relaxed">
              Osteria intimista, luz suave, cartas de vinhos e trilha sonora italiana.
            </p>
          </div>
        </div>

      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#sobre"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#D8B25C]/70 hover:text-[#D8B25C] transition-colors"
        aria-label="Rolar para próxima seção"
      >
        <span className="text-[10px] uppercase font-cinzel tracking-widest">Descubra</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
