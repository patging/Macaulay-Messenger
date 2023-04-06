/*
    SectionButton

    A button that's made of the macaulay colours and will link to the /section it's of

*/

import React from 'react'
import Link from "next/link"

interface SectionButtonBody {
    tag : string,
}

export default function SectionButton({tag} : SectionButtonBody) {
    return (
        <button className=' bg-primaryMacaulay p-1 group hover:bg-white'>
            <Link href={`/section/${tag}`}>
                <h6 className='text-white text-sm group-hover:text-primaryMacaulay'>{tag.toUpperCase()}</h6>
            </Link>
        </button>
    );
}