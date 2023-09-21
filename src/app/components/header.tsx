import React from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link to="/" className="">
          <img src={logo} alt="logo" />
        </Link>
        {/* buttons */}
        <div className="flex items-center gap-6">
          <Link
            className="font-['Open_Sans'] font-bold hover:text-indigo-800 transition"
            to="/"
          >
            Sign In
          </Link>
          <Link
            className="font-['Open_Sans'] bg-[#1C3988] hover:bg-indigo-800 text-white font-bold px-6 py-[13px] rounded transition"
            to="/"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
