import React from "react";
import style from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
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
    <header className={style.header}>
      {selected}
      <nav className={style.nav}>
        {myLinks}
      </nav>

      <div className={style.nav__mobile}>
        <NavLink to={"/nav"}>
          <span/>
        </NavLink>
      </div>

    </header>
  )
}

export default Header;