import React from "react";
import Link from "next/link";

const navbar = ({ openMenu }) => {
  console.log(openMenu);
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <div className="navbar-container">
          <div className="navbar-header">
            <Link href="/">
              <a className="brand-logo">
                <strong> benkih</strong>
              </a>
            </Link>
          </div>
          <ul className="navbar-links">
            <li className="navbar-item">
              <Link href="/">
                <a className="navbar-single-link">home</a>
              </Link>
            </li>
            <li className="navbar-item">
              <Link href="/about">
                <a className="navbar-single-link">about</a>
              </Link>
            </li>
            <li className="navbar-item">
              <Link href="/products">
                <a className="navbar-single-link">products</a>
              </Link>
            </li>
            <li className="navbar-item">
              <Link href="/contact">
                <a className="navbar-single-link">contact</a>
              </Link>
            </li>
            <li className="navbar-item">
              <Link href="/contact">
                <a className="navbar-single-link">login</a>
              </Link>
            </li>
            <li className="navbar-item">
              <Link href="/">
                <button className="btn">sign up</button>
              </Link>
            </li>
          </ul>
          <div className="navbar-btn" onClick={openMenu}>
            <button>menu</button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default navbar;
