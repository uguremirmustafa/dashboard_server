/*
  Warnings:

  - You are about to drop the column `iconId` on the `Link` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `Link` table. All the data in the column will be lost.
  - You are about to drop the `Icon` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Link" DROP CONSTRAINT "Link_iconId_fkey";

-- AlterTable
ALTER TABLE "Link" DROP COLUMN "iconId",
DROP COLUMN "published",
ADD COLUMN     "icon" TEXT,
ALTER COLUMN "path" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "Icon";
