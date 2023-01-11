import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../prisma/db' 
/*
    POST : /api/article/getNewArticles 

    body {num : int}

   Returns [num] new articles (sorted by new) with a format similar
   to 

    schema in prisma/schema.prisma
    
\
*/
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

   if (req.method == "POST") {
        if(! req.query["numArticles"]) {
            res.status(422).json({success : false, message : "Error : bad request body"});
            return;
        }
		const articles = await prisma.articles.findMany({
			orderBy : {
                id : 'desc',
            } ,
            take: parseInt(req.query['numArticles'] as string),
		});
        
        res.status(200).json({success : true, message : "Success!", articles : articles})

	} else {
     res.status(400).json({success : false, message : `Error:  request ${req.method}`});
   }

}