-- DropForeignKey
ALTER TABLE "TaxesDocuments" DROP CONSTRAINT "TaxesDocuments_document_id_fkey";

-- DropForeignKey
ALTER TABLE "TaxesDocuments" DROP CONSTRAINT "TaxesDocuments_taxe_id_fkey";

-- DropForeignKey
ALTER TABLE "UnityOnDocuments" DROP CONSTRAINT "UnityOnDocuments_document_id_fkey";

-- DropForeignKey
ALTER TABLE "UnityOnDocuments" DROP CONSTRAINT "UnityOnDocuments_unit_id_fkey";

-- DropForeignKey
ALTER TABLE "documents" DROP CONSTRAINT "documents_creditor_id_fkey";

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_creditor_id_fkey" FOREIGN KEY ("creditor_id") REFERENCES "creditors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnityOnDocuments" ADD CONSTRAINT "UnityOnDocuments_unit_id_fkey" FOREIGN KEY ("unit_id") REFERENCES "units"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnityOnDocuments" ADD CONSTRAINT "UnityOnDocuments_document_id_fkey" FOREIGN KEY ("document_id") REFERENCES "documents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaxesDocuments" ADD CONSTRAINT "TaxesDocuments_document_id_fkey" FOREIGN KEY ("document_id") REFERENCES "documents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaxesDocuments" ADD CONSTRAINT "TaxesDocuments_taxe_id_fkey" FOREIGN KEY ("taxe_id") REFERENCES "taxes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
