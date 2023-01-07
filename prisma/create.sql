/* 
    THIS IS NOT FOR PRODUCTION
    THIS IS TO CREATE A DUMMY DB FILE FOR DEVELOPMENT
    -PG
*/

CREATE TABLE Articles (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "section" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "authorID" INTEGER NOT NULL,
    CONSTRAINT "Articles_authorID_fkey" FOREIGN KEY ("authorID") REFERENCES "Userpass" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE Userpass (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

CREATE UNIQUE INDEX "Userpass_id_key" ON "Userpass"("id");

CREATE UNIQUE INDEX "Userpass_name_key" ON "Userpass"("name");
