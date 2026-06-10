import Image from "next/image";
import { mainHero } from "@/data/site-data";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[88svh] overflow-hidden bg-[#252525] text-white"
    >
      <Image
        src={mainHero.image}
        alt="Leluasa hero background"
        fill
        priority
        className="object-cover opacity-70"
      />

      <div className="absolute inset-0 hero-mask" />

      <div className="relative z-10 mx-auto flex min-h-[88svh] max-w-7xl flex-col justify-center px-5 pt-24 md:px-8">
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.45em] text-[#A7FF00]">
          {mainHero.eyebrow}
        </p>

        <h1 className="font-heading flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 text-[4.8rem] leading-[0.85] sm:text-[6rem] md:text-[7.5rem] lg:text-[8.5rem]">
          <span>{mainHero.titleStart}</span>

          <span
            className="inline-block rotate-[-2deg] rounded-2xl px-5 py-1 text-[#252525]"
            style={{ backgroundColor: mainHero.accent }}
          >
            {mainHero.titleAccent}
          </span>
        </h1>

        <div className="mt-8 flex max-w-3xl items-center gap-5">
          <p className="max-w-xl text-base leading-7 text-white/85 md:text-lg">
            {mainHero.description}
          </p>

          <a
            href="#works"
            className="group flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#A7FF00] text-[#252525] transition hover:scale-105 md:h-20 md:w-20"
          >
            <span className="font-heading text-4xl leading-none transition group-hover:translate-x-1 group-hover:-translate-y-1 md:text-5xl">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}