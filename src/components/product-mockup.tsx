"use client";

import * as React from "react";
import {
  Wrench,
  Smartphone,
  Layers,
  CheckCircle2,
  Clock,
  Car,
  MessageSquare,
  ShieldCheck,
  FileCheck,
  BarChart3,
  Search,
  Bell,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function ProductMockup() {
  const [activeTab, setActiveTab] = React.useState<"COCKPIT" | "ORDERS">("COCKPIT");

  return (
    <div className="relative mx-auto max-w-6xl group transition-all duration-500">
      {/* Studio Radial Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-[#2357c5]/20 via-[#3b72ea]/15 to-[#8fb4ff]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* DUAL DEVICE STUDIO CANVAS (Side-by-Side Laptop & Phone) */}
      <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center gap-6 lg:gap-8 pt-4 pb-8">
        {/* ======================================================== */}
        {/* 1. REALISTIC MACBOOK PRO (16:10 RATIO LAPTOP MOCKUP)      */}
        {/* ======================================================== */}
        <div className="w-full lg:w-[68%] flex flex-col items-center">
          {/* Laptop Screen Lid */}
          <div className="w-full rounded-t-2xl sm:rounded-t-3xl bg-[#090d14] border-[3px] sm:border-[4px] border-[#222b38] shadow-[0_30px_80px_rgba(0,0,0,0.9)] overflow-hidden relative">
            {/* Display Camera Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-3 sm:h-3.5 bg-[#222b38] rounded-b-xl z-30 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-black/90 ring-1 ring-white/10" />
            </div>

            {/* WorksAuto Real Workshop Panel Topbar */}
            <div className="px-4 py-3 bg-[#0d1420] border-b border-[#1f2d3d] flex items-center justify-between text-xs select-none">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                <span className="ml-2 font-mono text-[11px] text-white font-bold hidden sm:inline">
                  WorksAuto &nbsp;•&nbsp; Maslak Merkez Servis Paneli
                </span>
              </div>

              <div className="flex items-center gap-3 font-mono text-[11px]">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Canlı Liftler
                </span>
                <span className="text-white font-bold hidden sm:inline">
                  ₺48,200 Günlük Kasa
                </span>
              </div>
            </div>

            {/* Panel Navigation Bar */}
            <div className="px-4 py-2 bg-[#090f18] border-b border-[#1f2d3d] flex items-center justify-between text-xs">
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setActiveTab("COCKPIT")}
                  className={cn(
                    "px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5",
                    activeTab === "COCKPIT"
                      ? "bg-[#2357c5] text-white shadow-sm"
                      : "text-[#9caac0] hover:text-white"
                  )}
                >
                  <Layers size={12} />
                  <span>Canlı Atölye Liftleri</span>
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
                  <Wrench size={12} />
                  <span>İş Emirleri & Kabul</span>
                </button>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-[11px] text-[#9caac0] font-mono">
                <span>12 Araç Serviste</span>
                <span>•</span>
                <span className="text-emerald-400 font-bold">%100 Doluluk</span>
              </div>
            </div>

            {/* PANEL SCREEN VIEW CONTENT */}
            {activeTab === "COCKPIT" ? (
              /* TAB 1: 4 LIVE WORKSHOP LIFTS */
              <div className="p-3 sm:p-5 bg-[#070b12] space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Lift 01 */}
                  <div className="p-3 rounded-2xl bg-[#0c1421] border border-[#3b72ea]/40 relative overflow-hidden">
                    <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                      <span className="text-[#8fb4ff] font-bold">LİFT 01 (Mekanik)</span>
                      <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-400 text-[10px] font-bold">
                        İşlemde (%75)
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black/50 border border-white/5 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-black text-white text-xs bg-[#111a26] px-1.5 py-0.5 rounded border border-white/10">
                          34 BVR 198
                        </span>
                        <span className="text-xs font-bold text-white truncate">BMW 320i M Sport</span>
                      </div>
                      <div className="text-[11px] text-[#9caac0]">Ön Fren Disk & Balata Takımı Değişimi</div>
                    </div>
                    <div className="mt-2.5 pt-2 border-t border-[#1f2d3d] flex items-center justify-between text-[11px] text-[#9caac0]">
                      <span>Usta: Serkan Usta</span>
                      <span className="text-emerald-400 font-mono font-bold">₺18,500</span>
                    </div>
                  </div>

                  {/* Lift 02 */}
                  <div className="p-3 rounded-2xl bg-[#0c1421] border border-emerald-500/40 relative overflow-hidden">
                    <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                      <span className="text-[#8fb4ff] font-bold">LİFT 02 (Periyodik)</span>
                      <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                        Hazır / Yıkamada
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black/50 border border-white/5 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-black text-white text-xs bg-[#111a26] px-1.5 py-0.5 rounded border border-white/10">
                          06 ANK 2026
                        </span>
                        <span className="text-xs font-bold text-white truncate">Mercedes C200d AMG</span>
                      </div>
                      <div className="text-[11px] text-[#9caac0]">60.000 Km Ağır Bakım & Yağ-Filtre</div>
                    </div>
                    <div className="mt-2.5 pt-2 border-t border-[#1f2d3d] flex items-center justify-between text-[11px] text-[#9caac0]">
                      <span>Usta: Ahmet Usta</span>
                      <span className="text-emerald-400 font-mono font-bold">₺24,800</span>
                    </div>
                  </div>

                  {/* Lift 03 */}
                  <div className="p-3 rounded-2xl bg-[#0c1421] border border-[#1f2d3d] relative overflow-hidden">
                    <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                      <span className="text-[#8fb4ff] font-bold">LİFT 03 (Ön Takım)</span>
                      <span className="px-2 py-0.5 rounded-md bg-blue-500/20 text-[#8fb4ff] text-[10px] font-bold">
                        Parça Geldi
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black/50 border border-white/5 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-black text-white text-xs bg-[#111a26] px-1.5 py-0.5 rounded border border-white/10">
                          35 IZM 441
                        </span>
                        <span className="text-xs font-bold text-white truncate">Audi A4 40 TDI</span>
                      </div>
                      <div className="text-[11px] text-[#9caac0]">Alt Salıncak & Amortisör Montajı</div>
                    </div>
                    <div className="mt-2.5 pt-2 border-t border-[#1f2d3d] flex items-center justify-between text-[11px] text-[#9caac0]">
                      <span>Usta: Volkan Usta</span>
                      <span className="text-emerald-400 font-mono font-bold">₺14,200</span>
                    </div>
                  </div>

                  {/* Lift 04 */}
                  <div className="p-3 rounded-2xl bg-[#0c1421] border border-[#1f2d3d] relative overflow-hidden">
                    <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                      <span className="text-[#8fb4ff] font-bold">LİFT 04 (Ekspertiz)</span>
                      <span className="px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 text-[10px] font-bold">
                        360° Check-up
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black/50 border border-white/5 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-black text-white text-xs bg-[#111a26] px-1.5 py-0.5 rounded border border-white/10">
                          16 BUR 992
                        </span>
                        <span className="text-xs font-bold text-white truncate">Volkswagen Passat</span>
                      </div>
                      <div className="text-[11px] text-[#9caac0]">Dijital İkiz Kaporta Çizik Tutanak</div>
                    </div>
                    <div className="mt-2.5 pt-2 border-t border-[#1f2d3d] flex items-center justify-between text-[11px] text-[#9caac0]">
                      <span>Danışman: Selim Danışman</span>
                      <span className="text-emerald-400 font-mono font-bold">₺8,500</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Financial Reconciliation Bar */}
                <div className="p-2.5 sm:p-3 rounded-xl bg-[#0d1624] border border-[#1f2d3d] flex flex-col sm:flex-row items-center justify-between text-xs gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold">
                      GÜN SONU KASA MUTABIK
                    </span>
                    <span className="text-slate-300 text-[11px] font-mono">
                      Nakit: ₺14.200 • POS: ₺28.500 • Çek: ₺5.500
                    </span>
                  </div>
                  <span className="text-[#8fb4ff] font-mono text-[11px] font-semibold">
                    GİB E-Fatura Nilvera Onaylı ✓
                  </span>
                </div>
              </div>
            ) : (
              /* TAB 2: CENTRAL WORK ORDERS TABLE */
              <div className="p-4 sm:p-5 bg-[#070b12] space-y-3 font-mono text-xs">
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-[#0c1421] border border-[#1f2d3d]">
                    <div className="text-[10px] text-[#9caac0]">KABUL MASASI</div>
                    <div className="text-base font-bold text-white mt-1">4 Araç Bekliyor</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0c1421] border border-amber-500/30">
                    <div className="text-[10px] text-amber-400">LİFTTE İŞLEMDE</div>
                    <div className="text-base font-bold text-white mt-1">4 Lift Dolu</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0c1421] border border-emerald-500/30">
                    <div className="text-[10px] text-emerald-400">TESLİME HAZIR</div>
                    <div className="text-base font-bold text-white mt-1">8 Araç Bildirildi</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#0c1421] border border-[#1f2d3d] space-y-2">
                  <div className="flex items-center justify-between text-[#9caac0] text-[10px] pb-1 border-b border-[#1f2d3d]">
                    <span>PLAKA & MODEL</span>
                    <span>İŞLEM</span>
                    <span>USTA</span>
                    <span>TUTAR</span>
                    <span>DURUM</span>
                  </div>
                  <div className="flex items-center justify-between text-white text-[11px]">
                    <span className="font-bold">34 BVR 198 (BMW 320i)</span>
                    <span className="text-[#9caac0]">Fren Disk & Balata</span>
                    <span className="text-[#8fb4ff]">Serkan Usta</span>
                    <span className="text-emerald-400 font-bold">₺18,500</span>
                    <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 text-[10px]">İşlemde</span>
                  </div>
                  <div className="flex items-center justify-between text-white text-[11px]">
                    <span className="font-bold">06 ANK 2026 (Mercedes C200)</span>
                    <span className="text-[#9caac0]">Periyodik 60K Bakım</span>
                    <span className="text-[#8fb4ff]">Ahmet Usta</span>
                    <span className="text-emerald-400 font-bold">₺24,800</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px]">Hazır</span>
                  </div>
                  <div className="flex items-center justify-between text-white text-[11px]">
                    <span className="font-bold">35 IZM 441 (Audi A4)</span>
                    <span className="text-[#9caac0]">Amortisör Değişimi</span>
                    <span className="text-[#8fb4ff]">Volkan Usta</span>
                    <span className="text-emerald-400 font-bold">₺14,200</span>
                    <span className="px-2 py-0.5 rounded bg-blue-500/20 text-[#8fb4ff] text-[10px]">Montajda</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Realistic MacBook Pro Keyboard Base Lip */}
          <div className="w-full h-4 sm:h-5 bg-gradient-to-b from-[#1c2430] to-[#121822] rounded-b-2xl sm:rounded-b-3xl border-b-[3px] border-x-[3px] border-[#222b38] shadow-2xl flex items-center justify-center">
            <div className="w-20 sm:w-28 h-1 bg-[#090d14] rounded-b-md" />
          </div>
          {/* Laptop Base Shadow */}
          <div className="h-2 w-[92%] bg-black/80 blur-md rounded-full -mt-1" />
        </div>

        {/* ======================================================== */}
        {/* 2. REALISTIC IPHONE 16 PRO (MOBILE LIVE TRACKING PORTAL) */}
        {/* ======================================================== */}
        <div className="w-[280px] sm:w-[300px] shrink-0">
          {/* iPhone 16 Pro Titanium Chassis */}
          <div className="rounded-[44px] p-3 bg-gradient-to-b from-[#384252] via-[#202733] to-[#141a24] border-2 border-[#48566c] shadow-[0_30px_70px_rgba(0,0,0,0.95)] relative">
            {/* Screen Glass */}
            <div className="rounded-[36px] bg-[#070b12] border border-black overflow-hidden p-3.5 space-y-3 font-sans text-xs shadow-inner">
              {/* Dynamic Island */}
              <div className="mx-auto w-24 h-4 bg-black rounded-full flex items-center justify-end px-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* Mobile Header: WorksAuto Portal */}
              <div className="text-center pb-2 border-b border-[#1f2d3d]">
                <div className="text-[10px] font-mono text-[#8fb4ff] font-bold tracking-wider">
                  CANLI ARAÇ TAKİP PORTALI
                </div>
                <h4 className="text-xs font-bold text-white font-heading mt-0.5">
                  Maslak Özel Servis
                </h4>
              </div>

              {/* Vehicle & Plate Pill */}
              <div className="flex items-center justify-between p-2 rounded-xl bg-[#111a26] border border-[#1f2d3d]">
                <div>
                  <span className="font-mono font-black text-white text-xs bg-black/60 px-1.5 py-0.5 rounded border border-white/10">
                    34 BVR 198
                  </span>
                  <span className="text-[11px] text-white ml-1.5 font-bold">BMW 320i</span>
                </div>
                <span className="text-[10px] text-amber-400 font-mono font-bold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  Liftte
                </span>
              </div>

              {/* Real 4-Step Progress Stepper */}
              <div className="space-y-1.5 p-2.5 rounded-xl bg-[#0c1421] border border-white/5">
                <div className="flex justify-between text-[10px] text-[#9caac0]">
                  <span>Onarım Aşaması</span>
                  <span className="text-emerald-400 font-bold font-mono">%75 Tamamlandı</span>
                </div>
                <div className="w-full h-1.5 bg-black/60 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#2357c5] to-emerald-400 w-3/4 rounded-full" />
                </div>
                <div className="flex justify-between text-[9px] font-mono text-[#9caac0] pt-0.5">
                  <span className="text-emerald-400">✓ Kabul</span>
                  <span className="text-emerald-400">✓ Parça</span>
                  <span className="text-amber-400 font-bold">● Montaj</span>
                  <span>Teslim</span>
                </div>
              </div>

              {/* Verified Added Part Card */}
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[10px] space-y-1 text-[#edf3fa]">
                <div className="flex items-center justify-between font-bold text-emerald-400">
                  <span>Ön Disk & Balata Takımı</span>
                  <span>₺18,500</span>
                </div>
                <p className="text-[9px] text-[#9caac0]">
                  WhatsApp üzerinden onaylandı • Usta montajı tamamladı
                </p>
              </div>

              {/* Direct WhatsApp Callout Button */}
              <div className="py-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-center font-bold text-[11px] text-emerald-400 flex items-center justify-center gap-1.5 shadow-sm">
                <MessageSquare size={13} />
                <span>Servis Danışmanına WhatsApp'tan Yaz</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-[#0c1421] border border-[#1f2d3d] grid grid-cols-1 sm:grid-cols-3 gap-4 text-left shadow-xl">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-[#2357c5]/15 border border-[#3b72ea]/30 text-[#8fb4ff] shrink-0 mt-0.5">
            <Layers size={16} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white font-heading">
              Masaüstü Servis Kokpiti
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
  );
}
