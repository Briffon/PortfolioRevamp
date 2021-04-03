import React from "react";
import "./index.css";

function Nav() {
  return (
    <div id="myMenu">
      <img
        className="nav-container-logo"
        src="./images/logo-white.png"
        alt="logo"
      />
      <ul className="myMenu__links">
        <li data-menuanchor="firstPage" className="active">
          <a href="#firstPage">Home</a>
        </li>
        <li data-menuanchor="secondPage">
          <a href="#secondPage">About</a>
        </li>
        <li data-menuanchor="thirdPage">
          <a href="#thirdPage">Portfolio</a>
        </li>
        <li data-menuanchor="fourthPage">
          <a href="#fourthPage">Contact</a>
        </li>
        <img src="./images/me.png" alt="Britton Smith" />
      </ul>
    </div>
  );
}

export default Nav;
