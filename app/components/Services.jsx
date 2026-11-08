
"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Compass,
  FileText,
  Layers,
  UserCheck,
  X,
} from "lucide-react";

const iconComponents = {
  FileText,
  Layers,
  Compass,
  UserCheck,
};


function DraftingPortfolio({ language = "en" }) {
  const [activeCollection, setActiveCollection] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  const labels = language === "pt"
    ? ["Marcenaria", "Obra", "Pedras"]
    : language === "es"
      ? ["Carpintería", "Obra", "Piedra"]
      : ["Joinery", "Construction", "Stonework"];

  const collections = [
    {
      id: "marcenaria",
      title: labels[0],
      cover: "/images/drafting/marcenaria/marcenaria%20capa.webp",
      images: [
        "/images/drafting/marcenaria/marcenaria%20capa.webp",
        ...[2, 3, 4, 5, 6, 7].map((n) => `/images/drafting/marcenaria/marcenaria%20${n}.webp`),
      ],
    },
    {
      id: "obra",
      title: labels[1],
      cover: "/images/drafting/obra/obra%20capa.webp",
      images: [
        "/images/drafting/obra/obra%20capa.webp",
        ...[1, 2, 3, 4, 5, 6, 7].map((n) => `/images/drafting/obra/obra%20${n}.webp`),
      ],
    },
    {
      id: "pedras",
      title: labels[2],
      cover: "/images/drafting/pedras/pedra%20capa.webp",
      images: [
        "/images/drafting/pedras/pedra%20capa.webp",
        ...[1, 2, 3, 4].map((n) => `/images/drafting/pedras/pedra%20${n}.webp`),
      ],
    },
  ];

  const selected = collections.find((collection) => collection.id === activeCollection);

  useEffect(() => {
    if (!selected) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event) => {
      if (event.key === "Escape") setActiveCollection(null);
      if (event.key === "ArrowRight") setActiveImage((index) => (index + 1) % selected.images.length);
      if (event.key === "ArrowLeft") setActiveImage((index) => (index - 1 + selected.images.length) % selected.images.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  const openCollection = (id) => {
    setActiveImage(0);
    setActiveCollection(id);
  };
  const closeCollection = () => {
    setActiveCollection(null);
    setActiveImage(0);
  };
  const previousImage = () => setActiveImage((index) => (index - 1 + selected.images.length) % selected.images.length);
  const nextImage = () => setActiveImage((index) => (index + 1) % selected.images.length);

  return (
    <>
      <div className="w-full overflow-hidden border border-[#e8dfd5] bg-white p-3">
        <div className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth">
          {collections.map((collection, index) => (
            <button
              key={collection.id}
              type="button"
              onClick={() => openCollection(collection.id)}
              aria-label={language === "pt" ? `Abrir galeria de ${collection.title}` : language === "es" ? `Abrir galería de ${collection.title}` : `Open ${collection.title} gallery`}
              className="group relative h-[320px] w-[88%] shrink-0 snap-start overflow-hidden border border-[#e8dfd5] bg-[#f4eee8] text-left md:h-[450px] md:w-[88%]"
            >
              <img
                src={collection.cover}
                alt={collection.title}
                loading={index === 0 ? "eager" : "lazy"}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-[#2b2621]/80 px-5 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                {collection.title}
                <ArrowRight size={16} />
              </span>
            </button>
          ))}
        </div>
        <div className="flex items-center justify-between px-1 pt-3 font-mono text-[9px] uppercase tracking-[0.16em] text-[#8c7b6c]">
          <span>{language === "pt" ? "Deslize para explorar" : language === "es" ? "Desliza para explorar" : "Scroll to explore"}</span>
          <span>01 / 03</span>
        </div>
      </div>

      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={closeCollection}
          className="fixed inset-0 z-[300] flex flex-col bg-[#171717] text-white"
        >
          <div className="flex items-center justify-between border-b border-white/15 px-5 py-4 md:px-10">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/55">
                {language === "pt" ? "Portfólio técnico" : language === "es" ? "Portafolio técnico" : "Technical portfolio"}
              </p>
              <h2 className="mt-1 font-serif text-xl md:text-2xl">{selected.title}</h2>
            </div>
            <button
              type="button"
              onClick={closeCollection}
              aria-label={language === "pt" ? "Fechar galeria" : language === "es" ? "Cerrar galería" : "Close gallery"}
              className="flex h-11 w-11 items-center justify-center border border-white/30 transition-colors hover:bg-white hover:text-[#171717]"
            >
              <X size={21} />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-3 py-5 md:px-16">
            <button
              type="button"
              onClick={(event) => { event.stopPropagation(); previousImage(); }}
              aria-label={language === "pt" ? "Imagem anterior" : language === "es" ? "Imagen anterior" : "Previous image"}
              className="absolute left-3 z-10 flex h-10 w-10 items-center justify-center border border-white/35 bg-black/30 transition-colors hover:bg-white hover:text-[#171717] md:left-7 md:h-12 md:w-12"
            >
              <ChevronLeft size={24} />
            </button>
            <img
              src={selected.images[activeImage]}
              alt={`${selected.title} — ${activeImage + 1}`}
              onClick={(event) => event.stopPropagation()}
              className="max-h-full max-w-full select-none object-contain"
            />
            <button
              type="button"
              onClick={(event) => { event.stopPropagation(); nextImage(); }}
              aria-label={language === "pt" ? "Próxima imagem" : language === "es" ? "Imagen siguiente" : "Next image"}
              className="absolute right-3 z-10 flex h-10 w-10 items-center justify-center border border-white/35 bg-black/30 transition-colors hover:bg-white hover:text-[#171717] md:right-7 md:h-12 md:w-12"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex items-center justify-center gap-5 border-t border-white/15 px-5 py-4">
            <span className="font-mono text-[10px] tracking-[0.18em] text-white/70 tabular-nums">
              {String(activeImage + 1).padStart(2, "0")} / {String(selected.images.length).padStart(2, "0")}
            </span>
            <span className="text-[9px] uppercase tracking-[0.18em] text-white/45">
              {language === "pt" ? "Use as setas para navegar" : language === "es" ? "Usa las flechas para navegar" : "Use arrows to navigate"}
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default function Services({
  variant = "home",
  service,
  services = {},
  carouselRef,
  scrollCarousel,
  navigateTo,
  t,
  language = "en",
}) {
  // SERVICE DETAIL PAGE
  if (variant === "detail" && service) {
    const Icon = iconComponents[service.icon] || FileText;

    return (
      <section className="relative z-10 mx-auto min-h-screen max-w-7xl px-6 pb-24 pt-36 md:px-12 lg:px-24">
        <button
          onClick={() => navigateTo?.("home")}
          className="mb-10 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8c7b6c] transition-colors hover:text-[#2b2621]"
        >
          <ArrowLeft size={14} />
          {t("backHome")}
        </button>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            {service.id !== "drafting" && service.id !== "modelling" && service.id !== "digitalisation" && service.id !== "support" && (
              <div className="mb-6 flex items-center gap-4">
                <Icon size={34} className="text-[#8c7b6c]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8c7b6c]">
                  {t("architecturalServices")}
                </span>
              </div>
            )}

            <h1 className="mb-6 font-serif text-3xl font-bold leading-tight text-[#2b2621] md:text-5xl">
              {service.title}
            </h1>

            <p className="mb-8 text-sm leading-8 text-[#594d42]">
              {service.fullContent || service.tagline}
            </p>

            <button
              onClick={() => navigateTo?.("contact")}
              className="inline-flex items-center gap-3 bg-[#8c7b6c] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#2b2621]"
            >
              {t("requestProposal")}
              <ArrowRight size={15} />
            </button>
          </div>

          {service.id === "drafting" ? (
            <DraftingPortfolio language={language} />
          ) : (
            <div className="overflow-hidden border border-[#e8dfd5] bg-white p-3">
              <img
                src={service.img}
                alt={service.title}
                className="h-[320px] w-full object-cover md:h-[450px]"
              />
            </div>
          )}
        </div>

        <div className="mt-20 grid gap-12 border-t border-[#e8dfd5] pt-12 md:grid-cols-2">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8c7b6c]">
              {t("whatDeliver")}
            </span>

            <h2 className="mb-8 mt-3 font-serif text-2xl font-bold text-[#2b2621]">
              {t("scopeServices")}
            </h2>

            <div className="space-y-5">
              {(service.deliverables || []).map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-[#8c7b6c]"
                  />
                  <p className="text-sm leading-relaxed text-[#594d42]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8c7b6c]">
              {t("ourProcess")}
            </span>

            <h2 className="mb-8 mt-3 font-serif text-2xl font-bold text-[#2b2621]">
              {t("workflow")}
            </h2>

            <div className="space-y-6">
              {(service.workflow || []).map((step) => (
                <div
                  key={step.id}
                  className="flex items-start gap-5 border-b border-[#e8dfd5] pb-5"
                >
                  <span className="font-serif text-2xl font-light text-[#b8a798]">
                    {step.id}
                  </span>

                  <p className="pt-1 text-sm leading-relaxed text-[#594d42]">
                    {step.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 border border-[#e8dfd5] bg-[#f4eee8] p-8 text-center md:p-12">
          <h2 className="font-serif text-2xl font-bold text-[#2b2621] md:text-3xl">
            {t("needSupport")}
          </h2>

          <p className="mx-auto mb-7 mt-4 max-w-xl text-sm leading-7 text-[#594d42]">
            {t("tailoredProposal")}
          </p>

          <button
            onClick={() => navigateTo?.("contact")}
            className="inline-flex items-center gap-3 bg-[#8c7b6c] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#2b2621]"
          >
            {t("getInTouch")}
            <ArrowRight size={15} />
          </button>
        </div>
      </section>
    );
  }

  // HOME SERVICES SECTION
  const serviceList = Object.values(
    Object.keys(services).length ? services : {}
  );

  const handleScroll = (direction) => {
    if (scrollCarousel) {
      scrollCarousel(direction);
      return;
    }

    if (!carouselRef?.current) return;

    const amount = carouselRef.current.offsetWidth * 0.7;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="services-section"
      className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-12 lg:px-24"
    >
      <div className="mb-12 flex items-end justify-between gap-6">
        <div>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl text-[#2b2621] md:text-4xl">
            {t("servicesHeading")}
          </h2>
        </div>

        <div className="hidden gap-3 sm:flex">
          <button
            type="button"
            onClick={() => handleScroll("left")}
            aria-label={t("previousServices")}
            className="border border-[#d8c3b0] p-3 text-[#2b2621] transition-all hover:bg-[#8c7b6c] hover:text-white"
          >
            <ChevronLeft size={17} />
          </button>

          <button
            type="button"
            onClick={() => handleScroll("right")}
            aria-label={t("nextServices")}
            className="border border-[#d8c3b0] p-3 text-[#2b2621] transition-all hover:bg-[#8c7b6c] hover:text-white"
          >
            <ChevronRight size={17} />
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4"
      >
        {serviceList.map((item) => {
          const Icon = iconComponents[item.icon] || FileText;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => navigateTo?.(item.id)}
              className="group flex min-w-[280px] snap-start flex-col border border-[#e6ddd3] bg-white text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#b8a798] hover:shadow-lg md:min-w-[320px]"
            >
              <div className="h-52 w-full overflow-hidden border-b border-[#f0e6dc]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-4 font-serif text-xl font-bold leading-snug text-[#2b2621]">
                  {item.title}
                </h3>

                <p className="flex-1 text-xs font-light leading-7 text-[#594d42]">
                  {item.tagline}
                </p>

                <div className="mt-7 flex items-center justify-between border-t border-[#f0e6dc] pt-5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#8c7b6c]">
                  <span>{t("viewScope")}</span>

                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <p className="text-[10px] uppercase tracking-[0.15em] text-[#8c7b6c]">
          {t("exploreAll")}
        </p>

        <button
          type="button"
          onClick={() => navigateTo?.("contact")}
          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2b2621] transition-colors hover:text-[#8c7b6c]"
        >
          {t("discussProject")}
          <ArrowRight size={14} />
        </button>
      </div>
    </section>
  );
}
