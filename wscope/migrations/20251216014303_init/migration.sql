-- CreateEnum
CREATE TYPE "ClientSource" AS ENUM ('WALK_IN', 'REFERRAL', 'REALTOR', 'BUILDER', 'WEBSITE', 'OTHER');

-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "address" TEXT,
ADD COLUMN     "source" "ClientSource";
