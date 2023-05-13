import React, { useState, useEffect, useContext } from "react";
import CardMedia from "@mui/material/CardMedia";
import styles from "../styles.js";
import { productDetails } from "../constants";
import { Link } from "react-router-dom";
import index from "../index.css?inline";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { ShopContext } from "../context/ShopContextProvider";
import { ToastContainer, toast } from "react-toastify";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";

const ProductCardSmall = ({
  title,
  imageLink,
  price,
  ratings,
  className,
  to,
  username,
  id,
  discount,
  desc,
}) => {
  const { addToCart, itemDetailsState, cartItems } = useContext(ShopContext);

  const handleCart = (event) => {
    event.preventDefault();
    addToCart(id);
    toast.success("Cart updated", {
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: true,
      closeButton: false,
      autoClose: 2500,
      stopOnFocus: false,
    });
  };

  return (
    <div>
      <ToastContainer />

      <div className="grid grid-cols-1 w-full">
        <Link
          className={`${className} flex justify-between cursor-pointer bg-[#303339]  rounded-[8px] p-4 `}
          to={{
            pathname: `/product/${to}`,
            search: `?title=${encodeURIComponent(
              title
            )}&imageLink=${encodeURIComponent(
              imageLink
            )}&price=${encodeURIComponent(price)}&ratings=${encodeURIComponent(
              ratings
            )}&discount=${encodeURIComponent(
              discount
            )}&desc=${encodeURIComponent(desc)}&id=${encodeURIComponent(id)}`,
          }}
        >
          <div className="items-center flex justify-center ">
            <CardMedia
              className="h-[70px]  w-[70px] flex justify-center items-center"
              image={imageLink}
            />
          </div>

          <div className="flex items-center justify-between w-full">
            <div className="grid ml-4 justify-between">
              <h1 className={`${styles.h1}`}>{title}</h1>
              <div className="text-green-400  font-extrabold">{discount}</div>
              <h1 className={` text-[#8d8d8d] text-[15px]`}>Ratings</h1>
              <h1 className={`${styles.h1}  flex justify-start items-center`}>
                {ratings}
                <StarRoundedIcon sx={{ color: "#ffaa00" }} />
              </h1>
            </div>
            <div className="flex flex-col items-end justify-center gap-5 h-full">
              <div>
                <h1 className={`${styles.h1} text-[#2081e2]`}>{price}</h1>
              </div>
              <div>
                <button
                  className="xs:hover:border-[#838383] flex justify-center items-center px-4  py-2  duration-300 border text-white font-semibold rounded-[12px] hover:bg-[#353840] w-full border-[#424242]"
                  onClick={handleCart}
                >
                  <ShoppingBagRoundedIcon />
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCardSmall;
