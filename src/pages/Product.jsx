import { Footer } from "../layouts";
import styles from "../styles.js";
import React from "react";
import { SmProduct, MdProduct, Suggestions } from "../components";

const Product = () => {
  return (
    <div>
      <div className="main-body">
        <SmProduct />
        <MdProduct />
      </div>
      <hr className="border-[#353535] my-7" />

      <h1
        className={`${styles.h1Basic} flex justify-center mb-7 font-extrabold text-[30px] md:text-[50px]`}
      >
        You may also like
      </h1>
      <Suggestions />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Product;
