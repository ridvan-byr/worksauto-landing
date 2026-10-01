"use client";

import * as React from "react";
import { Calculator, Sparkles, TrendingUp, ShieldCheck, ArrowRight } from "lucide-react";

export function RoiCalculator() {
  const [vehiclesPerMonth, setVehiclesPerMonth] = React.useState(120);
  const [averageTicket, setAverageTicket] = React.useState(7500);

  // Math computations
  const monthlyGrossRevenue = vehiclesPerMonth * averageTicket;

  // 1. Kazanç Radarı ile geri kazanılan ek bakım randevuları (+%12 araç girişi)
  const additionalVehicles = Math.round(vehiclesPerMonth * 0.12);
  const additionalMaintenanceRevenue = additionalVehicles * averageTicket;

  // 2. Unutulan ve kaçan açık alacakların WhatsApp ile kurtarılması (%6 ciro toparlama)
  const recoveredReceivables = Math.round(monthlyGrossRevenue * 0.05);

  // 3. Parça fire ve stok kaçaklarının önlenmesi
  const stockSavings = Math.round(vehiclesPerMonth * 120);

  // Total Monthly Additional Net Benefit
  const totalMonthlyGain = additionalMaintenanceRevenue + recoveredReceivables + stockSavings;
  const totalAnnualGain = totalMonthlyGain * 12;

  const fmt = (n: number) => n.toLocaleString("tr-TR");

  return (
    <section id="kazanc-hesapla" className="py-24 relative overflow-hidden bg-[#070b12]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#2357c5]/15 to-[#8fb4ff]/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
            <Calculator size={13} />
            <span>KAZANÇ & YATIRIM GETİRİSİ (ROI)</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight mt-4">
            WorksAuto Servisinize{" "}
            <span className="text-emerald-400">Ne Kadar Ek Kazanç</span> Sağlar?
          </h2>
          <p className="text-base text-[#9caac0] mt-4">
            Mevcut araç hacminizi seçin; kaçırılan alacaklar ve otomatik periyodik bakım davetleriyle atölyenizin aylık kazanacağı ek ciroyu canlı hesaplayın.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Left Inputs (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#0c1421] border border-[#1f2d3d] space-y-8 flex flex-col justify-between shadow-xl">
            {/* Slider 1: Araç Sayısı */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-white font-heading">
                  Aylık Servise Giren Araç Sayısı
                </label>
                <span className="text-lg font-black font-mono text-[#8fb4ff] bg-[#111a26] px-3 py-1 rounded-xl border border-[#1f2d3d]">
                  {vehiclesPerMonth} Araç
                </span>
              </div>
              <input
                type="range"
                min="30"
                max="500"
                step="10"
                value={vehiclesPerMonth}
                onChange={(e) => setVehiclesPerMonth(Number(e.target.value))}
                className="w-full h-2 bg-[#162232] rounded-lg appearance-none cursor-pointer accent-[#2357c5]"
              />
              <div className="flex justify-between text-[11px] text-[#9caac0] font-mono">
                <span>30 Araç (Butik Atölye)</span>
                <span>250 Araç</span>
                <span>500+ Araç (Büyük Servis)</span>
              </div>
            </div>

            {/* Slider 2: Ortalama Sepet */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-white font-heading">
                  Ortalama İş Emri (Sepet) Tutarı
                </label>
                <span className="text-lg font-black font-mono text-[#8fb4ff] bg-[#111a26] px-3 py-1 rounded-xl border border-[#1f2d3d]">
                  ₺{fmt(averageTicket)}
                </span>
              </div>
              <input
                type="range"
                min="2000"
                max="30000"
                step="500"
                value={averageTicket}
                onChange={(e) => setAverageTicket(Number(e.target.value))}
                className="w-full h-2 bg-[#162232] rounded-lg appearance-none cursor-pointer accent-[#2357c5]"
              />
              <div className="flex justify-between text-[11px] text-[#9caac0] font-mono">
                <span>₺2,000 (Hızlı Bakım)</span>
                <span>₺15,000</span>
                <span>₺30,000 (Ağır Onarım)</span>
              </div>
            </div>

            {/* Breakdown Highlights */}
            <div className="pt-4 border-t border-[#1f2d3d] space-y-2.5 text-xs text-[#9caac0]">
              <div className="flex justify-between">
                <span>• Otomatik WhatsApp davetiyle geri kazanılan araç:</span>
                <span className="font-mono text-white font-bold">+{additionalVehicles} Araç/ay</span>
              </div>
              <div className="flex justify-between">
                <span>• Tahsil edilen gecikmiş açık alacaklar:</span>
                <span className="font-mono text-white font-bold">₺{fmt(recoveredReceivables)}/ay</span>
              </div>
              <div className="flex justify-between">
                <span>• Stok fire ve parça kaçaklarının önlenmesi:</span>
                <span className="font-mono text-white font-bold">₺{fmt(stockSavings)}/ay</span>
              </div>
            </div>
          </div>

          {/* Right Result Card (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#12243d] via-[#0d1829] to-[#070b12] border border-[#2357c5]/50 flex flex-col justify-between shadow-[0_0_50px_rgba(35,87,197,0.25)] relative overflow-hidden">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
                <Sparkles size={13} />
                <span>Tahmini Ekstra Net Hasılat</span>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-[#9caac0] font-mono font-semibold">
                  Aylık Ortalama Ek Kazanç
                </p>
                <div className="text-3xl sm:text-4xl font-black font-heading tracking-tight text-white font-mono mt-1 text-emerald-400">
                  +₺{fmt(totalMonthlyGain)}
                </div>
                <p className="text-xs text-[#9caac0] mt-1">
                  WorksAuto kullanım maliyetinin <strong>en az 15 katı</strong> geri dönüş.
                </p>
              </div>

              <div className="pt-4 border-t border-[#1f2d3d]/80">
                <p className="text-xs uppercase tracking-wider text-[#9caac0] font-mono font-semibold">
                  Yıllık Kümülatif Ek Kazanç
                </p>
                <div className="text-2xl sm:text-3xl font-black font-heading tracking-tight text-white font-mono mt-0.5">
                  ₺{fmt(totalAnnualGain)}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1f2d3d]">
              <a
                href="#demo-talep"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-[#2357c5] to-[#1a439c] text-white text-xs font-bold font-heading shadow-[0_0_20px_rgba(35,87,197,0.4)] hover:shadow-[0_0_30px_rgba(35,87,197,0.7)] transition-all cursor-pointer border border-[#8fb4ff]/30"
              >
                <span>Bu Kazancı Servisinize Kazandırın</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
