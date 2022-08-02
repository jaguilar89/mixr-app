import React, { useEffect, useState } from "react";
import DrinksContainer from './DrinksContainer';
import DrinkCard from "./DrinkCard";
import Filter from "./Filter";

export default function Home() {
    const [drinks, setDrinks] = useState([]);
    const [filterCategory, setFilterCategory] = useState("Ordinary Drink");
    const [drinkType, setDrinkType] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:3000/drinks')
            const drinkData = await res.json();
            setDrinks(drinkData)
        })()
    }, [])

    function handleCategoryChange(e) {
        setFilterCategory(e.target.value)
    };

    function handleAlcoholSelect(e) {   
        setDrinkType(e.target.value)
    };

    const drinksDisplay = drinks.filter((drink) => Object.values(drink).includes(filterCategory))
                                .filter((drink) => Object.values(drink).includes(drinkType))
                                .map((drink) => <DrinkCard key={drink.idDrink} drinkInfo={drink} />)

    return (
        <>
            <Filter 
                onCategoryChange={handleCategoryChange}
                onAlcoholSelect={handleAlcoholSelect}
            />
            <DrinksContainer drinks={drinksDisplay} />
        </>
    )
};