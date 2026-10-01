"use client";

import * as React from "react";

export function SocialProof() {
  const metrics = [
    { value: "250+", label: "Aktif Özel & Yetkili Servis" },
    { value: "150.000+", label: "Tamamlanan İş Emri" },
    { value: "14 Sn.", label: "Ortalama Araç Kabul Hızı" },
    { value: "%99.98", label: "Bulut Çalışma Süresi" },
  ];

  const brandPartners = [
    { label: "BOSCH CAR SERVICE", desc: "Yetkili & Özel Servis Standardı" },
    { label: "CASTROL SERVICE", desc: "Yağ & Sıvı Bakım Protokolleri" },
    { label: "MAGNETI MARELLI", desc: "Checkstar Servis Ağı" },
    { label: "EUROREPAR", desc: "Hızlı Bakım İş Akışları" },
    { label: "MOTUL EVO", desc: "Otomatik Şanzıman Servisleri" },
    { label: "LIQUI MOLY PRO", desc: "Katkı & Motor Bakım Entegrasyonu" },
    { label: "BREMBO EXPERT", desc: "Fren & Güvenlik Sistemleri" },
    { label: "MANN-FILTER", desc: "Orijinal Filtre & OEM Kodları" },
    { label: "GİB E-FATURA", desc: "Nilvera & Paraşüt Entegratörleri" },
    { label: "PAYTR SANAL POS", desc: "3D Secure Online Tahsilat" },
    { label: "VAG & BMW ÖZEL", desc: "Şasi & Parça Uyumluluk Takibi" },
  ];

  // Duplicate for seamless infinite loop
  const marqueeItems = [...brandPartners, ...brandPartners];

  return (
    <div className="py-12 border-y border-[#1f2d3d]/60 bg-[#070b12]/80 backdrop-blur-md relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metric Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-10 border-b border-[#1f2d3d]/40 text-center">
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
        <div className="pt-8 text-center">
          <p className="text-[11px] uppercase font-bold tracking-widest text-[#9caac0] mb-6 font-mono">
            TÜRKİYE'DEKİ ÖZEL ATÖLYELER VE ZİNCİR SERVİS STANDARTLARIYLA TAM ENTEGRE
          </p>

          {/* Infinite Marquee Wrapper with Edge Mask */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="animate-marquee py-2 flex items-center gap-4">
              {marqueeItems.map((item, idx) => (
                <div
                  key={idx}
                  className="h-16 w-56 shrink-0 rounded-2xl bg-[#0c1421]/90 border border-[#1f2d3d]/80 hover:border-[#3b72ea]/60 flex flex-col items-center justify-center p-3 transition-all duration-300 group hover:bg-[#111c2e]"
                >
                  <span className="text-[11px] font-mono font-black tracking-wider text-slate-300 group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                  <span className="text-[10px] text-[#9caac0]/70 truncate max-w-[190px] mt-0.5">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
