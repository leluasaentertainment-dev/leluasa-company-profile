type RecentTournament = {
  name: string;
  game: string;
  prizePool: string;
  type: string;
};

type RecentTournamentListProps = {
  tournaments: RecentTournament[];
};

export default function RecentTournamentList({
  tournaments,
}: RecentTournamentListProps) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Tournament Radar</h2>

        <p className="mt-1 text-sm text-gray-400">
          Turnamen dengan prize pool terbesar pada dataset.
        </p>
      </div>

      <div className="space-y-4">
        {tournaments.map((tournament, index) => (
          <div
            key={tournament.name}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/25 p-4 transition duration-300 hover:border-[#15B37D]/40 hover:bg-[#15B37D]/10"
          >
            <div className="absolute right-[-30px] top-[-30px] h-24 w-24 rounded-full bg-[#15B37D]/10 blur-2xl" />

            <div className="relative flex items-start justify-between gap-4">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-full bg-white/[0.06] px-2 py-1 text-[10px] font-bold text-gray-400">
                    #{index + 1}
                  </span>

                  <span className="rounded-full bg-[#15B37D]/10 px-2 py-1 text-[10px] font-bold text-[#15B37D]">
                    {tournament.type}
                  </span>
                </div>

                <h3 className="font-bold leading-snug text-white">
                  {tournament.name}
                </h3>

                <p className="mt-1 text-sm text-gray-400">{tournament.game}</p>
              </div>

              <span className="rounded-full bg-[#15B37D]/10 px-3 py-1 text-xs font-bold text-[#15B37D]">
                {tournament.prizePool}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}