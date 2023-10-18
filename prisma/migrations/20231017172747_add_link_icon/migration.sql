-- AlterTable
ALTER TABLE "Link" ADD COLUMN     "iconId" INTEGER;

-- CreateTable
CREATE TABLE "Icon" (
    "id" SERIAL NOT NULL,
    "path" VARCHAR(255) NOT NULL,

    CONSTRAINT "Icon_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_iconId_fkey" FOREIGN KEY ("iconId") REFERENCES "Icon"("id") ON DELETE SET NULL ON UPDATE CASCADE;
