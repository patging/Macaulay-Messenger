import "../styles/global.css"
import "../styles/links.css"
import { ArticleThumbnail} from '../components/ArticleThumbnail'
import { mastHeadBody } from "./masthead"

const SideTab = ({articles} : mastHeadBody) =>{
    return(
        <section className="columns-1 divide-y-2 divide-gray-200">
            <div><ArticleThumbnail {...articles[0]}/></div>
            <div><ArticleThumbnail {...articles[1]}/></div>
            <div><ArticleThumbnail {...articles[2]}/></div>
            <div><ArticleThumbnail {...articles[3]}/></div>
        </section>
    )
}

export default SideTab;
