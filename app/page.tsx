import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ThemeShowcaseSection from "@/components/sections/ThemeShowcaseSection";
import ClientsSection from "@/components/sections/ClientsSection";
import ContactSection from "@/components/sections/ContactSection";
import MarqueeText from "@/components/sections/MarqueeText";
import {
  getCmsClients,
  getCmsServices,
  getCmsWorks,
} from "@/lib/wordpress";
import {
  clients as fallbackClients,
  heroMarqueeItems,
  showcaseBlocks,
} from "@/data/site-data";

export const revalidate = 60;

const themeToBlockId = {
  green: "competition",
  pink: "campaigns",
  blue: "talent",
} as const;

export default async function Home() {
  const [cmsWorks, cmsServices, cmsClients] = await Promise.all([
    getCmsWorks(),
    getCmsServices(),
    getCmsClients(),
  ]);

  const dynamicShowcaseBlocks = showcaseBlocks.map((block) => {
    const servicesFromCms = cmsServices.filter(
      (service) => service.themeGroup === block.id
    );

    const worksFromCms = cmsWorks.filter(
      (work) => themeToBlockId[work.theme] === block.id
    );

    return {
      ...block,
      services:
        servicesFromCms.length > 0
          ? servicesFromCms.map((service) => ({
              title: service.title,
              description: service.description,
              image: service.image,
            }))
          : block.services,
      works:
        worksFromCms.length > 0
          ? worksFromCms.map((work) => ({
              title: work.title,
              category: work.category,
              metric: work.metric,
              image: work.image,
            }))
          : block.works,
    };
  });

  const dynamicClients =
    cmsClients.length > 0
      ? cmsClients.map((client) => ({
          name: client.name,
          image: client.image,
        }))
      : fallbackClients;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F7F7F2] text-[#252525]">
      <Navbar />
      <HeroSection />

      <MarqueeText items={heroMarqueeItems} accent="#A7FF00" tilted />

      <AboutSection />

      {dynamicShowcaseBlocks.map((block) => (
        <ThemeShowcaseSection key={block.id} block={block} />
      ))}

      <ClientsSection clients={dynamicClients} />
      <ContactSection />
      <Footer />
    </main>
  );
}