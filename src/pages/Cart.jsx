import React, { useState, useEffect, useContext } from "react";
import styles from "../styles.js";
import { Link } from "react-router-dom";
import index from "../index.css?inline";
import { productDetails } from "../constants";
import { CartItem, Checkout, Button } from "../components";
import { ShopContext } from "../context/ShopContextProvider";
import { motion } from "framer-motion";

const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(ShopContext);
  const totalAmount = getTotalAmount();
  const isCartEmpty = Object.values(cartItems).every((item) => item === 0);

  return (
    <div className="main-body">
      <div className="m-auto  xs:mx-[10%]">
        <div className=" bg-[#202225] mb-2 pt-5 border-b  border-[#353535] pb-5 w-full flex flex-col justify-center items-end  gap-3  m-auto">
          <h1 className={`${styles.h1}`}>Total: ₹{totalAmount}</h1>
          <Checkout amount={totalAmount} />
        </div>

        {isCartEmpty ? (
          <div className="cart gap-2">
            <h1 className="text-white font-extrabold text-[25px] xs:text-[30px]">
              Oops, your cart is empty
            </h1>

            <Link className="w-full max-w-[240px] " to="/">
              <Button text="Add items" />
            </Link>
          </div>
        ) : (
          <div>
            {productDetails.map((product, index) => {
              if (cartItems[product.id] !== 0) {
                return (
                  <div key={product.id}>
                    <CartItem data={product} key={index} />
                  </div>
                );
              }
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
