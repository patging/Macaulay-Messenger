/*
    /section

*/
import React from 'react'
import MainpageSmallArticle from '../../../components/thumbnails/MainpageSmallArticle';
import NoImgThumbnail from '../../../components/thumbnails/noImageThumbnail';
import { ArticleThumbnail } from '../../../components/thumbnails/ArticleThumbnail';
import Opinionsidetab from '../../../components/opinionsidetab';
import Mostread from '../../../components/Mostread';

import "../../../styles/global.css"
import Opinionpagearticle from '../../../components/Opinionpagearticle';

export default async function Page({ params,} : any) {

    const resp  = await fetch(`http://localhost:3000/api/section/${params['section']}`,
            {
                method: "POST",
                body: JSON.stringify(
                    {
                        num : 2,
                    }
                ),
            }
        ); 

    const resp_json  = await resp.json();
    const articles =  resp_json['articles'];
    // makes me wish I knew how to code AHHHHHHHH
    return(
        <div>
            <h1 className="md:text-4xl text-2xl text-primaryMacaulay font-semibold pt-6 pb-4">Category : {decodeURIComponent(params['section'])}</h1>
            <div className="divide-y-2 divide-primaryMacaulay"> {/* for the black line underneath opinion*/}
                <div></div>
                <div></div>
            </div>
            <div className="divide-y-2 divide-gray-200">
                <h2 className="text-1xl font-semibold pt-2 pb-2">Articles</h2>
                


                <div className="grid grid-cols-9 py-4 divide-x-2">
                    <div className="col-span-6 pr-4 ">
                        
                        <NoImgThumbnail Article  {...articles[0]}/>
                        <MainpageSmallArticle Article  {...articles[1]}/>
                        <NoImgThumbnail Article  {...articles[0]}/>
                 
                  

                        
                            
                  
                    </div>
                        
                    <div className="col-span-3 grid grid-cols-1">
                        <div className="px-2"><Opinionsidetab  articles={articles.slice(0,1)}/></div>
                        <div className="pt-4 px-1"><Mostread  articles={articles.slice(0,1)}/></div>
                    </div>
                </div> <div></div>
            
                </div>




            </div>


             
        
    
        
    )
}