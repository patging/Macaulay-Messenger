import "../styles/global.css"
import "../styles/links.css"

import {articleBody} from "./ArticleThumbnail"

import Link from 'next/link'

const MainpageSMArt = ({Title, description, section,  authorID, createdAt, id } : articleBody) => {
    return(
        <div className="group relative md:container mx-auto w-96 overflow-hidden rounded-[16px] p-[1px]">
          
          <div className="relative bg-white p-6 ">


            <div className="grid grid-cols-2">
                
                <div>
                    <div className="flex-none"><img className="object-contain h-48 w-96" src="https://pbs.twimg.com/profile_images/1108430392267280389/ufmFwzIn_400x400.png" alt="" /></div>
                </div>
                <div className="divide-y-2 divide-gray-200">
                    <div>
                    <Link href={`/article/${id}`} className="text-2xl font-bold text-slate-800">{ Title.length < 100 ? Title : Title.substring(0,97) + "..." }</Link>

                    <p className="text-sm font-semibold text-slate-800"><Link href ={`/section/${section}`}>{ section }</Link></p>
                    <p className="text-base text-slate-800">{description}</p>
                    <div><p className="text-sm font-semibold text-slate-400">By <Link href={`/profile/${authorID}`}>{ `Author ${authorID}` }</Link> </p></div>
                       
                    <div><p className="text-sm font-semibold text-slate-400">{createdAt} </p></div>
                    </div>
                    <div></div>
                </div>
                

            </div>
        </div>
        </div>
    )
}

export default MainpageSMArt; 