
/*

This is used on the category page and on the right side of the main page and category page where there isn't an image

*/

import "../../styles/global.css"
import "../../styles/links.css"

import {articleBody} from "./ArticleThumbnail"
import SectionButton from "../SectionButton"

import Link from 'next/link'

const NoImgThumbnail = ({Title, description, section,  authorID, createdAt, id } : articleBody) => {
    return(
      <div className="">
        <div className="group relative md:container mx-auto w-96 overflow-hidden rounded-[16px] p-[1px]">
          
          <div className="relative bg-white pb-6">
              <div className="space-y-2">
                
                <Link href={`/article/${id}`} className="text-2xl font-bold text-slate-800">{ Title.length < 100 ? Title : Title.substring(0,97) + "..." }</Link>

                <SectionButton section={section} />
               
                <p className="text-base text-slate-800">{description}</p>
                <div><p className="text-sm font-semibold text-slate-400">By <Link href={`/profile/${authorID}`}>{ `Author ${authorID}` }</Link> </p></div>
                       
                <div><p className="text-sm font-semibold text-slate-400">{createdAt} </p></div>

              </div>
        </div>
        </div>
      </div>
    )
}

export default NoImgThumbnail;