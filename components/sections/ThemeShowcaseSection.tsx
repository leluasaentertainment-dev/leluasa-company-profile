import Image from "next/image";
import Link from "next/link";
import MarqueeText from "@/components/sections/MarqueeText";
import { showcaseBlocks } from "@/data/site-data";
import PinkEditorialSection from "@/components/sections/PinkEditorialSection";
import BlueAboutStackSection from "@/components/sections/BlueAboutStackSection";
import BlueServiceLinesSection from "@/components/sections/BlueServiceLinesSection";

type ShowcaseBlock = (typeof showcaseBlocks)[number];

type ThemeShowcaseSectionProps = {
  block: ShowcaseBlock;
};

type OptionalSlug = {
  slug?: string;
};

export default function ThemeShowcaseSection({
  block,
}: ThemeShowcaseSectionProps) {
  return (
    <section id={block.id === "competition" ? "services" : block.id}>
      {/* HERO PER THEME */}
      <section className="relative min-h-[78vh] overflow-hidden text-white">
        <Image
          src={block.heroImage}
          alt={block.heroTitle}
          fill
          className="object-cover"
        />

        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{ backgroundColor: block.accent }}
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-center px-5 py-28 md:px-8">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-white/80">
            Our Services
          </p>

          <h2 className="font-heading max-w-4xl text-[4.7rem] leading-[0.88] md:text-[8rem]">
            {block.heroTitle}
          </h2>

          <p className="mt-7 max-w-xl text-base leading-7 text-white md:text-lg">
            {block.heroDescription}
          </p>
        </div>
      </section>

      {/* MARQUEE */}
      <MarqueeText items={block.marqueeItems} accent={block.accent} tilted />

      {/* EXTRA SECTION UNTUK PINK */}
      {block.id === "campaigns" && <PinkEditorialSection />}

      {/* EXTRA SECTION UNTUK BLUE */}
      {block.id === "talent" && (
        <>
          <BlueAboutStackSection />
          <BlueServiceLinesSection />
        </>
      )}

      {/* SERVICES CARDS */}
      <section className="bg-[#F7F7F2] px-5 py-24 text-[#252525] md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            start="Our"
            accent="Services"
            color={block.accent}
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {block.services.map((service, index) => {
              const serviceSlug = (service as OptionalSlug).slug;
              const serviceHref = serviceSlug
                ? `/services/${serviceSlug}`
                : "#contact";

              return (
                <Link
                  key={service.title}
                  href={serviceHref}
                  className={`group block min-h-[420px] overflow-hidden ${
                    index === 1
                      ? "bg-[#252525] text-white"
                      : "bg-[#E7E7E2] text-[#252525]"
                  }`}
                >
                  <div className="p-6">
                    <div className="mb-4 flex items-start justify-between gap-5">
                      <h3 className="font-heading text-5xl leading-[0.9]">
                        {service.title}
                      </h3>

                      <span
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-3xl transition group-hover:rotate-45 ${
                          index === 1
                            ? "bg-white text-[#252525]"
                            : "bg-[#252525] text-white"
                        }`}
                      >
                        ↗
                      </span>
                    </div>

                    <p
                      className={`text-sm leading-6 ${
                        index === 1 ? "text-white/70" : "text-[#252525]/70"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>

                  <div className="relative mx-6 mb-6 h-56 overflow-hidden bg-black/10">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* WORKS CARDS */}
      <section
        id={block.id === "competition" ? "works" : undefined}
        className="bg-[#F7F7F2] px-5 pb-28 text-[#252525] md:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading start="See Our" accent="Works" color={block.accent} />

          <div className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {block.works.map((work, index) => {
              const workSlug = (work as OptionalSlug).slug;
              const workHref = workSlug ? `/works/${workSlug}` : "#contact";

              return (
                <article
                  key={work.title}
                  className="grid grid-cols-[0.85fr_1.15fr] items-center gap-0"
                >
                  <Link
                    href={workHref}
                    className="relative aspect-square overflow-hidden"
                    style={{
                      backgroundColor:
                        index % 2 === 0 ? block.accent : "#252525",
                    }}
                  >
                    {work.image ? (
                      <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        className="object-cover transition duration-500 hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center p-5 text-center">
                        <span
                          className={`font-heading text-4xl leading-none ${
                            index % 2 === 0 ? "text-[#252525]" : "text-white"
                          }`}
                        >
                          {work.category}
                        </span>
                      </div>
                    )}
                  </Link>

                  <div className="bg-[#F7F7F2] p-6">
                    <p
                      className="font-heading text-4xl leading-none"
                      style={{ color: block.accent }}
                    >
                      {work.title}
                    </p>

                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.25em] text-[#252525]/45">
                      {work.metric}
                    </p>

                    <Link
                      href={workHref}
                      className="mt-6 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#252525]"
                    >
                      View Project <span className="text-2xl">›</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
}

function SectionHeading({
  start,
  accent,
  color,
}: {
  start: string;
  accent: string;
  color: string;
}) {
  return (
    <div className="text-center">
      <h2 className="font-heading text-6xl leading-none text-[#252525] md:text-7xl">
        {start} <span style={{ color }}>{accent}</span>
      </h2>
    </div>
  );
}