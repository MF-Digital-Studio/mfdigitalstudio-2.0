"use client";

import Link from "next/link";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Çözümler", href: "/cozumler" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
];

const services = ["Web Tasarım", "QR Menüler", "SEO", "Yönetim Panelleri"];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "mailto:info@mfdigital.studio", label: "Email" },
];

export function Footer() {
  return (
    <footer className="bg-deep-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-90 transition-opacity mb-6"
            >
              <img
                src="/logo.png"
                alt="MF Digital Studio Logo"
                className="h-7 w-auto"
              />
              {/* <span className="font-display text-xl font-extrabold text-white">
                Digital Studio
              </span> */}
            </Link>
            <p className="text-white/50 max-w-md mb-6 leading-relaxed">
              İşletmenizin dijital potansiyelini ortaya çıkarıyoruz.
              Modern, hızlı ve etkileyici web çözümleri için doğru adrestesiniz.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-white/70" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-6">
              Navigasyon
            </h4>
            <ul className="space-y-3">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-6">
              Hizmetler
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/cozumler"
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} MF Digital Studio. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-sm text-white/30">
            <span>Gizlilik Politikası</span>
            <span>Kullanım Şartları</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
