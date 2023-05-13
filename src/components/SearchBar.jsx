import React, { useState, useEffect, useRef } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import index from "../index.css?inline";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link } from "react-router-dom";

const SearchBar = ({ state, data }) => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const searchInputRef = useRef(null);
  const searchResultsRef = useRef(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);

    const wordEntered = event.target.value;

    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(wordEntered.toLowerCase());
    });

    const uniqueFilter = Array.from(new Set(newFilter));

    if (wordEntered === "") {
      setFilterData([]);
    } else {
      setFilterData(uniqueFilter);
    }
  };

  const handleClear = () => {
    searchInputRef.current.focus();
    setInputValue("");
    setFilterData([]);
  };

  useEffect(() => {
    if (state && searchInputRef.current) {
      searchInputRef.current.focus();
      setIsFocused(true);
    }
  }, [state]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isFocused && event.key === "/") {
        event.preventDefault();
        searchInputRef.current.focus();
        setIsFocused(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFocused]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchInputRef.current && searchResultsRef.current) {
        if (
          !searchInputRef.current.contains(event.target) &&
          !searchResultsRef.current.contains(event.target)
        ) {
          setFilterData([]);
          setIsFocused(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [filterData, setFilterData] = useState([]);

  const handleHide = () => {
    setFilterData([]);
    setInputValue("");
  };

  return (
    <div>
      <div className="flex justify-center px-3 items-center h-[48px] border border-[#353535] hover:border-[#838383] duration-300 rounded-[12px] relative">
        <SearchOutlinedIcon sx={{ fontSize: 24 }} className="text-white mr-2" />
        {state ? (
          <input
            type="search"
            placeholder="Search items"
            value={inputValue}
            onChange={handleInputChange}
            className="h-full w-full input-field text-[16px] bg-transparent outline-none text-white"
            ref={searchInputRef}
          />
        ) : (
          <input
            type="search"
            placeholder="Search items"
            value={inputValue}
            onChange={handleInputChange}
            className="h-full w-full input-field text-[16px] bg-transparent outline-none text-white"
            ref={searchInputRef}
          />
        )}

        {inputValue ? (
          <CloseRoundedIcon
            className="text-[#949494] cursor-pointer"
            onClick={handleClear}
          />
        ) : (
          <div className=" bg-[#444648] h-[25px] w-[25px] flex justify-center items-center rounded-[8px] ">
            <span className="mx-[12px] text-white">/</span>
          </div>
        )}
      </div>
      {filterData.length != 0 ? (
        <div
          className="mt-1 rounded-[12px] bg-[#303339] absolute overflow-y-auto overflow-hidden max-h-[310px] shadow-2xl hide-scroll"
          ref={searchResultsRef}
        >
          {filterData.slice(0, 25).map((value, index) => {
            return (
              <Link
                to={{
                  pathname: `/product/${value.to}`,
                  search: `?title=${encodeURIComponent(
                    value.title
                  )}&imageLink=${encodeURIComponent(
                    value.link
                  )}&price=${encodeURIComponent(
                    value.price
                  )}&ratings=${encodeURIComponent(
                    value.ratings
                  )}&discount=${encodeURIComponent(
                    value.discount
                  )}&desc=${encodeURIComponent(
                    value.desc
                  )}&id=${encodeURIComponent(value.id)}`,
                }}
                key={index}
                onClick={handleHide}
                className="flex items-center bg-[#303339] rounded-[10px] m-2 hover:bg-[#191919] px-5 py-3 duration-200  text-white text-[18px] font-extrabold"
              >
                <img
                  src={value.link}
                  alt={value.title}
                  className="h-[40px] mr-3"
                />
                <p className="">{value.title}</p>
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default SearchBar;
