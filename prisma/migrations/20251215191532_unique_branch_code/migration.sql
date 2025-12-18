/*
  Warnings:

  - A unique constraint covering the columns `[branchCode]` on the table `Branch` will be added. If there are existing duplicate values, this will fail.
  - Made the column `branchCode` on table `Branch` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Branch" ALTER COLUMN "branchCode" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Branch_branchCode_key" ON "Branch"("branchCode");
