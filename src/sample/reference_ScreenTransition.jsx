// App.js

import "./styles.css";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/Page1">Page1</Link>
        <br />
        <Link to="/Page2">Page2</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Page1">
          <Page1 />
        </Route>
        <Route path="/Page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


// Home.jsx

export const Home = () => {
  return (
    <div>
      <h1>Home here.</h1>
    </div>
  );
};

// Page1.jsx

export const Page1 = () => {
  return (
    <div>
      <h1>Page1 here.</h1>
    </div>
  );
};

// Page2.jsx

export const Page2 = () => {
  return (
    <div>
      <h1>Page2 here.</h1>
    </div>
  );
};



