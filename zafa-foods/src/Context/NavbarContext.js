import React, { createContext, useState } from "react";

export const NavbarContext = createContext();

const NavbarContextProvider = ({ children }) => {
  const [dropdown, setDropdown] = useState(false);
  const [navmenu, setNavmenu] = useState(false);

  const showDropdown = () => setDropdown(!dropdown);

  const shownavmenu = () => {
    setNavmenu(!navmenu);
  };
  return (
    <NavbarContext.Provider
      value={{
        dropdown,
        navmenu,
        showDropdown,
        shownavmenu,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarContextProvider;
