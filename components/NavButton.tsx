import React from 'react'
import Link from 'next/link'

interface body {
    text: string,
    url : string
}

const NavButton = ({ text, url } : body) => {
    /*
        NavButton used primarily in the Header Component
    */

    return (
        <li key={text} className="group w-[100%] py-2 bg-primaryMacaulay hover:bg-white"> 
            <span className='' > 
                <Link href={url}> 
                    {<h6 className='text-white group-hover:text-primaryMacaulay'>{text}</h6>} 
                </Link> 
            </span>
        </li>
    );
};




export default NavButton;