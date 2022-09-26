import React from "react";
import { IoClose } from "react-icons/io5";
import {
  FilterContainer,
  FilterWrapper,
  TitleContainer,
  Title,
  CloseIcon,
  HorizontalRule,
  CategoriesContainer,
  Category,
  HeaderContainer,
  Icon,
  CategoryTitle,
  ItemsContainer,
  InputContainer,
  InputBox,
  Input,
  Label,
  ApplyFilters,
  ButtonContainer,
} from "./FilterElements";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useGlobalContext } from "../../context";

const Filter = () => {
  const {
    options,
    setToDisplay,
    itemsList,
    setOpenFilterBox,
    openFilterBox,
    setIfFilters,
    setResetFilterBox,
  } = useGlobalContext();

  const closeFilterBox = () => {
    setOpenFilterBox(false);
  };

  let localStorageStores = new Set(
    Object.values(localStorage).map((item) => {
      let itemParsed = JSON.parse(item);
      let storeName = itemParsed.storeName;
      return storeName;
    })
  );

  let itemsListStores = new Set(
    itemsList.map((item) => {
      let itemParsed = JSON.parse(item);
      let storeName = itemParsed.storeName;
      return storeName;
    })
  );

  let storeList = [...localStorageStores, ...itemsListStores];

  const handleSubmit = (e) => {
    setResetFilterBox(e);
    setOpenFilterBox(false);
    let checkedCategory = [];
    let checkedStore = [];

    for (let i = 0; i < options.length; i++) {
      let option = options[i].toLowerCase();
      if (e.target[option].checked) {
        checkedCategory.push(e.target[option].name);
      }
    }

    for (let i = 0; i < storeList.length; i++) {
      let store = storeList[i].toLowerCase();
      if (e.target[store].checked) {
        checkedStore.push(e.target[store].name);
      }
    }

    if (checkedCategory.length === 0 && checkedStore.length === 0) {
      setIfFilters(false);
    } else {
      setIfFilters(true);
    }

    if (checkedCategory.length === 0) {
      checkedCategory = options.map((item) => item.toLowerCase());
    }

    if (checkedStore.length === 0) {
      checkedStore = storeList.map((item) => item.toLowerCase());
    }

    let filteredLocalStorage = Object.values(localStorage).filter((item) => {
      let itemParsed = JSON.parse(item);
      let category = itemParsed.category;
      let store = itemParsed.storeName;
      return checkedCategory.includes(category) && checkedStore.includes(store);
    });

    let filteredItemsList = itemsList.filter((item) => {
      let itemParsed = JSON.parse(item);
      let category = itemParsed.category;
      let store = itemParsed.storeName;
      return checkedCategory.includes(category) && checkedStore.includes(store);
    });

    let filteredCategory = filteredLocalStorage.concat(filteredItemsList);

    setToDisplay(filteredCategory);

    e.preventDefault();
  };

  return (
    <>
      <FilterWrapper showBox={openFilterBox}>
        <FilterContainer>
          <TitleContainer>
            <Title>Filter</Title>
            <CloseIcon onClick={closeFilterBox}>
              <IoClose />
            </CloseIcon>
          </TitleContainer>
          <HorizontalRule />
          <CategoriesContainer onSubmit={handleSubmit}>
            <Category>
              <HeaderContainer>
                <Icon>
                  <MdKeyboardArrowRight />
                </Icon>
                <CategoryTitle>Category</CategoryTitle>
              </HeaderContainer>
              <ItemsContainer>
                {options.map((item, index) => {
                  return (
                    <InputContainer key={index}>
                      <InputBox>
                        <Input
                          type="checkbox"
                          name={item.toLowerCase()}
                          id={item.toLowerCase()}
                        />
                      </InputBox>
                      <Label htmlFor={item.toLowerCase()}>{item}</Label>
                    </InputContainer>
                  );
                })}
              </ItemsContainer>
            </Category>
            <Category>
              <HeaderContainer>
                <Icon>
                  <MdKeyboardArrowRight />
                </Icon>
                <CategoryTitle>Store</CategoryTitle>
              </HeaderContainer>
              <ItemsContainer>
                {storeList.map((item, index) => {
                  return (
                    <InputContainer key={index}>
                      <InputBox>
                        <Input
                          type="checkbox"
                          name={item.toLowerCase()}
                          id={item.toLowerCase()}
                        />
                      </InputBox>
                      <Label htmlFor={item.toLowerCase()}>{item}</Label>
                    </InputContainer>
                  );
                })}
              </ItemsContainer>
            </Category>
            <ButtonContainer>
              <ApplyFilters type="submit">apply filters</ApplyFilters>
            </ButtonContainer>
          </CategoriesContainer>
        </FilterContainer>
      </FilterWrapper>
    </>
  );
};

export default Filter;
