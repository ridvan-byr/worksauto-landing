"use client";

import * as React from "react";
import Image from "next/image";
import {
  Check,
  LayoutDashboard,
  Wrench,
  Layers,
  Calendar,
  Users,
  Package,
  Receipt,
  Search,
  Plus,
  TrendingUp,
  Clock,
  ArrowUpRight,
  Bell,
  Menu,
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
        {/* 2. REALISTIC MACBOOK PRO (DESKTOP GENEL BAKIŞ DASHBOARD) */}
        {/* ======================================================== */}
        <div className="relative w-full max-w-[620px] sm:max-w-[670px] lg:max-w-[610px] xl:max-w-[670px]">
          {/* Display Lid Frame (Space Gray Anodized Aluminum) */}
          <div className="rounded-t-[22px] sm:rounded-t-[26px] p-[2.5px] bg-gradient-to-b from-[#3c4656] via-[#242b37] to-[#121620] shadow-[0_25px_60px_rgba(0,0,0,0.95)] border border-white/10">
            {/* Display Bezel (Ultra-slim Uniform Black Border) */}
            <div className="rounded-t-[20px] sm:rounded-t-[24px] bg-[#05070c] p-2 sm:p-2.5 border border-black overflow-hidden relative">
              {/* Subtle Screen Glass Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {/* Screen Canvas (WorksAuto Web Genel Bakış 1:1) */}
              <div className="rounded-lg sm:rounded-xl bg-[#090f18] border border-[#1a2332] overflow-hidden flex flex-col font-sans">
                {/* macOS Titlebar with Apple Notch */}
                <div className="relative px-3 py-1.5 bg-[#0d1421] border-b border-[#1a2332] flex items-center justify-between text-xs select-none">
                  {/* Window Controls */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                    <span className="ml-2.5 font-heading font-semibold text-white text-[11px] hidden sm:inline">
                      WorksAuto • Maslak Özel Servis
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

                {/* Dashboard Layout: Mini Sidebar + Workspace (1:1 with worksauto-web) */}
                <div className="flex h-[325px] sm:h-[355px] overflow-hidden text-left">
                  {/* Left Sidebar (Matching worksauto-web app-sidebar) */}
                  <div className="w-11 sm:w-12 bg-[#080d15] border-r border-[#1a2332] p-2 flex flex-col items-center justify-between shrink-0">
                    <div className="space-y-3 w-full flex flex-col items-center">
                      {/* Official WorksAuto White Icon */}
                      <div className="relative w-7 h-5 flex items-center justify-center my-0.5">
                        <Image
                          src="/brand/worksauto-icon-white-tight.png"
                          alt="WorksAuto"
                          width={28}
                          height={20}
                          className="h-4.5 w-auto object-contain"
                        />
                      </div>

                      {/* Active: Genel Bakış */}
                      <div className="w-7 h-7 rounded-lg bg-[#2357c5] text-white flex items-center justify-center shadow-sm">
                        <LayoutDashboard size={13} />
                      </div>
                      {/* İş Emirleri */}
                      <div className="relative w-7 h-7 rounded-lg text-[#738094] hover:text-white flex items-center justify-center">
                        <Wrench size={13} />
                        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#2357c5] text-white font-mono font-bold text-[7px] flex items-center justify-center">
                          4
                        </span>
                      </div>
                      {/* Randevu Takvimi */}
                      <div className="w-7 h-7 rounded-lg text-[#738094] hover:text-white flex items-center justify-center">
                        <Calendar size={13} />
                      </div>
                      {/* Müşteriler & Araçlar */}
                      <div className="w-7 h-7 rounded-lg text-[#738094] hover:text-white flex items-center justify-center">
                        <Users size={13} />
                      </div>
                      {/* Yedek Parça & Stok */}
                      <div className="w-7 h-7 rounded-lg text-[#738094] hover:text-white flex items-center justify-center">
                        <Package size={13} />
                      </div>
                      {/* Faturalar */}
                      <div className="w-7 h-7 rounded-lg text-[#738094] hover:text-white flex items-center justify-center">
                        <Receipt size={13} />
                      </div>
                    </div>

                    {/* User Avatar */}
                    <div className="w-6 h-6 rounded-full bg-[#182333] border border-white/10 flex items-center justify-center text-[9px] font-bold text-white">
                      S
                    </div>
                  </div>

                  {/* Main Cockpit Workspace (Desktop Genel Bakış) */}
                  <div className="flex-1 p-3 sm:p-3.5 space-y-2.5 overflow-hidden bg-[#070a10]">
                    {/* Header: Greeting, Telemetry, Search, + Araç Kabul */}
                    <div className="flex items-center justify-between pb-2 border-b border-[#1a2332]">
                      <div>
                        <div className="text-[9px] font-extrabold uppercase tracking-widest text-[#8fb4ff] font-mono">
                          Bugün · Gündüz Vardiyası
                        </div>
                        <h3 className="text-xs sm:text-sm font-extrabold text-white font-heading mt-0.5">
                          İyi günler, Sinan Bey
                        </h3>
                        <p className="text-[9px] text-[#9caac0] hidden sm:block truncate max-w-[280px]">
                          Atölyede şu an 4 araç liftte işlem görüyor.
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Search Input */}
                        <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded-md bg-[#0e1624] border border-[#1a2332] text-[10px] text-[#9caac0] font-mono">
                          <Search size={11} />
                          <span>Plaka ara...</span>
                          <span className="px-1 rounded bg-black/50 text-[8px]">⌘K</span>
                        </div>

                        {/* + Araç Kabul Button */}
                        <div className="px-2.5 py-1 rounded-md bg-[#2357c5] text-white font-bold text-[10px] flex items-center gap-1 shadow-sm shrink-0">
                          <Plus size={12} />
                          <span>Araç Kabul</span>
                        </div>
                      </div>
                    </div>

                    {/* 4 Metric Cards (Matching worksauto-web/src/app/page.tsx) */}
                    <div className="grid grid-cols-4 gap-2">
                      {/* Metric 1 */}
                      <div className="p-2 rounded-xl bg-[#0c1320] border border-[#1a2332]">
                        <div className="flex items-center justify-between text-[#738094]">
                          <span className="text-[8px] font-bold uppercase tracking-wider truncate">Bugünkü Tahsilat</span>
                          <TrendingUp size={10} className="text-[#8fb4ff]" />
                        </div>
                        <div className="font-heading font-black text-xs sm:text-[13px] text-white font-mono mt-0.5">
                          ₺48,200
                        </div>
                        <div className="text-[7.5px] text-[#738094] truncate">Bu ay: ₺482K</div>
                      </div>

                      {/* Metric 2 */}
                      <div className="p-2 rounded-xl bg-[#0c1320] border border-[#1a2332]">
                        <div className="flex items-center justify-between text-[#738094]">
                          <span className="text-[8px] font-bold uppercase tracking-wider truncate">Aktif İş Emri</span>
                          <Wrench size={10} className="text-emerald-400" />
                        </div>
                        <div className="font-heading font-black text-xs sm:text-[13px] text-emerald-400 font-mono mt-0.5">
                          4
                        </div>
                        <div className="text-[7.5px] text-[#738094] truncate">4 liftte aktif</div>
                      </div>

                      {/* Metric 3 */}
                      <div className="p-2 rounded-xl bg-[#0c1320] border border-[#1a2332]">
                        <div className="flex items-center justify-between text-[#738094]">
                          <span className="text-[8px] font-bold uppercase tracking-wider truncate">Doluluk</span>
                          <Layers size={10} className="text-amber-400" />
                        </div>
                        <div className="font-heading font-black text-xs sm:text-[13px] text-white font-mono mt-0.5">
                          %100
                        </div>
                        <div className="text-[7.5px] text-[#738094] truncate">4/4 lift dolu</div>
                      </div>

                      {/* Metric 4 */}
                      <div className="p-2 rounded-xl bg-[#0c1320] border border-[#1a2332]">
                        <div className="flex items-center justify-between text-[#738094]">
                          <span className="text-[8px] font-bold uppercase tracking-wider truncate">Bekleyen</span>
                          <Receipt size={10} className="text-[#8fb4ff]" />
                        </div>
                        <div className="font-heading font-black text-xs sm:text-[13px] text-white font-mono mt-0.5">
                          ₺18,500
                        </div>
                        <div className="text-[7.5px] text-[#738094] truncate">Açık fatura</div>
                      </div>
                    </div>

                    {/* Section: Atölye ve Liftler (Matching worksauto-web) */}
                    <div className="space-y-1.5 pt-0.5 text-left">
                      <div className="flex items-center justify-between text-[10px]">
                        <div className="font-heading font-extrabold text-white text-[11px]">
                          Atölye ve Liftler
                        </div>
                        <div className="text-[9px] font-bold text-[#8fb4ff] flex items-center gap-0.5">
                          <span>Panoya Git</span>
                          <ArrowUpRight size={10} />
                        </div>
                      </div>

                      {/* Active Lift Cards */}
                      <div className="space-y-1.5">
                        {/* LİFT 01 */}
                        <div className="p-2 sm:p-2.5 rounded-xl bg-[#0c1320] border border-[#3b72ea]/40 space-y-1">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[9px] font-bold text-[#8fb4ff] uppercase font-mono">LİFT 01</span>
                              {/* PlateBadge (Standard Turkish Plate) */}
                              <div className="inline-flex items-center h-4.5 rounded-sm border border-slate-700 bg-white text-slate-950 font-mono font-bold text-[9px] overflow-hidden shrink-0">
                                <span className="bg-[#003399] text-white px-1 text-[7px] font-sans font-bold flex items-center h-full">TR</span>
                                <span className="px-1.5">34 BVR 198</span>
                              </div>
                              <span className="text-[10px] font-bold text-white">BMW 320i M Sport</span>
                            </div>
                            <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 font-bold text-[8px]">
                              %75 İşlemde
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-[9px] text-[#9caac0]">
                            <span>Ön Fren Disk & Balata Değişimi • Serkan Usta</span>
                            <span className="text-emerald-400 font-mono font-bold">₺18,500</span>
                          </div>
                        </div>

                        {/* LİFT 02 */}
                        <div className="p-2 sm:p-2.5 rounded-xl bg-[#0c1320] border border-emerald-500/40 space-y-1">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[9px] font-bold text-[#8fb4ff] uppercase font-mono">LİFT 02</span>
                              {/* PlateBadge */}
                              <div className="inline-flex items-center h-4.5 rounded-sm border border-slate-700 bg-white text-slate-950 font-mono font-bold text-[9px] overflow-hidden shrink-0">
                                <span className="bg-[#003399] text-white px-1 text-[7px] font-sans font-bold flex items-center h-full">TR</span>
                                <span className="px-1.5">06 ANK 2026</span>
                              </div>
                              <span className="text-[10px] font-bold text-white">Mercedes C200d AMG</span>
                            </div>
                            <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[8px]">
                              Hazır / Yıkama
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-[9px] text-[#9caac0]">
                            <span>60K Ağır Bakım & Yağ-Filtre • Ahmet Usta</span>
                            <span className="text-emerald-400 font-mono font-bold">₺24,800</span>
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

            {/* Clean MacBook Pro Unibody Aluminum Base */}
            <div className="relative -mx-2 sm:-mx-3 h-5 sm:h-6 bg-gradient-to-b from-[#252e3b] via-[#161c26] to-[#0c1017] rounded-b-2xl border-x-[2px] border-b-[3px] border-[#384558] shadow-[0_25px_60px_rgba(0,0,0,0.95)] flex items-start justify-center pt-0.5">
              {/* Iconic Centered Apple Thumb Scoop */}
              <div className="w-20 sm:w-24 h-1.5 bg-[#07090e] rounded-b-md border-x border-b border-white/10 shadow-inner" />
            </div>

            {/* Natural Tabletop Ambient Shadow */}
            <div className="w-[94%] mx-auto h-4 bg-black/95 blur-md rounded-full -mt-2" />
          </div>
        </div>

        {/* ======================================================== */}
        {/* 3. SLENDER IPHONE 16 PRO (MOBILE GENEL BAKIŞ DASHBOARD)  */}
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
            <div className="rounded-[38px] bg-[#070b12] border border-black overflow-hidden min-h-[510px] flex flex-col justify-between font-sans text-xs text-left shadow-inner">
              {/* Top Section */}
              <div className="p-3 space-y-2.5">
                {/* ======================================================== */}
                {/* APPLE IPHONE ACCURATE STATUS BAR                        */}
                {/* 9:41 on Far Left, Dynamic Island in Center, Battery on Right */}
                {/* ======================================================== */}
                <div className="flex items-center justify-between px-1 select-none text-[10px]">
                  {/* Left: Time (9:41) */}
                  <span className="font-bold text-white tracking-tight font-sans text-[11px]">
                    9:41
                  </span>

                  {/* Center: Dynamic Island */}
                  <div className="w-20 h-5 bg-black rounded-full flex items-center justify-between px-2 border border-white/10 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0a1525] border border-white/20" />
                    <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                  </div>

                  {/* Right: 5G & Battery Icon */}
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] font-mono font-semibold text-[#9caac0]">5G</span>
                    <div className="flex items-center">
                      <div className="w-5 h-2.5 rounded-[3px] border border-white/70 p-0.5 flex items-center">
                        <div className="h-full w-3.5 bg-emerald-400 rounded-[1px]" />
                      </div>
                      <div className="w-0.5 h-1 bg-white/50 rounded-r-xs" />
                    </div>
                  </div>
                </div>

                {/* Mobile App Header (worksauto-web app-header.tsx on mobile) */}
                <div className="flex items-center justify-between pt-1 border-b border-[#1a2332] pb-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-lg bg-[#111a26] border border-[#1a2332] flex items-center justify-center text-[#9caac0]">
                      <Menu size={12} />
                    </div>
                    <div className="relative w-5 h-4 flex items-center justify-center">
                      <Image
                        src="/brand/worksauto-icon-white-tight.png"
                        alt="WorksAuto"
                        width={20}
                        height={15}
                        className="h-3.5 w-auto object-contain"
                      />
                    </div>
                    <div className="text-[10px] font-bold text-white font-heading truncate max-w-[90px]">
                      Maslak Servis
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <div className="w-6 h-6 rounded-full bg-[#111a26] border border-[#1a2332] flex items-center justify-center text-[#9caac0]">
                      <Search size={11} />
                    </div>
                    <div className="w-6 h-6 rounded-full bg-[#111a26] border border-[#1a2332] flex items-center justify-center text-[#9caac0]">
                      <Bell size={11} />
                    </div>
                  </div>
                </div>

                {/* Mobile Telemetry Greeting */}
                <div className="space-y-0.5">
                  <div className="text-[8px] font-extrabold uppercase tracking-widest text-[#8fb4ff] font-mono">
                    Gündüz Vardiyası
                  </div>
                  <div className="text-xs font-bold text-white font-heading">
                    İyi günler, Sinan
                  </div>
                </div>

                {/* Mobile 3 Quick Action Buttons */}
                <div className="grid grid-cols-3 gap-1">
                  <div className="p-1 rounded-lg bg-[#111a26] border border-[#1a2332] text-center text-[8px] font-bold text-[#8fb4ff] truncate">
                    Kazanç
                  </div>
                  <div className="p-1 rounded-lg bg-[#111a26] border border-[#1a2332] text-center text-[8px] font-bold text-white truncate">
                    Randevu
                  </div>
                  <div className="p-1 rounded-lg bg-[#2357c5] text-center text-[8px] font-bold text-white truncate">
                    + Kabul
                  </div>
                </div>

                {/* 2x2 Metric Cards (worksauto-web mobile dashboard) */}
                <div className="grid grid-cols-2 gap-1.5 pt-0.5">
                  <div className="p-2 rounded-xl bg-[#0c1421] border border-[#1a2332]">
                    <div className="text-[8px] text-[#9caac0] uppercase font-mono">Tahsilat</div>
                    <div className="text-xs font-black text-white font-mono mt-0.5">₺48,200</div>
                    <div className="text-[7px] text-emerald-400">Bu ay: ₺482K</div>
                  </div>
                  <div className="p-2 rounded-xl bg-[#0c1421] border border-[#1a2332]">
                    <div className="text-[8px] text-[#9caac0] uppercase font-mono">Aktif Lift</div>
                    <div className="text-xs font-black text-emerald-400 font-mono mt-0.5">4 / 4 Dolu</div>
                    <div className="text-[7px] text-[#9caac0]">%100 Kapasite</div>
                  </div>
                </div>

                {/* Active Work Order Card (worksauto-web Atölye ve Liftler) */}
                <div className="p-2 rounded-xl bg-[#0c1421] border border-[#3b72ea]/40 space-y-1">
                  <div className="flex items-center justify-between text-[9px]">
                    <div className="flex items-center gap-1">
                      <span className="font-mono text-[#8fb4ff] font-bold text-[8px]">LİFT 01</span>
                      {/* TR Plate */}
                      <div className="inline-flex items-center h-4 rounded-sm border border-slate-700 bg-white text-slate-950 font-mono font-bold text-[8px] overflow-hidden shrink-0">
                        <span className="bg-[#003399] text-white px-0.5 text-[6px] font-sans font-bold flex items-center h-full">TR</span>
                        <span className="px-1">34 BVR 198</span>
                      </div>
                    </div>
                    <span className="px-1 py-0.5 rounded bg-amber-500/20 text-amber-400 font-bold text-[7.5px]">
                      %75 İşlemde
                    </span>
                  </div>
                  <div className="text-[9.5px] font-bold text-white truncate">
                    BMW 320i M Sport
                  </div>
                  <div className="flex items-center justify-between text-[8px] text-[#9caac0] pt-0.5 border-t border-[#1a2332]">
                    <span>Serkan U.</span>
                    <span className="text-emerald-400 font-mono font-bold">₺18,500</span>
                  </div>
                </div>
              </div>

              {/* Mobile Bottom Navigation (worksauto-web bottom-nav.tsx 1:1) */}
              <div className="bg-[#080d15] border-t border-[#1a2332] px-2 py-1.5 flex items-center justify-around relative">
                {/* Genel Bakış (Active) */}
                <div className="flex flex-col items-center text-[#2357c5] dark:text-[#8fb4ff]">
                  <LayoutDashboard size={14} />
                  <span className="text-[7.5px] font-bold mt-0.5">Genel Bakış</span>
                </div>

                {/* İş Emirleri */}
                <div className="flex flex-col items-center text-[#738094]">
                  <Wrench size={14} />
                  <span className="text-[7.5px] mt-0.5">İş Emirleri</span>
                </div>

                {/* Center Elevated + Hızlı Kabul Button */}
                <div className="flex flex-col items-center -mt-4">
                  <div className="w-8 h-8 rounded-xl bg-[#2357c5] text-white flex items-center justify-center shadow-lg shadow-[#2357c5]/40 border border-white/20">
                    <Plus size={16} strokeWidth={2.5} />
                  </div>
                  <span className="text-[7px] font-bold text-[#8fb4ff] mt-0.5">Kabul</span>
                </div>

                {/* Randevular */}
                <div className="flex flex-col items-center text-[#738094]">
                  <Calendar size={14} />
                  <span className="text-[7.5px] mt-0.5">Randevu</span>
                </div>

                {/* Menü */}
                <div className="flex flex-col items-center text-[#738094]">
                  <Menu size={14} />
                  <span className="text-[7.5px] mt-0.5">Menü</span>
                </div>
              </div>

              {/* Apple Home Bar */}
              <div className="w-22 h-1 bg-white/30 rounded-full mx-auto my-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
