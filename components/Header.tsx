'use client';

import "../styles/global.css"
import {useState, useRef} from 'react';
import NavButton from "./NavButton"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Header = () => {
    // in regards to the hamburger menu
    const [isOpen, setIsOpen] = useState(false);
    //const windowHeight = useRef(window.innerWidth ); // width of the window we're in 

    // dummy data
    let links = [
        {link: "", text: "Hunter College"},
        {link: "", text: "City College"},
        {link: "", text: "NYU"},
        {link: "", text: "Brookdale"},
        {link: "/section", text: "Opinons"},
    ];

    /* The Hamburger Dropdown is kind of hacky 
    perhaps a rewrite should be done in the future */
    return ( 
        <>
            <div className='flex  mt-5 mb-5'>   
                <div className={`inline md:hidden`} onClick={() => {setIsOpen(!isOpen);} }>
                    {/* Hamburger and X Icon from heroicons.com*/}
                    {isOpen? 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg> 
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>                  
                    }

                </div>
                    {/*This is the header title */}
                <div className="text-center w-[100%]">
                    <Link href="/"><h1 className='font-playfair font-bold text-3xl md:text-6xl'>Macaulay Messenger</h1></Link>
                </div>
        
            </div>

            <nav className={` ${ isOpen ?"visible" : "hidden md:block"} lg:border-t-2 border-b-2 border-solid border-black py-2`}>
                <ul className={`px-2 md:flex justify-around text-center `}>
                    {links.map( (l) => (<li key={l.text}> <NavButton text={l.text} url={l.link} /> </li>) )}
                </ul>
            </nav>
        </>
    );
}

export default Header;