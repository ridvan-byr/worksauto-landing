"use client";

import * as React from "react";

export function SocialProof() {
  const networks = [
    { name: "Bosch Car Service Partnerleri", label: "BOSCH NETWORK" },
    { name: "Castrol Service Noktaları", label: "CASTROL SERVICE" },
    { name: "Magneti Marelli Checkstar", label: "CHECKSTAR" },
    { name: "Eurorepar Car Service", label: "EUROREPAR" },
    { name: "Motul EVO Şanzıman Noktaları", label: "MOTUL EVO" },
    { name: "VAG & BMW Özel Servisleri", label: "PREMIUM WORKSHOP" },
  ];

  return (
    <div className="py-12 border-y border-[#1f2d3d]/60 bg-[#070b12]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs uppercase font-bold tracking-widest text-[#9caac0] mb-8 font-mono">
          TÜRKİYE GENELİNDE <span className="text-white font-black">250+ ÖZEL VE YETKİLİ SERVİS</span> WORKS与之 AUTO İLE YÖNETİLİYOR
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center">
          {networks.map((item, idx) => (
            <div
              key={idx}
              className="h-16 rounded-2xl bg-[#0c1421]/60 border border-[#1f2d3d]/50 hover:border-[#3b72ea]/40 flex flex-col items-center justify-center p-3 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(35,87,197,0.15)]"
            >
              <span className="text-xs font-mono font-black tracking-wider text-slate-400 group-hover:text-white transition-colors">
                {item.label}
              </span>
              <span className="text-[10px] text-[#9caac0]/70 truncate max-w-[140px] mt-0.5">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
