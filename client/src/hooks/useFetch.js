import { useEffect, useState } from "react";
import axios from "axios";

// Function to fetching data from database
const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const reFetch = async () => {
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (error) {
        console.log(error);
    }
  };

  return {data, reFetch};
};

export default useFetch;



