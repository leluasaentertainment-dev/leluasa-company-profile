type GameRanking = {
  rank: number;
  game: string;
  prizePool: string;
  tournaments: number;
  players: number;
  score: number;
};

type GameRankingTableProps = {
  games: GameRanking[];
};

export default function GameRankingTable({ games }: GameRankingTableProps) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Top Games by Market</h2>
          <p className="mt-1 text-sm text-gray-400">
            Ranking game berdasarkan prize pool, jumlah turnamen, jumlah player,
            dan opportunity score.
          </p>
        </div>

        <span className="rounded-full border border-[#15B37D]/30 bg-[#15B37D]/10 px-4 py-2 text-xs font-medium text-[#15B37D]">
          Opportunity Score
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-gray-500">
              <th className="py-4 pr-4">Rank</th>
              <th className="py-4 pr-4">Game</th>
              <th className="py-4 pr-4">Prize Pool</th>
              <th className="py-4 pr-4">Tournaments</th>
              <th className="py-4 pr-4">Players</th>
              <th className="py-4 pr-4">Score</th>
            </tr>
          </thead>

          <tbody>
            {games.map((game) => (
              <tr
                key={game.game}
                className="border-b border-white/5 transition hover:bg-white/[0.035]"
              >
                <td className="py-4 pr-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.06] text-xs font-bold text-gray-300">
                    {game.rank}
                  </span>
                </td>

                <td className="py-4 pr-4">
                  <div>
                    <p className="font-bold text-white">{game.game}</p>
                    <p className="mt-1 text-xs text-gray-500">
                      Competitive title
                    </p>
                  </div>
                </td>

                <td className="py-4 pr-4 font-semibold text-gray-200">
                  {game.prizePool}
                </td>

                <td className="py-4 pr-4 text-gray-300">
                  {game.tournaments.toLocaleString()}
                </td>

                <td className="py-4 pr-4 text-gray-300">
                  {game.players.toLocaleString()}
                </td>

                <td className="py-4 pr-4">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-28 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#15B37D] to-emerald-300"
                        style={{ width: `${game.score}%` }}
                      />
                    </div>

                    <span className="min-w-8 font-black text-[#15B37D]">
                      {game.score}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}