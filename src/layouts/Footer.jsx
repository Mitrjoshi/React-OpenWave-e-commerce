import React from "react";
import styles from "../styles.js";
import { Link } from "react-router-dom";
import index from "../index.css?inline";
import { Button, MailInput, FooterLinks } from "../components";
import { OpenWaveLogo } from "../components";
import Wave from "../assets/Wave.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className=" footer">
      <hr className="border-[#353535]" />
      <div className="main-body md:grid md:grid-cols-2 gap-10 justify-center ">
        <div>
          <div className="pt-4 gap-2 grid">
            <div className="flex justify-center md:justify-start">
              <h1
                className={` text-white font-semibold text-[25px] sm:text-[30px]`}
              >
                Stay in the loop
              </h1>
            </div>
            <div className="flex justify-center md:justify-start">
              <h1 className={`${styles.h1Basic}`}>
                Join our mailing list to stay in the loop with our newest,
                Airdope drops, Rockers drops, and more.
              </h1>
            </div>
          </div>
          <MailInput />
        </div>
        <div className="grid md:pt-4 items-start">
          <FooterLinks />
        </div>
      </div>
      <hr className="border-[#353535]" />
      <div className="p-5 flex justify-center">
        <p className="text-[10px] text-white font-extrabold">
          © Copyright {currentYear}. Made by Mitr Joshi.
        </p>
      </div>
    </div>
  );
};

export default Footer;
