import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./components/Detail";
import Login from "./components/Login";
import TVChart from "./components/TVChart";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/login" component={Login} />
          <Route path="/chart" component={TVChart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
