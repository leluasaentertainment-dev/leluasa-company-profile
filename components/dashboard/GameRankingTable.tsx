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
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Top Games by Market</h2>
        <p className="mt-1 text-sm text-gray-400">
          Dummy data sementara sebelum integrasi API Esports Earnings.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-gray-400">
              <th className="py-3 pr-4">Rank</th>
              <th className="py-3 pr-4">Game</th>
              <th className="py-3 pr-4">Prize Pool</th>
              <th className="py-3 pr-4">Tournaments</th>
              <th className="py-3 pr-4">Players</th>
              <th className="py-3 pr-4">Opportunity Score</th>
            </tr>
          </thead>

          <tbody>
            {games.map((game) => (
              <tr
                key={game.game}
                className="border-b border-white/5 hover:bg-white/[0.03]"
              >
                <td className="py-4 pr-4 text-gray-400">#{game.rank}</td>

                <td className="py-4 pr-4 font-medium text-white">
                  {game.game}
                </td>

                <td className="py-4 pr-4 text-gray-300">{game.prizePool}</td>

                <td className="py-4 pr-4 text-gray-300">
                  {game.tournaments.toLocaleString()}
                </td>

                <td className="py-4 pr-4 text-gray-300">
                  {game.players.toLocaleString()}
                </td>

                <td className="py-4 pr-4">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-24 rounded-full bg-white/10">
                      <div
                        className="h-2 rounded-full bg-[#15B37D]"
                        style={{ width: `${game.score}%` }}
                      />
                    </div>

                    <span className="font-semibold text-[#15B37D]">
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