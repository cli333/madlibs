import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Provider from "./context/Provider";
import Main from "./components/main/Main";
import Form from "./components/form/Form";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/new" component={Form} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
