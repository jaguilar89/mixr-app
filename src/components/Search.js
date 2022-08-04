import React from "react";
import { TextField } from "@mui/material";

export default function Search({ search, onSearch, ingredient, onIngredSearch }) {
    return (
        <>
            <TextField 
            id="search-input" 
            label="Search drinks by name"
            value={search} 
            variant="standard"
            onChange={onSearch}
            sx={{paddingRight: "3rem"}}
        />
        <TextField 
            id="search-input" 
            label="Search drinks by ingredient"
            value={ingredient} 
            variant="standard"
            onChange={onIngredSearch}
        />
        </>
        
    )
}