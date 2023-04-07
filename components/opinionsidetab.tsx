import "../styles/global.css"
import "../styles/links.css"
import { ArticleThumbnail} from './thumbnails/ArticleThumbnail'
import { mastHeadBody } from "./masthead"
import NoImgThumbnail from "./thumbnails/noImageThumbnail"
import NavButton from "./NavButton"
import Link from 'next/link'

const Opinionsidetab = ({articles} : mastHeadBody) =>{

    //dummy data gonna be similar to the navbar 
    //gonna use same sections so 
    let links = [
        { link: "/section/Hunter", text: "Hunter College" },
        
    ]

    return(
        <section className="columns-1 ">
            <ul className={`hidden lg:flex px-2 text-center justify-between lg:justify-around pt-0 `}>
                    {links.map((l) => (
                        <li key={l.text} className="group w-[100%] py-2 bg-primaryMacaulay "> 
                            <span className='' > 
                                <Link href={l.link}> 
                                    {<h6 className='text-white group-hover:underline'>{l.text}</h6>} 
                                </Link> 
                            </span>
                        </li>
                    )
                    )}
            </ul>
             
                <div className="">
           
                    <div className="py-2 divide-y">

                        {/*Since each page is going to have a diff amount of articles I added some logic to make the first one have an image then if there are anymore articles to make them not have images*/}

                        <ArticleThumbnail {...articles[0]}/> 
                        { articles.length > 1 ? articles.slice(1, articles.length).map( (article : any) =>  <NoImgThumbnail {...article}/> ) : <h1>sneed</h1> }
                        <div></div>
                    </div>
                    
                    
                    <div></div>
            
                </div>
                <div></div>
        </section>
    )
}

export default Opinionsidetab;