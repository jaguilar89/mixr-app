import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function About() {
    return (
        <>
            <h1>About</h1>
            <p>
                Mixr is an app that lets you search for drink recipes(or add your own), from a crowdsourced list of over 600 cocktails and mixed drinks.
                <br/>
                It is written in React (18.2) and utilizes React Router (v5) and Material UI.
            </p>
    
            <br />

            <h1>Credits</h1>
            <p>
                The data set for this project was acquired from TheCockailDB, an open and crowdsourced API.
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
                <a href="https://github.com/jaguilar89/mixr-app">
                    <GitHubIcon 
                        fontSize="large"
                        sx={{
                            transition: "all .2s ease-in-out",
                            fontSize: "2.8rem",
                            paddingRight: "1.75rem",
                            "&:hover": {
                                transform: "scale(1.2)"
                            }
                        }}
                     />
                </a>
                <a href="mailto:jaguilarny@gmail.com">
                    <EmailIcon 
                        fontSize="large"
                        sx={{
                            transition: "all .2s ease-in-out",
                            fontSize: "2.8rem",
                            paddingRight: "1.75rem",
                            "&:hover": {
                                transform: "scale(1.2)"
                            }
                        }}
                     />
                </a>
                <a href="https://www.linkedin.com/in/jaguilar89/">
                    <LinkedInIcon 
                        fontSize="large" 
                        sx={{
                            transition: "all .2s ease-in-out",
                            fontSize: "2.8rem",
                            "&:hover": {
                                transform: "scale(1.2)"
                            }
                        }}
                    />
                </a>
            </div>
        </>
    )
};