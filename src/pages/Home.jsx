import React, { useState } from "react";
import Card from "../components/Card";
import { useFetch } from "../hooks/useFetch";

export default function Home() {
  const [changed, setChanged] = useState(false);

  const { blogs, isLoading } = useFetch(changed);

  return (
    <div>
      {isLoading ? (
        <h1 className="text-center text-4xl text-red-500">Loading...</h1>
      ) : (
        blogs.map((el) => <Card blog={el} refetch={setChanged} key={el.id} />)
      )}
    </div>
  );
}
