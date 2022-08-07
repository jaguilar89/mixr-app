import '../App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import AddDrink from './AddDrink';
import DrinkInfo from './DrinkInfo';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/addadrink">
        <AddDrink />
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


