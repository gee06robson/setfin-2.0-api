/*
  Warnings:

  - You are about to alter the column `p_a` on the `TaxesDocuments` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(5,2)`.

*/
-- AlterTable
ALTER TABLE "TaxesDocuments" ALTER COLUMN "p_a" SET DATA TYPE DECIMAL(5,2);
