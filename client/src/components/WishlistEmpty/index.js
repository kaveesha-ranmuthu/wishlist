import React from "react";
import {
  WishlistEmptyContainer,
  WishlistEmptyWrapper,
  Text,
  AddItemButton,
} from "./WishlistEmptyElements";
import { useGlobalContext } from "../../context";

const WishlistEmpty = () => {
  const { setOpenAddItems } = useGlobalContext();

  const toggleAddItems = () => {
    setOpenAddItems(true);
  };

  return (
    <>
      <WishlistEmptyWrapper>
        <WishlistEmptyContainer>
          <Text>your wishlist is empty.</Text>
          <AddItemButton onClick={toggleAddItems}>add item</AddItemButton>
        </WishlistEmptyContainer>
      </WishlistEmptyWrapper>
    </>
  );
};

export default WishlistEmpty;
