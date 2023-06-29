import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Navbar } from "./layouts";
import { DealsBanner } from "./components";
import ScrollToTop from "./scrollUp/ScrollToTop";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { motion, AnimatePresence } from "framer-motion";
import ShopContextProvider from "./context/ShopContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ShopContextProvider>
      <AnimatePresence>
        <Auth0Provider
          domain="" //AUTH0 KEYS
          clientId="" //AUTH0 KEYS
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <DealsBanner />
            <App />
          </BrowserRouter>
        </Auth0Provider>
      </AnimatePresence>
    </ShopContextProvider>
  </React.StrictMode>
);
