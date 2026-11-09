import { ArrowRight } from "lucide-react";

const solutionKeys = [
  ["meetDeadlines", "meetDeadlinesDesc"],
  ["highQuality", "highQualityDesc"],
  ["flexible", "flexibleDesc"],
  ["peakWorkloads", "peakWorkloadsDesc"],
  ["expandTeam", "expandTeamDesc"],
  ["international", "internationalDesc"],
];

export default function Features({ variant = "home", navigateTo, t }) {
  if (variant === "about") {
    return (
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12 lg:px-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="space-y-5 text-sm font-light leading-relaxed text-[#594d42]">
              <p>
                {t("aboutP1")}
              </p>

              <p>
                {t("aboutP2")}
              </p>

              <p>
                {t("aboutP3")}
              </p>

              <p>
                {t("aboutP4")}
              </p>

              <p>
                {t("aboutP5")}
              </p>
            </div>

            <button
              onClick={() => navigateTo("contact")}
              className="mt-9 inline-flex items-center gap-3 bg-[#2b2621] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#8c7b6c]"
            >
              {t("getInTouch")}
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="relative">
            <img
              src="/about-me/foto%20profissional.webp"
              alt="Elissandra Oliveira, architect"
              className="h-[520px] w-full object-contain"
            />
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
            {t("howHelp")}
          </span>

          <h2 className="mt-5 font-serif text-4xl font-light text-[#2b2621] md:text-5xl">
            {t("everyNeed")}
          </h2>
        </div>

        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {solutionKeys.map(([needKey, solutionKey]) => (
            <div key={needKey} className="border-t border-[#d8c3b0] pt-5">
              <h3 className="font-serif text-xl text-[#2b2621]">
                {t(needKey)}
              </h3>

              <p className="mt-3 text-sm font-light leading-relaxed text-[#75685c]">
                {t(solutionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
