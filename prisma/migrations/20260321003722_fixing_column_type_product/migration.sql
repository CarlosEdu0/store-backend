/*
  Warnings:

  - You are about to alter the column `picture` on the `products` table. The data in that column could be lost. The data in that column will be cast from `LongBlob` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `products` ADD COLUMN `description` VARCHAR(191) NULL,
    MODIFY `picture` VARCHAR(191) NOT NULL;
