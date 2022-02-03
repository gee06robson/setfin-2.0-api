/*
  Warnings:

  - The `due_date` column on the `documents` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "documents" DROP COLUMN "due_date",
ADD COLUMN     "due_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
