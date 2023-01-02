/* 
    THIS IS NOT FOR PRODUCTION
    THIS IS TO CREATE A DUMMY DB FILE FOR DEVELOPMENT
    -PG
*/

CREATE TABLE "Userpass" (
  "id" INTEGER NOT NULL PRIMARY KEY,  
  "name" TEXT NOT NULL,
  "password" TEXT NOT NULL
);

CREATE TABLE "Articles" (
  "id" INTEGER NOT NULL PRIMARY KEY,  
  "Title" TEXT NOT NULL,
  "content" TEXT NOT NULL,
  "authorID" INTEGER NOT NULL,
  FOREIGN KEY ("authorID") REFERENCES"Userpass"("id")
);
