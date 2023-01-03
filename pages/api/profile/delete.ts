import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
/*
    /api/article/add?uid= ,

    deletes profile with uid uid

    THIS WILL HAVE AUTHENTICATION IN THE FUTURE
*/
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
   if (req.method == "DELETE") {
        const prisma = new PrismaClient();
        // data validation
		if(! req.query["uid"]) {
            res.status(400).json({success: false, message: `Error: Bad request body`});

        } else {
            // validating the articleID
            const user = await prisma.userpass.findUnique({
                where: {
                    id : parseInt(req.query['uid'] as string)
                },
            });
            if (! user) { // if that authorID is invalid
                res.status(422).json({success : false, message: `Error: UserID ${req.query["uid"]} does not exist `});
                return;
            }

            // interfacing into db
            await prisma.userpass.delete({
                where : {
                    id : parseInt(req.query['uid'] as any),
                },
            });
            
            res.status(200).json({success : true, message: "Success!"});
        }

	} else {
     res.status(400).json({success : false, message : "Error: bad request"});
   }

}