import "../styles/global.css"
import "../styles/links.css"


const ArticleThumbnail = () => {
    return(  
      
        <div className="group relative md:container md:mx-auto w-96 overflow-hidden rounded-[16px] p-[1px]">
          
          <div className="relative bg-white p-6">
              <div className="space-y-2">
                <a href="blank"><img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-design-template-bd73c9b9180d60c8d677aae7e7495d7f_screen.jpg?ts=1593284625" alt=""/></a>
                
                <a href="blank" className="text-2xl font-bold text-slate-800">Article Name</a>

                <p className="text-sm font-semibold text-slate-800"><a href = "">Type</a></p>
                <p className="text-base text-slate-800">Blah Blah Blah I Am a Government Drone Repeating Popular Opinions</p>
                <p className="text-sm font-semibold text-slate-400">
                  <div>By <a href="https://www.youtube.com">Yo Mama</a> </div>
                  <div>September 11, 2001</div>
                </p>
              </div>
        </div>
        </div>
      

    );
}

export default ArticleThumbnail;