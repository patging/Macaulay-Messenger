import "../styles/global.css"
import "../styles/links.css"
import { ArticleThumbnail} from '../components/ArticleThumbnail'
import { mastHeadBody } from "./masthead"
import NoImgThumbnail from "./noImageThumbnail"
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
           
                    <div className="py-2 divide-y-2"><ArticleThumbnail {...articles[0]}/> <div></div></div>
                    <div className="py-2"><NoImgThumbnail {...articles[1]}/></div>
                    <div className="py-2"><NoImgThumbnail {...articles[2]}/></div>
                    <div></div>
            
                </div>
                <div></div>
        </section>
    )
}

export default Opinionsidetab;