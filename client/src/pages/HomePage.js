import React from 'react';
import NavbarComponent from "../components/common/NavbarComponent";
import SearchFiLmorDirectorComponent from "../components/home/SearchFilmorDirectorComponent";

function HomePage() {
    return (
        <div>
            <NavbarComponent />
            <h1>Home Page</h1>
            <SearchFiLmorDirectorComponent />
            <p>You can see films and directors following the links which on the navbar.</p>
            <p>Styled-components kullanarak styling verilecek (dark - light temayi unutma demek bu)</p>
        </div>
    );
}

export default HomePage;