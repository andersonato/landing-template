import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index = 0, t }) {
  return (
    <Link href={`/projects/${project.slug}`} aria-label={`${t("viewProject")}: ${project.title}`} className="group block text-left">
      <div className="relative overflow-hidden bg-[#f4eee8]">
        <img src={project.src} alt={project.title} loading={index < 3 ? "eager" : "lazy"} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 flex items-center justify-center bg-[#2b2621]/0 transition-all duration-300 group-hover:bg-[#2b2621]/25">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#faf6f0] text-[#2b2621] opacity-0 transition-opacity duration-300 group-hover:opacity-100"><ArrowUpRight size={19} /></span>
        </div>
      </div>
      <div className="flex items-start justify-between gap-4 border-b border-[#e6ddd3] py-4">
        <div><h3 className="font-serif text-lg text-[#2b2621] transition-colors group-hover:text-[#8c7b6c]">{project.title}</h3><p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#8c7b6c]">{project.category}</p></div>
        <span className="pt-1 font-mono text-xs text-[#a89787]">{String(index + 1).padStart(2, "0")}</span>
      </div>
    </Link>
  );
}
