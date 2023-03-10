import React from 'react'

import "../styles/global.css"

import { ArticleThumbnail } from '../components/ArticleThumbnail'
import { mastHeadBody, MastHead} from '../components/masthead'
import SideTab from '../components/sideTab_MastHead'
import Opinionsidetab from '../components/opinionsidetab'
import Mostread from '../components/Mostread'


/* 
    /

    Homepage for the Macaulay Messenger site
*/
export default async function page() {
    const resp  = await fetch(`http://localhost:3000/api/article/getNewArticles?numArticles=${9}`,
      {
        method: "POST",
      }
    ); 
    const resp_json  = await resp.json();
    const articles =  resp_json['articles'];

    let links = [
        { link: "/section/Hunter", text: "Hunter College" },
        
    ]

    return ( 
        <>
              
              <div className=" grid grid-cols-4">
                {/*rest of the page kind of hard to format tbh*/}
                <section className="col-span-3 pt-4">
                  <div className="grid grid-cols-3 divide-x-2 divide-gray-200">
                    <div className=" px-2 divide-y-2 divide-gray-200">
                      <div><ArticleThumbnail  {...articles[0]}/></div>
                      <div><ArticleThumbnail  {...articles[1]}/></div>
                      <div></div>
                    </div>
                    <div className="col-span-2 px-2 "><MastHead articles={articles.slice(0,5)}/></div>
                    {/*temp*/}
                    <div className="">
                      <Opinionsidetab articles={articles.slice(0,3)}/>
                    </div>
                  </div>
                </section>
                
                {/*right side of the page which is opinion most read and paper*/}
                <section className="grid grid-cols-1 pt-8">
                  <div className="px-2"><Opinionsidetab  articles={articles.slice(5,9)}/></div>
                  <div className="px-2"><Mostread  articles={articles.slice(5,9)}/></div>
                </section>
              </div>
              
            
        </>
        );
}