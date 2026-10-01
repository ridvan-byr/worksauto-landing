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
  Clock,
  Car,
  MessageSquare,
  ShieldCheck,
  Receipt,
  FileCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function ProductMockup() {
  const [activeTab, setActiveTab] = React.useState<"TWIN" | "ORDERS" | "TRACKING" | "FINANCE">("TWIN");

  return (
    <div className="relative mx-auto max-w-5xl group transition-all duration-500">
      {/* Studio Ambient Spotlight Behind Canvas */}
      <div className="absolute -inset-6 bg-gradient-to-r from-[#2357c5]/25 via-[#3b72ea]/15 to-[#8fb4ff]/10 rounded-[40px] blur-3xl opacity-60 group-hover:opacity-85 transition-opacity pointer-events-none -z-10" />

      {/* Main Studio Frame */}
      <div className="relative rounded-3xl bg-[#090e17] border border-[#2a384b]/80 shadow-[0_30px_100px_rgba(0,0,0,0.85),0_0_80px_rgba(35,87,197,0.2)] overflow-hidden text-left">
        {/* macOS Style Titlebar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#0d1520] border-b border-[#1f2d3d] select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]/90 border border-[#e0443e]/50 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/90 border border-[#dea123]/50 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]/90 border border-[#1aab29]/50 inline-block" />
            <span className="ml-4 text-xs font-mono text-[#9caac0] hidden sm:inline-block">
              app.worksauto.com.tr
            </span>
          </div>

          {/* Interactive View Tabs */}
          <div className="flex items-center gap-1.5 bg-[#070b12] p-1 rounded-xl border border-[#1f2d3d]">
            <button
              type="button"
              onClick={() => setActiveTab("TWIN")}
              className={cn(
                "px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5",
                activeTab === "TWIN"
                  ? "bg-[#2357c5] text-white shadow-sm"
                  : "text-[#9caac0] hover:text-white"
              )}
            >
              <Layers size={13} />
              <span>Atölye İkizi</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("ORDERS")}
              className={cn(
                "px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5",
                activeTab === "ORDERS"
                  ? "bg-[#2357c5] text-white shadow-sm"
                  : "text-[#9caac0] hover:text-white"
              )}
            >
              <Wrench size={13} />
              <span>İş Emirleri</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("TRACKING")}
              className={cn(
                "px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5",
                activeTab === "TRACKING"
                  ? "bg-[#2357c5] text-white shadow-sm"
                  : "text-[#9caac0] hover:text-white"
              )}
            >
              <Smartphone size={13} />
              <span>Müşteri Portalı</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("FINANCE")}
              className={cn(
                "px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5",
                activeTab === "FINANCE"
                  ? "bg-[#2357c5] text-white shadow-sm"
                  : "text-[#9caac0] hover:text-white"
              )}
            >
              <BarChart3 size={13} />
              <span>Kasa & Rapor</span>
            </button>
          </div>
        </div>

        {/* Dynamic Studio Stage */}
        <div className="relative bg-[#070b12] p-4 sm:p-6 lg:p-8 min-h-[460px] flex items-center justify-center overflow-hidden">
          {/* Subtle Grid floor reflection */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

          {/* TAB 1: ATÖLYE DİJİTAL İKİZ (Curated Layered Composition) */}
          {activeTab === "TWIN" && (
            <div className="relative w-full max-w-4xl animate-in fade-in zoom-in-95 duration-300">
              {/* Core Screen Container with Studio Lighting */}
              <div className="relative rounded-2xl overflow-hidden border border-[#2a384b] shadow-2xl bg-[#090e17]">
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src="/screenshots/digital-twin.png"
                    alt="WorksAuto 360 Atölye Dijital İkiz"
                    fill
                    priority
                    className="object-cover object-top"
                  />
                  {/* Subtle Gradient Vignette so floating cards blend smoothly */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b12]/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Layer 1 (Top Left): Live Job Order Card */}
              <div className="hidden md:block absolute -top-4 -left-4 p-3.5 rounded-2xl bg-[#0c1421]/95 backdrop-blur-xl border border-[#3b72ea]/40 shadow-[0_20px_40px_rgba(0,0,0,0.8)] w-72">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#8fb4ff] font-bold">LİFT 01 • MEKANİK</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    İşlemde (%75)
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-black/60 font-mono font-black text-white text-xs border border-white/10">
                    34 BVR 198
                  </span>
                  <span className="text-xs font-bold text-white truncate">BMW 320i M Sport</span>
                </div>
                <p className="text-[10px] text-[#9caac0] mt-1">Ön Fren Disk & Balata Takımı Değişimi</p>
                <div className="mt-2 pt-2 border-t border-[#1f2d3d] flex justify-between text-[10px] text-[#9caac0]">
                  <span>Usta: Serkan U.</span>
                  <span className="text-emerald-400 font-mono font-bold">₺18,500</span>
                </div>
              </div>

              {/* Floating Layer 2 (Bottom Right): WhatsApp Notification Card */}
              <div className="hidden md:block absolute -bottom-4 -right-4 p-3.5 rounded-2xl bg-[#0c1421]/95 backdrop-blur-xl border border-emerald-500/40 shadow-[0_20px_40px_rgba(0,0,0,0.8)] w-80">
                <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-bold mb-1">
                  <MessageSquare size={13} />
                  <span>WhatsApp Canlı Takip Bildirimi</span>
                </div>
                <p className="text-[11px] text-[#edf3fa] leading-relaxed">
                  "Sayın Sinan Bey, 34 BVR 198 aracınızın mekanik bakım işlemleri tamamlandı, test sürüşüne alındı."
                </p>
                <div className="mt-2 flex items-center justify-between text-[10px] text-[#9caac0] font-mono">
                  <span>worksauto.com.tr/t/8842</span>
                  <span className="text-emerald-400 font-semibold">İletildi (12:44)</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: İŞ EMİRLERİ MASASI */}
          {activeTab === "ORDERS" && (
            <div className="relative w-full max-w-4xl animate-in fade-in zoom-in-95 duration-300">
              <div className="relative rounded-2xl overflow-hidden border border-[#2a384b] shadow-2xl bg-[#090e17]">
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src="/screenshots/work-orders.png"
                    alt="WorksAuto İş Emirleri Yönetim Masası"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b12]/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Workflow Stat Card */}
              <div className="hidden md:flex items-center gap-6 absolute -bottom-3 left-1/2 -translate-x-1/2 px-6 py-3 rounded-2xl bg-[#0c1421]/95 backdrop-blur-xl border border-[#3b72ea]/40 shadow-2xl">
                <div className="text-center">
                  <div className="text-[10px] uppercase font-mono text-[#9caac0]">Bugünkü Kabul</div>
                  <div className="text-sm font-black font-mono text-white">18 Araç</div>
                </div>
                <div className="h-6 w-px bg-[#1f2d3d]" />
                <div className="text-center">
                  <div className="text-[10px] uppercase font-mono text-[#9caac0]">İşlemde</div>
                  <div className="text-sm font-black font-mono text-amber-400">6 Lift Dolu</div>
                </div>
                <div className="h-6 w-px bg-[#1f2d3d]" />
                <div className="text-center">
                  <div className="text-[10px] uppercase font-mono text-[#9caac0]">Teslime Hazır</div>
                  <div className="text-sm font-black font-mono text-emerald-400">12 Araç</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: MÜŞTERİ CANLI TAKİP PORTALI */}
          {activeTab === "TRACKING" && (
            <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-8 animate-in fade-in zoom-in-95 duration-300 py-4">
              {/* Smartphone Frame with Real Screen */}
              <div className="relative w-64 rounded-[36px] p-2.5 bg-gradient-to-b from-[#2a384b] to-[#121c29] border border-[#3b72ea]/40 shadow-2xl shrink-0">
                <div className="relative rounded-[28px] overflow-hidden bg-black aspect-[9/18]">
                  <Image
                    src="/screenshots/mobile-tracking.png"
                    alt="WorksAuto Müşteri Mobil Canlı Takip"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                {/* Dynamic island */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-black rounded-full" />
              </div>

              {/* Explanatory Floating Showcase Right */}
              <div className="space-y-4 max-w-sm text-left">
                <h4 className="text-xl font-bold font-heading text-white">
                  Müşteri 'Aracım Ne Oldu?' Diye Aramasın
                </h4>
                <p className="text-xs text-[#9caac0] leading-relaxed">
                  Araç kabul edildiği anda araç sahibinin telefonuna giden canlı takip linki sayesinde parça değişimleri, usta fotoğrafları ve ek masraf onayları şeffafça izlenir.
                </p>
                <div className="space-y-2 pt-2 text-xs">
                  <div className="flex items-center gap-2 text-[#edf3fa]">
                    <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                    <span>Şifresiz, tek tıkla açılan mobil bağlantı</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#edf3fa]">
                    <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                    <span>Ek işler için müşteriden anında dijital onay alma</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#edf3fa]">
                    <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                    <span>PayTR güvencesiyle link üzerinden kartla ödeme</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: KASA, CİRO & GİB E-FATURA */}
          {activeTab === "FINANCE" && (
            <div className="relative w-full max-w-4xl animate-in fade-in zoom-in-95 duration-300">
              <div className="relative rounded-2xl overflow-hidden border border-[#2a384b] shadow-2xl bg-[#090e17]">
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src="/screenshots/financial-reports.png"
                    alt="WorksAuto Finans ve Raporlama"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b12]/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating E-Invoice & Reconciliation Card */}
              <div className="hidden md:block absolute -bottom-4 right-8 p-4 rounded-2xl bg-[#0c1421]/95 backdrop-blur-xl border border-emerald-500/40 shadow-2xl w-80">
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-white font-bold">GÜN SONU KASA MUTABAKATI</span>
                  <span className="text-emerald-400 font-bold">%100 Uyumlu</span>
                </div>
                <div className="space-y-1 text-[11px] text-[#9caac0]">
                  <div className="flex justify-between">
                    <span>Nakit Kasa:</span>
                    <span className="font-mono text-white">₺14,200</span>
                  </div>
                  <div className="flex justify-between">
                    <span>POS (Kredi Kartı):</span>
                    <span className="font-mono text-white">₺28,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Havale / Çek:</span>
                    <span className="font-mono text-white">₺5,500</span>
                  </div>
                </div>
                <div className="mt-2.5 pt-2 border-t border-[#1f2d3d] flex items-center justify-between text-[10px] text-emerald-400 font-mono">
                  <span className="flex items-center gap-1">
                    <FileCheck size={13} />
                    GİB E-Fatura Onaylandı
                  </span>
                  <span>Nilvera / Paraşüt</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
