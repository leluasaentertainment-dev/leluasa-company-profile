-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL,
    "gameIdFromApi" INTEGER,
    "name" TEXT NOT NULL,
    "totalPrizeUsd" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalTournaments" INTEGER NOT NULL DEFAULT 0,
    "totalPlayers" INTEGER NOT NULL DEFAULT 0,
    "genre" TEXT,
    "platform" TEXT,
    "competitiveFormat" TEXT,
    "leluasaFitScore" INTEGER NOT NULL DEFAULT 50,
    "opportunityScore" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lastSyncedAt" TIMESTAMP(3),

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tournament" (
    "id" TEXT NOT NULL,
    "tournamentIdFromApi" INTEGER,
    "gameId" TEXT,
    "name" TEXT NOT NULL,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "location" TEXT,
    "isTeamplay" BOOLEAN NOT NULL DEFAULT false,
    "totalPrizeUsd" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lastSyncedAt" TIMESTAMP(3),

    CONSTRAINT "Tournament_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player" (
    "id" TEXT NOT NULL,
    "playerIdFromApi" INTEGER,
    "nickname" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "countryCode" TEXT,
    "totalPrizeUsd" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalTournaments" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lastSyncedAt" TIMESTAMP(3),

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL,
    "teamIdFromApi" INTEGER,
    "name" TEXT NOT NULL,
    "totalPrizeUsd" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalTournaments" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lastSyncedAt" TIMESTAMP(3),

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Game_gameIdFromApi_key" ON "Game"("gameIdFromApi");

-- CreateIndex
CREATE UNIQUE INDEX "Tournament_tournamentIdFromApi_key" ON "Tournament"("tournamentIdFromApi");

-- CreateIndex
CREATE UNIQUE INDEX "Player_playerIdFromApi_key" ON "Player"("playerIdFromApi");

-- CreateIndex
CREATE UNIQUE INDEX "Team_teamIdFromApi_key" ON "Team"("teamIdFromApi");

-- AddForeignKey
ALTER TABLE "Tournament" ADD CONSTRAINT "Tournament_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE SET NULL ON UPDATE CASCADE;
