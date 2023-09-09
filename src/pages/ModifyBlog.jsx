import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ModifyBlog() {
  const { id } = useParams();
  const naviagte = useNavigate();
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const [author, setauthor] = useState("");
  useEffect(() => {
    const getOne = async () => {
      const res = await fetch(`http://localhost:4000/blogs/${id}`);
      const data = await res.json();
      settitle(data.title);
      setauthor(data.author);
      setbody(data.body);
    };
    getOne();
  }, []);

  const modifyBlog = async (e) => {
    e.preventDefault();
    const blogdata = {
      title,
      body,
      author,
    };
    try {
      await fetch(`http://localhost:4000/blogs/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogdata),
      });
      naviagte("/");
    } catch (error) {
      consolr.log(error);
      throw Error(error.message);
    }
  };
  return (
    <div>
      <form
        className="w-[60%] rounded-lg p-3 border border-gray-500 mx-auto"
        onSubmit={modifyBlog}
      >
        <h1 className="text-center capitalize text-[#802492] font-bold">
          Modify a blog
        </h1>
        <div className="flex flex-col ">
          <label className="labelfield my-3">title</label>
          <input
            className="inputfield"
            type="text"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col my-3">
          <label className="labelfield ">author</label>
          <input
            value={author}
            className="inputfield"
            type="text"
            onChange={(e) => setauthor(e.target.value)}
          />
        </div>
        <div className="flex flex-col my-3">
          <label className="labelfield ">body</label>

          <textarea
            value={body}
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
