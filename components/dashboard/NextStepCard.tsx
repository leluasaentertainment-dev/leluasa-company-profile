export default function NextStepCard() {
  return (
    <div className="mt-8 overflow-hidden rounded-[2rem] border border-[#15B37D]/30 bg-[#15B37D]/10 p-6 shadow-2xl shadow-[#15B37D]/5">
      <h2 className="text-xl font-bold text-[#15B37D]">
        Development Status
      </h2>

      <p className="mt-2 text-sm leading-6 text-gray-300">
        Dashboard saat ini menggunakan dataset lokal untuk proses development.
        Setelah API key Esports Earnings aktif, sumber data dapat diganti menjadi
        proses sinkronisasi API ke PostgreSQL.
      </p>
    </div>
  );
}