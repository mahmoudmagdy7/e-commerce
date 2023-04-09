import React from "react";
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <>
      <footer className="">
        <div className="payment d-flex align-items-center flex-column mt-3">
          <img src={require("../../assets/images/payment.png")} alt="" />
          <p className=" text-muted mt-3 text-center ">
            Copyright © 2023 all rights reserved. Powered by Mahmud Magdy
          </p>
        </div>
      </footer>
    </>
  );
}
