"use client";

import Image from "next/image";
import { useState } from "react";
import { clients } from "@/data/site-data";

export default function ClientsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const repeatedText = Array.from({ length: 12 }, (_, index) => index);

  const rotations = [
    "rotate-[-5deg]",
    "rotate-[3deg]",
    "rotate-[-2deg]",
    "rotate-[5deg]",
    "rotate-[-4deg]",
    "rotate-[2deg]",
    "rotate-[-3deg]",
    "rotate-[4deg]",
  ];

  return (
    <section
      id="clients"
      className="relative bg-[#F7F7F2] py-24 text-[#252525]"
    >
      {/* Marquee OUR CLIENTS */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max marquee-track-slow">
          {repeatedText.map((item) => (
            <div
              key={item}
              className="font-heading flex items-center whitespace-nowrap text-6xl uppercase leading-none text-[#252525] md:text-8xl"
            >
              <span className="mx-8">
                <span className="text-[#A0A0A0]">Our</span> Clients
              </span>
              <span className="mx-5 text-6xl leading-none text-black">×</span>
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal card slider */}
      <div className="relative mt-20">
        <div className="no-scrollbar overflow-x-auto overflow-y-visible px-6 pb-32 pt-36 md:px-14">
          <div className="flex min-w-max items-end gap-8">
            {clients.map((client, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={client.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  className={`group relative shrink-0 border-[8px] border-black bg-black text-left shadow-[0_25px_45px_rgba(0,0,0,0.18)] transition-all duration-500 ease-out ${
                    rotations[index % rotations.length]
                  } ${
                    isActive
                      ? "z-30 -translate-y-24 scale-105"
                      : "z-10 translate-y-0 scale-100 hover:-translate-y-8"
                  }`}
                >
                  <div className="relative h-[330px] w-[230px] overflow-hidden bg-[#252525] md:h-[380px] md:w-[260px]">
                    <Image
                      src={client.image}
                      alt={client.name}
                      fill
                      className={`object-cover transition duration-500 ${
                        isActive
                          ? "grayscale-0"
                          : "grayscale group-hover:grayscale-0"
                      }`}
                    />

                    <div className="absolute inset-0 bg-black/20" />
                  </div>

                  <div className="bg-black px-4 py-4">
                    <p className="font-heading text-4xl leading-none text-white md:text-5xl">
                      {client.name}
                    </p>
                  </div>
                </button>
              );
            })}

            <div className="w-10 shrink-0" />
          </div>
        </div>

        {/* small helper text */}
        <div className="mx-auto -mt-12 max-w-7xl px-6 md:px-14">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#252525]/35">
            Drag horizontally · Click a card to highlight client
          </p>
        </div>
      </div>
    </section>
  );
}