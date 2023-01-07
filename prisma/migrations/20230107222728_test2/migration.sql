-- CreateTable
CREATE TABLE "Articles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "section" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "authorID" INTEGER NOT NULL,
    CONSTRAINT "Articles_authorID_fkey" FOREIGN KEY ("authorID") REFERENCES "Userpass" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "Userpass" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Userpass_id_key" ON "Userpass"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Userpass_name_key" ON "Userpass"("name");
