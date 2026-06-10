import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ThemeShowcaseSection from "@/components/sections/ThemeShowcaseSection";
import ClientsSection from "@/components/sections/ClientsSection";
import ContactSection from "@/components/sections/ContactSection";
import MarqueeText from "@/components/sections/MarqueeText";
import { heroMarqueeItems, showcaseBlocks } from "@/data/site-data";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F7F7F2] text-[#252525]">
      <Navbar />
      <HeroSection />

      <MarqueeText items={heroMarqueeItems} accent="#A7FF00" tilted />

      <AboutSection />

      {showcaseBlocks.map((block) => (
        <ThemeShowcaseSection key={block.id} block={block} />
      ))}

      <ClientsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}