"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ProductMockup } from "./product-mockup";
import { SocialProof } from "./social-proof";

interface HeroSectionProps {
  onOpenDemo?: () => void;
}

export function HeroSection({ onOpenDemo }: HeroSectionProps) {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 overflow-hidden">
      {/* Background Gradients & Ambient Lights */}
      <div className="absolute top-0 left-1/3 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#2357c5]/25 via-[#1a439c]/10 to-transparent blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[#8fb4ff]/10 blur-[140px] pointer-events-none -z-10" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-35 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split 2-Column Hero: Left Text & CTAs, Right Photorealistic Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* ======================================================== */}
          {/* LEFT COLUMN: BRAND, HEADLINE, SUBTITLE, CTAs, TRUST       */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 text-left space-y-6">
            {/* Official Brand Logo */}
            <div className="flex items-center">
              <div className="relative h-10 w-[200px] sm:w-[220px]">
                <Image
                  src="/brand/worksauto-logo-white.png"
                  alt="WorksAuto Oto Servis Yönetim Sistemi"
                  width={220}
                  height={48}
                  priority
                  className="h-9 w-auto object-contain drop-shadow-md"
                />
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[44px] xl:text-[52px] font-black font-heading tracking-tight text-white leading-[1.12]">
              Oto Servis Yönetimini{" "}
              <span className="bg-gradient-to-r from-[#8fb4ff] via-[#4882fc] to-[#2357c5] bg-clip-text text-transparent">
                Dijitale Taşıyın.
              </span>
              <br /> Verimlilik ve Kârınızı Katlayın.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#9caac0] font-normal leading-relaxed">
              Kağıt iş emirlerine, unutulan parça ücretlerine ve takipsiz açık hesaplara son. Lift planlama, 360° dijital araç kabul, müşteri canlı takip portalı, cari hesap ve GİB e-fatura tek bir kurumsal platformda.
            </p>

            {/* CTA Button Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#demo-talep"
                onClick={onOpenDemo}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#2357c5] to-[#1a439c] text-white text-sm font-bold font-heading shadow-[0_0_30px_rgba(35,87,197,0.45)] hover:shadow-[0_0_45px_rgba(35,87,197,0.7)] hover:from-[#2963dc] hover:to-[#1e4eb4] transition-all cursor-pointer border border-[#8fb4ff]/30 group"
              >
                <span>Demo Talep Edin</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#nasil-calisir"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#111a26]/90 hover:bg-[#162232] text-[#edf3fa] text-sm font-semibold border border-[#1f2d3d] hover:border-[#2a384b] transition-all cursor-pointer"
              >
                <span>Özellikleri Keşfet ↓</span>
              </a>
            </div>

            {/* Trust Checks */}
            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-[#9caac0]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-400" />
                Hızlı Kurulum
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-400" />
                Ücretsiz Veri Taşıma
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-400" />
                7/24 Destek
              </span>
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: PHOTOREALISTIC DUAL-DEVICE SHOWROOM        */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 relative">
            <ProductMockup />
          </div>
        </div>
      </div>

      {/* Social Proof with Infinite Marquee */}
      <div className="mt-16 sm:mt-24">
        <SocialProof />
      </div>
    </section>
  );
}
