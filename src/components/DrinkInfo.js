import React, { useState, useEffect } from "react";
import { Chip, Stack } from "@mui/material";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function DrinkInfo() {
    const { id } = useParams()
    const [drinkDetails, setDrinkDetails] = useState([])
    const ingredients = [];
    const measurements = [];

    useEffect(() => {
        try {
            (async () => {
                const res = await fetch(`https://mixr-drink-app.herokuapp.com/drinks/${id}`)
                if (res.ok) {
                    const drink = await res.json()
                    setDrinkDetails(drink)
                }
            
            })()
        } catch (err){
            console.log(err)
        }
    }, [id]);

     /* Because of how the object properties are set up (individual properties of ingredients and not just all in a single array)
     I had to separate ingredients and measurements into their own arrays in order to work with them. */
    for (let [key, value] of Object.entries(drinkDetails)) {
        if (key.startsWith('strIngredient') && value !== null) {
            ingredients.push(value)
        }
        if (key.startsWith('strMeasure') && value !== null) {
            measurements.push(value)
        }
    };
    
    // List out ingredients and measurements
    const mixingDetails = measurements.map((measurement, index1) => 
        ingredients.map((ingredient, index2) => {
            if (index1 === index2) {
                return <li key={ingredient}>{measurement} of {ingredient}</li>
            }
        })
    )

    return (
        <>
            <h1 className="drinkinfo-name">{drinkDetails.strDrink}</h1>
            <div className="drinkinfo-parent">
                <div className="drinkinfo-img">
                    <img src={drinkDetails.strDrinkThumb} alt="drink info"/>
                </div>
                <div className="drinkinfo-instructions">
                    <Stack direction="row" spacing={1}>
                        <Chip label={drinkDetails.strCategory} color="primary" />
                        <Chip label={drinkDetails.strAlcoholic} color="primary"/>
                        <Chip label={drinkDetails.strGlass} color="primary"/>
                    </Stack>
                    <h2>Ingredients</h2>
                    <ul>
                        {mixingDetails}
                    </ul>
                    <h2>Instructions</h2>
                    <p>{drinkDetails.strInstructions}</p>
                </div>
            </div>
        </>
    )
}