// App.js

import "./styles.css";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/page1"
          render={({ match: { url } }) => (
            <Switch>
              {console.log(url)};
              <Route exact path={url}>
                <Page1 />
              </Route>
              <Route path={`${url}/detailA`}>
                <Page1DetailA />
              </Route>
              <Route path={`${url}/detailB`}>
                <Page1DetailB />
              </Route>
            </Switch>
          )}
        ></Route>
        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

// Page1.jsx

import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1 here.</h1>
      <Link to="/page1/detailA">DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
    </div>
  );
};

// Page1DetailedA.jsx

export const Page1DetailA = () => {
  return (
    <div>
      <h1>Page1DetailA here.</h1>
    </div>
  );
};

//// Page1DetailedB.jsx

export const Page1DetailB = () => {
  return (
    <div>
      <h1>Page1DetailB here.</h1>
    </div>
  );
};
