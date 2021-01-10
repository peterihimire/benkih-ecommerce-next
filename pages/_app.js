import React from "react";
import Navbar from "../components/navbar";
import MobileNav from "../components/mobilenav";
import "../styles/globals.css";
import "../styles/navbar.css";
import "../styles/mobilenav.css";

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
