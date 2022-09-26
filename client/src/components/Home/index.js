import React from "react";
import {
  HomeImage,
  HomeWrapper,
  HomeContainer,
  ImageContainer,
  WishlistButton,
  StarSetOne,
  StarSetTwo,
} from "./HomeElements";
import homeImage from "../../images/home-header.png";
import starsOne from "../../images/stars-one.png";
import starsTwo from "../../images/stars-two.png";

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <HomeContainer>
          <ImageContainer>
            <HomeImage src={homeImage} />
          </ImageContainer>
          <WishlistButton to="/login">log in — sign up</WishlistButton>
        </HomeContainer>
        <StarSetOne src={starsOne} />
        <StarSetTwo src={starsTwo} />
      </HomeWrapper>
    </>
  );
};

export default Home;
