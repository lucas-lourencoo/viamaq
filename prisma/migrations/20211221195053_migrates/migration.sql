-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "machines" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "hourmeter" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,
    CONSTRAINT "machines_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
