import React, { useEffect, useState } from "react";
import DrinksContainer from './DrinksContainer';
import DrinkCard from "./DrinkCard";
import Search from "./Search";
import Filter from "./Filter";

export default function Home() {
    const [drinks, setDrinks] = useState([]);
    const [filterCategory, setFilterCategory] = useState("Ordinary Drink");
    const [drinkType, setDrinkType] = useState(null); // Filter alcoholic vs non-alcoholic
    const [search, setSearch] = useState('');

    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:3000/drinks')
            const drinkData = await res.json();
            setDrinks(drinkData)
        })()
    }, [])

    function handleSearch(e) {
        setSearch(e.target.value)
    };

    function handleCategoryChange(e) {
        setFilterCategory(e.target.value)
    };

    function handleAlcoholSelect(e) {   
        setDrinkType(e.target.value)
    };

    const drinksDisplay = drinks.filter((drink) => drink.strCategory.includes(filterCategory))
                                .filter((drink) => drink.strDrink.toLowerCase().includes(search.toLowerCase()))
                                .filter((drink) => Object.values(drink).includes(drinkType))
                                .map((drink) => <DrinkCard key={drink.idDrink} drinkInfo={drink} />)

    return (
        <>
            <Search 
                search={search}
                onSearch={handleSearch}/>
            <br />
            <Filter 
                onCategoryChange={handleCategoryChange}
                onAlcoholSelect={handleAlcoholSelect}
            />
            <DrinksContainer drinks={drinksDisplay} />
        </>
    )
};