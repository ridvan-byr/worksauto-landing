"use client";

import * as React from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const faqs = [
    {
      q: "WorksAuto'yu kullanmak için bilgisayarıma herhangi bir program yüklemem gerekiyor mu?",
      a: "Hayır. WorksAuto %100 modern bulut mimarisiyle çalışır. Windows, Mac, tablet veya akıllı telefon fark etmeksizin; internet tarayıcınızdan anında giriş yapıp kullanabilirsiniz. Kurulum, güncelleme veya sunucu masrafı yoktur.",
    },
    {
      q: "Mevcut Excel tablolarımdaki müşteri, araç ve parça listelerimi aktarabilir miyim?",
      a: "Evet! WorksAuto gelişmiş bir Excel aktarım sihirbazına sahiptir. Mevcut müşteri listenizi, kayıtlı araç plakalarını veya parça stok listenizi tek tıkla yükleyebilirsiniz. Sisteme geçişiniz sadece birkaç dakika sürer.",
    },
    {
      q: "GİB E-Fatura ve E-Arşiv entegrasyonu var mı?",
      a: "Evet. Nilvera ve Paraşüt resmi e-fatura sağlayıcılarıyla doğrudan entegredir. İş emri tamamlandığında veya doğrudan satış yapıldığında tek tıkla resmi GİB e-faturası veya e-arşiv faturası üretilir ve müşterinin e-posta/telefonuna iletilir.",
    },
    {
      q: "Müşteri canlı takip bağlantısı nasıl çalışır? Müşterinin uygulama indirmesi gerekir mi?",
      a: "Müşterinizin hiçbir uygulama indirmesine veya şifre oluşturmasına gerek yoktur. Araç kabul yapıldığında müşterinin telefonuna özel ve güvenli bir takip linki gider. Müşteri linke tıkladığında aracının hangi aşamada olduğunu, ustanın çektiği hasar fotoğraflarını ve ek masraf onaylarını cep telefonundan canlı görür.",
    },
    {
      q: "Verilerimiz ne kadar güvende? Bilgisayarımız çökerse veriler kaybolur mu?",
      a: "Verileriniz kurumsal PostgreSQL mimarisi ve banka seviyesinde şifreleme ile korunur. Her gece otomatik artımlı yedekleme yapılır. Dükkanınızdaki bilgisayar arızalansa bile telefonunuzdan veya başka bir cihazdan giriş yapıp kaldığınız yerden çalışmaya devam edebilirsiniz.",
    },
    {
      q: "14 günlük deneme sürümünde kısıtlama var mı?",
      a: "Hayır. 14 gün boyunca kredi kartı vermeden sistemin tüm Profesyonel modüllerini (İş emirleri, Müşteri takip portalı, Kazanç radarı, GİB e-fatura, 360° dijital ikiz) atölyenizde sınırsızca deneyebilirsiniz.",
    },
  ];

  return (
    <section id="sss" className="py-24 relative overflow-hidden bg-[#070b12] border-t border-[#1f2d3d]/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8fb4ff] bg-[#2357c5]/10 border border-[#3b72ea]/20 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
            <HelpCircle size={13} />
            <span>SIKÇA SORULAN SORULAR</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight mt-4">
            Aklınıza Takılan{" "}
            <span className="text-[#8fb4ff]">Tüm Soruların Cevapları</span>
          </h2>
          <p className="text-base text-[#9caac0] mt-4">
            WorksAuto'ya geçiş süreci ve kullanım detayları hakkında en çok sorulan sorular.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={cn(
                  "rounded-2xl transition-all duration-200 border overflow-hidden",
                  isOpen
                    ? "bg-[#0d1624] border-[#2357c5]/50 shadow-[0_0_25px_rgba(35,87,197,0.15)]"
                    : "bg-[#0c1421] border-[#1f2d3d] hover:border-[#2a384b]"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-white font-heading">
                    {faq.q}
                  </span>
                  <div
                    className={cn(
                      "p-1.5 rounded-lg bg-[#162232] text-[#9caac0] shrink-0 transition-transform duration-200",
                      isOpen && "rotate-180 text-[#8fb4ff] bg-[#2357c5]/20"
                    )}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#9caac0] leading-relaxed border-t border-[#1f2d3d]/50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
