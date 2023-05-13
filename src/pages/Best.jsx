import React, { useContext, useEffect } from "react";
import { ProductCard, ProductCardSmall } from "../layouts";
import styles from "../styles.js";
import { productDetails } from "../constants";
import { Product } from "../pages";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Footer, Filter } from "../layouts";
import { ShopContext } from "../context/ShopContextProvider";
import Wave from "../assets/Wave.svg";

const Earbuds = () => {
  const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0();
  const userName = user?.name;

  const { sliderValue, setSliderValue } = useContext(ShopContext);

  useEffect(() => {
    setSliderValue(4000);
  }, []);

  let max = sliderValue.toLocaleString(undefined, {
    minimumFractionDigits: 0,
  });

  let maxAmount = `₹${max}`;

  console.log(maxAmount);

  return (
    <>
      <div className="main-body products-page gap-4">
        <div>
          <Filter />
        </div>
        <div>
          <h1
            className={`${styles.h1} ml-3 my-5 flex items-center gap-5 sm:text-[40px] text-[30px]`}
          >
            Best of
            <span className="flex items-center">
              <img
                className="xs:h-[40px] h-[32px] mr-1"
                src={Wave}
                alt="Wave"
              />
              <h1 className="text-[#fff] font-extrabold space-x-[1px] sm:text-[40px] text-[25px]">
                <span>O</span>
                <span>p</span>
                <span>e</span>
                <span>n</span>
                <span>W</span>
                <span>a</span>
                <span>v</span>
                <span>e</span>
              </h1>
            </span>
          </h1>
          <div className="xs:hidden mt-2 flex flex-col gap-[.5rem]">
            {productDetails.map((product, index) =>
              product.type === "best" && product.price < maxAmount ? (
                <ProductCardSmall
                  title={product.title}
                  imageLink={product.link}
                  price={product.price}
                  ratings={product.ratings}
                  key={product.id}
                  to={product.to}
                  username={userName}
                  id={product.id}
                  discount={product.discount}
                  desc={product.desc}
                />
              ) : null
            )}
          </div>
          <div className="hidden mt-2 gap-3  xs:grid ow1515:grid-cols-5 ow1235:grid-cols-4  ow1020:grid-cols-3 ow775:grid-cols-3 ow512:grid-cols-2">
            {productDetails.map((product, index) =>
              product.type === "best" && product.price <= maxAmount ? (
                <ProductCard
                  title={product.title}
                  imageLink={product.link}
                  price={product.price}
                  ratings={product.ratings}
                  key={product.id}
                  to={product.to}
                  username={userName}
                  id={product.id}
                  discount={product.discount}
                  desc={product.desc}
                />
              ) : null
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Earbuds;
