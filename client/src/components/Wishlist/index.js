import React, { useState } from "react";
import {
  WishlistContainer,
  WishlistWrapper,
  TopBar,
  AddItemButton,
  FilterContainer,
  RemoveFiltersButton,
  FilterIcon,
  Line,
  GridContainer,
  GridElement,
  ImageLink,
  Image,
  Name,
  NameP,
  Price,
  Store,
  NameIconCont,
  Icons,
  BinIcon,
  EditIcon,
  ItemInfo,
} from "./WishlistElements";
import { BiSliderAlt } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { HiOutlinePencil } from "react-icons/hi";
import { useGlobalContext } from "../../context";
import noImage from "../../images/no-image.png";
import ModalBox from "../ModalBox";

const Wishlist = () => {
  const {
    toDisplay,
    setItemToDelete,
    setOpenAddItems,
    setOpenFilterBox,
    ifFilters,
    setToDisplay,
    itemsList,
    setIfFilters,
    resetFilterBox,
  } = useGlobalContext();
  const [showModal, setShowModal] = useState(false);

  const removeFilters = () => {
    setToDisplay(itemsList.concat(Object.values(localStorage)));
    setIfFilters(false);
    resetFilterBox.target.reset();
  };

  const toggleOpenAddItems = () => {
    setOpenAddItems(true);
  };

  const toggleOpenFilter = () => {
    setOpenFilterBox(true);
  };

  const deleteItem = (item) => {
    setShowModal(true);
    setItemToDelete(item);
  };

  return (
    <>
      <ModalBox showModal={showModal} setShowModal={setShowModal} />
      <WishlistWrapper>
        <WishlistContainer>
          <TopBar>
            <AddItemButton onClick={toggleOpenAddItems}>add item</AddItemButton>
            <FilterContainer>
              <RemoveFiltersButton
                onClick={removeFilters}
                ifFilters={ifFilters}
              >
                remove filters
              </RemoveFiltersButton>
              <FilterIcon onClick={toggleOpenFilter}>
                <BiSliderAlt />
              </FilterIcon>
            </FilterContainer>
          </TopBar>
          <Line />
          <GridContainer container spacing={5} m={0} ml={-4} mt={-4}>
            {toDisplay.map((item, index) => {
              let itemParsed = JSON.parse(item);
              return (
                <GridElement item key={index}>
                  {itemParsed.link ? (
                    <ImageLink href={itemParsed.link} target="_blank">
                      {itemParsed.imageLink ? (
                        <Image src={itemParsed.imageLink} border={false} />
                      ) : (
                        <Image src={noImage} border={true} />
                      )}
                    </ImageLink>
                  ) : itemParsed.imageLink ? (
                    <Image src={itemParsed.imageLink} border={false} />
                  ) : (
                    <Image src={noImage} border={true} />
                  )}
                  <ItemInfo>
                    <NameIconCont>
                      {itemParsed.link ? (
                        <Name href={itemParsed.link} target="_blank">
                          {itemParsed.itemName}
                        </Name>
                      ) : (
                        <NameP>{itemParsed.itemName}</NameP>
                      )}
                      <Icons>
                        <EditIcon>
                          <HiOutlinePencil />
                        </EditIcon>
                        <BinIcon
                          onClick={() => {
                            deleteItem(itemParsed);
                          }}
                        >
                          <RiDeleteBinLine />
                        </BinIcon>
                      </Icons>
                    </NameIconCont>
                    <Store>{itemParsed.storeName}</Store>
                    <Price>${itemParsed.price}</Price>
                  </ItemInfo>
                </GridElement>
              );
            })}
          </GridContainer>
        </WishlistContainer>
      </WishlistWrapper>
    </>
  );
};

export default Wishlist;
