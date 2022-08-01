import React from "react";
import DrinkCard from "./DrinkCard";

export default function DrinksContainer({ drinks }) {
    const drinksDisplay = drinks.map((drink) => <DrinkCard key={drink.idDrink} drinkInfo={drink} />);

    return <div className="drinks-container">{drinksDisplay}</div>
}