"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Code2, Rocket, Users } from "lucide-react";
import { SpotlightButton } from "@/components/ui/spotlight-button";

const values = [
  {
    icon: Lightbulb,
    title: "Yaratıcılık",
    description: "Standart şablonlar değil, markanıza özel çözümler.",
    glowClass: "from-blue-900/20",
    iconColor: "text-blue-600",
  },
  {
    icon: Code2,
    title: "Kalite Kod",
    description: "Temiz, sürdürülebilir ve hızlı kod yazıyoruz.",
    glowClass: "from-purple-900/20",
    iconColor: "text-purple-600",
  },
  {
    icon: Rocket,
    title: "Hızlı Teslimat",
    description: "7 günlük teslimat süresiyle projenizi hayata geçiriyoruz.",
    glowClass: "from-teal-900/20",
    iconColor: "text-teal-600",
  },
  {
    icon: Users,
    title: "Müşteri Odaklı",
    description: "Başarınız bizim başarımız. Her adımda yanınızdayız.",
    glowClass: "from-green-900/20",
    iconColor: "text-green-600",
  },
];

const faqItems = [
  {
    question: "Web sitesi yaptırmak küçük işletmeler için mantıklı mı?",
    answer:
      "Evet. Küçük işletmeler için web sitesi, dijitalde güven oluşturmanın en hızlı yoludur. Sosyal medya tek başına yeterli olmaz; web sitesi işletmenizi daha profesyonel gösterir.",
  },
  {
    question: "Instagram hesabım varken neden ayrıca web sitesine ihtiyaç duyayım?",
    answer:
      "Instagram müşteriyi çeker ama kontrol sende değildir. Web sitesi ise tamamen sana aittir ve müşteriye daha güvenilir, düzenli bir deneyim sunar.",
  },
  {
    question: "Web sitesi müşteriye gerçekten güven verir mi?",
    answer:
      "Kesinlikle. İnsanlar bir işletmeyi araştırırken web sitesi varsa daha kurumsal ve güvenilir olarak algılar.",
  },
  {
    question: "Bir web sitesi ortalama ne kadar sürede yayına alınır?",
    answer:
      "Projeye göre değişir ama genelde 1-3 hafta içinde yayına alınabilir. İçerik hazırsa süreç çok daha hızlı ilerler.",
  },
  {
    question: "QR menü veya yönetim paneli sonradan eklenebilir mi?",
    answer:
      "Evet, mevcut web sitenize sonradan QR menü veya yönetim paneli entegre edilebilir. Bu sistemler işletmenizi daha pratik yönetmenizi sağlar.",
  },
  {
    question: "Web sitesi mobil uyumlu olmak zorunda mı?",
    answer:
      "Evet, çünkü kullanıcıların büyük kısmı mobil cihazlardan girer. Mobil uyumlu olmayan siteler hem müşteri kaybettirir hem de Google'da geri düşer.",
  },
  {
    question: "Google'da çıkmak için sadece web sitesi yeterli mi?",
    answer:
      "Web sitesi temel şarttır ama tek başına yeterli değildir. SEO çalışmaları ve doğru içeriklerle desteklenmesi gerekir.",
  },
  {
    question: "Yapay zeka ve arama motorları işletmemi nasıl bulur?",
    answer:
      "Web sitenizdeki içerikler, başlıklar ve teknik yapı sayesinde arama motorları sizi tanır. Düzenli ve doğru yapılandırılmış bir site, görünürlüğünüzü artırır.",
  },
  {
    question: "Web sitesi yaptırırken nelere dikkat etmeliyim?",
    answer:
      "Hız, mobil uyumluluk, yönetim paneli ve sade tasarım en önemli kriterlerdir. Ayrıca site, müşteriyi iletişime geçmeye yönlendirmelidir.",
  },
  {
    question: "Uygun fiyatlı bir web sitesi ile profesyonel bir site arasındaki fark nedir?",
    answer:
      "Uygun fiyatlı siteler genelde sınırlı ve hazırdır. Profesyonel siteler ise işletmeye özel tasarlanır ve daha iyi performans, güven ve dönüşüm sağlar.",
  },
  {
    question: "Web sitesi yaptırdıktan sonra müşteri gelmesi garanti mi?",
    answer:
      "Tek başına garanti değildir ama doğru yapı + SEO + içerik ile ciddi şekilde müşteri kazanımı sağlar. Web sitesi, dijitalde büyümenin temelidir.",
  },
  {
    question: "MF Digital Studio'nun sahipleri kimlerdir?",
    answer:
      "MF Digital Studio, yurt dışında global markalar ve Türkiye'de faaliyet gösteren büyük ölçekli firmalarla edinilen tecrübelerin bir araya gelmesiyle kurulmuştur. Farklı projelerde kazanılan deneyimler ve iş birlikleri sayesinde yolları kesişen kurucular, bu birikimi tek çatı altında toplayarak MF Digital Studio'yu hayata geçirmiştir.",
  },
];

