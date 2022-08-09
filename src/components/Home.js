import React, { useEffect, useState } from "react";
import '../App.css';
import DrinksContainer from './DrinksContainer';
import DrinkCard from "./DrinkCard";
import Search from "./Search";
import Filter from "./Filter";
import AddDrink from "./AddDrinkButton";

export default function Home() {
    const [drinks, setDrinks] = useState([]);
    const [filterCategory, setFilterCategory] = useState("All");
    const [drinkType, setDrinkType] = useState(null); // Filter alcoholic vs non-alcoholic
    const [search, setSearch] = useState('');
    const [ingredient, setIngredient] = useState('');

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
    
    function handleIngredientSearch(e) {
        setIngredient(e.target.value)
    };

    function handleCategoryChange(e) {
        setFilterCategory(e.target.value)
    };

    function handleAlcoholSelect(e) {   
        setDrinkType(e.target.value)
    };

    function ingredientSearch(drink) {
        const searchTerm = ingredient
        const regex = new RegExp(searchTerm, 'gi')
        return Object.values(drink)
                     .some((value) => regex.test(value))
    };
    
    const drinksDisplay = drinks.filter((drink) => filterCategory === "All" ? true : drink.strCategory.includes(filterCategory)) // TODO: implement pagination, maybe.
                                .filter((drink) => drink.strDrink.toLowerCase().includes(search.toLowerCase()))
                                .filter(ingredientSearch)
                                .filter((drink) => Object.values(drink).includes(drinkType))
                                .map((drink) => <DrinkCard key={drink.idDrink} drinkInfo={drink} />)

    return (
        <>
            <Search 
                search={search}
                ingredient={ingredient}
                onIngredSearch={handleIngredientSearch}
                onSearch={handleSearch}/>
            <br />
            <Filter 
                onCategoryChange={handleCategoryChange}
                onAlcoholSelect={handleAlcoholSelect}
            />
            <br />
            <AddDrink />
            <DrinksContainer drinks={drinksDisplay} />
        </>
    )
};