import '../App.css';
import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import DrinkInfo from './DrinkInfo';

function App() {
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/drinks')
    .then(res => res.json())
    .then(data => setDrinks(data))
  }, [])


  return (
    <div className="App">
      <Header />
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/drinkinfo">
        <DrinkInfo />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </div>
  );
}

export default App;

{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}