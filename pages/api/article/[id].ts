// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../prisma/db' 
/*
    /api/article/[id]

    Will return the data for an article with an id of [id]

    schema in prisma/schema.prisma
    
*/
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
   if (req.method == "GET") {

		const article = await prisma.articles.findUnique({
			where: {
				id : parseInt(req.query['id'] as string)
			},
		});
		if (! article) {
			// article is null b/c nothing meets the query
			res.status(200).json({success : true, message : `ArticleID ${req.query['id']} does not exist.`});
		} else {
			res.status(200).json({success : true, article : article}); 
		}	
	} else {
     res.status(400).json({success : false, message : "Error: bad request"});
   }

}