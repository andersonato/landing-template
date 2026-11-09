import { Grid } from "lucide-react";

export default function Hero({ navigateTo, scrollToSolutions, t }) {
  return (
    <section className="relative z-10 isolate flex min-h-[90vh] items-start overflow-hidden px-6 pb-20 pt-36 md:px-12 lg:px-24">
      <img
        src="/projects/covered-outdoor-dining/image-02.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center brightness-[0.86]"
      />
      <div className="absolute inset-0 -z-10 bg-black/10" />

      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-2xl space-y-8">
          <h1 className="font-serif text-4xl font-light leading-[1.1] tracking-tight text-[#2b2621] sm:text-6xl lg:text-7xl">
            {t("heroTitle")}
            <br />
            <span className="font-normal italic text-white">
              {t("heroItalic")}
            </span>
          </h1>

          <p className="max-w-2xl text-base font-light leading-relaxed text-[#594d42] sm:text-lg">
            {t("heroDescription")}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => navigateTo("projects")}
              className="flex items-center gap-3 bg-[#2b2621] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.25em] text-white transition-all hover:bg-[#8c7b6c]"
            >
              {t("viewProjects")}
              <Grid size={14} />
            </button>

            <button
              onClick={scrollToSolutions}
              className="border border-[#b8a798] bg-white/75 px-8 py-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#2b2621] backdrop-blur-sm transition-all hover:bg-[#f4eee8]"
            >
              {t("exploreServices")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
