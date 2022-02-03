/*
  Warnings:

  - You are about to drop the `_UnityToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_UnityToUser" DROP CONSTRAINT "_UnityToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_UnityToUser" DROP CONSTRAINT "_UnityToUser_B_fkey";

-- DropTable
DROP TABLE "_UnityToUser";

-- CreateTable
CREATE TABLE "__UnityToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "__UnityToUser_AB_unique" ON "__UnityToUser"("A", "B");

-- CreateIndex
CREATE INDEX "__UnityToUser_B_index" ON "__UnityToUser"("B");

-- AddForeignKey
ALTER TABLE "__UnityToUser" ADD FOREIGN KEY ("A") REFERENCES "units"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "__UnityToUser" ADD FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
