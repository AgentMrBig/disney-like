import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/detail" component={Detail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
