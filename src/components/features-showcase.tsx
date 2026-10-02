"use client";

import * as React from "react";
import {
  Wrench,
  Smartphone,
  Sparkles,
  Car,
  Receipt,
  Package,
  Check,
  ArrowRight,
  Search,
  Plus,
  Clock,
  CheckCircle2,
  AlertCircle,
  FileText,
  Flame,
  Camera,
  CreditCard,
  MessageCircle,
  Layers,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function FeaturesShowcase() {
  const [activeTab, setActiveTab] = React.useState<string>("WORK_ORDERS");

  const tabs = [
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
      isMobilePhone: false,
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
      isMobilePhone: false,
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
      isMobilePhone: false,
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
      isMobilePhone: false,
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
      isMobilePhone: false,
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

        {/* Tab Navigation Pill Bar */}
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

        {/* Active Tab Detailed View Container */}
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
          <div className="lg:col-span-7 flex justify-center items-center relative z-10 w-full min-h-[440px]">
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
{/* Exact 1:1 replica of WorksAuto /work-orders Kanban Board                 */}
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
          <span className="text-[10px] text-[#738094] ml-2">panel.worksauto.com.tr/work-orders</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-[#8fb4ff]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>CANLI ATÖLYE PANOSU</span>
        </div>
      </div>

      {/* Real Work Orders Metric Bar */}
      <div className="p-3 bg-[#090f18] border-b border-[#162234] grid grid-cols-4 gap-2">
        <div className="p-2 rounded-xl bg-[#0c1421] border border-[#1a273a]">
          <div className="flex items-center justify-between text-[#738094] text-[8.5px] font-bold uppercase">
            <span>İşlemde</span>
            <Wrench size={11} className="text-[#8fb4ff]" />
          </div>
          <div className="font-heading font-black text-sm text-white mt-0.5">3</div>
          <div className="text-[7.5px] text-emerald-400 font-medium flex items-center gap-1 mt-0.5">
            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
            Atölyede aktif
          </div>
        </div>

        <div className="p-2 rounded-xl bg-[#0c1421] border border-[#1a273a]">
          <div className="flex items-center justify-between text-[#738094] text-[8.5px] font-bold uppercase">
            <span>Sırada</span>
            <Clock size={11} className="text-amber-400" />
          </div>
          <div className="font-heading font-black text-sm text-amber-400 mt-0.5">2</div>
          <div className="text-[7.5px] text-[#738094] mt-0.5">Kabul bekliyor</div>
        </div>

        <div className="p-2 rounded-xl bg-[#0c1421] border border-[#1a273a]">
          <div className="flex items-center justify-between text-[#738094] text-[8.5px] font-bold uppercase">
            <span>Hazır</span>
            <CheckCircle2 size={11} className="text-emerald-400" />
          </div>
          <div className="font-heading font-black text-sm text-white mt-0.5">4</div>
          <div className="text-[7.5px] text-[#738094] mt-0.5">Teslime hazır</div>
        </div>

        <div className="p-2 rounded-xl bg-[#0c1421] border border-[#1a273a]">
          <div className="flex items-center justify-between text-[#738094] text-[8.5px] font-bold uppercase">
            <span>Toplam</span>
            <Layers size={11} className="text-[#8fb4ff]" />
          </div>
          <div className="font-heading font-black text-sm text-white mt-0.5">9</div>
          <div className="text-[7.5px] text-[#738094] mt-0.5">Bugünkü iş emri</div>
        </div>
      </div>

      {/* Control Bar: Search & Actions */}
      <div className="px-3 py-2 bg-[#090f18] border-b border-[#162234] flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 flex-1 max-w-[220px] h-[26px] px-2 rounded-lg bg-[#0e1726] border border-[#1a273a] text-[8px] text-[#9caac0]">
          <Search size={10} className="text-[#738094]" />
          <span className="truncate">Plaka veya iş emri ara...</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-[26px] px-2 rounded-lg bg-[#0e1726] border border-[#1a273a] text-[8px] font-bold text-[#8fb4ff] flex items-center gap-1">
            <span>Tüm Ustalar</span>
            <ChevronDown size={8} />
          </div>
          <div className="h-[26px] px-2.5 rounded-lg bg-[#2357c5] text-white text-[8px] font-bold flex items-center gap-1 shadow-xs">
            <Plus size={10} />
            <span>İş Emri Aç</span>
          </div>
        </div>
      </div>

      {/* 3 Real WorksAuto Kanban Columns */}
      <div className="p-3 grid grid-cols-3 gap-2.5 bg-[#080d15]">
        {/* Column 1: Sırada Bekleyen */}
        <div className="rounded-xl bg-[#0b121e] border border-[#182638] p-2.5 space-y-2">
          <div className="flex items-center justify-between pb-1.5 border-b border-[#162234]">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="font-heading font-extrabold text-[9px] text-white uppercase">1. Sırada</span>
            </div>
            <span className="text-[8px] font-mono font-bold px-1.5 py-0.5 rounded-md bg-[#131d2c] text-amber-300">2</span>
          </div>

          {/* Card 1 */}
          <div className="p-2 rounded-xl bg-[#0e1726] border border-[#1f3047] space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center h-4 rounded-xs border border-slate-700 bg-white text-slate-950 font-mono font-bold text-[7.5px] overflow-hidden">
                <span className="bg-[#003399] text-white px-1 text-[5.5px] font-sans font-bold flex items-center h-full">TR</span>
                <span className="px-1.5">34 RDV 5858</span>
              </div>
              <span className="text-[7.5px] font-mono font-bold text-[#8fb4ff]">#WO-0042</span>
            </div>
            <div>
              <div className="text-[9px] font-bold text-white truncate">Porsche 911 GT3</div>
              <div className="text-[7.5px] text-[#738094] truncate">Rıdvan Emre Bayar</div>
            </div>
            <div className="flex items-center justify-between text-[7.5px] pt-1 border-t border-[#182638]">
              <span className="text-[#8fb4ff]">Arıza Tespiti</span>
              <span className="font-mono font-bold text-white">₺1.200</span>
            </div>
          </div>
        </div>

        {/* Column 2: Liftte / İşlemde */}
        <div className="rounded-xl bg-[#0b121e] border border-[#182638] p-2.5 space-y-2">
          <div className="flex items-center justify-between pb-1.5 border-b border-[#162234]">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2357c5] animate-pulse" />
              <span className="font-heading font-extrabold text-[9px] text-[#8fb4ff] uppercase">2. Liftte</span>
            </div>
            <span className="text-[8px] font-mono font-bold px-1.5 py-0.5 rounded-md bg-[#131d2c] text-[#8fb4ff]">3</span>
          </div>

          {/* Card 1 */}
          <div className="p-2 rounded-xl bg-[#0e1726] border border-[#2357c5]/60 space-y-1.5 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center h-4 rounded-xs border border-slate-700 bg-white text-slate-950 font-mono font-bold text-[7.5px] overflow-hidden">
                <span className="bg-[#003399] text-white px-1 text-[5.5px] font-sans font-bold flex items-center h-full">TR</span>
                <span className="px-1.5">34 GKH 06</span>
              </div>
              <span className="text-[7.5px] font-mono font-bold text-emerald-400">Lift 1</span>
            </div>
            <div>
              <div className="text-[9px] font-bold text-white truncate">Audi A6 2.0 TDI</div>
              <div className="text-[7.5px] text-[#738094] truncate">Gökhan Yılmaz • Murat Usta</div>
            </div>
            <div className="flex items-center justify-between text-[7.5px] pt-1 border-t border-[#182638]">
              <span className="text-emerald-400">Periyodik Bakım</span>
              <span className="font-mono font-bold text-white">₺4.850</span>
            </div>
          </div>
        </div>

        {/* Column 3: Tamamlandı / Teslime Hazır */}
        <div className="rounded-xl bg-[#0b121e] border border-[#182638] p-2.5 space-y-2">
          <div className="flex items-center justify-between pb-1.5 border-b border-[#162234]">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="font-heading font-extrabold text-[9px] text-white uppercase">3. Hazır</span>
            </div>
            <span className="text-[8px] font-mono font-bold px-1.5 py-0.5 rounded-md bg-[#131d2c] text-emerald-300">4</span>
          </div>

          {/* Card 1 */}
          <div className="p-2 rounded-xl bg-[#0e1726] border border-[#1f3047] space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center h-4 rounded-xs border border-slate-700 bg-white text-slate-950 font-mono font-bold text-[7.5px] overflow-hidden">
                <span className="bg-[#003399] text-white px-1 text-[5.5px] font-sans font-bold flex items-center h-full">TR</span>
                <span className="px-1.5">06 ANK 2026</span>
              </div>
              <span className="text-[7px] font-bold text-emerald-400 bg-emerald-950/40 px-1 py-0.5 rounded border border-emerald-800">Faturalandı</span>
            </div>
            <div>
              <div className="text-[9px] font-bold text-white truncate">BMW 520i M Sport</div>
              <div className="text-[7.5px] text-[#738094] truncate">Mehmet Kaya</div>
            </div>
            <div className="flex items-center justify-between text-[7.5px] pt-1 border-t border-[#182638]">
              <span className="text-[#9caac0]">Ön Fren Diski</span>
              <span className="font-mono font-bold text-white">₺8.400</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{/* ========================================================================= */}
{/* 2. CUSTOMER TRACKING PORTAL MOCKUP (Slender iPhone 16 Pro)                */}
{/* Exact 1:1 replica of WorksAuto /track/[token]                            */}
{/* ========================================================================= */}
function CustomerPortalMockup() {
  return (
    <div className="relative w-full flex items-center justify-center py-2">
      {/* Background Studio Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#2357c5]/25 rounded-full blur-[80px] pointer-events-none -z-10" />

      {/* Main Slender iPhone 16 Pro Chassis */}
      <div className="relative w-[280px] sm:w-[290px] drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
        {/* Physical buttons */}
        <div className="absolute -left-[3px] top-14 w-[3px] h-5 bg-[#3a4454] rounded-l-sm border-l border-white/20" />
        <div className="absolute -left-[3px] top-24 w-[3px] h-8 bg-[#3a4454] rounded-l-sm border-l border-white/20" />
        <div className="absolute -left-[3px] top-35 w-[3px] h-8 bg-[#3a4454] rounded-l-sm border-l border-white/20" />
        <div className="absolute -right-[3px] top-24 w-[3px] h-12 bg-[#3a4454] rounded-r-sm border-r border-white/20" />

        {/* Natural Titanium Frame */}
        <div className="rounded-[42px] p-2 bg-gradient-to-b from-[#3a4556] via-[#222a36] to-[#141a24] border-[2px] border-[#4a576c] ring-1 ring-white/10 shadow-2xl">
          {/* Display Glass */}
          <div className="rounded-[34px] bg-[#070b12] border border-black overflow-hidden h-[485px] flex flex-col justify-between font-sans text-xs text-left shadow-inner">
            {/* Top Status Bar & App Header */}
            <div className="p-2.5 pb-2 space-y-1.5 border-b border-[#162234]">
              {/* Apple Status Bar */}
              <div className="flex items-center justify-between px-1 text-[9px] select-none">
                <span className="font-bold text-white font-mono">09:43</span>
                <div className="w-16 h-3.5 bg-black rounded-full flex items-center justify-between px-2 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0a1525]" />
                  <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <span className="text-[8px] font-mono text-[#9caac0]">5G 100%</span>
              </div>

              {/* Exact 1:1 WorksAuto Tracking Header */}
              <div className="flex items-center justify-between pt-0.5">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-auto flex items-center">
                    <span className="font-black text-white text-[11px] tracking-tight">Works<span className="text-[#8fb4ff]">Auto</span></span>
                  </div>
                  <span className="h-3 w-px bg-slate-700" />
                  <div className="leading-none">
                    <div className="text-[8px] font-bold text-white uppercase">Bayar Oto Servis</div>
                    <div className="text-[6.5px] text-[#738094]">İstanbul / Başakşehir</div>
                  </div>
                </div>
                <div className="w-4 h-4 rounded-full bg-[#131d2c] border border-slate-700 flex items-center justify-center text-[7px] text-[#8fb4ff]">
                  🌙
                </div>
              </div>
            </div>

            {/* Content Body (Exact /track/[token] View) */}
            <div className="flex-1 p-2.5 space-y-2 overflow-hidden">
              {/* Page Title */}
              <div>
                <span className="text-[7px] font-extrabold uppercase tracking-widest text-[#8fb4ff] font-mono">
                  BAYAR OTO SERVİS · CANLI TAKİP
                </span>
                <h4 className="text-[11px] font-black text-white font-heading">
                  Aracınızın servisteki durumu
                </h4>
              </div>

              {/* Hero Vehicle Card */}
              <div className="p-2 rounded-xl bg-[#0c1422] border border-[#1e2f45] space-y-1.5">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[6.5px] font-mono text-[#738094] uppercase">SERVİS KAYDI · #VO-00001</span>
                    <div className="text-[10px] font-black text-white">Porsche 911 GT3</div>
                    <div className="text-[7px] text-[#738094]">2026 Model • Rıdvan Emre Bayar</div>
                  </div>
                  <div className="inline-flex items-center h-3.5 rounded-xs border border-slate-700 bg-white text-slate-950 font-mono font-bold text-[7px] overflow-hidden shrink-0">
                    <span className="bg-[#003399] text-white px-1 text-[4.5px] font-sans font-bold flex items-center h-full">TR</span>
                    <span className="px-1">34 RDV 5858</span>
                  </div>
                </div>

                {/* Status Box */}
                <div className="p-1.5 rounded-lg bg-[#2357c5]/15 border border-[#2357c5]/40 space-y-0.5">
                  <div className="flex items-center justify-between text-[7.5px]">
                    <span className="font-extrabold uppercase text-[#8fb4ff]">Şu Anki Durum</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Bakımda
                    </span>
                  </div>
                  <p className="text-[7px] text-[#c2d4ea] leading-tight">
                    Aracınız lifte alındı. Teknisyenimiz planlanan işlemleri titizlikle yürütüyor.
                  </p>
                  <div className="text-[6.5px] text-[#738094] pt-0.5 border-t border-[#2357c5]/20">
                    İlgilenen Teknisyen: <strong className="text-white">Ahmet Usta (Lift 2)</strong>
                  </div>
                </div>
              </div>

              {/* Stepper Timeline (Exact 1:1 3-Step Horizontal Component) */}
              <div className="p-2 rounded-xl bg-[#0c1422] border border-[#1e2f45] space-y-1.5">
                <div className="flex items-center justify-between text-[7.5px]">
                  <span className="font-bold text-white">Servis Süreci</span>
                  <span className="text-[#8fb4ff] font-bold font-mono text-[7px]">2 / 3 AŞAMA</span>
                </div>

                <div className="grid grid-cols-3 gap-1 relative text-center">
                  {/* Step 1 */}
                  <div className="flex flex-col items-center">
                    <div className="w-5 h-5 rounded-full bg-[#2357c5] text-white flex items-center justify-center text-[8px] font-bold shadow-xs">
                      ✓
                    </div>
                    <span className="text-[7px] font-bold text-white mt-0.5">Kabul</span>
                    <span className="text-[6px] text-emerald-400">Tamamlandı</span>
                  </div>
                  {/* Step 2 (Active) */}
                  <div className="flex flex-col items-center">
                    <div className="w-5 h-5 rounded-full bg-[#2357c5] border border-white text-white flex items-center justify-center text-[8px] font-bold shadow-md shadow-[#2357c5]/50 animate-pulse">
                      2
                    </div>
                    <span className="text-[7px] font-bold text-[#8fb4ff] mt-0.5">Bakımda</span>
                    <span className="text-[6px] text-[#8fb4ff]">Lift 2'de</span>
                  </div>
                  {/* Step 3 */}
                  <div className="flex flex-col items-center">
                    <div className="w-5 h-5 rounded-full bg-[#131d2c] border border-slate-700 text-[#738094] flex items-center justify-center text-[8px] font-bold">
                      3
                    </div>
                    <span className="text-[7px] font-bold text-[#738094] mt-0.5">Teslim</span>
                    <span className="text-[6px] text-[#738094]">Hazırlanıyor</span>
                  </div>
                </div>
              </div>

              {/* Photo & Part Check Card */}
              <div className="p-2 rounded-xl bg-[#0c1422] border border-[#1e2f45] space-y-1">
                <div className="flex items-center justify-between text-[7.5px]">
                  <span className="font-bold text-white flex items-center gap-1">
                    <Camera size={8.5} className="text-[#8fb4ff]" />
                    Ekspertiz & Fotoğraflar
                  </span>
                  <span className="text-[6.5px] text-[#738094]">2 Görsel</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-8 rounded-md bg-[#142032] border border-slate-700 overflow-hidden flex items-center justify-center text-[6.5px] text-[#8fb4ff] shrink-0">
                    📷 Kabul
                  </div>
                  <div className="text-[7px] text-[#9caac0] leading-tight">
                    Kabul anı kilometre ve ekspertiz kontrolü yapıldı.
                  </div>
                </div>
              </div>
            </div>

            {/* Apple Home Bar */}
            <div className="p-1.5 bg-[#090f18] border-t border-[#162234] text-center">
              <div className="w-20 h-1 bg-white/40 rounded-full mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{/* ========================================================================= */}
{/* 3. GROWTH RADAR & CRM MOCKUP (Mac Desktop Window)                         */}
{/* Exact 1:1 replica of WorksAuto /growth page                               */}
{/* ========================================================================= */}
function GrowthRadarMockup() {
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
          <span className="text-[10px] text-[#738094] ml-2">panel.worksauto.com.tr/growth</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-bold text-amber-400">
          <Flame size={12} />
          <span>3 ACİL AKSİYON TESPİT EDİLDİ</span>
        </div>
      </div>

      <div className="p-3.5 space-y-3 bg-[#080d15]">
        {/* Real Revenue Radar Hero Banner (Exact from WorksAuto /growth) */}
        <div className="relative overflow-hidden rounded-xl border border-slate-700 bg-gradient-to-r from-[#121c29] via-[#0f1926] to-[#121c29] p-3 text-white shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full text-[8.5px] font-black uppercase tracking-wider bg-white/10 border border-white/20 text-sky-200">
                  Canlı Kazanç Potansiyeli
                </span>
                <span className="px-2 py-0.5 rounded-full text-[8.5px] font-bold bg-rose-500/30 text-rose-200 border border-rose-400/30">
                  🔥 3 Acil Aksiyon
                </span>
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-xl font-heading font-black text-white">₺142.800</span>
                <span className="text-[8.5px] text-sky-200">kurtarılabilir bakiye & bekleyen teklif cirosu</span>
              </div>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-[#2357c5] hover:bg-[#1d4bb0] text-white text-[9px] font-bold flex items-center gap-1 cursor-pointer shadow-xs">
              <Flame size={11} />
              <span>Acil Fırsatları Gör</span>
            </div>
          </div>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-4 gap-2">
          <div className="p-2 rounded-xl bg-[#0b121e] border border-[#1a273a]">
            <div className="text-[8px] font-bold text-[#738094] uppercase truncate">Kurtarılabilir Alacak</div>
            <div className="text-xs font-black text-white font-mono mt-0.5">₺48.600</div>
            <div className="text-[7.5px] text-[#738094] mt-0.5">8 Açık Fatura</div>
          </div>

          <div className="p-2 rounded-xl bg-[#0b121e] border border-[#1a273a]">
            <div className="text-[8px] font-bold text-[#738094] uppercase truncate">Bekleyen Teklif</div>
            <div className="text-xs font-black text-white font-mono mt-0.5">₺62.400</div>
            <div className="text-[7.5px] text-[#738094] mt-0.5">5 Teklif Onayda</div>
          </div>

          <div className="p-2 rounded-xl bg-[#0b121e] border border-[#1a273a]">
            <div className="text-[8px] font-bold text-[#738094] uppercase truncate">Periyodik Bakım</div>
            <div className="text-xs font-black text-white font-mono mt-0.5">₺21.800</div>
            <div className="text-[7.5px] text-[#738094] mt-0.5">14 Araç Vakti Geldi</div>
          </div>

          <div className="p-2 rounded-xl bg-[#0b121e] border border-[#1a273a]">
            <div className="text-[8px] font-bold text-[#738094] uppercase truncate">Muayene / TÜVTÜRK</div>
            <div className="text-xs font-black text-white font-mono mt-0.5">12 Araç</div>
            <div className="text-[7.5px] text-[#738094] mt-0.5">30 Gün İçinde</div>
          </div>
        </div>

        {/* Real Opportunity Action Rows (Exact from WorksAuto /growth) */}
        <div className="space-y-1.5">
          {/* Row 1: Geciken Alacak */}
          <div className="p-2.5 rounded-xl bg-[#0c1422] border border-[#1b2b3f] flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-6 h-6 rounded-lg bg-rose-950/60 border border-rose-800 text-rose-400 flex items-center justify-center shrink-0">
                <Receipt size={12} />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[7.5px] font-bold text-rose-400 bg-rose-950/80 px-1 py-0.5 rounded border border-rose-800/80">
                    Geciken Alacak
                  </span>
                  <span className="text-[9px] font-bold text-white truncate">Fatura #FAT-2026-0082</span>
                  <span className="text-[7.5px] text-[#738094]">34 RDV 5858 · Porsche 911</span>
                </div>
                <div className="text-[8px] text-[#9caac0] mt-0.5">
                  Rıdvan Emre Bayar · <strong className="text-rose-400 font-mono">₺18.500</strong> (Vadesi 14 gün geçti)
                </div>
              </div>
            </div>
            <div className="px-2.5 py-1 rounded-lg bg-[#2357c5] hover:bg-[#1d4bb0] text-white text-[8px] font-bold flex items-center gap-1 cursor-pointer shrink-0">
              <MessageCircle size={10} />
              <span>WhatsApp Hatırlat</span>
            </div>
          </div>

          {/* Row 2: Bekleyen Teklif */}
          <div className="p-2.5 rounded-xl bg-[#0c1422] border border-[#1b2b3f] flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-6 h-6 rounded-lg bg-sky-950/60 border border-sky-800 text-sky-400 flex items-center justify-center shrink-0">
                <FileText size={12} />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[7.5px] font-bold text-sky-400 bg-sky-950/80 px-1 py-0.5 rounded border border-sky-800/80">
                    Bekleyen Teklif
                  </span>
                  <span className="text-[9px] font-bold text-white truncate">Teklif #TEK-2026-0034</span>
                  <span className="text-[7.5px] text-[#738094]">34 GKH 06 · Audi A6</span>
                </div>
                <div className="text-[8px] text-[#9caac0] mt-0.5">
                  Gökhan Yılmaz · <strong className="text-sky-300 font-mono">₺12.400</strong> (3 gündür onayda)
                </div>
              </div>
            </div>
            <div className="px-2.5 py-1 rounded-lg bg-[#142032] border border-[#2357c5] text-[#8fb4ff] text-[8px] font-bold flex items-center gap-1 cursor-pointer shrink-0">
              <MessageCircle size={10} />
              <span>Teklif Linki Gönder</span>
            </div>
          </div>

          {/* Row 3: Periyodik Bakım */}
          <div className="p-2.5 rounded-xl bg-[#0c1422] border border-[#1b2b3f] flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-6 h-6 rounded-lg bg-amber-950/60 border border-amber-800 text-amber-400 flex items-center justify-center shrink-0">
                <Wrench size={12} />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[7.5px] font-bold text-amber-400 bg-amber-950/80 px-1 py-0.5 rounded border border-amber-800/80">
                    Bakım Vakti
                  </span>
                  <span className="text-[9px] font-bold text-white truncate">06 ANK 2026 · BMW 520i</span>
                </div>
                <div className="text-[8px] text-[#9caac0] mt-0.5">
                  Mehmet Kaya · Son bakım 6 ay önce (+12.000 KM aşıldı)
                </div>
              </div>
            </div>
            <div className="px-2.5 py-1 rounded-lg bg-[#142032] border border-slate-700 text-white text-[8px] font-bold flex items-center gap-1 cursor-pointer shrink-0">
              <MessageCircle size={10} />
              <span>Bakım Daveti At</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{/* ========================================================================= */}
{/* 4. 360° WORKSHOP DIGITAL TWIN MOCKUP (Mac Desktop Window)                 */}
{/* Exact CAD SVG Hydraulic Lift from WorksAuto Digital Twin Component        */}
{/* ========================================================================= */}
function DigitalTwinMockup() {
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
          <span className="text-[10px] text-[#738094] ml-2">panel.worksauto.com.tr/digital-twin</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-[#8fb4ff]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>CANLI LİFT SİMÜLASYONU</span>
        </div>
      </div>

      {/* Sub-bar: Zone Tabs */}
      <div className="px-3.5 py-2 bg-[#090f18] border-b border-[#162234] flex items-center justify-between text-[8px]">
        <div className="flex items-center gap-1.5">
          <span className="px-2 py-1 rounded-md bg-[#2357c5] text-white font-bold">Tüm Liftler (6)</span>
          <span className="px-2 py-1 rounded-md bg-[#0e1726] text-[#738094] border border-[#1a273a]">Mekanik (3)</span>
          <span className="px-2 py-1 rounded-md bg-[#0e1726] text-[#738094] border border-[#1a273a]">Ön Düzen (1)</span>
          <span className="px-2 py-1 rounded-md bg-[#0e1726] text-[#738094] border border-[#1a273a]">Hızlı Servis (2)</span>
        </div>
        <span className="text-[#738094] font-mono">Dükkan Doluluğu: %83</span>
      </div>

      {/* 2 Hydraulic Lift Bays (CAD SVG Lift Rendering) */}
      <div className="p-3.5 grid grid-cols-2 gap-3 bg-[#080d15]">
        {/* Bay 1: Lift 1 in Air (BMW 520i) */}
        <div className="p-3 rounded-xl bg-[#0a101a] border border-[#1a273a] space-y-2">
          <div className="flex items-center justify-between text-[8.5px]">
            <div className="font-bold text-white">Lift 1 — Ön Düzen & Mekanik</div>
            <span className="px-1.5 py-0.5 rounded text-[7.5px] font-bold bg-amber-950/60 text-amber-300 border border-amber-800">
              ● LİFTTE (HAVADA)
            </span>
          </div>

          {/* Authentic SVG 2-Post Hydraulic Lift CAD View */}
          <div className="relative w-full h-[140px] bg-[#070c14] rounded-lg border border-[#152030] overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 340 195" className="w-full h-full select-none">
              {/* Floor Plate */}
              <line x1="20" y1="180" x2="320" y2="180" stroke="#334155" strokeDasharray="6 4" strokeWidth="1" opacity="0.4" />
              <rect x="52" y="177" width="236" height="5" rx="1.5" fill="#1e293b" stroke="#334155" strokeWidth="0.8" />
              
              {/* Left Column */}
              <rect x="50" y="20" width="18" height="155" rx="2" fill="#1f2c3d" stroke="#090d16" strokeWidth="1.2" />
              <rect x="54" y="24" width="10" height="147" fill="#090d16" />
              <rect x="51" y="22" width="16" height="3" fill="#dc2626" rx="0.8" />
              {/* Right Column */}
              <rect x="272" y="20" width="18" height="155" rx="2" fill="#1f2c3d" stroke="#090d16" strokeWidth="1.2" />
              <rect x="276" y="24" width="10" height="147" fill="#090d16" />
              <rect x="273" y="22" width="16" height="3" fill="#dc2626" rx="0.8" />

              {/* Red Hydraulic Lift Carriage (In Air: y=70) */}
              <rect x="42" y="70" width="14" height="24" rx="2" fill="#dc2626" />
              <rect x="284" y="70" width="14" height="24" rx="2" fill="#dc2626" />
              {/* Lift Arm Bridge */}
              <rect x="54" y="86" width="232" height="4" fill="#ef4444" opacity="0.8" />

              {/* Elevated Car Silhouette on Lift */}
              <g transform="translate(85, 45)">
                {/* Car Body */}
                <path d="M 15 50 Q 25 15 55 10 L 115 10 Q 145 15 155 50 Z" fill="#334155" stroke="#475569" strokeWidth="1.5" />
                <rect x="20" y="35" width="130" height="25" rx="4" fill="#1e293b" stroke="#475569" strokeWidth="1" />
                {/* Windshield */}
                <path d="M 30 35 L 55 15 L 115 15 L 140 35 Z" fill="#0f172a" />
                {/* Headlights */}
                <ellipse cx="30" cy="45" rx="6" ry="4" fill="#38bdf8" />
                <ellipse cx="140" cy="45" rx="6" ry="4" fill="#38bdf8" />
                {/* TR Plate */}
                <rect x="65" y="47" width="40" height="10" rx="1" fill="white" stroke="#0f172a" strokeWidth="0.8" />
                <rect x="65" y="47" width="8" height="10" fill="#003399" />
                <text x="76" y="55" fontSize="6" fontFamily="monospace" fontWeight="bold" fill="black">34 RDV 58</text>
              </g>
            </svg>
          </div>

          <div className="flex items-center justify-between text-[7.5px] pt-1 border-t border-[#162234]">
            <div>
              <span className="font-bold text-white">BMW 520i M Sport</span>
              <div className="text-[#738094]">Ahmet Usta · 18:00 Teslim</div>
            </div>
            <div className="px-2 py-1 rounded bg-[#2357c5] text-white font-bold cursor-pointer">
              İncele →
            </div>
          </div>
        </div>

        {/* Bay 2: Lift 2 on Ground (Mercedes-Benz E 200d) */}
        <div className="p-3 rounded-xl bg-[#0a101a] border border-[#1a273a] space-y-2">
          <div className="flex items-center justify-between text-[8.5px]">
            <div className="font-bold text-white">Lift 2 — Periyodik Bakım</div>
            <span className="px-1.5 py-0.5 rounded text-[7.5px] font-bold bg-emerald-950/60 text-emerald-300 border border-emerald-800">
              ● TESLİME HAZIR
            </span>
          </div>

          {/* Authentic SVG 2-Post Hydraulic Lift CAD View (Ground) */}
          <div className="relative w-full h-[140px] bg-[#070c14] rounded-lg border border-[#152030] overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 340 195" className="w-full h-full select-none">
              {/* Floor Plate */}
              <line x1="20" y1="180" x2="320" y2="180" stroke="#334155" strokeDasharray="6 4" strokeWidth="1" opacity="0.4" />
              <rect x="52" y="177" width="236" height="5" rx="1.5" fill="#1e293b" stroke="#334155" strokeWidth="0.8" />

              {/* Left Column */}
              <rect x="50" y="20" width="18" height="155" rx="2" fill="#1f2c3d" stroke="#090d16" strokeWidth="1.2" />
              <rect x="54" y="24" width="10" height="147" fill="#090d16" />
              <rect x="51" y="22" width="16" height="3" fill="#dc2626" rx="0.8" />
              {/* Right Column */}
              <rect x="272" y="20" width="18" height="155" rx="2" fill="#1f2c3d" stroke="#090d16" strokeWidth="1.2" />
              <rect x="276" y="24" width="10" height="147" fill="#090d16" />
              <rect x="273" y="22" width="16" height="3" fill="#dc2626" rx="0.8" />

              {/* Red Hydraulic Carriage (Ground: y=140) */}
              <rect x="42" y="140" width="14" height="24" rx="2" fill="#dc2626" />
              <rect x="284" y="140" width="14" height="24" rx="2" fill="#dc2626" />

              {/* Car Silhouette at Ground Level */}
              <g transform="translate(85, 110)">
                <path d="M 15 50 Q 25 15 55 10 L 115 10 Q 145 15 155 50 Z" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
                <rect x="20" y="35" width="130" height="25" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1" />
                <path d="M 30 35 L 55 15 L 115 15 L 140 35 Z" fill="#090d16" />
                <ellipse cx="30" cy="45" rx="6" ry="4" fill="#38bdf8" />
                <ellipse cx="140" cy="45" rx="6" ry="4" fill="#38bdf8" />
                {/* TR Plate */}
                <rect x="65" y="47" width="40" height="10" rx="1" fill="white" stroke="#0f172a" strokeWidth="0.8" />
                <rect x="65" y="47" width="8" height="10" fill="#003399" />
                <text x="76" y="55" fontSize="6" fontFamily="monospace" fontWeight="bold" fill="black">06 ANK 20</text>
              </g>
            </svg>
          </div>

          <div className="flex items-center justify-between text-[7.5px] pt-1 border-t border-[#162234]">
            <div>
              <span className="font-bold text-white">Mercedes-Benz E 200d</span>
              <div className="text-emerald-400">Mehmet Kaya · İşlem Bitti</div>
            </div>
            <div className="px-2 py-1 rounded bg-emerald-600 text-white font-bold cursor-pointer">
              Fatura Kes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{/* ========================================================================= */}
{/* 5. FINANCE & GİB E-INVOICE MOCKUP (Mac Desktop Window)                    */}
{/* Exact 1:1 replica of WorksAuto /invoices and Cash Management              */}
{/* ========================================================================= */}
function FinanceInvoiceMockup() {
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
          <span className="text-[10px] text-[#738094] ml-2">panel.worksauto.com.tr/invoices</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-emerald-400 font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>GİB ENTEGRATÖRÜ: NİLVERA & PARAŞÜT AKTİF</span>
        </div>
      </div>

      <div className="p-3.5 space-y-3 bg-[#080d15]">
        {/* Turnover & Register KPI Breakdown */}
        <div className="grid grid-cols-4 gap-2">
          <div className="p-2 rounded-xl bg-[#0c1421] border border-[#1a273a]">
            <div className="text-[7.5px] font-bold text-[#738094] uppercase">Bugünkü Ciro</div>
            <div className="text-sm font-black text-white font-mono mt-0.5">₺48.650</div>
            <div className="text-[7px] text-[#738094] mt-0.5">Nakit + Kredi Kartı</div>
          </div>

          <div className="p-2 rounded-xl bg-[#0c1421] border border-[#1a273a]">
            <div className="text-[7.5px] font-bold text-[#738094] uppercase">POS (Kredi Kartı)</div>
            <div className="text-sm font-black text-[#8fb4ff] font-mono mt-0.5">₺34.450</div>
            <div className="text-[7px] text-emerald-400 mt-0.5">PayTR Gün İçi Eşleşti</div>
          </div>

          <div className="p-2 rounded-xl bg-[#0c1421] border border-[#1a273a]">
            <div className="text-[7.5px] font-bold text-[#738094] uppercase">Nakit Kasa</div>
            <div className="text-sm font-black text-white font-mono mt-0.5">₺14.200</div>
            <div className="text-[7px] text-[#738094] mt-0.5">Kasada Mevcut</div>
          </div>

          <div className="p-2 rounded-xl bg-[#0c1421] border border-[#1a273a]">
            <div className="text-[7.5px] font-bold text-[#738094] uppercase">GİB E-Fatura</div>
            <div className="text-sm font-black text-emerald-400 font-mono mt-0.5">14 Adet</div>
            <div className="text-[7px] text-emerald-400 mt-0.5">0 Hatalı / Hepsi İletildi</div>
          </div>
        </div>

        {/* Real Invoice Table Rows */}
        <div className="rounded-xl border border-[#1a273a] bg-[#0b121e] overflow-hidden text-[8px]">
          <div className="grid grid-cols-12 px-3 py-1.5 bg-[#0e1726] border-b border-[#162234] font-bold text-[#738094] uppercase tracking-wider text-[7.5px]">
            <div className="col-span-3">Fatura No</div>
            <div className="col-span-3">Müşteri / Unvan</div>
            <div className="col-span-2">Plaka</div>
            <div className="col-span-2 text-right">Tutar</div>
            <div className="col-span-2 text-center">GİB Durumu</div>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-12 px-3 py-2 border-b border-[#162234] items-center text-white">
            <div className="col-span-3 font-mono text-[#8fb4ff] font-bold">GİB202600000142</div>
            <div className="col-span-3 font-bold truncate">Bayar Lojistik A.Ş.</div>
            <div className="col-span-2 font-mono text-[7px] text-[#9caac0]">34 RDV 5858</div>
            <div className="col-span-2 text-right font-mono font-bold">₺18.500</div>
            <div className="col-span-2 text-center">
              <span className="px-1.5 py-0.5 rounded text-[7px] font-bold bg-emerald-950/70 text-emerald-300 border border-emerald-800">
                ✓ Nilvera Onaylı
              </span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-12 px-3 py-2 border-b border-[#162234] items-center text-white">
            <div className="col-span-3 font-mono text-[#8fb4ff] font-bold">GİB202600000143</div>
            <div className="col-span-3 font-bold truncate">Ahmet Yılmaz (Bireysel)</div>
            <div className="col-span-2 font-mono text-[7px] text-[#9caac0]">34 GKH 06</div>
            <div className="col-span-2 text-right font-mono font-bold">₺4.850</div>
            <div className="col-span-2 text-center">
              <span className="px-1.5 py-0.5 rounded text-[7px] font-bold bg-emerald-950/70 text-emerald-300 border border-emerald-800">
                ✓ GİB'e İletildi
              </span>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-12 px-3 py-2 items-center text-white">
            <div className="col-span-3 font-mono text-[#8fb4ff] font-bold">GİB202600000144</div>
            <div className="col-span-3 font-bold truncate">Canan Öztürk</div>
            <div className="col-span-2 font-mono text-[7px] text-[#9caac0]">35 KSK 1912</div>
            <div className="col-span-2 text-right font-mono font-bold">₺3.250</div>
            <div className="col-span-2 text-center">
              <span className="px-1.5 py-0.5 rounded text-[7px] font-bold bg-emerald-950/70 text-emerald-300 border border-emerald-800">
                ✓ Paraşüt İletildi
              </span>
            </div>
          </div>
        </div>

        {/* Gün Sonu Z-Raporu Bar */}
        <div className="p-2.5 rounded-xl bg-[#0c1421] border border-[#1a273a] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={13} className="text-emerald-400" />
            <span className="text-[8px] text-[#9caac0]">
              Gün Sonu Kasa Mutabakatı <strong className="text-white font-mono">#Z-2026-10-02</strong> · Tüm POS ve Kasa slipleri kuruşu kuruşuna eşleşti.
            </span>
          </div>
          <span className="px-2 py-0.5 rounded bg-[#162234] border border-slate-700 text-[7.5px] font-bold text-white cursor-pointer hover:bg-[#1f3047]">
            Z-Raporu Yazdır
          </span>
        </div>
      </div>
    </div>
  );
}

{/* ========================================================================= */}
{/* 6. INVENTORY & SPARE PARTS MOCKUP (Mac Desktop Window)                    */}
{/* Exact 1:1 replica of WorksAuto /inventory                                 */}
{/* ========================================================================= */}
function InventoryMockup() {
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
          <span className="text-[10px] text-[#738094] ml-2">panel.worksauto.com.tr/inventory</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-amber-400 font-bold">
          <AlertCircle size={12} />
          <span>2 PARÇA KRİTİK STOK SEVİYESİNDE</span>
        </div>
      </div>

      <div className="p-3.5 space-y-3 bg-[#080d15]">
        {/* Inventory KPI & Search */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 flex-1 max-w-[240px] h-[26px] px-2 rounded-lg bg-[#0e1726] border border-[#1a273a] text-[8px] text-[#9caac0]">
            <Search size={10} className="text-[#738094]" />
            <span className="truncate">Parça adı, OEM kodu veya raf no ara...</span>
          </div>

          <div className="flex items-center gap-3 text-[8px]">
            <div className="text-right">
              <span className="text-[#738094]">Toplam Kalem: </span>
              <strong className="text-white font-mono">1.420 Parça</strong>
            </div>
            <div className="text-right">
              <span className="text-[#738094]">Stok Değeri: </span>
              <strong className="text-emerald-400 font-mono">₺384.200</strong>
            </div>
          </div>
        </div>

        {/* Real Inventory Table */}
        <div className="rounded-xl border border-[#1a273a] bg-[#0b121e] overflow-hidden text-[8px]">
          <div className="grid grid-cols-12 px-3 py-1.5 bg-[#0e1726] border-b border-[#162234] font-bold text-[#738094] uppercase tracking-wider text-[7.5px]">
            <div className="col-span-3">Parça Kodu / OEM</div>
            <div className="col-span-3">Parça Açıklaması</div>
            <div className="col-span-2 text-center">Raf Konumu</div>
            <div className="col-span-2 text-right">Mevcut Stok</div>
            <div className="col-span-2 text-center">Durum</div>
          </div>

          {/* Row 1: Castrol LL */}
          <div className="grid grid-cols-12 px-3 py-2 border-b border-[#162234] items-center text-white">
            <div className="col-span-3 font-mono text-[#8fb4ff] font-bold">CAS-5W30-4L</div>
            <div className="col-span-3 font-bold truncate">Castrol Edge 5W-30 LL (4L)</div>
            <div className="col-span-2 text-center">
              <span className="px-1.5 py-0.5 rounded text-[7px] font-mono font-bold bg-[#142236] border border-[#2357c5] text-[#8fb4ff]">
                RAF A-12
              </span>
            </div>
            <div className="col-span-2 text-right font-mono font-bold text-amber-400">3 Kutu</div>
            <div className="col-span-2 text-center">
              <span className="px-1.5 py-0.5 rounded text-[7px] font-bold bg-amber-950/70 text-amber-300 border border-amber-800">
                ⚠️ Kritik (Min: 5)
              </span>
            </div>
          </div>

          {/* Row 2: Bosch Balata */}
          <div className="grid grid-cols-12 px-3 py-2 border-b border-[#162234] items-center text-white">
            <div className="col-span-3 font-mono text-[#8fb4ff] font-bold">BOS-0986424797</div>
            <div className="col-span-3 font-bold truncate">Bosch Ön Fren Balata Takımı</div>
            <div className="col-span-2 text-center">
              <span className="px-1.5 py-0.5 rounded text-[7px] font-mono font-bold bg-[#142236] border border-[#2357c5] text-[#8fb4ff]">
                RAF B-04
              </span>
            </div>
            <div className="col-span-2 text-right font-mono font-bold text-white">14 Takım</div>
            <div className="col-span-2 text-center">
              <span className="px-1.5 py-0.5 rounded text-[7px] font-bold bg-emerald-950/70 text-emerald-300 border border-emerald-800">
                ✓ Yeterli
              </span>
            </div>
          </div>

          {/* Row 3: Mann Filtre */}
          <div className="grid grid-cols-12 px-3 py-2 border-b border-[#162234] items-center text-white">
            <div className="col-span-3 font-mono text-[#8fb4ff] font-bold">MAN-HU711/51</div>
            <div className="col-span-3 font-bold truncate">Mann Yağ Filtresi HU 711/51</div>
            <div className="col-span-2 text-center">
              <span className="px-1.5 py-0.5 rounded text-[7px] font-mono font-bold bg-[#142236] border border-[#2357c5] text-[#8fb4ff]">
                RAF C-02
              </span>
            </div>
            <div className="col-span-2 text-right font-mono font-bold text-white">22 Adet</div>
            <div className="col-span-2 text-center">
              <span className="px-1.5 py-0.5 rounded text-[7px] font-bold bg-emerald-950/70 text-emerald-300 border border-emerald-800">
                ✓ Yeterli
              </span>
            </div>
          </div>

          {/* Row 4: Motul 8100 */}
          <div className="grid grid-cols-12 px-3 py-2 items-center text-white">
            <div className="col-span-3 font-mono text-[#8fb4ff] font-bold">MOT-8100-5W40</div>
            <div className="col-span-3 font-bold truncate">Motul 8100 X-cess 5W-40 (5L)</div>
            <div className="col-span-2 text-center">
              <span className="px-1.5 py-0.5 rounded text-[7px] font-mono font-bold bg-[#142236] border border-[#2357c5] text-[#8fb4ff]">
                RAF A-15
              </span>
            </div>
            <div className="col-span-2 text-right font-mono font-bold text-white">8 Kutu</div>
            <div className="col-span-2 text-center">
              <span className="px-1.5 py-0.5 rounded text-[7px] font-bold bg-emerald-950/70 text-emerald-300 border border-emerald-800">
                ✓ Yeterli
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
