import { useState, useEffect } from "react";

export function useFetch(uri) {
    const [data, setData] = useState();
    const [loading, setLoding] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        if(!uri) return;
        fetch(uri)
        .then(data => data.json())
        .then(setData)
        .then(() => setLoding(false))
        .catch(setError);
    }, [uri]);

    return { loading, data, error };
}