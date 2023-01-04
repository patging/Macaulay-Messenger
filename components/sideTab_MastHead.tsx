import "../styles/global.css"
import "../styles/links.css"
import ArticleThumbnail from "./ArticleThumbnail"

const SideTab = () =>{
    return(
        <section className="columns-1 divide-y-2 divide-gray-200">
            <div><ArticleThumbnail/></div>
            <div><ArticleThumbnail/></div>
            <div><ArticleThumbnail/></div>
            <div><ArticleThumbnail/></div>
        </section>
    )
}

export default SideTab;
