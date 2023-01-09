import React from 'react'

import "../../styles/global.css"

import RelatedRibbon from "../../components/relatedRibbon"
import ArticlePage from "../../components/articlePage"
import Header from "../../components/Header"
import Footer from '../../components/footer'
import SideTab from '../../components/sideTab_MastHead'

export default async function page() {
    
    const resp  = await fetch(`http://localhost:3000/api/article/getNewArticles?numArticles=${6}`,
      {
        method: "POST",
      }
    ); 
    const resp_json  = await resp.json();
    const articles =  resp_json['articles'];

    const resp_  = await fetch(`http://localhost:3000/api/article/getNewArticles?numArticles=${6}`,
      {
        method: "POST",
      }
    ); 
    const resp_json  = await resp.json();
    const articles =  resp_json['articles'];

    return(
        <div>
            <Header/>
            <div className="flex">
                <div className="mx-auto">
                    <ArticlePage/>

                    <RelatedRibbon articles={articles.slice(4,6)}/>

                </div>
                <div>
                    <SideTab articles={articles.slice(0,4)}/>
                </div>  

            </div>
            
            <Footer/>
        </div>
        
        
    )
}