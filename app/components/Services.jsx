
"use client";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Compass,
  FileText,
  Layers,
  UserCheck,
} from "lucide-react";

const iconComponents = {
  FileText,
  Layers,
  Compass,
  UserCheck,
};

export default function Services({
  variant = "home",
  service,
  services = {},
  carouselRef,
  scrollCarousel,
  navigateTo,
}) {
  // SERVICE DETAIL PAGE
  if (variant === "detail" && service) {
    const Icon = iconComponents[service.icon] || FileText;

    return (
      <section className="relative z-10 mx-auto min-h-screen max-w-7xl px-6 pb-24 pt-36 md:px-12 lg:px-24">
        <button
          onClick={() => navigateTo?.("home")}
          className="mb-10 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8c7b6c] transition-colors hover:text-[#2b2621]"
        >
          <ArrowLeft size={14} />
          Back to Home
        </button>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <Icon size={34} className="text-[#8c7b6c]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8c7b6c]">
                Architectural Services
              </span>
            </div>

            <h1 className="mb-6 font-serif text-3xl font-bold leading-tight text-[#2b2621] md:text-5xl">
              {service.title}
            </h1>

            <p className="mb-8 text-sm leading-8 text-[#594d42]">
              {service.fullContent || service.tagline}
            </p>

            <button
              onClick={() => navigateTo?.("contact")}
              className="inline-flex items-center gap-3 bg-[#8c7b6c] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#2b2621]"
            >
              Request a Proposal
              <ArrowRight size={15} />
            </button>
          </div>

          <div className="overflow-hidden border border-[#e8dfd5] bg-white p-3">
            <img
              src={service.img}
              alt={service.title}
              className="h-[320px] w-full object-cover md:h-[450px]"
            />
          </div>
        </div>

        <div className="mt-20 grid gap-12 border-t border-[#e8dfd5] pt-12 md:grid-cols-2">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8c7b6c]">
              What We Deliver
            </span>

            <h2 className="mb-8 mt-3 font-serif text-2xl font-bold text-[#2b2621]">
              Scope of Services
            </h2>

            <div className="space-y-5">
              {(service.deliverables || []).map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-[#8c7b6c]"
                  />
                  <p className="text-sm leading-relaxed text-[#594d42]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8c7b6c]">
              Our Process
            </span>

            <h2 className="mb-8 mt-3 font-serif text-2xl font-bold text-[#2b2621]">
              Workflow
            </h2>

            <div className="space-y-6">
              {(service.workflow || []).map((step) => (
                <div
                  key={step.id}
                  className="flex items-start gap-5 border-b border-[#e8dfd5] pb-5"
                >
                  <span className="font-serif text-2xl font-light text-[#b8a798]">
                    {step.id}
                  </span>

                  <p className="pt-1 text-sm leading-relaxed text-[#594d42]">
                    {step.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 border border-[#e8dfd5] bg-[#f4eee8] p-8 text-center md:p-12">
          <h2 className="font-serif text-2xl font-bold text-[#2b2621] md:text-3xl">
            Need support with your next project?
          </h2>

          <p className="mx-auto mb-7 mt-4 max-w-xl text-sm leading-7 text-[#594d42]">
            Tell me about your project requirements and receive a tailored
            proposal.
          </p>

          <button
            onClick={() => navigateTo?.("contact")}
            className="inline-flex items-center gap-3 bg-[#8c7b6c] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#2b2621]"
          >
            Get in Touch
            <ArrowRight size={15} />
          </button>
        </div>
      </section>
    );
  }

  // HOME SERVICES SECTION
  const serviceList = Object.values(
    Object.keys(services).length ? services : {}
  );

  const handleScroll = (direction) => {
    if (scrollCarousel) {
      scrollCarousel(direction);
      return;
    }

    if (!carouselRef?.current) return;

    const amount = carouselRef.current.offsetWidth * 0.7;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="services-section"
      className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-12 lg:px-24"
    >
      <div className="mb-12 flex items-end justify-between gap-6">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#8c7b6c]">
            Services Offered
          </span>

          <h2 className="mt-3 max-w-2xl font-serif text-3xl text-[#2b2621] md:text-4xl">
            Three Ways to Bring Your Projects to Life
          </h2>
        </div>

        <div className="hidden gap-3 sm:flex">
          <button
            type="button"
            onClick={() => handleScroll("left")}
            aria-label="Previous services"
            className="border border-[#d8c3b0] p-3 text-[#2b2621] transition-all hover:bg-[#8c7b6c] hover:text-white"
          >
            <ChevronLeft size={17} />
          </button>

          <button
            type="button"
            onClick={() => handleScroll("right")}
            aria-label="Next services"
            className="border border-[#d8c3b0] p-3 text-[#2b2621] transition-all hover:bg-[#8c7b6c] hover:text-white"
          >
            <ChevronRight size={17} />
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4"
      >
        {serviceList.map((item) => {
          const Icon = iconComponents[item.icon] || FileText;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => navigateTo?.(item.id)}
              className="group flex min-w-[280px] snap-start flex-col border border-[#e6ddd3] bg-white text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#b8a798] hover:shadow-lg md:min-w-[320px]"
            >
              <div className="h-52 w-full overflow-hidden border-b border-[#f0e6dc]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-5 flex items-center gap-3">
                  <Icon size={25} className="text-[#8c7b6c]" />

                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8c7b6c]">
                    Core Service
                  </span>
                </div>

                <h3 className="mb-4 font-serif text-xl font-bold leading-snug text-[#2b2621]">
                  {item.title}
                </h3>

                <p className="flex-1 text-xs font-light leading-7 text-[#594d42]">
                  {item.tagline}
                </p>

                <div className="mt-7 flex items-center justify-between border-t border-[#f0e6dc] pt-5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#8c7b6c]">
                  <span>View Service Scope</span>

                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <p className="text-[10px] uppercase tracking-[0.15em] text-[#8c7b6c]">
          Explore all available services
        </p>

        <button
          type="button"
          onClick={() => navigateTo?.("contact")}
          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2b2621] transition-colors hover:text-[#8c7b6c]"
        >
          Discuss a Project
          <ArrowRight size={14} />
        </button>
      </div>
    </section>
  );
}
