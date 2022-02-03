/*
  Warnings:

  - You are about to drop the column `cofins` on the `taxes` table. All the data in the column will be lost.
  - You are about to drop the column `csll` on the `taxes` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `taxes` table. All the data in the column will be lost.
  - You are about to drop the column `ir` on the `taxes` table. All the data in the column will be lost.
  - You are about to drop the column `iss` on the `taxes` table. All the data in the column will be lost.
  - You are about to drop the column `pis_pasep` on the `taxes` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `taxes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "taxes" DROP COLUMN "cofins",
DROP COLUMN "csll",
DROP COLUMN "description",
DROP COLUMN "ir",
DROP COLUMN "iss",
DROP COLUMN "pis_pasep",
DROP COLUMN "status";
