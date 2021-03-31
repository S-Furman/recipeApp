import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import SideDrawer from "./SideDrawer/SideDrawer";
const Layout = (props) => {
  const [sideDrawer, setSideDrawer] = useState(false);
  const sideDrawerButtonHandler = () => {
    setSideDrawer(!sideDrawer);
  };

  return (
    <React.Fragment>
      <Navbar sideDrawerButtonHandler={sideDrawerButtonHandler} />
      <SideDrawer opened={sideDrawer} />
      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
