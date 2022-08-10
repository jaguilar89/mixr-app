import React, { useState } from "react";
import { Alert, Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AddDrinkForm({ onButtonClick, onSubmitForm }) {
    const form = {
        strDrink: "",
        strCategory: "",
        strAlcoholic: "",
        strInstructions: "",
        strDrinkThumb: "",
        strIngredient1: "",
        strMeasure1: ""
    };

    const [formData, setFormData] = useState(form);
    const [submitted, setSubmitted] = useState(false);
    const inputs = []

    function handleChange(e) {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try { 
            const res = await fetch("http://localhost:3000/drinks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            if (res.ok) {
                setSubmitted(true)
            }

            const newDrink = await res.json()
            onSubmitForm(newDrink)
        } catch(err) {
            console.log(err)
        }
        e.target.reset();
    }

    //Dynamically generate ingredient/amount input fields
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
            key={i + 1}
            variant="standard"
            label="Amount"
            name={`strMeasure${i}`}
            margin="dense"
            onChange={handleChange}
        />,
        <br key={i + 10}/>])
    } 

    return (
        <Dialog open={true} onClose={onButtonClick}>

        <form method="POST" onSubmit={handleSubmit}>

        <DialogTitle>Add a New Drink</DialogTitle>
        <DialogContent>
            <DialogContentText>
                Add your own drink here. Once submitted, you may search for it by name/ingredient on the main page.
            </DialogContentText>

            <TextField
                required
                variant="standard"
                label="Drink Name"
                name="strDrink"
                margin="dense"
                onChange={handleChange}
                fullWidth
            />
            <br />
            <TextField
                required
                variant="standard"
                label="Image URL"
                name="strDrinkThumb"
                margin="dense"
                onChange={handleChange}
                fullWidth
            />
            <br />
            <InputLabel required>Drink Category</InputLabel>
            <Select
                required
                label="Drink Category"
                name="strCategory"
                margin="dense"
                onChange={handleChange}
                fullWidth                                       // TODO: Fix form page, set up POST request
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
                fullWidth                                       
            >
                <MenuItem value="Alcoholic">Alcoholic</MenuItem>
                <MenuItem value="Non alcoholic">Non-Alcoholic</MenuItem>
            </Select>
            <br />
            <TextField
                variant="standard"
                label="Container (shot glass, cocktail glass, etc)"
                name="strGlass"
                margin="dense"
                onChange={handleChange}
                fullWidth
            />
            <br />
            <br />
            <DialogContentText>
                Add ingredients (At least 1 ingredient/amount required)
            </DialogContentText>
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
                fullWidth
            />
            <br />
            </DialogContent>
            {submitted ? <Alert severity="success">Drink successfully submitted! You may close this window.</Alert> : null}
            <DialogActions>
                <Button variant="contained" onClick={onButtonClick}>Close</Button>
                <Button variant="contained" type="submit">Submit</Button>
            </DialogActions>
        </form>
        </Dialog>
    )
}
