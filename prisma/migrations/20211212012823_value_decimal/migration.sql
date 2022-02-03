/*
  Warnings:

  - The `value` column on the `documents` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "documents" DROP COLUMN "value",
ADD COLUMN     "value" DECIMAL(65,30) NOT NULL DEFAULT 0.00;
