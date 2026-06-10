import Image from "next/image";
import { navItems, siteProfile } from "@/data/site-data";

export default function Footer() {
  return (
    <footer className="bg-[#252525] px-5 py-10 text-white md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 border-t border-white/10 pt-8 md:flex-row md:items-center">
        <div>
          <Image
            src="/assets/logo/leluasa-logo.svg"
            alt="Leluasa E-Sportainment"
            width={150}
            height={50}
            className="h-10 w-auto"
          />
          <p className="mt-4 text-sm text-white/45">{siteProfile.tagline}</p>
        </div>

        <div className="flex flex-wrap gap-5 text-xs font-bold uppercase tracking-[0.2em] text-white/45">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-[#A7FF00]">
              {item.label}
            </a>
          ))}
        </div>

        <p className="text-sm text-white/35">© 2026 Leluasa.</p>
      </div>
    </footer>
  );
}