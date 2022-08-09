import React, { useRef, useState } from "react";
import { Alert, Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";

export default function AddDrinkForm() {
    const form = {
        strDrink: "",
        strCategory: "",
        strAlcoholic: "",
        strInstructions: "",
        strDrinkThumb: "",
        strInstructions:"",
        strIngredient1: "",
        strMeasure1: ""
    };

    const [formData, setFormData] = useState(form);
    const inputs = []

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    for (let i = 2; i <= 10; i++) {
        inputs.push([<TextField
            key={i}
            variant="standard"
            label="Ingredient"
            name={`strIngredient${i}`}
            margin="dense"
            onChange={handleChange}
        />,
        <TextField
            key={i}
            variant="standard"
            label="Amount"
            name={`strMeasure${i}`}
            margin="dense"
            onChange={handleChange}
        />,
        <br />])
    }
    console.log(formData)
    return (
        <form onSubmit={() => console.log('submitted')}>

            <TextField
                required
                variant="standard"
                label="Drink Name"
                name="strDrink"
                margin="dense"
                onChange={handleChange}
            />
            <br />
            <InputLabel required>Drink Category</InputLabel>
            <Select
                required
                label="Drink Category"
                name="strCategory"
                margin="dense"
                onChange={handleChange}
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
                required
                label="Drink Type"
                name="strAlcoholic"
                margin="dense"
                onChange={handleChange}
                sx={{ width: "10.438rem" }}                                       
            >
                <MenuItem value="Alcoholic">Alcoholic</MenuItem>
                <MenuItem value="Non alcoholic">Non-Alcoholic</MenuItem>
            </Select>
            <br />
            <TextField
                required
                variant="standard"
                label="Ingredient"
                name="strIngredient1"
                margin="dense"
                onChange={handleChange}
            />
            <TextField
                required
                variant="standard"
                label="Amount"
                name="strMeasure1"
                margin="dense"
                onChange={handleChange}
            />
            <br />
            {inputs}
            <TextField
                required
                multiline
                margin="dense"
                label="Instructions"
                name="strInstructions"
                onChange={handleChange}
                sx={{width: "50%"}}
            />
            <br />
            <Button variant="contained" type="submit">Submit</Button>
        </form>
    )
}
