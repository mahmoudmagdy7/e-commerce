import React from "react";
import styles from "./Navbar.module.css";

import basket from "../../assets/icons/shopping-basket.svg";
import { Link } from "react-router-dom";
export default function Navbar() {
  function toggleNav() {
    let menu = document.querySelector(".user-menu");
    menu.classList.toggle("active-menu");
    let closeLayer = document.querySelector(".close-layer");
    closeLayer.style.display === "block"
      ? (closeLayer.style.display = "none")
      : (closeLayer.style.display = "block");
  }

  return (
    <>
      <nav className="navbar py-3 border">
        <div className=" container-fluid container-lg m-auto row w-100  flex-column-reverse flex-lg-row">
          <div className="d-flex align-items-center col-lg-8 justify-content-between ">
            <Link className="navbar-brand" to="/">
              <img src={require("../../assets/icons/logo-6.png")} alt="" />
            </Link>

            <div className="search w-50 d-flex position-relative align-items-center text-secondary ">
              <input type="text" className="form-control rounded-5 py-2" />
              <i className="fa-solid fa-magnifying-glass position-absolute"></i>
            </div>
          </div>

          <div className=" col-lg-4">
            <div className="navbar-nav d-flex flex-row  justify-content-end position-relative ">
              <div className="position-relative">
                <button onClick={toggleNav} className="btn icon ">
                  <i className="fa-regular fa-user"></i>
                </button>
                <div onClick={toggleNav} className="close-layer"></div>
                <ul className="user-menu text-start position-absolute">
                  <Link
                    className="nav-link py-1 active"
                    aria-current="page"
                    to="home"
                  >
                    Home
                  </Link>
                  <Link className="nav-link py-1" to="/login">
                    login
                  </Link>
                  <Link className="nav-link py-1" to="/register">
                    register
                  </Link>
                </ul>
              </div>
              <button className="btn icon position-relative ">
                <i class="fa-regular fa-heart"></i>
                <span class="position-relative translate-middle-x  badge rounded-pill bg-secondary ">
                  2<span class="visually-hidden">unread messages</span>
                </span>
              </button>
              <button className="btn basket d-flex align-items-center justify-content-center ">
                <img
                  src={basket}
                  alt="shopping basket"
                  className="basket-icon"
                />
                <span class="position-relative translate-middle-x  basket-badge badge rounded-pill bg-secondary ">
                  5<span class="visually-hidden">unread messages</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
