"use client";

import * as React from "react";
import Image from "next/image";

export function SocialProof() {
  const metrics = [
    { value: "250+", label: "Aktif Özel & Yetkili Servis" },
    { value: "150.000+", label: "Tamamlanan İş Emri" },
    { value: "14 Sn.", label: "Ortalama Araç Kabul Hızı" },
    { value: "%99.98", label: "Bulut Çalışma Süresi" },
  ];

  // 100% Official Vector & High-Res Brand Logos
  const BrandLogos = [
    {
      name: "BOSCH",
      src: "/logos/bosch.svg",
      width: 140,
      height: 32,
    },
    {
      name: "CASTROL",
      src: "/logos/castrol.svg",
      width: 140,
      height: 34,
    },
    {
      name: "BREMBO",
      src: "/logos/brembo.svg",
      width: 130,
      height: 30,
    },
    {
      name: "MOTUL",
      src: "/logos/motul.svg",
      width: 125,
      height: 34,
    },
    {
      name: "MOBIL 1",
      src: "/logos/mobil.svg",
      width: 120,
      height: 36,
    },
    {
      name: "LIQUI MOLY",
      src: "/logos/liqui_moly.svg",
      width: 80,
      height: 44,
    },
    {
      name: "MANN+HUMMEL",
      src: "/logos/mann_hummel.svg",
      width: 130,
      height: 36,
    },
    {
      name: "MARELLI",
      src: "/logos/marelli.svg",
      width: 100,
      height: 40,
    },
    {
      name: "PARAŞÜT",
      src: "/logos/parasut.png",
      width: 125,
      height: 32,
    },
    {
      name: "NILVERA",
      src: "/logos/nilvera.svg",
      width: 120,
      height: 34,
    },
    {
      name: "PAYTR",
      src: "/logos/paytr.png",
      width: 125,
      height: 28,
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

          {/* Infinite Marquee of Pure Official Brand Logos with Mathematical Equal Spacing */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="animate-marquee py-4 flex items-center gap-8 sm:gap-10">
              {marqueeItems.map((item, idx) => (
                <div
                  key={idx}
                  className="w-32 sm:w-36 h-12 flex items-center justify-center shrink-0 transition-all duration-300 cursor-pointer opacity-90 hover:opacity-100 transform hover:scale-105"
                  title={item.name}
                >
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={item.width}
                    height={item.height}
                    className="max-h-7 max-w-[115px] w-auto h-auto object-contain select-none"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
