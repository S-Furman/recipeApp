import "./NavbarElement.css";
import { NavLink } from "react-router-dom";
const NavbarElement = (props) => {
  return (
    <li onClick={props.click}>
      <NavLink to={props.path}>{props.children} </NavLink>{" "}
    </li>
  );
};

export default NavbarElement;
