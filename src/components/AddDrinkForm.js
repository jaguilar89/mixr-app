import React, { useState } from "react";
import { Alert, Box, Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";

export default function AddDrinkForm() {
    const [input, setInput] = useState([])

    function addInput() {
        setInput([
            ...input,
            <TextField
                variant="standard"
                label="Ingredient"
                margin="normal"
                sx={{ paddingRight: '1rem' }}
            />,
            <TextField
                variant="standard"
                label="Measurement"
                margin="normal"
            />,
            <br />
        ])
    };
    
    function alert() {
        if (input.length <= 43) {
            return {display: "none"}
        }
        return {display: "block"}
    };

    return (
        <form onSubmit={() => console.log('submitted')}>

            <TextField
                required
                variant="standard"
                label="Drink Name"
                margin="normal"
            />
            <br />
            <InputLabel required>Drink Category</InputLabel>
            <Select
                label="Drink Category"
                margin="normal"
                sx={{ width: "10.438rem" }}                                       // TODO: Fix form page, set up POST request
            >
                <MenuItem value="Ordinary Drink">Ordinary Drink</MenuItem>
                <MenuItem value="Cocktail">Cocktail</MenuItem>
                <MenuItem value="Shot">Shot</MenuItem>
                <MenuItem value="Coffee / Tea">Coffee/Tea</MenuItem>
                <MenuItem value="Punch / Party Drink">Punch/Party Drink</MenuItem>
            </Select>

            <InputLabel required>Drink Type</InputLabel>
            <Select
                label="Drink Type"
                margin="normal"
                sx={{ width: "10.438rem" }}                                       // TODO: Fix form page, set up POST request
            >
                <MenuItem value="Alcoholic">Alcoholic</MenuItem>
                <MenuItem value="Non alcoholic">Non-Alcoholic</MenuItem>
            </Select>
            <br />
            <TextField
                required
                variant="standard"
                label="Ingredient"
                margin="normal"
                sx={{ paddingRight: '1rem' }}
            />
            <TextField
                required
                variant="standard"
                label="Measurement"
                margin="normal"
            />
            <br />
            {(() => {
                if (input.length < 43) {
                    return input
                }
            })()}
            <Alert severity="error" sx={alert}>Max number of ingredients added.</Alert>
            <Button 
                variant="contained" 
                onClick={addInput}
                sx={{marginTop: "1rem"}}
                >
                    Add Ingredient
            </Button>
            <br />
            <TextField
                multiline
                margin="normal"
                label="Instructions"
                sx={{width: "50%"}}
            />
            <br />
            <Button variant="contained" type="submit">Submit</Button>
        </form>
    )
}

/*
const textFields = [];

    for (let i = 0; textFields.length < 42; i++) {
        textFields.push(<TextField
            variant="standard"
            label="Ingredient"
            sx={{ paddingRight: '1rem' }}
        />,
            <TextField
                variant="standard"
                label="Measure"
            />,
            <br />)
        i++
    }
*/