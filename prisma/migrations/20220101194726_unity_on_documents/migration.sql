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
CREATE TABLE "UnityOnUsers" (
    "unit_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UnityOnUsers_pkey" PRIMARY KEY ("unit_id","user_id")
);

-- AddForeignKey
ALTER TABLE "UnityOnUsers" ADD CONSTRAINT "UnityOnUsers_unit_id_fkey" FOREIGN KEY ("unit_id") REFERENCES "units"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnityOnUsers" ADD CONSTRAINT "UnityOnUsers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
