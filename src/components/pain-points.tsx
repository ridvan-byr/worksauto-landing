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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
              <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider">
                KAYIP & İHTİLAF ÖNLEME
              </span>
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
              <div className="p-4 rounded-2xl bg-black/40 border border-rose-500/20 opacity-75 relative">
                <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400 font-mono mb-2">
                  <XCircle size={15} />
                  <span>ESKİ USUL: KAĞIT KOÇAN</span>
                </div>
                <div className="space-y-1.5 text-[11px] font-mono text-[#9caac0] line-through decoration-rose-500/70">
                  <p>• Okunaksız el yazısı & kayıp nüsha</p>
                  <p>• Eksik yazılan parça ve işçilikler</p>
                  <p>• Araç tesliminde müşteri tartışması</p>
                </div>
              </div>

              {/* WorksAuto Dijital Çözüm (Yeşil Onaylı) */}
              <div className="p-4 rounded-2xl bg-[#111c2e] border border-[#3b72ea]/40 shadow-lg">
                <div className="flex items-center justify-between text-xs font-bold text-emerald-400 font-mono mb-2">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={15} />
                    <span>WORKSAUTO DİJİTAL FİŞ</span>
                  </span>
                  <QrCode size={16} className="text-[#8fb4ff]" />
                </div>
                <div className="space-y-1.5 text-[11px] text-[#edf3fa]">
                  <p className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>360° Fotoğraflı çizik ekspertizi</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Müşteri SMS & WhatsApp takip linki</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Eksiksiz stoktan düşen parça maliyeti</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* BENTO ITEM 2: WhatsApp Canlı Ek Masraf Onayı (Span 5) */}
          <div className="lg:col-span-5 rounded-3xl bg-[#0c1421] border border-[#1f2d3d] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#3b72ea]/50 transition-all shadow-xl">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                MÜŞTERİ BAĞLANTISI
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-heading text-white mt-1">
                WhatsApp Ek Masraf & Parça Onayı
              </h3>
              <p className="text-xs sm:text-sm text-[#9caac0] mt-2 leading-relaxed">
                Müşteriyi telefonla arayıp dakikalarca ikna etmeye çalışmayın. Usta parça fotoğrafını çeker, müşteriye tek tıkla dijital onay butonu gider.
              </p>
            </div>

            {/* Visual WhatsApp Message Bubble Card */}
            <div className="mt-6 p-4 rounded-2xl bg-[#08131d] border border-emerald-500/30 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                <MessageSquare size={14} />
                <span>Oto Servis WhatsApp Bildirimi</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0e1d2c] border border-white/5 text-xs text-[#edf3fa] space-y-2">
                <p className="text-[11px] text-[#9caac0]">
                  Sayın Sinan Bey, ustanız ön fren balatalarınızın aşındığını tespit etti. Güvenliğiniz için değişimini öneriyoruz.
                </p>
                <div className="p-2 rounded-lg bg-black/40 flex items-center justify-between text-xs font-mono">
                  <span>Ön Balata Takımı + İşçilik</span>
                  <span className="text-emerald-400 font-bold">₺1.850</span>
                </div>
                <div className="flex gap-2 pt-1">
                  <div className="flex-1 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 text-center font-bold text-[11px] border border-emerald-500/30">
                    ✓ Onayla & İşleme Al
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-white/5 text-[#9caac0] text-center text-[11px]">
                    İncele
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BENTO ITEM 3: İstasyon Bazlı Randevu & Lift Çakışma Önleyici (Span 5) */}
          <div className="lg:col-span-5 rounded-3xl bg-[#0c1421] border border-[#1f2d3d] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#3b72ea]/50 transition-all shadow-xl">
            <div>
              <span className="text-xs font-mono font-bold text-[#8fb4ff] uppercase tracking-wider">
                KAPASİTE & ZAMAN YÖNETİMİ
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-heading text-white mt-1">
                Lift Çakışmasını Sıfırlayan Randevu Motoru
              </h3>
              <p className="text-xs sm:text-sm text-[#9caac0] mt-2 leading-relaxed">
                Aynı saate 5 araç yığılmasını ve liftlerin saatlerce boş beklemesini engelleyin. Akıllı takvim lift ve usta bazlı randevuları otomatik dengeler.
              </p>
            </div>

            {/* Visual Lift Matrix Mini View */}
            <div className="mt-6 p-4 rounded-2xl bg-[#0a111a] border border-[#1f2d3d] space-y-2.5">
              <div className="flex items-center justify-between text-xs font-mono text-[#9caac0]">
                <span>LİFT PLANLAMA</span>
                <span className="text-emerald-400 font-semibold">%100 Doluluk</span>
              </div>
              <div className="space-y-1.5 text-xs font-mono">
                <div className="p-2 rounded-xl bg-[#111a26] border border-[#1f2d3d] flex items-center justify-between">
                  <span className="text-[#8fb4ff]">Lift 1 (Mekanik)</span>
                  <span className="text-white text-[11px]">34 BVR 198 (10:00 - 12:30)</span>
                </div>
                <div className="p-2 rounded-xl bg-[#111a26] border border-[#1f2d3d] flex items-center justify-between">
                  <span className="text-[#8fb4ff]">Lift 2 (Periyodik)</span>
                  <span className="text-white text-[11px]">06 ANK 2026 (11:00 - 12:00)</span>
                </div>
                <div className="p-2 rounded-xl bg-[#111a26] border border-[#1f2d3d] flex items-center justify-between">
                  <span className="text-[#8fb4ff]">Lift 3 (Ön Düzen)</span>
                  <span className="text-white text-[11px]">35 IZM 441 (12:00 - 13:30)</span>
                </div>
              </div>
            </div>
          </div>

          {/* BENTO ITEM 4: Kazanç Radarı & Unutulan Alacaklar (Span 7) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0c1421] border border-[#1f2d3d] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#3b72ea]/50 transition-all shadow-xl">
            <div>
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                FİNANSAL DİSİPLİN
              </span>
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
                  <span>GECİKEN ALACAKLAR</span>
                  <span className="font-bold">4 Cari</span>
                </div>
                <div className="text-xl font-black font-heading text-white font-mono">
                  ₺38.450
                </div>
                <p className="text-[10px] text-[#9caac0] mt-1">
                  Tek tıkla WhatsApp bakiye ekstresi ile tahsil edildi
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#101b2b] border border-emerald-500/30">
                <div className="flex items-center justify-between text-xs text-emerald-400 font-mono mb-1">
                  <span>YAKLAŞAN BAKIMLAR</span>
                  <span className="font-bold">+%34 Ciro</span>
                </div>
                <div className="text-xl font-black font-heading text-white font-mono">
                  24 Araç Çağrıldı
                </div>
                <p className="text-[10px] text-[#9caac0] mt-1">
                  TÜVTÜRK muayenesi ve 10.000 km bakım davetleri
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
