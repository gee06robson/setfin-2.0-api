/*
  Warnings:

  - The primary key for the `UnityOnDocuments` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `documentId` on the `UnityOnDocuments` table. All the data in the column will be lost.
  - You are about to drop the column `unityId` on the `UnityOnDocuments` table. All the data in the column will be lost.
  - Added the required column `document_id` to the `UnityOnDocuments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unit_id` to the `UnityOnDocuments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UnityOnDocuments" DROP CONSTRAINT "UnityOnDocuments_documentId_fkey";

-- DropForeignKey
ALTER TABLE "UnityOnDocuments" DROP CONSTRAINT "UnityOnDocuments_unityId_fkey";

-- AlterTable
ALTER TABLE "UnityOnDocuments" DROP CONSTRAINT "UnityOnDocuments_pkey",
DROP COLUMN "documentId",
DROP COLUMN "unityId",
ADD COLUMN     "document_id" TEXT NOT NULL,
ADD COLUMN     "unit_id" TEXT NOT NULL,
ADD CONSTRAINT "UnityOnDocuments_pkey" PRIMARY KEY ("unit_id", "document_id");

-- AddForeignKey
ALTER TABLE "UnityOnDocuments" ADD CONSTRAINT "UnityOnDocuments_unit_id_fkey" FOREIGN KEY ("unit_id") REFERENCES "units"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnityOnDocuments" ADD CONSTRAINT "UnityOnDocuments_document_id_fkey" FOREIGN KEY ("document_id") REFERENCES "documents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
