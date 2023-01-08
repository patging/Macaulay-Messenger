import "../styles/global.css"
import "../styles/links.css"

import NoImgThumbnail from "./noImageThumbnail"

const RelatedRibbon = () => {
    return(
        <div className="">
            <div><h1 className="md:text-2xl text-1xl text-semibold">Related Articles</h1></div>
            <div className="flex divide-x-2 divide-gray-200">
                <div className="flex-auto"><NoImgThumbnail/></div>
                <div className="flex-auto"><NoImgThumbnail/></div>
                
            </div>
        </div>
            
    )
}


export default RelatedRibbon;