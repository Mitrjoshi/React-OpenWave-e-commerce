import React from "react";
import styles from "../styles.js";

const FliterHeader = ({ title }) => {
  return (
    <h1 className={`${styles.h1Basic} xs:ml-0 ml-3 sm:text-[18px] text-[12px]`}>
      {title}
    </h1>
  );
};

export default FliterHeader;
