/*
  Warnings:

  - A unique constraint covering the columns `[section]` on the table `CMS` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CMS_section_key" ON "CMS"("section");
