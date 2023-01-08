import React from 'react'

import "../../styles/global.css"

import RelatedRibbon from "../../components/relatedRibbon"
import ArticlePage from "../../components/articlePage"
import Header from "../../components/Header"
import Footer from '../../components/footer'
import SideTab from '../../components/sideTab_MastHead'

export default async function page() {
    
    const resp  = await fetch(`http://localhost:3000/api/article/getNewArticles?numArticles=${9}`,
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

                    <RelatedRibbon/>

                </div>
                <div>
                    <SideTab articles={articles.slice(5,9)}/>
                </div>  

            </div>
            
            <Footer/>
        </div>
        
        
    )
}