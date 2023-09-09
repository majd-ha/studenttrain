import React from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Card({ blog, refetch }) {
  const removeItem = async () => {
    await fetch(`http://localhost:4000/blogs/${blog.id}`, {
      method: "DELETE",
    });
    refetch(true);
  };
  return (
    <div className="w-2/3 rounded-xl shadow-lg p-3 min-h-[150px] border border-gray-300 my-5 mx-auto block">
      <Link to={`/blogs/${blog.id}`} className=" text-3xl text-[#802492] mt-2">
        {blog.title}
      </Link>
      <p className="text-sm italic text-gray-500">{blog.author}</p>
      <p className="p-2 text-gray-900">{blog.body}</p>
      <div className="border border-transparent border-t-gray-400 flex items-center justify-between px-5 py-2">
        <button
          className=" text-white px-2 py-1 rounded-lg "
          onClick={removeItem}
        >
          <FaTrashAlt color="red" size={"1.5rem"} />
        </button>
        <Link
          to={`/blogs/modify/${blog.id}`}
          className=" text-white px-2 py-1 rounded-lg "
        >
          <FaPencilAlt color="orange" size={"1.5rem"} />
        </Link>
      </div>
    </div>
  );
}
