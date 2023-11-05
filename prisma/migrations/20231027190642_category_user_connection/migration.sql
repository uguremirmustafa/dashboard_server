/*
  Warnings:

  - A unique constraint covering the columns `[ownerId,name]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ownerId` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Category_name_key";

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "ownerId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Category_ownerId_name_key" ON "Category"("ownerId", "name");

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
