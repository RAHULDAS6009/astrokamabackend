/*
  Warnings:

  - You are about to drop the column `admissionFee` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `maxStudents` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `monthlyFee` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `timing` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `totalFee` on the `Course` table. All the data in the column will be lost.
  - The `duration` column on the `Course` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `fatherName` on the `Student` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Course" DROP COLUMN "admissionFee",
DROP COLUMN "location",
DROP COLUMN "maxStudents",
DROP COLUMN "monthlyFee",
DROP COLUMN "timing",
DROP COLUMN "totalFee",
ADD COLUMN     "bannerimage" TEXT,
ADD COLUMN     "bannerpdf" TEXT,
ADD COLUMN     "gridTitle" TEXT[],
ADD COLUMN     "ranking" INTEGER,
ADD COLUMN     "type" TEXT,
ALTER COLUMN "courseType" DROP NOT NULL,
DROP COLUMN "duration",
ADD COLUMN     "duration" INTEGER;

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "fatherName",
ADD COLUMN     "branchId" TEXT,
ADD COLUMN     "gurdianName" TEXT,
ADD COLUMN     "relationWithGurdain" TEXT;

-- AlterTable
ALTER TABLE "StudyMaterial" ADD COLUMN     "branchId" TEXT,
ADD COLUMN     "semesterId" TEXT;

-- CreateTable
CREATE TABLE "Branch" (
    "id" TEXT NOT NULL,
    "courseId" INTEGER,
    "name" TEXT NOT NULL,
    "color" TEXT,
    "durationMonths" INTEGER,
    "classType" TEXT,
    "daysPerClassType" INTEGER,
    "classHour" INTEGER,
    "daysJSON" TEXT,

    CONSTRAINT "Branch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Semester" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "number" INTEGER,
    "startDate" TEXT,
    "endDate" TEXT,
    "fees" INTEGER,
    "lateFeeDate" TEXT,
    "lateFeeFine" INTEGER,
    "admissionFee" INTEGER,
    "branchId" TEXT,

    CONSTRAINT "Semester_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "Branch"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Branch" ADD CONSTRAINT "Branch_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Semester" ADD CONSTRAINT "Semester_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "Branch"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudyMaterial" ADD CONSTRAINT "StudyMaterial_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "Branch"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudyMaterial" ADD CONSTRAINT "StudyMaterial_semesterId_fkey" FOREIGN KEY ("semesterId") REFERENCES "Semester"("id") ON DELETE SET NULL ON UPDATE CASCADE;
