
import React from 'react'
import MainpageSmallArticle from '../../../components/thumbnails/MainpageSmallArticle';

export default async function Page({ params,} : any) {
    
    const resp = await fetch(`http://localhost:3000/api/profile/getArticles/${params['id']}`, {
        method : "POST",  
        body : JSON.stringify({
            num : 4,
            start : 0,
        }),     
    }); 

    const resp_json = await resp.json();
    const articles = resp_json['articles'];

    const prof_resp = await fetch(`http://localhost:3000/api/profile/${params['id']}`, {
        method : "GET",    
    }); 
    const profile_info = (await prof_resp.json())['results'];

    return(
        <div>
            <h2 className='text-3xl my-3' >{ profile_info['name'] }</h2>

            {articles.map( (article : any) => <MainpageSmallArticle {...article}/> )}

        </div>
    );

}