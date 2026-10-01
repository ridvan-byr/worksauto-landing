"use client";

import * as React from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingSectionProps {
  onOpenDemo?: () => void;
}

export function PricingSection({ onOpenDemo }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = React.useState<"monthly" | "annual">("annual");

  const plans = [
    {
      name: "Başlangıç",
      badge: "KÜÇÜK ATÖLYELER",
      priceMonthly: 1490,
      priceAnnual: 1190,
      desc: "Tek veya iki liftli butik tamirhaneler ve hızlı bakım noktaları için ideal.",
      features: [
        "2 Lift / İstasyon Desteği",
        "Aylık 100 Adet İş Emri",
        "Müşteri & Araç Geçmişi Kaydı",
        "QR Kodlu Araç Kabul & Teslim Fişi",
        "Temel Cari & Kasa Takibi",
        "Standart E-Posta Desteği",
      ],
      popular: false,
      ctaText: "Ücretsiz Başlayın",
    },
    {
      name: "Profesyonel",
      badge: "EN ÇOK TERCİH EDİLEN",
      priceMonthly: 2890,
      priceAnnual: 2290,
      desc: "İşini büyütmek, kurumsallaşmak ve müşteri kaybını sıfırlamak isteyen tüm oto servisler için.",
      features: [
        "Sınırsız Lift & İstasyon Kapasitesi",
        "Sınırsız İş Emri & Randevu",
        "Müşteri Canlı Takip Portalı (SMS/WhatsApp Linki)",
        "Kazanç Fırsat Radarı & Bakiye Hatırlatıcı",
        "360° Dijital İkiz & Çizik Ekspertiz Şablonu",
        "GİB E-Fatura & E-Arşiv Entegrasyonu",
        "Gün Sonu Kasa & Yazdırılabilir Z-Raporu",
        "Yedek Parça Raf & Kritik Stok Takibi",
        "Canlı WhatsApp & Telefon Desteği",
      ],
      popular: true,
      ctaText: "14 Gün Ücretsiz Deneyin",
    },
    {
      name: "Kurumsal",
      badge: "ZİNCİR SERVİSLER & FİLOLAR",
      priceMonthly: 5490,
      priceAnnual: 4390,
      desc: "Birden fazla şubesi olan zincir servisler, yetkili bayiler ve filo bakım merkezleri için.",
      features: [
        "Çoklu Şube & Merkez Konsolidasyonu",
        "Şubeler Arası Stok & Parça Transferi",
        "Özel Muhasebe & ERP Entegrasyonları",
        "Gelişmiş Rol & Yetki Matrisi (Kasiyer, Usta, Müdür)",
        "Özel Veri Yedekleme & Dedicated Altyapı",
        "Özel Müşteri Temsilcisi & 7/24 Öncelikli Hat",
        "Yerinde Kurulum & Personel Eğitimi",
      ],
      popular: false,
      ctaText: "Kurumsal Teklif Alın",
    },
  ];

  return (
    <section id="fiyatlandirma" className="py-24 relative overflow-hidden bg-[#070b12] border-t border-[#1f2d3d]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8fb4ff] bg-[#2357c5]/10 border border-[#3b72ea]/20 px-3.5 py-1.5 rounded-full">
            ŞEFFAF VE ADİL FİYATLAR
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight mt-4">
            Gizli Ücret Yok.{" "}
            <span className="text-[#8fb4ff]">İhtiyacınıza Göre Seçin.</span>
          </h2>
          <p className="text-base text-[#9caac0] mt-4">
            Tüm paketlerde 14 gün ücretsiz deneme dahildir. Kredi kartı gerekmez, dilediğiniz zaman iptal edebilirsiniz.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center gap-2 p-1.5 rounded-2xl bg-[#0c1421] border border-[#1f2d3d]">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={cn(
                "px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer",
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
                "px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5",
                billingCycle === "annual"
                  ? "bg-[#2357c5] text-white shadow-md"
                  : "text-[#9caac0] hover:text-white"
              )}
            >
              <span>Yıllık Ödeme</span>
              <span className="px-1.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">
                %20 İndirim
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, idx) => {
            const price = billingCycle === "annual" ? plan.priceAnnual : plan.priceMonthly;
            return (
              <div
                key={idx}
                className={cn(
                  "p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between relative",
                  plan.popular
                    ? "bg-gradient-to-b from-[#13233c] via-[#0d1828] to-[#070b12] border-2 border-[#2357c5] shadow-[0_0_50px_rgba(35,87,197,0.3)] lg:-translate-y-2"
                    : "bg-[#0c1421] border border-[#1f2d3d] hover:border-[#2a384b]"
                )}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#2357c5] to-[#1a439c] border border-[#8fb4ff]/40 text-white text-[10px] font-mono font-black tracking-wider uppercase shadow-lg flex items-center gap-1">
                    <Sparkles size={11} />
                    <span>EN ÇOK TERCİH EDİLEN</span>
                  </div>
                )}

                <div>
                  <div className="text-xs font-mono font-bold text-[#8fb4ff] uppercase tracking-wider">
                    {plan.badge}
                  </div>
                  <h3 className="text-2xl font-black text-white font-heading mt-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-[#9caac0] mt-2 min-h-[36px] leading-relaxed">
                    {plan.desc}
                  </p>

                  {/* Price */}
                  <div className="mt-6 pb-6 border-b border-[#1f2d3d] flex items-baseline gap-1">
                    <span className="text-4xl font-black font-heading text-white font-mono">
                      ₺{price.toLocaleString("tr-TR")}
                    </span>
                    <span className="text-xs text-[#9caac0] font-mono">/ ay</span>
                    {billingCycle === "annual" && (
                      <span className="text-[10px] text-emerald-400 font-mono ml-2">
                        (Yıllık peşin faturalanır)
                      </span>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="py-6 space-y-3">
                    {plan.features.map((f, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#edf3fa]">
                        <div className="p-0.5 rounded-full bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                          <Check size={12} />
                        </div>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1f2d3d]">
                  <a
                    href="#demo-talep"
                    onClick={onOpenDemo}
                    className={cn(
                      "w-full py-3.5 rounded-2xl text-xs font-bold font-heading inline-flex items-center justify-center gap-2 transition-all cursor-pointer",
                      plan.popular
                        ? "bg-gradient-to-r from-[#2357c5] to-[#1a439c] text-white shadow-[0_0_20px_rgba(35,87,197,0.4)] hover:shadow-[0_0_30px_rgba(35,87,197,0.6)] border border-[#8fb4ff]/30"
                        : "bg-[#111a26] hover:bg-[#162232] text-white border border-[#1f2d3d]"
                    )}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
