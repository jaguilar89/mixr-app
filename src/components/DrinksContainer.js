import React from "react";
import { useLocation } from "react-router-dom";
import DrinkCard from "./DrinkCard";
import DrinkInfo from "./DrinkInfo";

export default function DrinksContainer({ drinks }) {
    const drinksDisplay = drinks.map((drink) => <DrinkCard key={drink.idDrink} drinkInfo={drink} />);

    return <div className="drinks-container">{drinksDisplay}</div>
}