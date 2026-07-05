type CoverageItem = {
  label: string;
  value: number;
  description: string;
};

type MarketCoverageGridProps = {
  items: CoverageItem[];
};

export default function MarketCoverageGrid({ items }: MarketCoverageGridProps) {
  return (
    <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Market Coverage</h2>
          <p className="mt-1 text-sm text-gray-400">
            Ringkasan cakupan data dashboard berdasarkan kategori utama esports.
          </p>
        </div>

        <span className="rounded-full bg-white/[0.06] px-4 py-2 text-xs text-gray-400">
          Dataset Overview
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
        {items.map((item) => (
          <div
            key={item.label}
            className="group rounded-2xl border border-white/10 bg-black/25 p-5 transition duration-300 hover:border-[#15B37D]/40 hover:bg-[#15B37D]/10"
          >
            <div className="mb-4 h-1.5 w-10 rounded-full bg-[#15B37D]/70 transition group-hover:w-16" />

            <p className="text-sm text-gray-400">{item.label}</p>

            <h3 className="mt-2 text-4xl font-black text-white">
              {item.value.toLocaleString()}
            </h3>

            <p className="mt-3 text-xs leading-5 text-gray-500">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}