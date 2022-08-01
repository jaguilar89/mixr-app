import { Button, ButtonGroup, FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";

export default function Filter({ onCategoryChange, onAlcoholSelect }) {
    return (
        <>
            <label>Filter: </label>
            <ButtonGroup
                variant="outlined"
                aria-label="outlined button group"
                onClick={onCategoryChange}
            >
                <Button value="Ordinary Drink">Ordinary Drink</Button>
                <Button value="Cocktail">Cocktail</Button>
                <Button value="Shot">Shot</Button>
                <Button value="Coffee / Tea">Coffee / Tea</Button>
                <Button value="Punch / Party Drink">Punch / Party Drink</Button>
            </ButtonGroup>
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    defaultValue="alcoholic"
                    onChange={onAlcoholSelect}
                >
                    <FormControlLabel value="Alcoholic" control={<Radio />} label="Alcoholic" />
                    <FormControlLabel value="Non alcoholic" control={<Radio />} label="Non-Alcoholic" />
                </RadioGroup>
            </FormControl>
        </>
    )
}