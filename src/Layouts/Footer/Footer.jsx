import React from "react";
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <>
      <footer className="">
        {/* <div className="container">
          <div className="row m-auto border border-1">
            <div className="col-2">col-1</div>
            <div className="col-2">dfsds</div>
            <div className="col-2">fgdfg</div>
            <div className="col-2">gfdg</div>
            <div className="col-2">fdgd</div>
          </div>
        </div> */}

        <div className="payment d-flex align-items-center flex-column mt-3">
          <img src={require("../../assets/images/payment.png")} alt="" />
          <p className=" text-muted mt-3 ">
            Copyright © 2023 all rights reserved. Powered by Mahmud Magdy
          </p>
        </div>
      </footer>
    </>
  );
}
