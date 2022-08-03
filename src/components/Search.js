import React from "react";
import { TextField } from "@mui/material";

export default function Search({ search, onSearch }) {
    return (
        <TextField 
            sx={{width: '41.069rem'}} 
            id="search-input" 
            label="Search drinks"
            value={search} 
            variant="standard"
            onChange={onSearch}
        />
    )
}