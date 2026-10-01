"use client";

import * as React from "react";
import Image from "next/image";
import {
  Wrench,
  BarChart3,
  Smartphone,
  Layers,
  Sparkles,
  CheckCircle2,
  Maximize2,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function ProductMockup() {
  const [activeTab, setActiveTab] = React.useState<"TWIN" | "ORDERS" | "TRACKING" | "FINANCE">("TWIN");

  const views = {
    TWIN: {
      title: "Atölye Dijital İkiz & Lift Simülasyonu",
      subtitle: "Kuşbakışı lift dolulukları, araç konumları ve canlı işlem süreleri",
      image: "/screenshots/digital-twin.png",
      alt: "WorksAuto 360 Dijital İkiz Atölye Yönetimi",
      aspect: "aspect-[16/10]",
      badge: "CANLI ATÖLYE SİMÜLATÖRÜ",
      metrics: [
        { label: "Aktif Lift", val: "6 / 6 Dolu" },
        { label: "Sıradaki Araç", val: "7 Beklemede" },
        { label: "İşlem Hızı", val: "%94 Zamanında" },
      ],
    },
    ORDERS: {
      title: "İş Emirleri & Araç Kabul Masası",
      subtitle: "Danışmandan ustaya anlık parça, işçilik ve maliyet akışı",
      image: "/screenshots/work-orders.png",
      alt: "WorksAuto İş Emirleri Yönetim Ekranı",
      aspect: "aspect-[16/10]",
      badge: "MERKEZİ İŞ EMRİ YÖNETİMİ",
      metrics: [
        { label: "Bugünkü Kabul", val: "18 Araç" },
        { label: "Hazır / Teslim", val: "12 Araç" },
        { label: "Ort. Servis Süresi", val: "2.4 Saat" },
      ],
    },
    TRACKING: {
      title: "Müşteri Canlı Takip Portalı",
      subtitle: "Araç sahibine SMS/WhatsApp ile giden canlı aşama & onay linki",
      image: "/screenshots/mobile-tracking.png",
      alt: "WorksAuto Müşteri Canlı Araç Takip Ekranı",
      aspect: "aspect-[16/10]",
      badge: "MÜŞTERİ MEMNUNİYETİ",
      metrics: [
        { label: "Telefon Aramaları", val: "-%70 Azaldı" },
        { label: "Ek İş Onay Hızı", val: "8 Dakika" },
        { label: "Müşteri Puanı", val: "4.9 / 5.0" },
      ],
    },
    FINANCE: {
      title: "Kasa, Ciro & Net Kâr Raporları",
      subtitle: "Nakit, POS, çek ve resmi GİB e-fatura hareketleri tek ekranda",
      image: "/screenshots/financial-reports.png",
      alt: "WorksAuto Finansal Kasa ve Raporlar",
      aspect: "aspect-[16/10]",
      badge: "FİNANSAL DENETİM",
      metrics: [
        { label: "Aylık Ciro", val: "₺428.500" },
        { label: "Net Marj", val: "%58.4" },
        { label: "Kasa Mutabakatı", val: "%100 Uyumlu" },
      ],
    },
  };

  const current = views[activeTab];

  return (
    <div className="relative mx-auto max-w-5xl rounded-3xl p-1.5 sm:p-2 bg-gradient-to-b from-[#2a384b]/70 via-[#1f2d3d]/40 to-transparent border border-[#2a384b]/80 shadow-[0_30px_100px_rgba(0,0,0,0.85),0_0_80px_rgba(35,87,197,0.2)] group transition-all duration-500">
      {/* Glow Behind the Mockup */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#2357c5]/25 via-[#3b72ea]/20 to-[#8fb4ff]/10 rounded-[36px] blur-3xl opacity-60 group-hover:opacity-85 transition-opacity pointer-events-none -z-10" />

      {/* App Window Frame */}
      <div className="relative rounded-2xl bg-[#090e17] border border-[#1f2d3d] overflow-hidden text-left shadow-2xl">
        {/* macOS Style Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0d1520] border-b border-[#1f2d3d] select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/50 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/50 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/50 inline-block" />
            <span className="ml-3 text-[11px] font-mono text-[#9caac0] hidden sm:inline-block">
              app.worksauto.com.tr / panel
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Gerçek Servis Arayüzü v2.4</span>
            </div>
          </div>
        </div>

        {/* View Switcher Tabs Bar */}
        <div className="px-4 sm:px-6 py-3 bg-[#0a101a] border-b border-[#1f2d3d] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <button
              type="button"
              onClick={() => setActiveTab("TWIN")}
              className={cn(
                "px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5",
                activeTab === "TWIN"
                  ? "bg-[#2357c5] text-white shadow-[0_0_15px_rgba(35,87,197,0.4)]"
                  : "bg-[#111a26] text-[#9caac0] hover:text-white"
              )}
            >
              <Layers size={13} />
              <span>Atölye Dijital İkiz</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("ORDERS")}
              className={cn(
                "px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5",
                activeTab === "ORDERS"
                  ? "bg-[#2357c5] text-white shadow-[0_0_15px_rgba(35,87,197,0.4)]"
                  : "bg-[#111a26] text-[#9caac0] hover:text-white"
              )}
            >
              <Wrench size={13} />
              <span>İş Emirleri Masası</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("TRACKING")}
              className={cn(
                "px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5",
                activeTab === "TRACKING"
                  ? "bg-[#2357c5] text-white shadow-[0_0_15px_rgba(35,87,197,0.4)]"
                  : "bg-[#111a26] text-[#9caac0] hover:text-white"
              )}
            >
              <Smartphone size={13} />
              <span>Müşteri Takip Ekranı</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("FINANCE")}
              className={cn(
                "px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5",
                activeTab === "FINANCE"
                  ? "bg-[#2357c5] text-white shadow-[0_0_15px_rgba(35,87,197,0.4)]"
                  : "bg-[#111a26] text-[#9caac0] hover:text-white"
              )}
            >
              <BarChart3 size={13} />
              <span>Kasa & Raporlar</span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#9caac0] font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-white font-semibold">Canlı Veri Modu</span>
          </div>
        </div>

        {/* Real Interface Screenshot Display */}
        <div className="relative bg-[#05080e] p-2 sm:p-4 overflow-hidden">
          <div className="relative w-full rounded-xl overflow-hidden border border-[#1f2d3d]/80 bg-[#070b12] shadow-inner group/img">
            {/* Live badge overlay */}
            <div className="absolute top-3 left-3 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-[#070b12]/90 backdrop-blur-md border border-[#3b72ea]/40 text-[#8fb4ff] text-[10px] font-mono font-bold shadow-lg">
              <Sparkles size={11} className="text-amber-400" />
              <span>{current.badge}</span>
            </div>

            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-[#070b12]">
              <Image
                src={current.image}
                alt={current.alt}
                fill
                priority
                className="object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-[1.01]"
              />
            </div>

            {/* Bottom Floating Info Pill Bar */}
            <div className="p-3 sm:p-4 bg-[#0c1421]/95 border-t border-[#1f2d3d] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white font-heading">
                  {current.title}
                </h4>
                <p className="text-[11px] text-[#9caac0] mt-0.5">
                  {current.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                {current.metrics.map((m, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-wider text-[#9caac0] font-mono font-semibold">
                      {m.label}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white font-mono">
                      {m.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
