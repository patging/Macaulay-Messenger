import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
/*
    /api/article/add?title= , content= , authorID= ,

    POSTS an article entry into the database
*/
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
   if (req.method == "POST") {
        const prisma = new PrismaClient();
        // data validation
		if(! req.query["title"] || ! req.query["content"] || ! req.query["authorID"]) {
            res.status(400).json({message: `Error: Bad request query`});

        } else {
            
            // validating the authorID
            const user = await prisma.userpass.findUnique({
                where: {
                    id : parseInt(req.query['authorID'] as string)
                },
            });
            if (! user) { // if that authorID is invalid
                res.status(422).json({message: `Error: AuthorID ${req.query["authorID"]} does not exist `});
                return;
            }

            // inserting into db
            const art = await prisma.articles.create({
                data : {
                    Title : req.query["title"] as string,
                    content : req.query["content"] as string,
                    authorID : parseInt(req.query["authorID"] as string),
                },
            });
            
            res.status(200).json({message: "Success!"});
        }

	} else {
     res.status(400).json({message : "Error: bad request"});
   }

}