import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { PainPoints } from "@/components/pain-points";
import { FeaturesShowcase } from "@/components/features-showcase";
import { RoiCalculator } from "@/components/roi-calculator";
import { PricingSection } from "@/components/pricing-section";
import { Testimonials } from "@/components/testimonials";
import { FaqSection } from "@/components/faq-section";
import { DemoFormSection } from "@/components/demo-form-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070b12] text-[#edf3fa] flex flex-col selection:bg-[#2357c5] selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Product Mockup & Social Proof */}
        <HeroSection />

        {/* Traditional Auto Workshop Problems vs WorksAuto Solutions */}
        <PainPoints />

        {/* Tabbed Interactive Feature Deep Dive */}
        <FeaturesShowcase />

        {/* Interactive ROI & Extra Net Revenue Calculator */}
        <RoiCalculator />

        {/* Transparent Pricing Packages */}
        <PricingSection />

        {/* Workshop Owners Testimonials & Reviews */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Final Conversion Section & Lead Generation Form */}
        <DemoFormSection />
      </main>

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}
