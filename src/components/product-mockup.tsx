"use client";

import * as React from "react";
import {
  Check,
  MessageCircle,
  LayoutDashboard,
  Wrench,
  Layers,
  Calendar,
  FileText,
  Search,
  Plus,
  ShieldCheck,
  TrendingUp,
  Clock,
  ArrowUpRight,
} from "lucide-react";

export function ProductMockup() {
  return (
    <div className="relative w-full select-none">
      {/* Background Studio Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-gradient-to-tr from-[#2357c5]/25 via-[#3b72ea]/15 to-[#8fb4ff]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Main Dual Device Stage */}
      <div className="relative pt-2 pb-6 sm:pb-10">
        {/* ======================================================== */}
        {/* 1. FLOATING NOTIFICATION BADGE (TOP-LEFT ONLY)           */}
        {/* (Clean, elegant, non-intrusive)                          */}
        {/* ======================================================== */}
        <div className="absolute -top-4 -left-2 sm:-left-6 md:-left-8 z-30 p-2.5 sm:p-3 rounded-2xl bg-[#09121d]/95 backdrop-blur-xl border border-emerald-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex items-center gap-3 animate-bounce-slow">
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

        {/* ======================================================== */}
        {/* 2. REALISTIC 3D PERSPECTIVE MACBOOK PRO (SOL ÇAPRAZA DÖNÜK) */}
        {/* ======================================================== */}
        <div className="relative w-full max-w-[620px] sm:max-w-[660px] lg:max-w-[600px] xl:max-w-[650px] [perspective:1400px]">
          {/* 3D Angled Laptop Shell (Rotated toward left diagonal) */}
          <div
            className="transition-transform duration-500 ease-out"
            style={{
              transform: "rotateY(12deg) rotateX(7deg) rotateZ(-1.5deg)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Display Lid Frame (Space Gray Aluminum) */}
            <div className="rounded-t-[22px] sm:rounded-t-[26px] p-[2.5px] bg-gradient-to-b from-[#3d4757] via-[#242b37] to-[#121620] shadow-[0_30px_70px_rgba(0,0,0,0.95)] border border-white/15">
              {/* Display Bezel (Ultra-slim Uniform Black Border) */}
              <div className="rounded-t-[20px] sm:rounded-t-[24px] bg-[#05070c] p-2 sm:p-2.5 border border-black overflow-hidden relative">
                {/* Subtle Screen Glare Highlight */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {/* Screen Canvas (WorksAuto Desktop Cockpit) */}
                <div className="rounded-lg sm:rounded-xl bg-[#080d15] border border-[#1a2332] overflow-hidden flex flex-col font-sans">
                  {/* macOS Titlebar with Apple Notch */}
                  <div className="relative px-3 py-1.5 bg-[#0d1421] border-b border-[#1a2332] flex items-center justify-between text-xs select-none">
                    {/* Window Controls */}
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                      <span className="ml-2 font-mono text-[10px] text-[#9caac0] hidden sm:inline">
                        app.worksauto.com
                      </span>
                    </div>

                    {/* Centered Camera Notch */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 w-24 sm:w-28 h-3.5 sm:h-4 bg-black rounded-b-md border-b border-x border-white/10 flex items-center justify-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0a1525] border border-white/20" />
                      <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                    </div>

                    {/* Live Telemetry */}
                    <div className="flex items-center gap-2 font-mono text-[10px] text-emerald-400 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Atölye Canlı</span>
                    </div>
                  </div>

                  {/* Main Dashboard Layout (Sidebar + Workspace) */}
                  <div className="flex h-[320px] sm:h-[345px] overflow-hidden text-left">
                    {/* Left Mini Sidebar (Matching worksauto-web app-sidebar) */}
                    <div className="w-11 sm:w-12 bg-[#090f18] border-r border-[#1a2332] p-2 flex flex-col items-center justify-between shrink-0">
                      <div className="space-y-3.5 w-full flex flex-col items-center">
                        {/* WorksAuto Brand Icon */}
                        <div className="w-7 h-7 rounded-lg bg-[#2357c5] flex items-center justify-center font-black text-white text-xs shadow-md">
                          W
                        </div>

                        {/* Nav Icons */}
                        <div className="w-7 h-7 rounded-lg bg-[#2357c5]/20 text-[#8fb4ff] flex items-center justify-center border border-[#3b72ea]/30">
                          <LayoutDashboard size={14} />
                        </div>
                        <div className="w-7 h-7 rounded-lg text-[#738094] hover:text-white flex items-center justify-center">
                          <Wrench size={14} />
                        </div>
                        <div className="w-7 h-7 rounded-lg text-[#738094] hover:text-white flex items-center justify-center">
                          <Layers size={14} />
                        </div>
                        <div className="w-7 h-7 rounded-lg text-[#738094] hover:text-white flex items-center justify-center">
                          <Calendar size={14} />
                        </div>
                        <div className="w-7 h-7 rounded-lg text-[#738094] hover:text-white flex items-center justify-center">
                          <FileText size={14} />
                        </div>
                      </div>

                      <div className="w-6 h-6 rounded-full bg-[#182333] border border-white/10 flex items-center justify-center text-[9px] font-bold text-white">
                        M
                      </div>
                    </div>

                    {/* Main Workspace (WorksAuto Atölye Paneli) */}
                    <div className="flex-1 p-3 sm:p-3.5 space-y-2.5 overflow-hidden bg-[#070b12]">
                      {/* Top Header Row */}
                      <div className="flex items-center justify-between pb-2 border-b border-[#1a2332]">
                        <div>
                          <div className="text-[10px] font-bold text-[#8fb4ff] font-mono uppercase tracking-wider">
                            Maslak Özel Servis
                          </div>
                          <div className="text-xs font-bold text-white font-heading">
                            Atölye Lift Paneli
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded-md bg-[#0f1724] border border-[#1a2332] text-[10px] text-[#9caac0] font-mono">
                            <Search size={11} />
                            <span>34 BVR...</span>
                            <span className="px-1 rounded bg-black/50 text-[8px]">⌘K</span>
                          </div>

                          <div className="px-2 py-1 rounded-md bg-[#2357c5] text-white font-bold text-[10px] flex items-center gap-1 shadow-sm">
                            <Plus size={12} />
                            <span className="hidden sm:inline">Araç Kabul</span>
                          </div>
                        </div>
                      </div>

                      {/* 4 Metric Cards (Matching worksauto-web KPIs) */}
                      <div className="grid grid-cols-3 gap-2">
                        <div className="p-2 rounded-lg bg-[#0d1421] border border-[#1a2332]">
                          <div className="text-[9px] text-[#9caac0] uppercase font-mono">Bugünkü Ciro</div>
                          <div className="text-xs sm:text-sm font-bold text-white font-mono mt-0.5">₺48,200</div>
                        </div>
                        <div className="p-2 rounded-lg bg-[#0d1421] border border-[#1a2332]">
                          <div className="text-[9px] text-[#9caac0] uppercase font-mono">Aktif Lift</div>
                          <div className="text-xs sm:text-sm font-bold text-emerald-400 font-mono mt-0.5">4 / 4 Dolu</div>
                        </div>
                        <div className="p-2 rounded-lg bg-[#0d1421] border border-[#1a2332]">
                          <div className="text-[9px] text-[#9caac0] uppercase font-mono">Randevu</div>
                          <div className="text-xs sm:text-sm font-bold text-[#8fb4ff] font-mono mt-0.5">6 Bekleyen</div>
                        </div>
                      </div>

                      {/* 2 Wide Featured Lift Cards (No cramped cut-off bottom boxes!) */}
                      <div className="space-y-2 text-left pt-0.5">
                        {/* LİFT 01 Card */}
                        <div className="p-2.5 rounded-xl bg-[#0c1320] border border-[#3b72ea]/40 space-y-1.5 hover:border-[#3b72ea]/60 transition-all">
                          <div className="flex items-center justify-between text-[10px]">
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-[#8fb4ff] font-bold text-[10px]">LİFT 01</span>
                              {/* Turkish Plate Badge */}
                              <div className="inline-flex items-center h-5 rounded-sm border border-slate-700 bg-white text-slate-950 font-mono font-bold text-[10px] overflow-hidden shrink-0">
                                <span className="bg-[#003399] text-white px-1 text-[7px] font-sans font-bold flex items-center h-full">TR</span>
                                <span className="px-1.5">34 BVR 198</span>
                              </div>
                              <span className="text-[11px] font-bold text-white">BMW 320i M Sport</span>
                            </div>
                            <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-bold text-[9px]">
                              %75 İşlemde
                            </span>
                          </div>

                          <div className="flex items-center justify-between text-[10px] text-[#9caac0] pt-0.5">
                            <span>Ön Fren Disk & Balata Değişimi • Serkan Usta</span>
                            <span className="text-emerald-400 font-mono font-bold text-xs">₺18,500</span>
                          </div>
                        </div>

                        {/* LİFT 02 Card */}
                        <div className="p-2.5 rounded-xl bg-[#0c1320] border border-emerald-500/40 space-y-1.5 hover:border-emerald-500/60 transition-all">
                          <div className="flex items-center justify-between text-[10px]">
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-[#8fb4ff] font-bold text-[10px]">LİFT 02</span>
                              {/* Turkish Plate Badge */}
                              <div className="inline-flex items-center h-5 rounded-sm border border-slate-700 bg-white text-slate-950 font-mono font-bold text-[10px] overflow-hidden shrink-0">
                                <span className="bg-[#003399] text-white px-1 text-[7px] font-sans font-bold flex items-center h-full">TR</span>
                                <span className="px-1.5">06 ANK 2026</span>
                              </div>
                              <span className="text-[11px] font-bold text-white">Mercedes C200d AMG</span>
                            </div>
                            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[9px]">
                              Hazır / Yıkama
                            </span>
                          </div>

                          <div className="flex items-center justify-between text-[10px] text-[#9caac0] pt-0.5">
                            <span>60K Ağır Bakım & Yağ-Filtre • Ahmet Usta</span>
                            <span className="text-emerald-400 font-mono font-bold text-xs">₺24,800</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hinge Line */}
            <div className="w-[96%] mx-auto h-1.5 bg-[#0a0d13] border-x border-black" />

            {/* 3D Keyboard Base Deck Projecting Diagonally */}
            <div className="relative -mx-2 sm:-mx-3 h-10 sm:h-12 bg-gradient-to-b from-[#242c3a] via-[#161c26] to-[#0c1017] rounded-b-2xl border-x-[2px] border-b-[3px] border-[#384558] shadow-[0_25px_60px_rgba(0,0,0,0.95)] flex flex-col justify-between p-1.5">
              {/* Subtle Keyboard Well Top Line */}
              <div className="mx-auto w-[80%] h-3 bg-[#07090f] rounded-t-sm border-t border-x border-white/5 opacity-80" />

              {/* Front Lip with Iconic Apple Thumb Scoop */}
              <div className="w-22 sm:w-26 h-1.5 bg-[#080b10] rounded-b-md border-x border-b border-white/10 shadow-inner mx-auto -mb-0.5" />
            </div>

            {/* Natural Tabletop Ambient Shadow */}
            <div className="w-[94%] mx-auto h-4 bg-black/95 blur-md rounded-full -mt-2" />
          </div>
        </div>

        {/* ======================================================== */}
        {/* 3. SLENDER IPHONE 16 PRO (ACCURATE APPLE STATUS BAR)     */}
        {/* ======================================================== */}
        <div className="relative mt-8 sm:mt-0 sm:absolute sm:-bottom-4 sm:right-0 lg:-right-3 xl:-right-6 z-40 w-[240px] sm:w-[252px] mx-auto drop-shadow-[0_35px_80px_rgba(0,0,0,0.98)]">
          {/* Physical Side Buttons */}
          <div className="absolute -left-[3px] top-20 w-[3px] h-5 bg-[#3a4454] rounded-l-sm border-l border-white/20" />
          <div className="absolute -left-[3px] top-30 w-[3px] h-9 bg-[#3a4454] rounded-l-sm border-l border-white/20" />
          <div className="absolute -left-[3px] top-42 w-[3px] h-9 bg-[#3a4454] rounded-l-sm border-l border-white/20" />
          <div className="absolute -right-[3px] top-30 w-[3px] h-14 bg-[#3a4454] rounded-r-sm border-r border-white/20" />

          {/* Natural Titanium Chassis */}
          <div className="rounded-[46px] p-2.5 bg-gradient-to-b from-[#3a4556] via-[#222a36] to-[#141a24] border-[2px] border-[#4a576c] ring-1 ring-white/10 shadow-2xl">
            {/* Display Glass (Slender 19.5:9 Apple Screen) */}
            <div className="rounded-[38px] bg-[#070b12] border border-black overflow-hidden p-3.5 min-h-[500px] flex flex-col justify-between font-sans text-xs text-left shadow-inner">
              {/* Top Section */}
              <div className="space-y-3">
                {/* ======================================================== */}
                {/* APPLE IPHONE ACCURATE STATUS BAR                        */}
                {/* 9:41 on Far Left, Dynamic Island in Center, Battery on Right */}
                {/* ======================================================== */}
                <div className="flex items-center justify-between px-1.5 pt-0.5 select-none text-[10px]">
                  {/* Left: Time (9:41) */}
                  <span className="font-bold text-white tracking-tight font-sans text-[11px]">
                    9:41
                  </span>

                  {/* Center: Dynamic Island */}
                  <div className="w-20 h-5 bg-black rounded-full flex items-center justify-between px-2 border border-white/10 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0a1525] border border-white/20" />
                    <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                  </div>

                  {/* Right: Cellular Signal + Battery Icon */}
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] font-mono font-semibold text-[#9caac0]">5G</span>
                    {/* Apple Battery Pill */}
                    <div className="flex items-center">
                      <div className="w-5 h-2.5 rounded-[3px] border border-white/70 p-0.5 flex items-center">
                        <div className="h-full w-3.5 bg-emerald-400 rounded-[1px]" />
                      </div>
                      <div className="w-0.5 h-1 bg-white/50 rounded-r-xs" />
                    </div>
                  </div>
                </div>

                {/* Header: Exact WorksAuto /track portal identity */}
                <div className="text-center space-y-0.5 pt-1 border-b border-[#1a2332] pb-2">
                  <div className="text-[9px] font-mono font-bold tracking-widest text-[#8fb4ff] uppercase">
                    CANLI ARAÇ TAKİP PORTALI
                  </div>
                  <h4 className="text-xs font-bold text-white font-heading">
                    Maslak Özel Servis
                  </h4>
                </div>

                {/* Turkish Plate & Vehicle Info Card */}
                <div className="p-2.5 rounded-xl bg-[#101724] border border-[#1a2332] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {/* TR Plate */}
                    <div className="inline-flex items-center h-5 rounded-sm border border-slate-700 bg-white text-slate-950 font-mono font-bold text-[10px] overflow-hidden shrink-0">
                      <span className="bg-[#003399] text-white px-1 text-[7px] font-sans font-bold flex items-center h-full">TR</span>
                      <span className="px-1.5">34 BVR 198</span>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-white">BMW 320i M</div>
                      <div className="text-[8px] text-[#9caac0]">#WO-2026-089</div>
                    </div>
                  </div>
                  <span className="text-[9px] text-amber-400 font-mono font-bold bg-amber-500/15 px-2 py-0.5 rounded border border-amber-500/30">
                    Liftte
                  </span>
                </div>

                {/* Onarım Aşaması (Exact WorksAuto 4-step status) */}
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

                {/* Part & Service Checklist */}
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 space-y-1 text-[10px]">
                  <div className="flex items-center justify-between font-bold text-emerald-400">
                    <span className="flex items-center gap-1">
                      <ShieldCheck size={12} />
                      Ön Disk & Balata Değişimi
                    </span>
                    <span className="font-mono text-xs">₺18,500</span>
                  </div>
                  <div className="text-[9px] text-[#9caac0] flex items-center justify-between">
                    <span>Orijinal Parça • Usta Onayladı</span>
                    <span className="text-emerald-400 font-mono font-semibold">GİB E-Fatura ✓</span>
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
