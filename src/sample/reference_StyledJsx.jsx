// App.js

import "./styles.css";
import { InlineStyle } from "./components/InlineStyle";
import { CssModules } from "./components/CssModules";
import { StyledJsx } from "./components/StyledJsx";



export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
    </div>
  );
}


// StyledJsx.jsx

export const StyledJsx = () => {
  return (
    <div className="container">
      <p className="title">- Styled JSX -</p>
      <button className="button">FIGHT!</button>
      <style jsx="true">{`
        .container {
          border: solid 2px blue;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0px;
          color: #3d84a8;
        }
        
        .button {
          background-color: #abedd8;
          border: none;
          padding: 8px;
          border-radius: 8px;
        }
        `}

      </style>
    </div>
  );
};
