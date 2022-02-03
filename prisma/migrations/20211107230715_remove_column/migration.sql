/*
  Warnings:

  - You are about to drop the column `code` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[google_id]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `google_id` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_url` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "users_code_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "code",
DROP COLUMN "last_name",
DROP COLUMN "status",
ADD COLUMN     "google_id" TEXT NOT NULL,
ADD COLUMN     "image_url" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "users_google_id_key" ON "users"("google_id");
