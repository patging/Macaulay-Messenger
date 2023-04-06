// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../../prisma/db' 
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
   if (req.method == "POST") {

    
    let body = JSON.parse(req.body);

    // cleaning values for the db
    let num : number = body['num'] != undefined && parseInt(body['num'] as string) > 0 ? body['num'] : 10;
    let start : number = body['start'] != undefined && parseInt(body['start'] as string) >= 0 ? body['start'] : 0;
    
		const articles = await prisma.articles.findMany({
			where: {
				authorID : parseInt(req.query['id'] as string)
			},
      skip : start,
      take : num, 
		});


		if (! articles) {
			// article is null b/c nothing meets the query
			res.status(200).json({success : true, articles : {}});
		} else {
			res.status(200).json({success : true, articles : articles}); 
		}	
    
	} else {
     res.status(400).json({success : false, message : "Error: bad request"});
   }

}