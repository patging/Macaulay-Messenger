/* 
    This component is the actual body of the text inside of an article
    uses the markdown-to-jsx function to render markdown from db into jsx

    https://github.com/probablyup/markdown-to-jsx

    Relies on github markdown style markdown
*/
import Markdown from 'markdown-to-jsx';
import React from 'react';

interface atBody {
    body : string
} // how do you just definoe obj easier :crying:
/*
interface wrapperBody {
    children : any,
    props : any,
}

const GenWrapper = ({children, ...props} : wrapperBody) => {
    return <div {...props}>{children}</div>
};
*/
const SETTINGS = {
    overrides : {
        h1 : {
            props : {
                className : 'text-3xl'
            }
        },
        h2 : {
            props : {
                className : "text-xl"
             }
        },
        p : {
            props : {
                className : "text-md"
            }
        }


    }
} 
/* 
    Config object for the markdown to jsx folder
    to be updated
*/
export const ArticleText = ({body} : atBody ) => {
    return (
        <div className="mb-5">
            <Markdown options={SETTINGS} >{body}</Markdown>
        </div>
    );
}