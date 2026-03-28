"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle2, Loader2, Mail, MessageSquare, Phone } from "lucide-react";

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  serviceOther: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const INITIAL_FORM: FormValues = {
  fullName: "",
  email: "",
  phone: "",
  service: "",
  serviceOther: "",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^(\+?\d{1,3}[\s-]?)?(\(?\d{3}\)?[\s-]?)?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;

export function ContactPage() {
  const [form, setForm] = useState<FormValues>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const validateField = (field: keyof FormValues, value: string, values: FormValues): string => {
    const trimmed = value.trim();

    if (!trimmed) {
      if (field === "fullName") return "Ad Soyad alanı zorunludur.";
      if (field === "email") return "E-posta alanı zorunludur.";
      if (field === "phone") return "Telefon alanı zorunludur.";
      if (field === "service") return "Lütfen bir hizmet seçin.";
      if (field === "serviceOther" && values.service === "other") return "Diğer konu alanı zorunludur.";
      if (field === "message") return "Mesaj alanı zorunludur.";
    }

    if (field === "email" && !EMAIL_PATTERN.test(trimmed)) {
      return "Geçerli bir e-posta adresi girin.";
    }

    if (field === "phone" && !PHONE_PATTERN.test(trimmed)) {
      return "Telefon numarasını geçerli formatta girin.";
    }

    return "";
  };

  const validateForm = (values: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};

    (Object.keys(values) as Array<keyof FormValues>).forEach((field) => {
      const fieldError = validateField(field, values[field], values);
      if (fieldError) nextErrors[field] = fieldError;
    });

    return nextErrors;
  };

  const handleChange = (field: keyof FormValues, value: string) => {
    if (field === "service") {
      setForm((prev) => ({
        ...prev,
        service: value,
        serviceOther: value === "other" ? prev.serviceOther : "",
      }));

      setErrors((prev) => ({
        ...prev,
        service: touched.service ? validateField("service", value, { ...form, service: value }) : prev.service,
        serviceOther:
          value === "other"
            ? (touched.serviceOther ? validateField("serviceOther", form.serviceOther, { ...form, service: value }) : prev.serviceOther)
            : undefined,
      }));

      if (value !== "other") {
        setTouched((prev) => ({ ...prev, serviceOther: false }));
      }

      return;
    }

    setForm((prev) => ({ ...prev, [field]: value }));

    if (touched[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: validateField(field, value, { ...form, [field]: value }),
      }));
    }
  };

  const handleBlur = (field: keyof FormValues) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({
      ...prev,
      [field]: validateField(field, form[field], form),
    }));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const allTouched = {
      fullName: true,
      email: true,
      phone: true,
      service: true,
      serviceOther: form.service === "other",
      message: true,
    };

    setTouched(allTouched);
    setSubmitState("idle");
    setSubmitMessage("");

    const nextErrors = validateForm(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitState("error");
      setSubmitMessage("Lütfen işaretli alanları kontrol edip tekrar deneyin.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Mesaj gönderilemedi. Lütfen tekrar deneyin.");
      }

      setSubmitState("success");
      setSubmitMessage("Mesajınız iletildi, 24 saat içinde dönüş yapacağız.");
      setForm(INITIAL_FORM);
      setErrors({});
      setTouched({});
    } catch (error) {
      setSubmitState("error");
      setSubmitMessage(
        error instanceof Error ? error.message : "Mesaj gönderilemedi. Lütfen tekrar deneyin."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  const getInputClassName = (field: keyof FormValues) => {
    const hasError = Boolean(errors[field] && touched[field]);

    return [
      "w-full rounded-md border bg-black px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition",
      hasError
        ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
        : "border-[#222] hover:border-[#333] focus:border-white focus:ring-2 focus:ring-white/25",
    ].join(" ");
  };

  return (
    <section className="min-h-screen bg-black px-6 pb-20 pt-24 md:pt-28">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-8 border border-[#222] bg-black p-6 md:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="space-y-6">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
              İletişim
            </p>
            <h1 className="font-display text-4xl font-extrabold leading-[0.92] tracking-tight text-white sm:text-5xl lg:text-6xl">
              FİKRİNİZ
              <br />
              Mİ VAR?
            </h1>
            <p className="max-w-md text-sm leading-relaxed text-white/65 sm:text-base">
              Markanızı büyütecek dijital çözümleri birlikte planlayalım. Formu doldurun,
              ekibimiz en kısa sürede size dönüş yapsın.
            </p>

            <div className="space-y-4 border-t border-[#222] pt-6">
              <div className="flex items-center gap-3 text-sm text-white/65">
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#222] bg-black">
                  <Mail className="h-4 w-4" />
                </div>
                <span>info@mfdigitalstudio.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/65">
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#222] bg-black">
                  <Phone className="h-4 w-4" />
                </div>
                <span>+90 537 033 95 56</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/65">
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#222] bg-black">
                  <Phone className="h-4 w-4" />
                </div>
                <span>+90 531 660 40 02</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/65">
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#222] bg-black">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <span>24 saat içinde geri dönüş</span>
              </div>
            </div>
          </div>

          <div className="border border-[#222] bg-black p-6">
            <div className="mb-6">
              <h2 className="font-display text-2xl font-bold tracking-tight text-white">Teklif Formu</h2>
              <p className="mt-1 text-sm text-white/55">Tüm alanları doldurarak bize ulaşabilirsiniz.</p>
            </div>

            {submitState !== "idle" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`mb-6 flex items-start gap-3 rounded-md border px-4 py-3 text-sm ${submitState === "success"
                  ? "border-[#333] bg-[#0f0f0f] text-white"
                  : "border-red-500/70 bg-[#140909] text-red-200"
                  }`}
                role="status"
                aria-live="polite"
              >
                {submitState === "success" ? (
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                ) : (
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-300" />
                )}
                <p>{submitMessage}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-white/80">
                  Ad Soyad
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={form.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  onBlur={() => handleBlur("fullName")}
                  placeholder="Ad Soyad"
                  className={getInputClassName("fullName")}
                  aria-invalid={Boolean(errors.fullName && touched.fullName)}
                  aria-describedby="fullName-error"
                />
                {errors.fullName && touched.fullName && (
                  <p id="fullName-error" className="mt-1 text-xs text-red-300">
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">
                    E-posta
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                    placeholder="ornek@email.com"
                    className={getInputClassName("email")}
                    aria-invalid={Boolean(errors.email && touched.email)}
                    aria-describedby="email-error"
                  />
                  {errors.email && touched.email && (
                    <p id="email-error" className="mt-1 text-xs text-red-300">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white/80">
                    Telefon
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    onBlur={() => handleBlur("phone")}
                    placeholder="05xx xxx xx xx"
                    className={getInputClassName("phone")}
                    aria-invalid={Boolean(errors.phone && touched.phone)}
                    aria-describedby="phone-error"
                  />
                  {errors.phone && touched.phone && (
                    <p id="phone-error" className="mt-1 text-xs text-red-300">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="service" className="mb-2 block text-sm font-medium text-white/80">
                  Hizmet Seçimi
                </label>
                <select
                  id="service"
                  value={form.service}
                  onChange={(e) => handleChange("service", e.target.value)}
                  onBlur={() => handleBlur("service")}
                  className={getInputClassName("service")}
                  aria-invalid={Boolean(errors.service && touched.service)}
                  aria-describedby="service-error"
                >
                  <option value="">Hizmet seçiniz</option>
                  <option value="web">Web Sitesi Tasarımı</option>
                  <option value="panel">Yönetim Paneli</option>
                  <option value="qr">QR Menü Çözümleri</option>
                  <option value="seo">SEO ve İçerik Optimizasyonu</option>
                  <option value="other">Diğer</option>
                </select>

                {form.service === "other" && (
                  <div className="mt-4">
                    <label htmlFor="serviceOther" className="mb-2 block text-sm font-medium text-white/80">
                      Diğer Konu
                    </label>
                    <input
                      id="serviceOther"
                      type="text"
                      value={form.serviceOther}
                      onChange={(e) => handleChange("serviceOther", e.target.value)}
                      onBlur={() => handleBlur("serviceOther")}
                      placeholder="Lütfen konuyu yazın"
                      className={getInputClassName("serviceOther")}
                      aria-invalid={Boolean(errors.serviceOther && touched.serviceOther)}
                      aria-describedby="serviceOther-error"
                    />
                    {errors.serviceOther && touched.serviceOther && (
                      <p id="serviceOther-error" className="mt-1 text-xs text-red-300">
                        {errors.serviceOther}
                      </p>
                    )}
                  </div>
                )}

                {errors.service && touched.service && (
                  <p id="service-error" className="mt-1 text-xs text-red-300">
                    {errors.service}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/80">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  onBlur={() => handleBlur("message")}
                  placeholder="Projeniz, hedefiniz ve beklentiniz hakkında kısa bilgi paylaşın."
                  className={`${getInputClassName("message")} resize-none`}
                  aria-invalid={Boolean(errors.message && touched.message)}
                  aria-describedby="message-error"
                />
                {errors.message && touched.message && (
                  <p id="message-error" className="mt-1 text-xs text-red-300">
                    {errors.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="mt-2 w-full cursor-pointer rounded-md border border-white bg-white py-6 text-base font-semibold text-black transition hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Gönderiliyor...
                  </span>
                ) : (
                  "Mesajı Gönder"
                )}
              </Button>

              <p className="text-xs text-white/45">
                Formu göndererek tarafımızla iletişime geçmeyi kabul etmiş olursunuz.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
