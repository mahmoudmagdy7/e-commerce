import React from "react";
import Path from "../../components/Path";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import $ from "jquery";

export default function Login() {
  let navigator = useNavigate();
  let user = {
    email: "",
    password: "",
  };

  async function loginUser(user) {
    try {
      let { data } = await axios.post(
        "https://route-ecommerce.onrender.com/api/v1/auth/signin",
        user
      );
      if (data.message === "success") {
        $(".backend-message ").addClass("text-success");
        $(".backend-message ").html(` <span>&bull;</span> Registration Done `);
        navigator("/home");
      }
    } catch (error) {
      console.log(error.response.data.message);

      $(".backend-message ").addClass("text-danger");
      $(".backend-message ").html(
        ` <span>&bull;</span> ${error.response.data.message}`
      );

      setTimeout(() => {
        $(".backend-error").html("");
      }, 3000);
    }
  }

  let formik = useFormik({
    initialValues: user,

    onSubmit: function (user) {
      console.log(user);
      loginUser(user);
    },

    validate: function (user) {
      let errors = {};

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

      return errors;
    },
  });
  return (
    <>
      <Path />
      <section>
        <div className="container text-center">
          <h2>Login</h2>
          <p className="lead">Best place to buy and sell digital products</p>

          <form
            onSubmit={formik.handleSubmit}
            className="login-form border rounded-1 text-start my-4 border-1 p-4 row bg-white m-auto"
          >
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

            <div className="form-group my-2 col-12 d-flex flex-column ">
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
            <p className="backend-message text-center mb-2"></p>

            <div className="form-group my-2 col-12 text-center">
              <button type="submit" className="btn btn-danger rounded-1 fs-5">
                Login
              </button>
            </div>
            <p className="text-center mt-3">
              Don you have account ?
              <Link
                to="/register"
                className="text-danger text-decoration-none ms-2 "
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
