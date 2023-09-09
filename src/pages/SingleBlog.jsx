import React from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { useSingleFetch } from "../hooks/useSingleFetch";

export default function SingleBlog() {
  const { id } = useParams();
  const { blog: singleBlog, isLoading } = useSingleFetch(id);
  return isLoading ? (
    <h1 className="text-center text-4xl text-red-500">Loading...</h1>
  ) : (
    <Card blog={singleBlog} />
  );
}
