import React, { useState, forwardRef, useRef } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import index from "../index.css?inline";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  SearchBar,
  OpenWaveLogo,
  ShoppingCart,
  SignUp,
  NavList,
} from "../components";
import { Sidemenu } from "../layouts";
import { productDetails } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const inputRef = useRef(null);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleSearch = () => {
    setSearch(!search);
  };

  return (
    <nav className="border w-full sticky top-0 bg-[#202225] z-10 flex border-[#353535] border-x-0 border-t-0  h-[72px]">
      <div className="navbar">
        <div className="ss:hidden px-3">
          {search ? (
            <div className=" flex justify-between items-center">
              <div className="flex  items-center ">
                <button className=" flex justify-center items-center outline-none">
                  <MenuOutlinedIcon
                    sx={{ fontSize: 32 }}
                    className="text-white  mr-2"
                    onClick={handleToggle}
                  />
                </button>
              </div>
              <SearchBar state={search} data={productDetails} />
              <button className=" flex gap-3 ml-3">
                <CloseRoundedIcon
                  sx={{ fontSize: 32 }}
                  className="text-white  mr-2 "
                  onClick={handleSearch}
                />
              </button>
            </div>
          ) : (
            <div className=" flex justify-between items-center">
              <div className="flex  items-center ">
                <button className=" flex justify-center items-center outline-none">
                  <MenuOutlinedIcon
                    sx={{ fontSize: 32 }}
                    className="text-white  mr-2"
                    onClick={handleToggle}
                  />
                </button>

                <OpenWaveLogo />
              </div>

              <div className=" flex gap-3">
                <button
                  className="h-[48px] w-[48px] ss:hidden border p-[12px] border-[#353535] rounded-[12px]  hover:border-[#838383] transition-all flex justify-center items-center"
                  onClick={handleSearch}
                >
                  <SearchOutlinedIcon className="text-white" />
                </button>

                <ShoppingCart />
              </div>
            </div>
          )}
        </div>

        <div className="ss:grid hidden md:hidden">
          <div className="navbar-bigger-than-ss   px-3  items-center">
            <div className="flex  items-center ">
              <button className=" flex justify-center items-center outline-none">
                <MenuOutlinedIcon
                  sx={{ fontSize: 32 }}
                  className="text-white  mr-2"
                  onClick={handleToggle}
                />
              </button>
              <OpenWaveLogo />
            </div>
            <SearchBar data={productDetails} />
            <ShoppingCart />
          </div>
        </div>

        <div className="md:grid hidden">
          <div className="navbar-bigger-than-md px-3 items-center">
            <div className="flex items-center ">
              <OpenWaveLogo />
              <NavList />
            </div>
            <SearchBar data={productDetails} />
            <div className=" flex items-center justify-center gap-4">
              <SignUp />
              <ShoppingCart />
            </div>
          </div>
        </div>
      </div>
      <Sidemenu state={toggle} setState={setToggle} />
    </nav>
  );
};

export default Navbar;
