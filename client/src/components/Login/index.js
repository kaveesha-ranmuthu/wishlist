import React, { useState } from "react";
import {
  LoginButton,
  LoginContainer,
  LoginWrapper,
  Header,
  Form,
  Name,
  Input,
  Text,
  Error,
  SignUpLink,
} from "./LoginElements";
import { useGlobalContext } from "../../context";
import Axios from "axios";

const Login = () => {
  const { setShowLogin } = useGlobalContext();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target.email.value.trim();
    let password = e.target.password.value;

    if (!email || !password) {
      setErrorMessage("Please fill in all the fields.");
    } else {
      Axios.post("http://localhost:3001/login", {
        email,
        password,
      }).then((res) => {
        let data = res.data;
        if (data.message) {
          setErrorMessage(data.message);
        } else {
          setErrorMessage();
          e.target.reset();
        }
      });
    }
  };

  return (
    <>
      <LoginContainer>
        <LoginWrapper>
          <Header>log in</Header>
          <Form onSubmit={handleSubmit}>
            <Name htmlFor="email">Email address</Name>
            <Input type="text" name="email" id="email" />
            <Name htmlFor="password">Password</Name>
            <Input type="password" name="password" id="password" />
            <LoginButton type="submit">log in</LoginButton>
          </Form>
          <Error>{errorMessage}</Error>
          <Text>
            Don't have an account?{" "}
            <SignUpLink onClick={() => setShowLogin(false)}>Sign up</SignUpLink>
            .
          </Text>
        </LoginWrapper>
      </LoginContainer>
    </>
  );
};

export default Login;
