import React, { useContext, useState } from "react";
import "./Navbar.css";
import { pageLinks } from "./NavbarData";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgCloseO } from "react-icons/cg";
import { NavbarContext } from "../../Context/NavbarContext";
import { MenuContext } from "../../Context/MenuContext";

export default function Navbar() {
  const { dropdown, navmenu, showDropdown, shownavmenu } =
    useContext(NavbarContext);

  const { selectedItems } = useContext(MenuContext);

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
          <div className="nav-link">
            <Link to="/">Home</Link>
          </div>

          <div className="nav-link">
            <Link to="/Services">Services</Link>
          </div>

          <div className="nav-link">
            <Link to="/Menu">Menu</Link>
          </div>

          <div className="nav-link">
            <Link to="/Booking">Reservation</Link>
          </div>

          <div className="nav-link Cart">
            <Link to="/Cart">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AiOutlineShoppingCart size="1.5rem" color="white" />
                Cart
                <div className="num-Of-Items">{selectedItems.length}</div>
              </div>
            </Link>
          </div>

          <div className="nav-link">
            <Link to="/Aboutus">AboutUs</Link>
          </div>
        </div>
      </div>
    </>
  );
}
