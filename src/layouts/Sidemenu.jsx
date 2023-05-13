import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import index from "../index.css?inline";
import styles from "../styles.js";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { OpenWaveLogo } from "../components";

const Sidemenu = ({ state, setState }) => {
  const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0();
  const menuRef = useRef(null);

  const variants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  const handleListClick = () => {
    setState(false);
  };

  function handleClickOutside(event) {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setState(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div
      className={`${
        state
          ? " absolute top-[0px] z-20 backdrop-blur-md bg-[#00000080] md:hidden h-[100vh] left-0 w-full grid grid-cols-1 overflow-auto"
          : "hidden"
      } `}
    >
      <motion.div
        className="w-full p-4  bg-[#303339]  xs:w-[350px]"
        initial="closed"
        animate={state ? "open" : "closed"}
        variants={variants}
        transition={{ damping: 300 }}
        ref={menuRef}
      >
        <div className="flex mb-3 justify-between">
          <div>
            <OpenWaveLogo />
          </div>
          <button
            onClick={() => {
              setState(!state);
            }}
          >
            <CloseRoundedIcon sx={{ fontSize: 32 }} className="text-white" />
          </button>
        </div>

        <hr className="border-[#212121]" />

        <ul>
          <Link to="/trending">
            <li className={`${styles.navList}`} onClick={handleListClick}>
              Trending
              <ArrowForwardIosRoundedIcon />
            </li>
          </Link>
          <Link to="/earbuds">
            <li className={`${styles.navList}`} onClick={handleListClick}>
              Earbuds
              <ArrowForwardIosRoundedIcon />
            </li>
          </Link>
          <Link to="/headphones">
            <li className={`${styles.navList}`} onClick={handleListClick}>
              Headphones
              <ArrowForwardIosRoundedIcon />
            </li>
          </Link>
          <Link to="/neckbands">
            <li className={`${styles.navList}`} onClick={handleListClick}>
              Neckbands
              <ArrowForwardIosRoundedIcon />
            </li>
          </Link>

          <li className={`${styles.navList}`} onClick={handleListClick}>
            Deals
          </li>
          <li className={`${styles.navList}`} onClick={handleListClick}>
            Gifts
          </li>
          <li className={`${styles.navList}`} onClick={handleListClick}>
            More
            <ArrowForwardIosRoundedIcon />
          </li>
          <li>
            {isAuthenticated ? (
              <button
                className={`${styles.login}`}
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Logout
              </button>
            ) : (
              <button
                className={`${styles.login}`}
                onClick={() => loginWithRedirect()}
              >
                Sign Up
              </button>
            )}
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Sidemenu;
