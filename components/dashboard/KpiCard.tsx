type KpiCardProps = {
  title: string;
  value: string;
  description: string;
};

export default function KpiCard({ title, value, description }: KpiCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[#15B37D]/40 hover:bg-white/[0.07]">
      <div className="absolute right-[-40px] top-[-40px] h-28 w-28 rounded-full bg-[#15B37D]/10 blur-2xl transition group-hover:bg-[#15B37D]/20" />

      <div className="relative">
        <p className="text-sm font-medium text-gray-400">{title}</p>

        <h2 className="mt-4 text-4xl font-black tracking-tight text-white">
          {value}
        </h2>

        <p className="mt-3 text-sm leading-6 text-gray-500">{description}</p>
      </div>
    </div>
  );
}