import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { projectImages } from "../../data/sections";

export function generateStaticParams() {
  return projectImages.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projectImages.find((item) => item.slug === slug);
  if (!project) return { title: "Project Not Found | Elissandra Oliveira" };
  return {
    title: `${project.title} | Elissandra Oliveira`,
    description: project.description || `${project.category} project by Elissandra Oliveira, architect based in Porto, Portugal.`,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projectImages.find((item) => item.slug === slug);
  if (!project) notFound();
  const images = project.images?.length ? project.images : [project.src];

  return (
    <main className="min-h-screen bg-[#fbf9f6] px-6 pb-24 pt-36 text-[#2b2621] md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="mb-10 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8c7b6c] hover:text-[#2b2621]"><ArrowLeft size={14} />Back to Portfolio</Link>
        <header className="mb-12 max-w-4xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8c7b6c]">{project.category}</span>
          <h1 className="mt-4 font-serif text-4xl font-light leading-tight md:text-6xl">{project.title}</h1>
          {project.description && <p className="mt-6 max-w-2xl text-sm font-light leading-relaxed text-[#75685c]">{project.description}</p>}
        </header>
        <section className="grid gap-6 md:grid-cols-2">
          {images.map((image, index) => <figure key={image} className={index === 0 ? "md:col-span-2" : ""}><img src={image} alt={`${project.title} — view ${index + 1}`} loading={index === 0 ? "eager" : "lazy"} className="max-h-[760px] w-full bg-[#f4eee8] object-cover" /></figure>)}
        </section>
        {project.video && <section className="mt-16"><div className="mb-5 flex items-center gap-3"><Play size={17} className="text-[#8c7b6c]" /><h2 className="font-serif text-2xl">Project Walkthrough</h2></div><video className="w-full border border-[#e8dfd5] bg-black" controls preload="metadata" playsInline poster={project.src}><source src={project.video} type="video/mp4" />Your browser does not support the video element.</video></section>}
        <section className="mt-20 flex flex-col items-start justify-between gap-6 border border-[#d8c3b0] bg-[#faf6f0] p-8 md:flex-row md:items-center md:p-12">
          <div><span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8c7b6c]">Have a similar project?</span><h2 className="mt-3 font-serif text-2xl md:text-3xl">Let's discuss how I can support your practice.</h2></div>
          <Link href="/" className="inline-flex shrink-0 items-center gap-3 bg-[#2b2621] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:bg-[#8c7b6c]">Back to Portfolio <ArrowRight size={14} /></Link>
        </section>
      </div>
    </main>
  );
}
