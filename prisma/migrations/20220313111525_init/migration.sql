/*
  Warnings:

  - Added the required column `assignedToLayer` to the `Layers` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Layers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "assignedToLayer" INTEGER NOT NULL
);
INSERT INTO "new_Layers" ("id", "name") SELECT "id", "name" FROM "Layers";
DROP TABLE "Layers";
ALTER TABLE "new_Layers" RENAME TO "Layers";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
