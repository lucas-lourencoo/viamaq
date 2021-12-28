/*
  Warnings:

  - Added the required column `name` to the `pieces` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_pieces" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "machine_model" TEXT NOT NULL
);
INSERT INTO "new_pieces" ("brand", "description", "id", "image", "machine_model", "value") SELECT "brand", "description", "id", "image", "machine_model", "value" FROM "pieces";
DROP TABLE "pieces";
ALTER TABLE "new_pieces" RENAME TO "pieces";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
