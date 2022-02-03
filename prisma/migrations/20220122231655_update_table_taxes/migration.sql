/*
  Warnings:

  - You are about to alter the column `p_a` on the `taxes` table. The data in that column could be lost. The data in that column will be cast from `Money` to `Decimal(5,2)`.

*/
-- AlterTable
ALTER TABLE "taxes" ALTER COLUMN "p_a" SET DATA TYPE DECIMAL(5,2);
