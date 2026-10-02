"use client";

import * as React from "react";
import {
  Wrench,
  Smartphone,
  Sparkles,
  Car,
  Receipt,
  Package,
  CheckCircle2,
  ArrowRight,
  Search,
  Plus,
  Clock,
  TrendingUp,
  AlertTriangle,
  FileText,
  Camera,
  Layers,
  ShieldCheck,
  Check,
  Send,
  Calendar,
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
    },
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section id="ozellikler" className="py-24 relative overflow-hidden bg-[#070b12] border-t border-[#1f2d3d]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1624] border border-[#1f2d40] text-xs font-mono font-bold text-[#8fb4ff] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2357c5] animate-pulse" />
            BÜTÜNLEŞİK ATÖLYE YÖNETİM SİSTEMİ
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            Bir Oto Servisin İhtiyaç Duyduğu{" "}
            <span className="text-[#8fb4ff]">Her Şey Tek Çatıda.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#9caac0] mt-4 leading-relaxed">
            Birbirinden kopuk Excel tablolarını ve basit muhasebe programlarını unutun. WorksAuto atölyenizin operasyonunu baştan uca tek bir ekranda birleştirir.
          </p>
        </div>

        {/* Tab Navigation Pill Bar (Sleek, Responsive, Perfectly Spaced) */}
        <div className="flex items-center justify-start lg:justify-center gap-1.5 overflow-x-auto pb-3 scrollbar-none">
          <div className="p-1 rounded-2xl bg-[#0a1018] border border-[#162232] flex items-center gap-1">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 whitespace-nowrap cursor-pointer select-none",
                    isActive
                      ? "bg-[#2357c5] text-white shadow-[0_4px_16px_rgba(35,87,197,0.35)]"
                      : "text-[#738094] hover:text-white hover:bg-[#121c2a]"
                  )}
                >
                  <TabIcon size={14} className={isActive ? "text-white" : "text-[#8fb4ff]"} />
                  <span>{tab.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Tab Showcase Card (Unified SaaS Architecture) */}
        <div className="mt-6 rounded-3xl bg-gradient-to-b from-[#0b121e] to-[#070b12] border border-[#182334] p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center shadow-2xl relative">
          {/* Subtle Ambient Background Highlight */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2357c5]/10 blur-[100px] pointer-events-none rounded-full" />

          {/* Left Info Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#0e1726] border border-[#1d2d42] text-[10px] font-mono font-bold text-[#8fb4ff] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {currentTab.badge}
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-black font-heading text-white tracking-tight leading-snug">
              {currentTab.headline}
            </h3>

            <p className="text-sm text-[#9caac0] leading-relaxed">
              {currentTab.desc}
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 gap-2.5 pt-1">
              {currentTab.highlights.map((h, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-[#090f18]/80 border border-[#162232] text-xs text-[#dbe5f0]"
                >
                  <div className="w-5 h-5 rounded-md bg-[#112038] text-[#8fb4ff] flex items-center justify-center shrink-0">
                    <Check size={12} strokeWidth={2.5} />
                  </div>
                  <span className="font-medium">{h}</span>
                </div>
              ))}
            </div>

            {/* Direct CTA Link */}
            <div className="pt-2">
              <a
                href="#demo-talep"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#8fb4ff] hover:text-white transition-colors group cursor-pointer"
              >
                <span>Bu modülü canlı denemek için demo talep edin</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-[#2357c5]" />
              </a>
            </div>
          </div>

          {/* Right Mockup Preview Column (7 cols) - Pure Vector Mockups, NO Screenshots */}
          <div className="lg:col-span-7 flex justify-center relative z-10 w-full">
            {activeTab === "WORK_ORDERS" && <WorkOrdersMockup />}
            {activeTab === "CUSTOMER_PORTAL" && <CustomerPortalMockup />}
            {activeTab === "GROWTH_RADAR" && <GrowthRadarMockup />}
            {activeTab === "DIGITAL_TWIN" && <DigitalTwinMockup />}
            {activeTab === "FINANCE_EINVOICE" && <FinanceInvoiceMockup />}
            {activeTab === "INVENTORY" && <InventoryMockup />}
          </div>
        </div>
      </div>
    </section>
  );
}

