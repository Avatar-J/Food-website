import React, { useContext, useState } from "react";
import "./Navbar.css";
import { pageLinks } from "./NavbarData";
import { Link } from "react-router-dom";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgCloseO } from "react-icons/cg";
import { NavbarContext } from "../../Context/NavbarContext";

export default function Navbar() {
  const { dropdown, navmenu, showDropdown, shownavmenu } =
    useContext(NavbarContext);

  return (
    <>
      <div className="Navbar-container">
        <div className="Logo">ZAFA FOODS</div>

        <div className="Humburger">
          {navmenu ? (
            <GiHamburgerMenu onClick={shownavmenu} />
          ) : (
            <CgCloseO onClick={shownavmenu} />
          )}
        </div>

        <div className="nav-menu">
          <Link to="/">Home</Link>

          <Link to="/Services">Services</Link>

          <div className="branches">
            <Link to="/Menu">Menu</Link>
          </div>

          <div className="Booking">
            <Link to="/Booking">Reservation</Link>
          </div>

          <div className="Cart">
            <Link to="/Cart">Cart</Link>
          </div>

          <Link to="/Aboutus">AboutUs</Link>
        </div>
      </div>
    </>
  );
}
