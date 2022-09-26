import styled, { keyframes } from "styled-components";

const transition = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const WishlistEmptyWrapper = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${transition} 2s;
`;

export const WishlistEmptyContainer = styled.div`
  text-align: center;
`;

export const Text = styled.p`
  font-family: "DM Serif Display", serif;
  font-size: 30px;
  color: #010002;
  margin-bottom: 10px;
`;

export const AddItemButton = styled.button`
  background-color: transparent;
  border: 1px solid #010002;
  border-radius: 100px;
  color: #010002;
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-size: 15px;
  padding: 10px 30px;

  &:hover {
    cursor: pointer;
    background-color: #010002;
    color: #fff4e9;
    transition: 0.3s ease-in-out;
  }
`;
