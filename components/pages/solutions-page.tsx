"use client";

import { useState } from "react";
import { Globe, LayoutDashboard, QrCode, Search, ArrowRight, X } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    id: "web",
    title: "Etkileşimli Web Siteleri",
    description:
      "Ziyaretçilerinizi ilk saniyede yakalayan, cihaz uyumlu ve hızlı yüklenen modern web siteleri. Her piksel markanıza özel tasarlanır.",
    gradient: "from-blue-600 via-cyan-500 to-teal-400",
    icon: Globe,
    features: ["Tamamen özel tasarım", "Mobil uyumlu", "Hızlı yükleme", "SEO odaklı yapı"],
  },
  {
    id: "panel",
    title: "Yönetim Panelleri",
    description:
      "İşinizi tek ekrandan yönetin. Ürün ekle, sipariş takip et, müşterilerinizi yönet. Size özel e-ticaret ve stok panelleri.",
    gradient: "from-purple-600 via-pink-500 to-rose-400",
    icon: LayoutDashboard,
    features: ["Gerçek zamanlı veri", "Rol bazlı erişim", "Mobil panel", "Analitik raporlar"],
  },
  {
    id: "qr",
    title: "Akıllı QR Menüler",
    description:
      "Restoran ve kafeler için baskı maliyeti yok, saniyeler içinde güncellenebilen, görsel ve etkileyici dijital menüler.",
    gradient: "from-orange-500 via-amber-500 to-yellow-400",
    icon: QrCode,
    features: ["Anlık güncelleme", "Fotoğraf destekli", "Çoklu dil", "Analitik"],
  },
  {
    id: "seo",
    title: "SEO Çözümleri",
    description:
      "Google'da ilk sırada çıkmak bir şans değil, stratejidir. Teknik SEO, içerik optimizasyonu ve yerel SEO ile görünürlüğünü artır.",
    gradient: "from-emerald-500 via-green-500 to-lime-400",
    icon: Search,
    features: ["Teknik SEO", "İçerik stratejisi", "Yerel SEO", "Aylık raporlama"],
  },
];

export function SolutionsPage() {
  const [focusedCardId, setFocusedCardId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-deep-black pt-24 pb-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-white/40 font-display text-sm tracking-[0.3em] uppercase mb-4">
            Ne Yapıyoruz
          </p>
          <h1 className="font-display text-2xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">
            ÇÖZÜMLERİMİZ
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-white/50 text-lg leading-relaxed">
            Her hizmetimiz, işletmenizin dijital dünyada fark yaratması için başından sona özel olarak tasarlanır.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {cards.map((card) => {
            const Icon = card.icon;
            const isOtherFocused = focusedCardId !== null && focusedCardId !== card.id;

            return (
              <motion.div
                key={card.id}
                layoutId={`card-container-${card.id}`}
                onClick={() => setFocusedCardId(card.id)}
                whileHover={focusedCardId === null ? { scale: 1.02 } : {}}
                animate={{
                  opacity: isOtherFocused ? 0 : 1,
                  pointerEvents: focusedCardId !== null ? "none" : "auto",
                }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer relative min-h-[380px] rounded-3xl overflow-hidden p-8 flex flex-col justify-between"
              >
                <motion.div
                  layoutId={`card-bg-${card.id}`}
                  className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`}
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors z-0" />

                {/* Icon top-right */}
                <motion.div layoutId={`icon-wrap-${card.id}`} className="relative z-10 flex justify-between items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <ArrowRight className="w-6 h-6 text-white/40 group-hover:text-white/70 group-hover:translate-x-1 transition-all" />
                </motion.div>

                {/* Content bottom */}
                <div className="relative z-10 mt-auto">
                  <motion.h3 layoutId={`title-${card.id}`} className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
                    {card.title}
                  </motion.h3>
                  <motion.p layoutId={`desc-${card.id}`} className="text-white/80 text-sm leading-relaxed mb-5">
                    {card.description}
                  </motion.p>
                  <motion.ul layoutId={`features-${card.id}`} className="flex flex-wrap gap-2">
                    {card.features.map((f) => (
                      <li
                        key={f}
                        className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium"
                      >
                        {f}
                      </li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Overlay backdrop & Expanded Card */}
        {focusedCardId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 lg:p-12 pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setFocusedCardId(null)}
              className="absolute inset-0 z-0 bg-black/80 backdrop-blur-md cursor-pointer pointer-events-auto"
            />

            {cards.filter(c => c.id === focusedCardId).map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={`expanded-${card.id}`}
                  layoutId={`card-container-${card.id}`}
                  className="w-full max-w-6xl h-[90vh] md:h-full max-h-[800px] flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl shadow-black/50 pointer-events-auto relative bg-deep-black z-10"
                >
                  {/* Left Side: Main Visual */}
                  <div className="relative flex-1 p-8 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 overflow-hidden min-h-[40vh] md:min-h-full">
                    <motion.div layoutId={`card-bg-${card.id}`} className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`} />
                    <div className="absolute inset-0 bg-black/25 z-0" />

                    <motion.div layoutId={`icon-wrap-${card.id}`} className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-white/20 flex items-center justify-center backdrop-blur-sm mb-8">
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </motion.div>

                    <div className="relative z-10 mt-auto">
                      <motion.h3 layoutId={`title-${card.id}`} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        {card.title}
                      </motion.h3>
                      <motion.p layoutId={`desc-${card.id}`} className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                        {card.description}
                      </motion.p>
                      <motion.ul layoutId={`features-${card.id}`} className="hidden flex-wrap gap-3 md:flex">
                        {card.features.map((f) => (
                          <li
                            key={f}
                            className="px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm"
                          >
                            {f}
                          </li>
                        ))}
                      </motion.ul>
                    </div>
                  </div>

                  {/* Right Side: Detailed Text Section */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="relative z-10 flex-1 p-8 md:p-12 bg-white/5 flex flex-col overflow-y-auto"
                  >
                    <button
                      onClick={() => setFocusedCardId(null)}
                      className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white z-20 cursor-pointer"
                    >
                      <X className="w-6 h-6" />
                    </button>
                    <h4 className="font-display text-2xl md:text-3xl font-bold text-white mb-6 pr-16">
                      Hizmet Detayları
                    </h4>
                    <ul className="mb-6 flex flex-wrap gap-2 md:hidden">
                      {card.features.map((f) => (
                        <li
                          key={`mobile-${f}`}
                          className="px-3 py-1 rounded-full bg-white/15 text-white text-xs font-medium"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="text-white/70 space-y-4 text-base md:text-lg leading-relaxed">
                      <p>
                        Buraya <strong>{card.title}</strong> hizmetimiz hakkında çok daha kapsamlı, teknik detaylar, süreç aşamaları, başarı hikayeleri ve müşteri faydalarını içeren detaylı bir açıklama gelecek. Bu alan {card.title} ile müşterilerimizin dijital varlığını nasıl dönüştürdüğümüzü detaylandırmak için tasarlanmıştır.
                      </p>
                      <p>
                        Proje analizi, strateji belirleme, tasarım ve geliştirme süreçlerinin tümü, işletmenizin hedeflerine ulaşması için özenle yönetilir. Amacımız, sadece estetik değil, aynı zamanda yüksek performanslı ve kullanıcı dostu bir deneyim sunmaktır.
                      </p>
                      <p>
                        Detaylı bir teklif almak veya vizyonunuzu gerçeğe dönüştürmek için iletişim sayfamızdan bize ulaşabilirsiniz.
                      </p>
                    </div>
                  </motion.div>

                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
