import React from 'react'

import "../styles/global.css"

import Header from "../components/Header"

import ArticleThumbnail from '../components/ArticleThumbnail'

import MastHead from '../components/masthead'

import Footer from '../components/footer'

import SideTab from '../components/sideTab_MastHead'

// just here to test new file structure
export default function page() {
    return ( 
        <>

         <script src="https://cdn.tailwindcss.com"></script>
        
      
          <Header/>
          <section className="flex flex-row divide-x-2 divide-gray-200">
            <div className="basis-3/4"><MastHead/></div>
            <div className="basis-1/4"><SideTab/></div>
          </section>
          

          <Footer/>
          
      
          <div className="border border-gray-200"></div>
          <h1 className="font-sans hover:font-serif">Hello, World!</h1>      
        </>

    );
}