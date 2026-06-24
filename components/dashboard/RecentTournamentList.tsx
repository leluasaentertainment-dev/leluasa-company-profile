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
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
      <h2 className="text-2xl font-semibold">Recent Tournaments</h2>

      <p className="mt-1 text-sm text-gray-400">
        Contoh area untuk Tournament Radar.
      </p>

      <div className="mt-6 space-y-4">
        {tournaments.map((tournament) => (
          <div
            key={tournament.name}
            className="rounded-xl border border-white/10 bg-black/20 p-4"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-white">{tournament.name}</h3>

                <p className="mt-1 text-sm text-gray-400">
                  {tournament.game} • {tournament.type}
                </p>
              </div>

              <span className="rounded-full bg-[#15B37D]/10 px-3 py-1 text-xs font-medium text-[#15B37D]">
                {tournament.prizePool}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}