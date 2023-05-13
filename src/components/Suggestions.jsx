import React from "react";
import { productDetails } from "../constants";
import styles from "../styles.js";
import { useAuth0 } from "@auth0/auth0-react";
import { ProductCard } from "../layouts";

const Suggestions = () => {
  const { user } = useAuth0();
  const userName = user?.name;
  return (
    <div className="main-body">
      <div className="flex product overflow-x-auto whitespace-nowrap">
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
                  products.id >= 54 && products.id <= 63 ? "mr-3 " : "xs:mr-0 "
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
  );
};

export default Suggestions;
