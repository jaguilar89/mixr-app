import React from "react";
import { Chip, LinearProgress, Stack } from "@mui/material";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../hooks/useFetch";
import ErrorPage from "./ErrorPage";

export default function DrinkInfo() {
    const { id } = useParams()
    const { data: drinkInfo, loading, error } = useFetch(`https://mixr-drink-app.herokuapp.com/drinks/${id}`)

    // creates an array with a fixed length of 15, ingredients and measurements are separated into their own properties and
    // there are 15 available properties for each
    const mixingDetails = Array.from({ length: 15 }, (_, index) => {
        const ingredient = drinkInfo && drinkInfo[`strIngredient${index + 1}`]
        const measurement = drinkInfo && drinkInfo[`strMeasure${index + 1}`]

        // Check if ingredient exists, then check for corresponding measurement. Othewise return the ingredient alone.
        if (ingredient) {
            const pair = measurement ? `${measurement} of ${ingredient}` : ingredient
            return <li key={ingredient}> {pair} </li>
        }
        return null; // return null if missing ingredient
    })

    if (loading) return <LinearProgress />
    if (error) return <ErrorPage />
    return (
        <>
            <h1 className="drinkinfo-name">{drinkInfo?.strDrink}</h1>
            <div className="drinkinfo-parent">
                <div className="drinkinfo-img">
                    <img src={drinkInfo?.strDrinkThumb} alt="drink info" />
                </div>
                <div className="drinkinfo-ingredients">
                    <Stack direction="row" spacing={1}>
                        <Chip label={drinkInfo?.strCategory} color="primary" />
                        <Chip label={drinkInfo?.strAlcoholic} color="primary" />
                        <Chip label={drinkInfo?.strGlass} color="primary" />
                    </Stack>
                    <h2>Ingredients</h2>
                    <ul>
                        {mixingDetails}
                    </ul>
                    <h2>Instructions</h2>
                    <div className="drinkinfo-instructions">
                        <p>{drinkInfo?.strInstructions}</p>
                    </div>
                </div>
            </div>
        </>
    )
}