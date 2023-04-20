import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import Path from "../../components/Path";
import { Link } from "react-router-dom";
import $ from "jquery";
export default function Cart() {
  const [totalPrice, settotalPrice] = useState(0);

  useEffect(function () {
    let total = 0;
    for (const price of $("span[id='final-price']")) {
      total += Number(price.innerHTML);
      settotalPrice(total);
    }
    console.log(totalPrice);
    $("#totalPrice").html(totalPrice);
  });
  return (
    <>
      <Path />
      <section className="cart container my-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <figure className=" d-flex align-items-center gap-3 mb-0 ">
                  <img
                    src={require("../../assets/images/1680403397402-cover.jpeg")}
                    alt=""
                    className="cart-item-image"
                  />
                  <p className="mb-0">item title</p>
                </figure>
              </td>
              <td>
                <span id="currency-sign">$</span>140
              </td>
              <td>
                <div className="d-flex border border-1 align-items-center justify-content-around w-50">
                  <p className="mb-0">1</p>
                  <div className="d-flex flex-column">
                    <i className="fa-solid fa-angle-up fs-6"></i>
                    <i className="fas fa-angle-down"></i>
                  </div>
                </div>
              </td>
              <td>
                <span id="currency-sign">$</span>
                <span id="final-price">100</span>
              </td>
              <td>
                <i className="fas fa-trash-can"></i>
              </td>
            </tr>

            <tr>
              <th colSpan={3} className=" ps-lg-5 ps-md-5">
                Total
              </th>

              <th>
                <span id="currency-sign">$</span>
                <span id="totalPrice"></span>
              </th>
            </tr>
          </tbody>
        </table>
        <div className="d-flex justify-content-between">
          <Link to="/home"> Continue shopping </Link>
          <button className=" btn-sm text-uppercase btn btn-dark">
            checkout
          </button>
        </div>
      </section>
    </>
  );
}
