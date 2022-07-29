import '../App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import DrinkInfo from './DrinkInfo';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/drinkinfo/:id">
        <DrinkInfo />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </div>
  );
}


