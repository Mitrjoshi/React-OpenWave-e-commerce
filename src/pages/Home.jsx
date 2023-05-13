import React, { useState, useEffect, useRef } from "react";
import { ProductCard } from "../layouts";
import styles from "../styles.js";
import { productDetails } from "../constants";
import { Product } from "../pages";
import { useAuth0 } from "@auth0/auth0-react";
import { Footer } from "../layouts";
import {
  Timer,
  Corousal,
  GuaranteeBanner,
  CategoryBanner,
} from "../components";
import { Link } from "react-router-dom";
import Wave from "../assets/Wave.svg";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

const Home = () => {
  const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0();
  const userName = user?.name;

  return (
    <div>
      <Corousal />

      <Timer />

      <div className="flex product overflow-x-auto whitespace-nowrap max-w-[1520px] m-auto md:rounded-[15px] bg-[#151515] p-5 mt-2">
        <CategoryBanner />
      </div>

      <div className="main-body flex flex-col gap-2">
        <div className="flex justify-between my-5  items-center">
          <h1 className={`${styles.h1} sm:text-[40px] text-[30px]`}>
            Trending
          </h1>
          <Link
            className={`${styles.button} max-w-[120px] h-[40px]`}
            to="/trending"
          >
            View all
          </Link>
        </div>

        <div className="flex product relative overflow-x-auto whitespace-nowrap ">
          {productDetails
            .slice(41, 51)
            .map((products, index) =>
              products.type === "trending" ? (
                <ProductCard
                  title={products.title}
                  imageLink={products.link}
                  price={products.price}
                  ratings={products.ratings}
                  key={products.id}
                  className={`${
                    products.id >= 41 && products.id <= 50
                      ? "mr-3  "
                      : "xs:mr-0 "
                  }`}
                  to={products.to}
                  username={userName}
                  id={products.id}
                  discount={products.discount}
                  desc={products.desc}
                />
              ) : null
            )}
        </div>

        <div>
          <GuaranteeBanner />
        </div>

        <div className="flex justify-between my-5   items-center">
          <h1
            className={`${styles.h1} sm:flex items-center justify-center gap-5 sm:text-[40px] text-[30px]`}
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
          <Link
            className={`${styles.button} max-w-[120px] h-[40px]`}
            to="/best"
          >
            View all
          </Link>
        </div>
        <div className="flex product overflow-x-auto whitespace-nowrap ">
          {productDetails
            .slice(54, 64)
            .map((products, index) =>
              products.type === "best" ? (
                <ProductCard
                  title={products.title}
                  imageLink={products.link}
                  price={products.price}
                  ratings={products.ratings}
                  key={products.id}
                  className={`${
                    products.id >= 54 && products.id <= 63
                      ? "mr-3  "
                      : "xs:mr-0 "
                  }`}
                  to={products.to}
                  username={userName}
                  id={products.id}
                  discount={products.discount}
                  desc={products.desc}
                />
              ) : null
            )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
