import "../styles/global.css"
import "../styles/links.css"

export interface articleBody {
  Title: string,
  linkto? : string,
  section? : string,
  content? : string,
  author : string,
  date? : string,
  img? : string,
  width? : number,
  height? : number,
  id? : number,
}


export const ArticleThumbnail = ({Title , section, linkto  , content , author , id  } : articleBody) => {
    return(  
      
        <div className="group relative md:container md:mx-auto w-96 overflow-hidden rounded-[16px] p-[1px]">
          
          <div className="relative bg-white p-6">
              <div className="space-y-2">
                <a href="blank"><img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-design-template-bd73c9b9180d60c8d677aae7e7495d7f_screen.jpg?ts=1593284625" alt=""/></a>
                
                <a href={"#"} className="text-2xl font-bold text-slate-800">{ content }</a>

                <p className="text-sm font-semibold text-slate-800"><a href = "#">{ "Test" }</a></p>
                <p className="text-base text-slate-800">{"Hello"}</p>
                <p className="text-sm font-semibold text-slate-400">
                  <div>By <a href="https://www.youtube.com">{ `Author ${id}` }</a> </div>
                  <div>{ "09/09/09" }</div>
                </p>
              </div>
        </div>
        </div>
      

    );
}

