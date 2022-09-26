import React, { useState } from "react";
import {
  AddItemWrapper,
  Input,
  AddButton,
  AddItemContainer,
  TitleContainer,
  Title,
  CloseIcon,
  HorizontalRule,
  InputBoxContainer,
  InputContainer,
  Name,
  Error,
  ButtonContainer,
  Select,
  Option,
} from "./AddItemElements";
import { IoClose } from "react-icons/io5";
import { useGlobalContext } from "../../context";

const AddItem = () => {
  const {
    itemKeys,
    setItemKeys,
    itemsList,
    setItemsList,
    setOpenAddItems,
    openAddItems,
    options,
  } = useGlobalContext();

  const [itemError, setItemError] = useState(false);
  const [itemExistsError, setItemExistsError] = useState(false);
  const [storeError, setStoreError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);

  const handleFormSubmit = (e) => {
    let itemName = e.target.item.value;
    let storeName = e.target.store.value;
    let price = e.target.price.value;
    let link = e.target.link.value;
    let category = e.target.category.value;
    let imageLink = e.target.imageAdd.value;

    if (
      itemName &&
      storeName &&
      price &&
      !isNaN(price) &&
      category !== "default"
    ) {
      setOpenAddItems(false);
      let key =
        itemName.trim() +
        "-" +
        storeName.trim() +
        "-" +
        Math.round(price.trim()).toString();

      if (localStorage.getItem(key) || itemKeys.includes(key)) {
        setItemExistsError(true);
      } else {
        setItemExistsError(false);
        let item = {
          itemName: itemName.trim(),
          storeName: storeName.trim(),
          price: price.trim(),
          link: link.trim(),
          imageLink: imageLink.trim(),
          category: category,
        };
        setItemsList([...itemsList, JSON.stringify(item)]);
        setItemKeys([...itemKeys, key]);
        e.target.reset();
      }
    }

    if (!itemName) {
      setItemError(true);
    } else {
      setItemError(false);
    }

    if (!storeName) {
      setStoreError(true);
    } else {
      setStoreError(false);
    }

    if (!price || isNaN(price)) {
      setPriceError(true);
    } else {
      setPriceError(false);
    }

    if (category === "default") {
      setCategoryError(true);
    } else {
      setCategoryError(false);
    }

    e.preventDefault();
  };

  const closeAddItems = () => {
    setOpenAddItems(false);
  };

  return (
    <>
      <AddItemWrapper openAddItems={openAddItems}>
        <AddItemContainer>
          <TitleContainer>
            <Title>Add Item</Title>
            <CloseIcon onClick={closeAddItems}>
              <IoClose />
            </CloseIcon>
          </TitleContainer>
          <HorizontalRule />
          <InputBoxContainer onSubmit={handleFormSubmit} autoComplete="off">
            <InputContainer>
              <Name htmlFor="item">Item name</Name>
              <Input type="text" name="item" id="item" />
              <Error displayError={itemError}>Please enter an item name.</Error>
              <Error displayError={itemExistsError}>
                This item name is already being used.
              </Error>
            </InputContainer>
            <InputContainer>
              <Name htmlFor="store">Store</Name>
              <Input type="text" name="store" id="store" />
              <Error displayError={storeError}>
                Please enter a store name.
              </Error>
            </InputContainer>
            <InputContainer>
              <Name htmlFor="price">Price</Name>
              <Input type="text" name="price" id="price" />
              <Error displayError={priceError}>
                Please enter numbers only.
              </Error>
            </InputContainer>
            <InputContainer>
              <Name htmlFor="imageAdd">Image address</Name>
              <Input type="text" name="imageAdd" id="imageAdd" />
            </InputContainer>
            <InputContainer>
              <Name htmlFor="link">Link</Name>
              <Input type="text" name="link" id="link" />
            </InputContainer>
            <InputContainer>
              <Name htmlFor="category">Category</Name>
              <Select name="category" id="category" defaultValue="default">
                <Option value="default" disabled>
                  Select one...
                </Option>
                {options.map((option, index) => {
                  return (
                    <Option value={option.toLowerCase()} key={index}>
                      {option}
                    </Option>
                  );
                })}
              </Select>
              <Error displayError={categoryError}>
                Please select a category.
              </Error>
            </InputContainer>
            <ButtonContainer>
              <AddButton type="submit">add to wishlist</AddButton>
            </ButtonContainer>
          </InputBoxContainer>
        </AddItemContainer>
      </AddItemWrapper>
    </>
  );
};

export default AddItem;
