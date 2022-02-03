-- CreateTable
CREATE TABLE "_UnityToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UnityToUser_AB_unique" ON "_UnityToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_UnityToUser_B_index" ON "_UnityToUser"("B");

-- AddForeignKey
ALTER TABLE "_UnityToUser" ADD FOREIGN KEY ("A") REFERENCES "units"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UnityToUser" ADD FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
