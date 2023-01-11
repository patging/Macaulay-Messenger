import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../prisma/db' 
/*
    /api/article/add?articleID= ,

    updates an article entry into the database

    THIS WILL HAVE AUTHENTICATION IN THE FUTURE
*/
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
   if (req.method == "PUT") {
        // data validation
        if(! req.query["title"] || ! req.query["content"] || ! req.query["authorID"]) {
            res.status(400).json({message: `Error: Bad request body`});

        } else {
            // validating the articleID
            const article = await prisma.articles.findUnique({
                where: {
                    id : parseInt(req.query['articleID'] as string)
                },
            });
            if (! article) { // if that authorID is invalid
                res.status(422).json({success : false, message: `Error: AuthorID ${req.query["authorID"]} does not exist `});
                return;
            }

            // interfacing into db
            await prisma.articles.update({
                where : {
                    id : parseInt(req.query['articleID'] as any),
                }, 
                data : {
                    Title : req.query["title"] as string,
                    content : req.query["content"] as string,
                    authorID : parseInt(req.query["authorID"] as string),
                },
            });
            
            res.status(200).json({success : true, message: "Success!"});
        }

	} else {
     res.status(400).json({success : false, message : "Error: bad request"});
   }

}