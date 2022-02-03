/*
  Warnings:

  - You are about to alter the column `p_a` on the `TaxesDocuments` table. The data in that column could be lost. The data in that column will be cast from `Money` to `Decimal`.

*/
-- AlterTable
ALTER TABLE "TaxesDocuments" ALTER COLUMN "p_a" SET DATA TYPE DECIMAL;
