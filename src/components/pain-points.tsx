"use client";

import * as React from "react";
import {
  FileText,
  Coins,
  Calendar,
  Sparkles,
  CheckCircle2,
  XCircle,
  QrCode,
  MessageSquare,
  Clock,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function PainPoints() {
  return (
    <section id="nasil-calisir" className="py-24 relative overflow-hidden bg-[#070b12] border-t border-[#1f2d3d]/50">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-[#2357c5]/10 via-[#1a439c]/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1624] border border-[#1f2d40] text-xs font-mono font-bold text-[#8fb4ff] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
            GELENEKSEL SANAYİ VS. DİJİTAL ATÖLYE
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            Geleneksel Servis Yönetiminin{" "}
            <span className="text-[#8fb4ff]">Maliyetine Katlanmayın.</span>
          </h2>
          <p className="text-base text-[#9caac0] mt-4 leading-relaxed">
            Eski sanayi usulü kağıt koçanlar, unutulan alacaklar ve kapı önü yığılmaları cironuzu eritir. WorksAuto bu kronik kayıpları dijital düzene dönüştürür.
          </p>
        </div>

        {/* Bento Grid Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* BENTO ITEM 1: Kağıt Koçan vs. QR Araç Kabul (Span 7) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0c1421] border border-[#1f2d3d] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#3b72ea]/50 transition-all shadow-xl">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-rose-500/10 border border-rose-500/20 text-[10px] font-mono font-bold text-rose-400 uppercase tracking-wider mb-2">
                KAYIP & İHTİLAF ÖNLEME
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-heading text-white mt-1">
                Kağıt Koçanlara Son: QR Kodlu Dijital Araç Kabul
              </h3>
              <p className="text-xs sm:text-sm text-[#9caac0] mt-2 max-w-xl leading-relaxed">
                Ustanın yağlı elleriyle yazdığı okunaksız kağıt fişler kaybolur, müşteriyle "bu çizik serviste mi oldu?" kavgası yaşanır. WorksAuto'da araç girişi tablette 14 saniyede tamamlanır.
              </p>
            </div>

            {/* Visual Comparison Stage */}
            <div className="mt-6 pt-6 border-t border-[#1f2d3d] grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Eski Usul (Kırmızı Çarpılı) */}
              <div className="p-4 rounded-2xl bg-[#080d16] border border-rose-500/25 relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400 font-mono mb-2.5">
                    <XCircle size={15} />
                    <span>ESKİ USUL: KAĞIT KOÇAN</span>
                  </div>
                  <div className="space-y-2 text-[11px] font-mono text-[#9caac0]">
                    <div className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold shrink-0">✕</span>
                      <span className="line-through decoration-rose-500/60">Okunaksız el yazısı & kayıp nüsha</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold shrink-0">✕</span>
                      <span className="line-through decoration-rose-500/60">Eksik yazılan parça ve işçilikler</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold shrink-0">✕</span>
                      <span className="line-through decoration-rose-500/60">Araç tesliminde çizik tartışması</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3 pt-2.5 border-t border-rose-500/15 text-[10px] text-rose-400/80 font-mono">
                  Maliyet: Ayda ~₺18.000 gizli kayıp
                </div>
              </div>

              {/* WorksAuto Dijital Çözüm (Yeşil Onaylı) */}
              <div className="p-4 rounded-2xl bg-[#0f1b2d] border border-[#2357c5]/50 shadow-lg relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-emerald-400 font-mono mb-2.5">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 size={15} />
                      <span>WORKSAUTO DİJİTAL FİŞ</span>
                    </span>
                    <QrCode size={16} className="text-[#8fb4ff]" />
                  </div>
                  <div className="space-y-2 text-[11px] text-[#edf3fa]">
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span>360° Fotoğraflı çizik & kaporta tespiti</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span>Müşteriye SMS & WhatsApp takip linki</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span>Stoktan otomatik düşen parça maliyeti</span>
                    </p>
                  </div>
                </div>
                <div className="mt-3 pt-2.5 border-t border-emerald-500/20 text-[10px] text-emerald-400 font-mono flex items-center justify-between">
                  <span>Tutanak: Dijital & İmzalı</span>
                  <span className="font-bold">14 Saniye ✓</span>
                </div>
              </div>
            </div>
          </div>

          {/* BENTO ITEM 2: WhatsApp Canlı Ek Masraf Onayı (Span 5) */}
          <div className="lg:col-span-5 rounded-3xl bg-[#0c1421] border border-[#1f2d3d] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#3b72ea]/50 transition-all shadow-xl">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2">
                MÜŞTERİ BAĞLANTISI
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-heading text-white mt-1">
                WhatsApp Ek Masraf & Parça Onayı
              </h3>
              <p className="text-xs sm:text-sm text-[#9caac0] mt-2 leading-relaxed">
                Müşteriyi telefonla arayıp dakikalarca ikna etmeye çalışmayın. Usta parça fotoğrafını çeker, müşteriye tek tıkla dijital onay butonu gider.
              </p>
            </div>

            {/* Visual WhatsApp Message Bubble Card */}
            <div className="mt-6 p-4 rounded-2xl bg-[#08131d] border border-emerald-500/30 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-emerald-400">
                <span className="flex items-center gap-1.5">
                  <MessageSquare size={14} />
                  <span>WorksAuto WhatsApp Bildirimi</span>
                </span>
                <span className="text-[10px] text-[#738094] font-mono">11:42 · İletildi</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#0e1d2c] border border-emerald-500/20 text-xs text-[#edf3fa] space-y-2.5">
                <p className="text-[11px] text-[#9caac0] leading-relaxed">
                  "Sayın Sinan Bey, ustanız ön fren balatalarınızın aşındığını tespit etti. Güvenliğiniz için değişimini öneriyoruz."
                </p>
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#9caac0] text-[11px]">Brembo Ön Balata + İşçilik</span>
                  <span className="text-emerald-400 font-bold">₺1.850</span>
                </div>
                <div className="flex gap-2 pt-0.5">
                  <div className="flex-1 py-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 text-center font-bold text-[11px] border border-emerald-500/40 cursor-pointer transition-colors">
                    ✓ Onayla & İşleme Al
                  </div>
                  <div className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#9caac0] text-center text-[11px] border border-white/5 cursor-pointer transition-colors">
                    Fotoğrafı İncele
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BENTO ITEM 3: İstasyon Bazlı Randevu & Lift Çakışma Önleyici (Span 5) */}
          <div className="lg:col-span-5 rounded-3xl bg-[#0c1421] border border-[#1f2d3d] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#3b72ea]/50 transition-all shadow-xl">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#2357c5]/20 border border-[#2357c5]/30 text-[10px] font-mono font-bold text-[#8fb4ff] uppercase tracking-wider mb-2">
                KAPASİTE & ZAMAN YÖNETİMİ
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-heading text-white mt-1">
                Lift Çakışmasını Sıfırlayan Randevu Motoru
              </h3>
              <p className="text-xs sm:text-sm text-[#9caac0] mt-2 leading-relaxed">
                Aynı saate 5 araç yığılmasını ve liftlerin saatlerce boş beklemesini engelleyin. Akıllı takvim lift ve usta bazlı randevuları otomatik dengeler.
              </p>
            </div>

            {/* Visual Lift Matrix Mini View */}
            <div className="mt-6 p-4 rounded-2xl bg-[#0a111a] border border-[#1f2d3d] space-y-2.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#9caac0]">LİFT TELEMETRİSİ</span>
                <span className="text-emerald-400 font-semibold">%100 Aktif Doluluk</span>
              </div>
              <div className="space-y-1.5 text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-[#111a26] border border-[#1f2d3d] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-[#8fb4ff] font-bold text-[11px]">Lift 1 (Mekanik)</span>
                  </div>
                  <span className="text-white text-[11px]">34 BVR 198 · 10:00 - 12:30</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#111a26] border border-[#1f2d3d] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-[#8fb4ff] font-bold text-[11px]">Lift 2 (Periyodik)</span>
                  </div>
                  <span className="text-white text-[11px]">06 ANK 2026 · 11:00 - 12:00</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#111a26] border border-[#1f2d3d] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span className="text-[#8fb4ff] font-bold text-[11px]">Lift 3 (Ön Düzen)</span>
                  </div>
                  <span className="text-white text-[11px]">35 IZM 441 · 12:00 - 13:30</span>
                </div>
              </div>
            </div>
          </div>

          {/* BENTO ITEM 4: Kazanç Radarı & Unutulan Alacaklar (Span 7) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0c1421] border border-[#1f2d3d] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#3b72ea]/50 transition-all shadow-xl">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider mb-2">
                FİNANSAL DİSİPLİN
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-heading text-white mt-1">
                Kazanç Radarı: Unutulan Alacak & Periyodik Bakım Çağrısı
              </h3>
              <p className="text-xs sm:text-sm text-[#9caac0] mt-2 max-w-xl leading-relaxed">
                Servisiniz kâr ediyor gibi görünürken veresiye defterlerinde nakitiniz erimesin. Kazanç radarı vadesi geçen bakiyeleri ve bakım zamanı gelen araçları tek tuşla servisinize geri çağırır.
              </p>
            </div>

            {/* Visual Radar Metrics */}
            <div className="mt-6 pt-6 border-t border-[#1f2d3d] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#101b2b] border border-amber-500/30">
                <div className="flex items-center justify-between text-xs text-amber-400 font-mono mb-1">
                  <span>GECİKEN CARİ ALACAKLAR</span>
                  <span className="font-bold">4 Firma</span>
                </div>
                <div className="text-2xl font-black font-heading text-white font-mono">
                  ₺38.450
                </div>
                <p className="text-[11px] text-[#9caac0] mt-1.5">
                  Otomatik WhatsApp bakiye ekstresiyle tahsilat süresi 3 kat hızlandı
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#101b2b] border border-emerald-500/30">
                <div className="flex items-center justify-between text-xs text-emerald-400 font-mono mb-1">
                  <span>GERİ KAZANILAN CİRO</span>
                  <span className="font-bold">+%34 Artış</span>
                </div>
                <div className="text-2xl font-black font-heading text-white font-mono">
                  24 Araç / Ay
                </div>
                <p className="text-[11px] text-[#9caac0] mt-1.5">
                  TÜVTÜRK muayenesi ve 10.000 km bakım davetleriyle geri dönen müşteriler
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
