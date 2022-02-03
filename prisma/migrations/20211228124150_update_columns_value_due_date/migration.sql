/*
  Warnings:

  - Changed the type of `value` on the `documents` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "documents" DROP COLUMN "value",
ADD COLUMN     "value" MONEY NOT NULL,
ALTER COLUMN "due_date" DROP NOT NULL,
ALTER COLUMN "due_date" DROP DEFAULT;
