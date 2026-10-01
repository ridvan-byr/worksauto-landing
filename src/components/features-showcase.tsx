"use client";

import * as React from "react";
import Image from "next/image";
import {
  Wrench,
  Smartphone,
  Sparkles,
  Car,
  Receipt,
  Package,
  CheckCircle2,
  ArrowRight,
  Shield,
  Eye,
  Send,
  Sliders,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureTab {
  id: string;
  badge: string;
  title: string;
  headline: string;
  desc: string;
  icon: React.ElementType;
  highlights: string[];
  image: string;
  imageAlt: string;
  imageAspect?: string;
  isMobilePhone?: boolean;
}

export function FeaturesShowcase() {
  const [activeTab, setActiveTab] = React.useState("WORK_ORDERS");

  const tabs: FeatureTab[] = [
    {
      id: "WORK_ORDERS",
      badge: "ATÖLYE OPERASYONU",
      title: "Akıllı İş Emirleri & Lift Takibi",
      headline: "Atölyenizin her saniyesini ve lift doluluğunu canlı yönetin.",
      desc: "Hangi usta hangi araçta çalışıyor, hangi parça takıldı, iş ne zaman bitecek? Servis danışmanından başustaya kadar tüm ekip anlık olarak koordine olsun.",
      icon: Wrench,
      highlights: [
        "Sürükle-bırak lift ve istasyon planlaması",
        "Usta bazlı iş emri ataması ve süre takibi",
        "QR kodlu araç teslim ve kabul formu",
        "Fason (dış servis) ve yedek parça maliyet dökümü",
      ],
      image: "/screenshots/work-orders.png",
      imageAlt: "WorksAuto İş Emirleri & Araç Kabul",
    },
    {
      id: "CUSTOMER_PORTAL",
      badge: "MÜŞTERİ DENEYİMİ",
      title: "Müşteri Canlı Takip Portalı",
      headline: "Müşterinize aracını cep telefonundan canlı izletin, güven kazanın.",
      desc: "Araç servise girdiği anda müşteriye otomatik SMS/WhatsApp takip linki gider. Müşteri 'Aracım ne durumda?' diye servisi aramadan parça değişimlerini, fotoğrafları ve aşamaları şeffafça izler.",
      icon: Smartphone,
      highlights: [
        "Şifresiz, tek tıkla açılan mobil takip bağlantısı",
        "Fotoğraflı ve videolu hasar/onarım onay sistemi",
        "Ek parça ve masraflar için müşteriden anında dijital onay alma",
        "PayTR entegrasyonuyla link üzerinden güvenli kredi kartı ödemesi",
      ],
      image: "/screenshots/mobile-tracking.png",
      imageAlt: "WorksAuto Müşteri Mobil Canlı Takip",
      isMobilePhone: true,
    },
    {
      id: "GROWTH_RADAR",
      badge: "YAPAY ZEKA & GELİR",
      title: "Kazanç Fırsat Radarı & CRM",
      headline: "Atölyenizin kaçırdığı ciroyu yapay zeka ile otomatik toplayın.",
      desc: "Vakti gelen periyodik bakımlar, yaklaşan TÜVTÜRK muayeneleri, tahsil edilmemiş veresiye bakiyeleri ve kış/yaz lastik oteli uyarıları tek ekranda toplanır.",
      icon: Sparkles,
      highlights: [
        "Otomatik SMS/WhatsApp periyodik bakım hatırlatıcıları",
        "TÜVTÜRK muayene bitiş tarihi erken uyarı sistemi",
        "Tahsilatı geciken cari hesaplar için nazik ödeme bildirimleri",
        "Mevsimsel lastik ve klima kampanya otomasyonu",
      ],
      image: "/screenshots/app-dashboard.png",
      imageAlt: "WorksAuto Kazanç Fırsat Radarı",
    },
    {
      id: "DIGITAL_TWIN",
      badge: "KURUMSAL İMAJ",
      title: "360° Atölye Dijital İkiz",
      headline: "Kuşbakışı atölye simülasyonu ve hasar ekspertiz şablonu.",
      desc: "Müşteri kabulünde aracın kaportasındaki mevcut çizik ve vurukları dokunmatik ekranda işaretleyin. Hem teslim fişine basılsın hem de müşterinin onayına sunulsun.",
      icon: Car,
      highlights: [
        "Sedan, Hatchback, SUV ve Ticari araç 360° gövde şablonları",
        "Fotoğraf ekleme ve hasar derecesi işaretleme (Çizik, Göçük, Boyalı)",
        "Araç tesliminde ihtilafları ve tartışmaları sıfırlayan dijital tutanak",
        "Lift kolonları ve istasyonlar üzerinde 2.5D kuşbakışı simülasyon",
      ],
      image: "/screenshots/digital-twin.png",
      imageAlt: "WorksAuto 360 Dijital İkiz ve Hasar Ekspertizi",
    },
    {
      id: "FINANCE_EINVOICE",
      badge: "FİNANS & RESMİ MEVZUAT",
      title: "Ön Muhasebe & GİB E-Fatura",
      headline: "Kasa, POS, çek ve resmi e-fatura tek tıkla entegre.",
      desc: "Nilvera ve Paraşüt entegrasyonu sayesinde tamamlanan iş emirlerini tek tuşla GİB e-fatura veya e-arşive dönüştürün. Gün sonu kasa mutabakatı ve Z-raporuyla kuruş şaşmasın.",
      icon: Receipt,
      highlights: [
        "Tek tıkla GİB E-Fatura / E-Arşiv kesimi ve otomatik PDF gönderimi",
        "Nakit, Kredi Kartı (POS), Havale ve Çek kırılımlı gün sonu Z-raporu",
        "Müşteri ve toptancı cari hesap hareketleri, veresiye yaşlandırma",
        "İşçilik ve yedek parça bazlı net kârlılık raporları",
      ],
      image: "/screenshots/financial-reports.png",
      imageAlt: "WorksAuto Finans ve GİB E-Fatura Yönetimi",
    },
    {
      id: "INVENTORY",
      badge: "MALİYET KONTROLÜ",
      title: "Yedek Parça & Raf Takibi",
      headline: "Kayıp parçaları ve atıl stok maliyetini sıfırlayın.",
      desc: "Hangi parçadan rafta kaç adet kaldı, kritik seviyenin altına düştü mü? Barkod okuyucu desteğiyle saniyeler içinde parça çıkışı yapın ve iş emrine doğrudan bağlayın.",
      icon: Package,
      highlights: [
        "Kritik stok uyarıları ve otomatik sipariş listesi oluşturma",
        "Raf, kutu ve koridor bazlı depo konumlandırma",
        "OEM parça kodu ve muadil parça eşleştirme",
        "Toptancı alış faturası aktarımı ve FIFO maliyet hesabı",
      ],
      image: "/screenshots/app-dashboard.png",
      imageAlt: "WorksAuto Yedek Parça ve Stok Takibi",
    },
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];
  const Icon = currentTab.icon;

  return (
    <section id="ozellikler" className="py-24 relative overflow-hidden bg-[#070b12] border-t border-[#1f2d3d]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8fb4ff] bg-[#2357c5]/10 border border-[#3b72ea]/20 px-3.5 py-1.5 rounded-full">
            GÜÇLÜ ÖZELLİKLER
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight mt-4">
            Bir Oto Servisin İhtiyaç Duyduğu{" "}
            <span className="text-[#8fb4ff]">Her Şey Tek Çatıda.</span>
          </h2>
          <p className="text-base text-[#9caac0] mt-4">
            Birbirinden kopuk Excel tablolarını ve basit muhasebe programlarını unutun. WorksAuto atölyenizin operasyonunu baştan uca tek bir ekranda birleştirir.
          </p>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 scrollbar-none">
          {tabs.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-3 rounded-2xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer border",
                  isActive
                    ? "bg-[#2357c5] text-white border-[#3b72ea] shadow-[0_0_20px_rgba(35,87,197,0.4)]"
                    : "bg-[#0d1520] text-[#9caac0] border-[#1f2d3d] hover:bg-[#162232] hover:text-white"
                )}
              >
                <TabIcon size={15} />
                <span>{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Detailed View Container */}
        <div className="mt-8 rounded-3xl bg-[#0c1421] border border-[#1f2d3d] p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
          {/* Left Info Column (7 cols) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2357c5]/15 border border-[#3b72ea]/30 text-[#8fb4ff] text-xs font-mono font-bold">
              <Icon size={14} />
              <span>{currentTab.badge}</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black font-heading text-white tracking-tight leading-snug">
              {currentTab.headline}
            </h3>

            <p className="text-base text-[#9caac0] leading-relaxed">
              {currentTab.desc}
            </p>

            {/* Checkmark Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {currentTab.highlights.map((h, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#edf3fa]">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#demo-talep"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#8fb4ff] hover:text-white transition-colors group cursor-pointer"
              >
                <span>Bu modülü canlı denemek için ücretsiz başlayın</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Mockup Preview Column (6 cols) */}
          <div className="lg:col-span-6 flex justify-center">
            {currentTab.isMobilePhone ? (
              /* Mobile Phone Mockup Frame */
              <div className="relative w-full max-w-[300px] rounded-[36px] p-3 bg-gradient-to-b from-[#2a384b] to-[#121c29] border border-[#3b72ea]/40 shadow-2xl">
                <div className="relative rounded-[28px] overflow-hidden bg-black aspect-[9/18] border border-black">
                  <Image
                    src={currentTab.image}
                    alt={currentTab.imageAlt}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full" />
              </div>
            ) : (
              /* Desktop Window Mockup Frame */
              <div className="relative w-full rounded-2xl overflow-hidden border border-[#1f2d3d] bg-[#070b12] shadow-2xl group/prev">
                <div className="flex items-center justify-between px-3 py-2 bg-[#0d1520] border-b border-[#1f2d3d] text-[10px] font-mono text-[#9caac0]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <span>worksauto-preview</span>
                </div>
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#070b12]">
                  <Image
                    src={currentTab.image}
                    alt={currentTab.imageAlt}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover/prev:scale-[1.02]"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
