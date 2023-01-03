import React from 'react'

import "../styles/global.css"

import Header from "../components/Header"

import ArticleThumbnail from '../components/ArticleThumbnail'

import MastHead from '../components/masthead'

import Footer from '../components/footer'

// just here to test new file structure
export default function page() {
    return ( 
        <>

         <script src="https://cdn.tailwindcss.com"></script>
        <section className="flex">
          
          <div className="flex-initial ">
            <Header/>
            <MastHead/>
          </div>
        </section>
        
        

        
        
        <div className="border border-gray-200"></div>
        <h1 className="font-sans hover:font-serif">Hello, World!</h1>      
        </>

    );
}