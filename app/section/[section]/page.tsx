import React from 'react'

import "../../../styles/global.css"
import Opinionpagearticle from '../../../components/Opinionpagearticle';

export default async function Page({
    params,
    } : any) {

        const resp  = await fetch(`http://localhost:3000/api/article/getNewArticles?numArticles=${9}`,
      {
        method: "POST",
      }
    ); 
    const resp_json  = await resp.json();
    const articles =  resp_json['articles'];

   

    
    // makes me wish I knew how to code AHHHHHHHH

   

    return(
        <div>
            
            <h1 className="md:text-4xl text-2xl font-semibold pt-6 pb-4">Category : {params['section']}</h1>
            <div className="divide-y-2 divide-black"> {/* for the black line underneath opinion*/}
                <div></div>
                <div></div>
            </div>
            <div className="divide-y-2 divide-gray-200">
                <h2 className="text-1xl font-semibold pt-2 pb-2">Articles</h2>
                <Opinionpagearticle {...articles[0]}/>
                <Opinionpagearticle {...articles[1]}/>

            </div>
            
        </div>
        
    )
}