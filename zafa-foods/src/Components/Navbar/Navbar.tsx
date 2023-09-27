import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiFoodMenu } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { RiReservedLine } from "react-icons/ri";
import { AiOutlineProfile } from "react-icons/ai";
import { MdOutlineRoomService } from "react-icons/md";
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
            <CgCloseO onClick={shownavmenu} />
          ) : (
            <GiHamburgerMenu onClick={shownavmenu} />
          )}
        </div>

        <div className={`nav-menu ${navmenu ? `active` : `inactive`}`}>
          <div className="nav-link">
            <Link to="/">
              <div className="link-items">
                <AiOutlineHome size="1.5rem" color="white" />
                Home
              </div>
            </Link>
          </div>

          <div className="nav-link">
            <Link to="/Services">
              <div className="link-items">
                <MdOutlineRoomService size="1.5rem" color="white" />
                Services
              </div>
            </Link>
          </div>

          <div className="nav-link">
            <Link to="/Menu">
              <div className="link-items">
                <BiFoodMenu size="1.5rem" color="white" />
                Menu
              </div>
            </Link>
          </div>

          <div className="nav-link Cart">
            <Link to="/Cart">
              <div className="link-items">
                <AiOutlineShoppingCart size="1.5rem" color="white" />
                Cart
                <div className="num-Of-Items">{selectedItems.length}</div>
              </div>
            </Link>
          </div>

          <div className="nav-link">
            <Link to="/Booking">
              <div className="link-items">
                <RiReservedLine size="1.5rem" color="white" />
                Reservation
              </div>
            </Link>
          </div>

          <div className="nav-link">
            <Link to="/Aboutus">
              <div className="link-items">
                <AiOutlineProfile size="1.5rem" color="white" />
                AboutUs
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
