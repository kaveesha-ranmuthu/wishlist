import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 40%;
  margin-left: 100px;
`;

export const LoginWrapper = styled.div`
  color: #393da9;
  font-family: "Playfair Display", serif;
`;

export const Header = styled.p`
  font-family: "DM Serif Display", serif;
  font-size: 30px;
  margin-bottom: 20px;
`;

export const Form = styled.form``;

export const Name = styled.label`
  font-size: 14px;
  display: block;
`;

export const Input = styled.input`
  background-color: transparent;
  border: 1px solid #393da9; /*#DD553B */
  height: 30px;
  width: 300px;
  outline: none;
  padding-left: 6px;
  font-size: 13px;
  color: #393da9;
  margin-top: 7px;
  margin-bottom: 18px;
  display: block;
`;

export const LoginButton = styled.button`
  background-color: #393da9;
  border: 1px solid #393da9;
  color: #fff4e9;
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-size: 14px;
  padding: 10px 30px;
  outline: none;

  &:hover {
    cursor: pointer;
    background-color: transparent;
    color: #393da9;
    transition: 0.3s ease-in-out;
  }
`;

export const Error = styled.p`
  font-size: 14px;
  color: #dd553b;
  margin-top: 10px;
`;

export const Text = styled.p`
  font-size: 14px;
`;

export const SignUpLink = styled.button`
  background-color: transparent;
  border: none;
  color: #393da9;
  padding: 0;
  text-decoration: underline;
  text-underline-offset: 2px;

  &:hover {
    cursor: pointer;
  }
`;
