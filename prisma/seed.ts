import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.tournament.deleteMany();
  await prisma.game.deleteMany();
  await prisma.player.deleteMany();
  await prisma.team.deleteMany();

  const dota2 = await prisma.game.create({
    data: {
      gameIdFromApi: 231,
      name: "Dota 2",
      totalPrizeUsd: 350000000,
      totalTournaments: 1900,
      totalPlayers: 4800,
      genre: "MOBA",
      platform: "PC",
      competitiveFormat: "5v5",
      leluasaFitScore: 75,
      opportunityScore: 92,
    },
  });

  const valorant = await prisma.game.create({
    data: {
      gameIdFromApi: 599,
      name: "Valorant",
      totalPrizeUsd: 45000000,
      totalTournaments: 1800,
      totalPlayers: 6800,
      genre: "FPS",
      platform: "PC",
      competitiveFormat: "5v5",
      leluasaFitScore: 88,
      opportunityScore: 78,
    },
  });

  await prisma.tournament.createMany({
    data: [
      {
        tournamentIdFromApi: 10001,
        gameId: dota2.id,
        name: "The International 2024",
        location: "Global",
        isTeamplay: true,
        totalPrizeUsd: 2600000,
      },
      {
        tournamentIdFromApi: 10002,
        gameId: valorant.id,
        name: "Valorant Champions 2024",
        location: "Global",
        isTeamplay: true,
        totalPrizeUsd: 2250000,
      },
    ],
  });

  await prisma.player.createMany({
    data: [
      {
        playerIdFromApi: 20001,
        nickname: "PlayerOne",
        countryCode: "ID",
        totalPrizeUsd: 150000,
        totalTournaments: 24,
      },
      {
        playerIdFromApi: 20002,
        nickname: "PlayerTwo",
        countryCode: "PH",
        totalPrizeUsd: 210000,
        totalTournaments: 31,
      },
    ],
  });

  await prisma.team.createMany({
    data: [
      {
        teamIdFromApi: 30001,
        name: "Team Alpha",
        totalPrizeUsd: 900000,
        totalTournaments: 45,
      },
      {
        teamIdFromApi: 30002,
        name: "Team Beta",
        totalPrizeUsd: 650000,
        totalTournaments: 38,
      },
    ],
  });

  console.log("Seed data berhasil dibuat.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });