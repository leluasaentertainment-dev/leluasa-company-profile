type MarqueeTextProps = {
  items: string[];
  accent: string;
  dark?: boolean;
  tilted?: boolean;
};

export default function MarqueeText({
  items,
  accent,
  dark = false,
  tilted = false,
}: MarqueeTextProps) {
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <section
      className={`relative z-20 overflow-hidden ${
        tilted ? "-mt-8 -mb-5 rotate-[-2deg] scale-[1.04]" : ""
      }`}
    >
      <div
        className={`overflow-hidden border-y ${
          dark ? "border-white/10 text-white" : "border-black/10 text-[#252525]"
        }`}
        style={{ backgroundColor: accent }}
      >
        <div className="flex w-max marquee-track py-4">
          {repeatedItems.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="font-heading mx-6 whitespace-nowrap text-4xl uppercase leading-none tracking-wide md:text-6xl"
            >
              {item}
              <span className="mx-6">＊</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}