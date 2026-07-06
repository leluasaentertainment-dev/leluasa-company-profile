import KpiCard from "../../components/dashboard/KpiCard";
import GameRankingTable from "../../components/dashboard/GameRankingTable";
import RecentTournamentList from "../../components/dashboard/RecentTournamentList";
import MarketCoverageGrid from "../../components/dashboard/MarketCoverageGrid";
import RankingList from "../../components/dashboard/RankingList";
import NextStepCard from "../../components/dashboard/NextStepCard";

import { prisma } from "../../lib/prisma";
import { formatCompactUsd, formatNumber, formatUsd } from "../../lib/format";

export default async function DashboardPage() {
  const [
    games,
    tournaments,
    players,
    teams,
    countries,
    leagues,
    gameSummary,
    gameCount,
    tournamentCount,
    playerCount,
    teamCount,
    countryCount,
    leagueCount,
  ] = await Promise.all([
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

    prisma.player.findMany({
      orderBy: {
        totalPrizeUsd: "desc",
      },
      take: 5,
    }),

    prisma.team.findMany({
      orderBy: {
        totalPrizeUsd: "desc",
      },
      take: 5,
    }),

    prisma.country.findMany({
      orderBy: {
        totalPrizeUsd: "desc",
      },
      take: 5,
    }),

    prisma.league.findMany({
      orderBy: {
        totalPrizeUsd: "desc",
      },
      take: 5,
    }),

    prisma.game.aggregate({
      _sum: {
        totalPrizeUsd: true,
        totalTournaments: true,
        totalPlayers: true,
      },
    }),

    prisma.game.count(),
    prisma.tournament.count(),
    prisma.player.count(),
    prisma.team.count(),
    prisma.country.count(),
    prisma.league.count(),
  ]);

  const totalPrizePool = gameSummary._sum.totalPrizeUsd ?? 0;
  const totalTournaments = gameSummary._sum.totalTournaments ?? 0;
  const totalPlayers = gameSummary._sum.totalPlayers ?? 0;

  const kpiData = [
    {
      title: "Total Prize Pool",
      value: formatCompactUsd(totalPrizePool),
      description: "Total prize pool from tracked games",
    },
    {
      title: "Total Games",
      value: formatNumber(gameCount),
      description: "Competitive games in database",
    },
    {
      title: "Total Tournaments",
      value: formatNumber(totalTournaments),
      description: "Tournament records from tracked games",
    },
    {
      title: "Total Players",
      value: formatNumber(totalPlayers),
      description: `Player ecosystem records, plus ${playerCount} player profiles`,
    },
  ];

  const coverageItems = [
    {
      label: "Games",
      value: gameCount,
      description: "Game kompetitif yang dianalisis.",
    },
    {
      label: "Tournaments",
      value: tournamentCount,
      description: "Data turnamen untuk melihat aktivitas kompetisi.",
    },
    {
      label: "Players",
      value: playerCount,
      description: "Profil pemain untuk talent dan market insight.",
    },
    {
      label: "Teams",
      value: teamCount,
      description: "Organisasi atau tim esports yang tercatat.",
    },
    {
      label: "Countries",
      value: countryCount,
      description: "Negara yang dianalisis berdasarkan earnings.",
    },
    {
      label: "Leagues",
      value: leagueCount,
      description: "Liga atau circuit esports utama.",
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

  const topCountries = countries.map((country) => ({
    label: country.name,
    meta: `${country.code} • Top game: ${country.topGame ?? "Unknown"}`,
    value: formatCompactUsd(country.totalPrizeUsd),
    badge: `${formatNumber(country.totalPlayers)} players`,
  }));

  const topPlayers = players.map((player) => ({
    label: player.nickname,
    meta: `${player.countryCode ?? "Unknown"} • ${
      player.primaryGame ?? "Multiple Games"
    }`,
    value: formatCompactUsd(player.totalPrizeUsd),
    badge: `${formatNumber(player.totalTournaments)} tournaments`,
  }));

  const topTeams = teams.map((team) => ({
    label: team.name,
    meta: `${team.region ?? "Global"} • ${team.primaryGame ?? "Multiple Games"}`,
    value: formatCompactUsd(team.totalPrizeUsd),
    badge: `${formatNumber(team.totalTournaments)} tournaments`,
  }));

  const topLeagues = leagues.map((league) => ({
    label: league.name,
    meta: `${league.region ?? "Global"} • ${league.mainGame ?? "Multiple Games"}`,
    value: formatCompactUsd(league.totalPrizeUsd),
    badge: league.eventType ?? "League",
  }));

  return (
    <main className="min-h-screen overflow-hidden bg-[#050607] px-6 py-8 text-white">
      <div className="pointer-events-none fixed inset-0 opacity-80">
        <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-[#15B37D]/20 blur-[120px]" />
        <div className="absolute right-[-10%] top-[20%] h-[360px] w-[360px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[40%] h-[360px] w-[360px] rounded-full bg-emerald-400/10 blur-[120px]" />
      </div>

      <section className="relative mx-auto max-w-7xl">
        <div className="mb-10 rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 shadow-2xl shadow-black/30 md:p-10">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#15B37D]/40 bg-[#15B37D]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#15B37D]">
              Leluasa Dashboard
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-gray-400">
              Esports Market Intelligence
            </span>
  
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
                Esports Market
                <span className="block bg-gradient-to-r from-white via-white to-[#15B37D] bg-clip-text text-transparent">
                  Intelligence Dashboard
                </span>
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-7 text-gray-300">
                Dashboard analitik untuk melihat potensi game esports berdasarkan
                prize pool, jumlah turnamen, jumlah player, negara, tim, liga, dan
                peluang aktivasi event/campaign untuk Leluasa E-Sportainment.
              </p>
            </div>

            <div className="rounded-3xl border border-[#15B37D]/30 bg-[#15B37D]/10 p-6">
              <p className="text-sm text-gray-400">Primary Insight</p>
              <h2 className="mt-2 text-2xl font-bold text-[#15B37D]">
                Market Opportunity
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-300">
                Ranking game dibuat dari kombinasi prize pool, aktivitas turnamen,
                jumlah player, dan Leluasa Fit Score.
              </p>
            </div>
          </div>
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

        <MarketCoverageGrid items={coverageItems} />

        <div className="mt-8 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
          <GameRankingTable games={topGames} />
          <RecentTournamentList tournaments={recentTournaments} />
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-2">
          <RankingList
            title="Top Countries by Prize Pool"
            description="Negara dengan total earnings esports terbesar."
            items={topCountries}
          />

          <RankingList
            title="Top Players by Earnings"
            description="Pemain dengan total prize money terbesar pada dataset."
            items={topPlayers}
          />

          <RankingList
            title="Top Teams by Earnings"
            description="Tim atau organisasi esports dengan total earnings terbesar."
            items={topTeams}
          />

          <RankingList
            title="Top Leagues by Prize Pool"
            description="Liga dan circuit esports dengan prize pool terbesar."
            items={topLeagues}
          />
        </div>

        <NextStepCard />
      </section>
    </main>
  );
}