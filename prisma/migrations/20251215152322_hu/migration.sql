/*
  Warnings:

  - You are about to drop the column `images` on the `Branch` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Branch" DROP COLUMN "images",
ADD COLUMN     "admissionfee" INTEGER,
ADD COLUMN     "daysPerWeek" TEXT,
ADD COLUMN     "module" TEXT,
ADD COLUMN     "monthlyfee" INTEGER,
ADD COLUMN     "noofsemster" INTEGER,
ADD COLUMN     "tabHeader1" TEXT,
ADD COLUMN     "tabHeader2" TEXT,
ADD COLUMN     "uploadPhoto1" TEXT,
ADD COLUMN     "uploadPhoto2" TEXT;
