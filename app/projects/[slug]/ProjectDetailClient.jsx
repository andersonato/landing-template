"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { getTranslation, getLocalizedProject } from "../../data/translations";

export default function ProjectDetailClient({ project }) {
  const [language, setLanguage] = useState("en");
  useEffect(() => {
    const saved = window.localStorage.getItem("uptovai-language");
    if (saved && ["en", "pt", "es"].includes(saved)) setLanguage(saved);
  }, []);
  const t = (key) => getTranslation(language, key);
  const localized = getLocalizedProject(project, language);
  const images = localized.images?.length ? localized.images : [localized.src];

  return (
    <main className="min-h-screen bg-[#fbf9f6] px-6 pb-24 pt-28 text-[#2b2621] md:px-12 lg:px-24">
      <div className="fixed right-6 top-5 z-[110] flex h-9 w-[112px] items-center justify-center gap-1 border border-[#e8dfd5] bg-[#fbf9f6]/95 text-[10px] font-bold tracking-widest backdrop-blur md:right-12">
        {["en", "pt", "es"].map((code) => <button key={code} type="button" onClick={() => { setLanguage(code); window.localStorage.setItem("uptovai-language", code); document.documentElement.lang = code; }} aria-pressed={language === code} className={language === code ? "px-1.5 py-1 text-[#8c7b6c] underline underline-offset-4" : "px-1.5 py-1 text-[#594d42]/60"}>{code.toUpperCase()}</button>)}
      </div>
      <div className="mx-auto max-w-7xl">
        <Link href="/?view=projects" className="mb-10 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8c7b6c] hover:text-[#2b2621]"><ArrowLeft size={14} />{t("backPortfolio")}</Link>
        <header className="mb-12 max-w-4xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8c7b6c]">{localized.category}</span>
          <h1 className="mt-4 font-serif text-4xl font-light leading-tight md:text-6xl">{localized.title}</h1>
          {localized.description && <p className="mt-6 max-w-2xl text-sm font-light leading-relaxed text-[#75685c]">{localized.description}</p>}
        </header>
        <section className="grid gap-6 md:grid-cols-2">
          {images.map((image, index) => <figure key={image} className={index === 0 ? "md:col-span-2" : ""}><img src={image} alt={`${localized.title} — ${index + 1}`} loading={index === 0 ? "eager" : "lazy"} className="max-h-[760px] w-full bg-[#f4eee8] object-cover" /></figure>)}
        </section>
        {localized.video && <section className="mt-16"><div className="mb-5 flex items-center gap-3"><Play size={17} className="text-[#8c7b6c]" /><h2 className="font-serif text-2xl">{t("projectWalkthrough")}</h2></div><video className="w-full border border-[#e8dfd5] bg-black" controls preload="metadata" playsInline poster={localized.src}><source src={localized.video} type="video/mp4" />{language === "pt" ? "O seu navegador não suporta vídeo." : language === "es" ? "Tu navegador no admite vídeo." : "Your browser does not support video."}</video></section>}
        <section className="mt-20 flex flex-col items-start justify-between gap-6 border border-[#d8c3b0] bg-[#faf6f0] p-8 md:flex-row md:items-center md:p-12">
          <div><span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8c7b6c]">{t("similarProject")}</span><h2 className="mt-3 font-serif text-2xl md:text-3xl">{t("supportPractice")}</h2></div>
          <Link href="/?view=projects" className="inline-flex shrink-0 items-center gap-3 bg-[#2b2621] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:bg-[#8c7b6c]">{t("backPortfolio")} <ArrowRight size={14} /></Link>
        </section>
      </div>
    </main>
  );
}
