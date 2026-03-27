const marqueeItems = [
  "ÖZEL WEB TASARIM",
  "SEO OPTİMİZASYONU",
  "AKILLI QR MENÜLER",
  "E-TİCARET PANELLERİ",
  "MOBİL UYUMLU TASARIM",
  "HIZLI TESLİMAT",
];

export function Marquee() {
  return (
    <div className="bg-gradient-to-r from-electric-blue via-vibrant-purple to-electric-blue py-5 -rotate-3 overflow-hidden">
      <div className="flex whitespace-nowrap w-max animate-marquee">
        {/* First set of items */}
        <div className="flex items-center">
          {marqueeItems.map((item, index) => (
            <span
              key={`set1-${index}`}
              className="mx-8 text-white font-display text-xl md:text-2xl font-bold tracking-wider flex items-center gap-8 flex-shrink-0"
            >
              {item}
              <span className="text-white/50">*</span>
            </span>
          ))}
        </div>

        {/* Duplicate set of items for seamless loop */}
        <div className="flex items-center">
          {marqueeItems.map((item, index) => (
            <span
              key={`set2-${index}`}
              className="mx-8 text-white font-display text-xl md:text-2xl font-bold tracking-wider flex items-center gap-8 flex-shrink-0"
            >
              {item}
              <span className="text-white/50">*</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
