import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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

            <h1>Credits</h1>
            <p>
                The dataset for this project was acquired from TheCockailDB, an open and crowd-sourced database.
                <br />
                <a href="https://www.thecocktaildb.com/">https://www.thecocktaildb.com/</a>
            </p>
            <br />
            <p>
                Credit for the name goes to Samuel Banya, thanks!! 😄
                <br />
                <a href="https://github.com/samuelbanya">https://github.com/samuelbanya</a>
            </p>
            <br />
            <h1>Contact</h1>
            <div id="contact-info">
                <a href="https://github.com/jaguilar89">
                    <GitHubIcon fontSize="large" />
                </a>
                <a href="https://www.linkedin.com/in/jaguilar89/">
                    <LinkedInIcon fontSize="large" />
                </a>
            </div>
        </>
    )
};