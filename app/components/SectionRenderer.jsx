"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Clock, FileText, UserCheck } from "lucide-react";
import { getTranslation, getLocalizedService, getLocalizedProject } from "../data/translations";
import { projectImages, serviceDetails, navigationLinks, contactInfo } from "../data/sections";
import Hero from "./Hero";
import Features from "./Features";
import Services from "./Services";
import Gallery from "./Gallery";
import Cta from "./Cta";

export default function SectionRenderer() {
  const [view, setView] = useState("home");
  const [language, setLanguage] = useState("en");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const t = (key) => getTranslation(language, key);
  const carouselRef = useRef(null);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("uptovai-language");
    if (savedLanguage && ["en", "pt", "es"].includes(savedLanguage)) setLanguage(savedLanguage);
    const requestedView = new URLSearchParams(window.location.search).get("view");
    if (requestedView === "projects") setView("projects");

    const syncLanguage = (event) => {
      if (["en", "pt", "es"].includes(event.detail)) setLanguage(event.detail);
    };
    window.addEventListener("uptovai-language-change", syncLanguage);
    return () => window.removeEventListener("uptovai-language-change", syncLanguage);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("uptovai-language", language);
  }, [language]);

  const navigateTo = useCallback((newView) => {
    if (newView === view || isTransitioning) return;
    setIsTransitioning(true);
    window.setTimeout(() => {
      setView(newView);
      window.scrollTo(0, 0);
      setIsTransitioning(false);
    }, 400);
  }, [view, isTransitioning]);

  const scrollToSolutions = () => document.getElementById("services-section")?.scrollIntoView({ behavior: "smooth" });
  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;
    const amount = carouselRef.current.offsetWidth * 0.7;
    carouselRef.current.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  const navLinks = navigationLinks.map((link) => ({
    ...link,
    name: t(link.id),
    action: () => navigateTo(link.id),
  }));
  const activeService = serviceDetails[view] ? getLocalizedService(serviceDetails[view], language) : null;
  const localizedProjects = projectImages.map((project) => getLocalizedProject(project, language));
  const localizedServices = Object.fromEntries(Object.entries(serviceDetails).map(([key, service]) => [key, getLocalizedService(service, language)]));

  const highlights = [
    { icon: Clock, title: "meetDeadlines", description: "meetDeadlinesDesc" },
    { icon: FileText, title: "highQuality", description: "highQualityDesc" },
    { icon: UserCheck, title: "flexible", description: "flexibleDesc" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-[#2b2621] selection:bg-[#d8c3b0]/40">
      <nav className="fixed z-[100] grid w-full grid-cols-[minmax(150px,1fr)_auto_auto] items-center gap-3 border-b border-[#e8dfd5] bg-white/95 px-4 py-5 backdrop-blur-md md:grid-cols-[220px_minmax(0,1fr)_112px_150px] md:gap-5 md:px-12">
        <button onClick={() => navigateTo("home")} aria-label="Elissandra Oliveira — Home" className="flex h-[72px] w-[160px] cursor-pointer items-center justify-start text-left">
          <img src="/brand/elissandra-oliveira-logo-transparent.webp" alt="Elissandra Oliveira — Architectural Support" className="block h-auto w-[140px] object-contain" />
        </button>
        <div className="no-scrollbar col-span-3 flex min-w-0 items-center gap-3 overflow-x-auto py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#594d42] md:col-span-1 md:justify-center md:gap-3 md:tracking-[0.08em]">
          {navLinks.map((link) => (
            <button key={link.id} onClick={link.action} className={`shrink-0 whitespace-nowrap px-1 py-1 transition-all duration-300 hover:text-[#2b2621] ${view === link.id ? "border-b-2 border-[#8c7b6c] text-[#8c7b6c]" : "opacity-70"}`}>{link.name}</button>
          ))}
        </div>
        <div className="col-start-3 row-start-1 flex h-8 w-[112px] shrink-0 items-center justify-center gap-1 border-l border-[#e8dfd5] pl-2 text-[10px] font-bold tracking-widest md:col-start-3">
          {["en", "pt", "es"].map((code) => (
            <button key={code} type="button" onClick={() => setLanguage(code)} aria-pressed={language === code} className={`px-1.5 py-1 transition-colors ${language === code ? "text-[#8c7b6c] underline underline-offset-4" : "text-[#594d42]/60 hover:text-[#2b2621]"}`}>{code.toUpperCase()}</button>
          ))}
        </div>
        <button onClick={() => navigateTo("contact")} className="hidden h-10 w-[150px] items-center justify-center whitespace-nowrap border border-[#8c7b6c] px-2 text-[9px] font-bold uppercase tracking-[0.08em] text-[#2b2621] transition-all duration-300 hover:bg-[#8c7b6c] hover:text-white md:col-start-4 md:inline-flex">{t("workWithMe")}</button>
      </nav>

      <main className={`relative z-10 transition-opacity duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
        {view === "home" && <>
          <Hero navigateTo={navigateTo} scrollToSolutions={scrollToSolutions} t={t} />
          <section className="relative z-10 border-y border-[#e8dfd5] bg-white py-16">
            <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3 md:px-12 lg:px-24">
              {highlights.map((item) => {
                const Icon = item.icon;
                return <div key={item.title} className="space-y-3 border border-[#e8dfd5] bg-white/60 p-6">
                  <Icon size={24} className="text-[#8c7b6c]" />
                  <h4 className="font-serif text-lg font-bold">{t(item.title)}</h4>
                  <p className="text-xs leading-relaxed text-[#594d42]">{t(item.description)}</p>
                </div>;
              })}
            </div>
          </section>
          <Features variant="home" t={t} />
          <Services services={localizedServices} carouselRef={carouselRef} scrollCarousel={scrollCarousel} navigateTo={navigateTo} t={t} />
        </>}
        {view === "projects" && <Gallery projects={localizedProjects} navigateTo={navigateTo} t={t} />}
        {view === "about" && <Features variant="about" navigateTo={navigateTo} t={t} />}
        {activeService && <Services variant="detail" service={activeService} navigateTo={navigateTo} t={t} />}
        {view === "contact" && <Cta contactInfo={contactInfo} navigateTo={navigateTo} t={t} language={language} />}
      </main>

      <footer className="relative z-10 border-t border-[#e8dfd5] bg-[#f4eee8] px-6 py-10 md:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-x-6 gap-y-7 md:grid-cols-[auto_minmax(0,1fr)_auto]">
          <div className="flex h-[62px] w-[130px] min-w-0 items-center">
            <img src="/brand/elissandra-oliveira-logo-transparent.webp" alt="Elissandra Oliveira — Architectural Support" className="block h-auto w-[120px] object-contain" />
          </div>
          <div className="flex min-w-0 flex-wrap items-center justify-center gap-x-4 gap-y-2 whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.1em] text-[#594d42] lg:flex-nowrap lg:gap-x-5">
            {navLinks.map((link) => <button key={link.id} onClick={link.action} className="shrink-0 whitespace-nowrap transition-colors hover:text-[#8c7b6c]">{link.name}</button>)}
          </div>
          <div className="whitespace-nowrap text-center font-mono text-[9px] text-[#8c7b6c] md:text-right">{contactInfo.email} <span className="px-1">•</span> {contactInfo.phone}</div>
        </div>
        <div className="mx-auto mt-7 max-w-7xl border-t border-[#e8dfd5] pt-3 text-center font-mono text-[8px] tracking-[0.08em] text-[#8c7b6c]">
          {language === "pt" ? "© " + new Date().getFullYear() + " Elissandra Oliveira. Todos os direitos reservados." : language === "es" ? "© " + new Date().getFullYear() + " Elissandra Oliveira. Todos los derechos reservados." : "© " + new Date().getFullYear() + " Elissandra Oliveira. All rights reserved."}
        </div>
      </footer>
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
