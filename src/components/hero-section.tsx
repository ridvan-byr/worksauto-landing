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
    <section className="relative pt-28 sm:pt-36 pb-16 overflow-hidden">
      {/* Background Gradients & Ambient Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-gradient-to-b from-[#2357c5]/25 via-[#1a439c]/10 to-transparent blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#8fb4ff]/10 blur-[140px] pointer-events-none -z-10" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Official Centered Brand Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative h-11 sm:h-13 w-[220px] sm:w-[260px] flex items-center justify-center">
            <Image
              src="/brand/worksauto-logo-white.png"
              alt="WorksAuto Oto Servis Yönetim Sistemi"
              width={260}
              height={56}
              priority
              className="h-9 sm:h-11 w-auto object-contain drop-shadow-md"
            />
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight text-white max-w-5xl mx-auto leading-[1.08]">
          Oto Servis Yönetimini{" "}
          <span className="bg-gradient-to-r from-[#8fb4ff] via-[#4882fc] to-[#2357c5] bg-clip-text text-transparent">
            Dijitale Taşıyın.
          </span>
          <br className="hidden sm:inline" /> Verimlilik ve Kârınızı Katlayın.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-[#9caac0] max-w-3xl mx-auto font-normal leading-relaxed">
          Kağıt iş emirlerine, unutulan parça ücretlerine ve takipsiz açık hesaplara son. Lift planlama, 360° dijital araç kabul, müşteri canlı takip portalı, cari hesap ve GİB e-fatura tek bir kurumsal platformda.
        </p>

        {/* CTA Button Group */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#demo-talep"
            onClick={onOpenDemo}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#2357c5] to-[#1a439c] text-white text-base font-bold font-heading shadow-[0_0_35px_rgba(35,87,197,0.45)] hover:shadow-[0_0_50px_rgba(35,87,197,0.7)] hover:from-[#2963dc] hover:to-[#1e4eb4] transition-all cursor-pointer border border-[#8fb4ff]/30 group"
          >
            <span>Demo Talep Edin</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#nasil-calisir"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-[#111a26]/90 hover:bg-[#162232] text-[#edf3fa] text-base font-semibold border border-[#1f2d3d] hover:border-[#2a384b] transition-all cursor-pointer"
          >
            <span>Özellikleri Keşfet ↓</span>
          </a>
        </div>

        {/* Assurance Line */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs text-[#9caac0]">
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
            7/24 Kesintisiz Destek
          </span>
        </div>

        {/* Refined Product Showcase (Laptop + Benchmark Phone Mockup) */}
        <div className="mt-14 sm:mt-18">
          <ProductMockup />
        </div>
      </div>

      {/* Social Proof with Infinite Marquee */}
      <div className="mt-20">
        <SocialProof />
      </div>
    </section>
  );
}
