import { Button, ButtonGroup, FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";

export default function Filter({ onCategoryChange, onAlcoholSelect }) {
    // TODO: Set focus on category buttons
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
                    sx={{"&:focus": {backgroundColor: "blue"}}}>
                        All
                </Button>
                <Button 
                    value="Ordinary Drink" 
                    sx={{"&:focus": {backgroundColor: "blue"}}}>
                        Ordinary Drink
                </Button>
                <Button 
                    value="Cocktail" 
                    sx={{"&:focus": {backgroundColor: "blue"}}}>
                        Cocktail
                </Button>
                <Button 
                    value="Shot" 
                    sx={{"&:focus": {backgroundColor: "blue"}}}>
                        Shot
                </Button>
                <Button 
                    value="Coffee / Tea" 
                    sx={{"&:focus": {backgroundColor: "blue"}}}>
                        Coffee / Tea
                </Button>
                <Button 
                    value="Punch / Party Drink" 
                    sx={{"&:focus": {backgroundColor: "blue"}}}>
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