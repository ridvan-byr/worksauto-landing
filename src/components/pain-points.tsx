"use client";

import * as React from "react";
import { FileText, Coins, CalendarX, UserMinus, Check, ArrowRight } from "lucide-react";

export function PainPoints() {
  const problems = [
    {
      icon: FileText,
      problemTitle: "Kağıt Koçanlar & Karışan İşler",
      problemDesc:
        "Ustanın hangi parçayı taktığı, ne kadar işçilik harcadığı kağıt fişlerde kaybolur. Günün sonunda kârlılık bilinemez.",
      solutionTitle: "Dijital İş Emri & Lift Takibi",
      solutionDesc:
        "Tüm süreç tablette veya telefonda şeffaf. Parça, işçilik, fason maliyeti ve usta hakedişi kuruşu kuruşuna kayıt altında.",
    },
    {
      icon: Coins,
      problemTitle: "Tahsil Edilemeyen Açık Hesaplar",
      problemDesc:
        "Veresiye defterleri ve dağınık notlar yüzünden vadesi geçen alacaklar unutulur. Servis kâr eder görünürken nakit tıkanır.",
      solutionTitle: "B2B Cari & Otomatik Hatırlatma",
      solutionDesc:
        "Müşteri ve tedarikçi carileri anlık güncellenir. Vadesi geçen bakiyeler tek tık WhatsApp hatırlatmasıyla anında tahsil edilir.",
    },
    {
      icon: CalendarX,
      problemTitle: "Randevu & Kapı Önü Yığılması",
      problemDesc:
        "Aynı saatte 5 araç gelir, liftler yetmez, ustalar strese girer; bazen de tam tersi liftler saatlerce boş bekler.",
      solutionTitle: "İstasyon Bazlı Randevu Motoru",
      solutionDesc:
        "Lift kapasitenize göre randevu oluşturulur. Çakışma önleyici algoritma sayesinde atölye kapasitesi %100 verimle çalışır.",
    },
    {
      icon: UserMinus,
      problemTitle: "Müşteri Kaybı & Kaçan Fırsatlar",
      problemDesc:
        "Servisten çıkan araç bir daha takip edilmez. Müşterinin TÜVTÜRK muayenesi veya bakım zamanı gelince başka servise gider.",
      solutionTitle: "Kazanç Radarı & Müşteri Bağlama",
      solutionDesc:
        "TÜVTÜRK muayenesi yaklaşan veya 6 aydır uğramayan müşterilere kişiselleştirilmiş WhatsApp daveti gönderilir, ciro %30 artar.",
    },
  ];

  return (
    <section id="nasil-calisir" className="py-24 relative overflow-hidden bg-[#070b12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8fb4ff] bg-[#2357c5]/10 border border-[#3b72ea]/20 px-3.5 py-1.5 rounded-full">
            SEKTÖREL DÖNÜŞÜM
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight mt-4">
            Geleneksel Servis Yönetiminin{" "}
            <span className="text-[#8fb4ff]">Maliyetine Katlanmayın.</span>
          </h2>
          <p className="text-base text-[#9caac0] mt-4">
            Türkiye'deki oto servislerin her ay yaşadığı en büyük 4 finansal ve operasyonel kaybı WorksAuto ile nasıl çözüyoruz?
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-[#0c1421] border border-[#1f2d3d] hover:border-[#2a384b] transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Problem Side */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 shrink-0">
                      <Icon size={22} />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold uppercase text-rose-400 tracking-wider">
                        Eski Yöntem Kaybı
                      </div>
                      <h3 className="text-lg font-bold text-white font-heading mt-1">
                        {item.problemTitle}
                      </h3>
                      <p className="text-sm text-[#9caac0] mt-1.5 leading-relaxed">
                        {item.problemDesc}
                      </p>
                    </div>
                  </div>

                  {/* Divider with Arrow */}
                  <div className="my-6 border-t border-[#1f2d3d] flex items-center justify-center">
                    <span className="px-3 py-1 bg-[#111a26] text-[#8fb4ff] text-[11px] font-mono font-bold rounded-full -mt-3 border border-[#1f2d3d]">
                      WorksAuto ile Çözüm ↓
                    </span>
                  </div>

                  {/* Solution Side */}
                  <div className="flex items-start gap-3 bg-[#111a26]/70 p-4 rounded-2xl border border-emerald-500/20">
                    <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                      <Check size={14} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-emerald-400 font-heading">
                        {item.solutionTitle}
                      </div>
                      <p className="text-xs text-[#edf3fa]/85 mt-1 leading-relaxed">
                        {item.solutionDesc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
