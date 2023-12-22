import React, { useState, useEffect } from "react";
import { Chip, Stack } from "@mui/material";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function DrinkInfo() {
    const { id } = useParams()
    const [drinkDetails, setDrinkDetails] = useState([])

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

    // creates an array with a fixed length of 15, ingredients and measurements are separated into their own properties and
    // there are 15 available properties for each
    const mixingDetails = Array.from({ length: 15}, (_, index) => {
        const ingredient = drinkDetails[`strIngredient${index + 1}`]
        const measurement = drinkDetails[`strMeasure${index + 1}`]

        // Check if ingredient exists
        if (ingredient) {
            const pair = measurement ? `${measurement} of ${ingredient}` : ingredient
            return <li key={ingredient}> {pair} </li>
        }
        return null; // return null if missing ingredient
    })

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