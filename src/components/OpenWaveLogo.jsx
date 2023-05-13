import React from "react";
import Wave from "../assets/Wave.svg";
import { Link } from "react-router-dom";

const OpenWaveLogo = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link to="/" className="flex items-center" onClick={scrollToTop}>
      <img className="h-[32px] mr-2" src={Wave} alt="Wave" />
      <h1 className="text-[#fff] font-extrabold space-x-[1px] text-[20px]">
        <span>O</span>
        <span>p</span>
        <span>e</span>
        <span>n</span>
        <span>W</span>
        <span>a</span>
        <span>v</span>
        <span>e</span>
      </h1>
    </Link>
  );
};

export default OpenWaveLogo;
