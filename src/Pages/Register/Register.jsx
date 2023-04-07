import React from "react";
import styles from "./Register.module.css";
import Path from "../../components/Path";
export default function Register() {
  return (
    <>
      <Path />
      <section>
        <div className="container text-center">
          <h2>Register</h2>
          <p className="lead">Best place to buy and sell digital products</p>

          <form className="register-form border rounded-1 text-start my-4 border-1 p-4 row bg-white m-auto">
            <div className="form-group my-2 col-6 d-flex flex-column ">
              <label htmlFor="firstName">
                Name<span className="text-danger fs-5 ">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                type="firstName"
                className="form-control rounded-1 w-100"
              />
            </div>

            <div className="form-group my-2 col-6 d-flex flex-column ">
              <label htmlFor="phoneNumber">
                Phone Number <span className="text-danger fs-5 ">*</span>{" "}
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="number"
                className="form-control rounded-1 w-100"
              />
            </div>
            <div className="form-group my-2 col-12 d-flex flex-column ">
              <label htmlFor="email">
                E-mail address <span className="text-danger fs-5 ">*</span>{" "}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-control rounded-1 w-100"
              />
            </div>

            <div className="form-group my-2 col-6 d-flex flex-column ">
              <label htmlFor="password">
                Password <span className="text-danger fs-5 ">*</span>{" "}
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="form-control rounded-1 w-100"
              />
            </div>

            <div className="form-group my-2 col-6 d-flex flex-column ">
              <label htmlFor="rePassword">
                Re-password <span className="text-danger fs-5 ">*</span>{" "}
              </label>
              <input
                id="rePassword"
                name="rePassword"
                type="rePassword"
                className="form-control w-100 rounded-1"
              />
            </div>

            <div className="form-group my-2 col-12 text-center">
              <button className="btn btn-danger rounded-1 fs-5 mt-3">
                {" "}
                Register
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
