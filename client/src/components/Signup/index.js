import React, { useState } from "react";
import {
  SignupButton,
  SignupContainer,
  SignupWrapper,
  Header,
  Form,
  Name,
  Input,
  Text,
  LoginLink,
  ShorterInput,
  InputDiv,
  InputLabel,
  Error,
} from "./SignupElements";
import { useGlobalContext } from "../../context";
import Axios from "axios";

const Signup = () => {
  const { setShowLogin } = useGlobalContext();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let firstName = e.target.firstName.value.trim();
    let lastName = e.target.lastName.value.trim();
    let email = e.target.email.value.trim();
    let confirmEmail = e.target.confirmEmail.value.trim();
    let password = e.target.password.value;
    let confirmPassword = e.target.confirmPassword.value;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !confirmEmail ||
      !password ||
      !confirmPassword
    ) {
      setErrorMessage("Please fill in all the fields.");
    } else {
      if (email !== confirmEmail || password !== confirmPassword) {
        setErrorMessage("Email or password does not match.");
      } else {
        Axios.post("http://localhost:3001/checkExisting", {
          email,
        }).then((res) => {
          if (res.data.length === 0) {
            setErrorMessage();
            Axios.post("http://localhost:3001/register", {
              firstName,
              lastName,
              email,
              password,
            });
            e.target.reset();
            setShowLogin(true);
          } else {
            setErrorMessage("Email address is already being used.");
          }
        });
      }
    }
  };

  return (
    <>
      <SignupContainer>
        <SignupWrapper>
          <Header>sign up</Header>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <InputDiv>
              <InputLabel>
                <Name htmlFor="firstName">First name</Name>
                <ShorterInput type="text" name="firstName" id="firstName" />
              </InputLabel>
              <InputLabel>
                <Name htmlFor="lastName">Last name</Name>
                <ShorterInput type="text" name="lastName" id="lastName" />
              </InputLabel>
            </InputDiv>
            <Name htmlFor="email">Email address</Name>
            <Input type="text" name="email" id="email" />
            <Name htmlFor="confirmEmail">Confirm email address</Name>
            <Input type="text" name="confirmEmail" id="confirmEmail" />
            <InputDiv>
              <InputLabel>
                <Name htmlFor="password">Password</Name>
                <ShorterInput type="password" name="password" id="password" />
              </InputLabel>
              <InputLabel>
                <Name htmlFor="confirmPassword">Confirm password</Name>
                <ShorterInput
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                />
              </InputLabel>
            </InputDiv>
            <SignupButton type="submit">sign up</SignupButton>
          </Form>
          <Error>{errorMessage}</Error>
          <Text>
            Already have an account?{" "}
            <LoginLink onClick={() => setShowLogin(true)}>Log in</LoginLink>.
          </Text>
        </SignupWrapper>
      </SignupContainer>
    </>
  );
};

export default Signup;
