import React, { createContext, useState } from "react";
import { menulist } from "../Pages/Menu/Menulist";

export const MenuContext = createContext({
  selectedItems: [],
  addToCart: (aug1) => {},
  displayedData: 2,
  setDisplayedData: (data) => {},
  add: false,
  setAdd: (state) => {},
});

const MenuContextProvider = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [displayedData, setDisplayedData] = useState(2);
  const [add, setAdd] = useState(false);

  const addToCart = (index) => {
    setAdd(!add);
    const item = menulist[displayedData].menu[index];

    console.log(item);

    setSelectedItems([...selectedItems, { item }]);

    setSelectedItems.push(item);
    console.log(selectedItems);
  };

  return (
    <MenuContext.Provider
      value={{
        selectedItems,
        addToCart,
        displayedData,
        setDisplayedData,
        add,
        setAdd,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
