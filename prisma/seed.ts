import { PrismaClient } from "@prisma/client";
import {
  gamesSeedData,
  tournamentsSeedData,
  playersSeedData,
  teamsSeedData,
  countriesSeedData,
  leaguesSeedData,
} from "../data/esportsSeedData";

const prisma = new PrismaClient();

function calculateOpportunityScore(params: {
  totalPrizeUsd: number;
  totalTournaments: number;
  totalPlayers: number;
  leluasaFitScore: number;
}) {
  const maxPrize = 350000000;
  const maxTournaments = 7200;
  const maxPlayers = 16500;

  const prizeScore = (params.totalPrizeUsd / maxPrize) * 100;
  const tournamentScore = (params.totalTournaments / maxTournaments) * 100;
  const playerScore = (params.totalPlayers / maxPlayers) * 100;

  const opportunityScore =
    prizeScore * 0.3 +
    tournamentScore * 0.25 +
    playerScore * 0.25 +
    params.leluasaFitScore * 0.2;

  return Math.round(opportunityScore);
}

async function main() {
   await prisma.tournament.deleteMany();
   await prisma.player.deleteMany();
   await prisma.team.deleteMany();
   await prisma.country.deleteMany();
   await prisma.league.deleteMany();
   await prisma.game.deleteMany();

  for (const game of gamesSeedData) {
    const opportunityScore = calculateOpportunityScore({
      totalPrizeUsd: game.totalPrizeUsd,
      totalTournaments: game.totalTournaments,
      totalPlayers: game.totalPlayers,
      leluasaFitScore: game.leluasaFitScore,
    });

    await prisma.game.create({
      data: {
        gameIdFromApi:
          game.gameIdFromApi === 0 ? null : game.gameIdFromApi,
        name: game.name,
        totalPrizeUsd: game.totalPrizeUsd,
        totalTournaments: game.totalTournaments,
        totalPlayers: game.totalPlayers,
        genre: game.genre,
        platform: game.platform,
        competitiveFormat: game.competitiveFormat,
        leluasaFitScore: game.leluasaFitScore,
        opportunityScore,
      },
    });
  }

  for (const tournament of tournamentsSeedData) {
    const relatedGame = await prisma.game.findFirst({
      where: {
        name: tournament.gameName,
      },
    });

    await prisma.tournament.create({
      data: {
        name: tournament.name,
        gameId: relatedGame?.id,
        location: tournament.location,
        isTeamplay: tournament.isTeamplay,
        totalPrizeUsd: tournament.totalPrizeUsd,
      },
    });
  }

  await prisma.player.createMany({
    data: playersSeedData,
  });

  await prisma.team.createMany({
    data: teamsSeedData,
  });
  await prisma.country.createMany({
    data: countriesSeedData,
  });

  await prisma.league.createMany({
    data: leaguesSeedData,
  });


  console.log("Local esports dataset berhasil dimasukkan ke database.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });