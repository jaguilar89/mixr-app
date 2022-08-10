import { Button, ButtonGroup, FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";

export default function Filter({ onCategoryChange, onAlcoholSelect }) {
    const buttonStyle = {
        color: "#f5f5f5",
        "&:focus": {
            backgroundColor: "#BD7900"
        }
    };

    const radioStyle = {
        color: "#f5f5f5",
        "&.Mui-checked": {
            color: "#f5f5f5"
        }
    }

    return (
        <>
            <label>Drink Category: </label>
            <ButtonGroup
                size="large"
                variant="outlined"
                aria-label="outlined button group"
                onClick={onCategoryChange}
                sx={{padding: '1rem 0'}}
            >
                <Button 
                    value="All" 
                    sx={buttonStyle}>
                        All
                </Button>
                <Button 
                    value="Ordinary Drink" 
                    sx={buttonStyle}>
                        Ordinary Drink
                </Button>
                <Button 
                    value="Cocktail" 
                    sx={buttonStyle}>
                        Cocktail
                </Button>
                <Button 
                    value="Shot" 
                    sx={buttonStyle}>
                        Shot
                </Button>
                <Button 
                    value="Coffee / Tea" 
                    sx={buttonStyle}>
                        Coffee / Tea
                </Button>
                <Button 
                    value="Punch / Party Drink" 
                    sx={buttonStyle}>
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
                    sx={{
                        marginTop: "0.75rem",
                        paddingLeft: "1rem",
                    }}
                >
                    <FormControlLabel value="Alcoholic" control={<Radio sx={radioStyle}/>} label="Alcoholic" />
                    <FormControlLabel value="Non alcoholic" control={<Radio sx={radioStyle}/>} label="Non-Alcoholic" />
                </RadioGroup>
            </FormControl>
        </>
    )
}