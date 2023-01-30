// App.js

import "./styles.css";
import { InlineStyle } from "./components/InlineStyle";
import { CssModules } from "./components/CssModules";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponent } from "./components/StyledComponent";


export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponent />
    </div>
  );
}


// StyledComponent.jsx

import styled from "styled-components";

export const StyledComponent = () => {
  return (
    <SContainer>
      <STitle>- styled components -</STitle>
      <SButton>FIGHT!</SButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  border: solid 2px blue;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const STitle = styled.p`
  margin: 0px;
  color: #3d84a8;
`;

const SButton = styled.button`
background-color: #abedd8;
border: none;
padding: 8px;
border-radius: 8px;
&:hover {
  background-color: #46cdcf;
  color: #fff;
  cursor: pointer;
  `;
