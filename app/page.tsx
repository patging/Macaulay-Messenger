import React from 'react'

import "../styles/globals.css"

import Header from "../components/Header"

import ArticleThumbnail from '../components/ArticleThumbnail'

// just here to test new file structure
export default function page() {
    return ( 
        <>
        <script src="https://cdn.tailwindcss.com"></script>
        <section className="flex">
          <div className="flex-none w-1/5 "></div>
          <div className="flex-initial w-3/5">
            <Header/>
            <section className="grid grid-cols-2 gap-4 divide-x-2 divide-gray-200">
              <div className="grid grid-rows-2 gap-4 divide-y divide-gray-200">
                <div><ArticleThumbnail/></div> 
                <div><ArticleThumbnail/></div>
              </div>
              <div className="grid grid-rows-2 gap-1 divide-y divide-gray-200">
                <div><ArticleThumbnail/></div> 
              </div>
            </section>
          </div>
          <div className="flex-none w-1/5"></div>
        </section>
        
        

        
        
        <div className="border border-gray-200"></div>
        <h1 className="font-sans hover:font-serif">Hello, World!</h1>        
        </>

    );
}