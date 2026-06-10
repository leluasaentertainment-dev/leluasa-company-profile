import PlaceholderVisual from "@/components/ui/PlaceholderVisual";

const leftGallery = [
  { label: "Visual 01" },
  { label: "Visual 02" },
  { label: "Visual 03" },
  { label: "Visual 04" },
];

const rightItems = [
  {
    label: "Campaign 05",
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    label: "Campaign 06",
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    label: "Campaign 07",
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function PinkEditorialSection() {
  return (
    <section className="bg-[#F7F7F2] px-5 py-24 text-[#252525] md:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Heading besar atas */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-[3rem] leading-[0.95] text-[#2A2A2A] md:text-[5rem]">
            Lorem Ipsum Dolor Sit Amet,
            <br />
            Consectetur Adipiscing Elit.
          </h2>
        </div>

        {/* Layout 2 kolom */}
        <div className="mt-16 grid gap-12 md:grid-cols-[0.85fr_1.15fr]">
          {/* LEFT COLUMN */}
          <div>
            <div className="mb-8 max-w-sm">
              <h3 className="mb-2 text-3xl font-black text-[#2A2A2A]">
                About us
              </h3>
              <p className="text-base leading-7 text-[#252525]/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent congue porta libero, ac consequat risus tincidunt
                quis. Mauris in feugiat nisi. Curabitur nulla elit, vehicula
                eget sagittis sed.
              </p>
            </div>

            {/* 4 gambar vertikal menempel */}
            <div className="space-y-0">
              {leftGallery.map((item) => (
                <div key={item.label}>
                  <PlaceholderVisual
                    theme="pink"
                    label={item.label}
                    heightClass="aspect-square w-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">
            {rightItems.map((item) => (
              <article key={item.label} className="grid gap-3">
                <PlaceholderVisual
                  theme="pink"
                  label={item.label}
                  heightClass="h-[420px] w-full"
                />

                <div>
                  <h4 className="text-3xl font-black leading-none text-[#2A2A2A]">
                    {item.title}
                  </h4>
                  <p className="mt-2 max-w-md text-base leading-7 text-[#252525]/80">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}