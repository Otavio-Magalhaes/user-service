/*
  Warnings:

  - You are about to alter the column `role` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `crm` VARCHAR(191) NULL,
    MODIFY `role` ENUM('ADMIN', 'GESTOR', 'MEDICO', 'ENFERMEIRO', 'RECEPCIONISTA', 'PACIENTE') NOT NULL DEFAULT 'PACIENTE';
