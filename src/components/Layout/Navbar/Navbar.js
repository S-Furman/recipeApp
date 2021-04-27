import styles from "./Navbar.module.css";

import NavItems from "./NavItems/NavItems";

import Logo from "../../../assets/logo.png";
import menuButton from "../../../assets/menuButton.svg";

const Navbar = (props) => (
  <nav className={styles.header}>
    <img className={styles.img} src={Logo} alt="logo" />
    <NavItems view="desktop"></NavItems>
    <img
      onClick={props.sideDrawerButtonHandler}
      className={styles.menuButton}
      src={menuButton}
      alt="menuButton"
    />
  </nav>
);

export default Navbar;
