import React from "react";
import { TextField } from "@mui/material";

export default function Search({ search, onSearch, ingredient, onIngredSearch }) {
    const labelStyle = {
        style: {
            color: "#f5f5f5"
        }
    };


    return (
        <>
            <TextField 
            id="search-input" 
            label="Search drinks by name"
            value={search} 
            variant="standard"
            onChange={onSearch}
            InputLabelProps={labelStyle}
            sx={{
                input: {
                    color: "#f5f5f5"
                },
                padding: "1rem 3rem 1rem 0",
                width: "20rem"
            }}
        />
        <TextField 
            id="search-input" 
            label="Search drinks by ingredient"
            value={ingredient} 
            variant="standard"
            onChange={onIngredSearch}
            InputLabelProps={labelStyle}
            sx={{
                input: {
                    color: "#f5f5f5"
                },
                padding: "1rem 0",
                width: "20rem"
            }}
        />
        </>
        
    )
}