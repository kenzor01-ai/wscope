-- CreateEnum
CREATE TYPE "BrandStatus" AS ENUM ('ACTIVE', 'PAUSED');

-- CreateEnum
CREATE TYPE "CollectionStatus" AS ENUM ('DRAFT', 'LOCKED');

-- CreateEnum
CREATE TYPE "ProductStatus" AS ENUM ('DRAFT', 'LOCKED');

-- CreateEnum
CREATE TYPE "PricingRuleType" AS ENUM ('FLAT', 'PERCENT');

-- CreateEnum
CREATE TYPE "InstallationType" AS ENUM ('TONGUE_GROOVE', 'CLICK', 'GLUE');

-- CreateTable
CREATE TABLE "Brand" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" "BrandStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collection" (
    "id" SERIAL NOT NULL,
    "brandId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "status" "CollectionStatus" NOT NULL DEFAULT 'DRAFT',
    "sourceDoc" TEXT,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CatalogProduct" (
    "id" SERIAL NOT NULL,
    "collectionId" INTEGER NOT NULL,
    "sku" TEXT,
    "name" TEXT NOT NULL,
    "grade" TEXT,
    "widthIn" DOUBLE PRECISION,
    "thicknessIn" DOUBLE PRECISION,
    "lengthIn" DOUBLE PRECISION,
    "wearLayerMm" DOUBLE PRECISION,
    "installation" "InstallationType",
    "radiantApproved" BOOLEAN,
    "basePriceSf" DECIMAL(10,2) NOT NULL,
    "finalPriceSf" DECIMAL(10,2) NOT NULL,
    "status" "ProductStatus" NOT NULL DEFAULT 'DRAFT',

    CONSTRAINT "CatalogProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Carton" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "sqftPerCarton" DOUBLE PRECISION NOT NULL,
    "cartonsPerPallet" INTEGER,

    CONSTRAINT "Carton_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PricingRule" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "PricingRuleType" NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "PricingRule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Brand_name_key" ON "Brand"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Collection_brandId_name_key" ON "Collection"("brandId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Carton_productId_key" ON "Carton"("productId");

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CatalogProduct" ADD CONSTRAINT "CatalogProduct_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carton" ADD CONSTRAINT "Carton_productId_fkey" FOREIGN KEY ("productId") REFERENCES "CatalogProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
