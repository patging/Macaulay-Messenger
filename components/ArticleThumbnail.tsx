'use client';

import "../styles/global.css"
import "../styles/links.css"

export interface articleBody {
  Title: string,
  section: string,
  description : string,
  content: string,
  authorID: number,
  createdAt: string,
  id: number,
}


export const ArticleThumbnail = ({Title, description, section,  authorID, createdAt, id } : articleBody) => {


    return(  
      
        <div className="group relative md:container mx-auto w-96 overflow-hidden rounded-[16px] p-[1px]">
          
          <div className="relative bg-white p-6">
              <div className="space-y-2">
                <a href={"#"} className=""><img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-design-template-bd73c9b9180d60c8d677aae7e7495d7f_screen.jpg?ts=1593284625" alt=""/></a>
                
                <a href={"#"} className="text-2xl font-bold text-slate-800">{ Title.length < 100 ? Title : Title.substring(0,97) + "..." }</a>

                <p className="text-sm font-semibold text-slate-800"><a href = "#">{ section }</a></p>
                <p className="text-base text-slate-800">{description}</p>
                <div><p className="text-sm font-semibold text-slate-400">By <a href={`http://localhost:3000/profile/${authorID}`}>{ `Author ${authorID}` }</a> </p></div>
                       
                <div><p className="text-sm font-semibold text-slate-400">{createdAt} </p></div>

              </div>
        </div>
        </div>
      

    );
}

