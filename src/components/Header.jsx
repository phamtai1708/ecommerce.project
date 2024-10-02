import { useState } from "react";

import "./Header.css";

function Header() {
  return (
    <>
      <div className="topHeader">
        <p>
          Summer Sale For All Swim Suits And Free Express Dilivery - OFF 50%!
          <a href="">Shop Now</a>
        </p>
        <select className="languageSelect">
          <option value="en">English</option>
          <option value="vi">Tiếng Việt</option>
        </select>
      </div>
      <div className="header">
        <div className="logo">
          <p>Exclusive</p>
        </div>
        <div className="mainMenu">
          <a href="">Home</a>
          <a href="">Contact</a>
          <a href="">About</a>
          <a href="">Follow us</a>
        </div>
        <div className="authMenu">
          <div className="searchBox">
            <input type="text" placeholder="What are you looking for?" />
            <span className="material-symbols-outlined">search</span>
          </div>
          <div>
            <span className="material-symbols-outlined">favorite</span>
          </div>
          <div>
            <span className="material-symbols-outlined">shopping_cart</span>
          </div>
          <div>
            <span className="material-symbols-outlined">account_circle</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
