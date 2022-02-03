-- CreateTable
CREATE TABLE "documents" (
    "id" TEXT NOT NULL,
    "creditor_id" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "emission" TEXT NOT NULL,
    "due_date" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "documents_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_creditor_id_fkey" FOREIGN KEY ("creditor_id") REFERENCES "creditors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
