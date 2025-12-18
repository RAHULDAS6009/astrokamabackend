/*
  Warnings:

  - You are about to drop the column `location` on the `Branch` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[tabHeader1]` on the table `Branch` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tabHeader2]` on the table `Branch` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Branch" DROP COLUMN "location",
ADD COLUMN     "locationId" TEXT;

-- CreateTable
CREATE TABLE "location" (
    "id" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "location_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Branch_tabHeader1_key" ON "Branch"("tabHeader1");

-- CreateIndex
CREATE UNIQUE INDEX "Branch_tabHeader2_key" ON "Branch"("tabHeader2");

-- AddForeignKey
ALTER TABLE "Branch" ADD CONSTRAINT "Branch_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE SET NULL ON UPDATE CASCADE;
