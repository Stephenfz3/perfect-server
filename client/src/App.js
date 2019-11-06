// Pacakge Imports
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Styling Imports
import "./App.css";
// Component Imports
import Nav from "./components/Nav";
// Pages Imports
import Dashboard from "./pages/Dashboard";
import NoMatch from "./pages/NoMatch";





  render() {
    return (
      <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    );
  }


export default App;

