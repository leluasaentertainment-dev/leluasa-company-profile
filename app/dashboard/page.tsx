import KpiCard from "../../components/dashboard/KpiCard";
import GameRankingTable from "../../components/dashboard/GameRankingTable";
import RecentTournamentList from "../../components/dashboard/RecentTournamentList";
import NextStepCard from "../../components/dashboard/NextStepCard";

import { prisma } from "../../lib/prisma";
import { formatCompactUsd, formatUsd } from "../../lib/format";

export default async function DashboardPage() {
  const [games, tournaments, playerCount, teamCount] = await Promise.all([
    prisma.game.findMany({
      orderBy: {
        opportunityScore: "desc",
      },
      take: 10,
    }),

    prisma.tournament.findMany({
      orderBy: {
        totalPrizeUsd: "desc",
      },
      take: 5,
      include: {
        game: true,
      },
    }),

    prisma.player.count(),

    prisma.team.count(),
  ]);

  const totalPrizePool = games.reduce(
    (total, game) => total + game.totalPrizeUsd,
    0
  );

  const totalTournaments = games.reduce(
    (total, game) => total + game.totalTournaments,
    0
  );

  const totalPlayers = games.reduce(
    (total, game) => total + game.totalPlayers,
    0
  );

  const kpiData = [
    {
      title: "Total Prize Pool",
      value: formatCompactUsd(totalPrizePool),
      description: "Total prize pool from tracked games",
    },
    {
      title: "Total Games",
      value: `${games.length}`,
      description: "Competitive games in database",
    },
    {
      title: "Total Tournaments",
      value: totalTournaments.toLocaleString(),
      description: "Tournament records from tracked games",
    },
    {
      title: "Total Players",
      value: totalPlayers.toLocaleString(),
      description: `Player ecosystem records, plus ${playerCount} player profiles`,
    },
  ];

  const topGames = games.map((game, index) => ({
    rank: index + 1,
    game: game.name,
    prizePool: formatUsd(game.totalPrizeUsd),
    tournaments: game.totalTournaments,
    players: game.totalPlayers,
    score: Math.round(game.opportunityScore),
  }));

  const recentTournaments = tournaments.map((tournament) => ({
    name: tournament.name,
    game: tournament.game?.name ?? "Unknown Game",
    prizePool: formatUsd(tournament.totalPrizeUsd),
    type: tournament.isTeamplay ? "Team" : "Individual",
  }));

  return (
    <main className="min-h-screen bg-[#0B0B0C] px-6 py-10 text-white">
      <section className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#15B37D]">
            Leluasa Dashboard
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Esports Market Intelligence Dashboard
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-gray-300">
            Dashboard analitik untuk melihat potensi game esports berdasarkan
            prize pool, jumlah turnamen, jumlah player, dan peluang aktivasi
            event/campaign untuk Leluasa E-Sportainment.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {kpiData.map((item) => (
            <KpiCard
              key={item.title}
              title={item.title}
              value={item.value}
              description={item.description}
            />
          ))}
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
          <GameRankingTable games={topGames} />
          <RecentTournamentList tournaments={recentTournaments} />
        </div>

        <div className="mt-4 text-sm text-gray-500">
          Team profiles in database: {teamCount}
        </div>

        <NextStepCard />
      </section>
    </main>
  );
}