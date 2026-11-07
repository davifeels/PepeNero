import React, { useState } from "react";
import { 
  MessageCircle, Calendar, Users, Clock, Send, Sparkles, 
  HelpCircle, ChevronDown, CheckCircle2, ShieldCheck, Mail, Gift 
} from "lucide-react";

export default function ExperienceSection() {
  // Interactive Reservation Builder state
  const [guests, setGuests] = useState("2");
  const [date, setDate] = useState("");
  const [period, setPeriod] = useState("Jantar (a partir das 19h)");
  const [occasion, setOccasion] = useState("Jantar Especial");
  const [notes, setNotes] = useState("");

  // Concierge FAQ toggle
  const [openFaq, setOpenFaq] = useState(0);

  // VIP Club Newsletter simulator
  const [vipEmail, setVipEmail] = useState("");
  const [vipSubmitted, setVipSubmitted] = useState(false);

  // Generate polite WhatsApp message url
  const buildWhatsAppUrl = () => {
    const formattedDate = date ? new Date(date + "T12:00:00").toLocaleDateString("pt-BR") : "uma data a combinar";
    const text = `Olá, Pepe Nero Ristorante! Gostaria de consultar disponibilidade para reserva:
• Pessoas: ${guests}
• Data pretendida: ${formattedDate}
• Período: ${period}
• Ocasião: ${occasion}
${notes ? `• Observações: ${notes}` : ""}

Poderiam me informar a disponibilidade e como proceder com a confirmação? Muito obrigado!`;

    return `https://wa.me/5561995530777?text=${encodeURIComponent(text)}`;
  };

  const faqs = [
    {
      q: "É necessário reservar com antecedência para o jantar?",
      a: "Recomendamos fortemente a reserva prévia, especialmente para as noites de quinta a domingo e datas comemorativas, pois o salão possui capacidade intimista e as massas são preparadas artesanalmente.",
    },
    {
      q: "Vocês possuem taxa de rolha para vinhos trazidos pelo cliente?",
      a: "Sim, disponibilizamos serviço de sommelieria com taxa de rolha por garrafa de vinho não constante em nossa carta. Consulte o valor atualizado e condições diretamente pelo WhatsApp da casa.",
    },
    {
      q: "Há opções vegetarianas e para pessoas com restrições alimentares?",
      a: "Sim! Nosso cardápio conta com opções vegetarianas (como a Burrata Pugliese, Gnocchi ao Gorgonzola, Risotto ai Funghi e Pizza Margherita D.O.P.) e a equipe pode orientar sobre adaptações e ingredientes de cada receita.",
    },
    {
      q: "Vocês realizam celebrações de aniversários ou jantares em grupo?",
      a: "Sim, recebemos pequenas comemorações e celebrações reservadas com cardápio harmonizado pré-acordado. Entre em contato com antecedência para planejar a sua data especial.",
    },
  ];

  return (
    <section id="reservas" className="relative py-24 bg-[#141113] overflow-hidden">
      {/* Decorative subtle glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#580E18]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F0408] border border-[#D8B25C]/30 text-[#D8B25C] text-xs font-cinzel tracking-[0.25em] uppercase mb-4">
            <MessageCircle className="w-3.5 h-3.5" />
            Atendimento & Relacionamento
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#FAF1D9] tracking-tight mb-4">
            Planeje sua Visita & Solicite sua Reserva
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D8B25C] to-transparent mx-auto mb-4" />
          <p className="text-sm sm:text-base text-[#EDE5D6]/80 font-sans leading-relaxed">
            Monte os detalhes do seu jantar ou almoço e envie diretamente para a equipe do Pepe Nero pelo WhatsApp oficial com uma mensagem formatada com elegância.
          </p>
        </div>

        {/* Two-Column Grid: Reservation Builder & Interactive Concierge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Left Column: Interactive WhatsApp Reservation Assistant (7 cols) */}
          <div className="lg:col-span-7 bg-[#1A1719] rounded-3xl p-6 sm:p-8 border border-[#D8B25C]/30 shadow-2xl relative">
            
            {/* Header of the Form */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
              <div>
                <span className="text-xs font-cinzel tracking-wider text-[#D8B25C] uppercase block mb-1">
                  Assistente de Reservas
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-[#FAF1D9]">
                  Personalize sua Solicitação
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#2A050B] border border-[#D8B25C]/30 flex items-center justify-center text-[#D8B25C]">
                <Calendar className="w-5 h-5" />
              </div>
            </div>

            {/* Inputs Form */}
            <div className="space-y-5">
              
              {/* Row 1: Guests & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-cinzel tracking-wider text-[#EDE5D6]/80 uppercase mb-2">
                    Número de Pessoas
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D8B25C]" />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#121011] border border-white/10 text-xs text-[#FAF1D9] focus:outline-none focus:border-[#D8B25C]"
                    >
                      <option value="1">1 Pessoa</option>
                      <option value="2">2 Pessoas (Casal)</option>
                      <option value="3 a 4">3 a 4 Pessoas</option>
                      <option value="5 a 6">5 a 6 Pessoas</option>
                      <option value="7 a 10">7 a 10 Pessoas</option>
                      <option value="Mais de 10 (Grupo)">Mais de 10 Pessoas (Grupo)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-cinzel tracking-wider text-[#EDE5D6]/80 uppercase mb-2">
                    Data Pretendida
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#121011] border border-white/10 text-xs text-[#FAF1D9] focus:outline-none focus:border-[#D8B25C]"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Period & Occasion */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-cinzel tracking-wider text-[#EDE5D6]/80 uppercase mb-2">
                    Horário / Período
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D8B25C]" />
                    <select
                      value={period}
                      onChange={(e) => setPeriod(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#121011] border border-white/10 text-xs text-[#FAF1D9] focus:outline-none focus:border-[#D8B25C]"
                    >
                      <option value="Almoço (12h às 15h)">Almoço (12h às 15h)</option>
                      <option value="Jantar - Primeiro Horário (19h às 21h)">Jantar (19h às 21h)</option>
                      <option value="Jantar - Segundo Horário (21h às 23h30)">Jantar (21h às 23h30)</option>
                      <option value="Horário Flexível">Horário Flexível</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-cinzel tracking-wider text-[#EDE5D6]/80 uppercase mb-2">
                    Ocasião
                  </label>
                  <select
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#121011] border border-white/10 text-xs text-[#FAF1D9] focus:outline-none focus:border-[#D8B25C]"
                  >
                    <option value="Jantar Especial">Jantar Especial</option>
                    <option value="Aniversário ou Comemoração">Aniversário / Celebração</option>
                    <option value="Encontro Romântico">Encontro Romântico</option>
                    <option value="Almoço em Família">Almoço em Família</option>
                    <option value="Reunião de Negócios">Encontro Corporativo</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Special Notes */}
              <div>
                <label className="block text-xs font-cinzel tracking-wider text-[#EDE5D6]/80 uppercase mb-2">
                  Observações Especiais (Opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ex: Mesa externa, preferência por área silenciosa, alergia a frutos do mar..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#121011] border border-white/10 text-xs text-[#FAF1D9] placeholder-[#EDE5D6]/40 focus:outline-none focus:border-[#D8B25C]"
                />
              </div>

              {/* Preview Box of the Message to WhatsApp */}
              <div className="p-4 rounded-xl bg-[#0E0C0D] border border-white/5 space-y-2">
                <span className="text-[11px] font-cinzel tracking-wider text-[#D8B25C] uppercase block">
                  Prévia da Mensagem Formatada
                </span>
                <p className="text-xs text-[#EDE5D6]/70 italic leading-relaxed font-mono whitespace-pre-line bg-[#161416] p-3 rounded-lg border border-white/5">
                  {`Olá, Pepe Nero! Gostaria de consultar disponibilidade para ${guests} pessoa(s) em ${date ? new Date(date + "T12:00:00").toLocaleDateString("pt-BR") : "[Data]"}, no período ${period}. Ocasião: ${occasion}.`}
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-[#EDE5D6]/60">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D8B25C]" />
                  <span>O envio direciona para o WhatsApp oficial (61) 99553-0777 para validação e confirmação da mesa.</span>
                </div>
              </div>

              {/* Submit to WhatsApp Button */}
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 py-4 rounded-full bg-gradient-to-r from-[#580E18] via-[#771523] to-[#8E1C2C] text-[#FCF4DF] font-semibold text-xs sm:text-sm tracking-widest uppercase border border-[#D8B25C]/40 shadow-xl shadow-[#580E18]/40 hover:scale-[1.02] transition-transform"
              >
                <MessageCircle className="w-5 h-5 text-[#D8B25C]" />
                <span>Solicitar Reserva via WhatsApp Oficial</span>
              </a>

            </div>
          </div>

          {/* Right Column: Smart FAQ Accordion & VIP Club (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* FAQ Accordion */}
            <div className="bg-[#1A1719] rounded-3xl p-6 sm:p-7 border border-white/10">
              <div className="flex items-center gap-2 mb-6">
                <HelpCircle className="w-5 h-5 text-[#D8B25C]" />
                <h3 className="text-lg font-serif text-[#FAF1D9]">
                  Dúvidas Frequentes
                </h3>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/5 bg-[#121011] overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                      className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-serif text-[#FAF1D9] hover:text-[#D8B25C] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#D8B25C] transition-transform duration-300 shrink-0 ml-2 ${
                          openFaq === idx ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="px-4 pb-4 text-xs text-[#EDE5D6]/75 leading-relaxed border-t border-white/5 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Demonstrative VIP Club / Loyalty Simulation */}
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#2A050B] to-[#140205] border border-[#D8B25C]/40 text-[#FAF1D9] shadow-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#D8B25C] text-[10px] font-cinzel tracking-widest uppercase mb-3">
                <Gift className="w-3.5 h-3.5 text-[#ECCF96]" />
                Conceito de Fidelização
              </div>
              
              <h4 className="text-xl font-serif mb-2">
                Circolo Gastronomico Pepe Nero
              </h4>
              <p className="text-xs text-[#EDE5D6]/80 leading-relaxed mb-4">
                Demonstração conceitual para captação de clientes fiéis e convite para degustações sazonais, noites de massas e vinhos de Modena.
              </p>

              {vipSubmitted ? (
                <div className="p-4 rounded-xl bg-white/10 border border-[#D8B25C]/50 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D8B25C] shrink-0" />
                  <span className="text-xs text-[#FAF1D9]">
                    Inscrição demonstrativa simulada com sucesso!
                  </span>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (vipEmail) setVipSubmitted(true);
                  }}
                  className="space-y-3"
                >
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D8B25C]" />
                    <input
                      type="email"
                      required
                      placeholder="Seu melhor e-mail..."
                      value={vipEmail}
                      onChange={(e) => setVipEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#0E0C0D] border border-white/15 text-xs text-white placeholder-[#EDE5D6]/40 focus:outline-none focus:border-[#D8B25C]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-full bg-[#D8B25C] hover:bg-[#ECCF96] text-[#1A0306] font-semibold text-xs font-cinzel tracking-wider uppercase transition-colors"
                  >
                    Simular Participação no Clube
                  </button>
                  <span className="block text-[10px] text-[#EDE5D6]/50 text-center">
                    (Demonstração conceitual sem disparo real de mensagens)
                  </span>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
