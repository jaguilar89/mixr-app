import React, { useEffect, useState } from "react";
import DrinksContainer from './DrinksContainer';
import Filter from "./Filter";
import Header from './Header'

export default function Home() {
    const [drinks, setDrinks] = useState([]);
    const [filterCategory, setFilterCategory] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:3000/drinks')
            const drinkData = await res.json();
            setDrinks(drinkData)
        })()
    }, [])

    return (
        <>
            <Filter />
            <DrinksContainer drinks={drinks} />
        </>
    )
};