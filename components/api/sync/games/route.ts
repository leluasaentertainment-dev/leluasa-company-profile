import { NextResponse } from "next/server";

import { prisma } from "../../../../lib/prisma";
import { lookupGameById } from "../../../../lib/esportsearnings";

const GAME_IDS = [
  231, // Dota 2
  245, // Counter-Strike: Global Offensive
  534, // Fortnite
  179, // League of Legends
  599, // Valorant
];

function calculateOpportunityScore(params: {
  totalPrizeUsd: number;
  totalTournaments: number;
  totalPlayers: number;
}) {
  const prizeScore = Math.min(params.totalPrizeUsd / 3500000, 100);
  const tournamentScore = Math.min(params.totalTournaments / 70, 100);
  const playerScore = Math.min(params.totalPlayers / 200, 100);

  return prizeScore * 0.3 + tournamentScore * 0.35 + playerScore * 0.35;
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function GET() {
  const syncedGames = [];

  for (const gameId of GAME_IDS) {
    const game = await lookupGameById(gameId);

    const opportunityScore = calculateOpportunityScore({
      totalPrizeUsd: game.totalPrizeUsd,
      totalTournaments: game.totalTournaments,
      totalPlayers: game.totalPlayers,
    });

    const savedGame = await prisma.game.upsert({
      where: {
        gameIdFromApi: game.gameIdFromApi,
      },
      update: {
        name: game.name,
        totalPrizeUsd: game.totalPrizeUsd,
        totalTournaments: game.totalTournaments,
        totalPlayers: game.totalPlayers,
        opportunityScore,
        lastSyncedAt: new Date(),
      },
      create: {
        gameIdFromApi: game.gameIdFromApi,
        name: game.name,
        totalPrizeUsd: game.totalPrizeUsd,
        totalTournaments: game.totalTournaments,
        totalPlayers: game.totalPlayers,
        opportunityScore,
        lastSyncedAt: new Date(),
      },
    });

    syncedGames.push(savedGame);

    await delay(1100);
  }

  return NextResponse.json({
    message: "Game sync berhasil",
    total: syncedGames.length,
    data: syncedGames,
  });
}