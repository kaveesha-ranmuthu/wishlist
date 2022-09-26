import styled, { keyframes } from "styled-components";
import { Grid } from "@mui/material";

const transition = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const WishlistWrapper = styled.div`
  animation: ${transition} 2s;
  padding-bottom: 50px;
`;

export const WishlistContainer = styled.div`
  padding: 0 150px;
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AddItemButton = styled.button`
  background-color: transparent;
  border: 1px solid #010002;
  border-radius: 100px;
  color: #010002;
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-size: 14px;
  padding: 10px 30px;
  outline: none;

  &:hover {
    cursor: pointer;
    background-color: #010002;
    color: #fff4e9;
    transition: 0.3s ease-in-out;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RemoveFiltersButton = styled.button`
  background-color: transparent;
  border: 1px solid #010002;
  border-radius: 100px;
  color: #010002;
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-size: 14px;
  padding: 10px 30px;
  outline: none;
  visibility: ${({ ifFilters }) => (ifFilters ? "visible" : "hidden")};
  opacity: ${({ ifFilters }) => (ifFilters ? 1 : 0)};
  transition: 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #010002;
    color: #fff4e9;
    transition: 0.3s ease-in-out;
  }
`;

export const FilterIcon = styled.p`
  font-size: 20px;
  margin-left: 10px;
  height: 22px;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: 0.2s ease-in-out;
  }
`;

export const Line = styled.hr`
  border: 1px solid rgba(0, 0, 0, 0.06);
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const GridContainer = styled(Grid)``;

export const GridElement = styled(Grid)``;

export const Image = styled.img`
  border: ${({ border }) => (border ? "3px solid #010002" : "none")};
  width: 250px;
  height: 319px;
  object-fit: cover;
`;

export const ItemInfo = styled.div`
  width: 250px;
`;

export const NameIconCont = styled.div`
  display: flex;
  height: fit-content;
  margin-top: 5px;
  justify-content: space-between;
`;

export const Icons = styled.div`
  display: flex;
`;

export const BinIcon = styled.p`
  font-size: 18px;
  height: 18px;
  margin: 0;

  &:hover {
    transform: scale(1.1);
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const EditIcon = styled.p`
  font-size: 18px;
  height: 18px;
  margin: 0;
  margin-right: 5px;

  &:hover {
    transform: scale(1.1);
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const Name = styled.a`
  margin: 0;
  font-family: "Playfair Display", serif;
  line-height: 23px;
  color: #010002;
  text-decoration: none;
  max-width: 200px;

  &:hover {
    transform: scale(1.02);
    transition: 0.2s ease-in-out;
  }

  &:visited {
    text-decoration: none;
    color: #010002;
  }
`;

export const NameP = styled.p`
  margin: 0;
  font-family: "Playfair Display", serif;
  max-width: 200px;
  line-height: 23px;
`;

export const Store = styled.p`
  font-family: "Playfair Display", serif;
  text-transform: uppercase;
  font-size: 15px;
  margin-top: 5px;
  margin-bottom: 0;
`;

export const Price = styled.p`
  font-family: "DM Serif Display", serif;
  font-style: italic;
  margin-top: 4px;
`;

export const ImageLink = styled.a``;
