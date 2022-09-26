import React from "react";
import {
  LoginContainer,
  LoginWrapper,
  ImageContainer,
  HomeImage,
} from "./LoginContentsElements";
import homeImage from "../../images/home-header.png";
import Login from "../Login";
import Signup from "../Signup";
import { useGlobalContext } from "../../context";

const LoginContents = () => {
  const { showLogin } = useGlobalContext();
  return (
    <>
      <LoginContainer>
        <LoginWrapper>
          <ImageContainer>
            <HomeImage src={homeImage} />
          </ImageContainer>
          {showLogin ? <Login /> : <Signup />}
        </LoginWrapper>
      </LoginContainer>
    </>
  );
};

export default LoginContents;
