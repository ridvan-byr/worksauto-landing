"use client";

import * as React from "react";

export function SocialProof() {
  const metrics = [
    { value: "250+", label: "Aktif Özel & Yetkili Servis" },
    { value: "150.000+", label: "Tamamlanan İş Emri" },
    { value: "14 Sn.", label: "Ortalama Araç Kabul Hızı" },
    { value: "%99.98", label: "Bulut Çalışma Süresi" },
  ];

  // Pure SVG Brand Marks
  const BrandLogos = [
    {
      name: "BOSCH",
      svg: (
        <svg viewBox="0 0 160 36" className="h-6 sm:h-7 w-auto fill-current">
          <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="M11 18h14M18 11v14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <text x="44" y="24" fontFamily="sans-serif" fontSize="20" fontWeight="900" letterSpacing="1">
            BOSCH
          </text>
        </svg>
      ),
    },
    {
      name: "CASTROL",
      svg: (
        <svg viewBox="0 0 170 36" className="h-6 sm:h-7 w-auto fill-current">
          <circle cx="18" cy="18" r="13" fill="none" stroke="currentColor" strokeWidth="3.5" />
          <path d="M12 18a6 6 0 0 1 12 0" stroke="currentColor" strokeWidth="3" fill="none" />
          <text x="44" y="24" fontFamily="sans-serif" fontSize="19" fontWeight="900" fontStyle="italic" letterSpacing="0.5">
            Castrol
          </text>
        </svg>
      ),
    },
    {
      name: "BREMBO",
      svg: (
        <svg viewBox="0 0 170 36" className="h-6 sm:h-7 w-auto fill-current">
          <circle cx="14" cy="18" r="9" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="14" cy="18" r="4" fill="currentColor" />
          <text x="36" y="24" fontFamily="sans-serif" fontSize="20" fontWeight="800" fontStyle="italic" letterSpacing="1">
            brembo
          </text>
        </svg>
      ),
    },
    {
      name: "MOTUL",
      svg: (
        <svg viewBox="0 0 150 36" className="h-6 sm:h-7 w-auto fill-current">
          <text x="4" y="26" fontFamily="sans-serif" fontSize="24" fontWeight="900" fontStyle="italic" letterSpacing="2">
            MOTUL
          </text>
        </svg>
      ),
    },
    {
      name: "MAGNETI MARELLI",
      svg: (
        <svg viewBox="0 0 210 36" className="h-6 sm:h-7 w-auto fill-current">
          <path d="M6 24V12l8 8 8-8v12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <text x="32" y="19" fontFamily="sans-serif" fontSize="13" fontWeight="900" letterSpacing="1">
            MAGNETI
          </text>
          <text x="32" y="30" fontFamily="sans-serif" fontSize="11" fontWeight="800" letterSpacing="1.5">
            MARELLI
          </text>
        </svg>
      ),
    },
    {
      name: "MOBIL 1",
      svg: (
        <svg viewBox="0 0 150 36" className="h-6 sm:h-7 w-auto fill-current">
          <text x="6" y="25" fontFamily="sans-serif" fontSize="22" fontWeight="900" letterSpacing="1">
            Mobil <tspan fontSize="24" fontStyle="italic">1</tspan>
          </text>
        </svg>
      ),
    },
    {
      name: "LIQUI MOLY",
      svg: (
        <svg viewBox="0 0 190 36" className="h-6 sm:h-7 w-auto fill-current">
          <rect x="6" y="8" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M12 12v12h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <text x="36" y="19" fontFamily="sans-serif" fontSize="13" fontWeight="900" letterSpacing="1">
            LIQUI
          </text>
          <text x="36" y="30" fontFamily="sans-serif" fontSize="12" fontWeight="800" letterSpacing="1.5">
            MOLY
          </text>
        </svg>
      ),
    },
    {
      name: "MANN FILTER",
      svg: (
        <svg viewBox="0 0 190 36" className="h-6 sm:h-7 w-auto fill-current">
          <polygon points="6,26 16,10 26,26" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <text x="36" y="19" fontFamily="sans-serif" fontSize="13" fontWeight="900" letterSpacing="1">
            MANN
          </text>
          <text x="36" y="29" fontFamily="sans-serif" fontSize="10" fontWeight="700" letterSpacing="2">
            FILTER
          </text>
        </svg>
      ),
    },
    {
      name: "PARAŞÜT",
      svg: (
        <svg viewBox="0 0 170 36" className="h-6 sm:h-7 w-auto fill-current">
          <path d="M16 8c-6 0-10 4-10 9s10 11 10 11 10-6 10-11-4-9-10-9z" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="16" cy="17" r="3" />
          <text x="36" y="24" fontFamily="sans-serif" fontSize="19" fontWeight="800" letterSpacing="0.5">
            paraşüt
          </text>
        </svg>
      ),
    },
    {
      name: "NILVERA",
      svg: (
        <svg viewBox="0 0 160 36" className="h-6 sm:h-7 w-auto fill-current">
          <circle cx="16" cy="18" r="10" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M12 22l8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <text x="36" y="24" fontFamily="sans-serif" fontSize="18" fontWeight="800" letterSpacing="1">
            nilvera
          </text>
        </svg>
      ),
    },
    {
      name: "PAYTR",
      svg: (
        <svg viewBox="0 0 150 36" className="h-6 sm:h-7 w-auto fill-current">
          <text x="6" y="25" fontFamily="sans-serif" fontSize="22" fontWeight="900" fontStyle="italic" letterSpacing="1">
            Pay<tspan fontWeight="400">TR</tspan>
          </text>
        </svg>
      ),
    },
  ];

  // Duplicate for seamless infinite horizontal scroll
  const marqueeItems = [...BrandLogos, ...BrandLogos];

  return (
    <div className="py-14 border-y border-[#1f2d3d]/60 bg-[#070b12]/80 backdrop-blur-md relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metric Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-[#1f2d3d]/40 text-center">
          {metrics.map((m, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-black font-heading tracking-tight text-white font-mono">
                {m.value}
              </span>
              <span className="text-xs text-[#9caac0] mt-1 font-medium">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* Marquee Header */}
        <div className="pt-10 text-center">
          <p className="text-[11px] uppercase font-bold tracking-widest text-[#9caac0] mb-8 font-mono">
            TÜRKİYE'DEKİ ÖZEL ATÖLYELER VE ZİNCİR SERVİS STANDARTLARIYLA TAM ENTEGRE
          </p>

          {/* Infinite Marquee of Pure Monochrome Vector Brand Logos */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="animate-marquee py-4 flex items-center gap-16 sm:gap-20">
              {marqueeItems.map((item, idx) => (
                <div
                  key={idx}
                  className="shrink-0 text-slate-400 hover:text-white transition-all duration-300 cursor-pointer flex items-center justify-center opacity-70 hover:opacity-100 transform hover:scale-105"
                  title={item.name}
                >
                  {item.svg}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
