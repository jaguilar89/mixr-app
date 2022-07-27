import '../App.css';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import DrinksContainer from './DrinksContainer';

function App() {
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/drinks')
    .then(res => res.json())
    .then(data => setDrinks(data))
  }, [])

  console.log(drinks)
  return (
    <div className="App">
      <Header />
      <DrinksContainer drinks={drinks}/>
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