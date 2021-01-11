import React from "react";
import Navbar from "../components/Navbar";
import MobileNav from "../components/MobileNav";
import "../styles/globals.css";
import "../styles/Navbar.css";
import "../styles/MobileNav.css";
import "../styles/ProductItem.css";
import "../styles/ProductList.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <MobileNav /> */}
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
