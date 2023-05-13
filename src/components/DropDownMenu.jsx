import styles from "../styles.js";
import React, { useState, useEffect, useRef } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DropDownMenu = ({ options, buttonText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function handleClickOutside(event) {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative  text-white">
      <button className="flex w-full hover:text-[#d1d1d1]" onClick={toggleMenu}>
        {buttonText}
        <KeyboardArrowDownRoundedIcon className="text-white" />
      </button>
      {isOpen && (
        <motion.div
          ref={menuRef}
          onClick={toggleMenu}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-white absolute z-2 left-0 top-10 rounded-xl shadow-lg  bg-[#353840]"
        >
          <div
            className="py-1 mx-2 "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <Link
                to={option.to}
                className="flex px-4 p-5 text-sm hover:bg-[#191919] my-2 rounded-xl items-center font-bold h-[45px] text-[1em]"
                role="menuitem"
                key={option.label}
              >
                {option.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default DropDownMenu;
