import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

/*
    /api/section/[section]

    Returns new articles with the section tag [section]

    POST ARGS: num (num of articles), start (optional) 

    if start isn't given, will presume 0. May not always reutrn num articles

    if num isn't given will return 422 error

*/
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
     if (req.method == "POST") {
        // args and params for cleanliness
        let section : string = req.query['section'] as string;
        let start : number = req.query['num'] != undefined ? parseInt(req.query['num'] as string) : 0;
        
        // handling num
        if(! req.query['num'] || parseInt(req.query['start'] as string) < 0 || start < 0) {
          // checking invalid values
          res.status(422).json({success: false, message: "Error: Bad body or params are invalid"});
          return;
        } else {

          let num : number = parseInt(req.query['num'] as string);

          const prisma = new PrismaClient();

          const articles = await prisma.articles.findMany({
            where : {
              section : req.query['section'] as string,
            },
            orderBy : {
              id: 'desc',
            },
            skip: start,
            take: num,
          });

          res.status(200).json({success: true, message : "Success!", articles : articles});
          return;
        }

      } else {
       res.status(400).json({success : false, message : "Error: bad request"});        
      }
  
  }