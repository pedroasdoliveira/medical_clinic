import styled from "styled-components";
import BackgroundPage from "../../assets/jpg/background_page.jpg";

export const Container = styled.main`
  max-width: 100%;
  width: 100%;
  height: auto;
  background-image: url(${BackgroundPage});
  background-attachment: fixed;
  background-size: 100%;
  background-repeat: no-repeat;
  cursor: default;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8rem 2rem;
`;

export const Heading = styled.h1`
  font-size: 2rem;
  color: #004052;
  font-weight: 500;
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 1rem auto;
  gap: 1rem;
`;

export const FormBox = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const TextInput = styled.input`
  width: 100%;
  font-size: 1rem;
  background-color: transparent;
  color: #f4f5f9;
  border: none;
  border-bottom: 1px solid #004052;
  transition: all ease 0.1s;

  &:hover {
    border-bottom: 2px solid #004052;
  }
`;

export const LoginBtn = styled.button`
  background-color: transparent;
  color: #004052;
  padding: 0.5rem 2rem;
  font-size: 1.2rem;
  border: 1px solid #004052;
  border-radius: 20px;
  transition: all ease-in-out 0.5s;
  cursor: pointer;

  &:hover {
    background-color: #004052;
    color: #f4f5f9;
    border: 1px solid transparent;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  text-align: left;
  color: #004052;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
