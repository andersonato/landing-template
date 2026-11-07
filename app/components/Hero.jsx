
import { ArrowRight, Grid } from "lucide-react";

export default function Hero({ navigateTo, scrollToSolutions }) {
  return (
    <section className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-6 pb-20 pt-36 md:px-12 lg:px-24">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="space-y-8 lg:col-span-7">
          <h1 className="font-serif text-4xl font-light leading-[1.1] tracking-tight text-[#2b2621] sm:text-6xl lg:text-7xl">
            You focus on the ideas.
            <br />
            <span className="font-normal italic text-[#8c7b6c]">
              I'll help you bring them to life.
            </span>
          </h1>

          <p className="max-w-2xl text-base font-light leading-relaxed text-[#594d42] sm:text-lg">
            Reliable, professional remote technical support for architecture
            practices. Helping teams manage workloads, prepare technical
            documentation, and meet project deadlines effortlessly.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => navigateTo("projects")}
              className="flex items-center gap-3 bg-[#2b2621] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.25em] text-white transition-all hover:bg-[#8c7b6c]"
            >
              View Real Projects
              <Grid size={14} />
            </button>

            <button
              onClick={scrollToSolutions}
              className="border border-[#b8a798] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#2b2621] transition-all hover:bg-[#f4eee8]"
            >
              Explore Services
            </button>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <button
            onClick={() => navigateTo("projects")}
            className="group relative block w-full cursor-pointer border border-[#d8c3b0] bg-white p-3 text-left shadow-xl"
            aria-label="View architectural projects"
          >
            <img
              src="/project-01.webp"
              alt="Modern Villa with Gym and Pool"
              className="h-[420px] w-full object-cover brightness-[0.98] contrast-[1.02] transition-transform duration-500 group-hover:scale-[1.02]"
            />

            <div className="flex items-center justify-between border-t border-[#f0e6dc] bg-[#faf6f0] p-4">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8c7b6c]">
                  Featured Project
                </span>

                <p className="mt-0.5 font-serif text-sm italic text-[#2b2621]">
                  Modern Villa with Gym & Poolside Terrace
                </p>
              </div>

              <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-[#8c7b6c] transition-colors group-hover:text-[#2b2621]">
                View All
                <ArrowRight size={12} />
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
