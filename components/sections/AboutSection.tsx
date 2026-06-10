import { introStats, siteProfile } from "@/data/site-data";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="noise-bg bg-[#F7F7F2] px-5 py-28 text-[#252525] md:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-end">
          <h2 className="font-heading text-[4.8rem] leading-[0.9] md:text-[8.5rem]">
            {siteProfile.aboutTitle}
          </h2>

          <div>
            <p className="text-base leading-8 text-[#252525]/70 md:text-lg">
              {siteProfile.aboutDescription}
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {introStats.map((stat) => (
                <div key={stat.label} className="border-t border-[#252525] pt-4">
                  <p className="font-heading text-5xl leading-none">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-[#252525]/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}