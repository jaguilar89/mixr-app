import logo from '../logo.svg';
import '../App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3000/drinks');
      const jsonData = await res.json();
      setDrinks(jsonData)
    })();
  }, [])

  if (drinks.length !== 0) {
    for (let [key, value] of Object.entries(drinks[0])) {
      if (key.startsWith('strIngredient') && value !== null) {
        console.log(key)
      }
    }
  }
  return (
    <div className="App">
      
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