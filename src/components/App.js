import '../App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import DrinkInfo from './DrinkInfo';

export default function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/drinkinfo/:id">
        <DrinkInfo />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      </Switch>
    </div>
  );
}


