import "../styles/global.css"
import "../styles/links.css"

export interface articleBody {
  title: string,
  linkto : string,
  section : string,
  description : string,
  author : string,
  date : string,
  img? : string,
  width? : number,
  height? : number,
}


export const ArticleThumbnail = ({title , section, linkto  , description , author , date  } : articleBody) => {
    return(  
      
        <div className="group relative md:container md:mx-auto w-96 overflow-hidden rounded-[16px] p-[1px]">
          
          <div className="relative bg-white p-6">
              <div className="space-y-2">
                <a href="blank"><img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-design-template-bd73c9b9180d60c8d677aae7e7495d7f_screen.jpg?ts=1593284625" alt=""/></a>
                
                <a href={linkto} className="text-2xl font-bold text-slate-800">{ title }</a>

                <p className="text-sm font-semibold text-slate-800"><a href = "#">{ section }</a></p>
                <p className="text-base text-slate-800">{description}</p>
                <p className="text-sm font-semibold text-slate-400">
                  <div>By <a href="https://www.youtube.com">{ author }</a> </div>
                  <div>{ date }</div>
                </p>
              </div>
        </div>
        </div>
      

    );
}

