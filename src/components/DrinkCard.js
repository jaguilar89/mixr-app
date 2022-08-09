import React from "react";
import { Link, Route } from "react-router-dom";
import { Button } from "@mui/material";

export default function DrinkCard({ drinkInfo }) {
    const { strDrink, strDrinkThumb } = drinkInfo
    return (
        <div className="drink-card">
            <div className="drink-thumb">
                <img src={strDrinkThumb} alt="drink thumbnail" />
            </div>
            <p className="drink-card-name"><strong>{strDrink}</strong></p>
            
            <Link to={{
                pathname: `/drinkinfo/${strDrink}`,
                state: drinkInfo
            }}>
                <Button variant='contained'>View More</Button>
            </Link>
        </div>
    )
}