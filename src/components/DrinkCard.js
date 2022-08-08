import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function DrinkCard({ drinkInfo }) {
    return (
        <div className="drink-card">
            <div className="drink-thumb">
                <img src={drinkInfo.strDrinkThumb} alt="drink thumbnail" />
            </div>
            <p className="drink-card-name"><strong>{drinkInfo.strDrink}</strong></p>
            <Link to={{
                pathname: `/drinkinfo/${drinkInfo.idDrink}`,
                state: drinkInfo
            }}>
                <Button variant='contained'>View More</Button>
            </Link>
        </div>
    )
}