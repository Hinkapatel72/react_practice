import React, { useState, useEffect } from 'react';
import NewSingle from './NewSingle';
import Error from './Error';

function News({ type, query }) {
    const [news, setNews] = useState("");

    useEffect(() => {
        const url = `https://newsapi.org/v2/${type}?${query}&sortBy=popularity&apiKey=99ea0040a3054a67afb333112ee40369`

        fetch(url)
            .then(res => res.json())
            .then(setNews)
            .catch(console.error)
    }, []);

    if(news) {
        return(
            <>
                <div className='row'>
                        {news.articles.map(item => (
                            <NewSingle key={item.url} item={item} />
                        ))}
                </div>
            </>
        );
    }
    else {
        return <Error />
    }
}

export default News;