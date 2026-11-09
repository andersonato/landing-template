export default function Hero({ t }) {
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
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl font-light leading-[1.1] tracking-tight text-[#2b2621] sm:text-6xl lg:text-7xl">
            {t("heroTitle")}
            <br />
            <span className="font-normal italic text-white">
              {t("heroItalic")}
            </span>
          </h1>

        </div>
      </div>
    </section>
  );
}
