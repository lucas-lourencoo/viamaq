-- CreateTable
CREATE TABLE "pieces" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "brand" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "machine_model" TEXT NOT NULL
);

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
    "description" TEXT,
    "category_id" TEXT NOT NULL,
    CONSTRAINT "machines_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_machines" ("brand", "category_id", "description", "hourmeter", "id", "image", "model", "value", "year") SELECT "brand", "category_id", "description", "hourmeter", "id", "image", "model", "value", "year" FROM "machines";
DROP TABLE "machines";
ALTER TABLE "new_machines" RENAME TO "machines";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
