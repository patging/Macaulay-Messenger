import "../styles/global.css"
import "../styles/links.css"


const ArticleThumbnail = () => {
    return(  
      
        <div className="group relative md:container md:mx-auto w-96 overflow-hidden rounded-[16px] p-[1px]">
          
          <div className="relative bg-white p-6">
              <div className="space-y-2">
                <a href="yomama"><img src="https://media.zenfs.com/en/the_independent_635/52b7f58b061c788cf93123e099974227" alt=""/></a>
                
                <a href="yodaday" className="text-2xl font-bold text-slate-800">Article Name</a>

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