{/* ========================================================================= */}
{/* 1. WORK ORDERS & LIFT TRACKING MOCKUP (Mac Desktop Window)               */}
{/* ========================================================================= */}
function WorkOrdersMockup() {
  return (
    <div className="w-full rounded-2xl overflow-hidden border border-[#1e2d42] bg-[#080d15] shadow-2xl text-left select-none font-sans text-xs">
      {/* Mac Window Header */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#0b121e] border-b border-[#1a2538] text-[11px] font-mono text-[#9caac0]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-[10px] text-[#738094] ml-2">panel.worksauto.com/work-orders</span>
        </div>
        <div className="flex items-center gap-1.5 text-[9px] font-bold text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          CANLI ATÖLYE DOLULUĞU
        </div>
      </div>

      {/* Internal Sub-bar */}
      <div className="px-4 py-2.5 border-b border-[#162234] bg-[#090f18] flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-1 max-w-[200px] h-6 px-2 rounded-md bg-[#0e1624] border border-[#1a2538] text-[9px] text-[#738094]">
          <Search size={10} />
          <span>Plaka veya iş emri ara...</span>
        </div>
        <div className="flex items-center gap-1.5 text-[9px] font-mono">
          <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
            3 Lift Aktif
          </span>
          <span className="px-2 py-0.5 rounded-md bg-[#2357c5]/15 text-[#8fb4ff] border border-[#2357c5]/30 font-bold">
            1 Sırada
          </span>
        </div>
      </div>

      {/* 3 Lift Columns Grid */}
      <div className="p-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        {/* Column 1: Lift 1 */}
        <div className="rounded-xl bg-[#0b121e] border border-[#1a273a] p-2.5 space-y-2">
          <div className="flex items-center justify-between text-[9px] border-b border-[#162234] pb-1.5">
            <span className="font-mono font-bold text-[#8fb4ff]">LİFT 1 (GENEL)</span>
            <span className="text-emerald-400 font-bold text-[8.5px]">İşlemde (%75)</span>
          </div>
          <div className="p-2 rounded-lg bg-[#0e1726] border border-[#1f2f45] space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center h-3.5 rounded-xs border border-slate-700 bg-white text-slate-950 font-mono font-bold text-[7px] overflow-hidden">
                <span className="bg-[#003399] text-white px-0.5 text-[5px]">TR</span>
                <span className="px-1">34 GKH 06</span>
              </div>
              <span className="text-[8px] text-[#9caac0] font-mono">#EMR-142</span>
            </div>
            <div className="text-[10px] font-bold text-white">Audi A6 · 120.000km Bakım</div>
            <div className="text-[8.5px] text-[#738094]">Murat Usta · 45 dk kaldı</div>
            <div className="h-1 w-full bg-[#162234] rounded-full overflow-hidden">
              <div className="h-full bg-emerald-400 w-3/4 rounded-full" />
            </div>
          </div>
        </div>

        {/* Column 2: Lift 2 */}
        <div className="rounded-xl bg-[#0b121e] border border-[#1a273a] p-2.5 space-y-2">
          <div className="flex items-center justify-between text-[9px] border-b border-[#162234] pb-1.5">
            <span className="font-mono font-bold text-[#8fb4ff]">LİFT 2 (ÖN TAKIM)</span>
            <span className="text-amber-400 font-bold text-[8.5px]">Parça Bekliyor</span>
          </div>
          <div className="p-2 rounded-lg bg-[#0e1726] border border-[#1f2f45] space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center h-3.5 rounded-xs border border-slate-700 bg-white text-slate-950 font-mono font-bold text-[7px] overflow-hidden">
                <span className="bg-[#003399] text-white px-0.5 text-[5px]">TR</span>
                <span className="px-1">34 RDV 58</span>
              </div>
              <span className="text-[8px] text-[#9caac0] font-mono">#EMR-143</span>
            </div>
            <div className="text-[10px] font-bold text-white">Porsche 911 · Disk & Balata</div>
            <div className="text-[8.5px] text-amber-400 font-mono">Brembo balata bekleniyor</div>
            <div className="h-1 w-full bg-[#162234] rounded-full overflow-hidden">
              <div className="h-full bg-amber-400 w-1/3 rounded-full" />
            </div>
          </div>
        </div>

        {/* Column 3: Hızlı Servis */}
        <div className="rounded-xl bg-[#0b121e] border border-[#1a273a] p-2.5 space-y-2">
          <div className="flex items-center justify-between text-[9px] border-b border-[#162234] pb-1.5">
            <span className="font-mono font-bold text-[#8fb4ff]">HIZLI SERVİS</span>
            <span className="text-[#3b72ea] font-bold text-[8.5px]">✓ Tamamlandı</span>
          </div>
          <div className="p-2 rounded-lg bg-[#0e1726] border border-[#1f2f45] space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center h-3.5 rounded-xs border border-slate-700 bg-white text-slate-950 font-mono font-bold text-[7px] overflow-hidden">
                <span className="bg-[#003399] text-white px-0.5 text-[5px]">TR</span>
                <span className="px-1">06 BR 1905</span>
              </div>
              <span className="text-[8px] text-emerald-400 font-bold">₺3.450</span>
            </div>
            <div className="text-[10px] font-bold text-white">BMW 320i · Klima Gazı</div>
            <div className="text-[8.5px] text-[#738094]">Müşteri SMS bilgilendirildi</div>
            <div className="h-1 w-full bg-[#162234] rounded-full overflow-hidden">
              <div className="h-full bg-[#3b72ea] w-full rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{/* ========================================================================= */}
{/* 2. CUSTOMER TRACKING PORTAL MOCKUP (Slender iPhone 16 Pro)                */}
{/* ========================================================================= */}
function CustomerPortalMockup() {
  return (
    <div className="w-full max-w-[280px] rounded-[38px] p-2.5 bg-gradient-to-b from-[#3a4556] via-[#222a36] to-[#141a24] border-[2px] border-[#4a576c] shadow-2xl text-left select-none font-sans">
      <div className="rounded-[30px] bg-[#070b12] border border-black overflow-hidden p-3 space-y-2 text-xs">
        {/* Status Bar */}
        <div className="flex items-center justify-between px-1 text-[9px]">
          <span className="font-bold text-white font-mono">09:43</span>
          <div className="w-16 h-3.5 bg-black rounded-full" />
          <span className="text-[8px] font-mono text-[#9caac0]">5G 100%</span>
        </div>

        {/* Portal Header */}
        <div className="text-center pt-1 border-b border-[#1a2332] pb-2">
          <div className="text-[8px] font-mono text-[#8fb4ff] font-bold uppercase tracking-wider">
            BAYAR OTO SERVİS · CANLI TAKİP
          </div>
          <div className="text-[11px] font-black text-white mt-0.5">34 GKH 06 · Audi A6</div>
        </div>

        {/* 4-Step Stepper Progress */}
        <div className="space-y-1.5 p-2 rounded-xl bg-[#0b121e] border border-[#1a2538]">
          <div className="text-[8px] text-[#738094] font-bold uppercase">ONARIM AŞAMASI</div>
          <div className="flex items-center justify-between text-[7px] text-white">
            <span className="text-emerald-400 font-bold">1. Kabul ✓</span>
            <span className="text-[#3b72ea] font-black underline">2. Liftte ●</span>
            <span className="text-[#738094]">3. Kontrol</span>
            <span className="text-[#738094]">4. Teslim</span>
          </div>
          <div className="h-1.5 w-full bg-[#162234] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-emerald-400 to-[#3b72ea] w-1/2 rounded-full" />
          </div>
        </div>

        {/* Interactive Mechanic Photo & Part Approval Card */}
        <div className="p-2 rounded-xl bg-[#0b121e] border border-[#2357c5]/50 space-y-1.5 shadow-sm">
          <div className="flex items-center justify-between text-[8px]">
            <span className="font-bold text-[#8fb4ff] flex items-center gap-1">
              <Camera size={9} />
              Usta Fotoğraflı Onay Talebi
            </span>
            <span className="text-amber-400 font-mono font-bold">+₺1.450</span>
          </div>
          <p className="text-[7.5px] text-[#9caac0] leading-tight">
            Ön fren balatalarınız kritik seviyede (%10) aşınmış. Değişimi onaylıyor musunuz?
          </p>
          <div className="flex items-center gap-1.5 pt-0.5">
            <button
              type="button"
              className="flex-1 py-1 rounded-md bg-[#2357c5] text-white text-[8px] font-bold text-center shadow-xs cursor-pointer"
            >
              ✓ Onaylıyorum
            </button>
            <button
              type="button"
              className="px-2 py-1 rounded-md bg-[#162234] text-[#9caac0] text-[8px] cursor-pointer"
            >
              Reddet
            </button>
          </div>
        </div>

        {/* PayTR Quick Payment Bar */}
        <div className="p-2 rounded-xl bg-[#09101a] border border-[#162232] flex items-center justify-between text-[8px]">
          <div>
            <div className="text-[7px] text-[#738094]">Tahmini Teslim: Bugün 17:30</div>
            <div className="text-[9px] font-bold text-white font-mono">Toplam: ₺4.850</div>
          </div>
          <div className="px-2 py-1 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold text-[7.5px]">
            PayTR ile Öde →
          </div>
        </div>
      </div>
    </div>
  );
}

{/* ========================================================================= */}
{/* 3. GROWTH RADAR & CRM MOCKUP (Mac Desktop Window)                         */}
{/* ========================================================================= */}
function GrowthRadarMockup() {
  return (
    <div className="w-full rounded-2xl overflow-hidden border border-[#1e2d42] bg-[#080d15] shadow-2xl text-left select-none font-sans text-xs">
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#0b121e] border-b border-[#1a2538] text-[11px] font-mono text-[#9caac0]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-[10px] text-[#738094] ml-2">panel.worksauto.com/growth-radar</span>
        </div>
        <div className="flex items-center gap-1.5 text-[9px] font-bold text-[#8fb4ff]">
          <Sparkles size={11} className="text-[#8fb4ff]" />
          YAPAY ZEKA FIRSAT MOTORU
        </div>
      </div>

      {/* KPI Highlight Strip */}
      <div className="px-4 py-2 border-b border-[#162234] bg-[#090f18] grid grid-cols-3 gap-2 text-center font-mono">
        <div>
          <div className="text-[7.5px] text-[#738094] uppercase">Kaçan Ciro Potansiyeli</div>
          <div className="text-xs font-black text-amber-400">₺142.800</div>
        </div>
        <div>
          <div className="text-[7.5px] text-[#738094] uppercase">Aktif Hatırlatma</div>
          <div className="text-xs font-black text-white">48 Araç</div>
        </div>
        <div>
          <div className="text-[7.5px] text-[#738094] uppercase">Geri Dönüş Oranı</div>
          <div className="text-xs font-black text-emerald-400">%41.5</div>
        </div>
      </div>

      {/* 3 Smart Opportunity Rows */}
      <div className="p-3.5 space-y-2">
        {/* Row 1: Periyodik Bakım */}
        <div className="p-2.5 rounded-xl bg-[#0b121e] border border-[#1a273a] flex items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-[10px]">Ahmet Yılmaz</span>
              <span className="font-mono text-[8px] text-[#8fb4ff] bg-[#112038] px-1 rounded">34 BMR 12 · VW Passat</span>
            </div>
            <div className="text-[8px] text-amber-400">Yıllık bakım süresi 15 gün aşıldı (Potansiyel: ₺4.200)</div>
          </div>
          <button
            type="button"
            className="px-2.5 py-1 rounded-md bg-[#2357c5] text-white text-[8px] font-bold shadow-xs cursor-pointer flex items-center gap-1 shrink-0"
          >
            <Send size={8} />
            WhatsApp Gönder
          </button>
        </div>

        {/* Row 2: TÜVTÜRK Muayene */}
        <div className="p-2.5 rounded-xl bg-[#0b121e] border border-[#1a273a] flex items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-[10px]">Selin Demir</span>
              <span className="font-mono text-[8px] text-[#8fb4ff] bg-[#112038] px-1 rounded">06 TY 102 · Renault Megane</span>
            </div>
            <div className="text-[8px] text-[#9caac0]">TÜVTÜRK muayenesine 16 gün kaldı (Ön kontrol teklifi)</div>
          </div>
          <button
            type="button"
            className="px-2.5 py-1 rounded-md bg-[#162234] border border-[#23354c] text-white text-[8px] font-bold shadow-xs cursor-pointer flex items-center gap-1 shrink-0"
          >
            SMS Hatırlat
          </button>
        </div>

        {/* Row 3: Veresiye Cari Tahsilat */}
        <div className="p-2.5 rounded-xl bg-[#0b121e] border border-[#1a273a] flex items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-[10px]">Güneş Filo Lojistik</span>
              <span className="font-mono text-[8px] text-emerald-400 bg-emerald-500/10 px-1 rounded">3 Araç Kayıtlı</span>
            </div>
            <div className="text-[8px] text-rose-400 font-mono">₺28.400 vadesi geçen bakiye (+22 gün)</div>
          </div>
          <button
            type="button"
            className="px-2.5 py-1 rounded-md bg-[#162234] border border-rose-500/30 text-rose-300 text-[8px] font-bold shadow-xs cursor-pointer flex items-center gap-1 shrink-0"
          >
            Ödeme Linki At
          </button>
        </div>
      </div>
    </div>
  );
}

{/* ========================================================================= */}
{/* 4. 360° DIGITAL TWIN & DAMAGE INSPECTOR MOCKUP                           */}
{/* ========================================================================= */}
function DigitalTwinMockup() {
  return (
    <div className="w-full rounded-2xl overflow-hidden border border-[#1e2d42] bg-[#080d15] shadow-2xl text-left select-none font-sans text-xs">
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#0b121e] border-b border-[#1a2538] text-[11px] font-mono text-[#9caac0]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-[10px] text-[#738094] ml-2">panel.worksauto.com/360-twin</span>
        </div>
        <span className="text-[9px] font-bold text-[#8fb4ff]">HASAR & EKSPERTİZ TUTANAĞI</span>
      </div>

      <div className="p-3.5 space-y-3">
        {/* Car Top Blueprint Mockup */}
        <div className="relative rounded-xl bg-[#090f18] border border-[#1a2538] p-4 flex items-center justify-between">
          <div className="space-y-1">
            <div className="inline-flex items-center h-3.5 rounded-xs border border-slate-700 bg-white text-slate-950 font-mono font-bold text-[7px] overflow-hidden">
              <span className="bg-[#003399] text-white px-0.5 text-[5px]">TR</span>
              <span className="px-1">34 GKH 06</span>
            </div>
            <div className="text-[11px] font-bold text-white">Audi A6 Sedan · 3 Noktada Kusur</div>
            <div className="text-[8px] text-[#738094]">Kabul Saati: 09:30 · Danışman: Rıdvan B.</div>
          </div>

          {/* Interactive Blueprint Silhouette with Damage Pins */}
          <div className="relative w-44 h-20 bg-[#0e1624] rounded-lg border border-[#1f2d40] flex items-center justify-center">
            {/* Minimal Car Outline SVG */}
            <svg viewBox="0 0 160 70" className="w-36 h-auto stroke-[#3b72ea]/60 fill-none" strokeWidth="1.5">
              <path d="M10 45 C15 35 25 32 45 30 L60 20 L105 20 L125 30 C140 32 150 35 155 45 L155 55 L10 55 Z" />
              <circle cx="35" cy="55" r="9" />
              <circle cx="125" cy="55" r="9" />
            </svg>
            {/* Damage Pin 1 (Front Bumper) */}
            <div className="absolute top-8 left-6 w-3 h-3 rounded-full bg-rose-500 text-[6.5px] font-bold text-white flex items-center justify-center ring-2 ring-rose-500/30 animate-pulse">
              1
            </div>
            {/* Damage Pin 2 (Door) */}
            <div className="absolute top-5 left-18 w-3 h-3 rounded-full bg-amber-400 text-[6.5px] font-bold text-slate-950 flex items-center justify-center ring-2 ring-amber-400/30">
              2
            </div>
            {/* Damage Pin 3 (Rear) */}
            <div className="absolute top-8 right-6 w-3 h-3 rounded-full bg-[#3b72ea] text-[6.5px] font-bold text-white flex items-center justify-center ring-2 ring-[#3b72ea]/30">
              3
            </div>
          </div>
        </div>

        {/* Damage Legend & Verification */}
        <div className="grid grid-cols-3 gap-2 text-[8px]">
          <div className="p-2 rounded-lg bg-[#0b121e] border border-rose-500/30 space-y-0.5">
            <span className="font-bold text-rose-400">1. Sağ Ön Tampon</span>
            <p className="text-[7.5px] text-[#738094]">Derin çizik · 2 Fotoğraf</p>
          </div>
          <div className="p-2 rounded-lg bg-[#0b121e] border border-amber-500/30 space-y-0.5">
            <span className="font-bold text-amber-400">2. Sağ Kapı Göçük</span>
            <p className="text-[7.5px] text-[#738094]">PDR onarım istendi</p>
          </div>
          <div className="p-2 rounded-lg bg-[#0b121e] border border-[#3b72ea]/30 space-y-0.5">
            <span className="font-bold text-[#8fb4ff]">3. Sol Arka Çamurluk</span>
            <p className="text-[7.5px] text-[#738094]">Lokal boya mevcut</p>
          </div>
        </div>
      </div>
    </div>
  );
}

{/* ========================================================================= */}
{/* 5. FINANCE & GİB E-INVOICE MOCKUP (Mac Desktop Window)                    */}
{/* ========================================================================= */}
function FinanceInvoiceMockup() {
  return (
    <div className="w-full rounded-2xl overflow-hidden border border-[#1e2d42] bg-[#080d15] shadow-2xl text-left select-none font-sans text-xs">
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#0b121e] border-b border-[#1a2538] text-[11px] font-mono text-[#9caac0]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-[10px] text-[#738094] ml-2">panel.worksauto.com/finance</span>
        </div>
        <div className="flex items-center gap-1 text-[9px] font-mono text-emerald-400 font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          GİB ENTEGRATÖRÜ ÇEVRİMİÇİ
        </div>
      </div>

      {/* Mini Cash Register Summary */}
      <div className="px-4 py-2 border-b border-[#162234] bg-[#090f18] grid grid-cols-3 gap-2 text-center font-mono">
        <div>
          <div className="text-[7.5px] text-[#738094] uppercase">Bugün Toplam Ciro</div>
          <div className="text-xs font-black text-white">₺48.650</div>
        </div>
        <div>
          <div className="text-[7.5px] text-[#738094] uppercase">Kredi Kartı (POS)</div>
          <div className="text-xs font-black text-[#8fb4ff]">₺34.800</div>
        </div>
        <div>
          <div className="text-[7.5px] text-[#738094] uppercase">GİB E-Fatura Kesilen</div>
          <div className="text-xs font-black text-emerald-400">14 Adet (₺0 Hata)</div>
        </div>
      </div>

      {/* 3 Live Invoice Rows */}
      <div className="p-3.5 space-y-2">
        <div className="p-2.5 rounded-xl bg-[#0b121e] border border-[#1a273a] flex items-center justify-between text-[9px]">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white">Bayar Lojistik A.Ş.</span>
              <span className="font-mono text-[8px] text-[#738094]">GİB202600000142</span>
            </div>
            <div className="text-[8px] text-[#9caac0]">Periyodik bakım ve parça faturası</div>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-mono font-bold text-white">₺18.500</span>
            <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
              ✓ Nilvera Onaylı
            </span>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-[#0b121e] border border-[#1a273a] flex items-center justify-between text-[9px]">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white">Canan Öztürk (Bireysel)</span>
              <span className="font-mono text-[8px] text-[#738094]">GİB202600000143</span>
            </div>
            <div className="text-[8px] text-[#9caac0]">Klima gaz dolumu ve dezenfeksiyon</div>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-mono font-bold text-white">₺3.250</span>
            <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
              ✓ Paraşüt İletildi
            </span>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-[#0b121e] border border-[#1a273a] flex items-center justify-between text-[9px]">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white">Gün Sonu Z-Raporu Mutabakatı</span>
              <span className="font-mono text-[8px] text-[#8fb4ff]">#Z-2026-10-02</span>
            </div>
            <div className="text-[8px] text-[#9caac0]">Kasa, POS ve Banka EFT tam uyumlu</div>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-mono font-bold text-[#8fb4ff]">₺48.650</span>
            <span className="px-2 py-0.5 rounded-md bg-[#2357c5]/20 text-[#8fb4ff] border border-[#2357c5]/30 font-bold">
              Kasa Kapandı
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

{/* ========================================================================= */}
{/* 6. INVENTORY & SHELF TRACKING MOCKUP (Mac Desktop Window)                 */}
{/* ========================================================================= */}
function InventoryMockup() {
  return (
    <div className="w-full rounded-2xl overflow-hidden border border-[#1e2d42] bg-[#080d15] shadow-2xl text-left select-none font-sans text-xs">
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#0b121e] border-b border-[#1a2538] text-[11px] font-mono text-[#9caac0]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-[10px] text-[#738094] ml-2">panel.worksauto.com/inventory</span>
        </div>
        <div className="flex items-center gap-1.5 text-[9px] font-bold text-amber-400">
          <AlertTriangle size={11} />
          2 PARÇA KRİTİK SEVİYEDE
        </div>
      </div>

      {/* Search & Stock Summary */}
      <div className="px-4 py-2 border-b border-[#162234] bg-[#090f18] flex items-center justify-between gap-3 text-[9px]">
        <div className="flex items-center gap-2 flex-1 max-w-[200px] h-6 px-2 rounded-md bg-[#0e1624] border border-[#1a2538] text-[#738094]">
          <Search size={10} />
          <span>OEM kod veya parça ara...</span>
        </div>
        <span className="text-[#8fb4ff] font-mono font-bold">Toplam Stok Değeri: ₺384.200</span>
      </div>

      {/* 3 Inventory Rows */}
      <div className="p-3.5 space-y-2">
        <div className="p-2.5 rounded-xl bg-[#0b121e] border border-amber-500/30 flex items-center justify-between text-[9px]">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white">Castrol Edge 5W-30 (4 Litre)</span>
              <span className="font-mono text-[8px] text-amber-400 bg-amber-500/10 px-1 rounded">RAF A-12</span>
            </div>
            <div className="text-[8px] text-[#738094]">OEM: CAS-5W30-4L · Alış: ₺850 · Satış: ₺1.400</div>
          </div>
          <div className="text-right">
            <span className="font-mono font-black text-amber-400 text-[10px]">3 Kutu Kaldı</span>
            <div className="text-[7.5px] text-[#738094]">Kritik sınır: 5</div>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-[#0b121e] border border-[#1a273a] flex items-center justify-between text-[9px]">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white">Bosch Ön Fren Balata Takımı</span>
              <span className="font-mono text-[8px] text-[#8fb4ff] bg-[#112038] px-1 rounded">RAF B-04</span>
            </div>
            <div className="text-[8px] text-[#738094]">OEM: 0986424797 · VAG Grubu Muadil</div>
          </div>
          <div className="text-right">
            <span className="font-mono font-black text-emerald-400 text-[10px]">14 Takım</span>
            <div className="text-[7.5px] text-emerald-400">Yeterli</div>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-[#0b121e] border border-[#1a273a] flex items-center justify-between text-[9px]">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white">Mann Yağ Filtresi HU 711/51</span>
              <span className="font-mono text-[8px] text-[#8fb4ff] bg-[#112038] px-1 rounded">RAF C-02</span>
            </div>
            <div className="text-[8px] text-[#738094]">OEM: HU71151X · Bmw & Mercedes uyumlu</div>
          </div>
          <div className="text-right">
            <span className="font-mono font-black text-emerald-400 text-[10px]">22 Adet</span>
            <div className="text-[7.5px] text-emerald-400">Yeterli</div>
          </div>
        </div>
      </div>
    </div>
  );
}
