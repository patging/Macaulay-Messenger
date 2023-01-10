import "../styles/global.css"
import "../styles/links.css"
import { ArticleThumbnail} from '../components/ArticleThumbnail'
import { mastHeadBody } from "./masthead"
import NoImgThumbnail from "./noImageThumbnail"

const SideTab = ({articles} : mastHeadBody) =>{
    return(
        <section className="columns-1 divide-y-2 divide-gray-200 pl-4">
            <p className="text-2xl font-semibold">Recommended</p>
            <div className="py-2"><NoImgThumbnail/></div>
            <div className="py-2"><NoImgThumbnail/></div>
            <div className="py-2"><NoImgThumbnail/></div>
            <div className="py-2"><NoImgThumbnail/></div> 
            <div></div>
            
        </section>
    )
}

export default SideTab;
