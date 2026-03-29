"use client";

import { ArrowRight, Globe, LayoutDashboard, QrCode, Search } from "lucide-react";
import Link from "next/link";
import { SpotlightButton } from "@/components/ui/spotlight-button";
import { Marquee } from "@/components/sections/marquee";
import { About } from "@/components/sections/about";
import { FeaturedProjectsHorizontal } from "@/components/sections/featured-projects-horizontal";

export function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-black">
        <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-electric-blue/10 via-deep-black to-vibrant-purple/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

          <h1 className="font-display text-4xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-white leading-none tracking-tighter mb-8">
            DİJİTALDE
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-vibrant-purple to-neon-green">
              SIFIRDAN,
            </span>
            <br />
            ZİRVEYE.
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-lg text-white/60 mb-10 leading-relaxed">
            İşletmenizin dijital ayak izini baştan yaratıyoruz. Sizi kalabalıktan ayıran, güçlü altyapıya sahip ve baştan sona ihtiyacınıza özel dijital sistemler üretiyoruz.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/iletisim"
              className="group relative w-64 px-6 py-3 cursor-pointer rounded-lg bg-gradient-to-r from-electric-blue to-vibrant-purple text-white font-display font-bold text-base tracking-tight transition-all duration-200 ease-out border border-white/20 hover:border-white/40 hover:shadow-lg hover:shadow-electric-blue/30 flex items-center justify-center"
            >
              <div className="flex items-center justify-center gap-2 relative z-10">
                <span className="text-white">Projeye Başlayalım</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>

            {/* Secondary Button: Outlined with Bottom-Up Fill */}
            <Link
              href="/cozumler"
              className="group relative w-64 px-6 py-3 cursor-pointer rounded-lg bg-transparent text-white font-display font-bold text-base tracking-tight transition-all duration-200 ease-out border-2 border-white/40 hover:border-white/70 hover:bg-white/5 flex items-center justify-center"
            >
              <span className="relative z-10 text-white">
                Neler Yapıyoruz?
              </span>
            </Link>
          </div>
        </div>



      </section>

      {/* Marquee */}
      <Marquee />

      {/* About */}
      <About />

      {/* Neler Yapiyoruz - Bento Grid */}
      <section className="py-24 bg-deep-black">
        <div className="max-w-7xl mx-auto px-6">
          <div>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold text-white text-center mb-16 tracking-tight">
              NELER YAPIYORUZ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 — Large */}
            <div className="lg:col-span-2">
              <Link
                href="/cozumler"
                className="group cursor-pointer block"
              >
                <div className="relative min-h-[320px] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 p-8 flex flex-col justify-end transition-transform duration-300 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <Globe className="absolute top-8 right-8 w-14 h-14 text-white/25 group-hover:text-white/50 transition-colors" />
                  <div className="relative z-10">
                    <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
                      Etkileşimli Web Siteleri
                    </h3>
                    <p className="text-white/80">İlk bakışta müşterilerinizi yakalayan modern tasarımlar.</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Card 2 */}
            <div>
              <Link
                href="/cozumler"
                className="group cursor-pointer block"
              >
                <div className="relative min-h-[320px] rounded-3xl overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-rose-400 p-6 flex flex-col justify-end transition-transform duration-300 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <LayoutDashboard className="absolute top-6 right-6 w-10 h-10 text-white/25 group-hover:text-white/50 transition-colors" />
                  <div className="relative z-10">
                    <h3 className="font-display text-2xl font-bold text-white mb-2">
                      Yönetim Panelleri
                    </h3>
                    <p className="text-white/80 text-sm">İşinizi kolaylaştıran, işletmenize ve ihtiyaçlarınıza göre özelleştirilmiş paneller.</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Card 3 */}
            <div>
              <Link
                href="/cozumler"
                className="group cursor-pointer block"
              >
                <div className="relative min-h-56 rounded-3xl overflow-hidden bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400 p-6 flex flex-col justify-end transition-transform duration-300 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <QrCode className="absolute top-6 right-6 w-10 h-10 text-white/25 group-hover:text-white/50 transition-colors" />
                  <div className="relative z-10">
                    <h3 className="font-display text-2xl font-bold text-white mb-2">
                      Akıllı QR Menüler
                    </h3>
                    <p className="text-white/80 text-sm">Restoran ve kafeler için saniyeler içinde güncellenebilen dijital menüler.</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Card 4 — Wide */}
            <div className="md:col-span-2">
              <Link
                href="/cozumler"
                className="group cursor-pointer block"
              >
                <div className="relative min-h-56 rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-500 via-green-500 to-lime-400 p-6 flex flex-col justify-end transition-transform duration-300 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <Search className="absolute top-6 right-6 w-10 h-10 text-white/25 group-hover:text-white/50 transition-colors" />
                  <div className="relative z-10">
                    <h3 className="font-display text-2xl font-bold text-white mb-2">
                      SEO Çözümleri
                    </h3>
                    <p className="text-white/80 text-sm">Sizi aramalarda en üst sıralara taşıyacak görünürlük stratejileri.</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Horizontal Scroll */}
      <FeaturedProjectsHorizontal />

      {/* CTA */}
      <section className="relative py-40 overflow-hidden bg-gradient-to-br from-vibrant-purple via-electric-blue to-vibrant-purple">
        <div className="absolute inset-0 bg-black/5" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-white leading-none tracking-tighter mb-8">
            FİKRİNİZ
            <br />
            <span className="text-white/80">Mİ VAR?</span>
          </h2>

          <p className="text-white/70 text-lg md:text-xl max-w-xl mx-auto mb-12">
            Projenizi hayata geçirmek için buradayız. Hemen iletişime geçin ve
            dijital dönüşümünüzü başlatalım.
          </p>

          <SpotlightButton href="/iletisim" />
        </div>
      </section>
    </main>
  );
}
