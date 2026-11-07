
"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";

export default function Cta({ contactInfo, navigateTo, t, language }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `${language === "pt" ? "Pedido de Serviço de Arquitetura" : language === "es" ? "Consulta de Servicios de Arquitectura" : "Architecture Service Inquiry"} - ${formData.service || (language === "pt" ? "Pedido Geral" : language === "es" ? "Consulta General" : "General Inquiry")}`
    );

    const body = encodeURIComponent(
      `${t("nameOffice")}: ${formData.name}\n` +
      `${t("emailAddress")}: ${formData.email}\n` +
      `${t("serviceRequired")}: ${formData.service}\n\n` +
      `${t("projectBrief")}:\n${formData.message}`
    );

    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 lg:px-24">
      <div className="mb-14">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8c7b6c]">
          {t("contact")}
        </span>

        <h1 className="mt-5 font-serif text-4xl font-light text-[#2b2621] md:text-5xl">
          {t("contactHeading")}
        </h1>

        <p className="mt-5 max-w-2xl text-sm font-light leading-relaxed text-[#75685c]">
          {t("contactDescription")}
        </p>
      </div>

      <div className="grid gap-14 lg:grid-cols-12">
        <div className="space-y-8 lg:col-span-4">
          <div>
            <h2 className="font-serif text-2xl text-[#2b2621]">
              {t("directContact")}
            </h2>

            <p className="mt-3 text-sm font-light leading-relaxed text-[#75685c]">
              {t("directContactDesc")}
            </p>
          </div>

          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-start gap-4"
          >
            <Mail className="mt-1 text-[#8c7b6c]" size={19} />

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#a89787]">
                {t("emailAddress")}
              </p>

              <p className="mt-1 text-sm text-[#2b2621]">
                {contactInfo.email}
              </p>
            </div>
          </a>

          <a
            href={`https://wa.me/${contactInfo.phone.replace(/\D/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-4"
          >
            <Phone className="mt-1 text-[#8c7b6c]" size={19} />

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#a89787]">
                {t("phoneWhatsapp")}
              </p>

              <p className="mt-1 text-sm text-[#2b2621]">
                {contactInfo.phone}
              </p>
            </div>
          </a>

          <div className="flex items-start gap-4">
            <MapPin className="mt-1 text-[#8c7b6c]" size={19} />

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#a89787]">
                {t("location")}
              </p>

              <p className="mt-1 text-sm text-[#2b2621]">
                {contactInfo.location}
              </p>
            </div>
          </div>

          <div className="border-l-2 border-[#d8c3b0] bg-[#faf6f0] p-6">
            <p className="font-serif text-lg italic leading-relaxed text-[#594d42]">
              "{t("contactQuote")}"
            </p>
          </div>
        </div>

        <div className="border border-[#e6ddd3] bg-white p-7 md:p-10 lg:col-span-8">
          <h2 className="mb-8 font-serif text-2xl text-[#2b2621]">
            {t("sendInquiry")}
          </h2>

          {submitted ? (
            <div className="flex items-start gap-4 border border-[#d8c3b0] bg-[#faf6f0] p-6">
              <CheckCircle2 className="mt-1 text-[#8c7b6c]" size={22} />

              <div>
                <h3 className="font-serif text-xl text-[#2b2621]">
                  {t("emailOpened")}
                </h3>

                <p className="mt-2 text-sm font-light leading-relaxed text-[#75685c]">
                  {t("emailOpenedDesc")}
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-[#8c7b6c]">
                    {t("nameOffice")}
                  </span>

                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-[#e6ddd3] bg-[#faf6f0] px-4 py-3 text-sm text-[#2b2621] outline-none transition-colors focus:border-[#8c7b6c]"
                    placeholder={t("yourName")}
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-[#8c7b6c]">
                    {t("emailAddress")}
                  </span>

                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-[#e6ddd3] bg-[#faf6f0] px-4 py-3 text-sm text-[#2b2621] outline-none transition-colors focus:border-[#8c7b6c]"
                    placeholder="your@email.com"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-[#8c7b6c]">
                  {t("serviceRequired")}
                </span>

                <select
                  required
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border border-[#e6ddd3] bg-[#faf6f0] px-4 py-3 text-sm text-[#2b2621] outline-none focus:border-[#8c7b6c]"
                >
                  <option value="">{t("selectService")}</option>
                  <option value="Architectural Drafting & Technical Documentation">
                    Architectural Drafting & Technical Documentation
                  </option>
                  <option value="3D Modelling and Rendering">
                    3D Modelling and Rendering
                  </option>
                  <option value="Digitalisation & Image Editing">
                    Digitalisation & Image Editing
                  </option>
                  <option value="Flexible Team Support">
                    Flexible Team Support
                  </option>
                  <option value="Other">{t("other")}</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-[#8c7b6c]">
                  {t("projectBrief")}
                </span>

                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full resize-y border border-[#e6ddd3] bg-[#faf6f0] px-4 py-3 text-sm text-[#2b2621] outline-none transition-colors focus:border-[#8c7b6c]"
                  placeholder={t("projectPlaceholder")}
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-[#2b2621] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#8c7b6c]"
              >
                {t("send")}
                <ArrowRight size={14} />
              </button>

              <p className="text-[10px] leading-relaxed text-[#a89787]">
                {t("mailNotice")}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
