"use client";

import * as React from "react";
import { Check, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingSectionProps {
  onOpenDemo?: () => void;
}

export function PricingSection({ onOpenDemo }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = React.useState<"monthly" | "annual">("annual");

  const monthlyPrice = 2490;
  const annualPrice = 1990; // aylık karşılığı
  const currentPrice = billingCycle === "annual" ? annualPrice : monthlyPrice;

  const features = [
    {
      title: "Sınırsız Lift & İstasyon",
      desc: "İster 2 ister 20 liftiniz olsun; ek istasyon ücreti ödemezsiniz.",
    },
    {
      title: "Sınırsız İş Emri & Araç Kabul",
      desc: "Aylık araç veya iş emri kotası bulunmaz, dilediğinizce kullanın.",
    },
    {
      title: "Müşteri Canlı Takip Portalı",
      desc: "Araç sahibine SMS ve WhatsApp ile tek tıkla canlı aşama linki gönderin.",
    },
    {
      title: "360° Atölye Dijital İkiz",
      desc: "Kuşbakışı atölye simülasyonu ve interaktif çizik/hasar ekspertiz şablonu.",
    },
    {
      title: "GİB E-Fatura & E-Arşiv",
      desc: "Nilvera ve Paraşüt entegrasyonuyla tek tıkla resmi fatura kesimi.",
    },
    {
      title: "Kazanç Fırsat Radarı & CRM",
      desc: "Geciken alacaklar, muayene yaklaşanlar ve periyodik bakım hatırlatıcıları.",
    },
    {
      title: "Gün Sonu Kasa & Z-Raporu",
      desc: "Nakit, POS, Havale ve Çek tahsilatlarını kuruşu kuruşuna denkleştirin.",
    },
    {
      title: "Yedek Parça & Raf Takibi",
      desc: "Kritik stok uyarıları, alış-satış maliyet analizi ve barkod desteği.",
    },
    {
      title: "Sınırsız Kullanıcı & Rol Yönetimi",
      desc: "Usta, danışman, kasiyer ve müdür için özelleştirilmiş ekran yetkileri.",
    },
    {
      title: "Ücretsiz Veri Taşıma & Destek",
      desc: "Eski Excel ve program verileriniz ekibimizce ücretsiz aktarılır, 7/24 destek.",
    },
  ];

  return (
    <section id="fiyatlandirma" className="py-24 relative overflow-hidden bg-[#070b12] border-t border-[#1f2d3d]/50">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#2357c5]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            Şeffaf Fiyatlandırma.{" "}
            <span className="text-[#8fb4ff]">Tüm Güç Tek Pakette.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#9caac0] mt-4 leading-relaxed">
            Servisinizin büyüklüğü ne olursa olsun tüm modüller sınırsız kullanımınıza açık.
            Gizli istasyon ücreti, SMS kısıtlaması veya kullanıcı kotası yok.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center gap-2 p-1.5 rounded-2xl bg-[#0c1421] border border-[#1f2d3d]">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={cn(
                "px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer",
                billingCycle === "monthly"
                  ? "bg-[#2357c5] text-white shadow-md"
                  : "text-[#9caac0] hover:text-white"
              )}
            >
              Aylık Ödeme
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("annual")}
              className={cn(
                "px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2",
                billingCycle === "annual"
                  ? "bg-[#2357c5] text-white shadow-md"
                  : "text-[#9caac0] hover:text-white"
              )}
            >
              <span>Yıllık Ödeme</span>
              <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">
                %20 İndirim (2 Ay Hediye)
              </span>
            </button>
          </div>
        </div>

        {/* Single Comprehensive Plan Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-[#0f1d33] via-[#0b1422] to-[#070b12] border-2 border-[#2357c5]/80 p-8 sm:p-12 shadow-[0_0_60px_rgba(35,87,197,0.25)] relative">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-[#1f2d3d]">
            <div>
              <span className="text-xs font-mono font-bold text-[#8fb4ff] uppercase tracking-wider">
                SINIRSIZ ERİŞİM
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-heading mt-1">
                WorksAuto Pro
              </h3>
              <p className="text-xs sm:text-sm text-[#9caac0] mt-2 max-w-md leading-relaxed">
                İş emirlerinden dijital ikize, müşteri WhatsApp portalından GİB e-faturaya kadar her şey eksiksiz elinizin altında.
              </p>
            </div>

            <div className="flex flex-col sm:items-end">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-black font-heading text-white font-mono">
                  ₺{currentPrice.toLocaleString("tr-TR")}
                </span>
                <span className="text-sm text-[#9caac0] font-mono">/ ay</span>
              </div>
              <p className="text-[11px] text-[#9caac0] mt-1 font-mono">
                {billingCycle === "annual" ? (
                  <span className="text-emerald-400 font-semibold">
                    Yıllık peşin faturalanır (Yıllık ₺{(annualPrice * 12).toLocaleString("tr-TR")})
                  </span>
                ) : (
                  "Taahhütsüz, aylık yenilenen ödeme"
                )}
              </p>
            </div>
          </div>

          {/* Features Grid (2 columns) */}
          <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8">
            {features.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="p-1 rounded-lg bg-emerald-500/15 text-emerald-400 shrink-0 mt-0.5 border border-emerald-500/30">
                  <Check size={14} />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white font-heading">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#9caac0] mt-0.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA & Guarantees */}
          <div className="pt-8 border-t border-[#1f2d3d] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#9caac0]">
              <span className="inline-flex items-center gap-1.5 text-[#edf3fa]">
                <ShieldCheck size={16} className="text-[#8fb4ff]" />
                Hızlı Aktivasyon
              </span>
              <span>•</span>
              <span>Ücretsiz Veri Taşıma</span>
              <span>•</span>
              <span>Taahhütsüz İptal</span>
            </div>

            <a
              href="#demo-talep"
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs sm:text-sm font-bold font-heading bg-gradient-to-r from-[#2357c5] to-[#1a439c] text-white shadow-[0_0_25px_rgba(35,87,197,0.45)] hover:shadow-[0_0_35px_rgba(35,87,197,0.7)] border border-[#8fb4ff]/30 inline-flex items-center justify-center gap-2 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>Servis Paketini Başlatın</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
