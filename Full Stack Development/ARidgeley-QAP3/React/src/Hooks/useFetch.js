import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      let res = await fetch(url);
      let data = await res.json();
      setData(data);
    };

    getData(url);
  }, []);

  return [data];
};

export default useFetch;
