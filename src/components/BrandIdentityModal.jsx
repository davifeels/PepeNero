import React, { useState } from "react";
import { 
  X, Sparkles, Download, Layers, Palette, Type, 
  Check, Copy, Shield, BookOpen, ExternalLink 
} from "lucide-react";
import { brandColors, brandTypography, logoVariations, brandHistory } from "../data/brandData";

export default function BrandIdentityModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("logos");
  const [copiedCode, setCopiedCode] = useState(null);

  if (!isOpen) return null;

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#141113] rounded-3xl border border-[#D8B25C]/40 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="p-6 bg-[#180205] border-b border-[#D8B25C]/30 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2A050B] border border-[#D8B25C]/50 flex items-center justify-center text-[#D8B25C]">
              <Sparkles className="w-5 h-5 text-[#ECCF96]" />
            </div>
            <div>
              <h3 className="text-xl font-serif text-[#FAF1D9]">
                Manual Resumido de Identidade Visual
              </h3>
              <p className="text-xs text-[#D8B25C] font-cinzel tracking-wider uppercase">
                Pepe Nero Ristorante • Guia Conceitual de Design (2026)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-[#EDE5D6] transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Tabs Navigation */}
        <div className="flex items-center gap-2 p-3 bg-[#110E10] border-b border-white/5 overflow-x-auto shrink-0 no-scrollbar">
          <button
            onClick={() => setActiveTab("logos")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-cinzel uppercase tracking-wider transition-all whitespace-nowrap ${
              activeTab === "logos"
                ? "bg-[#D8B25C] text-[#140306] font-semibold"
                : "text-[#EDE5D6]/70 hover:text-white hover:bg-white/5"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Família de Logos & SVGs</span>
          </button>

          <button
            onClick={() => setActiveTab("cores")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-cinzel uppercase tracking-wider transition-all whitespace-nowrap ${
              activeTab === "cores"
                ? "bg-[#D8B25C] text-[#140306] font-semibold"
                : "text-[#EDE5D6]/70 hover:text-white hover:bg-white/5"
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Paleta Cromática</span>
          </button>

          <button
            onClick={() => setActiveTab("tipografia")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-cinzel uppercase tracking-wider transition-all whitespace-nowrap ${
              activeTab === "tipografia"
                ? "bg-[#D8B25C] text-[#140306] font-semibold"
                : "text-[#EDE5D6]/70 hover:text-white hover:bg-white/5"
            }`}
          >
            <Type className="w-3.5 h-3.5" />
            <span>Tipografia Institucional</span>
          </button>

          <button
            onClick={() => setActiveTab("regras")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-cinzel uppercase tracking-wider transition-all whitespace-nowrap ${
              activeTab === "regras"
                ? "bg-[#D8B25C] text-[#140306] font-semibold"
                : "text-[#EDE5D6]/70 hover:text-white hover:bg-white/5"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Área de Respiro & Normas</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* TAB 1: LOGOS */}
          {activeTab === "logos" && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-[#1A1719] border border-white/5 text-xs text-[#EDE5D6]/80 leading-relaxed">
                <strong className="text-[#D8B25C]">Diretriz de Uso: </strong>
                O logotipo do Pepe Nero possui 5 variantes vetoriais otimizadas para atender desde fachadas, aventais e cardápios físicos até interfaces mobile, selos e favicons de alta densidade de pixels.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {logoVariations.map((logo) => (
                  <div
                    key={logo.id}
                    className="rounded-2xl bg-[#161315] border border-white/10 p-5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-serif text-base text-[#FAF1D9]">
                          {logo.title}
                        </h4>
                        <span className="text-[10px] font-cinzel text-[#D8B25C] uppercase">
                          VETOR SVG
                        </span>
                      </div>

                      <div className={`h-48 rounded-xl flex items-center justify-center p-6 mb-4 ${logo.bgClass} border border-white/5`}>
                        <img
                          src={logo.path}
                          alt={logo.title}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>

                      <p className="text-xs text-[#EDE5D6]/70 leading-relaxed mb-4">
                        {logo.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="flex flex-wrap gap-1">
                        {logo.tags.map((t) => (
                          <span key={t} className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-[#EDE5D6]/60">
                            {t}
                          </span>
                        ))}
                      </div>

                      <a
                        href={logo.path}
                        download={`${logo.id}-pepe-nero.svg`}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#D8B25C] text-[#140306] text-xs font-cinzel font-semibold hover:bg-[#ECCF96] transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Baixar</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: CORES */}
          {activeTab === "cores" && (
            <div className="space-y-6">
              <p className="text-xs text-[#EDE5D6]/80 leading-relaxed">
                As cores institucionais foram calibradas para manter consistência em mídias impressas (CMYK / Pantone) e digitais (RGB / HEX).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {brandColors.map((color) => (
                  <div
                    key={color.hex}
                    className="p-4 rounded-2xl bg-[#161315] border border-white/10 space-y-3"
                  >
                    <div
                      className="h-20 rounded-xl p-3 flex flex-col justify-between"
                      style={{ backgroundColor: color.hex }}
                    >
                      <span className={`text-xs font-semibold ${color.textLight ? "text-white" : "text-black"}`}>
                        {color.name}
                      </span>
                      <span className={`text-sm font-mono font-bold ${color.textLight ? "text-white" : "text-black"}`}>
                        {color.hex}
                      </span>
                    </div>

                    <div className="space-y-1.5 text-[11px] text-[#EDE5D6]/70">
                      <p><strong>Papel:</strong> {color.role}</p>
                      <p><strong>RGB:</strong> {color.rgb}</p>
                      <p><strong>CMYK:</strong> {color.cmyk}</p>
                      <p><strong>Pantone:</strong> {color.pantone}</p>
                    </div>

                    <button
                      onClick={() => copyToClipboard(color.hex, color.hex)}
                      className="w-full py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-cinzel text-[#D8B25C] flex items-center justify-center gap-1.5 transition-colors"
                    >
                      {copiedCode === color.hex ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar Código HEX</span>
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: TIPOGRAFIA */}
          {activeTab === "tipografia" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {brandTypography.map((t, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-[#161315] border border-white/10">
                    <span className="text-[10px] font-cinzel text-[#D8B25C] uppercase block mb-1">
                      {t.category}
                    </span>
                    <h4 className="text-lg font-serif text-[#FAF1D9] mb-1">
                      {t.family}
                    </h4>
                    <span className="text-xs text-[#EDE5D6]/60 italic block mb-3">
                      {t.type}
                    </span>
                    <div className="p-3 rounded-lg bg-[#0E0C0D] text-xs text-[#FAF1D9] mb-3">
                      {t.sample}
                    </div>
                    <p className="text-xs text-[#EDE5D6]/70 leading-relaxed">
                      {t.characteristics}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: REGRAS E ÁREA DE RESPIRO */}
          {activeTab === "regras" && (
            <div className="space-y-6 text-xs text-[#EDE5D6]/80 leading-relaxed">
              <div className="p-6 rounded-2xl bg-[#161315] border border-white/10 space-y-4">
                <h4 className="text-base font-serif text-[#FAF1D9]">
                  Normas de Aplicação e Área de Respiro (Clear Space)
                </h4>
                <p>
                  • <strong>Área de Respiro Mínima:</strong> A marca deve ser sempre circundada por um espaço de segurança equivalente à altura da letra "P" do monograma principal. Nenhum texto ou elemento gráfico deve invadir essa margem.
                </p>
                <p>
                  • <strong>Redução Mínima para Impressão:</strong> Para o Logo Principal, a largura mínima é de 35mm para garantir a legibilidade dos ornatos de pimenta. Para aplicações digitais, utilizar a versão compacta (mínimo 32px) ou a versão horizontal (mínimo 120px de largura).
                </p>
                <p>
                  • <strong>Usos Incorretos Proibidos:</strong> Não distorcer as proporções axiais da elipse, não aplicar sombras projetadas duras ou chanfros, não substituir a paleta de cores por tons fluorescentes e não remover o descritivo de fundação sem autorização.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#1F0408] border border-[#D8B25C]/30 text-[#FAF1D9]">
                <h4 className="text-base font-serif mb-2 text-[#D8B25C]">
                  Posicionamento Estratégico de Marca
                </h4>
                <p>
                  O redesign do Pepe Nero eleva o restaurante à altura das grandes osterias e trattorias clássicas da Itália. A preservação do ouro e do vinho honra a memória de quem frequenta a casa desde 2010, enquanto o refinamento tipográfico abre portas para eventos de degustação, cartas de vinhos exclusivas e atração de clientes exigentes em todo o Distrito Federal.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#110E10] border-t border-white/10 flex items-center justify-between text-xs text-[#EDE5D6]/60 shrink-0">
          <span>Identidade Visual Desenvolvida por Antigravity</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-cinzel uppercase tracking-wider"
          >
            Fechar Manual
          </button>
        </div>

      </div>
    </div>
  );
}
