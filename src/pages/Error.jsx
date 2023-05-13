import React from "react";
import index from "../index.css?inline";
import styles from "../styles.js";

const Error = () => {
  return (
    <div className="main-body flex justify-center">
      <h1 className={`${styles.h1} ml-5 my-5 sm:text-[40px] text-[30px]`}>
        Oops, something's wrong!
      </h1>
    </div>
  );
};

export default Error;
