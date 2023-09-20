import { createContext, useState } from "react";
import { menulist } from "../Pages/Menu/Menulist";
import * as React from "react";

interface MenuItem {
  name: string;
  price: number;
  ingredients: string;
  img: string;
}

interface MenuContextType {
  selectedItems: MenuItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (item1: MenuItem, item2: number) => void;
  displayedData: number;
  setDisplayedData: (data: number) => void;
  add: boolean;
  setAdd: (state: boolean) => void;
  totalCostOfItems: () => { total: number; numberOfItems: number };
}

export const MenuContext = createContext<MenuContextType>({
  selectedItems: [],
  addToCart: (aug1) => {},
  removeFromCart: (aug1, aug2) => {},
  displayedData: 2,
  setDisplayedData: (data) => {},
  add: false,
  setAdd: (state) => {},
  totalCostOfItems: () => ({ total: 0, numberOfItems: 0 }),
});

type Props = {
  children?: React.ReactNode;
  //this is for other prop types
};

const MenuContextProvider: React.FC<Props> = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState<MenuItem[]>([]);
  const [displayedData, setDisplayedData] = useState<number>(2);
  const [add, setAdd] = useState<boolean>(false);

  const addToCart = (item: MenuItem) => {
    console.log(add);
    setAdd(true);
    console.log(add);

    console.log(item);

    console.log(selectedItems);
    setSelectedItems([...selectedItems, item]);
  };

  const removeFromCart = (item: MenuItem, index: number) => {
    const isObjectInArray = menulist[displayedData].menu.some((obj) => {
      return obj == item;
    });

    if (isObjectInArray) {
      setAdd(false);
      console.log(add);

      const itemRemoved = selectedItems.filter((obj) => {
        return obj != item;
      });
      setSelectedItems(itemRemoved);
      console.log("object has been removed");
    }
  };

  const totalCostOfItems = () => {
    let total = 0;
    for (let i = 0; i < selectedItems.length; i++) {
      total = selectedItems[i].price + total;
    }

    const numberOfItems = selectedItems.length;

    return { total, numberOfItems };
  };

  return (
    <MenuContext.Provider
      value={{
        selectedItems,
        addToCart,
        removeFromCart,
        displayedData,
        setDisplayedData,
        add,
        setAdd,
        totalCostOfItems,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
