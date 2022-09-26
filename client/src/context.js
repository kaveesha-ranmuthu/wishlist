import React, { useContext, useState, useEffect } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [itemKeys, setItemKeys] = useState([]);
  const [itemsList, setItemsList] = useState([]);
  const [itemToDelete, setItemToDelete] = useState("");
  const [openAddItems, setOpenAddItems] = useState(false);
  const [openFilterBox, setOpenFilterBox] = useState(false);
  const [toDisplay, setToDisplay] = useState([]);
  const [ifFilters, setIfFilters] = useState(false);
  const [resetFilterBox, setResetFilterBox] = useState();
  const [showLogin, setShowLogin] = useState(true);

  const options = [
    "Tops",
    "Pants",
    "Dresses",
    "Skirts",
    "Shoes",
    "Jewelry",
    "Accessories",
    "Athletic",
    "Swimwear",
    "Lingerie",
    "Beauty",
    "Furniture",
    "Tech",
    "Homeware",
    "Pets",
    "Other",
  ];

  useEffect(() => {
    setToDisplay(itemsList.concat(Object.values(localStorage)));
    if (ifFilters) {
      setIfFilters(false);
      resetFilterBox.target.reset();
    }
  }, [itemsList]);

  const deleteItems = () => {
    let key =
      itemToDelete.itemName +
      "-" +
      itemToDelete.storeName +
      "-" +
      Math.round(itemToDelete.price).toString();

    let itemJson = JSON.stringify(itemToDelete);
    setItemsList(itemsList.filter((i) => i !== itemJson));
    setItemKeys(itemKeys.filter((i) => i !== key));

    localStorage.removeItem(key);
  };

  window.onbeforeunload = () => {
    for (let i = 0; i < itemsList.length; i++) {
      console.log("item");
      let item = itemsList[i];
      let itemParsed = JSON.parse(item);
      let key =
        itemParsed.itemName +
        "-" +
        itemParsed.storeName +
        "-" +
        Math.round(itemParsed.price).toString();
      localStorage.setItem(key, item);
    }
  };

  return (
    <AppContext.Provider
      value={{
        itemKeys,
        setItemKeys,
        itemsList,
        setItemsList,
        setItemToDelete,
        itemToDelete,
        deleteItems,
        openAddItems,
        setOpenAddItems,
        options,
        toDisplay,
        setToDisplay,
        openFilterBox,
        setOpenFilterBox,
        ifFilters,
        setIfFilters,
        resetFilterBox,
        setResetFilterBox,
        showLogin,
        setShowLogin,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
