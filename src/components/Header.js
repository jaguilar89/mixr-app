import React from "react";
import NavBar from "./NavBar";
import LocalBarIcon from '@mui/icons-material/LocalBar';

export default function Header() {
    return (
        <>
            <h1 id="heading">
                Mixr
               <LocalBarIcon 
                fontSize="large"
                sx={{ marginLeft: "0.70rem" }}
                />
            </h1>
            <NavBar />
        </>
    )
};