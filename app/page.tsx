import React from 'react'

import "../styles/global.css"

import { mastHeadBody, MastHead} from '../components/masthead'
import SideTab from '../components/sideTab_MastHead'
import Opinionsidetab from '../components/opinionsidetab'


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

    return ( 
        <>
              
              <div className=" grid grid-cols-4  divide-x-2 divide-gray-200">
                <div className="px-2"><SideTab  articles={articles.slice(5,9)}/></div>
                <div className="col-span-2 px-2"><MastHead articles={articles.slice(0,5)}/></div>
                <div className="px-2"><Opinionsidetab  articles={articles.slice(5,9)}/></div>
              </div>
              
            
        </>
        );
}