import React from 'react'

import "../styles/global.css"

import Header from "../components/Header"
import { mastHeadBody, MastHead} from '../components/masthead'
import Footer from '../components/footer'
import SideTab from '../components/sideTab_MastHead'

/* 

*/
export default async function page() {

    let a : Array<mastHeadBody> = await fetch("localhost:3000/api/article/getNewArticles", {
      method : "POST",
      body: JSON.stringify({numArticles : 9}),
    });

    return ( 
        <>
         <script src="https://cdn.tailwindcss.com"></script>
          <Header/>
          <section className="flex flex-row divide-x-2 divide-gray-200">
            <div className="basis-3/4"><MastHead {... [a.slice(0,5)]}/></div>
            <div className="basis-1/4"><SideTab {... [a.slice(5,9)]}/></div>
          </section>
          <Footer/>
        </>

    );
}