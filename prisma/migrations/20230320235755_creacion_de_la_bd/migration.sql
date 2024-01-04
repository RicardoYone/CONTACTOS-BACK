/*
  Warnings:

  - You are about to drop the `contacto` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `contacto`;

-- CreateTable
CREATE TABLE `contactos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dni` VARCHAR(8) NOT NULL,
    `nombre` VARCHAR(45) NOT NULL,
    `apellido` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
