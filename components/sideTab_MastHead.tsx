import "../styles/global.css"
import "../styles/links.css"
import { ArticleThumbnail} from './thumbnails/ArticleThumbnail'
import { mastHeadBody } from "./masthead"
import NoImgThumbnail from "./thumbnails/noImageThumbnail"

const SideTab = ({articles} : mastHeadBody) =>{
    return(
        <section className="columns-1 divide-y-2 divide-gray-200 ">
            <p className="text-2xl font-semibold">Recommended</p>
            { articles.map( (article : any) =>  <NoImgThumbnail className="py-2" {...article}/> ) }
            <div></div>
            
        </section>
    )
}

export default SideTab;
