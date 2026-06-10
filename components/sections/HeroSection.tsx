import Image from "next/image";
import { mainHero } from "@/data/site-data";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#252525] text-white"
    >
      <Image
        src={mainHero.image}
        alt="Leluasa hero background"
        fill
        priority
        className="object-cover opacity-70"
      />

      <div className="absolute inset-0 hero-mask" />

      <div className="relative z-10 mx-auto flex min-h-[88svh] max-w-7xl flex-col justify-center px-5 pt-28 md:px-8">
        <p className="mb-8 text-xs font-bold uppercase tracking-[0.45em] text-[#A7FF00]">
          {mainHero.eyebrow}
        </p>

        <h1 className="font-heading max-w-5xl text-[5.5rem] leading-[0.85] sm:text-[7rem] md:text-[10rem] lg:text-[12rem]">
          {mainHero.titleStart}
          <br />
          <span
            className="inline-block rotate-[-2deg] rounded-2xl px-5 text-[#252525]"
            style={{ backgroundColor: mainHero.accent }}
          >
            {mainHero.titleAccent}
          </span>
        </h1>

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl text-base leading-7 text-white/85 md:text-lg">
            {mainHero.description}
          </p>

          <a
            href="#works"
            className="group flex h-24 w-24 items-center justify-center rounded-full bg-[#A7FF00] text-[#252525] transition hover:scale-105"
          >
            <span className="font-heading text-5xl leading-none transition group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}