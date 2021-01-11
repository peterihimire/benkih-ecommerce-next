import React from "react";
import Navbar from "../components/Navbar";
import MobileNav from "../components/MobileNav";
import "../styles/globals.css";
import "../styles/Navbar.css";
import "../styles/MobileNav.css";
import "../styles/ProductItem.css";
import "../styles/ProductList.css";

function MyApp({ Component, pageProps }) {
  const [menuState, setMenuState] = React.useState({
    isOpen: false,
  });

  const openHandler = () => {
    setMenuState({
      isOpen: !menuState.isOpen,
    });
  };
  const closeHandler = () => {
    setMenuState({
      isOpen: false,
    });
  };

  return (
    <>
      <MobileNav />
      <Navbar openMenu={openHandler} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
