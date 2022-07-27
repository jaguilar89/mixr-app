import React from "react";

export default function DrinkCard({ drinkInfo }) {
    return (
        <div className="drink-card">
            <div className="drink-thumb">
                <img src={drinkInfo.strDrinkThumb} />
            </div>
            <p className="drink-card-name">{drinkInfo.strDrink}</p>
            <button className="view-more">View More</button>
        </div>
    )
}