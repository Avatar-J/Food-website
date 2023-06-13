//import * as FaIcons from "react-icons/fa";

import React from "react";
//import { IconType } from "react-icons";
//import { FaHome } from "react-icons/fa";

interface PageLink {
  title: string;
  //icon: IconType;
  path: string;
}

export const pageLinks = [
  { title: "Home", path: "/" },

  { title: "Services", path: "/Services" },

  {
    title: "Branches",
    path: "/Branches",
    submenu: [{ title: "Madina" }, { title: "Ridge-Accra" }],
  },

  { title: "AboutUs", path: "/AboutUs" },
];
{
  /* <Link to="/">Home</Link>
          <Link to="/Services">Services</Link>

          <div className="branches">
            <Link to="#">
              Branches
              <MdOutlineArrowDropDown />
            </Link>

            <div className="branches location">
              <Link to="/Madina">Madina</Link>
              <Link to="/Accra-Ridge">Ridge-Accra</Link>
            </div>
          </div>

          <Link to="/Aboutus">AboutUs</Link> */
}
