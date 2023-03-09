import React from 'react'
import "../styles/global.css"
import "../styles/links.css"
import Link from 'next/link'

export interface articleBody {
  Title: string,
  section: string,
  description : string,
  content: string,
  authorID: number,
  createdAt: string,
  id: number,
}


const Opinionpagearticle = ({Title, description, section,  authorID, createdAt, id } : articleBody) => {
    
    
    return (
    <div className="flex pt-2 pb-4">
        <div><p className="flex-intial text-gray">{createdAt} </p></div>
        <div className="flex-auto pl-8 columns-1">
            <Link href={`/article/${id}`} className="text-2xl font-semibold">{ Title.length < 100 ? Title : Title.substring(0,97) + "..." }</Link>
            <p className="text-base">{description}</p>
            <div className="text-sm text-gray">By <Link href={`/profile/${authorID}`}>{ `Author ${authorID}` }</Link></div>
        </div>
        <div className="flex-none"><img className="object-contain h-48 w-96" src="https://pbs.twimg.com/profile_images/1108430392267280389/ufmFwzIn_400x400.png" alt="" /></div>
    </div>
    )
}

export default Opinionpagearticle