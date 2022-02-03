/*
  Warnings:

  - You are about to drop the `_DocumentToTags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_DocumentToTags" DROP CONSTRAINT "_DocumentToTags_A_fkey";

-- DropForeignKey
ALTER TABLE "_DocumentToTags" DROP CONSTRAINT "_DocumentToTags_B_fkey";

-- DropForeignKey
ALTER TABLE "tags" DROP CONSTRAINT "tags_unit_id_fkey";

-- DropTable
DROP TABLE "_DocumentToTags";

-- DropTable
DROP TABLE "tags";
