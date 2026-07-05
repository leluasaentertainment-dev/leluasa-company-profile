type RankingItem = {
  label: string;
  meta?: string;
  value: string;
  badge?: string;
};

type RankingListProps = {
  title: string;
  description: string;
  items: RankingItem[];
};

export default function RankingList({
  title,
  description,
  items,
}: RankingListProps) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-1 text-sm text-gray-400">{description}</p>
      </div>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={`${item.label}-${index}`}
            className="group rounded-2xl border border-white/10 bg-black/25 p-4 transition duration-300 hover:border-[#15B37D]/40 hover:bg-white/[0.04]"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-xs font-bold text-gray-400">
                    {index + 1}
                  </span>

                  <h3 className="truncate font-bold text-white">
                    {item.label}
                  </h3>
                </div>

                {item.meta && (
                  <p className="mt-2 truncate pl-10 text-sm text-gray-400">
                    {item.meta}
                  </p>
                )}
              </div>

              <div className="shrink-0 text-right">
                <p className="font-black text-[#15B37D]">{item.value}</p>

                {item.badge && (
                  <p className="mt-1 text-xs text-gray-500">{item.badge}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}