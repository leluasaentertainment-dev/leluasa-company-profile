-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "primaryGame" TEXT;

-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "primaryGame" TEXT,
ADD COLUMN     "region" TEXT;

-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "totalPrizeUsd" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalPlayers" INTEGER NOT NULL DEFAULT 0,
    "topGame" TEXT,
    "topGamePrizeUsd" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "topGameShare" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "League" (
    "id" TEXT NOT NULL,
    "leagueIdFromApi" INTEGER,
    "name" TEXT NOT NULL,
    "mainGame" TEXT,
    "region" TEXT,
    "organizer" TEXT,
    "totalPrizeUsd" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalTournaments" INTEGER NOT NULL DEFAULT 0,
    "totalPlayers" INTEGER NOT NULL DEFAULT 0,
    "eventType" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "League_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Country_code_key" ON "Country"("code");

-- CreateIndex
CREATE UNIQUE INDEX "League_leagueIdFromApi_key" ON "League"("leagueIdFromApi");
