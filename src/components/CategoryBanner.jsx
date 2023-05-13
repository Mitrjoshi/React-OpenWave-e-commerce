import React from "react";
import { Link } from "react-router-dom";
import index from "../index.css?inline";

const CategoryBanner = () => {
  return (
    <div className="gap-5 w-full flex items-center text-white font-bold text-[18px] justify-between xs:justify-around bg-[#151515]">
      <Link
        className="flex flex-col items-center justify-center gap-2 hover-card "
        to="/earbuds"
      >
        <img
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/True_Wireless_Earphones_small.svg?v=1682078654"
          alt="Earbuds"
          className="h-[64px] bg-[#303339] p-3 rounded-[50%] card-image duration-100"
        />
        Earbuds
      </Link>
      <Link
        className="flex flex-col items-center justify-center gap-2 hover-card"
        to="/headphones"
      >
        <img
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Over_Ear_Headphones_small.svg?v=1682078654"
          alt="Headphones"
          className="h-[64px] bg-[#303339] p-3 rounded-[50%] card-image duration-100"
        />
        Headphones
      </Link>
      <Link
        className="flex flex-col items-center justify-center gap-2 hover-card"
        to="/neckbands"
      >
        <img
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt_Neckbands_small.svg?v=1682078654"
          alt="Neckbands"
          className="h-[64px] bg-[#303339] p-3 rounded-[50%] card-image duration-100"
        />
        Neckbands
      </Link>
    </div>
  );
};

export default CategoryBanner;
