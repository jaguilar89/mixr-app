import React from "react";
import { useLocation } from "react-router-dom";

export default function DrinkInfo() {
    const location = useLocation();
    const drinkInfo = location.state;

    return <h1>Drink Info for {drinkInfo.strDrink}</h1>
}