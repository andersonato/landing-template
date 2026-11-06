import { ArrowRight } from "lucide-react";

const solutions = [
  ["Extra support for your team", "An external collaborator who integrates with your workflow."],
  ["Help with specific tasks", "Clearly defined deliverables and agreed deadlines."],
  ["Presentations for your clients", "Professional 3D models and architectural visualisations."],
  ["Managing peak workloads", "One-off or ongoing technical support."],
  ["Work without expanding your team", "Remote collaboration with an agreed scope, timeline and budget."],
  ["International standards", "Communication and collaboration in English, Portuguese and Spanish."],
];

export default function Features({ variant = "home", navigateTo }) {
  if (variant === "about") {
    return (
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12 lg:px-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8c7b6c]">
              About Me
            </span>

            <h2 className="mt-5 font-serif text-4xl font-light leading-tight text-[#2b2621] md:text-5xl">
              Hello, I'm Elissandra.
            </h2>

            <div className="mt-8 space-y-5 text-sm font-light leading-relaxed text-[#594d42]">
              <p>
                I'm an architect based in Porto, Portugal, providing remote
                technical support to architecture practices.
              </p>

              <p>
                Over the years, I've supported dozens of architects, helping
                practices manage workloads, prepare technical documentation
                and deliver projects efficiently.
              </p>

              <p>
                I also collaborate with a network of qualified architectural
                professionals across Portugal, Spain and Brazil, allowing me
                to provide flexible support according to each project's needs.
              </p>

              <p>
                Having lived and worked in Australia as an architectural
                collaborator, I bring an international perspective to my work.
                I communicate professionally in English, Portuguese and Spanish.
              </p>

              <p>
                My software experience includes AutoCAD, Revit, SketchUp,
                Lumion, Photoshop and Illustrator.
              </p>
            </div>

            <button
              onClick={() => navigateTo("contact")}
              className="mt-9 inline-flex items-center gap-3 bg-[#2b2621] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#8c7b6c]"
            >
              Get in Touch
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="relative">
            <img
              src="/project-04.webp"
              alt="Architectural project with covered outdoor dining area"
              className="h-[520px] w-full object-cover"
            />
            <div className="absolute -bottom-5 -left-5 border border-[#d8c3b0] bg-[#faf6f0] px-7 py-5">
              <p className="font-serif text-2xl italic text-[#2b2621]">
                Architecture & Technical Support
              </p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#8c7b6c]">
                Porto · Portugal
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 lg:px-24">
      <div className="py-20">
        <div className="mb-12 max-w-2xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8c7b6c]">
            How I Can Help
          </span>

          <h2 className="mt-5 font-serif text-4xl font-light text-[#2b2621] md:text-5xl">
            Every Need Has A Solution.
          </h2>
        </div>

        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map(([need, solution], index) => (
            <div key={need} className="border-t border-[#d8c3b0] pt-5">
              <span className="font-mono text-xs text-[#a89787]">
                0{index + 1}
              </span>

              <h3 className="mt-3 font-serif text-xl text-[#2b2621]">
                {need}
              </h3>

              <p className="mt-3 text-sm font-light leading-relaxed text-[#75685c]">
                {solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
