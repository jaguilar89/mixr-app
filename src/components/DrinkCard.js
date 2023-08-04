import React from "react";

import { Button } from "@mui/material";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function DrinkCard({ drinkInfo }) {
    const { strDrink, strDrinkThumb, id } = drinkInfo
    const history = useHistory()
    return (
        <div className="drink-card">
            <div className="drink-thumb">
                {strDrinkThumb ? <img src={strDrinkThumb} alt="drink thumbnail" /> : <Skeleton />}
            </div>
            <p className="drink-card-name">
                {strDrink ? <strong>{strDrink}</strong> : <Skeleton />}
            </p>

            <Button
                variant="contained"
                onClick={() => history.push(`/drinkinfo/${id}`)}
            >
                View Details
            </Button>
        </div>
    )
}