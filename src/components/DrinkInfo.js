import React from "react";
import { useLocation } from "react-router-dom";

export default function DrinkInfo() {
    const location = useLocation();
    const drinkInfo = location.state;
    const ingredients = [];
    const measurements = [];

    for (let [key, value] of Object.entries(drinkInfo)) {
        if (key.startsWith('strIngredient') && value !== null) {
            ingredients.push(value)
        }
        if (key.startsWith('strMeasure') && value !== null) {
            measurements.push(value)
        }
    };
    
    //How is this working?! this is properly creating <li> elements, but how?? retuns nested array with undefined elements
    const mixingInstructions = measurements.map((measurement, index1) => 
                                ingredients.map((ingredient, index2) => {
                                    if (index1 === index2) {
                                        return <li key={ingredient}>{measurement} of {ingredient}</li>
                                    }
                                })
                            )

    return (
        <div>
            <h1>{drinkInfo.strDrink}</h1>
            <img src={drinkInfo.strDrinkThumb} alt="drink image" />
            <ul>
                {mixingInstructions} 
            </ul>
        </div>
    )
}