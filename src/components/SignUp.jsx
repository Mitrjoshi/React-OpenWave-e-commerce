import React, { useState, useEffect, useContext } from "react";
import LoginIcon from "@mui/icons-material/Login";
import { useAuth0 } from "@auth0/auth0-react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const WalletinfoButton = () => {
  const { isAuthenticated, logout, loginWithRedirect, user } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <div className=" flex items-center h-[48px] justify-center">
          <div className=" flex items-center hover:border-[#838383] transition-all h-[48px] justify-center cursor-pointer  border border-[#353535] rounded-l-[12px]">
            <button className=" px-[.5rem] border-[#353535] hover:border-[#838383]">
              <img
                src={user.picture}
                alt={user.name}
                className="rounded-[50%]"
              />
            </button>
          </div>
          <div className=" flex items-center hover:border-[#838383] transition-all h-[48px] justify-center  border border-[#353535] rounded-r-[12px]">
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              className="p-[12px] pl-0 flex items-center h-[48px] justify-center"
            >
              <h1 className="text-white p-[12px] flex justify-center items-center font-extrabold text-[18px]">
                Logout
              </h1>
            </button>
          </div>
        </div>
      ) : (
        <div className=" flex items-center hover:border-[#838383] transition-all h-[48px] justify-center  border border-[#353535] rounded-[12px]">
          <button
            onClick={() => loginWithRedirect()}
            className="p-[12px]  flex items-center h-[48px] justify-center"
          >
            <LoginIcon
              sx={{
                fontSize: "24px",
              }}
              className="text-white "
            />
            <h1 className="text-white p-[12px] flex justify-center items-center font-extrabold text-[18px]">
              Sign Up
            </h1>
          </button>
        </div>
      )}
    </div>
  );
};

export default WalletinfoButton;
