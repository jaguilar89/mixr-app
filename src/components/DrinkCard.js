import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function DrinkCard({ drinkInfo }) {
    const { strDrink, strDrinkThumb } = drinkInfo
    return (
        <div className="drink-card">
            <div className="drink-thumb">
                {strDrinkThumb ? <img src={strDrinkThumb} alt="drink thumbnail" /> : <Skeleton />}
            </div>
            <p className="drink-card-name">
                {strDrink ? <strong>{strDrink}</strong> : <Skeleton />}
            </p>
            
            <Link to={{
                pathname: `/drinkinfo/${strDrink}`,
                state: drinkInfo
            }}>
                <Button variant='contained'>View Details</Button>
            </Link>
        </div>
    )
}