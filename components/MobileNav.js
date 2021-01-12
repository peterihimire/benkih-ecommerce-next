import React from "react";
import Link from "next/link";

const MobileNav = ({ openState, closeMenu }) => {
  console.log(openState, closeMenu);
  return (
    <>
      <div
        className={
          openState ? "mobilenav-overlay transparent-bg" : "mobilenav-overlay"
        }
        onClick={closeMenu}
      />
      <div className={openState ? "mobilenav show-nav" : "mobilenav"}>
        <div className="mobilenav-logo">
          <Link href="/">
            <a>benkih</a>
          </Link>
        </div>
        <ul className="">
          <li className="mobilenav-item">
            <Link href="/">
              <a>home</a>
            </Link>
          </li>
          <li className="mobilenav-item">
            <Link href="/about">
              <a>about</a>
            </Link>
          </li>
          <li className="mobilenav-item">
            <Link href="/products">
              <a>products</a>
            </Link>
          </li>
          <li className="mobilenav-item">
            <Link href="/contact">
              <a>FAQs</a>
            </Link>
          </li>
          <li className="login-style">
            <Link href="/login">
              <a>login</a>
            </Link>
          </li>
          <li className="signup-style">
            <Link href="/signup">
              <a>sign up</a>
            </Link>
          </li>
        </ul>
        <div className="mobilenav-footer">
          <div className="mobilenav-footer-text ">
            <p>
              &copy; copyright <span> benkih</span> 2021
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default MobileNav;
