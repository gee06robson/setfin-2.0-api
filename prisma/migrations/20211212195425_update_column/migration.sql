/*
  Warnings:

  - The `due_date` column on the `documents` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `emission` on the `documents` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "documents" DROP COLUMN "emission",
ADD COLUMN     "emission" TIMESTAMP NOT NULL,
DROP COLUMN "due_date",
ADD COLUMN     "due_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
