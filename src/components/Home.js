import React, { useEffect, useState } from "react";
import '../App.css';
import DrinksContainer from './DrinksContainer';
import DrinkCard from "./DrinkCard";
import Search from "./Search";
import Filter from "./Filter";
import { LinearProgress } from "@mui/material";

export default function Home() {
    const [loading, setIsLoading] = useState(true)
    const [drinks, setDrinks] = useState([]);
    const [filterCategory, setFilterCategory] = useState("All");
    const [drinkType, setDrinkType] = useState(null); // Filter alcoholic vs non-alcoholic
    const [drinkSearch, setDrinkSearch] = useState("");
    const [ingredientSearch, setIngredientSearch] = useState("");

    useEffect(() => {
        try {
            (async () => {
                const res = await fetch('https://mixr-drink-app.herokuapp.com/drinks')
                const drinkData = await res.json();
                setDrinks(drinkData)
                setIsLoading(false)
            })()
        } catch (err) {
            console.log("There was a problem with the fetch request: " + err);
        }
    }, [])

    function handleDrinkSearch(e) {
        setDrinkSearch(e.target.value)
    };

    function handleIngredientSearch(e) {
        setIngredientSearch(e.target.value)
    };

    function handleCategoryChange(e) {
        setFilterCategory(e.target.value)
    };

    function handleAlcoholSelect(e) {
        setDrinkType(e.target.value)
    };

    // Search drink objects for any instance of the search term using regex
    function handleFilterByIngredient(drink) {
        const searchTerm = ingredientSearch
        const regex = new RegExp(searchTerm, 'gi')
        return Object.values(drink)
                     .some((value) => regex.test(value))
    };

    const filteredDrinks = drinks.filter((drink) => {
        const categoryFilter = filterCategory === "All" || drink.strCategory.includes(filterCategory);
        const searchFilter = drink.strDrink.toLowerCase().includes(drinkSearch);
        const ingredientSearch = handleFilterByIngredient(drink);
        const typeFilter = Object.values(drink).includes(drinkType);

        return categoryFilter && searchFilter && ingredientSearch && typeFilter;
    })

    const drinksDisplay = filteredDrinks.map((drink) => <DrinkCard key={drink.strDrink} drinkInfo={drink}/>)

    return (
        <>
            <Search
                search={drinkSearch}
                ingredient={ingredientSearch}
                onIngredSearch={handleIngredientSearch}
                onSearch={handleDrinkSearch} 
            />
            <br />
            <Filter
                onCategoryChange={handleCategoryChange}
                onAlcoholSelect={handleAlcoholSelect}
            />
            <br />

            {loading ? <LinearProgress /> : <DrinksContainer drinks={drinksDisplay} />}
        </>
    )
};