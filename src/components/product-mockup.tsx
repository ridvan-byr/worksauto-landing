"use client";

import * as React from "react";
import {
  Check,
  Calendar,
  MessageCircle,
  Layers,
  Smartphone,
  BarChart3,
} from "lucide-react";

export function ProductMockup() {
  return (
    <div className="relative mx-auto max-w-5xl">
      {/* Background Studio Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[480px] bg-gradient-to-r from-[#2357c5]/25 via-[#3b72ea]/15 to-[#8fb4ff]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Main Showcase Canvas (Layered Laptop + Overlapping Phone) */}
      <div className="relative mx-auto max-w-4xl pt-6 pb-10 sm:pb-12">
        {/* ======================================================== */}
        {/* 1. FLOATING NOTIFICATION BADGES                          */}
        {/* ======================================================== */}
        {/* Top-Left Notification: Servis Tamamlandı */}
        <div className="absolute top-0 -left-2 sm:-left-6 md:-left-10 z-30 p-2.5 sm:p-3 rounded-2xl bg-[#09131f]/95 backdrop-blur-xl border border-emerald-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex items-center gap-3 animate-bounce-slow">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/40">
            <Check size={16} className="stroke-[2.5]" />
          </div>
          <div className="text-left pr-2">
            <div className="text-xs sm:text-[13px] font-bold text-white font-heading">
              Servis tamamlandı!
            </div>
            <div className="text-[10px] sm:text-[11px] text-[#9caac0]">
              Maslak Auto • 2 dk önce
            </div>
          </div>
        </div>

        {/* Bottom-Left Notification: Yeni Randevu & Kabul */}
        <div className="absolute bottom-16 sm:bottom-20 -left-2 sm:-left-6 md:-left-10 z-30 p-2.5 sm:p-3 rounded-2xl bg-[#09131f]/95 backdrop-blur-xl border border-[#3b72ea]/40 shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex items-center gap-3">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#2357c5]/20 text-[#8fb4ff] flex items-center justify-center shrink-0 border border-[#3b72ea]/40">
            <Calendar size={16} />
          </div>
          <div className="text-left pr-2">
            <div className="text-xs sm:text-[13px] font-bold text-white font-heading">
              Yeni Randevu & Kabul
            </div>
            <div className="text-[10px] sm:text-[11px] text-[#9caac0] font-mono">
              34 BVR 198 • 14:30
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. MACBOOK PRO (DESKTOP WORKSHOP COCKPIT)                */}
        {/* ======================================================== */}
        <div className="relative mx-auto w-full max-w-[800px] shadow-[0_30px_90px_rgba(0,0,0,0.95)]">
          {/* Laptop Lid Screen Frame */}
          <div className="rounded-t-2xl sm:rounded-t-3xl bg-[#090d14] border-[3px] border-[#222b38] overflow-hidden">
            {/* Topbar with Notch & Live Status */}
            <div className="px-4 py-3 bg-[#0d1420] border-b border-[#1f2d3d] flex items-center justify-between text-xs select-none relative">
              {/* macOS Dots */}
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>

              {/* Titlebar / Notch */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 px-4 py-1 bg-[#090d14] rounded-b-xl border-b border-x border-[#1f2d3d] text-white font-mono text-xs font-semibold">
                Maslak Servis Paneli
              </div>

              {/* Status on Right */}
              <div className="flex items-center gap-2 font-mono text-[11px] text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>4 Lift Dolu</span>
              </div>
            </div>

            {/* Laptop Screen Content: 4 Real Lifts */}
            <div className="p-3 sm:p-5 bg-[#070b12] space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                {/* LİFT 01 */}
                <div className="p-3 sm:p-3.5 rounded-2xl bg-[#0c1421] border border-[#3b72ea]/50 text-left space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#8fb4ff] font-bold tracking-wider">LİFT 01</span>
                    <span className="text-amber-400 font-bold">%75 İşlemde</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/60 border border-white/5 space-y-1">
                    <div className="font-mono font-bold text-white text-xs sm:text-sm">34 BVR 198</div>
                    <div className="text-xs text-white font-semibold">BMW 320i M Sport</div>
                    <div className="text-[11px] text-[#9caac0]">Ön Fren Balata & Disk</div>
                  </div>
                  <div className="pt-2 border-t border-[#1f2d3d] flex items-center justify-between text-xs font-mono">
                    <span className="text-[#9caac0]">Serkan U.</span>
                    <span className="text-emerald-400 font-bold">₺18,500</span>
                  </div>
                </div>

                {/* LİFT 02 */}
                <div className="p-3 sm:p-3.5 rounded-2xl bg-[#0c1421] border border-emerald-500/40 text-left space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#8fb4ff] font-bold tracking-wider">LİFT 02</span>
                    <span className="text-emerald-400 font-bold">Hazır / Yıkama</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/60 border border-white/5 space-y-1">
                    <div className="font-mono font-bold text-white text-xs sm:text-sm">06 ANK 2026</div>
                    <div className="text-xs text-white font-semibold">Mercedes C200d</div>
                    <div className="text-[11px] text-[#9caac0]">60K Bakım & Filtre</div>
                  </div>
                  <div className="pt-2 border-t border-[#1f2d3d] flex items-center justify-between text-xs font-mono">
                    <span className="text-[#9caac0]">Ahmet U.</span>
                    <span className="text-emerald-400 font-bold">₺24,800</span>
                  </div>
                </div>

                {/* LİFT 03 */}
                <div className="p-3 sm:p-3.5 rounded-2xl bg-[#0c1421] border border-[#1f2d3d] text-left space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#8fb4ff] font-bold tracking-wider">LİFT 03</span>
                    <span className="text-blue-400 font-bold">Parça Geldi</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/60 border border-white/5 space-y-1">
                    <div className="font-mono font-bold text-white text-xs sm:text-sm">35 IZM 441</div>
                    <div className="text-xs text-white font-semibold">Audi A4 40 TDI</div>
                    <div className="text-[11px] text-[#9caac0]">Salıncak & Amortisör</div>
                  </div>
                  <div className="pt-2 border-t border-[#1f2d3d] flex items-center justify-between text-xs font-mono">
                    <span className="text-[#9caac0]">Volkan U.</span>
                    <span className="text-emerald-400 font-bold">₺14,200</span>
                  </div>
                </div>

                {/* LİFT 04 */}
                <div className="p-3 sm:p-3.5 rounded-2xl bg-[#0c1421] border border-[#1f2d3d] text-left space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#8fb4ff] font-bold tracking-wider">LİFT 04</span>
                    <span className="text-purple-300 font-bold">Ekspertiz</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/60 border border-white/5 space-y-1">
                    <div className="font-mono font-bold text-white text-xs sm:text-sm">16 BUR 992</div>
                    <div className="text-xs text-white font-semibold">VW Passat</div>
                    <div className="text-[11px] text-[#9caac0]">360° Kaporta Tutanağı</div>
                  </div>
                  <div className="pt-2 border-t border-[#1f2d3d] flex items-center justify-between text-xs font-mono">
                    <span className="text-[#9caac0]">Selim D.</span>
                    <span className="text-emerald-400 font-bold">₺8,500</span>
                  </div>
                </div>
              </div>

              {/* Bottom Financial Reconciliation Bar */}
              <div className="px-4 py-2.5 rounded-xl bg-[#0d1624] border border-[#1f2d3d] flex items-center justify-between text-xs font-mono">
                <span className="text-white font-bold tracking-wide">KASA: ₺48,200</span>
                <span className="text-[#8fb4ff] hidden sm:inline">Nakit: ₺14.2K • POS: ₺28.5K</span>
                <span className="text-emerald-400 font-semibold">GİB E-Fatura Onaylı ✓</span>
              </div>
            </div>
          </div>

          {/* Laptop Base Lip */}
          <div className="w-full h-4 sm:h-5 bg-gradient-to-b from-[#1c2430] to-[#121822] rounded-b-2xl sm:rounded-b-3xl border-b-[3px] border-x-[3px] border-[#222b38] flex items-center justify-center shadow-2xl">
            <div className="w-24 sm:w-32 h-1 bg-[#090d14] rounded-b-md" />
          </div>
        </div>

        {/* ======================================================== */}
        {/* 3. SMARTPHONE (WORKS征AUTO MÜŞTERİ CANLI TAKİP)            */}
        {/* ======================================================== */}
        <div className="relative mt-6 lg:mt-0 lg:absolute lg:bottom-4 lg:-right-4 xl:-right-10 z-40 w-[290px] sm:w-[320px] mx-auto">
          {/* Phone Outer Chassis */}
          <div className="rounded-[44px] p-3 sm:p-3.5 bg-gradient-to-b from-[#2b3545] via-[#1c232f] to-[#101620] border-2 border-[#414f64] shadow-[0_35px_80px_rgba(0,0,0,0.95)]">
            {/* Screen Glass */}
            <div className="rounded-[36px] bg-[#070b12] border border-black overflow-hidden p-4 space-y-3.5 font-sans text-xs shadow-inner text-left">
              {/* Dynamic Island / Speaker */}
              <div className="mx-auto w-24 h-4 bg-black rounded-full flex items-center justify-end px-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* Header: MÜŞTERİ CANLI TAKİP */}
              <div className="text-center space-y-0.5 pt-0.5">
                <div className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-[#8fb4ff] uppercase">
                  MÜŞTERİ CANLI TAKİP
                </div>
                <h4 className="text-sm font-bold text-white font-heading">
                  Maslak Özel Servis
                </h4>
              </div>

              {/* Vehicle & Plate Card */}
              <div className="p-2.5 rounded-xl bg-[#111a26] border border-[#1f2d3d] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-black text-white text-xs bg-black/70 px-2 py-0.5 rounded border border-white/10">
                    34 BVR 198
                  </span>
                  <span className="text-xs font-bold text-white">BMW 320i</span>
                </div>
                <span className="text-[10px] text-amber-400 font-mono font-bold bg-amber-500/15 px-2 py-0.5 rounded border border-amber-500/30">
                  Liftte
                </span>
              </div>

              {/* Onarım Aşaması (%75) */}
              <div className="space-y-2 p-3 rounded-2xl bg-[#0c1421] border border-[#1f2d3d]">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#9caac0]">Onarım Aşaması</span>
                  <span className="text-emerald-400 font-bold font-mono">%75</span>
                </div>
                <div className="w-full h-2 bg-black/70 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#2357c5] via-[#3b72ea] to-emerald-400 w-3/4 rounded-full" />
                </div>
                <div className="flex justify-between text-[9px] font-mono text-[#9caac0] pt-0.5">
                  <span className="text-emerald-400 font-semibold">✓ Kabul</span>
                  <span className="text-emerald-400 font-semibold">✓ Parça</span>
                  <span className="text-amber-400 font-bold">● Montaj</span>
                  <span>Teslim</span>
                </div>
              </div>

              {/* Part & Cost Card */}
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-between text-xs">
                <span className="text-emerald-400 font-semibold">Fren Disk & Balata</span>
                <span className="text-emerald-400 font-mono font-bold text-sm">₺18,500</span>
              </div>

              {/* WhatsApp Action Button */}
              <div className="py-3 rounded-xl bg-[#0e3b2e] hover:bg-[#124d3c] border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer">
                <MessageCircle size={15} className="text-emerald-400" />
                <span>WhatsApp'tan Yaz</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom 3 Core Pillars */}
      <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-[#0c1421] border border-[#1f2d3d] grid grid-cols-1 sm:grid-cols-3 gap-4 text-left shadow-xl">
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
              Şifresiz mobil link ile şeffaf parça onayı ve servis telefon aramalarında %70 azalma.
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
              Nilvera ve Paraşüt entegrasyonuyla resmi e-fatura ve Z-raporu dökümü.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

