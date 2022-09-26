import React from "react";
import AddItem from "../components/AddItem";
import Filter from "../components/Filter";
import Navbar from "../components/Navbar";
import Wishlist from "../components/Wishlist";
import WishlistEmpty from "../components/WishlistEmpty";
import { useGlobalContext } from "../context";

const WishlistPage = () => {
  const { itemsList } = useGlobalContext();

  return (
    <>
      <Navbar />
      {localStorage.length === 0 && itemsList.length === 0 ? (
        <WishlistEmpty />
      ) : (
        <Wishlist />
      )}
      <AddItem />
      <Filter />
    </>
  );
};

export default WishlistPage;
