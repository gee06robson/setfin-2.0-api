-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_unit_id_fkey";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "unit_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_unit_id_fkey" FOREIGN KEY ("unit_id") REFERENCES "units"("id") ON DELETE SET NULL ON UPDATE CASCADE;
