import React from "react";
import styles from "./Notfound.module.css";
import { Link } from "react-router-dom";
export default function Notfound() {
  return (
    <>
      <section className="error-404 my-5 pt-2">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <img
                src={require("../../assets/images/404-error-page.gif")}
                alt=""
              />
              <h1 className="main-title text-center fw-bolder display-3">
                404
              </h1>
              <h3 className="sub-title text-center fs-4">
                Look like you're lost
              </h3>

              <p className="desc-content text-center lead fs-5">
                the page you are looking for not avaible!
              </p>

              <Link className="link-404 text-decoration-none btn" to="/">
                Go to Back
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
