import React from 'react'

import "../../styles/global.css"

import Header from "../../components/Header"
import SlicingButton from '../../components/SlicingButton'

export default async function page() {
    return(
        <div>
            <Header/>
            <h1 className="md:text-4xl text-2xl font-semibold pt-12 pb-4">Opinion</h1>
            <div className="divide-y-2 divide-black"> {/* for the black line underneath opinion*/}
                <div></div>
                <div></div>
            </div>
            <div className="divide-y-2 divide-gray-200">
                <h2 className="text-1xl font-semibold pt-2 pb-2">Articles</h2>
                <div className="flex pt-4">
                    <div className="flex-intial text-gray">September 09, 2009</div>
                    <div className="flex-auto pl-8 columns-1">
                        <div className="text-2xl font-semibold"><a href="">Title</a></div>
                        <div className="text-base">blurb</div>
                        <div className="text-sm text-gray">By <a href="linkEffect">Author</a></div>
                    </div>
                    <div className="flex-none"><img src="https://pbs.twimg.com/profile_images/1108430392267280389/ufmFwzIn_400x400.png" alt="" /></div>
                </div>
                <div className="flex pt-4">
                    <div className="flex-intial text-gray">September 09, 2009</div>
                    <div className="flex-auto pl-8 columns-1">
                        <div className="text-2xl font-semibold"><a href="">Title</a></div>
                        <div className="text-base">blurb</div>
                        <div className="text-sm text-gray">By <a href="linkEffect">Author</a></div>
                    </div>
                    <div className="flex-none"><img src="https://pbs.twimg.com/profile_images/1108430392267280389/ufmFwzIn_400x400.png" alt="" /></div>
                </div>

            </div>
            <SlicingButton/>
        </div>
        
    )
}