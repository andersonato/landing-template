
"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone, CheckCircle2, Globe } from "lucide-react";

export default function Cta({ contactInfo, navigateTo, t, language }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
    website: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (sending) return;

    setSending(true);
    setSubmitError("");

    try {
      const response = await fetch("https://crjuphzqewgiavfdficv.supabase.co/functions/v1/submit-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(result.error || "Unable to submit your request.");
      }

      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        language === "pt"
          ? "Não foi possível enviar o pedido. Tente novamente ou contacte-nos diretamente por email."
          : language === "es"
            ? "No se pudo enviar la solicitud. Inténtelo de nuevo o contáctenos directamente por email."
            : "Your request could not be sent. Please try again or contact us directly by email."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-32 md:px-12 lg:px-24">
      <div className="mb-14">
        <h1 className="mt-5 font-serif text-4xl font-light text-[#2b2621] md:text-5xl">
          {t("contactHeading")}
        </h1>

      </div>

      <div className="grid gap-14 lg:grid-cols-12">
        <div className="space-y-8 lg:col-span-4">
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
                Portugal - Spain - Brazil
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Globe className="mt-1 text-[#8c7b6c]" size={19} />
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#a89787]">
                {t("serviceAvailability")}
              </p>
              <p className="mt-1 text-sm text-[#2b2621]">
                Remote Worldwide
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
                  {language === "pt" ? "Pedido recebido" : language === "es" ? "Solicitud recibida" : "Request received"}
                </h3>

                <p className="mt-2 text-sm font-light leading-relaxed text-[#75685c]">
                  {language === "pt" ? "Obrigado pelo contacto. Recebemos os seus dados e entraremos em contacto por email." : language === "es" ? "Gracias por contactarnos. Hemos recibido sus datos y nos pondremos en contacto por email." : "Thank you for your enquiry. We have received your details and will contact you by email."}
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="hidden" aria-hidden="true">
                <label>
                  Leave this field empty
                  <input
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </div>
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
                  <option value="Architectural Drafting & Technical Documentation">{language === "pt" ? "Desenho Técnico e Documentação de Arquitetura" : language === "es" ? "Dibujo Arquitectónico y Documentación Técnica" : "Architectural Drafting & Technical Documentation"}</option>
                  <option value="3D Modelling and Rendering">{language === "pt" ? "Modelação 3D e Renderização" : language === "es" ? "Modelado 3D y Renderizado" : "3D Modelling and Rendering"}</option>
                  <option value="Digitalisation & Image Editing">{language === "pt" ? "Digitalização e Edição de Imagem" : language === "es" ? "Digitalización y Edición de Imágenes" : "Digitalisation & Image Editing"}</option>
                  <option value="Flexible Team Support">{language === "pt" ? "Apoio Flexível a Equipas" : language === "es" ? "Apoyo Flexible a Equipos" : "Flexible Team Support"}</option>
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

              {submitError && (
                <p role="alert" className="text-sm text-red-700">
                  {submitError}
                </p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-3 bg-[#2b2621] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#8c7b6c] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending
                  ? language === "pt" ? "A enviar..." : language === "es" ? "Enviando..." : "Sending..."
                  : t("send")}
                {!sending && <ArrowRight size={14} />}
              </button>

            </form>
          )}
        </div>
      </div>
    </section>
  );
}
