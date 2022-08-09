import { Button, ButtonGroup, FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";

export default function Filter({ onCategoryChange, onAlcoholSelect }) {
    const style = {
        "&:focus": {
            backgroundColor: "orange"
        }
    }

    return (
        <>
            <label>Drink Category: </label>
            <ButtonGroup
                variant="outlined"
                aria-label="outlined button group"
                onClick={onCategoryChange}
            >
                <Button 
                    value="All" 
                    sx={style}>
                        All
                </Button>
                <Button 
                    value="Ordinary Drink" 
                    sx={style}>
                        Ordinary Drink
                </Button>
                <Button 
                    value="Cocktail" 
                    sx={style}>
                        Cocktail
                </Button>
                <Button 
                    value="Shot" 
                    sx={style}>
                        Shot
                </Button>
                <Button 
                    value="Coffee / Tea" 
                    sx={style}>
                        Coffee / Tea
                </Button>
                <Button 
                    value="Punch / Party Drink" 
                    sx={style}>
                        Punch / Party Drink
                </Button>
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