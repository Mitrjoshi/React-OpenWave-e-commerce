import React, { useContext } from "react";
import styles from "../styles.js";
import CardMedia from "@mui/material/CardMedia";
import index from "../index.css?inline";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContextProvider";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const CartItem = (props) => {
  const { title, price, link, ratings, id, to, desc, discount } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  const handleIncrease = (event) => {
    event.preventDefault();
    addToCart(id);
  };
  const handleDecrease = (event) => {
    event.preventDefault();
    removeFromCart(id);
  };

  return (
    <Link
      to={{
        pathname: `/product/${to}`,
        search: `?title=${encodeURIComponent(
          title
        )}&imageLink=${encodeURIComponent(link)}&price=${encodeURIComponent(
          price
        )}&ratings=${encodeURIComponent(ratings)}&discount=${encodeURIComponent(
          discount
        )}&desc=${encodeURIComponent(desc)}&id=${encodeURIComponent(id)}`,
      }}
    >
      <div className="flex m-auto justify-center  items-center xs:hover:bg-[#151515] duration-300 cursor-pointer bg-[#303339] rounded-[8px] h-auto p-4 mb-2">
        <div className="items-center flex justify-center">
          <CardMedia
            className="h-[70px] flex justify-center items-center w-[70px]"
            image={link}
          />
        </div>

        <div className="flex items-center justify-between w-full">
          <div className="grid ml-4 justify-between">
            <div className="flex gap-2">
              <h1 className={`${styles.h1}`}>{title}</h1>
              <h1 className={`${styles.h1}`}>({cartItems[id]})</h1>
            </div>
            <h1 className={` text-[#8d8d8d] text-[15px]`}>Ratings</h1>
            <h1 className={`${styles.h1}  flex justify-start items-center`}>
              {ratings}
              <StarRoundedIcon sx={{ color: "#ffaa00" }} />
            </h1>
          </div>
          <div className="flex flex-col items-end justify-center h-full">
            <div className="justify-center flex flex-col items-center">
              <h1 className={`${styles.h1} text-[#2081e2]`}>{price}</h1>
              <div className="flex mt-3 justify-center items-center text-white ">
                <button
                  className="xs:hover:border-[#838383] px-4  py-2  duration-300 border font-semibold hover:bg-[#353840] w-full border-[#424242] rounded-lg border-r-0 rounded-r-none"
                  onClick={handleDecrease}
                >
                  -
                </button>
                <button
                  className="xs:hover:border-[#838383] flex justify-center items-center px-4  py-2  duration-300 border font-semibold hover:bg-[#353840] w-full border-[#424242] rounded-lg border-l-0 rounded-l-none"
                  onClick={handleIncrease}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CartItem;
