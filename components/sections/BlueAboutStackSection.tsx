import PlaceholderVisual from "@/components/ui/PlaceholderVisual";

export default function BlueAboutStackSection() {
  return (
    <section className="bg-[#F7F7F2] px-5 py-24 text-[#252525] md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-[3.2rem] leading-[0.95] text-[#2A2A2A] md:text-[5rem]">
            About <span className="text-[#006BFF]">Us</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[#252525]/70">
            This section can highlight Leluasa’s creative identity, talent
            positioning, and the emotional/visual atmosphere behind esports
            storytelling and creator collaboration.
          </p>
        </div>

        <div className="mt-14 flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-0">
          <div className="w-full max-w-[280px] md:translate-y-6 md:rotate-[-4deg]">
            <PlaceholderVisual
              theme="blue"
              label="Identity"
              heightClass="h-[360px]"
            />
          </div>

          <div className="z-10 w-full max-w-[300px] md:-mx-8 md:rotate-[2deg]">
            <PlaceholderVisual
              theme="blue"
              label="Atmosphere"
              heightClass="h-[390px]"
            />
          </div>

          <div className="w-full max-w-[280px] md:-ml-8 md:translate-y-4 md:rotate-[4deg]">
            <PlaceholderVisual
              theme="blue"
              label="Presence"
              heightClass="h-[360px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}