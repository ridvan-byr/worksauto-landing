"use client";

import * as React from "react";
import Image from "next/image";
import {
  LayoutDashboard,
  Wrench,
  Layers,
  Calendar,
  Users,
  Package,
  Receipt,
  CreditCard,
  Settings,
  Search,
  Plus,
  TrendingUp,
  ArrowUpRight,
  Bell,
  Menu,
  Moon,
  ChevronDown,
  Building2,
  CheckCircle2,
} from "lucide-react";

export function ProductMockup() {
  return (
    <div className="relative w-full select-none">
      {/* Background Studio Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-gradient-to-tr from-[#2357c5]/25 via-[#3b72ea]/15 to-[#8fb4ff]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Main Dual Device Stage (Zero Floating Boxes) */}
      <div className="relative pt-2 pb-6 sm:pb-10">
        {/* ======================================================== */}
        {/* 1. SEAMLESS REALISTIC MACBOOK PRO (DESKTOP PANEL 1:1)    */}
        {/* ======================================================== */}
        <div className="relative w-full max-w-[620px] sm:max-w-[670px] lg:max-w-[610px] xl:max-w-[670px]">
          {/* Display Lid Frame (Space Gray Aluminum) */}
          <div className="rounded-t-[20px] sm:rounded-t-[24px] bg-[#05070c] p-2 sm:p-2.5 border-t border-x border-[#384354] shadow-[0_20px_50px_rgba(0,0,0,0.9)] relative">
            {/* Screen Glass Highlight */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* Screen Canvas (WorksAuto Web Genel Bakış 1:1) */}
            <div className="rounded-lg sm:rounded-xl bg-[#090f18] border border-[#1a2332] overflow-hidden flex flex-col font-sans">
              {/* 1. Desktop Top Header (1:1 with panel.worksauto.com.tr) */}
              <div className="relative px-3 py-1.5 bg-[#0b1019] border-b border-[#1a2332] flex items-center justify-between text-xs select-none">
                {/* Left: Window Dots + WorksAuto Icon + Tenant Brand */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>

                  <div className="h-4 w-[1px] bg-[#1a2332] mx-0.5" />

                  {/* WorksAuto White Tight Icon */}
                  <div className="relative w-5 h-4 flex items-center justify-center">
                    <Image
                      src="/brand/worksauto-icon-white-tight.png"
                      alt="WorksAuto"
                      width={22}
                      height={15}
                      className="h-3.5 w-auto object-contain"
                    />
                  </div>

                  {/* Tenant Brand: BAYAR OTO SERVİS */}
                  <div className="hidden sm:block leading-tight text-left">
                    <div className="text-[10px] font-black text-white tracking-wide font-heading">
                      BAYAR OTO SERVİS
                    </div>
                    <div className="text-[7.5px] text-[#738094] -mt-0.5">
                      İstanbul / Başakşehir
                    </div>
                  </div>
                </div>

                {/* Center: Search Bar (Exact 1:1) */}
                <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0e1624] border border-[#1a2332] text-[9px] text-[#9caac0] font-sans w-52 truncate">
                  <Search size={10} className="text-[#738094] shrink-0" />
                  <span className="truncate">Plaka, müşteri veya tel ara... (34 RB)</span>
                </div>

                {/* Right: + Hızlı Kabul, Notification, Theme, Workshop Dropdown, User */}
                <div className="flex items-center gap-2">
                  <div className="hidden sm:flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#131d2c] border border-[#2357c5]/50 text-[9.5px] font-bold text-[#8fb4ff] shadow-xs">
                    <Plus size={10} />
                    <span>Hızlı Kabul</span>
                  </div>

                  <div className="relative text-[#9caac0]">
                    <Bell size={12} />
                    <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>

                  <Moon size={11} className="text-[#738094] hidden sm:block" />

                  {/* Tenant Dropdown */}
                  <div className="hidden md:flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#0d1421] border border-[#1a2332] text-[8.5px] text-[#9caac0]">
                    <Building2 size={10} className="text-[#738094]" />
                    <span className="truncate max-w-[85px]">Bayar Oto</span>
                    <ChevronDown size={8} />
                  </div>

                  {/* User Profile Avatar */}
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full bg-[#1e2d42] border border-[#304460] flex items-center justify-center text-[7.5px] font-bold text-white font-mono">
                      RB
                    </div>
                    <div className="hidden lg:block leading-tight text-left">
                      <div className="text-[8.5px] font-bold text-white truncate max-w-[80px]">
                        Rıdvan Emre
                      </div>
                      <div className="text-[6.5px] text-[#738094] -mt-0.5">
                        Yönetici
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Main Body: Sidebar + Workspace (1:1 with panel.worksauto.com.tr) */}
              <div className="flex h-[335px] sm:h-[360px] overflow-hidden text-left">
                {/* Left Sidebar (Matching Real Panel Icons) */}
                <div className="w-9 sm:w-10 bg-[#080d15] border-r border-[#1a2332] py-2 px-1 flex flex-col items-center justify-between shrink-0">
                  <div className="space-y-2 w-full flex flex-col items-center">
                    {/* Active: Genel Bakış */}
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#2357c5] text-white flex items-center justify-center shadow-xs">
                      <LayoutDashboard size={13} />
                    </div>
                    {/* İş Emirleri */}
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg text-[#738094] flex items-center justify-center relative">
                      <Wrench size={13} />
                      <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-[#3b72ea]" />
                    </div>
                    {/* Randevular */}
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg text-[#738094] flex items-center justify-center">
                      <Calendar size={13} />
                    </div>
                    {/* Müşteriler */}
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg text-[#738094] flex items-center justify-center">
                      <Users size={13} />
                    </div>
                    {/* Kazanç */}
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg text-[#738094] flex items-center justify-center">
                      <TrendingUp size={13} />
                    </div>
                    {/* Stok */}
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg text-[#738094] flex items-center justify-center">
                      <Package size={13} />
                    </div>
                    {/* Faturalar */}
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg text-[#738094] flex items-center justify-center">
                      <Receipt size={13} />
                    </div>
                    {/* Cariler */}
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg text-[#738094] flex items-center justify-center">
                      <CreditCard size={13} />
                    </div>
                  </div>

                  {/* Settings at Bottom */}
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg text-[#738094] flex items-center justify-center">
                    <Settings size={13} />
                  </div>
                </div>

                {/* Right Workspace: Authentic Dashboard Layout */}
                <div className="flex-1 p-2.5 sm:p-3 overflow-hidden flex flex-col justify-between space-y-2">
                  {/* Greeting & Header Telemetry */}
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-[7.5px] font-extrabold uppercase tracking-widest text-[#8fb4ff] font-mono">
                        2 EKİM 2026 CUMA · AKŞAM VARDİYASI
                      </div>
                      <h3 className="font-heading font-black text-xs sm:text-sm text-white tracking-tight mt-0.5">
                        İyi akşamlar, Rıdvan
                      </h3>
                      <p className="text-[8px] text-[#738094] mt-0.5 truncate max-w-[260px] sm:max-w-[340px]">
                        Lifter şu an müsait, sırada işleme alınmayı bekleyen 1 araç bulunuyor.
                      </p>
                    </div>

                    {/* Quick Action Buttons (Kazanç, Randevular, + Kabul) */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      <div className="px-2 py-1 rounded-md bg-[#0f1725] border border-[#1a2332] text-[8px] font-bold text-[#8fb4ff] flex items-center gap-1 shadow-xs">
                        <TrendingUp size={9} />
                        <span>Kazanç</span>
                      </div>
                      <div className="px-2 py-1 rounded-md bg-[#0f1725] border border-[#1a2332] text-[8px] font-bold text-white shadow-xs">
                        Randevular
                      </div>
                      <div className="px-2 py-1 rounded-md bg-[#2357c5] text-[8px] font-bold text-white flex items-center gap-1 shadow-xs">
                        <Plus size={10} />
                        <span>Kabul</span>
                      </div>
                    </div>
                  </div>

                  {/* Section 1: Günlük Özet (4 Authentic KPI Cards) */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[8px]">
                      <span className="font-bold text-white">Günlük Özet</span>
                      <span className="text-[#738094] font-mono text-[7.5px]">Atölye Telemetrisi</span>
                    </div>

                    <div className="grid grid-cols-4 gap-1.5">
                      {/* Metric 1: Bugünkü Tahsilat */}
                      <div className="p-2 rounded-xl bg-[#0c1320] border border-[#1a2332]">
                        <div className="flex items-center justify-between text-[#738094]">
                          <span className="text-[7.5px] font-bold uppercase tracking-wider truncate">Bugünkü Tahsilat</span>
                          <div className="w-4 h-4 rounded-md bg-[#131d2c] flex items-center justify-center text-[#8fb4ff]">
                            <TrendingUp size={9} />
                          </div>
                        </div>
                        <div className="font-heading font-black text-xs sm:text-[13px] text-white font-mono mt-0.5">
                          ₺0
                        </div>
                        <div className="text-[7px] text-[#738094] truncate">Bu ay: ₺0</div>
                      </div>

                      {/* Metric 2: Aktif İş Emirleri */}
                      <div className="p-2 rounded-xl bg-[#0c1320] border border-[#1a2332]">
                        <div className="flex items-center justify-between text-[#738094]">
                          <span className="text-[7.5px] font-bold uppercase tracking-wider truncate">Aktif İş Emirleri</span>
                          <div className="w-4 h-4 rounded-md bg-[#131d2c] flex items-center justify-center text-emerald-400">
                            <Wrench size={9} />
                          </div>
                        </div>
                        <div className="font-heading font-black text-xs sm:text-[13px] text-emerald-400 font-mono mt-0.5">
                          1
                        </div>
                        <div className="text-[7px] text-[#738094] truncate">0 liftte · 1 sırada</div>
                      </div>

                      {/* Metric 3: Atölye Doluluğu */}
                      <div className="p-2 rounded-xl bg-[#0c1320] border border-[#1a2332]">
                        <div className="flex items-center justify-between text-[#738094]">
                          <span className="text-[7.5px] font-bold uppercase tracking-wider truncate">Atölye Doluluğu</span>
                          <div className="w-4 h-4 rounded-md bg-[#131d2c] flex items-center justify-center text-amber-400">
                            <Layers size={9} />
                          </div>
                        </div>
                        <div className="font-heading font-black text-xs sm:text-[13px] text-white font-mono mt-0.5">
                          %0
                        </div>
                        <div className="text-[7px] text-[#738094] truncate">3 istasyonun 0'ı aktif</div>
                      </div>

                      {/* Metric 4: Bekleyen Tahsilat */}
                      <div className="p-2 rounded-xl bg-[#0c1320] border border-[#1a2332]">
                        <div className="flex items-center justify-between text-[#738094]">
                          <span className="text-[7.5px] font-bold uppercase tracking-wider truncate">Bekleyen Tahsilat</span>
                          <div className="w-4 h-4 rounded-md bg-[#131d2c] flex items-center justify-center text-[#8fb4ff]">
                            <Receipt size={9} />
                          </div>
                        </div>
                        <div className="font-heading font-black text-xs sm:text-[13px] text-white font-mono mt-0.5">
                          ₺0
                        </div>
                        <div className="flex items-center justify-between text-[7px]">
                          <span className="text-[#738094] truncate">Tüm cariler güncel</span>
                          <span className="text-[#8fb4ff] font-bold shrink-0">Radara Git →</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Operasyon (Exact 1:1 Atölye ve Liftler + Stok Durumu) */}
                  <div className="space-y-1 pt-0.5">
                    <div className="flex items-center justify-between text-[9px]">
                      <span className="font-heading font-extrabold text-white">Operasyon</span>
                      <span className="text-[8px] text-[#738094] font-mono">İstasyon & Parça Takibi</span>
                    </div>

                    <div className="grid grid-cols-12 gap-2">
                      {/* Left Column: Atölye ve Liftler (Matching Screenshot 1) */}
                      <div className="col-span-8 p-2 rounded-xl bg-[#0a101a] border border-[#1a2332] space-y-1.5">
                        <div className="flex items-center justify-between text-[8.5px]">
                          <div>
                            <span className="font-bold text-white">Atölye ve Liftler</span>
                            <div className="text-[7px] text-[#738094]">Şu anda işlem gören araçlar ve istasyon durumları</div>
                          </div>
                          <span className="text-[#8fb4ff] flex items-center gap-0.5 font-bold shrink-0">
                            <span>Panoya Git</span>
                            <ArrowUpRight size={9} />
                          </span>
                        </div>

                        <div className="space-y-1">
                          {/* Station 1: Genel İstasyon (Audi A6) */}
                          <div className="p-1.5 rounded-lg bg-[#0d1421] border border-[#1f2d40] text-[8px] space-y-0.5">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1.5 truncate">
                                <span className="text-[7px] text-[#738094] font-mono font-bold">GENEL İSTASYON</span>
                                <div className="inline-flex items-center h-3.5 rounded-xs border border-slate-700 bg-white text-slate-950 font-mono font-bold text-[7px] overflow-hidden shrink-0">
                                  <span className="bg-[#003399] text-white px-0.5 text-[5px] font-sans font-bold flex items-center h-full">TR</span>
                                  <span className="px-1">34 GKH 06</span>
                                </div>
                              </div>
                              <span className="inline-flex items-center gap-1 text-[7px] text-[#3b72ea] font-bold">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#3b72ea] animate-pulse" />
                                İşlemde
                              </span>
                            </div>
                            <div className="flex items-center justify-between text-[7.5px]">
                              <span className="text-white font-bold truncate">Audi A6 - 2026 • Periyodik Bakım (Yağ + 4 Filtre)</span>
                              <span className="text-[#738094] shrink-0">İşlem Sürüyor</span>
                            </div>
                          </div>

                          {/* Station 2: Lift 1 (Porsche 911) */}
                          <div className="p-1.5 rounded-lg bg-[#0d1421] border border-[#1f2d40] text-[8px] space-y-0.5">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1.5 truncate">
                                <span className="text-[7px] text-[#738094] font-mono font-bold">LİFT 1 (GENEL MEKANİK)</span>
                                <div className="inline-flex items-center h-3.5 rounded-xs border border-slate-700 bg-white text-slate-950 font-mono font-bold text-[7px] overflow-hidden shrink-0">
                                  <span className="bg-[#003399] text-white px-0.5 text-[5px] font-sans font-bold flex items-center h-full">TR</span>
                                  <span className="px-1">34 RDV 5858</span>
                                </div>
                              </div>
                              <span className="inline-flex items-center gap-1 text-[7px] text-emerald-400 font-bold">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                Teslime Hazır
                              </span>
                            </div>
                            <div className="flex items-center justify-between text-[7.5px]">
                              <span className="text-white font-bold truncate">Porsche 911 - 2026 • Hızlı Arıza Tespiti & Kontrol</span>
                              <span className="text-emerald-400 font-mono shrink-0">Tamamlandı</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Column: Stokta Dikkat İsteyenler (Exact 1:1 Checkmark) */}
                      <div className="col-span-4 p-2 rounded-xl bg-[#0a101a] border border-[#1a2332] flex flex-col justify-between text-[8px]">
                        <div className="flex items-center justify-between text-[8.5px]">
                          <div>
                            <span className="font-bold text-white truncate">Stok</span>
                            <div className="text-[7px] text-[#738094] truncate">Minimum seviye</div>
                          </div>
                          <span className="text-[#8fb4ff] font-bold">Stok ↗</span>
                        </div>

                        <div className="py-2.5 text-center flex flex-col items-center justify-center text-emerald-400">
                          <CheckCircle2 size={18} className="text-emerald-400 mb-1" />
                          <span className="text-[7.5px] text-[#9caac0] font-medium leading-tight">
                            Kritik seviyede parça bulunmuyor
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* SEAMLESS MACBOOK PRO CHASSIS BASE (NO DETACHED SLABS)    */}
          {/* ======================================================== */}
          {/* 1. Hinge Bar strictly attached to the lid */}
          <div className="relative w-full h-[6px] bg-[#0c1017] border-x border-[#252f3e] flex items-center justify-center">
            <div className="w-[82%] h-full bg-[#07090e] border-t border-black/80" />
          </div>

          {/* 2. Apple Unibody Bottom Base with Center Thumb Scoop */}
          <div className="relative w-[101.5%] -left-[0.75%] h-4 sm:h-5 bg-gradient-to-b from-[#263140] via-[#1a212c] to-[#0e131a] rounded-b-xl sm:rounded-b-2xl border-x border-b border-[#3d4b60] shadow-[0_20px_40px_rgba(0,0,0,0.9)] flex items-start justify-center">
            {/* Top Chamfer Aluminum Reflection Line */}
            <div className="absolute top-0 inset-x-2 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent" />

            {/* Precision Center Apple Thumb Notch Scoop */}
            <div className="w-18 sm:w-22 h-1.5 bg-[#07090e] rounded-b-md border-x border-b border-white/10 shadow-inner" />
          </div>

          {/* 3. Smooth Ambient Contact Shadow on Desk */}
          <div className="w-[96%] mx-auto h-3 bg-black/90 blur-md rounded-full -mt-1" />
        </div>

        {/* ======================================================== */}
        {/* 2. REALISTIC SLENDER IPHONE 16 PRO (MOBILE PANEL 1:1)    */}
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
            <div className="rounded-[38px] bg-[#070b12] border border-black overflow-hidden h-[515px] flex flex-col justify-between font-sans text-xs text-left shadow-inner">
              {/* Top Section */}
              <div className="p-3 space-y-2">
                {/* 1. Apple Status Bar (9:41, Dynamic Island, 5G & Battery) */}
                <div className="flex items-center justify-between px-1 select-none text-[10px]">
                  <span className="font-bold text-white tracking-tight font-sans text-[11px]">
                    09:43
                  </span>

                  <div className="w-20 h-5 bg-black rounded-full flex items-center justify-between px-2 border border-white/10 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0a1525] border border-white/20" />
                    <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                  </div>

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

                {/* 2. Mobile App Header (Matching Screenshot 2 1:1) */}
                <div className="flex items-center justify-between pt-1 border-b border-[#1a2332] pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-lg bg-[#111a26] border border-[#1a2332] flex items-center justify-center text-[#9caac0]">
                      <Menu size={12} />
                    </div>
                    {/* BAYAR OTO SERVİS Logo */}
                    <div className="leading-tight text-left">
                      <div className="text-[9.5px] font-black text-white tracking-wide font-heading">
                        BAYAR OTO
                      </div>
                      <div className="text-[6.5px] text-[#738094] -mt-0.5">
                        İstanbul / Başakşehir
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <div className="relative text-[#9caac0]">
                      <Bell size={11} />
                      <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </div>
                    <Moon size={10} className="text-[#738094]" />
                    <div className="flex items-center gap-0.5 px-1 py-0.5 rounded bg-[#111a26] border border-[#1a2332] text-[7.5px] text-[#9caac0]">
                      <Building2 size={8} />
                      <ChevronDown size={6} />
                    </div>
                    <div className="w-5 h-5 rounded-full bg-[#1e2d42] border border-[#304460] flex items-center justify-center text-[7.5px] font-bold text-white font-mono">
                      RB
                    </div>
                  </div>
                </div>

                {/* 3. Mobile Telemetry & Greeting (Matching Screenshot 2) */}
                <div className="space-y-0.5 pt-0.5">
                  <div className="text-[7.5px] font-extrabold uppercase tracking-widest text-[#8fb4ff] font-mono">
                    2 EKİM 2026 CUMA · SABAH VARDİYASI
                  </div>
                  <div className="text-xs font-bold text-white font-heading">
                    Günaydın, Rıdvan
                  </div>
                  <p className="text-[7.5px] text-[#738094] truncate">
                    Lifter şu an müsait, sırada işleme alınmayı bekleyen 1 araç bulunuyor.
                  </p>
                </div>

                {/* 4. Action Buttons (Kazanç, Randevular, + Kabul) */}
                <div className="grid grid-cols-3 gap-1 pt-0.5">
                  <div className="py-1 rounded-lg bg-[#111a26] border border-[#1a2332] text-center text-[8px] font-bold text-[#8fb4ff] flex items-center justify-center gap-1">
                    <TrendingUp size={9} />
                    <span>Kazanç</span>
                  </div>
                  <div className="py-1 rounded-lg bg-[#111a26] border border-[#1a2332] text-center text-[8px] font-bold text-white">
                    Randevular
                  </div>
                  <div className="py-1 rounded-lg bg-[#2357c5] text-center text-[8px] font-bold text-white flex items-center justify-center gap-0.5 shadow-xs">
                    <Plus size={10} />
                    <span>Kabul</span>
                  </div>
                </div>

                {/* 5. Günlük Özet & 2x2 Metric Cards (Matching Screenshot 2) */}
                <div className="space-y-1 pt-0.5">
                  <div className="flex items-center justify-between text-[8px]">
                    <span className="font-bold text-white">Günlük Özet</span>
                    <span className="text-[#738094] font-mono text-[7px]">Atölye Telemetrisi</span>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5">
                    <div className="p-2 rounded-xl bg-[#0c1421] border border-[#1a2332]">
                      <div className="flex items-center justify-between text-[7.5px] text-[#738094] font-bold uppercase">
                        <span className="truncate">BUGÜNKÜ TAH...</span>
                        <TrendingUp size={9} className="text-[#8fb4ff] shrink-0" />
                      </div>
                      <div className="text-xs font-black text-white font-mono mt-0.5">₺0</div>
                      <div className="text-[7px] text-[#738094]">Bu ay: ₺0</div>
                    </div>
                    <div className="p-2 rounded-xl bg-[#0c1421] border border-[#1a2332]">
                      <div className="flex items-center justify-between text-[7.5px] text-[#738094] font-bold uppercase">
                        <span className="truncate">AKTİF İŞ EMİRLERİ</span>
                        <Wrench size={9} className="text-emerald-400 shrink-0" />
                      </div>
                      <div className="text-xs font-black text-emerald-400 font-mono mt-0.5">1</div>
                      <div className="text-[7px] text-[#738094]">0 liftte · 1 sırada</div>
                    </div>
                    <div className="p-2 rounded-xl bg-[#0c1421] border border-[#1a2332]">
                      <div className="flex items-center justify-between text-[7.5px] text-[#738094] font-bold uppercase">
                        <span className="truncate">ATÖLYE DOLULU...</span>
                        <Layers size={9} className="text-amber-400 shrink-0" />
                      </div>
                      <div className="text-xs font-black text-white font-mono mt-0.5">%0</div>
                      <div className="text-[7px] text-[#738094]">3 istasyonun 0'ı aktif</div>
                    </div>
                    <div className="p-2 rounded-xl bg-[#0c1421] border border-[#1a2332]">
                      <div className="flex items-center justify-between text-[7.5px] text-[#738094] font-bold uppercase">
                        <span className="truncate">BEKLEYEN TAH...</span>
                        <Receipt size={9} className="text-[#8fb4ff] shrink-0" />
                      </div>
                      <div className="text-xs font-black text-white font-mono mt-0.5">₺0</div>
                      <div className="text-[7px] text-[#8fb4ff] truncate font-bold">Radara Git →</div>
                    </div>
                  </div>
                </div>

                {/* 6. Operasyon: Station Preview (Matching Screenshot 2) */}
                <div className="space-y-1 pt-0.5">
                  <div className="flex items-center justify-between text-[8px]">
                    <span className="font-bold text-white">Operasyon</span>
                    <span className="text-[#738094] font-mono text-[7px]">İstasyon & Parça Takibi</span>
                  </div>

                  <div className="p-2 rounded-xl bg-[#0c1421] border border-[#1f2d40] space-y-1">
                    <div className="flex items-center justify-between text-[8.5px]">
                      <div className="flex items-center gap-1 truncate">
                        <span className="font-mono text-[#738094] font-bold text-[7px]">GENEL İSTASYON</span>
                        <div className="inline-flex items-center h-3.5 rounded-xs border border-slate-700 bg-white text-slate-950 font-mono font-bold text-[7px] overflow-hidden shrink-0">
                          <span className="bg-[#003399] text-white px-0.5 text-[5px] font-sans font-bold flex items-center h-full">TR</span>
                          <span className="px-1">34 GKH 06</span>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[7px] text-[#3b72ea] font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3b72ea]" />
                        İşlemde
                      </span>
                    </div>
                    <div className="text-[8.5px] font-bold text-white truncate">
                      Audi A6 - 2026 • Periyodik Bakım
                    </div>
                  </div>
                </div>
              </div>

              {/* 7. Mobile Bottom Navigation (Pinned Strictly to VERY Bottom) */}
              <div className="w-full shrink-0 mt-auto bg-[#0a101a] border-t border-[#1a2332] pt-2 pb-1.5 px-1 relative">
                {/* 5 Equal Columns Grid - guarantees the 3rd item is DEAD CENTER */}
                <div className="grid grid-cols-5 items-end text-center relative">
                  {/* 1. Genel Bakış (Active) */}
                  <div className="flex flex-col items-center justify-center text-[#2357c5] dark:text-[#8fb4ff] cursor-pointer">
                    <div className="p-1 rounded-lg bg-[#2357c5]/15">
                      <LayoutDashboard size={14} />
                    </div>
                    <span className="text-[7.5px] font-bold mt-0.5 tracking-tight truncate">Genel Bakış</span>
                  </div>

                  {/* 2. İş Emirleri */}
                  <div className="flex flex-col items-center justify-center text-[#738094] hover:text-white cursor-pointer">
                    <div className="p-1">
                      <Wrench size={14} />
                    </div>
                    <span className="text-[7.5px] mt-0.5 tracking-tight truncate">İş Emirleri</span>
                  </div>

                  {/* 3. Center Elevated + Hızlı Kabul Button (EXACT HORIZONTAL CENTER) */}
                  <div className="flex flex-col items-center justify-center -mt-6 cursor-pointer">
                    <div className="w-10 h-10 rounded-2xl bg-[#2357c5] hover:bg-[#1d4bb0] text-white flex items-center justify-center shadow-lg shadow-[#2357c5]/40 border-2 border-[#070b12] active:scale-95 transition-transform">
                      <Plus size={18} strokeWidth={2.5} />
                    </div>
                    <span className="text-[7.5px] font-bold text-[#8fb4ff] mt-0.5 tracking-tight">Hızlı Kabul</span>
                  </div>

                  {/* 4. Randevular */}
                  <div className="flex flex-col items-center justify-center text-[#738094] hover:text-white cursor-pointer">
                    <div className="p-1">
                      <Calendar size={14} />
                    </div>
                    <span className="text-[7.5px] mt-0.5 tracking-tight truncate">Randevular</span>
                  </div>

                  {/* 5. Menü */}
                  <div className="flex flex-col items-center justify-center text-[#738094] hover:text-white cursor-pointer">
                    <div className="p-1">
                      <Menu size={14} />
                    </div>
                    <span className="text-[7.5px] mt-0.5 tracking-tight truncate">Menü</span>
                  </div>
                </div>

                {/* Apple Home Bar Indicator */}
                <div className="w-24 h-1 bg-white/35 rounded-full mx-auto mt-2 mb-0.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
