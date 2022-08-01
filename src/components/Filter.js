import { Button, FormControl, FormLabel, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { ButtonGroup } from "@mui/material";
import React from "react";

export default function Filter() {
    return (
        <>
            <label>Filter: </label>
            <ButtonGroup
                variant="outlined"
                aria-label="outlined button group"
                onClick={(e) => console.log(e.target.value)}
            >
                <Button value="ordinary drink">Ordinary Drink</Button>
                <Button value="cocktail">Cocktail</Button>
                <Button value="shot">Shot</Button>
                <Button value="coffee / tea">Coffee / Tea</Button>
                <Button value="punch / party drink">Punch / Party Drink</Button>
            </ButtonGroup>
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    defaultValue="alcoholic"
                >
                    <FormControlLabel value="alcoholic" control={<Radio />} label="Alcoholic" />
                    <FormControlLabel value="non-alcoholic" control={<Radio />} label="Non-Alcoholic" />
                </RadioGroup>
            </FormControl>
        </>
    )
}