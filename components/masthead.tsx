import "../styles/global.css"
import "../styles/links.css"

import ArticleThumbnail from '../components/ArticleThumbnail'

const MastHead = () => {
    return(
    <section id="homePageContent" className="place-content-center columns-2 gap-4 divide-x-2 divide-gray-200">
        <div className="gap-25 divide-y divide-gray-200">
            <div><ArticleThumbnail/></div> 
            <div><ArticleThumbnail/></div>
        </div>
        <div className="gap-1 divide-y divide-gray-200 flex-none ">
            <div><ArticleThumbnail/></div> 
            <div><ArticleThumbnail/></div>
            <div><ArticleThumbnail/></div>
        </div>
    </section>
    )
    
}

export default MastHead;