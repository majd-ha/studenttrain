import { useEffect, useState } from "react";

export const useFetch = (changed) => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getData = async () => {
    setIsLoading(true);
    const res = await fetch("http://localhost:4000/blogs");
    const data = await res.json();
    setBlogs(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [changed]);

  return { blogs, isLoading };
};
