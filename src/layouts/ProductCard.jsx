import React, { useState, useEffect, useContext } from "react";
import CardMedia from "@mui/material/CardMedia";
import styles from "../styles.js";
import { productDetails } from "../constants";
import { Link } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
import index from "../index.css?inline";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { ShopContext } from "../context/ShopContextProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";

export default function ProductCard({
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
}) {
  const { addToCart, itemDetailsState, cartItems } = useContext(ShopContext);
  // const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0();

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

      <div className={`flex mb-1 ${className}`}>
        <Link
          className={`${styles.product}`}
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
          <div className="border-b border-[#5f5f5f] mb-4">
            <CardMedia
              className="card-image xs:h-[240px] h-[165px] w-full mb-4 transition-all duration-300 transform"
              image={imageLink}
            />
          </div>

          <div className="flex justify-between">
            <h1
              className={`${styles.h1} ${
                title.length > 20 ? styles.longTitle : ""
              }`}
            >
              {title}
            </h1>

            <h1 className={`${styles.h1} text-[#2081e2]`}>{price}</h1>
          </div>
          <div className="text-green-400 text-[20px] font-extrabold">
            {discount}
          </div>

          <div className="mt-4 flex justify-between items-center">
            <div>
              <h1 className={` text-[#8d8d8d] text-[15px]`}>Ratings</h1>
              <h1 className={`${styles.h1}  flex justify-start items-center`}>
                {ratings}
                <StarRoundedIcon sx={{ color: "#ffaa00" }} />
              </h1>
            </div>
            <div>
              <button
                className="hover:border-[#838383] flex justify-center items-center px-4  py-2  duration-300 border text-white font-semibold rounded-[12px] hover:bg-[#353840] w-full border-[#424242]"
                onClick={handleCart}
              >
                <ShoppingBagRoundedIcon />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
