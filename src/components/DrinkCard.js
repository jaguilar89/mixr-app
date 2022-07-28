import React from "react";
import { Link } from "react-router-dom";
import DrinkInfo from "./DrinkInfo";

export default function DrinkCard({ drinkInfo }) {
    return (
        <div className="drink-card">
            <div className="drink-thumb">
                <img src={drinkInfo.strDrinkThumb} />
            </div>
            <p className="drink-card-name">{drinkInfo.strDrink}</p>
            <Link to="/drinkinfo">View More</Link>
        </div>
    )
}