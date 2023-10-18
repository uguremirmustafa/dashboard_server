/*
  Warnings:

  - You are about to drop the `CategoriesOnLink` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CategoriesOnLink" DROP CONSTRAINT "CategoriesOnLink_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "CategoriesOnLink" DROP CONSTRAINT "CategoriesOnLink_linkId_fkey";

-- DropTable
DROP TABLE "CategoriesOnLink";

-- CreateTable
CREATE TABLE "_CategoryToLink" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToLink_AB_unique" ON "_CategoryToLink"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToLink_B_index" ON "_CategoryToLink"("B");

-- AddForeignKey
ALTER TABLE "_CategoryToLink" ADD CONSTRAINT "_CategoryToLink_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToLink" ADD CONSTRAINT "_CategoryToLink_B_fkey" FOREIGN KEY ("B") REFERENCES "Link"("id") ON DELETE CASCADE ON UPDATE CASCADE;
