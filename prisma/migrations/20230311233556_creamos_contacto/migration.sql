-- CreateTable
CREATE TABLE `contacto` (
    `dni` VARCHAR(8) NOT NULL,
    `nombre` VARCHAR(45) NOT NULL,
    `apellido` VARCHAR(45) NOT NULL,
    `correo` VARCHAR(191) NULL,
    `telefonos` BIGINT NULL,
    `celular` BIGINT NOT NULL,
    `direccion` TEXT NULL,

    UNIQUE INDEX `contacto_correo_key`(`correo`),
    UNIQUE INDEX `contacto_telefonos_key`(`telefonos`),
    UNIQUE INDEX `contacto_celular_key`(`celular`),
    PRIMARY KEY (`dni`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
