import "../styles/global.css"
import "../styles/links.css"

import NoImgThumbnail from "./noImageThumbnail"
import {articleBody} from "./ArticleThumbnail"

interface RibbonBody {
    articles : articleBody[],
}

const RelatedRibbon = ( {articles} : RibbonBody ) => {
    return(
        <div className="">
            <div><h1 className="md:text-2xl text-1xl text-semibold">Related Articles</h1></div>
            <div className="flex divide-x-2 divide-gray-200">
                <div className="flex-auto"><NoImgThumbnail {...articles[0]}/></div>
                <div className="flex-auto"><NoImgThumbnail {...articles[1]}/></div>
            </div>
        </div>
    );
}


export default RelatedRibbon;