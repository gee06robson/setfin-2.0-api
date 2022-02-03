-- AlterTable
ALTER TABLE "TaxesDocuments" ADD COLUMN     "correction" MONEY NOT NULL DEFAULT 0.00;

-- AlterTable
ALTER TABLE "taxes" ALTER COLUMN "p_a" DROP DEFAULT;
