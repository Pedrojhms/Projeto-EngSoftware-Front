import React, { useContext } from "react";
import { UsuarioContext } from "../app/context/UsuarioContext";

function NavBarItem({ ...props }) {
  const { isAutenticado } = useContext(UsuarioContext);
  if (isAutenticado()) {
    return (
      <li className="nav-item">
        <a onClick={props.onClick} className="nav-link" href={props.href}>
          {props.label}
        </a>
      </li>
    );
  } else {
    return false;
  }
}

export default NavBarItem;
