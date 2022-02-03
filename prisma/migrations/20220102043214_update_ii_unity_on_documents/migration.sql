/*
  Warnings:

  - You are about to drop the `__UnityToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "__UnityToUser" DROP CONSTRAINT "__UnityToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "__UnityToUser" DROP CONSTRAINT "__UnityToUser_B_fkey";

-- AlterTable
ALTER TABLE "UnityOnUsers" ADD COLUMN     "name" TEXT NOT NULL DEFAULT E'';

-- DropTable
DROP TABLE "__UnityToUser";
