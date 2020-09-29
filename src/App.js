import React from "react";
import Home from "./containers/Home";
import "./App.css";
import Header from "./components/Header/index";
import Hero from "./components/Hero/index";
import Contact from "./containers/AboutUs";
import Post from "./containers/Post";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Hero />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contact-us' component={Contact} />
          <Route path='/post' component={Post} />
          <Home />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
