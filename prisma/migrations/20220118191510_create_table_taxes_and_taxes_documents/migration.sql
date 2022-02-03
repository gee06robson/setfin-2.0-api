-- CreateTable
CREATE TABLE "taxes" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "ir" MONEY NOT NULL DEFAULT 0.00,
    "csll" MONEY NOT NULL DEFAULT 0.00,
    "cofins" MONEY NOT NULL DEFAULT 0.00,
    "pis_pasep" MONEY NOT NULL DEFAULT 0.00,
    "p_a" MONEY NOT NULL DEFAULT 0.00,
    "iss" MONEY NOT NULL DEFAULT 0.00,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "description" TEXT NOT NULL DEFAULT E'INSTRUÇÃO NORMATIVA RFB Nº 1234, DE 11 DE JANEIRO DE 2012',

    CONSTRAINT "taxes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TaxesDocuments" (
    "document_id" TEXT NOT NULL,
    "taxe_id" TEXT NOT NULL,
    "calculation_basis" MONEY NOT NULL,
    "p_a" MONEY NOT NULL,

    CONSTRAINT "TaxesDocuments_pkey" PRIMARY KEY ("document_id","taxe_id")
);

-- AddForeignKey
ALTER TABLE "TaxesDocuments" ADD CONSTRAINT "TaxesDocuments_document_id_fkey" FOREIGN KEY ("document_id") REFERENCES "documents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaxesDocuments" ADD CONSTRAINT "TaxesDocuments_taxe_id_fkey" FOREIGN KEY ("taxe_id") REFERENCES "taxes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
