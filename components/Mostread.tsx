import "../styles/global.css"
import "../styles/links.css"
import { ArticleThumbnail} from './thumbnails/ArticleThumbnail'
import { mastHeadBody } from "./masthead"
import NoImgThumbnail from "./thumbnails/noImageThumbnail"
import NavButton from "./NavButton"
import Link from 'next/link'
import { articleBody } from "./Opinionpagearticle"


const Onlytitlethumbnail = ({Title, id } : articleBody) => {
    return(
        <div className="group relative md:container mx-auto w-96 overflow-hidden rounded-[16px] p-[1px]">
          
          <div className="relative bg-white p-6">
              <div className="space-y-2">
                
                <Link href={`/article/${id}`} className="text-2xl font-bold text-slate-800">{ Title.length < 100 ? Title : Title.substring(0,97) + "..." }</Link>


              </div>
        </div>
        </div>
    )
}


const Mostread = ({articles} : mastHeadBody) =>{

    //dummy data gonna be similar to the navbar 
    //gonna use same sections so 
    let links = [
        { link: "/section/Hunter", text: "Hunter College" },
        
    ]

    return(
        <section className="columns-1 pt-2 ">
            <ul className={`hidden lg:flex px-2 text-center justify-between lg:justify-around `}>
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
             
                <div className="divide-y-2 divide-gray-200  ">
                        

                    <div className="py-2 "><Onlytitlethumbnail {...articles[0]}/></div>
                    
                    <div></div>
            
                </div>
                <div></div>
        </section>
    )
}

export default Mostread;