export function AboutPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white pt-24 pb-24 text-neutral-900">
      {/* Hero block */}
      <div className="max-w-5xl mx-auto px-6 text-center py-20">
        <p className="text-electric-blue font-display text-sm tracking-[0.3em] uppercase mb-4 font-semibold">
          Biz Kimiz
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-neutral-900 leading-tight tracking-tight text-balance mb-8">
          Sıradanlığı Unutun.
          <br />
          Biz MF Digital Studio.
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-700 leading-relaxed">
          İşletmenizin dijital dünyadaki potansiyelini ortaya
          çıkarıyoruz. Standart şablonlar kullanmıyoruz; markanıza özel dijital deneyimler inşa
          ediyoruz.
        </p>
      </div>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-linear-to-r from-transparent via-neutral-200 to-transparent" />
      </div>

      {/* Story */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-6 tracking-tight">
              Hikayemiz
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              MF Digital Studio, iki geliştiricinin "neden bu kadar çok şirket kötü web sitesiyle
              vakit kaybediyor?" sorusundan doğdu. Müşterilerimizin işlerini büyütmelerine
              yardımcı olacak, gerçekten çalışan dijital araçlar üretmeye karar verdik.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              Bugüne kadar kafe ve restoran sahiplerinden e-ticaret işletmelerine kadar pek çok
              sektör ve firma için projeler teslim ettik. Her projeye sıfırdan başlıyoruz; çünkü
              siz de sıfırdan bunu hak ediyorsunuz.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "50+", label: "Teslim Edilen Proje" },
              { value: "7 Gün", label: "Ortalama Teslimat" },
              { value: "%100", label: "Müşteri Memnuniyeti" },
              { value: "2", label: "Tutkulu Geliştirici" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-sm"
              >
                <div className="font-display text-3xl font-extrabold text-neutral-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values - Editorial Glow List */}
      <div className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-12 tracking-tight">
            Değerlerimiz
          </h2>

          <div className="flex flex-col border-t border-neutral-200">
            {values.map((v, idx) => {
              const Icon = v.icon;
              const isHovered = hoveredIndex === idx;
              const isOtherHovered = hoveredIndex !== null && hoveredIndex !== idx;

              return (
                <div
                  key={v.title}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative border-b border-neutral-200 py-6 md:py-10 cursor-pointer transition-colors group"
                >
                  {/* Glow Background */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        layoutId="glow-bg-values"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`absolute inset-0 bg-linear-to-r ${v.glowClass} pointer-events-none`}
                      />
                    )}
                  </AnimatePresence>

                  <div
                    className={`relative z-10 transition-all duration-500 px-4 md:px-8 ${isOtherHovered ? "opacity-30" : "opacity-100"
                      }`}
                  >
                    <div className="flex items-center gap-6">
                      <Icon
                        className={`w-8 h-8 md:w-10 md:h-10 transition-colors duration-300 ${isHovered ? v.iconColor : 'text-neutral-300'}`}
                      />
                      <h3
                        className={`font-display text-3xl md:text-5xl font-bold transition-colors duration-300 ${isHovered ? "text-neutral-900" : "text-neutral-400"
                          }`}
                      >
                        {v.title}
                      </h3>
                    </div>

                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-neutral-900 text-lg md:text-xl max-w-2xl md:ml-16">
                            {v.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-neutral-900 mb-12 tracking-tight">
            Sıkça Sorulan Sorular
          </h2>

          <div className="border-t border-neutral-200">
            {faqItems.map((item, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <article key={item.question} className="border-b border-neutral-200">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left md:py-8"
                  >
                    <h3 className="font-display text-xl md:text-3xl font-bold text-neutral-900 tracking-tight">
                      {item.question}
                    </h3>
                    <span
                      className={`text-2xl leading-none text-neutral-900 transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-2 text-base md:text-lg text-neutral-700 leading-relaxed font-sans max-w-3xl">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-5xl mx-auto px-6 py-32 text-center flex flex-col items-center">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 mb-10 tracking-tight">
          Projenizi Başlatmak İçin Hazır mısınız?
        </h2>
        <SpotlightButton href="/iletisim" />
      </div>
    </div>
  );
}
