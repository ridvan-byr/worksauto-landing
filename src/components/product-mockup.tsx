"use client";

import * as React from "react";
import Image from "next/image";
import {
  Wrench,
  Smartphone,
  Layers,
  BarChart3,
  CheckCircle2,
  Clock,
  Car,
  ShieldCheck,
  Zap,
  MessageSquare,
  QrCode,
  FileCheck,
  ChevronRight,
  TrendingUp,
  Sliders,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function ProductMockup() {
  const [activeTab, setActiveTab] = React.useState<"COCKPIT" | "CUSTOMER" | "ORDERS" | "FINANCE">("COCKPIT");

  return (
    <div className="relative mx-auto max-w-6xl group transition-all duration-500">
      {/* Studio Radial Spotlight Behind Stage */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-[#2357c5]/25 via-[#3b72ea]/20 to-[#8fb4ff]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Top Tab Navigator */}
      <div className="flex items-center justify-center mb-6">
        <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-[#0c1421]/90 border border-[#1f2d3d] backdrop-blur-xl shadow-2xl">
          <button
            type="button"
            onClick={() => setActiveTab("COCKPIT")}
            className={cn(
              "px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2",
              activeTab === "COCKPIT"
                ? "bg-[#2357c5] text-white shadow-[0_0_20px_rgba(35,87,197,0.5)]"
                : "text-[#9caac0] hover:text-white"
            )}
          >
            <Layers size={14} />
            <span>Masaüstü Atölye Kokpiti</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("CUSTOMER")}
            className={cn(
              "px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2",
              activeTab === "CUSTOMER"
                ? "bg-[#2357c5] text-white shadow-[0_0_20px_rgba(35,87,197,0.5)]"
                : "text-[#9caac0] hover:text-white"
            )}
          >
            <Smartphone size={14} />
            <span>Müşteri Canlı Takip (Mobil)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("ORDERS")}
            className={cn(
              "px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2",
              activeTab === "ORDERS"
                ? "bg-[#2357c5] text-white shadow-[0_0_20px_rgba(35,87,197,0.5)]"
                : "text-[#9caac0] hover:text-white"
            )}
          >
            <Wrench size={14} />
            <span>İş Emirleri Masası</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("FINANCE")}
            className={cn(
              "px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2",
              activeTab === "FINANCE"
                ? "bg-[#2357c5] text-white shadow-[0_0_20px_rgba(35,87,197,0.5)]"
                : "text-[#9caac0] hover:text-white"
            )}
          >
            <BarChart3 size={14} />
            <span>Kasa & E-Fatura</span>
          </button>
        </div>
      </div>

      {/* DUAL DEVICE STAGE (MacBook Pro + iPhone 16 Pro) */}
      <div className="relative mx-auto max-w-5xl pt-4 pb-12 px-2 sm:px-6">
        {/* ======================================================== */}
        {/* 1. MACBOOK PRO M3 SPACE BLACK LAPTOP MOCKUP FRAME        */}
        {/* ======================================================== */}
        <div className="relative mx-auto rounded-t-3xl bg-[#141b24] p-3 sm:p-4 border-t border-x border-[#2a384b] shadow-[0_40px_100px_rgba(0,0,0,0.9)] max-w-4xl">
          {/* Laptop Camera Notch & Bezel */}
          <div className="relative rounded-2xl bg-[#070b12] border border-[#1f2d3d] overflow-hidden shadow-inner">
            {/* Display Top Bar */}
            <div className="px-4 py-2.5 bg-[#0d1520] border-b border-[#1f2d3d] flex items-center justify-between text-xs select-none">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <span className="ml-3 font-mono text-[11px] text-[#9caac0] hidden sm:inline">
                  WorksAuto Servis Kokpiti &nbsp;•&nbsp; Maslak Merkez Atölye
                </span>
              </div>
              <div className="flex items-center gap-3 font-mono text-[11px] text-[#9caac0]">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Canlı Senkronize
                </span>
                <span className="hidden sm:inline text-white font-semibold">₺48,200 Bugünkü Ciro</span>
              </div>
            </div>

            {/* SCREEN VIEW CONTENT: ATÖLYE & LİFT KOKPİTİ */}
            {activeTab === "COCKPIT" && (
              <div className="p-4 sm:p-6 bg-[#070b12] space-y-4">
                {/* 4 Lift Bay Matrix */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {/* Lift 1 */}
                  <div className="p-3 rounded-2xl bg-[#0c1421] border border-[#3b72ea]/40 relative overflow-hidden">
                    <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                      <span className="text-[#8fb4ff] font-bold">LİFT 01</span>
                      <span className="text-amber-400 font-semibold">İşlemde (%75)</span>
                    </div>
                    <div className="p-2 rounded-xl bg-black/40 border border-white/5 space-y-1">
                      <span className="text-xs font-mono font-black text-white bg-[#111a26] px-1.5 py-0.5 rounded border border-white/10 inline-block">
                        34 BVR 198
                      </span>
                      <div className="text-xs font-bold text-white truncate">BMW 320i M Sport</div>
                      <div className="text-[10px] text-[#9caac0]">Fren Disk & Balata Değişimi</div>
                    </div>
                    <div className="mt-2 pt-2 border-t border-[#1f2d3d] flex justify-between text-[10px] text-[#9caac0]">
                      <span>Usta: Serkan U.</span>
                      <span className="text-emerald-400 font-mono font-bold">₺18,500</span>
                    </div>
                  </div>

                  {/* Lift 2 */}
                  <div className="p-3 rounded-2xl bg-[#0c1421] border border-emerald-500/40 relative overflow-hidden">
                    <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                      <span className="text-[#8fb4ff] font-bold">LİFT 02</span>
                      <span className="text-emerald-400 font-semibold">Hazır / Yıkama</span>
                    </div>
                    <div className="p-2 rounded-xl bg-black/40 border border-white/5 space-y-1">
                      <span className="text-xs font-mono font-black text-white bg-[#111a26] px-1.5 py-0.5 rounded border border-white/10 inline-block">
                        06 ANK 2026
                      </span>
                      <div className="text-xs font-bold text-white truncate">Mercedes C200d AMG</div>
                      <div className="text-[10px] text-[#9caac0]">60.000 Km Ağır Bakım</div>
                    </div>
                    <div className="mt-2 pt-2 border-t border-[#1f2d3d] flex justify-between text-[10px] text-[#9caac0]">
                      <span>Usta: Ahmet U.</span>
                      <span className="text-emerald-400 font-mono font-bold">₺24,800</span>
                    </div>
                  </div>

                  {/* Lift 3 */}
                  <div className="p-3 rounded-2xl bg-[#0c1421] border border-[#1f2d3d] relative overflow-hidden">
                    <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                      <span className="text-[#8fb4ff] font-bold">LİFT 03</span>
                      <span className="text-[#8fb4ff] font-semibold">Parça Geldi</span>
                    </div>
                    <div className="p-2 rounded-xl bg-black/40 border border-white/5 space-y-1">
                      <span className="text-xs font-mono font-black text-white bg-[#111a26] px-1.5 py-0.5 rounded border border-white/10 inline-block">
                        35 IZM 441
                      </span>
                      <div className="text-xs font-bold text-white truncate">Audi A4 40 TDI</div>
                      <div className="text-[10px] text-[#9caac0]">Salıncak & Amortisör</div>
                    </div>
                    <div className="mt-2 pt-2 border-t border-[#1f2d3d] flex justify-between text-[10px] text-[#9caac0]">
                      <span>Usta: Volkan U.</span>
                      <span className="text-emerald-400 font-mono font-bold">₺14,200</span>
                    </div>
                  </div>

                  {/* Lift 4 */}
                  <div className="p-3 rounded-2xl bg-[#0c1421] border border-[#1f2d3d] relative overflow-hidden">
                    <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                      <span className="text-[#8fb4ff] font-bold">LİFT 04</span>
                      <span className="text-amber-400 font-semibold">Ekspertizde</span>
                    </div>
                    <div className="p-2 rounded-xl bg-black/40 border border-white/5 space-y-1">
                      <span className="text-xs font-mono font-black text-white bg-[#111a26] px-1.5 py-0.5 rounded border border-white/10 inline-block">
                        16 BUR 992
                      </span>
                      <div className="text-xs font-bold text-white truncate">Volkswagen Passat</div>
                      <div className="text-[10px] text-[#9caac0]">360° Kaporta & Check-up</div>
                    </div>
                    <div className="mt-2 pt-2 border-t border-[#1f2d3d] flex justify-between text-[10px] text-[#9caac0]">
                      <span>Danışman: Selim K.</span>
                      <span className="text-emerald-400 font-mono font-bold">₺8,500</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Workshop Banner */}
                <div className="p-3 rounded-xl bg-[#0d1624] border border-[#1f2d3d] flex flex-col sm:flex-row items-center justify-between text-xs gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold">
                      GÜN SONU KASA MUTABIK
                    </span>
                    <span className="text-slate-300 text-[11px]">
                      Nakit: ₺14.200 • Kredi Kartı: ₺28.500 • Havale: ₺5.500
                    </span>
                  </div>
                  <span className="text-[#8fb4ff] font-mono text-[11px] font-semibold">
                    12 Araç Teslim Edildi
                  </span>
                </div>
              </div>
            )}

            {/* SCREEN VIEW CONTENT: İŞ EMİRLERİ */}
            {activeTab === "ORDERS" && (
              <div className="p-4 sm:p-6 bg-[#070b12] space-y-3 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-[#0c1421] border border-[#1f2d3d]">
                    <div className="text-[10px] text-[#9caac0]">KABUL BEKLEYENLER</div>
                    <div className="text-lg font-bold text-white mt-1">4 Araç</div>
                    <div className="text-[10px] text-[#8fb4ff] mt-1">Randevulu girişler</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0c1421] border border-amber-500/30">
                    <div className="text-[10px] text-amber-400">LİFTTE İŞLEMDE</div>
                    <div className="text-lg font-bold text-white mt-1">6 Lift Dolu</div>
                    <div className="text-[10px] text-[#9caac0] mt-1">Ort. Süre: 2.1 Saat</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0c1421] border border-emerald-500/30">
                    <div className="text-[10px] text-emerald-400">TESLİME HAZIR</div>
                    <div className="text-lg font-bold text-white mt-1">8 Araç</div>
                    <div className="text-[10px] text-[#9caac0] mt-1">WhatsApp linki iletildi</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#0c1421] border border-[#1f2d3d] space-y-2">
                  <div className="flex items-center justify-between text-[#9caac0] text-[11px] pb-1 border-b border-[#1f2d3d]">
                    <span>Plaka & Araç</span>
                    <span>İşlem</span>
                    <span>Usta</span>
                    <span>Tutar</span>
                    <span>Durum</span>
                  </div>
                  <div className="flex items-center justify-between text-white text-[11px]">
                    <span className="font-bold">34 BVR 198 (BMW 320i)</span>
                    <span className="text-[#9caac0]">Fren Balata Takımı</span>
                    <span className="text-[#8fb4ff]">Serkan U.</span>
                    <span className="text-emerald-400 font-bold">₺18,500</span>
                    <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 text-[10px]">İşlemde</span>
                  </div>
                  <div className="flex items-center justify-between text-white text-[11px]">
                    <span className="font-bold">06 ANK 2026 (Mercedes C200)</span>
                    <span className="text-[#9caac0]">Periyodik 60K Bakım</span>
                    <span className="text-[#8fb4ff]">Ahmet U.</span>
                    <span className="text-emerald-400 font-bold">₺24,800</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px]">Hazır</span>
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN VIEW CONTENT: MÜŞTERİ PORTALI AÇIKLAMA */}
            {activeTab === "CUSTOMER" && (
              <div className="p-6 bg-[#070b12] flex items-center justify-between gap-6">
                <div className="space-y-3 max-w-lg text-left">
                  <h3 className="text-xl font-bold font-heading text-white">
                    Müşteriniz Aracını Cebinden Canlı İzlesin
                  </h3>
                  <p className="text-xs text-[#9caac0] leading-relaxed">
                    Araç servise girdiği anda araç sahibine SMS ve WhatsApp ile güvenli bir takip bağlantısı gönderilir. Müşteri parça değişimlerini, hasar fotoğraflarını ve ek iş tekliflerini cep telefonundan tek dokunuşla onaylar.
                  </p>
                  <div className="flex items-center gap-4 text-xs font-mono text-[#8fb4ff] pt-2">
                    <span>✓ Şifresiz Mobil Erişim</span>
                    <span>✓ Fotoğraflı Onay</span>
                    <span>✓ Güvenli Kartla Ödeme</span>
                  </div>
                </div>
                <div className="hidden sm:block text-right">
                  <span className="text-xs font-mono text-[#9caac0] block mb-1">Müşteri Puanı</span>
                  <span className="text-3xl font-black font-mono text-emerald-400">4.9 / 5.0</span>
                </div>
              </div>
            )}

            {/* SCREEN VIEW CONTENT: FİNANS & E-FATURA */}
            {activeTab === "FINANCE" && (
              <div className="p-4 sm:p-6 bg-[#070b12] space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="p-3 rounded-xl bg-[#0c1421] border border-[#1f2d3d]">
                    <div className="text-[10px] text-[#9caac0]">AYLIK BRÜT CİRO</div>
                    <div className="text-lg font-black text-white font-mono mt-1">₺428,500</div>
                    <div className="text-[10px] text-emerald-400 mt-1">+%34 Büyüme</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0c1421] border border-[#1f2d3d]">
                    <div className="text-[10px] text-[#9caac0]">GERÇEK NET KÂR</div>
                    <div className="text-lg font-black text-white font-mono mt-1">₺246,800</div>
                    <div className="text-[10px] text-emerald-400 mt-1">%57.6 Net Marj</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0c1421] border border-[#1f2d3d]">
                    <div className="text-[10px] text-[#9caac0]">GÜN SONU KASA</div>
                    <div className="text-lg font-black text-white font-mono mt-1">₺48,200</div>
                    <div className="text-[10px] text-emerald-400 mt-1">%100 Mutabık</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0c1421] border border-[#1f2d3d]">
                    <div className="text-[10px] text-[#9caac0]">GİB E-FATURA</div>
                    <div className="text-lg font-black text-white font-mono mt-1">142 Adet</div>
                    <div className="text-[10px] text-[#8fb4ff] mt-1">Nilvera / Paraşüt</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Laptop Base (Hinge & Keyboard Silhouette) */}
          <div className="h-3 sm:h-4 bg-[#1e2735] rounded-b-xl border-t border-[#2a384b] relative shadow-2xl flex items-center justify-center">
            <div className="w-16 sm:w-24 h-1 bg-[#2a384b] rounded-full" />
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. IPHONE 16 PRO TITANIUM SMARTPHONE OVERLAY MOCKUP     */}
        {/* ======================================================== */}
        <div className="hidden lg:block absolute -bottom-4 right-2 sm:right-6 w-72 rounded-[42px] p-3 bg-gradient-to-b from-[#2a384b] via-[#1a2433] to-[#0c131f] border-2 border-[#3b72ea]/50 shadow-[0_30px_70px_rgba(0,0,0,0.95)] z-20 transform hover:-translate-y-1 transition-all duration-300">
          {/* Phone Screen Glass */}
          <div className="rounded-[34px] bg-[#070b12] border border-[#1f2d3d] overflow-hidden p-3.5 space-y-3 font-sans text-xs shadow-inner">
            {/* Dynamic Island */}
            <div className="mx-auto w-24 h-4 bg-black rounded-full flex items-center justify-end px-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            {/* Mobile Header */}
            <div className="text-center pb-2 border-b border-[#1f2d3d]">
              <span className="text-[10px] font-mono text-[#8fb4ff] font-semibold">
                CANLI MÜŞTERİ TAKİP PORTALI
              </span>
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
                <span className="text-[11px] text-[#edf3fa] ml-1.5 font-semibold">BMW 320i</span>
              </div>
              <span className="text-[10px] text-amber-400 font-mono font-bold">Liftte</span>
            </div>

            {/* Live Progress Bar Stepper */}
            <div className="space-y-1.5 p-2 rounded-xl bg-[#0c1421] border border-white/5">
              <div className="flex justify-between text-[10px] text-[#9caac0]">
                <span>Onarım Aşaması</span>
                <span className="text-emerald-400 font-bold">%75 Tamamlandı</span>
              </div>
              <div className="w-full h-1.5 bg-black/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#2357c5] to-emerald-400 w-3/4 rounded-full" />
              </div>
              <div className="flex justify-between text-[9px] text-[#9caac0] pt-0.5">
                <span className="text-emerald-400">✓ Kabul</span>
                <span className="text-emerald-400">✓ Parça</span>
                <span className="text-amber-400 font-bold">● Montaj</span>
                <span>Teslim</span>
              </div>
            </div>

            {/* Approved Parts Card */}
            <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[10px] space-y-1 text-[#edf3fa]">
              <div className="flex items-center justify-between font-bold text-emerald-400">
                <span>Ön Disk & Balata Takımı</span>
                <span>₺18,500</span>
              </div>
              <p className="text-[9px] text-[#9caac0]">
                WhatsApp üzerinden onaylandı • Montaj yapıldı
              </p>
            </div>

            {/* Live Status Button */}
            <div className="py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-center font-bold text-[11px] text-emerald-400 flex items-center justify-center gap-1.5">
              <MessageSquare size={13} />
              <span>Servis Danışmanına WhatsApp'tan Yaz</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
