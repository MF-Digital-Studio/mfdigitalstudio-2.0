"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { X, Menu } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const links: NavLink[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Çözümler", href: "/cozumler" },
  { label: "Projeler", href: "/projeler" },
  { label: "Blog", href: "/blog" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-8 lg:px-12 h-16 bg-deep-black/80 backdrop-blur-md border-none border-white/10">
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
        >
          <img
            src="/logo.png"
            alt="MF Digital Studio Logo"
            className="h-6 md:h-6 lg:h-9 w-auto"
          />
          {/* <span className="font-display text-lg md:text-xl font-bold text-white tracking-tight">
            Digital Studio
          </span> */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isActive(href)
                ? "bg-white/10 text-white"
                : "text-white/50 hover:text-white hover:bg-white/5"
                }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </header>

      {/* Mobile Overlay Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden">
          {/* Backdrop with vibrant gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-deep-black via-deep-black to-deep-black opacity-95">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-electric-blue/10 via-transparent to-transparent rounded-full blur-3xl" />
              <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-vibrant-purple/10 via-transparent to-transparent rounded-full blur-3xl" />
            </div>
          </div>

          {/* Menu Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full pt-20">
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 flex items-center justify-center w-12 h-12 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-8 h-8 text-white" />
            </button>

            {/* Menu Items */}
            <nav className="flex flex-col items-center gap-8">
              {links.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-display text-3xl sm:text-5xl font-black tracking-tighter transition-all duration-300 ${isActive(href)
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-vibrant-purple to-neon-green"
                    : "text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-electric-blue hover:via-vibrant-purple hover:to-neon-green"
                    }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
