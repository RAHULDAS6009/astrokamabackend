/*
  Warnings:

  - You are about to drop the column `courseId` on the `Branch` table. All the data in the column will be lost.
  - You are about to drop the column `courseCode` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `courseType` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `courseId` on the `StudyMaterial` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[ranking]` on the table `Course` will be added. If there are existing duplicate values, this will fail.
  - Made the column `ranking` on table `Course` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Branch" DROP CONSTRAINT "Branch_courseId_fkey";

-- DropForeignKey
ALTER TABLE "StudyMaterial" DROP CONSTRAINT "StudyMaterial_courseId_fkey";

-- DropIndex
DROP INDEX "Course_courseCode_key";

-- AlterTable
ALTER TABLE "Branch" DROP COLUMN "courseId",
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "courseCode",
DROP COLUMN "courseType",
DROP COLUMN "duration",
DROP COLUMN "isActive",
DROP COLUMN "type",
ALTER COLUMN "ranking" SET NOT NULL;

-- AlterTable
ALTER TABLE "StudyMaterial" DROP COLUMN "courseId";

-- CreateIndex
CREATE UNIQUE INDEX "Course_ranking_key" ON "Course"("ranking");
