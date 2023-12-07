import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {withTheme} from "styled-components";

function NavbarComponent(props) {
    let newTheme = props.them === "light" ? "dark" : "light";
    const setTheme = () => {
        props.updateTheme(newTheme);
    };

    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/film">Film Page</Link></li>
                <li><Link to="/director">Director Page</Link></li>
            </ul>
            <button onClick={setTheme}>Change Theme</button>
        </nav>
    );
}

export default withTheme(NavbarComponent);