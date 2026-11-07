import { notFound } from "next/navigation";
import { projectImages } from "../../data/sections";
import ProjectDetailClient from "./ProjectDetailClient";

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
  return <ProjectDetailClient project={project} />;
}
