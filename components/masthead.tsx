import "../styles/global.css"
import "../styles/links.css"

import ArticleThumbnail from '../components/ArticleThumbnail'

const MastHead = () => {
    return(
    <section id="homePageContent" className="place-content-center gap-4 divide-x-2 divide-gray-200">
        <div className="gap-25 divide-y divide-gray-200">
            <div><ArticleThumbnail/></div> 
            <div className="flex flex-row">
                <div className ="basis 2/3"><ArticleThumbnail/></div>
                <div className="basis 1/3"><ArticleThumbnail/></div>
            </div>
        </div>
    </section>
    )
    
}

export default MastHead;