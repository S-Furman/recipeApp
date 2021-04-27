import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import SideDrawer from "./SideDrawer/SideDrawer";
const Layout = (props) => {
  const [sideDrawer, setSideDrawer] = useState(false);
  const sideDrawerButtonHandler = () => {
    setSideDrawer(!sideDrawer);
  };

  return (
    <>
      <Navbar sideDrawerButtonHandler={sideDrawerButtonHandler} />
      <SideDrawer click={sideDrawerButtonHandler} opened={sideDrawer} />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
