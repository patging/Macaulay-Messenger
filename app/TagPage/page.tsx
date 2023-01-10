import React from 'react'

import "../../styles/global.css"

import RelatedRibbon from "../../components/relatedRibbon"
import ArticlePage from "../../components/articlePage"
import Header from "../../components/Header"
import Footer from '../../components/footer'
import SideTab from '../../components/sideTab_MastHead'

export default async function page() {
    return(
        <div>
            <Header/>
            <RelatedRibbon/>
            <a className="btn-slice" href="">
                <div className="top"> 
                    <span>Load More</span>
                </div>

                <div className="bottom">
                    <span>Load More</span>
                </div>
            </a>
        </div>
        
    )
}