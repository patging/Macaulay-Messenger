/*

This is the the horizontal article that is used underneath the large thumbnail on the main page
It is also used on the Category page on the left side when an image is used

*/

import "../../styles/global.css"
import "../../styles/links.css"

import {articleBody} from "./ArticleThumbnail"
import SectionButton from "../SectionButton"

import Link from 'next/link'

const MainpageSmallArticle = ({Title, description, section,  authorID, createdAt, id } : articleBody) => {
    return(
        <div className="group relative md:container mx-auto w-96 overflow-hidden rounded-[16px] p-[1px]">
          
          <div className="relative bg-white pt-4 lg:grid grid-cols-3">


            
                
                
                <Link href={`/article/${id}`}>
                    <img className="aspect-[4/3] object-cover lg:w-96 px-1" src="https://www.amtrakvacations.com/sites/amtrak/files/styles/hero/public/images/Destination-Yosemite.jpg?h=3a3df0c5&itok=rGMyppyy" alt="" />
                </Link> 
                
                <div className="col-span-2 divide-y-2 ">
                    <div className="pb-6">
                    <Link href={`/article/${id}`} className="text-2xl font-bold text-slate-800">{ Title.length < 100 ? Title : Title.substring(0,97) + "..." }</Link>

                    <SectionButton section={section} />

                    <p className="text-base text-slate-800">{description}</p>
                    <div><p className="text-sm font-semibold text-slate-400">By <Link href={`/profile/${authorID}`}>{ `Author ${authorID}` }</Link> </p></div>
                       
                    <div><p className="text-sm font-semibold text-slate-400">{createdAt} </p></div>
                    </div>
                    <div></div>
                </div>
                

            
        </div>
        </div>
    )
}

export default MainpageSmallArticle; 