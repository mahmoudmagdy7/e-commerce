import React from "react";
// import styles from "./Layout.module.css";
import { Outlet, Link } from "react-router-dom";
import Footer from "../../Layouts/Footer/Footer";
import Navbar from "./../../Layouts/Navbar/Navbar";
export default function Layout() {
  return (
    <>
      <Navbar />
      {/* right cart nav  */}
      <div
        class="offcanvas offcanvas-end p-3"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header border-bottom border-1 ">
          <h5 class="offcanvas-title" id="offcanvasRightLabel">
            My Cart
          </h5>

          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body p-0 mt-3 d-flex flex-column justify-content-between">
          <div className="cart-item d-flex gap-5 border-bottom border-1 py-2 ">
            <figure className="w-25">
              <img
                src={require("../../assets/images/1680403397402-cover.jpeg")}
                alt=""
                className="w-100 bg-black"
              />
            </figure>
            <div className="item-details position-relative">
              <button
                type="button"
                class="btn-close position-absolute end-0"
                aria-label="Close"
              ></button>
              <h6>Title</h6>
              <p className="item-price fw-bolder">
                $140 <span className="fw-normal">X2</span>
              </p>
              <div className="btn-group border border-1 ">
                <button type="button" className="border-0 p-2 bg-main">
                  -
                </button>
                <input
                  type="text"
                  value="1"
                  className="text-center border-0 flex-grow-0"
                />
                <button type="button" className="border-0 p-2 bg-main">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="summary border-top border-1 pt-3 px-2">
            <div className="total d-flex justify-content-between">
              <p>Total :</p> <p className="fw-bolder">$140</p>
            </div>
            <div className="cart-actions d-flex justify-content-between gap-3 mb-3">
              <Link className="w-50" to="cart">
                <button
                  data-bs-dismiss="offcanvas"
                  className="w-100 text-uppercase btn btn-warning "
                >
                  view cart
                </button>
              </Link>
              <button className="w-50 text-uppercase btn btn-dark">
                checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Outlet />

      <Footer />
    </>
  );
}
