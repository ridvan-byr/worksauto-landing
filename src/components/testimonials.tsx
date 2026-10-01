"use client";

import * as React from "react";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const reviews = [
    {
      name: "Murat Çelik",
      role: "Kurucu & Başusta",
      company: "Çelik Kardeşler Maslak BMW & VAG Özel Servisi",
      location: "İstanbul, Maslak 2. Kısım",
      quote:
        "Müşterilerimize aracının lifteki fotoğrafını ve canlı takip linkini göndermeye başladığımızdan beri 'Aracım ne zaman çıkar?' telefonları %80 azaldı. Eskiden ay sonunda veresiye defterinden alacak arardık, şimdi tek tıkla WhatsApp bakiye hatırlatmasıyla paralar takır takır hesabımıza geçiyor.",
      highlight: "Telefon trafiğimiz %80 azaldı",
      rating: 5,
    },
    {
      name: "Kemal Bayraktar",
      role: "Genel Müdür",
      company: "Bayraktar Otomotiv & Mekanik Servis",
      location: "Ankara, Şaşmaz Oto Sanayi",
      quote:
        "6 adet liftimiz var. Hangi ustanın hangi araçta kaç saat çalıştığını göremiyorduk. WorksAuto ile ustalarımızın verimliliği arttı, parça firelerini tamamen sıfırladık. Z-Raporu sayesinde akşam kasayı 2 dakikada hatasız kapatıyoruz.",
      highlight: "Parça firelerini sıfırladık",
      rating: 5,
    },
    {
      name: "İlhan Özdemir",
      role: "Servis Danışmanı",
      company: "Özdemir Bosch Car Service Partneri",
      location: "İzmir, 3. Sanayi Sitesi",
      quote:
        "360° Dijital İkiz kaporta çizik şablonu bizi defalarca kurtardı. Müşteri 'bu çizik serviste oldu' dediğinde girişte parmak imzasıyla onayladığı tableti gösteriyoruz, tartışma anında bitiyor. Bir servisin prestijini 10 kat artıran bir program.",
      highlight: "Prestijimizi 10 kat artırdı",
      rating: 5,
    },
  ];

  return (
    <section id="yorumlar" className="py-24 relative overflow-hidden bg-[#070b12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8fb4ff] bg-[#2357c5]/10 border border-[#3b72ea]/20 px-3.5 py-1.5 rounded-full">
            SERVİSLERİN DENEYİMİ
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight mt-4">
            Sanayinin Ustaları{" "}
            <span className="text-[#8fb4ff]">WorksAuto Hakkında Ne Diyor?</span>
          </h2>
          <p className="text-base text-[#9caac0] mt-4">
            Gerçek oto sanayi şartlarında çalışan, her gün yüzlerce araç teslim eden profesyonellerin deneyimleri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#0c1421] border border-[#1f2d3d] hover:border-[#2a384b] transition-all flex flex-col justify-between group shadow-xl relative"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 text-xs font-mono font-bold text-white">5.0</span>
                </div>

                <div className="text-xs font-mono font-bold text-emerald-400 mb-2">
                  "{rev.highlight}"
                </div>

                <p className="text-sm text-[#edf3fa]/85 leading-relaxed italic">
                  "{rev.quote}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#1f2d3d] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#162232] border border-[#2a384b] flex items-center justify-center font-bold text-white font-heading">
                  {rev.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-xs font-bold text-white font-heading">{rev.name}</div>
                  <div className="text-[11px] text-[#8fb4ff] font-medium">{rev.company}</div>
                  <div className="text-[10px] text-[#9caac0]">{rev.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
