'use client';

import "../styles/global.css"
import { useState } from 'react';
import NavButton from "./NavButton"
import Link from 'next/link'
import Image from 'next/image'

//date stuff didn't finish yet line 94
let d = new Date()
let months = ["January", "February", "March", "April",
"May", "June", "July", "August", "September",
"October", "November", "December"]

const Header = () => {
    // in regards to the hamburger menu
    const [isOpen, setIsOpen] = useState(false);
    //const windowHeight = useRef(window.innerWidth ); // width of the window we're in 

    // dummy data
    let links = [
        { link: "/section/Hunter", text: "Hunter College" },
        { link: "/section/City_College", text: "City College" },
        { link: "/section/NYU", text: "NYU" },
        { link: "/section/Brookdale", text: "Brookdale" },
        { link: "/section/Opinions", text: "Opinons" },
    ];

    /* The Hamburger Dropdown is kind of hacky 
    perhaps a rewrite should be done in the future */
    return (
        <>
            {/*This is the header when the screen is xl */}

            {/* Left side Links */}
            <div className=" hidden lg:flex visible justify-between ">
                <div className="hidden w-[25%]  lg:flex visible  justify-start ">
                    <a href="" className="px-2 text-primaryMacaulay">About</a>
                    <a href="" className="px-2 text-primaryMacaulay">Our team</a>
                    <a href="" className="px-2 text-primaryMacaulay">Advertise</a>
                    <a href="" className="px-2 text-primaryMacaulay">Donate</a>

                </div>


                {/* Image for Macaulay Messenger*/}
                <div className="flex-none">
                    <Link href="/">
                        <div>
                            <Image src="/images/Small_Red_Logo.png" alt="Macaulay Messenger" width="650" height="120" />
                        </div>
                    </Link>
                </div>

                {/* Right side Links */}
                <div className="hidden w-[25%]  lg:flex visible  justify-end ">
                        <div className="inline mx-2 pt-1">
                            <Link href="">
                                <Image
                                    priority
                                    src="/images/gmail_white.svg"
                                    height={24}
                                    width={24}
                                    alt="GM"
                                />
                            </Link>
                        </div>

                        <div className="inline mx-2 pt-1">
                            <Link href="">
                                <Image
                                    priority
                                    src="/images/instagram_white.svg"
                                    height={24}
                                    width={24}
                                    alt="GM"
                                />
                            </Link>
                        </div>

                        <div className="inline mx-2 pt-1">
                            <Link href="">
                                <Image
                                    priority
                                    src="/images/tiktok_white.svg"
                                    height={24}
                                    width={24}
                                    alt="GM"
                                />
                            </Link>
                        </div>
                </div>

                {/* Date and latest issue couldn't format correctly*/}
                {/*<div className="justify-center text-primaryMacaulay-400">{months[parseInt((d.getMonth()).toString())]} {(d.getDate()).toString()}, {(d.getFullYear()).toString()} | <Link href={""} className="group-hover:underline">Latest Issue</Link></div>
                    */}


            </div>

            {/* Nav itself */}
            <nav className={`  sticky top-0 z-10 border-primaryMacaulay bg-primaryMacaulay px-[10%] lg:px-0 `}>
                {/* When this is in the large screen, it'll be traditional header with logo on top */}
                <ul className={`hidden lg:flex px-2 text-center justify-between lg:justify-around`}>
                    {links.map((l) => (
                        <NavButton text={l.text} url={l.link} />
                    )
                    )} 
                </ul>
                

                {/* When it's in a more mobile mode it'll have that other version with a drop down and whatnot */}

                <div className="flex justify-evenly visible lg:hidden">
                        {/* The hamburger icon */}
                        <div className={`inline lg:hidden`} onClick={() => { setIsOpen(!isOpen); }}>
                            {isOpen ?
                                <div className="flex justify-end">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>


                                :
                                <div className="flex justify-end py-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </div>

                            }
                        </div>

                        {/* Image for Macaulay Messenger*/}
                        <div className="flex-none">
                            <Link href="/">
                                <div>
                                    <Image src="/images/Small_White_Logo.png" alt="Macaulay Messenger" width="370" height="120" />
                                </div>
                            </Link>
                        </div>




                </div>

                

                {/* The other nav, idk why i just put 2 down */}
                <ul className={`${isOpen ? "visible" : "hidden "}  px-2  text-center lg:hidden `}>
                    {links.map((l) => (
                        <NavButton text={l.text} url={l.link} />
                    )
                    )}
                </ul>
            </nav>


            {/* <> 

                                
                                <div className='flex'>   
                                    <div className={`inline lg:hidden`} onClick={() => {setIsOpen(!isOpen);} }>
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
                                </div>
                                
                                <nav className={`  border-primaryMacaulay bg-primaryMacaulay `}>
                                    <ul className={`${ isOpen ?"visible" : "hidden md:block"} px-2 md:flex justify-around text-center `}>
                                        {links.map( (l) => (
                                                <NavButton text={l.text} url={l.link} />
                                            ) 
                                        )}
                                    </ul>
                                </nav>
                    </> 
                */}
        </>

    );
}

export default Header;