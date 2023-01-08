import React from 'react'

import "../../styles/global.css"

import Header from "../../components/Header"
import Footer from '../../components/footer'

export default async function page() {
    return(
        <div>
            <Header/>
            
            <p id="" className="pt-2 pb-2 text-center text-2xl md:text-4xl text-semibold">Article Title</p>
            
            <Footer/>
        </div>
        
        
    )
}