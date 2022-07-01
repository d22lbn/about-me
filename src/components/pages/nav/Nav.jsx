import React from "react";
import style from "./Nav.module.css"
import {NavLink} from "react-router-dom";

const Nav = (props) => {
  let myLinks = props.state.headerLinks
    .map(link => {
        if (link.name !== props.state.selected.name) {
          return <NavLink to={link.link}>{link.name}</NavLink>;
        }
        return "";
      }
    );

  return (
    <main className={style.main}>
      <div className={style.links}>
        {myLinks}
      </div>
    </main>
  )
}

export default Nav;