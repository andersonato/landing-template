"use client";

import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

export default function Gallery({ projects = [], navigateTo }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 lg:px-24">
      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8c7b6c]">Selected Work</span>
          <h1 className="mt-5 font-serif text-4xl font-light text-[#2b2621] md:text-5xl">Portfolio Projects</h1>
          <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-[#75685c]">A selection of architectural modelling, technical documentation and visualisation projects.</p>
        </div>
        <span className="font-mono text-xs text-[#8c7b6c]">{String(projects.length).padStart(2, "0")} PROJECTS</span>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
      </div>
      <div className="mt-20 border border-[#d8c3b0] bg-[#faf6f0] px-8 py-12 text-center md:px-16">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8c7b6c]">Let's Work Together</span>
        <h2 className="mx-auto mt-5 max-w-2xl font-serif text-3xl font-light leading-tight text-[#2b2621] md:text-4xl">Need Similar Renders or Technical Drawings for Your Practice?</h2>
        <button onClick={() => navigateTo("contact")} className="mt-8 inline-flex items-center gap-3 bg-[#2b2621] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#8c7b6c]">Request Custom Quotation <ArrowRight size={14} /></button>
      </div>
    </section>
  );
}
