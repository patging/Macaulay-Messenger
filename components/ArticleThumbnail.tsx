import "../styles/globals.css"


const ArticleThumbnail = () => {
    return(  
      <div className="flex h-screen items-center">
        <div className="group relative mx-auto w-96 overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
          <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
          <div className="relative rounded-[15px] bg-white p-6">
            <a href="pussy">
              <div className="space-y-4">
                <img src="https://media.zenfs.com/en/the_independent_635/52b7f58b061c788cf93123e099974227" alt="" />
                <p className="text-2xl font-bold text-slate-800">Article Name</p>
                <p className="text-sm font-semibold text-slate-800">Type</p>
                <p className="text-base text-slate-800">Blah Blah Blah I Am a Government Drone Repeating Popular Opinions</p>
                <p className="text-sm font-semibold text-slate-400">
                  <div>By Yo Mama </div>
                  <div>September 11, 2001</div>
                </p>
              </div>
          </a>
            
        </div>
        </div>
      </div>

    );
}

export default ArticleThumbnail;