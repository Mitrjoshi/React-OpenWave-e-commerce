import React from "react";
import DropDownMenu from "./DropDownMenu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const NavList = () => {
  const categories = [
    { label: "Home", to: "/" },
    { label: "Trending", to: "/trending" },
    { label: "Earbuds", to: "/earbuds" },
    { label: "Headphones", to: "/headphones" },
    { label: "Neckbands", to: "/neckbands" },
  ];
  const categoriesButtonText = "Categories";

  const more = [
    { label: "Blogs", href: "#" },
    { label: "Earn ₹100", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Social Responsibility", href: "#" },
  ];
  const moreButtonText = "More";
  return (
    <ul className="flex ml-6 border justify-center items-center  border-[#4b4b4b] border-y-0 border-r-0">
      <li className="font-[800] text-[16px] text-white ml-6 mr-3">
        <DropDownMenu options={categories} buttonText={categoriesButtonText} />
      </li>
      <li className="font-[800] text-[16px] text-white ml-3 mr-3">
        <button className=" hover:text-[#d1d1d1]" href="#">
          Deals
        </button>
      </li>
      <li className="font-[800] text-[16px] text-white ml-3 mr-3">
        <button className=" hover:text-[#d1d1d1]" href="#">
          Gifts
        </button>
      </li>
      <li className="font-[800] text-[16px] text-white ml-3 mr-6">
        <DropDownMenu options={more} buttonText={moreButtonText} />
      </li>
    </ul>
  );
};

export default NavList;
