import React from "react";
import navHeader from "../../images/navbar-header.png";
import {
  NavbarContainer,
  NavbarWrapper,
  Image,
  NavLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <NavbarWrapper>
        <NavbarContainer>
          <NavLink to="/">
            <Image src={navHeader} />
          </NavLink>
        </NavbarContainer>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
