import React from "react";
import Home from "./containers/Home";
import "./App.css";
import Header from "./components/Header/index";
import Hero from "./components/Hero/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Hero />
        <Route path='/' component={Home} />
        <Home />
      </div>
    </Router>
  );
}

export default App;
