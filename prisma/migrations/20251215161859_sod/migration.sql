/*
  Warnings:

  - A unique constraint covering the columns `[location]` on the table `location` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "location_location_key" ON "location"("location");
