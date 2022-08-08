import React from "react";

export default function About() {
    return (
        <>
            <h1>About</h1>
            <p>
                This app was created as my Phase 2 React Project for Flatiron School's Software Engineering bootcamp.
            </p>
            <ul className="tools">
            <p>Tools used:</p>
                <li>React</li>
                <li>JavaScript</li>
                <li>React Router v5</li>
                <li>Material-UI</li>
            </ul>
            <br />
            <h2>Credits</h2>
            <p>
                The dataset for this project was acquired from <a href="https://www.thecocktaildb.com/">TheCockailDB, an open and crowd-sourced database.</a>
            </p>
        </>
    )
};