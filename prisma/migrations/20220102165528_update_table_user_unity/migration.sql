/*
  Warnings:

  - You are about to drop the `UnityOnUsers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UnityOnUsers" DROP CONSTRAINT "UnityOnUsers_unit_id_fkey";

-- DropForeignKey
ALTER TABLE "UnityOnUsers" DROP CONSTRAINT "UnityOnUsers_user_id_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "unit_id" TEXT NOT NULL DEFAULT E'cf4b8c70-702d-4984-aab8-26fa56b4ef18';

-- DropTable
DROP TABLE "UnityOnUsers";

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_unit_id_fkey" FOREIGN KEY ("unit_id") REFERENCES "units"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
