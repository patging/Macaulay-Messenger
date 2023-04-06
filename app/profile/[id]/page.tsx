
import React from 'react'
import NoImgThumbnail from '../../../components/thumbnails/noImageThumbnail';

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
        <div className=''>
            <h2 className='text-4xl my-3' >{ profile_info['name'] }</h2>
            <hr />
            <h4 className="text-3xl my-3">Articles</h4>

            <div className="lg:grid grid-cols-9">
                <div className="lg:col-span-6">
                    {articles.map( (article : any) => <NoImgThumbnail {...article}/> )}
                </div>

                <div className="lg:col-span-3">
                    
                </div>

            </div>

        </div>
    );

}