import React, { useState } from "react";
import { Camera, Eye, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { galleryItems } from "../data/galleryData";

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("todos");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = [
    { id: "todos", label: "Toda a Coleção" },
    { id: "massas", label: "Massas Artesanais" },
    { id: "pratos", label: "Carni & Pratos" },
    { id: "pizzas", label: "Pizzas" },
    { id: "ambiente", label: "O Nosso Salão" },
    { id: "vinhos", label: "Vinhos & Bar" },
  ];

  const filteredItems = galleryItems.filter((item) => {
    return activeFilter === "todos" || item.category === activeFilter;
  });

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="galeria" className="relative py-24 bg-[#0E0C0D] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F0408] border border-[#D8B25C]/30 text-[#D8B25C] text-xs font-cinzel tracking-[0.25em] uppercase mb-4">
            <Camera className="w-3.5 h-3.5" />
            Ensaio Gastronômico
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#FAF1D9] tracking-tight mb-4">
            Experiência & Atmosfera
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D8B25C] to-transparent mx-auto mb-4" />
          <p className="text-sm sm:text-base text-[#EDE5D6]/80 font-sans leading-relaxed">
            Um vislumbre visual da dedicação artesanal na cozinha, das noites intimistas no salão e das composições que encantam os sentidos.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-cinzel tracking-wider uppercase transition-all ${
                activeFilter === cat.id
                  ? "bg-[#D8B25C] text-[#140306] font-semibold shadow-md shadow-[#D8B25C]/20"
                  : "bg-[#181618] text-[#EDE5D6]/70 hover:text-white hover:bg-[#252225] border border-white/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Gallery Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-[#D8B25C]/40 transition-all duration-500 shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                loading="lazy"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0D] via-[#0E0C0D]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Tag Badge */}
              <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-[#180205]/90 border border-[#D8B25C]/40 text-[10px] font-cinzel tracking-wider text-[#FAF1D9]">
                {item.tag}
              </div>

              {/* Caption & Title */}
              <div className="absolute bottom-4 left-4 right-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-serif text-[#FAF1D9] group-hover:text-[#D8B25C] transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#EDE5D6]/80 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-[11px] text-[#D8B25C] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Ampliar fotografia</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg animate-fadeIn">
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 z-20 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 text-white hover:bg-[#580E18] transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 text-white hover:bg-[#580E18] transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Center Image Card */}
          <div className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[65vh] w-auto max-w-full rounded-2xl object-contain border border-[#D8B25C]/30 shadow-2xl"
            />
            <div className="text-center mt-5 max-w-xl">
              <span className="text-xs font-cinzel text-[#D8B25C] uppercase tracking-widest block mb-1">
                {filteredItems[lightboxIndex].tag} • Pepe Nero
              </span>
              <h3 className="text-2xl font-serif text-[#FAF1D9] mb-1">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#EDE5D6]/80 leading-relaxed">
                {filteredItems[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
