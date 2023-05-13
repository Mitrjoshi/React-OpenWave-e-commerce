import React, { useState, useEffect, useContext } from "react";
import styles from "../styles.js";
import { FliterHeader, SliderBar } from "../components";
import { ShopContext } from "../context/ShopContextProvider";

const Filter = () => {
  return (
    <div className="max-w-[300px] flex flex-col items-start justify-center pt-8 md:w-full gap-4  sticky top-[55px]">
      <div className="pb-3">
        <h1 className={`${styles.h1} xs:ml-0 ml-3 sm:text-[25px] text-[15px] `}>
          Filters
        </h1>
      </div>
      <div>
        <FliterHeader title="Price" />
        <SliderBar />
      </div>
    </div>
  );
};

export default Filter;
