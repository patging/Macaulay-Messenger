import "../styles/global.css"
import "../styles/links.css"

const NoImgThumbnail = () => {
    return(
        <div className="group relative md:container mx-auto w-96 overflow-hidden rounded-[16px] p-[1px]">
            <div className="relative bg-white p-6">
                <div className="space-y-2">
                    <a href="" className="text-2xl font-bold text-slate-800"> Title</a>
                    <p className="text-sm font-semibold text-slate-800"></p>
                </div>

            </div>

        </div>
    )
}

export default NoImgThumbnail;