/*
  Warnings:

  - You are about to drop the `Creditor` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Creditor";

-- CreateTable
CREATE TABLE "creditors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "creditors_pkey" PRIMARY KEY ("id")
);
