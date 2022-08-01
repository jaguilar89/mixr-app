import React, { useEffect, useState } from "react";
import DrinksContainer from './DrinksContainer';

export default function Home() {
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:3000/drinks')
            const drinkData = await res.json();
            setDrinks(drinkData)
        })()
    }, [])

    return (
        <>
            <DrinksContainer drinks={drinks} />
        </>
    )
};