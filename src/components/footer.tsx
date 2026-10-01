"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#1f2d3d] bg-[#05080e] pt-16 pb-12 text-xs text-[#9caac0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1f2d3d]/60">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center">
              <div className="relative h-8 w-[160px] flex items-center">
                <Image
                  src="/brand/worksauto-logo-white.png"
                  alt="WorksAuto Oto Servis Yönetimi"
                  width={160}
                  height={34}
                  className="h-7 w-auto object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-xs text-[#9caac0] max-w-sm leading-relaxed">
              Oto servisleri ve özel atölyeler için geliştirilmiş yeni nesil bulut tabanlı işletim sistemi. İş emirleri, randevu, dijital ekspertiz, cari hesap ve GİB e-fatura tek çatı altında.
            </p>

            <div className="space-y-1.5 pt-2 text-[11px]">
              <div className="flex items-center gap-2 text-[#edf3fa]">
                <Mail size={13} className="text-[#8fb4ff]" />
                <span>destek@worksauto.com.tr</span>
              </div>
              <div className="flex items-center gap-2 text-[#edf3fa]">
                <Phone size={13} className="text-[#8fb4ff]" />
                <span>+90 (850) 840 00 00</span>
              </div>
              <div className="flex items-center gap-2 text-[#9caac0]">
                <MapPin size={13} className="text-[#8fb4ff]" />
                <span>Maslak Mah. Büyükdere Cad. No:243 Sarıyer / İstanbul</span>
              </div>
            </div>
          </div>

          {/* Col 2: Ürün */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold font-heading text-white uppercase tracking-wider">
              Ürün & Modüller
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#ozellikler" className="hover:text-white transition-colors">
                  İş Emirleri & Lift Takibi
                </a>
              </li>
              <li>
                <a href="#ozellikler" className="hover:text-white transition-colors">
                  Müşteri Canlı Takip Portalı
                </a>
              </li>
              <li>
                <a href="#ozellikler" className="hover:text-white transition-colors">
                  Kazanç Fırsat Radarı
                </a>
              </li>
              <li>
                <a href="#ozellikler" className="hover:text-white transition-colors">
                  360° Dijital İkiz Şablonu
                </a>
              </li>
              <li>
                <a href="#ozellikler" className="hover:text-white transition-colors">
                  B2B Cari & GİB E-Fatura
                </a>
              </li>
              <li>
                <a href="#ozellikler" className="hover:text-white transition-colors">
                  Yedek Parça & Raf Takibi
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Çözümler & Fiyat */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold font-heading text-white uppercase tracking-wider">
              Hızlı Erişim
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#nasil-calisir" className="hover:text-white transition-colors">
                  Nasıl Çalışır?
                </a>
              </li>
              <li>
                <a href="#kazanc-hesapla" className="hover:text-white transition-colors">
                  ROI Kazanç Hesaplayıcı
                </a>
              </li>
              <li>
                <a href="#fiyatlandirma" className="hover:text-white transition-colors">
                  Fiyatlandırma Paketleri
                </a>
              </li>
              <li>
                <a href="#yorumlar" className="hover:text-white transition-colors">
                  Servis Deneyimleri
                </a>
              </li>
              <li>
                <a href="#sss" className="hover:text-white transition-colors">
                  Sıkça Sorulan Sorular
                </a>
              </li>
              <li>
                <a href="https://app.worksauto.com.tr" className="text-[#8fb4ff] hover:underline">
                  Servis Giriş Paneli →
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Yasal & Güvenlik */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold font-heading text-white uppercase tracking-wider">
              Yasal & Güvenlik
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  KVKK Aydınlatma Metni
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Gizlilik Sözleşmesi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Kullanım Şartları
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Bilgi Güvenliği Politikası
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Çerez (Cookie) Tercihleri
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © 2026 WorksAuto Yazılım Teknolojileri A.Ş. Tüm hakları saklıdır.
          </div>
          <div className="flex items-center gap-4 text-[#9caac0]">
            <span className="flex items-center gap-1.5">
              <span>Türkiye'de Geliştirilmiştir</span>
              <span>🇹🇷</span>
            </span>
            <span>•</span>
            <span>ISO 27001 & 9001 Standartlarında</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
