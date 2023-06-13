import React, { useState } from "react";
import "./Navbar.css";
import { pageLinks } from "./NavbarData";
import { Link } from "react-router-dom";
import { MdOutlineArrowDropDown } from "react-icons/md";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => setDropdown(!dropdown);

  return (
    <>
      <div className="Navbar-container">
        <div className="Logo">ZAFA FOODS</div>

        <div className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/Services">Services</Link>

          <div className="branches">
            <Link to="#" onClick={showDropdown}>
              Branches
              <MdOutlineArrowDropDown />
            </Link>

            <div className={`branches ${dropdown ? "branch" : "location"}`}>
              <Link to="/Madina">Madina</Link>
              <Link to="/Accra-Ridge">Ridge-Accra</Link>
            </div>
          </div>

          <Link to="/Aboutus">AboutUs</Link>
          {/* {pageLinks.map((page) => {
            return (
              <div>
                <Link to={page.path}>{page.title}</Link>

                {page.submenu && (
                  <div className="branches location">
                    <Link to="/Madina">Madina</Link>
                    <Link to="/Accra-Ridge">Ridge-Accra</Link>
                  </div>
                )}
              </div>
            );
          })} */}
        </div>
      </div>
    </>
  );
}
