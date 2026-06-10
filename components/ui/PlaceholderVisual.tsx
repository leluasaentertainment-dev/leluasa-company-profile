type PlaceholderVisualProps = {
  theme: "pink" | "blue" | "green";
  label: string;
  heightClass?: string;
};

const themeMap = {
  pink: {
    bg: "from-[#ff9fcf] via-[#ff2e93] to-[#1a0713]",
    ring: "ring-[#ff2e93]/15",
    glow: "shadow-[0_20px_60px_rgba(255,46,147,0.18)]",
  },
  blue: {
    bg: "from-[#8fc0ff] via-[#006BFF] to-[#071a33]",
    ring: "ring-[#006BFF]/15",
    glow: "shadow-[0_20px_60px_rgba(0,107,255,0.18)]",
  },
  green: {
    bg: "from-[#d5ff85] via-[#A7FF00] to-[#111d00]",
    ring: "ring-[#A7FF00]/15",
    glow: "shadow-[0_20px_60px_rgba(167,255,0,0.18)]",
  },
};

export default function PlaceholderVisual({
  theme,
  label,
  heightClass = "h-[280px]",
}: PlaceholderVisualProps) {
  const style = themeMap[theme];

  return (
    <div
      className={`relative overflow-hidden rounded-[0.4rem] bg-gradient-to-br ${style.bg} ${style.glow} ring-1 ${style.ring} ${heightClass}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.35),transparent_18%),radial-gradient(circle_at_75%_30%,rgba(255,255,255,0.15),transparent_20%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.12),transparent_18%)]" />

      <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white backdrop-blur-sm">
        Placeholder
      </div>

      <div className="absolute bottom-4 left-4 right-4">
        <p className="font-heading text-5xl leading-none text-white/90 md:text-6xl">
          {label}
        </p>
      </div>
    </div>
  );
}