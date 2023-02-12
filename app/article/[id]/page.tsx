import React from 'react'

import "../../../styles/global.css"

import RelatedRibbon from "../../../components/relatedRibbon"
import ArticlePage from "../../../components/articlePage"
import Header from "../../../components/Header"
import Footer from '../../../components/footer'
import SideTab from '../../../components/sideTab_MastHead'


export default async function page({params} : any) {
    
    const related_resp  = await fetch(`http://localhost:3000/api/article/getNewArticles?numArticles=${6}`,
      {
        method: "POST",
      }
    ); 
    const related_resp_json  = await related_resp.json();
    const related =  related_resp_json['articles'];

    const article_resp  = await fetch(`http://localhost:3000/api/article/${params['id']}`,
      {
        method: "GET",
      }
    );     
    const resp_json  = await article_resp.json();
    const article =  resp_json['article'];

    const profile_resp  = await fetch(`http://localhost:3000/api/profile/${article['authorID']}`,
      {
        method: "GET",
      }
    );     

    const profile_resp_json  = await profile_resp.json();
    const profile =  profile_resp_json['results'];    
    
    // makes me wish I used GraphQL

    article["authorName"] = profile['name'];

    return(
        <div>
            <div className="flex">
                <div className="mx-auto">
                    <ArticlePage {...article} />

                    <RelatedRibbon articles={related.slice(4,6)}/>

                </div>
                <div>
                     <SideTab articles={related.slice(0,4)}/>
                </div>  

            </div>
            
            <Footer/>
        </div>
        
        
    )
}