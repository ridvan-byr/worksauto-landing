"use client";

import * as React from "react";
import Image from "next/image";
import {
  Layers,
  Smartphone,
  CheckCircle2,
  Wrench,
  BarChart3,
  MessageSquare,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function ProductMockup() {
  const [activeHighlight, setActiveHighlight] = React.useState<"ALL" | "LAPTOP" | "MOBILE">("ALL");

  return (
    <div className="relative mx-auto max-w-5xl group transition-all duration-500">
      {/* Ambient Studio Lighting Behind Stage */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-[#2357c5]/25 via-[#3b72ea]/20 to-[#8fb4ff]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Device Stage Container */}
      <div className="relative rounded-3xl overflow-hidden border border-[#2a384b]/80 bg-[#070b12] shadow-[0_30px_100px_rgba(0,0,0,0.9),0_0_80px_rgba(35,87,197,0.25)]">
        {/* Top Control Bar */}
        <div className="px-5 py-3.5 bg-[#0d1520] border-b border-[#1f2d3d] flex flex-col sm:flex-row items-center justify-between gap-3 select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="ml-3 font-mono text-[11px] text-[#9caac0] hidden sm:inline">
              WorksAuto Servis Kokpiti & Müşteri Canlı Takip Ekosistemi
            </span>
          </div>

          {/* Quick Focus Pills */}
          <div className="flex items-center gap-1 bg-[#070b12] p-1 rounded-xl border border-[#1f2d3d]">
            <button
              type="button"
              onClick={() => setActiveHighlight("ALL")}
              className={cn(
                "px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer",
                activeHighlight === "ALL"
                  ? "bg-[#2357c5] text-white shadow-sm"
                  : "text-[#9caac0] hover:text-white"
              )}
            >
              Tam Görünüm
            </button>
            <button
              type="button"
              onClick={() => setActiveHighlight("LAPTOP")}
              className={cn(
                "px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5",
                activeHighlight === "LAPTOP"
                  ? "bg-[#2357c5] text-white shadow-sm"
                  : "text-[#9caac0] hover:text-white"
              )}
            >
              <Layers size={12} />
              <span>Atölye Kokpiti</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveHighlight("MOBILE")}
              className={cn(
                "px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5",
                activeHighlight === "MOBILE"
                  ? "bg-[#2357c5] text-white shadow-sm"
                  : "text-[#9caac0] hover:text-white"
              )}
            >
              <Smartphone size={12} />
              <span>Müşteri Takip Portalı</span>
            </button>
          </div>
        </div>

        {/* Photorealistic Rendered Device Showcase */}
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#070b12]">
          <Image
            src="/images/hero-devices.jpg"
            alt="WorksAuto MacBook Pro Atölye Kokpiti ve iPhone 16 Pro Müşteri Canlı Takip Portalı"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Vignette Gradients for Premium Depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070b12] via-transparent to-transparent pointer-events-none opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070b12]/50 via-transparent to-[#070b12]/50 pointer-events-none" />

          {/* Floating Contextual Pill Overlay: Laptop Info (Left) */}
          {(activeHighlight === "ALL" || activeHighlight === "LAPTOP") && (
            <div className="hidden md:flex absolute top-6 left-6 p-3.5 rounded-2xl bg-[#0c1421]/95 backdrop-blur-xl border border-[#3b72ea]/40 shadow-2xl flex-col gap-1 w-64 animate-in fade-in duration-300">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-[#8fb4ff] font-bold">MASAÜSTÜ KOKPİT</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Canlı Liftler
                </span>
              </div>
              <p className="text-xs font-bold text-white mt-1">
                İş Emirleri, 3D Dijital İkiz ve Lift Takibi
              </p>
              <div className="mt-1 text-[10px] text-[#9caac0]">
                Usta süreleri, yedek parça ve GİB e-fatura tek ekranda.
              </div>
            </div>
          )}

          {/* Floating Contextual Pill Overlay: Phone Info (Right) */}
          {(activeHighlight === "ALL" || activeHighlight === "MOBILE") && (
            <div className="hidden md:flex absolute top-6 right-6 p-3.5 rounded-2xl bg-[#0c1421]/95 backdrop-blur-xl border border-emerald-500/40 shadow-2xl flex-col gap-1 w-64 animate-in fade-in duration-300">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 font-bold">
                <MessageSquare size={13} />
                <span>MÜŞTERİ MOBİL TAKİP</span>
              </div>
              <p className="text-xs font-bold text-white mt-1">
                WhatsApp & SMS Canlı Aşama Linki
              </p>
              <div className="mt-1 text-[10px] text-[#9caac0]">
                Müşteri cebinden canlı izler, ek parçaları tek tıkla onaylar.
              </div>
            </div>
          )}
        </div>

        {/* Bottom Feature Bar */}
        <div className="p-4 sm:p-5 bg-[#090e17] border-t border-[#1f2d3d] grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-[#2357c5]/15 border border-[#3b72ea]/30 text-[#8fb4ff] shrink-0 mt-0.5">
              <Layers size={16} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white font-heading">
                Masaüstü Servis Yönetimi
              </h4>
              <p className="text-[11px] text-[#9caac0] mt-0.5 leading-relaxed">
                Lift planlama, usta atamaları, cari hesap ve gün sonu kasa mutabakatı.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 shrink-0 mt-0.5">
              <Smartphone size={16} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white font-heading">
                Müşteri Canlı Takip Portalı
              </h4>
              <p className="text-[11px] text-[#9caac0] mt-0.5 leading-relaxed">
                Şifresiz mobil link ile şeffaf parça onayı ve telefon aramalarında %70 azalma.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 shrink-0 mt-0.5">
              <BarChart3 size={16} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white font-heading">
                Finans & GİB E-Fatura
              </h4>
              <p className="text-[11px] text-[#9caac0] mt-0.5 leading-relaxed">
                Nilvera ve Paraşüt entegrasyonuyla resmi e-fatura ve Z-raporu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
