import React from "react";
import { Sparkles, Utensils, HeartHandshake, Wine, Clock, MapPin } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="sobre" className="relative py-24 bg-[#0E0C0D] overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#580E18]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F0408] border border-[#D8B25C]/30 text-[#D8B25C] text-xs font-cinzel tracking-[0.25em] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Nossa Proposta
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#FAF1D9] tracking-tight mb-6">
            A Tradição Italiana no Centro Histórico de Planaltina
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D8B25C] to-transparent mx-auto mb-6" />
          <p className="text-base sm:text-lg text-[#EDE5D6]/80 font-sans leading-relaxed">
            Estabelecido em 2010 na histórica Planaltina-DF, o <strong className="text-[#FAF1D9] font-serif font-semibold">Pepe Nero</strong> foi idealizado para proporcionar uma experiência intimista e genuína da culinária clássica italiana.
          </p>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6 text-[#EDE5D6]/85 text-sm sm:text-base leading-relaxed">
            <p>
              Em italiano, <span className="text-[#D8B25C] italic font-serif">"Pepe Nero"</span> significa pimenta preta — o tempero milenar que simboliza vigor, personalidade e o toque refinado que transforma cada prato em uma celebração sensorial.
            </p>
            <p>
              Localizado na charmosa <strong className="text-[#FAF1D9]">Praça Coronel Salviano Monteiro</strong>, no Setor Tradicional de Planaltina, o restaurante combina a rica bagagem cultural da gastronomia de Modena (região da Emília-Romanha) com o acolhimento caloroso característico da boa mesa.
            </p>
            <p>
              Nosso compromisso diário se reflete na feitura artesanal das massas frescas, no ponto minucioso dos risotos, no perfume dos molhos cozidos em fogo brando e nas pizzas assadas que preservam a crocância e leveza da autêntica receita europeia.
            </p>

            {/* Quote Block */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#2A050B]/60 to-[#180205]/40 border-l-4 border-[#D8B25C] my-6">
              <p className="font-display italic text-lg sm:text-xl text-[#FAF1D9]">
                "Cozinhar à moda italiana é um ato de respeito aos ingredientes, ao tempo e às pessoas que se reúnem em torno de uma mesa."
              </p>
              <span className="block mt-2 text-xs font-cinzel tracking-widest text-[#D8B25C] uppercase">
                — Filosofia da Casa • Dal 2010
              </span>
            </div>

            {/* Quick Fact Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-[#161416] border border-white/5">
                <span className="block text-2xl font-serif text-[#D8B25C]">2010</span>
                <span className="text-xs text-[#EDE5D6]/70 uppercase font-cinzel">Ano de Fundação</span>
              </div>
              <div className="p-3 rounded-xl bg-[#161416] border border-white/5">
                <span className="block text-2xl font-serif text-[#D8B25C]">100%</span>
                <span className="text-xs text-[#EDE5D6]/70 uppercase font-cinzel">Massas Artesanais</span>
              </div>
              <div className="p-3 rounded-xl bg-[#161416] border border-white/5 col-span-2 sm:col-span-1">
                <span className="block text-2xl font-serif text-[#D8B25C]">Modena</span>
                <span className="text-xs text-[#EDE5D6]/70 uppercase font-cinzel">Raiz Culinária</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Imagery Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden border border-[#D8B25C]/30 shadow-2xl shadow-black/80">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
                  alt="Preparo artesanal de massas frescas italianas"
                  className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Overlay Image */}
              <div className="hidden sm:block absolute -bottom-8 -left-8 w-48 rounded-xl overflow-hidden border-2 border-[#D8B25C]/40 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400&q=80"
                  alt="Vinho tinto e harmonização"
                  className="w-full h-36 object-cover"
                />
              </div>

              {/* Decorative Corner Badge */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-[#580E18] to-[#180205] border border-[#D8B25C]/50 flex items-center justify-center p-2 text-center shadow-lg">
                <span className="text-[10px] font-cinzel tracking-wider text-[#FAF1D9] uppercase leading-tight">
                  Autêntica Osteria
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-[#161416]/70 border border-[#D8B25C]/15 hover:border-[#D8B25C]/40 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#2A050B] border border-[#D8B25C]/30 flex items-center justify-center text-[#D8B25C] mb-4">
              <Utensils className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif text-[#FAF1D9] mb-2">Massas Artesanais</h3>
            <p className="text-xs text-[#EDE5D6]/70 leading-relaxed">
              Farinha de sêmola nobre, ovos frescos e modelagem precisa para atingir a textura perfeita "al dente".
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#161416]/70 border border-[#D8B25C]/15 hover:border-[#D8B25C]/40 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#2A050B] border border-[#D8B25C]/30 flex items-center justify-center text-[#D8B25C] mb-4">
              <Wine className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif text-[#FAF1D9] mb-2">Carta de Vinhos</h3>
            <p className="text-xs text-[#EDE5D6]/70 leading-relaxed">
              Rótulos selecionados das principais regiões vinícolas da Itália para acompanhar cada etapa do seu jantar.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#161416]/70 border border-[#D8B25C]/15 hover:border-[#D8B25C]/40 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#2A050B] border border-[#D8B25C]/30 flex items-center justify-center text-[#D8B25C] mb-4">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif text-[#FAF1D9] mb-2">Atendimento Pessoal</h3>
            <p className="text-xs text-[#EDE5D6]/70 leading-relaxed">
              Ambiente caloroso e serviço focado na proximidade e hospitalidade típica dos restaurantes da Itália.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#161416]/70 border border-[#D8B25C]/15 hover:border-[#D8B25C]/40 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#2A050B] border border-[#D8B25C]/30 flex items-center justify-center text-[#D8B25C] mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif text-[#FAF1D9] mb-2">Centro Histórico</h3>
            <p className="text-xs text-[#EDE5D6]/70 leading-relaxed">
              Localização privilegiada na Praça Coronel Salviano Monteiro, no tradicional coração de Planaltina.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
