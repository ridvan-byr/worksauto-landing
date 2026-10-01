"use client";

import * as React from "react";
import {
  Check,
  Calendar,
  MessageCircle,
  ShieldCheck,
  Clock,
} from "lucide-react";

export function ProductMockup() {
  return (
    <div className="relative w-full select-none">
      {/* Background Studio Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#2357c5]/20 via-[#3b72ea]/15 to-[#8fb4ff]/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Showcase Device Stage */}
      <div className="relative pt-6 pb-10 sm:pb-14">
        {/* ======================================================== */}
        {/* 1. FLOATING NOTIFICATION BADGES                          */}
        {/* ======================================================== */}
        {/* Top-Left Notification: Servis Tamamlandı */}
        <div className="absolute -top-2 left-0 sm:-left-4 md:-left-8 z-30 p-2.5 sm:p-3 rounded-2xl bg-[#09131f]/95 backdrop-blur-xl border border-emerald-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex items-center gap-3 animate-bounce-slow">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/40">
            <Check size={16} className="stroke-[2.5]" />
          </div>
          <div className="text-left pr-1.5">
            <div className="text-xs sm:text-[13px] font-bold text-white font-heading">
              Servis tamamlandı!
            </div>
            <div className="text-[10px] sm:text-[11px] text-[#9caac0]">
              Maslak Auto • 2 dk önce
            </div>
          </div>
        </div>

        {/* Bottom-Left Notification: Yeni Randevu & Kabul */}
        <div className="absolute bottom-20 sm:bottom-24 -left-1 sm:-left-6 md:-left-8 z-30 p-2.5 sm:p-3 rounded-2xl bg-[#09131f]/95 backdrop-blur-xl border border-[#3b72ea]/40 shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex items-center gap-3">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#2357c5]/20 text-[#8fb4ff] flex items-center justify-center shrink-0 border border-[#3b72ea]/40">
            <Calendar size={16} />
          </div>
          <div className="text-left pr-1.5">
            <div className="text-xs sm:text-[13px] font-bold text-white font-heading">
              Yeni Randevu & Kabul
            </div>
            <div className="text-[10px] sm:text-[11px] text-[#9caac0] font-mono">
              34 BVR 198 • 14:30
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. REALISTIC MACBOOK PRO (SCREEN + KEYBOARD BASE DECK)   */}
        {/* ======================================================== */}
        <div className="relative w-full max-w-[600px] sm:max-w-[650px] lg:max-w-[600px] xl:max-w-[660px]">
          {/* Display Lid Frame (Space Gray Aluminum) */}
          <div className="rounded-t-[22px] sm:rounded-t-[26px] p-[3px] bg-gradient-to-b from-[#384252] via-[#222a36] to-[#121620] shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-white/10">
            {/* Display Black Glass Bezel */}
            <div className="rounded-t-[20px] sm:rounded-t-[24px] bg-[#05070c] p-2.5 sm:p-3 border border-black overflow-hidden">
              {/* Screen Content */}
              <div className="rounded-lg sm:rounded-xl bg-[#070a10] border border-[#1a2332] overflow-hidden flex flex-col">
                {/* macOS Menu Header with Apple Notch */}
                <div className="relative px-3 py-2 bg-[#0c121d] border-b border-[#1a2332] flex items-center justify-between text-xs select-none">
                  {/* macOS Window Controls */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] border border-black/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] border border-black/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] border border-black/30" />
                    <span className="ml-2.5 font-heading font-semibold text-white text-[11px] hidden sm:inline">
                      WorksAuto Cockpit
                    </span>
                  </div>

                  {/* Centered Camera Notch */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 w-28 sm:w-32 h-4 sm:h-5 bg-black rounded-b-lg border-b border-x border-white/10 flex items-center justify-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#0a1525] border border-white/20 flex items-center justify-center">
                      <span className="w-0.5 h-0.5 rounded-full bg-[#3b72ea]" />
                    </span>
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  {/* Right Status */}
                  <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>4 Lift Dolu</span>
                  </div>
                </div>

                {/* 4 Lifts Grid */}
                <div className="p-3 sm:p-3.5 space-y-2 bg-[#070a10]">
                  <div className="grid grid-cols-2 gap-2 sm:gap-2.5 text-left">
                    {/* LİFT 01 */}
                    <div className="p-2 sm:p-2.5 rounded-xl bg-[#0d1420] border border-[#3b72ea]/40 space-y-1">
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className="text-[#8fb4ff] font-bold">LİFT 01</span>
                        <span className="text-amber-400 font-bold">%75 İşlemde</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-black/60 border border-white/5 space-y-0.5">
                        <div className="font-mono font-bold text-white text-[11px]">34 BVR 198</div>
                        <div className="text-[10px] text-white font-medium truncate">BMW 320i M Sport</div>
                        <div className="text-[9px] text-[#9caac0] truncate">Ön Fren Balata & Disk</div>
                      </div>
                      <div className="pt-1 border-t border-[#1a2332] flex items-center justify-between text-[9px] font-mono">
                        <span className="text-[#9caac0]">Serkan U.</span>
                        <span className="text-emerald-400 font-bold">₺18,500</span>
                      </div>
                    </div>

                    {/* LİFT 02 */}
                    <div className="p-2 sm:p-2.5 rounded-xl bg-[#0d1420] border border-emerald-500/40 space-y-1">
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className="text-[#8fb4ff] font-bold">LİFT 02</span>
                        <span className="text-emerald-400 font-bold">Hazır / Yıkama</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-black/60 border border-white/5 space-y-0.5">
                        <div className="font-mono font-bold text-white text-[11px]">06 ANK 2026</div>
                        <div className="text-[10px] text-white font-medium truncate">Mercedes C200d</div>
                        <div className="text-[9px] text-[#9caac0] truncate">60K Bakım & Filtre</div>
                      </div>
                      <div className="pt-1 border-t border-[#1a2332] flex items-center justify-between text-[9px] font-mono">
                        <span className="text-[#9caac0]">Ahmet U.</span>
                        <span className="text-emerald-400 font-bold">₺24,800</span>
                      </div>
                    </div>

                    {/* LİFT 03 */}
                    <div className="p-2 sm:p-2.5 rounded-xl bg-[#0d1420] border border-[#1a2332] space-y-1">
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className="text-[#8fb4ff] font-bold">LİFT 03</span>
                        <span className="text-blue-400 font-bold">Parça Geldi</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-black/60 border border-white/5 space-y-0.5">
                        <div className="font-mono font-bold text-white text-[11px]">35 IZM 441</div>
                        <div className="text-[10px] text-white font-medium truncate">Audi A4 40 TDI</div>
                        <div className="text-[9px] text-[#9caac0] truncate">Salıncak & Amortisör</div>
                      </div>
                      <div className="pt-1 border-t border-[#1a2332] flex items-center justify-between text-[9px] font-mono">
                        <span className="text-[#9caac0]">Volkan U.</span>
                        <span className="text-emerald-400 font-bold">₺14,200</span>
                      </div>
                    </div>

                    {/* LİFT 04 */}
                    <div className="p-2 sm:p-2.5 rounded-xl bg-[#0d1420] border border-[#1a2332] space-y-1">
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className="text-[#8fb4ff] font-bold">LİFT 04</span>
                        <span className="text-purple-300 font-bold">Ekspertiz</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-black/60 border border-white/5 space-y-0.5">
                        <div className="font-mono font-bold text-white text-[11px]">16 BUR 992</div>
                        <div className="text-[10px] text-white font-medium truncate">VW Passat</div>
                        <div className="text-[9px] text-[#9caac0] truncate">360° Kaporta Tutanak</div>
                      </div>
                      <div className="pt-1 border-t border-[#1a2332] flex items-center justify-between text-[9px] font-mono">
                        <span className="text-[#9caac0]">Selim D.</span>
                        <span className="text-emerald-400 font-bold">₺8,500</span>
                      </div>
                    </div>
                  </div>

                  {/* Kasa Bar */}
                  <div className="px-3 py-1.5 rounded-xl bg-[#0c121d] border border-[#1a2332] flex items-center justify-between text-[10px] sm:text-[11px] font-mono">
                    <span className="text-white font-bold">KASA: ₺48,200</span>
                    <span className="text-[#8fb4ff] hidden sm:inline">Nakit: ₺14.2K • POS: ₺28.5K</span>
                    <span className="text-emerald-400 font-semibold">GİB E-Fatura ✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* MACBOOK LOWER CHASSIS & KEYBOARD DECK (3D PERSPECTIVE)   */}
          {/* ======================================================== */}
          {/* Hinge Line */}
          <div className="w-[94%] mx-auto h-1.5 bg-[#0a0d13] border-x border-black" />

          {/* 3D Perspective Keyboard Deck Projecting Forward */}
          <div className="relative [perspective:1000px] -mt-0.5">
            <div
              className="w-[103%] -ml-[1.5%] h-20 sm:h-24 bg-gradient-to-b from-[#1c2432] via-[#121822] to-[#0a0e15] rounded-b-xl border-x-[2px] border-b-[2px] border-[#313e52] relative overflow-hidden shadow-2xl"
              style={{
                transform: "rotateX(38deg)",
                transformOrigin: "top center",
              }}
            >
              {/* Recessed Keyboard Well */}
              <div className="mx-auto w-[82%] mt-1.5 h-11 sm:h-13 bg-[#05070b] rounded-md p-1 border border-white/5 shadow-inner flex flex-col justify-between">
                {/* Key rows */}
                <div className="grid grid-cols-12 gap-0.5 h-1.5">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="bg-[#121824] rounded-[1px] border border-white/5" />
                  ))}
                </div>
                <div className="grid grid-cols-12 gap-0.5 h-1.5">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="bg-[#121824] rounded-[1px] border border-white/5" />
                  ))}
                </div>
                <div className="grid grid-cols-12 gap-0.5 h-1.5">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="bg-[#121824] rounded-[1px] border border-white/5" />
                  ))}
                </div>
                {/* Spacebar Row */}
                <div className="flex gap-0.5 h-2">
                  <div className="w-6 bg-[#121824] rounded-[1px] border border-white/5" />
                  <div className="w-8 bg-[#121824] rounded-[1px] border border-white/5" />
                  <div className="flex-1 bg-[#172030] rounded-[1px] border border-white/10" />
                  <div className="w-8 bg-[#121824] rounded-[1px] border border-white/5" />
                  <div className="w-6 bg-[#121824] rounded-[1px] border border-white/5" />
                </div>
              </div>

              {/* Speaker Grilles on Sides */}
              <div className="absolute left-2.5 top-2.5 w-3 h-10 opacity-30 flex flex-col justify-between">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="w-full h-[1px] bg-white/40" />
                ))}
              </div>
              <div className="absolute right-2.5 top-2.5 w-3 h-10 opacity-30 flex flex-col justify-between">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="w-full h-[1px] bg-white/40" />
                ))}
              </div>

              {/* Force Touch Trackpad */}
              <div className="mx-auto mt-1 w-24 sm:w-32 h-5 sm:h-6 rounded-md bg-[#0d121b] border border-white/10 shadow-inner" />
            </div>

            {/* Front Chamfered Lip with Thumb Scoop */}
            <div className="w-[104%] -ml-[2%] h-3.5 sm:h-4 bg-gradient-to-b from-[#2a3445] via-[#1a212d] to-[#0c1017] rounded-b-xl border-x-[2px] border-b-[2px] border-[#3e4c63] flex items-center justify-center shadow-2xl relative z-10 -mt-1">
              <div className="w-18 sm:w-22 h-1 bg-[#06080d] rounded-b-md border-x border-b border-white/10 shadow-inner" />
            </div>

            {/* Tabletop Surface Drop Shadow */}
            <div className="w-[96%] mx-auto h-4 bg-black/90 blur-lg rounded-full -mt-2" />
          </div>
        </div>

        {/* ======================================================== */}
        {/* 3. SLENDER IPHONE 16 PRO (TRUE 19.5:9 ASPECT RATIO)      */}
        {/* ======================================================== */}
        <div className="relative mt-8 sm:mt-0 sm:absolute sm:-bottom-4 sm:right-0 lg:-right-3 xl:-right-6 z-40 w-[240px] sm:w-[250px] mx-auto drop-shadow-[0_35px_80px_rgba(0,0,0,0.98)]">
          {/* Physical Side Buttons */}
          {/* Action Button (Left) */}
          <div className="absolute -left-[3px] top-20 w-[3px] h-5 bg-[#3a4454] rounded-l-sm border-l border-white/20" />
          {/* Volume Up (Left) */}
          <div className="absolute -left-[3px] top-30 w-[3px] h-9 bg-[#3a4454] rounded-l-sm border-l border-white/20" />
          {/* Volume Down (Left) */}
          <div className="absolute -left-[3px] top-42 w-[3px] h-9 bg-[#3a4454] rounded-l-sm border-l border-white/20" />
          {/* Power / Side Button (Right) */}
          <div className="absolute -right-[3px] top-30 w-[3px] h-14 bg-[#3a4454] rounded-r-sm border-r border-white/20" />

          {/* Natural Titanium Chassis */}
          <div className="rounded-[46px] p-2.5 bg-gradient-to-b from-[#3a4556] via-[#222a36] to-[#141a24] border-[2px] border-[#4a576c] ring-1 ring-white/10 shadow-2xl">
            {/* Display Glass (Tall 19.5:9 proportions ~510px height) */}
            <div className="rounded-[38px] bg-[#070b12] border border-black overflow-hidden p-3.5 min-h-[500px] flex flex-col justify-between font-sans text-xs text-left shadow-inner">
              {/* Top Section */}
              <div className="space-y-3">
                {/* Dynamic Island Pill */}
                <div className="mx-auto w-24 h-5 bg-black rounded-full flex items-center justify-between px-2.5 border border-white/5">
                  <span className="w-2 h-2 rounded-full bg-[#0a1525] border border-white/20" />
                  <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                {/* Status Bar */}
                <div className="flex items-center justify-between text-[9px] text-[#9caac0] font-mono px-1">
                  <span className="font-bold text-white">9:41</span>
                  <span className="flex items-center gap-1">
                    <span>5G</span>
                    <span>100% 🔋</span>
                  </span>
                </div>

                {/* Header: WorksAuto Canlı Takip */}
                <div className="text-center space-y-0.5 pt-0.5 border-b border-[#1a2332] pb-2">
                  <div className="text-[9px] font-mono font-bold tracking-widest text-[#8fb4ff] uppercase">
                    MÜŞTERİ CANLI TAKİP
                  </div>
                  <h4 className="text-xs font-bold text-white font-heading">
                    Maslak Özel Servis
                  </h4>
                </div>

                {/* Vehicle & Plate Card */}
                <div className="p-2.5 rounded-xl bg-[#111a26] border border-[#1a2332] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono font-black text-white text-[10px] bg-black/70 px-1.5 py-0.5 rounded border border-white/10">
                      34 BVR 198
                    </span>
                    <span className="text-[11px] font-bold text-white">BMW 320i</span>
                  </div>
                  <span className="text-[9px] text-amber-400 font-mono font-bold bg-amber-500/15 px-1.5 py-0.5 rounded border border-amber-500/30">
                    Liftte
                  </span>
                </div>

                {/* Onarım Aşaması (%75) */}
                <div className="space-y-1.5 p-2.5 rounded-xl bg-[#0c1421] border border-[#1a2332]">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-[#9caac0]">Onarım Aşaması</span>
                    <span className="text-emerald-400 font-bold font-mono">%75 Tamamlandı</span>
                  </div>
                  <div className="w-full h-1.5 bg-black/70 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#2357c5] via-[#3b72ea] to-emerald-400 w-3/4 rounded-full" />
                  </div>
                  <div className="flex justify-between text-[8px] font-mono text-[#9caac0] pt-0.5">
                    <span className="text-emerald-400 font-semibold">✓ Kabul</span>
                    <span className="text-emerald-400 font-semibold">✓ Parça</span>
                    <span className="text-amber-400 font-bold">● Montaj</span>
                    <span>Teslim</span>
                  </div>
                </div>

                {/* Part & Cost Card */}
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 space-y-1 text-[10px]">
                  <div className="flex items-center justify-between font-bold text-emerald-400">
                    <span className="flex items-center gap-1">
                      <ShieldCheck size={12} />
                      Ön Disk & Balata Takımı
                    </span>
                    <span className="font-mono text-xs">₺18,500</span>
                  </div>
                  <div className="text-[9px] text-[#9caac0]">
                    WhatsApp üzerinden onaylandı • Montaj yapıldı
                  </div>
                </div>

                {/* Estimated Delivery Time */}
                <div className="px-2.5 py-1.5 rounded-lg bg-[#0e1624] border border-[#1a2332] flex items-center justify-between text-[9px] text-[#9caac0]">
                  <span className="flex items-center gap-1">
                    <Clock size={11} className="text-[#8fb4ff]" />
                    Tahmini Teslimat
                  </span>
                  <span className="text-white font-mono font-bold">Bugün • 17:30</span>
                </div>
              </div>

              {/* Bottom Section: WhatsApp CTA & Apple Home Indicator */}
              <div className="pt-2 space-y-2.5">
                <div className="py-2.5 rounded-xl bg-[#0e3b2e] hover:bg-[#124d3c] border border-emerald-500/40 text-emerald-300 font-bold text-[11px] flex items-center justify-center gap-1.5 shadow-md cursor-pointer transition-colors">
                  <MessageCircle size={14} className="text-emerald-400" />
                  <span>Danışmana WhatsApp'tan Yaz</span>
                </div>

                {/* Apple Home Bar */}
                <div className="w-24 h-1 bg-white/35 rounded-full mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
