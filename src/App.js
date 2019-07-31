import React from "react";
import "./App.css";
import styled from 'styled-components';
import NasaPhotos from './components/NasaPhotos';

const WholeApp = styled.div`
  margin: 0 auto;
  width: 80%;
`;

const HeaderContainer = styled.div`
  display: flex;
  background-color: crimson;
  color: white;
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  width: 35%
`;

const Buttons = styled.button`
  border-radius: 4px;
  background-color: gray;
  border-color: gray;
  color: white;
  font-size: 24px;
  cursor: pointer;

  :hover {
    color: gray;
    background-color: white;
    border-color: white;
    cursor: pointer;
  }
`;

const Title = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

function App() {
  return (
    <WholeApp>
      <HeaderContainer>
        <NavContainer>
          <Buttons href="https://nasa.gov">Home</Buttons>
          <Buttons href="https://github.com/kylebarnett">About Me </Buttons>
        </NavContainer>
        <Title>
          <h1>Nasa Photo of the Day!</h1>
        </Title>
      </HeaderContainer>
      <NasaPhotos />
    </WholeApp>
  );
}

export default App;
