import { createContext, useState } from "react";
import { menulist } from "../Pages/Menu/Menulist";
import * as React from "react";

interface MenuItem {
  name: string;
  price: number;
  ingredients: string;
  img: string;
  item: number;
}

interface MenuContextType {
  selectedItems: MenuItem[];
  addToCart: (item: MenuItem, index: number) => void;
  removeFromCart: (item1: MenuItem, item2: number) => void;
  displayedData: number;
  setDisplayedData: (data: number) => void;
  add: boolean[];
  setAdd: (state: boolean[]) => void;
  // totalCostOfItems: () => { total: number };
  // totalNumberOfItems: () => { numberOfItems: number };
  totalCostOfItems: () => void;
  totalNumberOfItems: () => void;
  increaseItems: (data: number) => void;
  decreaseItems: (data: number) => void;
  totalItems: number;
  setTotalItems: (data: number) => void;
  totalPrice: number;
  setTotalPrice: (data: number) => void;
}

export const MenuContext = createContext<MenuContextType>({
  selectedItems: [],
  addToCart: (aug1, aug2) => {},
  removeFromCart: (aug1, aug2) => {},
  displayedData: 2,
  setDisplayedData: (data) => {},
  add: [],
  setAdd: (state) => {},
  // totalCostOfItems: () => ({ total: 0 }),
  // totalNumberOfItems: () => ({ numberOfItems: 0 }),
  totalCostOfItems: () => {},
  totalNumberOfItems: () => {},
  increaseItems: (data) => {},
  decreaseItems: (data) => {},
  totalPrice: 0,
  setTotalPrice: () => {},
  totalItems: 0,
  setTotalItems: () => {},
});

type Props = {
  children?: React.ReactNode;
  //this is for other prop types
};

const MenuContextProvider: React.FC<Props> = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState<MenuItem[]>([]);
  const [displayedData, setDisplayedData] = useState<number>(2);
  const [add, setAdd] = useState<boolean[]>(menulist.map(() => false));
  const [totalItems, setTotalItems] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [menulistIndex, setMenuListIndex] = useState<number[]>([]);

  const addToCart = (item: MenuItem, index: number) => {
    setMenuListIndex([...menulistIndex, index]);

    console.log(add);
    const newButtonStates = [...add];
    newButtonStates[index] = !newButtonStates[index];
    setAdd(newButtonStates);
    //setAdd(true);
    console.log(add);

    console.log(item);

    console.log(selectedItems);

    const isObjectInArray = selectedItems.some((obj) => {
      return obj === item;
    });

    if (!isObjectInArray) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const removeFromCart = (item: MenuItem, index: number) => {
    const isObjectInArray = menulist[displayedData].menu.some((obj) => {
      return obj === item;
    });

    if (isObjectInArray) {
      const newButtonStates = [...add];
      newButtonStates[index] = !newButtonStates[index];
      setAdd(newButtonStates);
      //setAdd(false);
      console.log(add);

      const itemRemoved = selectedItems.filter((obj) => {
        return obj !== item;
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

    //const numberOfItems = selectedItems.length;

    setTotalPrice(total);
    //return { total };
  };

  const totalNumberOfItems = () => {
    let numberOfItems = 0;
    for (let i = 0; i < selectedItems.length; i++) {
      numberOfItems = numberOfItems + selectedItems[i].item;
    }
    setTotalItems(numberOfItems);
    //return { numberOfItems };
  };

  const increaseItems = (index: number) => {
    selectedItems[index].item = selectedItems[index].item + 1;

    selectedItems[index].price =
      selectedItems[index].price +
      menulist[displayedData].menu[menulistIndex[index]].price;

    totalNumberOfItems();
    totalCostOfItems();
    console.log(selectedItems);
  };

  const decreaseItems = (index: number) => {
    selectedItems[index].item = selectedItems[index].item - 1;

    console.log(menulist[displayedData].menu[index].price);

    selectedItems[index].price =
      selectedItems[index].price -
      menulist[displayedData].menu[menulistIndex[index]].price;

    console.log(selectedItems[index].price);

    totalNumberOfItems();
    totalCostOfItems();
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
        totalNumberOfItems,
        increaseItems,
        decreaseItems,
        totalPrice,
        setTotalPrice,
        totalItems,
        setTotalItems,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
