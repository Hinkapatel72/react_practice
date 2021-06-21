import React, { useState, useEffect } from 'react';
import SingleSide from './SingleSide';
import Error from './Error';

function Sidenews({ type, query }) {
    const [sidenews, setSidenews] = useState("");

    useEffect(() => {
        const url = `https://newsapi.org/v2/${type}?${query}&sortBy=popularity&apiKey=99ea0040a3054a67afb333112ee40369`

        fetch(url)
            .then(res => res.json())
            .then(setSidenews)
            .catch(console.error)
    }, []);

    if(sidenews) {
        return(
            <>
                <div>
                        {sidenews.articles.map(item => (
                            <SingleSide key={item.url} item={item} />
                        ))}
                </div>
            </>
        );
    }
    else {
        return <Error />
    }
}

export default Sidenews;