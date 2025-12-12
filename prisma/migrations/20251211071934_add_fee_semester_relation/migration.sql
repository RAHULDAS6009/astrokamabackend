/*
  Warnings:

  - Added the required column `updatedAt` to the `Fee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Fee" ADD COLUMN     "description" TEXT,
ADD COLUMN     "lateFine" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "paymentDate" TIMESTAMP(3),
ADD COLUMN     "paymentMode" TEXT,
ADD COLUMN     "semesterId" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "month" DROP NOT NULL,
ALTER COLUMN "year" DROP NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'Pending';

-- CreateIndex
CREATE INDEX "Fee_studentId_idx" ON "Fee"("studentId");

-- CreateIndex
CREATE INDEX "Fee_semesterId_idx" ON "Fee"("semesterId");

-- CreateIndex
CREATE INDEX "Fee_status_idx" ON "Fee"("status");

-- AddForeignKey
ALTER TABLE "Fee" ADD CONSTRAINT "Fee_semesterId_fkey" FOREIGN KEY ("semesterId") REFERENCES "Semester"("id") ON DELETE SET NULL ON UPDATE CASCADE;
