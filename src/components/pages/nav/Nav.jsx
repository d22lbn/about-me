import React from "react";
import style from "./Nav.module.css"
import {NavLink} from "react-router-dom";

const Nav = (props) => {
  let selected = null;
  let myLinks = props.state.headerLinks
    .map(link => {
        if (link.name !== props.state.selected.name) {
          return <NavLink to={link.link}>{link.name}</NavLink>;
        } else {
          selected = <NavLink className={style.header__selected} to={link.link}>{ucFirst(link.name)}</NavLink>;
        }
        return "";
      }
    );

  function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  }

  return (
    <main>

    </main>
  )
}

export default Nav;