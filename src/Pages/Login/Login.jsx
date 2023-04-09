import React from "react";
import styles from "./Login.module.css";
import Path from "../../components/Path";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
export default function Login() {
  let user = {
    name: "",
    email: "",
    phone: "",
    password: "",
    rePassword: "",
  };

  async function registerNewUser(user) {
    try {
      let { data } = await axios.post(
        "https://route-ecommerce.onrender.com/api/v1/auth/signup",
        user
      );
      console.log(data);
    } catch (error) {
      console.log(error.response.data.errors.msg);
    }
  }

  let formik = useFormik({
    initialValues: user,

    onSubmit: function (user) {
      console.log(user);
      registerNewUser(user);
    },

    validate: function (user) {
      let errors = {};

      // handling the name
      if (!user.name) {
        errors.name = "Name is required";
      } else if (user.name.length < 2) {
        errors.name = "Name min length must be 2 characters";
      }

      // handling the phone number

      if (!user.phone) {
        errors.phone = "Phone number is required";
      } else if (!user.phone.match(/^(02)?01[0125][0-9]{8}$/)) {
        errors.phone = "Invalid phone number";
      }

      // handling the email address
      if (!user.email) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user.email)
      ) {
        errors.email = "Invalid email address";
      }

      // handling the password
      if (!user.password) {
        errors.password = "Password is required";
      } else if (
        !user.password.match(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/
        )
      ) {
        errors.password =
          "Password at least 8 characters 1 number 1 lowercase and uppercase letter  1 special character ";
      }

      if (!user.rePassword) {
        errors.rePassword = "Re-enter password is required";
      }
      if (user.password !== user.rePassword) {
        errors.rePassword = "Passwords doesn't not match";
      }
      return errors;
    },
  });
  return (
    <>
      <Path />
      <section>
        <div className="container text-center">
          <h2>Register</h2>
          <p className="lead">Best place to buy and sell digital products</p>

          <form
            onSubmit={formik.handleSubmit}
            className="register-form border rounded-1 text-start my-4 border-1 p-4 row bg-white m-auto"
          >
            <div className="form-group my-2 col-6 d-flex flex-column ">
              <label htmlFor="firstName">
                Name<span className="text-danger fs-5 ">*</span>
              </label>

              <input
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
                id="firstName"
                name="name"
                placeholder="Enter your name"
                type="text"
                className="form-control rounded-1 w-100"
              />

              <p className="my-0 text-danger err">
                {formik.touched.name && formik.errors.name ? (
                  <div>
                    <span>&bull;</span>
                    <span> {formik.errors.name} </span>
                  </div>
                ) : (
                  ""
                )}
              </p>
            </div>

            <div className="form-group my-2 col-6 d-flex flex-column ">
              <label htmlFor="phoneNumber">
                Phone Number <span className="text-danger fs-5 ">*</span>
              </label>
              <input
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.phone}
                id="phoneNumber"
                name="phone"
                placeholder="Enter your phone number"
                type="text"
                className="form-control rounded-1 w-100"
              />
              <p className="my-0 text-danger err">
                {formik.touched.phone && formik.errors.phone ? (
                  <div>
                    <span>&bull;</span>
                    <span> {formik.errors.phone} </span>
                  </div>
                ) : (
                  ""
                )}
              </p>
            </div>
            <div className="form-group my-2 col-12 d-flex flex-column ">
              <label htmlFor="email">
                Email Address <span className="text-danger fs-5 ">*</span>
              </label>
              <input
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                id="email"
                name="email"
                placeholder="Enter your email address"
                type="email"
                className="form-control rounded-1 w-100"
              />
              <p className="my-0 text-danger err">
                {formik.touched.email && formik.errors.email ? (
                  <div>
                    <span>&bull;</span>
                    <span> {formik.errors.email} </span>
                  </div>
                ) : (
                  ""
                )}
              </p>
            </div>

            <div className="form-group my-2 col-6 d-flex flex-column ">
              <label htmlFor="password">
                Password <span className="text-danger fs-5 ">*</span>
              </label>
              <input
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
                id="password"
                name="password"
                placeholder="Enter your unique password"
                type="password"
                className="form-control rounded-1 w-100"
              />
              <p className="my-0 text-danger err">
                {formik.touched.password && formik.errors.password ? (
                  <div>
                    <span>&bull;</span>
                    <span> {formik.errors.password} </span>
                  </div>
                ) : (
                  ""
                )}
              </p>
            </div>

            <div className="form-group my-2 col-6 d-flex flex-column ">
              <label htmlFor="rePassword">
                Re-password <span className="text-danger fs-5 ">*</span>
              </label>
              <input
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.rePassword}
                id="rePassword"
                name="rePassword"
                placeholder="Enter your password again"
                type="Password"
                className="form-control w-100 rounded-1"
              />
              <p className="my-0 text-danger err">
                {formik.touched.rePassword && formik.errors.rePassword ? (
                  <div>
                    <span>&bull;</span>
                    <span> {formik.errors.rePassword} </span>
                  </div>
                ) : (
                  ""
                )}
              </p>
            </div>

            <div className="form-group my-2 col-12 text-center">
              <button
                type="submit"
                className="btn btn-danger rounded-1 fs-5 mt-4"
              >
                Register
              </button>
            </div>
            <p className="text-center mt-3">
              Don you have account ?
              <Link
                to="/login"
                className="text-danger text-decoration-none ms-2 "
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
