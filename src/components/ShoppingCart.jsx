import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Cart } from "../pages";
import { productDetails } from "../constants";
import { ShopContext } from "../context/ShopContextProvider";

const ShoppingCart = () => {
  const { cartItems } = useContext(ShopContext);
  const keys = Object.keys(cartItems);
  const length = keys.length;

  let totalCartItems = 0;

  for (let i = 0; i < length; i++) {
    const value = cartItems[keys[i]];
    if (value > 0) {
      totalCartItems += value;
    }
  }

  return (
    <Link
      to="/cart"
      className="h-[48px] hover:border-[#838383] transition-all flex justify-center items-center w-[48px] p-[12px] duration-300 border border-[#353535] rounded-[12px] relative"
    >
      <ShoppingCartOutlinedIcon
        sx={{
          fontSize: "24px",
        }}
        className="text-white "
      />
      {totalCartItems > 0 ? (
        <span className="absolute top-[-14px] right-[-5px] text-[#2081e2] font-extrabold text-[18px]">
          {totalCartItems}
        </span>
      ) : (
        <span className="absolute top-[-14px] right-[-5px] text-[#2081e2] font-extrabold text-[18px]">
          0
        </span>
      )}
    </Link>
  );
};

export default ShoppingCart;
