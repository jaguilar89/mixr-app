import React, { useState } from "react";
import { Box, Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";

export default function AddDrinkForm() {
    const [ingredientInput, setIngredientInput] = useState(["Ingredient"]);
    const [measurementInput, setMeasurementInput] = useState(["Measure"])

    function addInput() {
        setIngredientInput([...ingredientInput, "Add Ingredient"])
    };

    return (
        <form onSubmit={() => console.log('submitted')}>
            
                <TextField
                    required
                    variant="standard"
                    label="Drink Name"
                />
                <br />
                <InputLabel required>Drink Type</InputLabel>
                <Select 
                    label="Drink Type"
                    sx={{width: "10.438rem"}}                                       // TODO: Fix form page, set up POST request
                >
                    <MenuItem value="Alcoholic">Alcoholic</MenuItem>
                    <MenuItem value="Non alcoholic">Non-Alcoholic</MenuItem>
                </Select>
                <br />
                <TextField
                    required
                    variant="standard"
                    label="Ingredient"
                />
                <TextField
                    required
                    variant="standard"
                    label="Measure"
                    />
                <br />
                <div>
                    {ingredientInput.length <= 15 &&
                        ingredientInput.map((item, index) => <TextField key={index} label={item} />)
                    }
                </div>
                <Button variant="contained" onClick={addInput}>Add Ingredient</Button>
                <br />
        </form>
    )
}