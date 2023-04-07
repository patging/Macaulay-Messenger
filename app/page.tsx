import React from 'react'

import "../styles/global.css"

import { ArticleThumbnail } from '../components/thumbnails/ArticleThumbnail'
import { mastHeadBody, MastHead} from '../components/masthead'
import SideTab from '../components/sideTab_MastHead'
import Opinionsidetab from '../components/opinionsidetab'
import Mostread from '../components/Mostread'

import SectionButton from '../components/SectionButton'

import MainpageSmallArticle from '../components/thumbnails/MainpageSmallArticle'


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
              {/*
              <div className=" grid grid-cols-4">
                {/*rest of the page kind of hard to format tbh
                <section className="col-span-3 pt-4">
                  <div className="grid grid-cols-3 divide-x-2 divide-gray-200">
                    <div className=" px-2 divide-y-2 divide-gray-200">
                      <div><ArticleThumbnail  {...articles[0]}/></div>
                      <div><ArticleThumbnail  {...articles[1]}/></div>
                      <div></div>
                    </div>
                    <div className="col-span-2 px-2 "><MastHead articles={articles.slice(0,5)}/></div>
                    {/*temp
                    <div className="">
                      <Opinionsidetab articles={articles.slice(0,3)}/>
                    </div>
                  </div>
                </section>
                
                
                {/*right side of the page which is opinion most read and paper
                <section className="grid grid-cols-1 pt-8">
                  <div className="px-2"><Opinionsidetab  articles={articles.slice(5,9)}/></div>
                  <div className="px-2"><Mostread  articles={articles.slice(5,9)}/></div>
                </section>


              </div>
              */} {/*old plan*/}
              
              <h1 className="md:text-4xl text-2xl  pt-8 pb-4">BREAKING News</h1>
              <div className="divide-y-2"> {/* for the black line underneath opinion*/}
                <div></div>
                <div></div>
              </div>

              <div className="lg:grid grid-cols-12 py-4 divide-x ">
                <div className="col-span-8 pr-4 ">
                  <div className="divide-y">
                    <ArticleThumbnail {...articles[0]} hasImage={false} /> <div></div>
                  </div>
                  <MainpageSmallArticle {...articles[1]}/>
                  <MainpageSmallArticle {...articles[2]}/>
                </div>

                <div className="col-span-4 grid grid-cols-1 pl-2 invisible lg:visible">
                  <div className="px-2"><Opinionsidetab  articles={articles.slice(3,6)}/></div>
                  <div className="pt-4 px-1"><Mostread  articles={articles.slice(6,9)}/></div>
                </div>
                </div>
            
        </>
        );
}