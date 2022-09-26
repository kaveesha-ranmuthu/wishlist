import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const transition = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const NavbarWrapper = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${transition} 2s;
`;

export const NavbarContainer = styled.div``;

export const Image = styled.img`
  width: 120px;
`;

export const NavLink = styled(Link)``;
