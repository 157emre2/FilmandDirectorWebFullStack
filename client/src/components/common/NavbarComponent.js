import React from 'react';
import { Link } from 'react-router-dom';

function NavbarComponent() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/film">Film Page</Link></li>
                <li><Link to="/director">Director Page</Link></li>
            </ul>
        </nav>
    );
}

export default NavbarComponent;