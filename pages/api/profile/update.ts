import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../prisma/db' 
/*
    /api/article/add?uid= , username= , password = ,

    updates an article entry into the database

    THIS WILL HAVE AUTHENTICATION IN THE FUTURE
*/
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
   if (req.method == "PUT") {
        // data validation
        if(! req.query['uid'] || ! req.query['username'] || ! req.query['password']) {
            res.status(400).json({message: `Error: Bad request body`});
        } else {
            // validating the articleID
            const user = await prisma.userpass.findUnique({
                where: {
                    id : parseInt(req.query['uid'] as string)
                },
            });
            if (! user) { // if that authorID is invalid
                res.status(422).json({success : false, message: `Error: UID ${req.query["uid"]} does not exist `});
                return;
            }

            // interfacing into db
            await prisma.userpass.update({
                where : {
                    id : parseInt(req.query['uid'] as any),
                }, 
                data : {
                    name : req.query['username'] as string,
                    password : req.query['password'] as string,
                },
            });
            
            res.status(200).json({success : true, message: "Success!"});
        }

	} else {
     res.status(400).json({success : false, message : "Error: bad request"});
   }

}