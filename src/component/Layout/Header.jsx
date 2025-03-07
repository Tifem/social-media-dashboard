import React from "react";
import { NavLink } from "react-router";
// import '/App.css'

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <h3 className="logo">LOGO</h3>

        <ul className="nav-links">
          <NavLink to="/profile">Profile</NavLink>

          <NavLink to="/feed">Feed</NavLink>

          <NavLink to="/settings">Settings</NavLink>

          <NavLink to="/notification">Notification</NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Header;
