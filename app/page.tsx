import React from 'react'

import "../styles/globals.css"

import Header from "../components/Header"

import ArticleThumbnail from '../components/ArticleThumbnail'

// just here to test new file structure
export default function page() {
    return ( 
        <>
        <script src="https://cdn.tailwindcss.com"></script>
        
        <Header/>
        <div className="grid grid-cols-3 divide-x">
            <div><ArticleThumbnail/></div>
            <div><ArticleThumbnail/></div>
            <div><ArticleThumbnail/></div>
        </div>
        
        <div className="border border-gray-200"></div>
        <h1 className="font-sans hover:font-serif">Hello, World!</h1>        
        </>

    );
}