import React from 'react';
import { Link } from 'react-router-dom';
import {Button, Navbar, StyledLink} from "../styles/Styles";


function NavbarComponent(props) {
    let newTheme = props.them === "light" ? "dark" : "light";
    const setTheme = () => {
        props.updateTheme(newTheme);
    };

    return (
        <Navbar>
            <ul>
                <li><StyledLink to="/" type={'secondary'}>Home</StyledLink></li>
                <li><StyledLink to="/film" type={'secondary'}>Film Page</StyledLink></li>
                <li><StyledLink to="/director" type={'secondary'}>Director Page</StyledLink></li>
            </ul>
            <Button type={'primary'} onClick={setTheme}>Change Theme</Button>
        </Navbar>
    );
}

export default NavbarComponent;