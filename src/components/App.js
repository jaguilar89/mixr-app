import '../App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import DrinkInfo from './DrinkInfo';

export default function App() {

  return (
    <div className="App">
      <Header />
      <Route exact path="/about">
        <About />
      </Route>
      <Route path="/drinkinfo/:name">
        <DrinkInfo />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </div>
  );
}


