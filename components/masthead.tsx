import "../styles/global.css"
import "../styles/links.css"

import {articleBody, ArticleThumbnail} from '../components/ArticleThumbnail'

export interface mastHeadBody {
    articles : articleBody[],
}

export const MastHead = ({articles} : mastHeadBody) => {
    return(
    <section id="homePageContent" className="place-content-center divide-x-2 divide-gray-200 ">
        <div className="divide-y-2 divide-gray-200">
            <div><ArticleThumbnail {...articles[0]}/></div> 

            <div className="grid grid-cols-2 divide-x-2 divide-gray-200 pt-2">  
                <div className ="divide-y-2 divide-gray-200 pr-2"><div><ArticleThumbnail {...articles[1]}/></div><div></div></div>
                <div className ="divide-y-2 divide-gray-200 pl-2"><div><ArticleThumbnail {...articles[2]}/></div><div></div></div>
            </div>

           

        </div>
    </section>
    )
    
}
