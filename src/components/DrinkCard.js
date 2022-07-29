import React from "react";
import { Link } from "react-router-dom";

export default function DrinkCard({ drinkInfo }) {
    return (
        <div className="drink-card">
            <div className="drink-thumb">
                <img src={drinkInfo.strDrinkThumb} />
            </div>
            <p className="drink-card-name">{drinkInfo.strDrink}</p>
            <Link to={{
                pathname: `/drinkinfo/${drinkInfo.idDrink}`,
                state: drinkInfo
            }}>
                View More
            </Link>
        </div>
    )
}