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

export const LoginContainer = styled.div`
  height: 100vh;
  animation: ${transitionIn} 3s;
`;

export const LoginWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  border-right: 1px solid #393da9;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
`;

export const HomeImage = styled.img`
  width: 650px;
`;
