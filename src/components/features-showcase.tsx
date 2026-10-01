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
  mockupContent: React.ReactNode;
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
      mockupContent: (
        <div className="p-4 sm:p-6 bg-[#090e17] rounded-2xl border border-[#1f2d3d] space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between pb-3 border-b border-[#1f2d3d]">
            <span className="text-white font-bold">İş Emri #WO-2026-0842</span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
              LİFTTE • İŞLEMDE
            </span>
          </div>
          <div className="flex items-center justify-between text-[#9caac0]">
            <span>Araç: 34 BVR 198 (BMW 320i)</span>
            <span>Müşteri: Sinan Kaya</span>
          </div>
          <div className="space-y-1.5 pt-2">
            <div className="p-2.5 rounded-xl bg-[#111a26] border border-[#1f2d3d] flex justify-between">
              <span>Ön Fren Disk & Balata Takımı</span>
              <span className="text-white font-bold">₺9,500</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#111a26] border border-[#1f2d3d] flex justify-between">
              <span>Fren Değişim & Hava Alma İşçiliği</span>
              <span className="text-[#8fb4ff] font-bold">₺2,500</span>
            </div>
          </div>
          <div className="pt-2 border-t border-[#1f2d3d] flex justify-between font-bold text-sm">
            <span className="text-[#9caac0]">Genel Toplam:</span>
            <span className="text-emerald-400">₺12,000</span>
          </div>
        </div>
      ),
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
      mockupContent: (
        <div className="p-4 sm:p-6 bg-[#090e17] rounded-2xl border border-[#1f2d3d] space-y-4 text-xs">
          <div className="text-center pb-3 border-b border-[#1f2d3d]">
            <span className="text-[10px] font-mono text-[#8fb4ff] uppercase">Müşteri Mobil Ekranı</span>
            <h4 className="text-sm font-bold text-white font-heading mt-0.5">Bayar Maslak Oto Servis</h4>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <CheckCircle2 size={14} />
              <span className="font-semibold">Araç Kabul & Çizik Ekspertizi Tamamlandı</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-xl bg-[#2357c5]/20 border border-[#3b72ea]/30 text-white">
              <span className="w-2 h-2 rounded-full bg-[#8fb4ff] animate-ping" />
              <span className="font-semibold">Lift 02'de Mekanik Onarım Sürüyor</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-xl bg-[#111a26] text-[#9caac0]">
              <span className="w-2 h-2 rounded-full bg-slate-600" />
              <span>Yol Testi & Son Kontrol</span>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-[#162232] border border-[#2a384b] text-center">
            <span className="text-[11px] text-[#edf3fa]">Tahmini Teslimat: <strong>Bugün 17:30</strong></span>
          </div>
        </div>
      ),
    },
    {
      id: "GROWTH_RADAR",
      badge: "GELİR ARTIRMA (CRM)",
      title: "Kazanç Fırsat Radarı & Bakiye Hatırlatıcı",
      headline: "Hiçbir alacağınız ve periyodik bakım müşteriniz kaybolmasın.",
      desc: "TÜVTÜRK muayenesi yaklaşan araçları, vadesi geçmiş veresiye borçları ve 6 aydır servise uğramayan eski müşterileri yapay zekâ destekli radarla anında yakalayın. Tek tıkla kurumsal WhatsApp mesajı gönderin.",
      icon: Sparkles,
      highlights: [
        "Vadesi geçen açık hesaplara tek tık WhatsApp bakiye hatırlatma",
        "45 gün kala TÜVTÜRK ön muayene kontrol randevusu daveti",
        "Onay bekleyen tekliflere parmak imzası onay linki gönderme",
        "6+ aydır servise gelmeyen kayıp müşterileri periyodik bakıma geri çağırma",
      ],
      mockupContent: (
        <div className="p-4 sm:p-6 bg-[#090e17] rounded-2xl border border-[#1f2d3d] space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-[#1f2d3d]">
            <span className="text-amber-400 font-bold flex items-center gap-1.5">
              <Sparkles size={14} /> Geciken Alacak Uyarısı
            </span>
            <span className="text-[#9caac0] text-[10px]">18 Gün Gecikmede</span>
          </div>
          <p className="text-white text-[11px] leading-relaxed">
            Fatura #INV-2026-0312 • Bakiye: <strong className="text-rose-400">₺14,250</strong>
          </p>
          <div className="p-2.5 rounded-xl bg-[#111a26] border border-[#1f2d3d] text-[11px] text-[#9caac0] font-sans">
            "Sayın Burak Bey, 34 EMR 45 plakalı aracınızın açık servis bakiyesini hatırlatmak isteriz..."
          </div>
          <button
            type="button"
            className="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all font-sans"
          >
            <Send size={13} />
            <span>Tek Tıkla WhatsApp Hatırlatması Gönder</span>
          </button>
        </div>
      ),
    },
    {
      id: "DIGITAL_TWIN",
      badge: "GÜVEN & KORUMA",
      title: "360° Dijital İkiz & Çizik Ekspertiz Şablonu",
      headline: "'Bu çizik serviste mi oldu?' tartışmalarına kesin son.",
      desc: "Araç kabul anında sedan, SUV veya hatchback gövde şablonu üzerinde mevcut çizik, göçük ve boya durumunu dokunmatik olarak işaretleyin. Fotoğraf çekip müşteriye imzalatın, servisinizin itibarını koruyun.",
      icon: Car,
      highlights: [
        "Sedan, SUV, Hatchback ve Ticari gövde şablonları",
        "Çizik, göçük, çatlak cam ve boyalı parça dokunmatik işaretleme",
        "Depo yakıt seviyesi ve teslimat KM kaydı",
        "Cep telefonu veya tabletten müşteri parmak imzası alma",
      ],
      mockupContent: (
        <div className="p-4 sm:p-6 bg-[#090e17] rounded-2xl border border-[#1f2d3d] space-y-3 text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-[#1f2d3d]">
            <span className="font-bold text-white">360° Kaporta Durum Şablonu</span>
            <span className="text-[10px] font-mono text-emerald-400">İmzalandı ✓</span>
          </div>
          <div className="h-32 rounded-xl bg-[#111a26] border border-[#1f2d3d] flex items-center justify-center relative overflow-hidden">
            <div className="text-center space-y-1">
              <span className="text-3xl">🚗</span>
              <div className="flex gap-2 justify-center">
                <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 text-[9px] font-mono">
                  ● Sol Arka Çamurluk (Çizik)
                </span>
                <span className="px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-400 text-[9px] font-mono">
                  ● Ön Tampon (Taş İzi)
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-[11px] text-[#9caac0]">
            <span>Yakıt: 3/4 Depo</span>
            <span>Giriş KM: 84,250 KM</span>
          </div>
        </div>
      ),
    },
    {
      id: "FINANCE_INVOICE",
      badge: "MUHASEBE & FİNANS",
      title: "B2B Cari Hesap, Kasa & GİB E-Fatura",
      headline: "Kasanızı, çeklerinizi ve resmi faturalarınızı tek ekrandan yönetin.",
      desc: "Nakit, POS, banka havalesi ve çek tahsilatları otomatik Gün Sonu Z-Raporuna girer. Nilvera ve Paraşüt entegrasyonuyla GİB e-fatura / e-arşiv saniyeler içinde kesilip müşteriye iletilir.",
      icon: Receipt,
      highlights: [
        "Gelir İdaresi Başkanlığı (GİB) E-Fatura & E-Arşiv entegrasyonu",
        "Gün sonu kasa mutabakatı ve yazdırılabilir Z-Raporu",
        "Müşteri ve toptancı tedarikçi cari hesap kartları",
        "Çek & Senet portföy takibi ve tahsilat kaydı",
      ],
      mockupContent: (
        <div className="p-4 sm:p-6 bg-[#090e17] rounded-2xl border border-[#1f2d3d] space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-[#1f2d3d]">
            <span className="text-white font-bold">GÜN SONU Z-RAPORU</span>
            <span className="text-emerald-400 text-[10px]">MUTABIK ✓</span>
          </div>
          <div className="space-y-1.5">
            <div className="flex justify-between text-[#9caac0]">
              <span>Nakit Kasa:</span>
              <span className="text-white font-bold">₺18,400</span>
            </div>
            <div className="flex justify-between text-[#9caac0]">
              <span>Kredi Kartı / POS:</span>
              <span className="text-white font-bold">₺24,500</span>
            </div>
            <div className="flex justify-between text-[#9caac0]">
              <span>Banka Havalesi:</span>
              <span className="text-white font-bold">₺9,300</span>
            </div>
          </div>
          <div className="pt-2 border-t-2 border-[#1f2d3d] flex justify-between font-bold text-sm">
            <span className="text-white font-sans">NET KASA TOPLAMI:</span>
            <span className="text-emerald-400">₺52,200</span>
          </div>
        </div>
      ),
    },
    {
      id: "INVENTORY",
      badge: "STOK & TEDARİK",
      title: "Yedek Parça, Raf Adresi & Kritik Stok",
      headline: "Aradığınız parçayı saniyeler içinde rafta bulun, fireyi sıfırlayın.",
      desc: "Her parçanın raf ve göz kodunu belirleyin, kritik stok altına düşen yağ ve filtreleri anında görün. Barkod okutarak iş emrine tek tıkla parça ekleyin.",
      icon: Package,
      highlights: [
        "Raf, koridor ve göz adresi tanımlama",
        "Kritik stok seviyesi otomatik uyarı motoru",
        "Kamera veya el terminaliyle barkod/QR okuma",
        "Toptancı parça alış maliyeti ve kâr marjı kontrolü",
      ],
      mockupContent: (
        <div className="p-4 sm:p-6 bg-[#090e17] rounded-2xl border border-[#1f2d3d] space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-[#1f2d3d]">
            <span className="text-white font-bold">STOK KARTI: 5W-30 Motor Yağı (4L)</span>
            <span className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[10px]">
              KRİTİK STOK
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="p-2 rounded bg-[#111a26]">Raf Adresi: <strong>A-03 / Göz 2</strong></div>
            <div className="p-2 rounded bg-[#111a26]">Mevcut Stok: <strong className="text-rose-400">2 Adet</strong></div>
            <div className="p-2 rounded bg-[#111a26]">Alış Maliyeti: ₺850</div>
            <div className="p-2 rounded bg-[#111a26]">Satış Fiyatı: ₺1,400</div>
          </div>
        </div>
      ),
    },
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];
  const Icon = currentTab.icon;

  return (
    <section id="ozellikler" className="py-24 relative overflow-hidden bg-[#070b12] border-t border-[#1f2d3d]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="lg:col-span-7 space-y-6 text-left">
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
                <span>Bu modülü canlı denemek için demo talep edin</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Mockup Preview Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-[#2a384b] to-transparent shadow-xl">
              {currentTab.mockupContent}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
