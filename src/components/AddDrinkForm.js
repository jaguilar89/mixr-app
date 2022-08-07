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
    const [input, setInput] = useState([]);
    const [formData, setFormData] = useState(form);
    const inputValue = useRef(2);

    function addInput() {
        setInput([
            ...input,
            [<TextField
                key={(e) => e.target.value}
                variant="standard"
                label="Ingredient"
                name={`strIngredient${inputValue.current}`}
                margin="dense"
                onChange={handleChange}
                sx={{ paddingRight: '1rem' }}
            />,
            <TextField
                key={(e) => e.target.value}
                variant="standard"
                label="Measurement"
                name={`strMeasure${inputValue.current}`}
                margin="dense"
                onChange={handleChange}
            />,
            <br />]
        ])
        inputValue.current++
    };

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

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
                sx={{ paddingRight: '1rem' }}
            />
            <TextField
                required
                variant="standard"
                label="Measurement"
                name="strMeasure1"
                margin="dense"
                onChange={handleChange}
            />
            <br />

            {input.length < 10 ? input : <Alert severity="error">Max number of ingredients added.</Alert>}

            <Button 
                variant="contained" 
                onClick={addInput}
                sx={{marginTop: "1rem"}}
                >
                    Add Ingredient
            </Button>
            <br />
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