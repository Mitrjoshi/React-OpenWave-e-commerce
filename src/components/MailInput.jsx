import React from "react";
import styles from "../styles.js";
import index from "../index.css?inline";
import { Button } from "../components";

const MailInput = () => {
  return (
    <div className="mail-input mt-8">
      <div className="flex justify-center px-3 items-center h-[48px] border border-[#353535] hover:border-[#838383] duration-300 rounded-[12px] ">
        <input
          type="text"
          placeholder="Your email address"
          className="h-full w-full input-field text-[16px] bg-transparent outline-none text-white "
        />
      </div>
      <Button text="Sign up" />
    </div>
  );
};

export default MailInput;
