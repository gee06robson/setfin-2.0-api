-- CreateTable
CREATE TABLE "UnityOnDocuments" (
    "unityId" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,
    "included_in" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assigned_by" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "UnityOnDocuments_pkey" PRIMARY KEY ("unityId","documentId")
);

-- AddForeignKey
ALTER TABLE "UnityOnDocuments" ADD CONSTRAINT "UnityOnDocuments_unityId_fkey" FOREIGN KEY ("unityId") REFERENCES "units"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnityOnDocuments" ADD CONSTRAINT "UnityOnDocuments_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "documents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
