#!/usr/bin/python3
import subprocess
import sqlite3
import random
from faker import Faker 
from os.path import exists

SECTIONS = ["News", "Hunter", "City", "John Jay", "Baruch"]

def main():
    '''
    main()

    Initializes a test.sqlite file and fills the two tables
    with dummy data via faker.

    This does not require that test.sqlite doesn't alr exist

    You must install the requirements.txt and run this manually
    from scripts folder
    '''

    if not exists("../prisma/test.sqlite") :
        try:            
            #some shell scripts just for simplicity
            subprocess.run("touch ../prisma/test.sqlite")

            conn = sqlite3.connect("../prisma/test.sqlite")
            cursor = conn.cursor()

            with open("../prisma/create.sql", "r") as f:
                sql = f.read()
                for command in sql.split(';'):
                    cursor.execute(command)

        except:
            print(f'Error at touch test.sqlite. Check if the file doesnt alr exist or that sqlite3 exists on your pc.')
            return None
    else:
        #initalizing SQLite DB
        conn = sqlite3.connect("../prisma/test.sqlite")
        cursor = conn.cursor()

    fake = Faker() #intiializing faker instance

    #using faker js for both userpass and article table
    for i in range(10):
        cursor.executescript(f'INSERT INTO \"Userpass\" (name, password) VALUES (\"{fake.name()}\",\"{fake.job()}\");')

    for j in range(10):
        cursor.executescript(f'INSERT INTO \"Articles\" (Title, description, section, createdAt, content, authorID) VALUES (\"{fake.paragraph(nb_sentences=1)}\", \"{fake.paragraph(nb_sentences=1)}\",\"{random.choice(SECTIONS)}\", \"{"09/09/09"}\", \"{fake.paragraph(nb_sentences=5)}\" ,\"{j}\");')    

    cursor.close()

main()