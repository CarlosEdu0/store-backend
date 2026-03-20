/*
  Warnings:

  - You are about to drop the `_ProductToProductGroup` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `productGroupId` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_ProductToProductGroup` DROP FOREIGN KEY `_ProductToProductGroup_A_fkey`;

-- DropForeignKey
ALTER TABLE `_ProductToProductGroup` DROP FOREIGN KEY `_ProductToProductGroup_B_fkey`;

-- AlterTable
ALTER TABLE `products` ADD COLUMN `productGroupId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `_ProductToProductGroup`;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_productGroupId_fkey` FOREIGN KEY (`productGroupId`) REFERENCES `product_groups`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
