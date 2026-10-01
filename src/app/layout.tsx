import type { Metadata } from "next";
import { Manrope, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "WorksAuto | Yeni Nesil Bulut Tabanlı Oto Servis Yönetim Sistemi",
  description:
    "Oto servisleri ve özel atölyeler için iş emri, dijital araç kabul, randevu, stok takibi, B2B cari hesap ve GİB e-fatura yönetim platformu. Hemen 14 gün ücretsiz deneyin.",
  keywords: [
    "oto servis programı",
    "oto servis yönetim yazılımı",
    "iş emri takip programı",
    "servis randevu sistemi",
    "oto servis e-fatura",
    "oto servis cari takip",
    "oto tamirhane yazılımı",
    "WorksAuto",
  ],
  authors: [{ name: "WorksAuto Yazılım Teknolojileri A.Ş." }],
  creator: "WorksAuto",
  publisher: "WorksAuto",
  metadataBase: new URL("https://worksauto.com.tr"),
  alternates: {
    canonical: "https://worksauto.com.tr",
  },
  icons: {
    icon: [
      { url: "/brand/favicon.svg", type: "image/svg+xml" },
      { url: "/brand/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/brand/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "WorksAuto | Yeni Nesil Bulut Tabanlı Oto Servis Yönetim Sistemi",
    description:
      "Kağıt koçanlara ve kaçırılan alacaklara son. Atölyenizi, liftlerinizi ve cari hesaplarınızı tek ekrandan profesyonelce yönetin.",
    url: "https://worksauto.com.tr",
    siteName: "WorksAuto",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark scroll-smooth">
      <body
        className={`${manrope.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#070b12] text-[#edf3fa] selection:bg-[#2357c5] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
