import React, { useState, useMemo } from "react";
import { 
  UtensilsCrossed, Salad, Wheat, Pizza, Soup, Flame, CakeSlice, 
  Search, MessageCircle, Info, Sparkles, X, Wine, Check 
} from "lucide-react";
import { menuCategories, menuDishes } from "../data/menuData";

const iconMap = {
  UtensilsCrossed,
  Salad,
  Wheat,
  Pizza,
  Soup,
  Flame,
  CakeSlice,
};

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDish, setSelectedDish] = useState(null);

  const filteredDishes = useMemo(() => {
    return menuDishes.filter((dish) => {
      const matchesCategory =
        selectedCategory === "todos" || dish.categoryId === selectedCategory;
      const matchesSearch =
        dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dish.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dish.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dish.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="cardapio" className="relative py-24 bg-[#141113] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D8B25C]/30 to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#580E18]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F0408] border border-[#D8B25C]/30 text-[#D8B25C] text-xs font-cinzel tracking-[0.25em] uppercase mb-4">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            Gastronomia Autêntica
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#FAF1D9] tracking-tight mb-4">
            Cardápio Digital & Especialidades
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D8B25C] to-transparent mx-auto mb-4" />
          <p className="text-sm sm:text-base text-[#EDE5D6]/80 font-sans leading-relaxed">
            Uma seleção de receitas preparadas na hora com rigor artesanal, ingredientes frescos e respeito às tradições regionais da Itália.
          </p>
        </div>

        {/* Demonstrative Transparency Banner (Mandatory Notice) */}
        <div className="max-w-4xl mx-auto mb-10 p-4 rounded-2xl bg-[#1A0307]/80 border border-[#D8B25C]/30 flex items-start sm:items-center gap-3.5 text-xs text-[#FAF1D9]/90 shadow-lg">
          <Info className="w-5 h-5 text-[#D8B25C] shrink-0 mt-0.5 sm:mt-0" />
          <div>
            <strong className="text-[#D8B25C] font-semibold">Nota de Transparência Institucional: </strong>
            Os itens, descrições e valores abaixo foram estruturados em caráter <span className="underline decoration-[#D8B25C]">demonstrativo e conceitual</span> para ilustrar a experiência digital proposta ao Pepe Nero. Para consultar o cardápio e os preços oficiais vigentes do dia, contate diretamente a casa pelo WhatsApp.
          </div>
        </div>

        {/* Search Bar & Category Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D8B25C]" />
            <input
              type="text"
              placeholder="Buscar massa, carne, pizza..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#1A181A] border border-white/10 text-xs text-[#FAF1D9] placeholder-[#EDE5D6]/40 focus:outline-none focus:border-[#D8B25C] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#EDE5D6]/50 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

          <div className="text-xs text-[#EDE5D6]/60">
            Mostrando <span className="text-[#D8B25C] font-semibold">{filteredDishes.length}</span> especialidades
          </div>
        </div>

        {/* Category Pills Horizontal Scroll */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {menuCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || UtensilsCrossed;
            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-cinzel tracking-wider uppercase whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-[#580E18] to-[#771523] text-[#FAF1D9] border border-[#D8B25C] shadow-lg shadow-[#580E18]/40 scale-105"
                    : "bg-[#1A181A] text-[#EDE5D6]/70 hover:text-[#FAF1D9] hover:bg-[#252225] border border-white/5"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#D8B25C]" : "text-[#EDE5D6]/60"}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dishes Grid */}
        {filteredDishes.length === 0 ? (
          <div className="text-center py-16 bg-[#161416]/50 rounded-2xl border border-white/5">
            <p className="text-[#FAF1D9] text-base mb-2 font-serif">Nenhum prato encontrado para sua busca.</p>
            <p className="text-xs text-[#EDE5D6]/60 mb-4">Tente buscar por outro ingrediente ou selecionar outra categoria.</p>
            <button
              onClick={() => {
                setSelectedCategory("todos");
                setSearchQuery("");
              }}
              className="px-4 py-2 rounded-full bg-[#580E18] text-xs text-[#FAF1D9]"
            >
              Ver todos os pratos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDishes.map((dish) => (
              <div
                key={dish.id}
                className="group flex flex-col bg-[#181517] rounded-2xl overflow-hidden border border-white/5 hover:border-[#D8B25C]/40 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-black/60"
              >
                {/* Dish Photo */}
                <div 
                  className="relative h-52 w-full overflow-hidden cursor-pointer"
                  onClick={() => setSelectedDish(dish)}
                >
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181517] via-transparent to-transparent opacity-80" />

                  {/* Highlight Badge */}
                  {dish.highlight && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#1F0408]/90 border border-[#D8B25C]/50 backdrop-blur-md text-[10px] font-cinzel tracking-wider text-[#FAF1D9] flex items-center gap-1 shadow">
                      <Sparkles className="w-3 h-3 text-[#D8B25C]" />
                      {dish.highlight}
                    </div>
                  )}

                  {/* Demonstrative Price Tag */}
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#0E0C0D]/90 border border-[#D8B25C]/40 backdrop-blur-md">
                    <span className="text-sm font-serif font-bold text-[#D8B25C]">
                      {dish.price}
                    </span>
                    <span className="text-[9px] block text-[#EDE5D6]/60 uppercase tracking-tighter text-right leading-none">
                      (Ilustrativo)
                    </span>
                  </div>
                </div>

                {/* Dish Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {dish.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-[#EDE5D6]/70 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Dish Title */}
                    <h3 
                      onClick={() => setSelectedDish(dish)}
                      className="text-lg font-serif text-[#FAF1D9] group-hover:text-[#D8B25C] transition-colors cursor-pointer mb-1 leading-snug"
                    >
                      {dish.name}
                    </h3>

                    {/* Subtitle / Key ingredients */}
                    <p className="text-xs text-[#D8B25C]/80 italic font-display mb-3">
                      {dish.subtitle}
                    </p>

                    {/* Short Description */}
                    <p className="text-xs text-[#EDE5D6]/75 line-clamp-3 leading-relaxed mb-4">
                      {dish.description}
                    </p>
                  </div>

                  {/* Dish Card Actions */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2 mt-auto">
                    <button
                      onClick={() => setSelectedDish(dish)}
                      className="text-xs text-[#FAF1D9] hover:text-[#D8B25C] font-cinzel uppercase tracking-wider flex items-center gap-1"
                    >
                      <Info className="w-3.5 h-3.5 text-[#D8B25C]" />
                      Detalhes & Harmonização
                    </button>

                    <a
                      href={`https://wa.me/5561995530777?text=Ol%C3%A1%20Pepe%20Nero!%20Gostaria%20de%20saber%20se%20o%20prato%20"${encodeURIComponent(dish.name)}"%20est%C3%A1%20dispon%C3%ADvel%20hoje.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-[#2A050B] text-[#D8B25C] hover:bg-[#580E18] hover:text-white transition-colors"
                      title="Consultar no WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Dish Expanded Detail Modal */}
      {selectedDish && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#161416] rounded-3xl border border-[#D8B25C]/40 overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedDish(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-64 sm:h-72 w-full">
              <img
                src={selectedDish.image}
                alt={selectedDish.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161416] via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-xs font-cinzel uppercase tracking-widest text-[#D8B25C] block mb-1">
                    Especialidade da Casa
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#FAF1D9]">
                    {selectedDish.name}
                  </h3>
                </div>

                <div className="text-right">
                  <span className="text-2xl font-serif font-bold text-[#D8B25C]">
                    {selectedDish.price}
                  </span>
                  <span className="block text-[10px] text-[#EDE5D6]/60 uppercase tracking-tighter">
                    Preço Ilustrativo
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-5">
              <p className="text-sm sm:text-base text-[#EDE5D6]/90 leading-relaxed">
                {selectedDish.description}
              </p>

              {/* Pairing Advice */}
              <div className="p-4 rounded-xl bg-[#22070D]/70 border border-[#D8B25C]/25 flex items-start gap-3">
                <Wine className="w-5 h-5 text-[#D8B25C] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-cinzel uppercase tracking-wider text-[#D8B25C] block font-semibold">
                    Sugestão de Harmonização
                  </span>
                  <span className="text-xs text-[#FAF1D9]/90">
                    {selectedDish.pairing}
                  </span>
                </div>
              </div>

              {/* Tags & Action */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {selectedDish.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded text-xs bg-white/5 text-[#EDE5D6]/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={`https://wa.me/5561995530777?text=Ol%C3%A1%20Pepe%20Nero!%20Gostaria%20de%20consultar%20a%20disponibilidade%20do%20prato%20"${encodeURIComponent(selectedDish.name)}"%20e%20fazer%20uma%20reserva.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#580E18] to-[#771523] text-[#FAF1D9] text-xs font-semibold uppercase tracking-wider border border-[#D8B25C]/40 hover:scale-105 transition-transform"
                >
                  <MessageCircle className="w-4 h-4 text-[#D8B25C]" />
                  <span>Consultar no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
