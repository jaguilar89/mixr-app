import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="navbar">
            <NavLink exact to="/">Main Page</NavLink>
            <NavLink exact to="/about">About</NavLink>
        </div>
    )
}