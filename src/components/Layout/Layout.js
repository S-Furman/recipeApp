import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.css";
const Layout = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
};

export default Layout;
