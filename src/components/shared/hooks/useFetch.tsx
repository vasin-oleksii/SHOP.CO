import { useEffect, useState } from "react";

interface useFetchProprs {
  url: string;
}

const useFetch = ({ url }: useFetchProprs) => {
  console.log(url);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.statusText);
        const json = await response.json();

        setData(json);
        setIsLoading(false);
        setError(null);
      } catch (e) {
        setIsLoading(false);
        setError(e);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
