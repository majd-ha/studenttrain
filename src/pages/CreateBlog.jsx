import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateBlog() {
  const naviagte = useNavigate();
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const [author, setauthor] = useState("");
  const addblog = async (e) => {
    e.preventDefault();
    const blogdata = {
      title,
      body,
      author,
    };
    await fetch("http://localhost:4000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogdata),
    });
    naviagte("/");
  };
  return (
    <div>
      <form
        className="w-[60%] rounded-lg p-3 border border-gray-500 mx-auto"
        onSubmit={addblog}
      >
        <h1 className="text-center capitalize text-[#802492] font-bold">
          add a blog
        </h1>
        <div className="flex flex-col ">
          <label className="labelfield my-3">title</label>
          <input
            className="inputfield"
            type="text"
            onChange={(e) => settitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col my-3">
          <label className="labelfield ">author</label>
          <input
            className="inputfield"
            type="text"
            onChange={(e) => setauthor(e.target.value)}
          />
        </div>
        <div className="flex flex-col my-3">
          <label className="labelfield ">body</label>

          <textarea
            className="inputfield"
            rows="5"
            onChange={(e) => setbody(e.target.value)}
          ></textarea>
        </div>
        <button className="px-3 py-2 bg-green-500 text-white capitalize w-[20%] mx-auto block rounded-lg">
          add
        </button>
      </form>
    </div>
  );
}
