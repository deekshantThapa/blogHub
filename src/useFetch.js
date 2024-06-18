import { useEffect, useState } from "react";

function useFetch(url){
    const[dataContent, setDataContent] = useState(null);
    const[isLoading, setIsLoading] = useState(true);
    const[error, setError] = useState(null);

    useEffect(function(){
        fetch(url)
        .then(response => {
            if(!response.ok){
                throw Error('could not fetch the data for that resource');
            }
            return response.json();
        })
        .then(data => {
            // console.log(data);
            setDataContent(data);
            setIsLoading(false);
            setError(null);
        })
        .catch(error => {
            setIsLoading(false);
            setError(error.message);
        })
    }, [url])

    return {dataContent, isLoading, error}
}

export default useFetch;