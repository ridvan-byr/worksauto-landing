"use client";

import * as React from "react";
import { ArrowRight, CheckCircle2, PhoneCall, Sparkles, Loader2, MessageSquare } from "lucide-react";

export function DemoFormSection() {
  const [formData, setFormData] = React.useState({
    name: "",
    serviceName: "",
    phone: "",
    city: "",
    liftCount: "3-5",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.serviceName) return;

    setIsSubmitting(true);
    // Simulate instantaneous lead ingestion & WhatsApp redirect option
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Merhaba WorksAuto ekibi, servisimiz için canlı demo ve bilgi almak istiyorum.\n\nİsim: ${formData.name || "Servis Sahibi"}\nServis Adı: ${formData.serviceName || "-"}\nŞehir: ${formData.city || "-"}`
    );
    window.open(`https://wa.me/905321112233?text=${text}`, "_blank");
  };

  return (
    <section id="demo-talep" className="py-24 relative overflow-hidden bg-[#070b12]">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-r from-[#2357c5]/20 via-[#3b72ea]/15 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#0e1929] via-[#0b1422] to-[#070b12] border border-[#2357c5]/40 p-8 sm:p-12 lg:p-16 shadow-[0_0_80px_rgba(35,87,197,0.25)] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight leading-tight">
              Servisinizi Dijital Çağa Taşımaya{" "}
              <span className="text-[#8fb4ff]">Bugün Başlayın.</span>
            </h2>

            <p className="text-base text-[#9caac0] leading-relaxed">
              Formu doldurun; uzman ekibimiz servisinizin ihtiyaçlarına özel canlı demo oturumunu 10 dakika içinde hazırlasın.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-[#edf3fa]">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                <span>Eski müşteri ve parça listenizin sisteme ücretsiz aktarımı</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#edf3fa]">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                <span>Usta ve personelleriniz için birebir canlı eğitim</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#edf3fa]">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                <span>WhatsApp ve telefon üzerinden 7/24 kesintisiz teknik destek</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#1f2d3d] flex items-center gap-4">
              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
              >
                <MessageSquare size={16} />
                <span>Veya doğrudan WhatsApp Destek Hattımıza yazın →</span>
              </button>
            </div>
          </div>

          {/* Right Form Card (6 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#090e17] border border-[#1f2d3d] shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-black font-heading text-white">
                  Talebiniz Başarıyla Alındı!
                </h3>
                <p className="text-xs text-[#9caac0] max-w-sm mx-auto leading-relaxed">
                  Servis uzmanımız <strong>{formData.phone}</strong> nolu telefondan sizinle 15 dakika içinde irtibata geçerek demo girişinizi aktive edecektir.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs cursor-pointer shadow-lg transition-all"
                  >
                    <span>Beklemeden WhatsApp'tan Yazın</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-white mb-1.5 font-heading">
                    Adınız Soyadınız *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Örn: Ahmet Usta"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-xl bg-[#111a26] border border-[#1f2d3d] text-xs text-white placeholder:text-[#9caac0]/50 focus:outline-none focus:border-[#8fb4ff] transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-white mb-1.5 font-heading">
                      Servis / İşletme Adı *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Örn: Bayar Otomotiv"
                      value={formData.serviceName}
                      onChange={(e) => setFormData({ ...formData, serviceName: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-xl bg-[#111a26] border border-[#1f2d3d] text-xs text-white placeholder:text-[#9caac0]/50 focus:outline-none focus:border-[#8fb4ff] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-white mb-1.5 font-heading">
                      Cep Telefonu *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="05XX XXX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-xl bg-[#111a26] border border-[#1f2d3d] text-xs text-white placeholder:text-[#9caac0]/50 focus:outline-none focus:border-[#8fb4ff] transition-all font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-white mb-1.5 font-heading">
                      Bulunduğunuz Şehir
                    </label>
                    <input
                      type="text"
                      placeholder="Örn: İstanbul, Ankara..."
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-xl bg-[#111a26] border border-[#1f2d3d] text-xs text-white placeholder:text-[#9caac0]/50 focus:outline-none focus:border-[#8fb4ff] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-white mb-1.5 font-heading">
                      Lift / İstasyon Sayısı
                    </label>
                    <select
                      value={formData.liftCount}
                      onChange={(e) => setFormData({ ...formData, liftCount: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-xl bg-[#111a26] border border-[#1f2d3d] text-xs text-white focus:outline-none focus:border-[#8fb4ff] transition-all cursor-pointer"
                    >
                      <option value="1-2">1 - 2 Lift (Küçük Servis)</option>
                      <option value="3-5">3 - 5 Lift (Orta Servis)</option>
                      <option value="6-10">6 - 10 Lift (Büyük Servis)</option>
                      <option value="10+">10+ Lift / Çok Şubeli</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-4 rounded-xl bg-gradient-to-r from-[#2357c5] to-[#1a439c] hover:from-[#2963dc] hover:to-[#1e4eb4] text-white text-xs font-bold font-heading shadow-[0_0_25px_rgba(35,87,197,0.4)] hover:shadow-[0_0_35px_rgba(35,87,197,0.6)] transition-all cursor-pointer flex items-center justify-center gap-2 border border-[#8fb4ff]/30"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Kaydınız Oluşturuluyor...</span>
                    </>
                  ) : (
                    <>
                      <span>Canlı Demo ve Bilgi Talep Edin</span>
                      <ArrowRight size={15} />
                    </>
                  )}
                </button>

                <p className="text-[10px] text-center text-[#9caac0]/70 pt-1">
                  Kişisel verileriniz KVKK kapsamında korunmaktadır. Asla spam gönderilmez.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
