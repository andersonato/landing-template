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
    <div className="min-h-screen overflow-x-hidden bg-[#fbf9f6] font-sans text-[#2b2621] selection:bg-[#d8c3b0]/40">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(#8c7b6c_1px,transparent_1px)] opacity-20 [background-size:24px_24px]" />
      <nav className="fixed z-[100] grid w-full grid-cols-[minmax(150px,1fr)_auto_auto] items-center gap-3 border-b border-[#e8dfd5] bg-[#fbf9f6]/90 px-4 py-5 backdrop-blur-md md:grid-cols-[220px_minmax(0,1fr)_112px_150px] md:gap-5 md:px-12">
        <button onClick={() => navigateTo("home")} className="flex cursor-pointer flex-col text-left">
          <span className="font-serif text-xs font-bold tracking-[0.18em] text-[#2b2621] sm:text-sm">ELISSANDRA OLIVEIRA</span>
          <span className="font-mono text-[8px] tracking-[0.22em] text-[#8c7b6c]">{t("footerSupport").replace("/ ", "")}</span>
        </button>
        <div className="no-scrollbar col-span-3 row-start-2 flex min-w-0 items-center gap-3 overflow-x-auto py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#594d42] md:col-span-1 md:row-start-1 md:justify-center md:gap-3 md:tracking-[0.08em]">
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
          <section className="relative z-10 border-y border-[#e8dfd5] bg-[#f4eee8] py-16">
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

      <footer className="relative z-10 border-t border-[#e8dfd5] bg-[#f4eee8] px-6 py-16 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="font-serif text-sm font-bold tracking-widest text-[#2b2621]">ELISSANDRA OLIVEIRA</span>
            <span className="font-mono text-[10px] text-[#8c7b6c]">{t("footerSupport")}</span>
          </div>
          <div className="flex flex-wrap gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#594d42]">
            {navLinks.map((link) => <button key={link.id} onClick={link.action} className="transition-colors hover:text-[#8c7b6c]">{link.name}</button>)}
          </div>
          <div className="font-mono text-[10px] text-[#8c7b6c]">{contactInfo.email} • {contactInfo.phone}</div>
        </div>
      </footer>
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
