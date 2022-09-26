import styled from "styled-components";

export const AddItemWrapper = styled.div`
  background-color: #fff4e9;
  height: 100vh;
  width: 350px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  box-shadow: 0 0 10px #aeaeae;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ openAddItems }) => (openAddItems ? 1 : 0)};
  margin-left: ${({ openAddItems }) => (openAddItems ? "0px" : "-350px")};
  transition: 0.3s ease-out;
`;

export const AddItemContainer = styled.div`
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

export const InputBoxContainer = styled.form``;

export const InputContainer = styled.div`
  margin-bottom: 20px;
`;

export const Name = styled.label`
  font-size: 14px;
`;

export const Input = styled.input`
  background-color: transparent;
  border: 1px solid #010002;
  height: 30px;
  width: 95%;
  outline: none;
  padding-left: 6px;
  font-size: 13px;
  margin-top: 7px;
`;

export const Select = styled.select`
  background-color: transparent;
  border: 1px solid #010002;
  height: 35px;
  width: 95%;
  outline: none;
  padding-left: 6px;
  font-size: 13px;
  margin-top: 7px;
`;

export const Option = styled.option``;

export const Error = styled.p`
  margin-top: 5px;
  font-size: 13px;
  color: #b16658;
  display: ${({ displayError }) => (displayError ? "block" : "none")};
`;

export const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const AddButton = styled.button`
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
