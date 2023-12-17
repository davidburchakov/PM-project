import { useState, useEffect } from 'react';
import axios from 'axios';
// import { RAPID_API_KEY } from '@env';
// const rapidApiKey = RAPID_API_KEY

const useFetch = (endpoint, query) => {
    const [data, setData]  = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    // console.log("---------------------------------------------------")
    // console.log("data", data)
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
          'X-RapidAPI-Key': 'cc57d600acmsha274c4ba1368b6bp1528b2jsndf6de26baa3b',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

    const fetchData = async () => {
        setIsLoading(true);
        try {
          const response = await axios.request(options);
          setData(response.data.data);
          setIsLoading(false);
        } catch (error) {
          if (error.response.status === 429) {
            // Add a delay of 2 second before retrying the request
            await new Promise((resolve) => setTimeout(resolve, 2000));
            fetchData();
            setError(error)
          } else if (error.response.status == 404) {
            alert(error)
            setError(error)
          } else {
            setError(error);
            alert("There is an error");
          }
        } finally {
          setIsLoading(false);
        }
      };
      
    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch };
}

export default useFetch;