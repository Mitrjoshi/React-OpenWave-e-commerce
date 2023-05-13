import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import styles from "../styles.js";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { ShopContext } from "../context/ShopContextProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { productDetails } from "../constants";
import { Suggestions } from "../components";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";

const SmProduct = () => {
  const { search } = useLocation();
  const { title, imageLink, price, ratings, discount, desc, id } =
    queryString.parse(search);
  const { cartItems, addToCart } = useContext(ShopContext);
  let [quantity, setQuantity] = useState(1);

  const handleCart = (event) => {
    event.preventDefault();

    for (let i = 1; i <= quantity; i++) {
      addToCart(id);
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      const updatedCartItems = [
        ...cartItems,
        { id, title, imageLink, price, discount, ratings, desc },
      ];
      localStorage.setItem("cart", JSON.stringify(updatedCartItems));
      toast.success("Cart updated", {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        closeButton: false,
        autoClose: 2500,
        stopOnFocus: false,
      });
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: desc,
        url: window.location.href,
      });
    } else {
      console.log("Web Share API not supported.");
    }
  };

  const handleIncrease = (event) => {
    event.preventDefault();
    setQuantity((quantity += 1));
  };
  const handleDecrease = (event) => {
    event.preventDefault();
    if (quantity > 1) {
      setQuantity((quantity -= 1));
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="md:flex hidden flex-col gap-5">
        <div className=" ml-3 mt-5 ">
          <h1
            className={`${styles.h1Basic} flex items-center gap-5 font-extrabold text-[50px]`}
          >
            {title}
            <span>
              <button onClick={handleShare}>
                <ShareRoundedIcon sx={{ height: "30px", width: "30px" }} />
              </button>
            </span>
          </h1>
        </div>

        <div className="flex gap-5 ">
          <div className=" w-[400px] h-[400px] rounded-[15px] border border-[#555555] p-2  flex justify-center cursor-pointer bg-[#151515]  duration-300  items-center">
            <img src={imageLink} alt={title} />
          </div>

          <div className=" flex flex-col items-start gap-4">
            <div className="flex items-end gap-2">
              <h1 className={`${styles.h1Basic} font-extrabold text-[30px]`}>
                {price}
              </h1>
              <h1
                className={`${styles.h1Basic} font-extrabold text-green-600 text-[16px] mb-2`}
              >
                {discount}
              </h1>
            </div>
            <div
              className={`${styles.h1Basic} font-extrabold flex text-[30px] justify-center items-center`}
            >
              <h1>{ratings}</h1>
              <StarRoundedIcon
                sx={{ height: "30px", width: "30px", color: "#ffaa00" }}
              />
            </div>
            <h1 className={`${styles.h1Basic}`}>{desc}</h1>

            <div className="flex flex-col gap-2 w-[200px]">
              <div className=" flex items-center justify-center gap-5">
                <h1
                  className={`${styles.h1Basic} flex font-extrabold text-[16px]`}
                >
                  Quantity:<span className="ml-3">{quantity}</span>
                </h1>
                <div className="flex w-full justify-center items-center text-white ">
                  <button
                    className="xs:hover:border-[#838383] h-[45px] px-4  py-2   duration-300 border font-semibold hover:bg-[#353840] w-full border-[#424242] rounded-lg border-r-0 rounded-r-none items-center flex justify-center"
                    onClick={handleDecrease}
                  >
                    -
                  </button>
                  <button
                    className="xs:hover:border-[#838383] h-[45px] flex justify-center    items-center px-4  py-2  duration-300 border font-semibold hover:bg-[#353840] w-full border-[#424242] rounded-lg border-l-0 rounded-l-none"
                    onClick={handleIncrease}
                  >
                    +
                  </button>
                </div>
              </div>

              <button className={`${styles.login} w-full`} onClick={handleCart}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmProduct;
