/*
    SectionButton

    A button that's made of the macaulay colours and will link to the /section it's of

*/

import React from 'react'
import Link from "next/link"

interface SectionButtonBody {
    section : string,
}

export default function SectionButton({section} : SectionButtonBody) {

    return (
        <button className=' bg-primaryMacaulay block p-1 group/sub hover:bg-white'>
            <Link href={`/section/${ encodeURIComponent(section)}`}>
                <h6 className='text-white text-xs group-hover/sub:text-primaryMacaulay'>{section.toUpperCase()}</h6>
            </Link>
        </button>
    );
}