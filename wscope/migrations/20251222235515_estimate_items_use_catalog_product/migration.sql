/*
  Warnings:

  - You are about to drop the column `productId` on the `EstimateItem` table. All the data in the column will be lost.
  - Added the required column `catalogProductId` to the `EstimateItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "EstimateItem" DROP CONSTRAINT "EstimateItem_productId_fkey";

-- AlterTable
ALTER TABLE "EstimateItem" DROP COLUMN "productId",
ADD COLUMN     "catalogProductId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "EstimateItem" ADD CONSTRAINT "EstimateItem_catalogProductId_fkey" FOREIGN KEY ("catalogProductId") REFERENCES "CatalogProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
