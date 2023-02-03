'use client';

import React from 'react'
import Link from 'next/link'
import { ArticleText } from './articleText';
import "../styles/global.css"


interface articleBody {
    Title: string,
    section: string,
    description : string,
    content: string,
    authorID: number,
    createdAt: string,
    id: number,
    authorName : string,
  }


export const ArticlePage = ({Title, section, description, content, authorID, createdAt, authorName} : articleBody) => {
    return(
        <div className="px-[20%]">
            <p id="" className="pt-4 pb-2 text-2xl md:text-4xl text-semibold">{Title}</p>
            <p className="pb-5 text-1xl md:text-2xl text-gray-500">{description}</p>

            <p className="text-sm font-semibold text-slate-800"> Tags: <Link href ={`/section/${section}`}>{ section }</Link></p>

            <div className="flex pb-2">
                <p className="text-base font-light"> by <Link href={`/profile/${authorID}`}> {authorName + " |" } </Link></p>
                <p className="text-base text-semibold"> { createdAt }</p> 

            </div>
            <img className="pb-4" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-design-template-bd73c9b9180d60c8d677aae7e7495d7f_screen.jpg?ts=1593284625" alt="" />
            <ArticleText body={content}></ArticleText>
                
            
        </div>
         
    )
} 


export default ArticlePage;