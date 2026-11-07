import React, { useState } from "react";
import { 
  Sparkles, Layers, Palette, Type, Check, Download, 
  Copy, ExternalLink, ArrowRight, ShieldCheck 
} from "lucide-react";
import { brandColors, brandTypography, logoVariations, brandHistory } from "../data/brandData";

export default function BrandShowcaseSection({ onOpenFullGuide }) {
  const [selectedLogo, setSelectedLogo] = useState(logoVariations[0]);
  const [copiedHex, setCopiedHex] = useState(null);

  const handleCopy = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <section id="identidade" className="relative py-24 bg-[#110E10] overflow-hidden border-t border-[#D8B25C]/20">
      {/* Background ambient light */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#580E18]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F0408] border border-[#D8B25C]/30 text-[#D8B25C] text-xs font-cinzel tracking-[0.25em] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Evolução de Marca & Design System
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#FAF1D9] tracking-tight mb-4">
            Redesign Conceitual da Identidade Visual
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D8B25C] to-transparent mx-auto mb-4" />
          <p className="text-sm sm:text-base text-[#EDE5D6]/80 font-sans leading-relaxed">
            Uma proposta contemporânea e sofisticada que respeita a essência histórica do Pepe Nero, moderniza a assinatura tipográfica e confere presença digital de alto padrão.
          </p>
        </div>

        {/* Brand Evolution Comparison Card (Original vs Redesign) */}
        <div className="mb-16 bg-[#161315] rounded-3xl p-6 sm:p-10 border border-[#D8B25C]/30 shadow-2xl">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-cinzel text-[#D8B25C] uppercase tracking-widest block mb-1">
              Estudo Comparativo
            </span>
            <h3 className="text-2xl font-serif text-[#FAF1D9] mb-2">
              Da Herança de 2010 à Sofisticação Contemporânea
            </h3>
            <p className="text-xs sm:text-sm text-[#EDE5D6]/80 leading-relaxed">
              Analisamos minuciosamente a marca original para preservar os elementos que consolidaram a identidade do Pepe Nero (o fundo vinho nobre, o medalhão elíptico e o nome clássico) eliminando excessos e conferindo rigor editorial italiano.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Original Identity */}
            <div className="flex flex-col bg-[#0D0B0C] rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <span className="text-xs font-cinzel uppercase tracking-wider text-rose-300">
                  Identidade de Referência
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-white/10 text-[#EDE5D6]/70">
                  Desde 2010
                </span>
              </div>

              <div className="h-56 flex items-center justify-center p-4 bg-[#3E060F] rounded-xl overflow-hidden mb-4 border border-white/5">
                <img
                  src="/assets/original-logo.png"
                  alt="Logo Original de Referência do Pepe Nero"
                  className="max-h-full max-w-full object-contain drop-shadow"
                />
              </div>

              <div className="space-y-2 text-xs text-[#EDE5D6]/70">
                <p>• <strong>Pontos Fortes Preservados:</strong> A combinação clássica entre o fundo vinho nobre e o medalhão elíptico, além do prestígio do nome "Pepe Nero".</p>
                <p>• <strong>Oportunidades de Melhoria:</strong> A tipografia script manual casual não refletia o rigor e a nobreza de uma osteria italiana clássica; ausência de variações estruturadas para o ambiente digital moderno.</p>
              </div>
            </div>

            {/* Redesigned Identity */}
            <div className="flex flex-col bg-gradient-to-b from-[#1F0408] to-[#140E10] rounded-2xl p-6 border border-[#D8B25C]/50 shadow-lg shadow-[#580E18]/20">
              <div className="flex items-center justify-between pb-4 border-b border-[#D8B25C]/20 mb-4">
                <span className="text-xs font-cinzel uppercase tracking-wider text-[#D8B25C] font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#ECCF96]" />
                  Redesign Proposto (2026)
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-[#D8B25C]/20 text-[#D8B25C] font-cinzel">
                  Evolução Premium
                </span>
              </div>

              <div className="h-56 flex items-center justify-center p-6 bg-[#26050C] rounded-xl overflow-hidden mb-4 border border-[#D8B25C]/30 shadow-inner">
                <img
                  src="/assets/logos/logo-principal.svg"
                  alt="Redesign do Logo Pepe Nero"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="space-y-2 text-xs text-[#FAF1D9]/90">
                <p>• <strong>Tipografia com Alma Italiana:</strong> Serifa lapidar com proporções clássicas romanas e contraste refinado, transmitindo prestígio e alta gastronomia.</p>
                <p>• <strong>Selo com Ramos de Pepe:</strong> Geometria com filetes em ouro antigo, ornatos de grãos de pimenta (pepe nero) e inscrição formal da data de fundação (Dal 2010).</p>
                <p>• <strong>Sistema Multi-Aplicação:</strong> Variações para web, favicon, papéis timbrados, carimbos e redes sociais.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Interactive Logo Variations Suite */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-cinzel text-[#D8B25C] uppercase tracking-widest block mb-1">
                Família de Assinaturas
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#FAF1D9]">
                As 5 Variações da Marca
              </h3>
            </div>
            
            <p className="text-xs text-[#EDE5D6]/70 max-w-md">
              Cada aplicação foi concebida vetorialmente em formato SVG para garantir máxima nitidez em qualquer dispositivo, tela retina ou material impresso.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Selector List (4 cols) */}
            <div className="lg:col-span-4 space-y-3">
              {logoVariations.map((logo) => (
                <button
                  key={logo.id}
                  onClick={() => setSelectedLogo(logo)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all ${
                    selectedLogo.id === logo.id
                      ? "bg-[#1F0408] border-[#D8B25C] shadow-lg shadow-[#580E18]/30"
                      : "bg-[#161315] border-white/5 hover:border-white/20 text-[#EDE5D6]/70"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-serif text-sm text-[#FAF1D9] font-medium">
                      {logo.title}
                    </h4>
                    {selectedLogo.id === logo.id && (
                      <span className="w-2 h-2 rounded-full bg-[#D8B25C]" />
                    )}
                  </div>
                  <span className="text-[11px] text-[#D8B25C]/80 block mb-2 font-display italic">
                    {logo.subtitle}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {logo.tags.map((t) => (
                      <span key={t} className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-[#EDE5D6]/60">
                        {t}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>

            {/* Right Display Stage (8 cols) */}
            <div className="lg:col-span-8 bg-[#161315] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl">
              {/* Display Stage Box */}
              <div className={`h-80 sm:h-96 w-full rounded-2xl flex items-center justify-center p-8 transition-colors duration-500 border border-white/5 shadow-inner ${selectedLogo.bgClass}`}>
                <img
                  src={selectedLogo.path}
                  alt={selectedLogo.title}
                  className="max-h-full max-w-full object-contain filter drop-shadow-md"
                />
              </div>

              {/* Details & Actions for the active logo */}
              <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
                <div>
                  <h4 className="text-lg font-serif text-[#FAF1D9] mb-1">
                    {selectedLogo.title}
                  </h4>
                  <p className="text-xs text-[#EDE5D6]/75 max-w-xl leading-relaxed">
                    {selectedLogo.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={selectedLogo.path}
                    download={`${selectedLogo.id}-pepe-nero.svg`}
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#D8B25C] hover:bg-[#ECCF96] text-[#140306] font-semibold text-xs font-cinzel tracking-wider uppercase transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Baixar SVG</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Color Palette Tokens Grid */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-cinzel text-[#D8B25C] uppercase tracking-widest block mb-1">
              Harmonia Cromática
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#FAF1D9]">
              Paleta de Cores Institucional
            </h3>
            <p className="text-xs sm:text-sm text-[#EDE5D6]/70 mt-1 max-w-2xl">
              Cores nobres com referências aos vinhos do norte da Itália, à cerâmica rústica, ao grão de pimenta negra e ao ouro acetinado. Clique no código para copiar o valor HEX.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandColors.map((color) => (
              <div
                key={color.hex}
                className="bg-[#161315] rounded-2xl overflow-hidden border border-white/10 group hover:border-[#D8B25C]/40 transition-all shadow-lg"
              >
                {/* Color Swatch */}
                <div
                  className="h-28 w-full p-4 flex flex-col justify-between"
                  style={{ backgroundColor: color.hex }}
                >
                  <span
                    className={`text-xs font-cinzel font-semibold tracking-wider ${
                      color.textLight ? "text-white/90" : "text-[#140306]"
                    }`}
                  >
                    {color.name}
                  </span>
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-sm font-mono font-bold ${
                        color.textLight ? "text-white" : "text-[#140306]"
                      }`}
                    >
                      {color.hex}
                    </span>
                    <button
                      onClick={() => handleCopy(color.hex)}
                      className={`p-1.5 rounded-lg text-xs backdrop-blur-md transition-colors ${
                        color.textLight
                          ? "bg-black/30 hover:bg-black/50 text-white"
                          : "bg-white/40 hover:bg-white/70 text-black"
                      }`}
                      title="Copiar HEX"
                    >
                      {copiedHex === color.hex ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Color Metadata */}
                <div className="p-4 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-[#EDE5D6]/60">
                    <span className="font-cinzel text-[10px] uppercase">Função:</span>
                    <span className="text-[#D8B25C] font-medium">{color.role}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#EDE5D6]/60">
                    <span className="font-cinzel text-[10px] uppercase">RGB:</span>
                    <span className="font-mono text-[11px] text-[#FAF1D9]">{color.rgb}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#EDE5D6]/60">
                    <span className="font-cinzel text-[10px] uppercase">CMYK:</span>
                    <span className="font-mono text-[11px] text-[#FAF1D9]">{color.cmyk}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#EDE5D6]/60">
                    <span className="font-cinzel text-[10px] uppercase">Pantone:</span>
                    <span className="font-sans text-[11px] text-[#FAF1D9]">{color.pantone}</span>
                  </div>
                  <p className="pt-2 text-[11px] text-[#EDE5D6]/70 leading-relaxed border-t border-white/5">
                    {color.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Institutional Typography Grid */}
        <div className="bg-[#161315] rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
          <div className="mb-8">
            <span className="text-xs font-cinzel text-[#D8B25C] uppercase tracking-widest block mb-1">
              Hierarquia Visual
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#FAF1D9]">
              Tipografia Institucional
            </h3>
            <p className="text-xs sm:text-sm text-[#EDE5D6]/70 mt-1 max-w-2xl">
              A harmonia entre três famílias tipográficas com propósitos distintos: o lirismo clássico da serifa italiana, o rigor monumental do Cinzel e a alta legibilidade digital do Plus Jakarta Sans.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {brandTypography.map((font, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0E0C0D] border border-white/5 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-cinzel text-[#D8B25C] uppercase tracking-wider block mb-1">
                    {font.category}
                  </span>
                  <h4 className="text-lg font-serif text-[#FAF1D9] mb-1">
                    {font.family}
                  </h4>
                  <span className="text-xs text-[#EDE5D6]/60 italic block mb-4">
                    {font.type}
                  </span>

                  {/* Sample Specimen */}
                  <div className="p-4 rounded-xl bg-[#161416] border border-white/5 mb-4 text-[#FAF1D9]">
                    <p className={`text-base leading-snug ${idx === 0 ? "font-serif" : idx === 1 ? "font-cinzel tracking-wider text-xs" : "font-sans text-xs"}`}>
                      {font.sample}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-[#EDE5D6]/70 pt-4 border-t border-white/5">
                  <p><strong>Aplicação:</strong> {font.usage}</p>
                  <p><strong>Conceito:</strong> {font.characteristics}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
