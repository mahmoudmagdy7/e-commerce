import React from "react";
// import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import Footer from "../../Layouts/Footer/Footer";
import Navbar from "./../../Layouts/Navbar/Navbar";
export default function Layout() {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
}
