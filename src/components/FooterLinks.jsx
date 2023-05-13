import React from "react";
import styles from "../styles.js";
import { footerLinks } from "../constants";

const FooterLinks = () => {
  return (
    <div className="grid grid-cols-1 gap-3 md:mt-0 mt-10">
      <div className="flex justify-center">
        <h1 className={`text-white font-semibold text-[25px] sm:text-[30px]`}>
          Join the community
        </h1>
      </div>
      <div className="flex justify-center gap-4">
        {footerLinks.map((footer, index) => {
          return (
            <a href={footer.link} className="flex" key={index}>
              <img
                className="h-[50px] w-[50px] md:h-[55px] md:w-[55px] p-3 cursor-pointer duration-300 hover:bg-[#238ef9] bg-[#3c4047] rounded-[8px] md:rounded-[12px]"
                src={footer.img}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default FooterLinks;
