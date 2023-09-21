import React from "react";
import logoWhite from "../../assets/logoWhite.svg";

const Footer = () => {
  return (
    <footer className="bg-[#1C3988] py-8 text-center text-white">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <img src={logoWhite} alt="Logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
