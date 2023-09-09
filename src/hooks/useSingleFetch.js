import { useEffect, useState } from "react";

export const useSingleFetch = (id) => {
  const [blog, setblog] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const getone = async () => {
    setIsLoading(true);
    const res = await fetch(`http://localhost:4000/blogs/${id}`);
    const data = await res.json();
    setblog(data);
    setIsLoading(false);
  };
  useEffect(() => {
    getone();
  }, []);

  return { blog, isLoading };
};
