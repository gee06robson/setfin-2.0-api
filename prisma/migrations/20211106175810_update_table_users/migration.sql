/*
  Warnings:

  - You are about to drop the column `login` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "login",
ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT false;
