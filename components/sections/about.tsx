"use client";

import { Users, Zap, Heart } from "lucide-react";

export function About() {
  return (
    <section className="py-32 bg-off-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Heading */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-deep-black leading-tight tracking-tight">
              Sıradanlığı
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-vibrant-purple">
                Unutun.
              </span>
              <br />
              Biz{" "}
              <span className="relative">
                MF Digital
                <span className="absolute -bottom-2 left-0 h-3 bg-neon-green/30 w-full -z-10" />
              </span>
              <br />
              Studio.
            </h2>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              İşletmenizin dijital dünyadaki potansiyelini ortaya çıkarıyoruz.
              Standart şablonlar kullanmıyoruz; size, markanıza ve müşterilerinize özel, akılda kalıcı dijital deneyimler inşa ediyoruz.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <Users className="w-8 h-8 text-electric-blue mb-3" />
                <div className="font-display text-2xl font-bold text-deep-black">100%</div>
                <div className="text-sm text-gray-500">Müşteri Odaklı</div>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <Zap className="w-8 h-8 text-electric-blue mb-3" />
                <div className="font-display text-2xl font-bold text-deep-black">7 Gün</div>
                <div className="text-sm text-gray-500">Hızlı Teslimat</div>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <Heart className="w-8 h-8 text-electric-blue mb-3" />
                <div className="font-display text-2xl font-bold text-deep-black">Garantili</div>
                <div className="text-sm text-gray-500">Memnuniyet</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
