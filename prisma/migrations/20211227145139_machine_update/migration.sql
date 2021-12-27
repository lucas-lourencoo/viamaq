/*
  Warnings:

  - Added the required column `brand` to the `machines` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_machines" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "hourmeter" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,
    CONSTRAINT "machines_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_machines" ("category_id", "hourmeter", "id", "image", "model", "value", "year") SELECT "category_id", "hourmeter", "id", "image", "model", "value", "year" FROM "machines";
DROP TABLE "machines";
ALTER TABLE "new_machines" RENAME TO "machines";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
