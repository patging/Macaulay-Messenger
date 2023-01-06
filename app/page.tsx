import React from 'react'

import "../styles/global.css"

import Header from "../components/Header"
import { mastHeadBody, MastHead} from '../components/masthead'
import Footer from '../components/footer'
import SideTab from '../components/sideTab_MastHead'

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

    //console.log(   articles[0])

    return ( 
        <>
         <script src="https://cdn.tailwindcss.com"></script>
          <Header/>
          <section className="flex flex-row divide-x-2 divide-gray-200">
            <div className="basis-3/4"><MastHead articles={articles.slice(0,5)}/></div>
            <div className="basis-1/4"><SideTab  articles={articles.slice(5,9)}/></div>
          </section>
          <Footer/>
        </>
        );
}