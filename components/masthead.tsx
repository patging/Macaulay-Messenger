import "../styles/global.css"
import "../styles/links.css"

import {articleBody, ArticleThumbnail} from '../components/ArticleThumbnail'

export interface mastHeadBody {
    articles : articleBody[],
}

export const MastHead = ({articles} : mastHeadBody) => {
    return(
    <section id="homePageContent" className="place-content-center gap-4 divide-x-2 divide-gray-200">
        <div className="gap-25 divide-y divide-gray-200">
            <div><ArticleThumbnail {...articles[0]}/></div> 

            <div className="flex flex-col md:flex-row">  
                <div className ="basis 1/2"><ArticleThumbnail {...articles[1]}/></div>
                <div className="basis 1/2"><ArticleThumbnail {...articles[2]}/></div>
            </div>

            <div className="flex flex-col md:flex-row">
                <div className ="basis 1/2"><ArticleThumbnail {...articles[3]}/></div>
                <div className="basis 1/2"><ArticleThumbnail {...articles[4]}/></div>
            </div>

        </div>
    </section>
    )
    
}
