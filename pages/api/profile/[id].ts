// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
/*
    THIS IS NOT THE FINALIZED VERSION OF THIS, THIS WILL HAVE AUTHENITCATION
    /api/profile/[id]

    Will return the data for an author with an id of [id]

    Not to be confused with a user (per say the administrator or a non publishing user)
    
    schema in prisma/schema.prisma
    
    model Userpass {
    id       Int        @id @default(autoincrement())
    name     String
    password String
    Articles Articles[]
    }
*/
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
   if (req.method == "GET") {
		const prisma = new PrismaClient();

		const profile = await prisma.userpass.findUnique({
			where: {
				id : parseInt(req.query['id'] as string)
			},
		});
		if (! profile) {
			// article is null b/c nothing meets the query
			res.status(200).json({success : true, results : {}});
		} else {
			res.status(200).json({success : true, results : profile}); 
		}	
	} else {
     res.status(400).json({success : false, message : "Error: bad request"});
   }

}