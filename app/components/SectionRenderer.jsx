
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Clock, FileText, UserCheck } from "lucide-react";

import {
  projectImages,
  serviceDetails,
  navigationLinks,
  contactInfo,
} from "../data/sections";

import Hero from "./Hero";
import Features from "./Features";
import Services from "./Services";
import Gallery from "./Gallery";
import Cta from "./Cta";

export default function SectionRenderer() {
  const [view, setView] = useState("home");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const requestedView = new URLSearchParams(window.location.search).get("view");
    if (requestedView === "projects") setView("projects");
  }, []);

  const carouselRef = useRef(null);

  const navigateTo = useCallback(
    (newView) => {
      if (newView === view || isTransitioning) return;

      setIsTransitioning(true);

      window.setTimeout(() => {
        setView(newView);
        window.scrollTo(0, 0);
        setIsTransitioning(false);
      }, 400);
    },
    [view, isTransitioning]
  );

  const scrollToSolutions = () => {
    document
      .getElementById("services-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;

    const amount = carouselRef.current.offsetWidth * 0.7;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const navLinks = navigationLinks.map((link) => ({
    ...link,
    action: () => navigateTo(link.id),
  }));

  const activeService = serviceDetails[view];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fbf9f6] font-sans text-[#2b2621] selection:bg-[#d8c3b0]/40">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(#8c7b6c_1px,transparent_1px)] opacity-20 [background-size:24px_24px]" />

      <nav className="fixed z-[100] flex w-full items-center justify-between border-b border-[#e8dfd5] bg-[#fbf9f6]/90 px-6 py-5 backdrop-blur-md md:px-12">
        <button
          onClick={() => navigateTo("home")}
          className="flex cursor-pointer flex-col text-left"
        >
          <span className="font-serif text-xs font-bold tracking-[0.18em] text-[#2b2621] sm:text-sm">
            ELISSANDRA OLIVEIRA
          </span>

          <span className="font-mono text-[8px] tracking-[0.22em] text-[#8c7b6c]">
            ARCHITECT • TECHNICAL SUPPORT
          </span>
        </button>

        <div className="no-scrollbar flex items-center gap-4 overflow-x-auto py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#594d42] md:gap-7">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={link.action}
              className={`whitespace-nowrap py-1 transition-all duration-300 hover:text-[#2b2621] ${
                view === link.id
                  ? "border-b-2 border-[#8c7b6c] text-[#8c7b6c]"
                  : "opacity-70"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        <button
          onClick={() => navigateTo("contact")}
          className="hidden whitespace-nowrap border border-[#8c7b6c] px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2b2621] transition-all duration-300 hover:bg-[#8c7b6c] hover:text-white xl:inline-flex"
        >
          Work With Me
        </button>
      </nav>

      <main
        className={`relative z-10 transition-opacity duration-500 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {view === "home" && (
          <>
            <Hero
              navigateTo={navigateTo}
              scrollToSolutions={scrollToSolutions}
            />

            <section className="relative z-10 border-y border-[#e8dfd5] bg-[#f4eee8] py-16">
              <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3 md:px-12 lg:px-24">
                {[
                  {
                    icon: Clock,
                    title: "Meet Deadlines",
                    description:
                      "Stay on schedule even during peak workloads without stressing your team.",
                  },
                  {
                    icon: FileText,
                    title: "High-Quality Outputs",
                    description:
                      "Technical drawings and high-end visualisations tailored to your office standards.",
                  },
                  {
                    icon: UserCheck,
                    title: "Flexible Collaboration",
                    description:
                      "Agreed scope and budget with flexible support whenever you need it.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="space-y-3 border border-[#e8dfd5] bg-white/60 p-6"
                    >
                      <Icon size={24} className="text-[#8c7b6c]" />

                      <h4 className="font-serif text-lg font-bold">
                        {item.title}
                      </h4>

                      <p className="text-xs leading-relaxed text-[#594d42]">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            <Features variant="home" />

            <Services
              services={serviceDetails}
              carouselRef={carouselRef}
              scrollCarousel={scrollCarousel}
              navigateTo={navigateTo}
            />
          </>
        )}

        {view === "projects" && (
          <Gallery
            projects={projectImages}
            navigateTo={navigateTo}
          />
        )}

        {view === "about" && (
          <Features
            variant="about"
            navigateTo={navigateTo}
          />
        )}

        {activeService && (
          <Services
            variant="detail"
            service={activeService}
            navigateTo={navigateTo}
          />
        )}

        {view === "contact" && (
          <Cta
            contactInfo={contactInfo}
            navigateTo={navigateTo}
          />
        )}
      </main>

      <footer className="relative z-10 border-t border-[#e8dfd5] bg-[#f4eee8] px-6 py-16 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="font-serif text-sm font-bold tracking-widest text-[#2b2621]">
              ELISSANDRA OLIVEIRA
            </span>

            <span className="font-mono text-[10px] text-[#8c7b6c]">
              / ARCHITECTURAL SUPPORT
            </span>
          </div>

          <div className="flex flex-wrap gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#594d42]">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={link.action}
                className="transition-colors hover:text-[#8c7b6c]"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="font-mono text-[10px] text-[#8c7b6c]">
            {contactInfo.email} • {contactInfo.phone}
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
