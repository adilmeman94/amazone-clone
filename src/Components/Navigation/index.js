import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Navigation(props) {
  console.log("Navigation props", props);

  return (
    <div className="nav-container">
      <header className="row">
        <div>
          <Link to="/products">
            <button className="humburger">
              <img
                src="https://www.clipartmax.com/png/middle/36-365828_navbar-toggle-icon-menu-hamburger-png-white.png"
                alt="there is humberger button"
                width="20px"
              ></img>
            </button>
          </Link>
        </div>
        <div>
          <a className="brand" href="/">
            amazon-clone
          </a>
        </div>
        <div className="search-bar">
          <input
            className="text-area"
            type="text"
            placeholder="Search by product name!"
          ></input>
        </div>
        <div>
          <button className="search">
            <img
              src="https://listimg.pinclipart.com/picdir/s/3-38128_computer-icons-search-box-magnifying-glass-download-search.png"
              alt="there is search bar"
              width="20px"
            ></img>
          </button>
        </div>
        <div>
          <a className="cart" href="/cart">
            Cart
          </a>
          <a className="Signin" href="/signin">
            Sign In
          </a>
        </div>
      </header>
      {/*  <ul className="nav-list">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/products">
          <li>Products</li>
        </Link>
        <Link to="/signin">
          <li>Signin</li>
        </Link>
  </ul>*/}
    </div>
  );
}
