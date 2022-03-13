-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Layers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "assignedToLayer" INTEGER
);
INSERT INTO "new_Layers" ("assignedToLayer", "id", "name") SELECT "assignedToLayer", "id", "name" FROM "Layers";
DROP TABLE "Layers";
ALTER TABLE "new_Layers" RENAME TO "Layers";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
