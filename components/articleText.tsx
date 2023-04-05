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

// this obj exists because we need some custom aspects to the text and whatnot
// and tailwind overwrtites the h1 -> h6
const SETTINGS = {
    overrides : {
        h1 : {
            props : {
                className : 'text-3xl my-5'
            }
        },
        h2 : {
            props : {
                className : "text-2xl my-3"
             }
        },
        h3 : {
            props : {
                className : "text-xl my-3"
             }
        },
        h4 : {
            props : {
                className : "text-lg my-3"
             }
        },
        h5 : {
            props : {
                className : "text-md my-3"
             }
        },
        h6 : {
            props : {
                className : "text-base my-3"
             }
        },
        p : {
            props : {
                className : "text-base my-3"
            }
        },
        blockquote : {
            props : {
                className : "text-base italic font-semibold my-3"
            }
        },
        ol : {
            props : {
                className : "list-decimal list-inside"
            }
        },
        ul : {
            props : {
                className : "list-decimal list-inside"
            }
        },
    }
} 

/*
    ArticleText

    Uses the MarkDown component from markdown-to-jsx 
    to turn entire markdown into jsx
*/
export const ArticleText = ({body} : atBody ) => {
    return (
        <div className="mb-5">
            <Markdown options={SETTINGS} >{body}</Markdown>
        </div>
    );
}