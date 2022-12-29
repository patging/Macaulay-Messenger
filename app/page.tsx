import React from 'react'

import "../styles/globals.css"

import Header from "../components/Header"

import ArticleThumbnail from '../components/ArticleThumbnail'

// just here to test new file structure
export default function page() {
    return ( 
        <>
        <script src="https://cdn.tailwindcss.com"></script>
        <ArticleThumbnail/>
        <Header />
        <h1 className="font-sans hover:font-serif">Hello, World!</h1>        
        </>

    );
}