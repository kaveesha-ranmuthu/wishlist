import styled from "styled-components";

export const BoxWrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  display: ${({ showModal }) => (showModal ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

export const BoxContainer = styled.div`
  background-color: #fff4e9;
  border: 2px solid #010002;
  box-shadow: 0 0 10px #aeaeae;
  font-family: "Playfair Display", serif;
  padding: 30px 40px;
  text-align: center;
  position: relative;
  line-height: 25px;
  max-width: 700px;
`;

export const Prompt = styled.p`
  font-size: 18px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const OptionsBox = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
`;

export const Option = styled.p`
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.2s ease-in-out;
  }
`;

export const CloseIcon = styled.p`
  font-size: 17px;
  height: 10px;
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 7px;
  margin-top: 8px;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: 0.2s ease-in-out;
  }
`;
