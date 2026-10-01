"use client";

import * as React from "react";
import {
  TrendingUp,
  Wrench,
  CheckCircle2,
  Clock,
  Car,
  Bell,
  Search,
  ChevronRight,
  ShieldCheck,
  Send,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function ProductMockup() {
  const [activeTab, setActiveTab] = React.useState<"LIFTS" | "ORDERS" | "REVENUE">("LIFTS");

  return (
    <div className="relative mx-auto max-w-5xl rounded-3xl p-1 sm:p-2 bg-gradient-to-b from-[#2a384b]/60 via-[#1f2d3d]/30 to-transparent border border-[#2a384b]/80 shadow-[0_30px_100px_rgba(0,0,0,0.85),0_0_80px_rgba(35,87,197,0.15)] group transition-all duration-500">
      {/* Glow Behind the Mockup */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#2357c5]/20 via-[#3b72ea]/15 to-[#8fb4ff]/10 rounded-[36px] blur-3xl opacity-50 group-hover:opacity-75 transition-opacity pointer-events-none -z-10" />

      {/* App Window Frame */}
      <div className="relative rounded-2xl bg-[#090e17] border border-[#1f2d3d] overflow-hidden text-left shadow-2xl">
        {/* macOS Style Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0d1520] border-b border-[#1f2d3d] select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/50 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/50 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/50 inline-block" />
            <span className="ml-3 text-[11px] font-mono text-[#9caac0] hidden sm:inline-block">
              worksauto.com.tr / panel / canli-atolye
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Canlı Atölye: 5 Lift Dolu</span>
            </div>
            <div className="w-6 h-6 rounded-lg bg-[#162232] flex items-center justify-center text-[#9caac0]">
              <Bell size={12} />
            </div>
          </div>
        </div>

        {/* Mockup Subheader / Nav */}
        <div className="px-4 sm:px-6 py-3 bg-[#0a101a] border-b border-[#1f2d3d] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <button
              type="button"
              onClick={() => setActiveTab("LIFTS")}
              className={cn(
                "px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer",
                activeTab === "LIFTS"
                  ? "bg-[#2357c5] text-white shadow-[0_0_15px_rgba(35,87,197,0.4)]"
                  : "bg-[#111a26] text-[#9caac0] hover:text-white"
              )}
            >
              Lift Takip (6/6)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("ORDERS")}
              className={cn(
                "px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer",
                activeTab === "ORDERS"
                  ? "bg-[#2357c5] text-white shadow-[0_0_15px_rgba(35,87,197,0.4)]"
                  : "bg-[#111a26] text-[#9caac0] hover:text-white"
              )}
            >
              Aktif İş Emirleri (18)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("REVENUE")}
              className={cn(
                "px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer",
                activeTab === "REVENUE"
                  ? "bg-[#2357c5] text-white shadow-[0_0_15px_rgba(35,87,197,0.4)]"
                  : "bg-[#111a26] text-[#9caac0] hover:text-white"
              )}
            >
              Kasa & Ciro Özeti
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#9caac0] font-mono">
            <span>📅 Ekim 2026</span>
            <span>•</span>
            <span className="text-white font-semibold">Bayar Maslak Servis</span>
          </div>
        </div>

        {/* 4 Mini Executive KPI Cards */}
        <div className="p-4 sm:p-6 grid grid-cols-2 lg:grid-cols-4 gap-3 bg-[#070b12]">
          <div className="p-3.5 rounded-2xl bg-[#111a26] border border-[#1f2d3d] hover:border-[#2a384b] transition-all">
            <div className="flex items-center justify-between text-[11px] text-[#9caac0]">
              <span className="font-semibold uppercase tracking-wider text-[10px]">Aylık Brüt Ciro</span>
              <span className="text-emerald-400 font-mono font-bold">+%34 ↑</span>
            </div>
            <div className="mt-1 text-xl sm:text-2xl font-black font-heading tracking-tight text-white font-mono">
              ₺384,500
            </div>
            <div className="text-[10px] text-[#9caac0] mt-1">İşçilik: ₺160K • Parça: ₺224K</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#111a26] border border-[#1f2d3d] hover:border-[#2a384b] transition-all">
            <div className="flex items-center justify-between text-[11px] text-[#9caac0]">
              <span className="font-semibold uppercase tracking-wider text-[10px]">Gerçek Net Kâr</span>
              <span className="px-1.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 font-mono text-[9px] font-bold border border-emerald-500/20">
                %59 Marj
              </span>
            </div>
            <div className="mt-1 text-xl sm:text-2xl font-black font-heading tracking-tight text-white font-mono">
              ₺226,850
            </div>
            <div className="text-[10px] text-[#9caac0] mt-1">Giderler (OPEX) düşüldükten sonra</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#111a26] border border-[#1f2d3d] hover:border-[#2a384b] transition-all">
            <div className="flex items-center justify-between text-[11px] text-[#9caac0]">
              <span className="font-semibold uppercase tracking-wider text-[10px]">Bugünkü Kasa</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <div className="mt-1 text-xl sm:text-2xl font-black font-heading tracking-tight text-white font-mono">
              ₺48,200
            </div>
            <div className="text-[10px] text-[#9caac0] mt-1">Nakit, POS ve Havale tahsilat</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#111a26] border border-[#1f2d3d] hover:border-[#2a384b] transition-all">
            <div className="flex items-center justify-between text-[11px] text-[#9caac0]">
              <span className="font-semibold uppercase tracking-wider text-[10px]">Atölyede İşlemde</span>
              <span className="text-[#8fb4ff] font-mono text-[10px]">6 Lift</span>
            </div>
            <div className="mt-1 text-xl sm:text-2xl font-black font-heading tracking-tight text-white font-mono">
              12 Araç
            </div>
            <div className="text-[10px] text-emerald-400 mt-1 font-medium">5 Liftte • 7 Sırada</div>
          </div>
        </div>

        {/* Live Workshop Lifts View (Interactive Visuals) */}
        <div className="p-4 sm:p-6 bg-[#070b12] border-t border-[#1f2d3d] space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Wrench size={16} className="text-[#8fb4ff]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white font-heading">
                Canlı Lift & İstasyon Durumu
              </span>
            </div>
            <span className="text-[11px] text-[#9caac0] font-mono">Otomatik Canlı Senkronize</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Lift 1 */}
            <div className="p-3.5 rounded-2xl bg-[#111a26] border border-[#1f2d3d] relative overflow-hidden group/lift hover:border-[#3b72ea]/50 transition-all">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-mono font-bold text-[#8fb4ff]">LİFT 01 (Mekanik)</span>
                <span className="px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-bold">
                  İşlemde (%75)
                </span>
              </div>
              <div className="flex items-center gap-2 my-1.5">
                <span className="font-mono font-black text-white text-sm bg-black/40 px-2 py-0.5 rounded border border-white/10">
                  34 BVR 198
                </span>
                <span className="text-xs font-semibold text-[#edf3fa] truncate">BMW 320i M Sport</span>
              </div>
              <p className="text-[11px] text-[#9caac0] mt-1">Ön-Arka Fren Balata & Disk Değişimi</p>
              <div className="mt-3 pt-2.5 border-t border-[#1f2d3d] flex items-center justify-between text-[10px] text-[#9caac0]">
                <span>Usta: Serkan U.</span>
                <span className="font-mono text-emerald-400 font-bold">₺18,500</span>
              </div>
            </div>

            {/* Lift 2 */}
            <div className="p-3.5 rounded-2xl bg-[#111a26] border border-[#1f2d3d] relative overflow-hidden group/lift hover:border-[#3b72ea]/50 transition-all">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-mono font-bold text-[#8fb4ff]">LİFT 02 (Periyodik)</span>
                <span className="px-2 py-0.5 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[10px] font-bold">
                  Parça Montaj
                </span>
              </div>
              <div className="flex items-center gap-2 my-1.5">
                <span className="font-mono font-black text-white text-sm bg-black/40 px-2 py-0.5 rounded border border-white/10">
                  06 ANK 420
                </span>
                <span className="text-xs font-semibold text-[#edf3fa] truncate">Mercedes C200d</span>
              </div>
              <p className="text-[11px] text-[#9caac0] mt-1">60.000 KM Ağır Bakım & Yağ Değişimi</p>
              <div className="mt-3 pt-2.5 border-t border-[#1f2d3d] flex items-center justify-between text-[10px] text-[#9caac0]">
                <span>Usta: Ahmet K.</span>
                <span className="font-mono text-emerald-400 font-bold">₺24,200</span>
              </div>
            </div>

            {/* Lift 3 */}
            <div className="p-3.5 rounded-2xl bg-[#111a26] border border-[#1f2d3d] relative overflow-hidden group/lift hover:border-[#3b72ea]/50 transition-all">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-mono font-bold text-[#8fb4ff]">LİFT 03 (Elektronik)</span>
                <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                  Test Sürüşü ✓
                </span>
              </div>
              <div className="flex items-center gap-2 my-1.5">
                <span className="font-mono font-black text-white text-sm bg-black/40 px-2 py-0.5 rounded border border-white/10">
                  35 IZM 99
                </span>
                <span className="text-xs font-semibold text-[#edf3fa] truncate">Audi A4 2.0 TDI</span>
              </div>
              <p className="text-[11px] text-[#9caac0] mt-1">DSG Şanzıman Kavrama Revizyonu</p>
              <div className="mt-3 pt-2.5 border-t border-[#1f2d3d] flex items-center justify-between text-[10px] text-[#9caac0]">
                <span>Usta: Murat U.</span>
                <span className="font-mono text-emerald-400 font-bold">₺52,000</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI & Growth Radar Banner Inside Mockup */}
        <div className="p-3.5 sm:px-6 sm:py-3 bg-gradient-to-r from-[#12223a] via-[#101b2c] to-[#0c1421] border-t border-[#1f2d3d] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-[#2357c5] text-white shrink-0 shadow-[0_0_10px_rgba(35,87,197,0.5)]">
              <Sparkles size={14} />
            </div>
            <div>
              <span className="font-bold text-white">WorksAuto Kazanç Radarı: </span>
              <span className="text-[#9caac0]">
                Bugün TÜVTÜRK muayenesi yaklaşan 3 müşteriye tek tık WhatsApp randevu daveti gönderildi.
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-emerald-400 font-mono font-bold">+₺13,500 Potansiyel Ciro</span>
          </div>
        </div>
      </div>
    </div>
  );
}
