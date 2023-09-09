import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Path 4.png";
export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-10 py-3 bg-[#00000010] text-white mb-5 rounded-xl">
      <Link to={"/"}>
        <img src={Logo} alt="f" className="object-cover " />
      </Link>
      <div className="flex items-center justify-between px-5 w-1/3 max-sm:w-2/3">
        <Link
          className="bg-[#802492] text-white px-3 py-2 rounded-xl"
          to={"create"}
        >
          Create
        </Link>
        <Link
          className="bg-[#802492] text-white px-3 py-2 rounded-xl"
          to={"about"}
        >
          About
        </Link>
      </div>
    </div>
  );
}
