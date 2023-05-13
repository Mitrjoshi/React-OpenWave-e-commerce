import React, { createContext, useState, useEffect } from "react";
import { productDetails } from "../constants";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  const storedCart = localStorage.getItem("cartItems");

  function valuetext(value) {
    return `${value}₹`;
  }

  if (storedCart) {
    return JSON.parse(storedCart);
  } else {
    let cart = {};
    productDetails.forEach((item) => {
      cart[item.id] = 0;
    });
    return cart;
  }
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // localStorage.clear();

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const productInfo = productDetails.find(
          (product) => product.id === item
        );
        if (productInfo) {
          const price = parseFloat(productInfo.price.replace(/₹|,/g, ""));
          totalAmount += cartItems[item] * price;
        } else {
          console.error(`Product with id ${item} not found in productDetails`);
        }
      }
    }
    const formattedTotalAmount = totalAmount
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,");

    return formattedTotalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
  };

  const [sliderValue, setSliderValue] = useState(4000);

  const slider = (newValue) => {
    setSliderValue(newValue);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    getTotalAmount,
    slider,
    sliderValue,
    setSliderValue,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
