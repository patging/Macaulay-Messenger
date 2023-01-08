import "../styles/global.css"
import "../styles/links.css"

const NoImgThumbnail = () => {
    return(
        <div className="group relative md:container mx-auto w-96 overflow-hidden rounded-[16px] p-[1px]">
            <div className="relative bg-white">
                <div className="space-y-2">
                    <a href="" className="text-2xl font-bold text-slate-800">jkjkj jkjkj jkjkj jkjkj jkjkj jkjkj jkjkj jkjkj jkjkj jkjkj </a>
                    <p className="text-sm font-semibold text-slate-800">Tag</p>
                    <p className="text-base text-slate-800">jkjkjkjkj jkjkjkjkj jkjkjkjkj jkjkjkjkj jkjkjkjkj jkjkjkjkj jkjkjkjkj jkjkjkjkj jkjkjkjkj jkjkjkjkj jkjkjkjkj jkjkjkjkj jkjkjkjkj </p>
                    <p className="text-sm font-semibold text-slate-400">By <a href="">Author</a> </p>
                    <p className="text-sm font-semibold text-slate-400">09/09/09 | 5:00 AM</p>
                </div>

            </div>

        </div>
    )
}

export default NoImgThumbnail;