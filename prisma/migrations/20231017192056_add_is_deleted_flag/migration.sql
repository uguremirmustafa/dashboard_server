-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Link" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;
