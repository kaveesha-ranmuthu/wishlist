import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const transitionIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const transitionStarsOne = keyframes`
  from {
    opacity: 0;
    margin-left: 0px;
  }
  to {
    opacity: 1;
    margin-left: 15px;
  }
`;

const transitionStarsTwo = keyframes`
  from {
    opacity: 0;
    margin-right: 0px;
  }
  to {
    opacity: 1;
    margin-right: 15px;
  }
`;

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const HomeContainer = styled.div`
  text-align: center;
  animation: ${transitionIn} 3s;
`;

export const ImageContainer = styled.div`
  text-align: center;
`;

export const HomeImage = styled.img`
  width: 480px;
  margin-bottom: 25px;
`;

export const WishlistButton = styled(Link)`
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-size: 20px;
  text-align: center;
  text-decoration: none;
  background-color: #393da9;
  color: #fff4e9;
  padding: 10px 54px 12px 54px;
  border: 2px solid #393da9;

  &:hover {
    background-color: #fff4e9;
    color: #393da9;
    transition: 0.3s ease-in-out;
  }
`;

export const StarSetOne = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 25px;
  margin-left: 15px;
  margin-top: 15px;
  animation: ${transitionStarsOne} 1s;
`;

export const StarSetTwo = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 25px;
  margin-right: 15px;
  margin-bottom: 15px;
  animation: ${transitionStarsTwo} 1s;
`;
