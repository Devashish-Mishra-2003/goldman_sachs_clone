import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import InsightsSection from "@/components/sections/InsightsSection";
import SustainabilitySection from "@/components/sections/SustainabilitySection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <InsightsSection />
      <SustainabilitySection />
      <Footer />
    </main>
  );
}