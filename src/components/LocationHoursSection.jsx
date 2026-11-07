import React from "react";
import { MapPin, Phone, Clock, Navigation, MessageCircle, ExternalLink, Compass } from "lucide-react";

export default function LocationHoursSection() {
  const address = "Praça Coronel Salviano Monteiro, Quadra 56, Lote 2, Setor Tradicional – Planaltina, Brasília - DF";
  const phone = "(61) 99553-0777";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Pepe Nero Restaurante Planaltina DF " + address)}`;
  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent("Pepe Nero Planaltina DF")}`;

  // Operating Hours Schedule
  const schedule = [
    { day: "Segunda-feira", hours: "11:00 às 16:00", note: "Almoço Executivo" },
    { day: "Terça-feira", hours: "11:00 às 23:30", note: "Almoço & Jantar" },
    { day: "Quarta-feira", hours: "11:00 às 23:30", note: "Almoço & Jantar" },
    { day: "Quinta-feira", hours: "11:00 às 23:30", note: "Almoço & Jantar" },
    { day: "Sexta-feira", hours: "11:00 às 23:30", note: "Almoço, Jantar & Carta de Vinhos" },
    { day: "Sábado", hours: "11:00 às 23:30", note: "Dia Completo" },
    { day: "Domingo", hours: "11:00 às 23:00", note: "Almoço de Família & Jantar" },
  ];

  return (
    <section id="localizacao" className="relative py-24 bg-[#0E0C0D] overflow-hidden">
      {/* Decorative top border line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D8B25C]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F0408] border border-[#D8B25C]/30 text-[#D8B25C] text-xs font-cinzel tracking-[0.25em] uppercase mb-4">
            <Compass className="w-3.5 h-3.5" />
            Visite Nossa Casa
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#FAF1D9] tracking-tight mb-4">
            Localização & Horários
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D8B25C] to-transparent mx-auto mb-4" />
          <p className="text-sm sm:text-base text-[#EDE5D6]/80 font-sans leading-relaxed">
            Estamos situados no Setor Histórico de Planaltina-DF, cercados pela tradição e pelo charme arquitetônico da região.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Cards: Contact & Hours (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address & Quick Actions Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#161416] border border-[#D8B25C]/25 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#2A050B] border border-[#D8B25C]/40 flex items-center justify-center text-[#D8B25C] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-cinzel uppercase tracking-widest text-[#D8B25C] block mb-1">
                    Endereço Oficial
                  </span>
                  <p className="text-sm sm:text-base font-serif text-[#FAF1D9] leading-relaxed">
                    Praça Coronel Salviano Monteiro, Quadra 56, Lote 2
                  </p>
                  <p className="text-xs text-[#EDE5D6]/70 mt-1">
                    Setor Tradicional – Planaltina, Brasília - DF
                  </p>
                </div>
              </div>

              {/* Navigation Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#221F21] hover:bg-[#2C282B] text-[#FAF1D9] text-xs font-medium border border-white/10 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#D8B25C]" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-[#EDE5D6]/50" />
                </a>

                <a
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#221F21] hover:bg-[#2C282B] text-[#FAF1D9] text-xs font-medium border border-white/10 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#D8B25C]" />
                  <span>Waze</span>
                  <ExternalLink className="w-3 h-3 text-[#EDE5D6]/50" />
                </a>
              </div>

              {/* Phone & WhatsApp Direct Links */}
              <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                <a
                  href="tel:+5561995530777"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#1C191B] hover:bg-[#252225] border border-white/5 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#D8B25C]" />
                    <div>
                      <span className="block text-[10px] text-[#EDE5D6]/60 uppercase font-cinzel">Telefone / Reservas</span>
                      <span className="text-xs sm:text-sm font-semibold text-[#FAF1D9] group-hover:text-[#D8B25C]">{phone}</span>
                    </div>
                  </div>
                  <span className="text-[11px] text-[#D8B25C] font-cinzel">Ligar Agora</span>
                </a>

                <a
                  href="https://wa.me/5561995530777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#1A0307] hover:bg-[#28050B] border border-[#D8B25C]/30 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-4 h-4 text-[#D8B25C]" />
                    <div>
                      <span className="block text-[10px] text-[#EDE5D6]/60 uppercase font-cinzel">WhatsApp Oficial</span>
                      <span className="text-xs sm:text-sm font-semibold text-[#FAF1D9] group-hover:text-[#D8B25C]">Chamar Mensagem</span>
                    </div>
                  </div>
                  <span className="text-[11px] text-[#D8B25C] font-cinzel">Abrir Chat</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#161416] border border-white/10 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-[#D8B25C]" />
                <h3 className="text-lg font-serif text-[#FAF1D9]">
                  Horários de Funcionamento
                </h3>
              </div>

              <div className="space-y-2.5">
                {schedule.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-1.5 border-b border-white/5 text-xs"
                  >
                    <span className="text-[#EDE5D6]/80 font-medium">{item.day}</span>
                    <span className="text-[#FAF1D9] font-mono text-right">{item.hours}</span>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-[11px] text-[#EDE5D6]/60 italic text-center">
                * Em datas comemorativas e feriados, os horários podem ter ajustes. Confirme pelo WhatsApp.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Map (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#D8B25C]/30 shadow-2xl relative min-h-[460px] flex flex-col bg-[#161416]">
            {/* Top Bar for Map */}
            <div className="p-4 bg-[#141113] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-cinzel tracking-wider text-[#FAF1D9]">
                  Planaltina-DF • Setor Tradicional
                </span>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#D8B25C] hover:underline flex items-center gap-1 font-cinzel"
              >
                <span>Abrir em tela cheia</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Interactive Map */}
            <div className="flex-1 w-full h-full relative min-h-[420px]">
              <iframe
                title="Localização Pepe Nero Restaurante Planaltina"
                src="https://maps.google.com/maps?q=Pra%C3%A7a+Coronel+Salviano+Monteiro,+Planaltina+-+DF&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter contrast-[1.05] brightness-[0.88]"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Floating Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs p-4 rounded-2xl bg-[#0E0C0D]/90 backdrop-blur-md border border-[#D8B25C]/40 shadow-2xl">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-[#D8B25C]" />
                  <span className="text-xs font-serif font-bold text-[#FAF1D9]">
                    Pepe Nero Ristorante
                  </span>
                </div>
                <p className="text-[11px] text-[#EDE5D6]/80 leading-relaxed">
                  Praça Cel. Salviano Monteiro, Q. 56, L. 2 — Próximo aos casarões do Centro Histórico.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
