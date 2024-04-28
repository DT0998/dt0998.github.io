import React from "react";
import classes from "./style.module.css";
// route
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
// logo
import logo from "../../../assets/images/layouts/nav/logo/logo.png";
// icons
import { FaUserAlt } from "react-icons/fa";
// hook

const NavDesktop = () => {
  return (
    <React.Fragment>
      <div
        className="d-flex flex-row justify-content-center align-items-center"
        style={{ height: "50px" }}
      >
        <div
          style={{ width: "960px" }}
          className="d-flex flex-row align-items-center justify-content-between"
        >
          <ul
            className={`${classes.nav_list} d-flex flex-row justify-content-md-start align-items-center gap-3 my-0 mx-2 list-unstyled pl-0`}
          >
            <li>
              <Link to="/">
                <img src={logo} className={classes.logo} alt="logo"></img>
              </Link>
            </li>
            <NavLink
              to="/movie-popular"
              activeClassName={classes.active}
              className={`text-decoration-none text-muted`}
            >
              <li> Movies </li>
            </NavLink>
            <NavLink
              to="/tvshow-popular"
              activeClassName={classes.active}
              className={`text-decoration-none text-muted`}
            >
              <li>TV Shows</li>
            </NavLink>
          </ul>
          <ul
            className={`${classes.nav_list} d-flex flex-row justify-content-md-end align-items-center gap-3 my-0 mx-2 list-unstyled pl-0`}
          >
            <NavLink
              to="/search"
              activeClassName={classes.active}
              className={`text-decoration-none text-muted`}
            >
              <li> Search </li>
            </NavLink>
            <NavLink to="/login">
              <li>
                <FaUserAlt className="text-dark"/>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
export default NavDesktop;
