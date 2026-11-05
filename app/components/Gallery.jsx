
"use client";

import { ArrowLeft, ArrowRight, Maximize2, X } from "lucide-react";

export default function Gallery({
  projects = [],
  setSelectedImage,
  navigateTo,
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 lg:px-24">
      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8c7b6c]">
            Selected Work
          </span>

          <h1 className="mt-5 font-serif text-4xl font-light text-[#2b2621] md:text-5xl">
            Portfolio Projects
          </h1>

          <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-[#75685c]">
            A selection of architectural modelling, technical documentation
            and visualisation projects.
          </p>
        </div>

        <span className="font-mono text-xs text-[#8c7b6c]">
          {String(projects.length).padStart(2, "0")} PROJECTS
        </span>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <button
            key={project.id}
            onClick={() => setSelectedImage(project)}
            className="group text-left"
          >
            <div className="relative overflow-hidden bg-[#f4eee8]">
              <img
                src={project.src}
                alt={project.title}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-[#2b2621]/0 transition-all duration-300 group-hover:bg-[#2b2621]/25">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#faf6f0] text-[#2b2621] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Maximize2 size={17} />
                </span>
              </div>
            </div>

            <div className="flex items-start justify-between gap-4 border-b border-[#e6ddd3] py-4">
              <div>
                <h3 className="font-serif text-lg text-[#2b2621]">
                  {project.title}
                </h3>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#8c7b6c]">
                  {project.category}
                </p>
              </div>

              <span className="pt-1 font-mono text-xs text-[#a89787]">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-20 border border-[#d8c3b0] bg-[#faf6f0] px-8 py-12 text-center md:px-16">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8c7b6c]">
          Let's Work Together
        </span>

        <h2 className="mx-auto mt-5 max-w-2xl font-serif text-3xl font-light leading-tight text-[#2b2621] md:text-4xl">
          Need Similar Renders or Technical Drawings for Your Practice?
        </h2>

        <button
          onClick={() => navigateTo("contact")}
          className="mt-8 inline-flex items-center gap-3 bg-[#2b2621] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#8c7b6c]"
        >
          Request Custom Quotation
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Image lightbox is managed by SectionRenderer */}
      <span className="hidden">
        <ArrowLeft />
        <X />
      </span>
    </section>
  );
}
