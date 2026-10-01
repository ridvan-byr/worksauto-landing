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
  Calendar,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function ProductMockup() {
  return (
    <div className="relative w-full max-w-[560px] mx-auto lg:max-w-none">
      {/* Ambient Blue Glow behind the devices */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[340px] bg-gradient-to-r from-[#2357c5]/30 via-[#3b72ea]/20 to-[#8fb4ff]/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Main Composition Stage */}
      <div className="relative pt-6 pb-4">
        {/* ======================================================== */}
        {/* 1. MACBOOK PRO (LAPTOP MOCKUP)                           */}
        {/* ======================================================== */}
        <div className="relative w-[92%] sm:w-[90%] rounded-t-2xl bg-[#090d14] border-[3px] border-[#222b38] shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden">
          {/* Display Camera Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-2.5 bg-[#222b38] rounded-b-lg z-30 flex items-center justify-center">
            <span className="w-1 h-1 rounded-full bg-black/90" />
          </div>

          {/* Panel Header */}
          <div className="px-3 py-2 bg-[#0d1420] border-b border-[#1f2d3d] flex items-center justify-between text-[11px] select-none">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
              <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
              <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
              <span className="ml-2 font-mono text-[10px] text-white font-bold truncate">
                WorksAuto • Maslak Servis Paneli
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>4 Lift Dolu</span>
            </div>
          </div>

          {/* Screen Content: 4 Real Lifts Matrix */}
          <div className="p-3 bg-[#070b12] space-y-2.5">
            <div className="grid grid-cols-2 gap-2">
              {/* Lift 1 */}
              <div className="p-2 rounded-xl bg-[#0c1421] border border-[#3b72ea]/40">
                <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                  <span className="text-[#8fb4ff] font-bold">LİFT 01</span>
                  <span className="text-amber-400 font-semibold">%75 İşlemde</span>
                </div>
                <div className="p-1.5 rounded-lg bg-black/50 space-y-0.5">
                  <div className="font-mono font-bold text-white text-[11px]">34 BVR 198</div>
                  <div className="text-[10px] text-[#edf3fa] truncate font-medium">BMW 320i M Sport</div>
                  <div className="text-[9px] text-[#9caac0] truncate">Ön Fren Balata & Disk</div>
                </div>
                <div className="mt-1.5 pt-1 border-t border-[#1f2d3d] flex justify-between text-[9px] text-[#9caac0]">
                  <span>Serkan U.</span>
                  <span className="text-emerald-400 font-mono font-bold">₺18,500</span>
                </div>
              </div>

              {/* Lift 2 */}
              <div className="p-2 rounded-xl bg-[#0c1421] border border-emerald-500/40">
                <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                  <span className="text-[#8fb4ff] font-bold">LİFT 02</span>
                  <span className="text-emerald-400 font-semibold">Hazır / Yıkama</span>
                </div>
                <div className="p-1.5 rounded-lg bg-black/50 space-y-0.5">
                  <div className="font-mono font-bold text-white text-[11px]">06 ANK 2026</div>
                  <div className="text-[10px] text-[#edf3fa] truncate font-medium">Mercedes C200d</div>
                  <div className="text-[9px] text-[#9caac0] truncate">60K Bakım & Filtre</div>
                </div>
                <div className="mt-1.5 pt-1 border-t border-[#1f2d3d] flex justify-between text-[9px] text-[#9caac0]">
                  <span>Ahmet U.</span>
                  <span className="text-emerald-400 font-mono font-bold">₺24,800</span>
                </div>
              </div>

              {/* Lift 3 */}
              <div className="p-2 rounded-xl bg-[#0c1421] border border-[#1f2d3d]">
                <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                  <span className="text-[#8fb4ff] font-bold">LİFT 03</span>
                  <span className="text-[#8fb4ff] font-semibold">Parça Geldi</span>
                </div>
                <div className="p-1.5 rounded-lg bg-black/50 space-y-0.5">
                  <div className="font-mono font-bold text-white text-[11px]">35 IZM 441</div>
                  <div className="text-[10px] text-[#edf3fa] truncate font-medium">Audi A4 40 TDI</div>
                  <div className="text-[9px] text-[#9caac0] truncate">Salıncak & Amortisör</div>
                </div>
                <div className="mt-1.5 pt-1 border-t border-[#1f2d3d] flex justify-between text-[9px] text-[#9caac0]">
                  <span>Volkan U.</span>
                  <span className="text-emerald-400 font-mono font-bold">₺14,200</span>
                </div>
              </div>

              {/* Lift 4 */}
              <div className="p-2 rounded-xl bg-[#0c1421] border border-[#1f2d3d]">
                <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                  <span className="text-[#8fb4ff] font-bold">LİFT 04</span>
                  <span className="text-purple-300 font-semibold">Ekspertiz</span>
                </div>
                <div className="p-1.5 rounded-lg bg-black/50 space-y-0.5">
                  <div className="font-mono font-bold text-white text-[11px]">16 BUR 992</div>
                  <div className="text-[10px] text-[#edf3fa] truncate font-medium">VW Passat</div>
                  <div className="text-[9px] text-[#9caac0] truncate">360° Kaporta Tutanak</div>
                </div>
                <div className="mt-1.5 pt-1 border-t border-[#1f2d3d] flex justify-between text-[9px] text-[#9caac0]">
                  <span>Selim D.</span>
                  <span className="text-emerald-400 font-mono font-bold">₺8,500</span>
                </div>
              </div>
            </div>

            {/* Bottom Mini Kasa Bar */}
            <div className="px-2.5 py-1.5 rounded-lg bg-[#0d1624] border border-[#1f2d3d] flex items-center justify-between text-[10px] font-mono">
              <span className="text-[#8fb4ff] font-bold">KASA: ₺48,200</span>
              <span className="text-emerald-400">GİB E-Fatura Onaylı ✓</span>
            </div>
          </div>
        </div>

        {/* Laptop Base Lip */}
        <div className="w-[92%] sm:w-[90%] h-3 bg-gradient-to-b from-[#1c2430] to-[#121822] rounded-b-xl border-b-[2px] border-x-[2px] border-[#222b38] flex items-center justify-center shadow-lg">
          <div className="w-16 h-1 bg-[#090d14] rounded-b-sm" />
        </div>

        {/* ======================================================== */}
        {/* 2. IPHONE 16 PRO (OVERLAPPING ON BOTTOM-RIGHT)           */}
        {/* ======================================================== */}
        <div className="absolute -bottom-4 right-0 sm:-right-2 w-[210px] sm:w-[230px] rounded-[36px] p-2 bg-gradient-to-b from-[#384252] via-[#202733] to-[#141a24] border border-[#48566c] shadow-[0_25px_60px_rgba(0,0,0,0.95)] z-20">
          <div className="rounded-[30px] bg-[#070b12] border border-black overflow-hidden p-3 space-y-2 text-xs">
            {/* Dynamic Island */}
            <div className="mx-auto w-16 h-3.5 bg-black rounded-full flex items-center justify-end px-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            {/* Mobile Header */}
            <div className="text-center pb-1 border-b border-[#1f2d3d]">
              <span className="text-[9px] font-mono text-[#8fb4ff] font-bold uppercase tracking-wider block">
                Müşteri Canlı Takip
              </span>
              <span className="text-[10px] font-bold text-white font-heading">
                Maslak Özel Servis
              </span>
            </div>

            {/* Vehicle Card */}
            <div className="p-1.5 rounded-lg bg-[#111a26] border border-[#1f2d3d] flex items-center justify-between">
              <div>
                <span className="font-mono font-bold text-[10px] text-white bg-black/60 px-1 py-0.5 rounded border border-white/10">
                  34 BVR 198
                </span>
                <span className="text-[10px] text-white ml-1 font-semibold">BMW 320i</span>
              </div>
              <span className="text-[9px] text-amber-400 font-mono font-bold">Liftte</span>
            </div>

            {/* Progress Stepper */}
            <div className="p-2 rounded-lg bg-[#0c1421] border border-white/5 space-y-1">
              <div className="flex justify-between text-[9px] text-[#9caac0]">
                <span>Onarım Aşaması</span>
                <span className="text-emerald-400 font-bold font-mono">%75</span>
              </div>
              <div className="w-full h-1 bg-black/60 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#2357c5] to-emerald-400 w-3/4 rounded-full" />
              </div>
              <div className="flex justify-between text-[8px] font-mono text-[#9caac0]">
                <span className="text-emerald-400">✓ Kabul</span>
                <span className="text-emerald-400">✓ Parça</span>
                <span className="text-amber-400 font-bold">● Montaj</span>
                <span>Teslim</span>
              </div>
            </div>

            {/* Approved Parts Card */}
            <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[9px] text-[#edf3fa] flex items-center justify-between">
              <span className="text-emerald-400 font-semibold truncate">Fren Disk & Balata</span>
              <span className="font-mono font-bold text-white">₺18,500</span>
            </div>

            {/* WhatsApp Direct Action Button */}
            <div className="py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-center font-bold text-[10px] text-emerald-400 flex items-center justify-center gap-1 shadow-sm">
              <MessageSquare size={11} />
              <span>WhatsApp'tan Yaz</span>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 3. FLOATING NOTIFICATION PILLS (BENCHMARK STYLE)         */}
        {/* ======================================================== */}
        {/* Floating Pill Top Left: "Servis Tamamlandı!" */}
        <div className="absolute -top-1 left-2 sm:-left-4 z-30 p-2.5 rounded-2xl bg-[#0d1624]/95 backdrop-blur-xl border border-emerald-500/40 shadow-2xl flex items-center gap-2.5 animate-bounce-slow">
          <div className="w-7 h-7 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
            <Check size={14} />
          </div>
          <div className="text-left pr-2">
            <div className="text-[11px] font-bold text-white font-heading">
              Servis tamamlandı!
            </div>
            <div className="text-[10px] text-[#9caac0]">
              Maslak Auto • 2 dk önce
            </div>
          </div>
        </div>

        {/* Floating Pill Bottom Left / Middle: "Yeni İş Emri Randevusu" */}
        <div className="hidden sm:flex absolute -bottom-3 left-4 z-30 p-2.5 rounded-2xl bg-[#0d1624]/95 backdrop-blur-xl border border-[#3b72ea]/40 shadow-2xl items-center gap-2.5">
          <div className="w-7 h-7 rounded-xl bg-[#2357c5]/20 text-[#8fb4ff] flex items-center justify-center shrink-0 border border-[#3b72ea]/30">
            <Calendar size={14} />
          </div>
          <div className="text-left pr-2">
            <div className="text-[11px] font-bold text-white font-heading">
              Yeni Randevu & Kabul
            </div>
            <div className="text-[10px] text-[#9caac0] font-mono">
              34 BVR 198 • 14:30
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
