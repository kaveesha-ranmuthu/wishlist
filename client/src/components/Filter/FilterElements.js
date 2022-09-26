import styled from "styled-components";

export const FilterWrapper = styled.div`
  background-color: #fff4e9;
  height: 100vh;
  width: 350px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  box-shadow: 0 0 10px #aeaeae;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ showBox }) => (showBox ? 1 : 0)};
  margin-right: ${({ showBox }) => (showBox ? "0px" : "-350px")};
  transition: 0.3s ease-out;
`;

export const FilterContainer = styled.div`
  font-family: "Playfair Display", serif;
  color: #010002;
  width: 100%;
  padding: 0px 35px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: -10px;
`;

export const Title = styled.p`
  font-size: 20px;
`;

export const CloseIcon = styled.p`
  font-size: 17px;
  height: 10px;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: 0.2s ease-in-out;
  }
`;

export const HorizontalRule = styled.hr`
  border: 1px solid rgba(0, 0, 0, 0.06);
  margin-top: 0;
  margin-bottom: 15px;
`;

export const CategoriesContainer = styled.form``;

export const Category = styled.div``;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.p`
  font-size: 17px;
  height: 15px;
`;

export const CategoryTitle = styled.p`
  font-size: 15px;
`;

export const ItemsContainer = styled.div`
  display: block;
  margin-left: 20px;
  max-height: 200px;
  overflow: scroll;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
`;

export const InputBox = styled.div`
  width: 16px;
  height: 16px;
  border: 1px solid #010002;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  cursor: pointer;
  outline: none;

  &:checked {
    appearance: none;
    width: 12px;
    height: 12px;
    background-color: #010002;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  margin-left: 6px;
  text-transform: capitalize;
`;

export const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const ApplyFilters = styled.button`
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
