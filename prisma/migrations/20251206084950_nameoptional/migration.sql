-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "email" TEXT,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "phoneno" TEXT,
ALTER COLUMN "rating" DROP NOT NULL;
