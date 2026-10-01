"use client";

import * as React from "react";

export function SocialProof() {
  const metrics = [
    { value: "250+", label: "Aktif Özel & Yetkili Servis" },
    { value: "150.000+", label: "Tamamlanan İş Emri" },
    { value: "14 Sn.", label: "Ortalama Araç Kabul Hızı" },
    { value: "%99.98", label: "Bulut Çalışma Süresi" },
  ];

  const integrations = [
    { label: "BOSCH CAR SERVICE", desc: "Uyumlu Atölye Standartları" },
    { label: "CASTROL SERVICE", desc: "Yağ & Sıvı Bakım Protokolleri" },
    { label: "MAGNETI MARELLI", desc: "Checkstar Servis Süreçleri" },
    { label: "EUROREPAR", desc: "Hızlı Bakım İş Akışları" },
    { label: "GİB E-FATURA", desc: "Nilvera & Paraşüt Entegratörleri" },
    { label: "VAG & BMW ÖZEL", desc: "Detaylı Parça & Şasi Takibi" },
  ];

  return (
    <div className="py-12 border-y border-[#1f2d3d]/60 bg-[#070b12]/80 backdrop-blur-md relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metric Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-8 border-b border-[#1f2d3d]/40 text-center">
          {metrics.map((m, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-black font-heading tracking-tight text-white">
                {m.value}
              </span>
              <span className="text-xs text-[#9caac0] mt-1 font-medium">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* Integration ecosystem */}
        <div className="pt-8 text-center">
          <p className="text-[11px] uppercase font-bold tracking-widest text-[#9caac0] mb-6 font-mono">
            TÜRKİYE'DEKİ ÖZEL ATÖLYELER VE ZİNCİR SERVİS STANDARTLARIYLA TAM ENTEGRE
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 items-center justify-center">
            {integrations.map((item, idx) => (
              <div
                key={idx}
                className="h-16 rounded-xl bg-[#0c1421]/70 border border-[#1f2d3d]/70 hover:border-[#3b72ea]/50 flex flex-col items-center justify-center p-2.5 transition-all duration-300 group hover:bg-[#111c2e]"
              >
                <span className="text-[11px] font-mono font-black tracking-wider text-slate-300 group-hover:text-white transition-colors">
                  {item.label}
                </span>
                <span className="text-[9px] text-[#9caac0]/70 truncate max-w-[130px] mt-0.5">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
