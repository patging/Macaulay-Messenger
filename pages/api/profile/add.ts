import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../prisma/db' 
/*
    /api/profile/add?username= , password=

    POSTS an profile entry into the database
*/
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
   if (req.method == "POST") {
        // data validation
		if(! req.query["username"] || ! req.query["password"]) {
            res.status(400).json({message: `Error: Bad request body`});

        } else {
            // validating the authorID
            const user = await prisma.userpass.findUnique({
                where: {
                    name : req.query["username"],
                },
            });
            if (user) { // if that username is already in use
                res.status(422).json({message: `Error: username ${req.query["username"]} already exists `});
                return;
            }

            // inserting into db
            await prisma.userpass.create({
                data : {
                    name : req.query["username"] as string,
                    password : req.query["password"] as string,
                },
            });
            
            res.status(200).json({message: "Success!"});
        }

	} else {
     res.status(400).json({message : "Error: bad request"});
   }

}