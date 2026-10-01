"use client";

import * as React from "react";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { ProductMockup } from "./product-mockup";
import { SocialProof } from "./social-proof";

interface HeroSectionProps {
  onOpenDemo?: () => void;
}

export function HeroSection({ onOpenDemo }: HeroSectionProps) {
  return (
    <section className="relative pt-32 sm:pt-36 pb-16 overflow-hidden">
      {/* Background Gradients & Ambient Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-gradient-to-b from-[#2357c5]/25 via-[#1a439c]/10 to-transparent blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#8fb4ff]/10 blur-[140px] pointer-events-none -z-10" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Split Hero Layout (Benchmark Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center text-left">
          {/* ======================================================== */}
          {/* LEFT COLUMN: PUNCHY COPY, SOCIAL PROOF & CTAS            */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 space-y-6">
            {/* Tag pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111a26] border border-[#2a384b] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8fb4ff]">
                AKILLI OTO SERVİS PLATFORMU
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white leading-[1.08]">
              Servis derdine <span className="text-amber-400">son.</span><br />
              Her şey artık <span className="bg-gradient-to-r from-[#8fb4ff] via-[#4882fc] to-[#2357c5] bg-clip-text text-transparent">kontrolünüzde.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#9caac0] leading-relaxed max-w-xl">
              İş emirleri, 360° dijital araç kabul, parça stok takibi ve GİB e-fatura — atölyenizle ilgili her şey tek bir platformda. Şeffaf, hızlı ve kurumsal.
            </p>

            {/* Social Proof Avatars & Rating Row */}
            <div className="flex items-center gap-3 pt-1">
              <div className="flex -space-x-2">
                <span className="w-8 h-8 rounded-full bg-[#2357c5] border-2 border-[#070b12] flex items-center justify-center text-[10px] font-bold text-white font-mono shadow-sm">
                  S
                </span>
                <span className="w-8 h-8 rounded-full bg-emerald-600 border-2 border-[#070b12] flex items-center justify-center text-[10px] font-bold text-white font-mono shadow-sm">
                  M
                </span>
                <span className="w-8 h-8 rounded-full bg-amber-600 border-2 border-[#070b12] flex items-center justify-center text-[10px] font-bold text-white font-mono shadow-sm">
                  A
                </span>
                <span className="w-8 h-8 rounded-full bg-purple-600 border-2 border-[#070b12] flex items-center justify-center text-[10px] font-bold text-white font-mono shadow-sm">
                  +250
                </span>
              </div>
              <div className="text-xs">
                <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                  <span>★★★★★</span>
                  <span className="text-white font-mono">4.9 / 5.0</span>
                </div>
                <div className="text-[11px] text-[#9caac0]">
                  Türkiye genelinde 250+ servis ortağı tarafından kullanılıyor
                </div>
              </div>
            </div>

            {/* CTA Button Group */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
              <a
                href="#demo-talep"
                onClick={onOpenDemo}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#2357c5] to-[#1a439c] text-white text-sm font-bold font-heading shadow-[0_0_30px_rgba(35,87,197,0.45)] hover:shadow-[0_0_45px_rgba(35,87,197,0.7)] transition-all cursor-pointer border border-[#8fb4ff]/30 group"
              >
                <span>Demo Talep Edin</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#nasil-calisir"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[#111a26] hover:bg-[#162232] text-[#edf3fa] text-sm font-semibold border border-[#1f2d3d] hover:border-[#2a384b] transition-all cursor-pointer"
              >
                <span>⚡ Nasıl Çalışır?</span>
              </a>
            </div>

            {/* Trust Checks Below Buttons */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#9caac0] pt-1">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-400" />
                Hızlı Kurulum
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-400" />
                Ücretsiz Veri Taşıma
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-400" />
                7/24 Kesintisiz Destek
              </span>
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: DUAL DEVICE SHOWCASE WITH FLOATING PILLS    */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0">
            <ProductMockup />
          </div>
        </div>
      </div>

      {/* Social Proof with Infinite Marquee */}
      <div className="mt-20">
        <SocialProof />
      </div>
    </section>
  );
}
