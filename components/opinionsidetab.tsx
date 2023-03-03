import "../styles/global.css"
import "../styles/links.css"
import { ArticleThumbnail} from '../components/ArticleThumbnail'
import { mastHeadBody } from "./masthead"
import NoImgThumbnail from "./noImageThumbnail"

const Opinionsidetab = ({articles} : mastHeadBody) =>{
    return(
        <section className="columns-1 divide-y-2 divide-gray-200 ">
            <p className="text-2xl font-semibold text-center">Recommended</p>
            <div className="py-2"><ArticleThumbnail {...articles[0]}/></div>
            <div className="py-2"><NoImgThumbnail {...articles[1]}/></div>
            <div className="py-2"><NoImgThumbnail {...articles[2]}/></div>
            <div></div>
            
        </section>
    )
}

export default Opinionsidetab;