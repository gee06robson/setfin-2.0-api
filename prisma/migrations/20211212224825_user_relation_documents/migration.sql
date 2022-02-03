/*
  Warnings:

  - The primary key for the `UnityOnDocuments` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "UnityOnDocuments" DROP CONSTRAINT "UnityOnDocuments_pkey",
ADD CONSTRAINT "UnityOnDocuments_pkey" PRIMARY KEY ("unit_id", "document_id", "assigned_by");

-- AddForeignKey
ALTER TABLE "UnityOnDocuments" ADD CONSTRAINT "UnityOnDocuments_assigned_by_fkey" FOREIGN KEY ("assigned_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
