import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../components";

const Checkout = ({ amount }) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const handleCheckout = () => {};

  return (
    <span
      onClick={handleCheckout}
      className="w-full flex gap-1 xs:max-w-[240px] justify-end"
    >
      <Button text="Checkout" />
    </span>
  );
};

export default Checkout;
