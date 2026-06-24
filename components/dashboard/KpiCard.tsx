type KpiCardProps = {
  title: string;
  value: string;
  description: string;
};

export default function KpiCard({ title, value, description }: KpiCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
      <p className="text-sm text-gray-400">{title}</p>

      <h2 className="mt-3 text-3xl font-bold text-white">{value}</h2>

      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </div>
  );
}