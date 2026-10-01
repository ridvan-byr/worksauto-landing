"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight, Sparkles, ChevronDown, Wrench, Shield, Zap, BarChart3, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenDemo?: () => void;
}

export function Navbar({ onOpenDemo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const featureLinks = [
    {
      title: "Akıllı Atölye & İş Emirleri",
      desc: "Lift planlama, usta atama ve parça-işçilik dökümü",
      icon: Wrench,
      href: "#ozellikler",
    },
    {
      title: "Müşteri Canlı Takip Portalı",
      desc: "Araç sahibine SMS/WhatsApp canlı aşama takip linki",
      icon: Zap,
      href: "#ozellikler",
    },
    {
      title: "Kazanç Fırsat Radarı & CRM",
      desc: "Geciken alacaklar, muayene ve bakım çağrıları",
      icon: BarChart3,
      href: "#ozellikler",
    },
    {
      title: "B2B Cari Hesap & GİB E-Fatura",
      desc: "Z-raporu, kasa mutabakatı ve resmi fatura entegrasyonu",
      icon: Shield,
      href: "#ozellikler",
    },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#070b12]/85 backdrop-blur-xl border-b border-[#1f2d3d]/80 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2357c5] to-[#122b68] border border-[#3b72ea]/40 flex items-center justify-center shadow-[0_0_20px_rgba(35,87,197,0.35)] group-hover:shadow-[0_0_25px_rgba(35,87,197,0.55)] transition-all">
              <span className="text-white font-black font-heading text-lg tracking-wider">W</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black font-heading tracking-tight text-white">
                  Works<span className="text-[#8fb4ff]">Auto</span>
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-md bg-[#2357c5]/20 border border-[#3b72ea]/30 text-[#8fb4ff] font-semibold">
                  SaaS
                </span>
              </div>
              <span className="text-[10px] text-[#9caac0] tracking-wider uppercase font-medium">
                Oto Servis Yönetimi
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Features Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsFeaturesOpen(true)}
              onMouseLeave={() => setIsFeaturesOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-[#edf3fa] hover:text-[#8fb4ff] transition-colors rounded-xl hover:bg-[#111a26]/60 cursor-pointer"
              >
                <span>Özellikler</span>
                <ChevronDown
                  size={14}
                  className={cn(
                    "transition-transform duration-200 text-[#9caac0]",
                    isFeaturesOpen && "rotate-180 text-[#8fb4ff]"
                  )}
                />
              </button>

              {isFeaturesOpen && (
                <div className="absolute top-full left-0 w-80 p-2.5 rounded-2xl bg-[#0d1520]/95 backdrop-blur-2xl border border-[#1f2d3d] shadow-[0_20px_40px_rgba(0,0,0,0.8)] animate-in fade-in slide-in-from-top-2 duration-150">
                  {featureLinks.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={i}
                        href={item.href}
                        onClick={() => setIsFeaturesOpen(false)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#162232] transition-colors group cursor-pointer"
                      >
                        <div className="p-2 rounded-lg bg-[#2357c5]/15 border border-[#3b72ea]/20 text-[#8fb4ff] shrink-0 group-hover:bg-[#2357c5] group-hover:text-white transition-colors">
                          <Icon size={16} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white group-hover:text-[#8fb4ff] transition-colors font-heading">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-[#9caac0] line-clamp-1 mt-0.5">
                            {item.desc}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            <a
              href="#nasil-calisir"
              className="px-3.5 py-2 text-sm font-medium text-[#edf3fa] hover:text-[#8fb4ff] transition-colors rounded-xl hover:bg-[#111a26]/60"
            >
              Nasıl Çalışır?
            </a>
            <a
              href="#kazanc-hesapla"
              className="px-3.5 py-2 text-sm font-medium text-[#edf3fa] hover:text-[#8fb4ff] transition-colors rounded-xl hover:bg-[#111a26]/60 flex items-center gap-1.5"
            >
              <span>ROI Hesaplayıcı</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </a>
            <a
              href="#fiyatlandirma"
              className="px-3.5 py-2 text-sm font-medium text-[#edf3fa] hover:text-[#8fb4ff] transition-colors rounded-xl hover:bg-[#111a26]/60"
            >
              Fiyatlandırma
            </a>
            <a
              href="#yorumlar"
              className="px-3.5 py-2 text-sm font-medium text-[#edf3fa] hover:text-[#8fb4ff] transition-colors rounded-xl hover:bg-[#111a26]/60"
            >
              Referanslar
            </a>
            <a
              href="#sss"
              className="px-3.5 py-2 text-sm font-medium text-[#edf3fa] hover:text-[#8fb4ff] transition-colors rounded-xl hover:bg-[#111a26]/60"
            >
              SSS
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://app.worksauto.com.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold text-[#edf3fa] hover:text-white hover:bg-[#111a26] border border-transparent hover:border-[#1f2d3d] rounded-xl transition-all"
            >
              Servis Girişi
            </a>
            <a
              href="#demo-talep"
              onClick={onOpenDemo}
              className="relative group inline-flex items-center gap-2 px-4.5 py-2 rounded-xl bg-gradient-to-r from-[#2357c5] to-[#1a439c] text-white text-xs font-bold font-heading shadow-[0_0_20px_rgba(35,87,197,0.35)] hover:shadow-[0_0_30px_rgba(35,87,197,0.6)] hover:from-[#2963dc] hover:to-[#1e4eb4] transition-all cursor-pointer border border-[#8fb4ff]/25"
            >
              <span>14 Gün Ücretsiz Dene</span>
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#edf3fa] hover:bg-[#111a26] border border-[#1f2d3d] cursor-pointer"
            aria-label="Menüyü Aç"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-[#1f2d3d] bg-[#070b12]/98 backdrop-blur-2xl px-5 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            <a
              href="#ozellikler"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-medium text-[#edf3fa] hover:bg-[#111a26]"
            >
              Özellikler
            </a>
            <a
              href="#nasil-calisir"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-medium text-[#edf3fa] hover:bg-[#111a26]"
            >
              Nasıl Çalışır?
            </a>
            <a
              href="#kazanc-hesapla"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-medium text-[#edf3fa] hover:bg-[#111a26]"
            >
              ROI Kazanç Hesaplayıcı
            </a>
            <a
              href="#fiyatlandirma"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-medium text-[#edf3fa] hover:bg-[#111a26]"
            >
              Fiyatlandırma
            </a>
            <a
              href="#yorumlar"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-medium text-[#edf3fa] hover:bg-[#111a26]"
            >
              Müşteri Deneyimleri
            </a>
            <a
              href="#sss"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-medium text-[#edf3fa] hover:bg-[#111a26]"
            >
              Sıkça Sorulan Sorular
            </a>
          </div>

          <div className="pt-4 border-t border-[#1f2d3d] flex flex-col gap-2.5">
            <a
              href="https://app.worksauto.com.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 text-xs font-semibold text-white bg-[#111a26] border border-[#1f2d3d] rounded-xl"
            >
              Servis Girişi (Panel)
            </a>
            <a
              href="#demo-talep"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenDemo?.();
              }}
              className="w-full text-center py-3 text-xs font-bold text-white bg-[#2357c5] hover:bg-[#1d4bb0] rounded-xl shadow-[0_0_20px_rgba(35,87,197,0.4)]"
            >
              14 Gün Ücretsiz Deneyin
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
