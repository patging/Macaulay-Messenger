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
        <span className=' hover:underline' > <Link href={url}> {text} </Link> </span>
    );
};
export default NavButton;