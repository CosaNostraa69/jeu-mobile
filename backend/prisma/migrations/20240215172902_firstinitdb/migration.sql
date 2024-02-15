-- CreateTable
CREATE TABLE "FootballPlayers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "club" TEXT NOT NULL,
    "position" TEXT,

    CONSTRAINT "FootballPlayers_pkey" PRIMARY KEY ("id")
);
