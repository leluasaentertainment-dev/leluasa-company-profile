"use client";

import Image from "next/image";
import { useState } from "react";
import { navItems } from "@/data/site-data";

const serviceLinks = [
  {
    label: "Esports Competition",
    href: "#services",
  },
  {
    label: "Creative Campaign",
    href: "#campaigns",
  },
  {
    label: "Talent / KOL",
    href: "#talent",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-0">
      <nav className="mx-auto flex max-w-4xl items-center justify-between rounded-b-2xl border-x border-b border-[#A7FF00] bg-[#252525]/95 px-6 py-3 shadow-xl backdrop-blur-md">
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/assets/logo/leluasa-logo.svg"
            alt="Leluasa E-Sportainment"
            width={120}
            height={40}
            priority
            className="h-8 w-auto"
          />
        </a>

        <div className="hidden items-center gap-9 text-xs font-bold uppercase tracking-[0.18em] text-white/55 md:flex">
          {navItems.map((item) => {
            if (item.label === "Services") {
              return (
                <div key={item.href} className="group relative">
                  <button
                    type="button"
                    className="uppercase tracking-[0.18em] transition hover:text-[#A7FF00] group-hover:text-[#A7FF00]"
                  >
                    {item.label}
                  </button>

                  <div className="invisible absolute left-1/2 top-full z-50 mt-5 w-64 -translate-x-1/2 translate-y-3 rounded-2xl border border-black/10 bg-white p-3 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="grid gap-1">
                      {serviceLinks.map((service) => (
                        <a
                          key={service.href}
                          href={service.href}
                          className="rounded-xl px-4 py-3 text-left text-xs font-black uppercase tracking-[0.16em] text-[#252525] transition hover:bg-[#A7FF00]"
                        >
                          {service.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-[#A7FF00]"
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-full border border-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white md:hidden"
        >
          Menu
        </button>
      </nav>

      {isOpen && (
        <div className="mx-auto mt-2 max-w-4xl rounded-2xl border border-black/10 bg-white p-5 shadow-xl md:hidden">
          <div className="grid gap-3 text-sm font-bold uppercase tracking-[0.18em] text-[#252525]">
            {navItems.map((item) => {
              if (item.label === "Services") {
                return (
                  <div key={item.href} className="border-b border-black/10 pb-3">
                    <button
                      type="button"
                      onClick={() => setIsServicesOpen((prev) => !prev)}
                      className="flex w-full items-center justify-between uppercase tracking-[0.18em]"
                    >
                      Services
                      <span>{isServicesOpen ? "−" : "+"}</span>
                    </button>

                    {isServicesOpen && (
                      <div className="mt-3 grid gap-2 rounded-xl bg-[#F7F7F2] p-3">
                        {serviceLinks.map((service) => (
                          <a
                            key={service.href}
                            href={service.href}
                            onClick={() => {
                              setIsOpen(false);
                              setIsServicesOpen(false);
                            }}
                            className="rounded-lg px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#252525]"
                          >
                            {service.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-black/10 pb-3"
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}