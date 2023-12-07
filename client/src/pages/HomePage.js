import React from 'react';
import NavbarComponent from "../components/common/NavbarComponent";
import SearchFiLmorDirectorComponent from "../components/home/SearchFilmorDirectorComponent";
import {ModalTitle} from "../components/styles/Modal";

function HomePage() {
    return (
        <div>
            <ModalTitle>Home Page</ModalTitle>
            <SearchFiLmorDirectorComponent />
            <p>You can see films and directors following the links which on the navbar.</p>
            <p>Styled-components kullanarak styling verilecek (dark - light temayi unutma demek bu)</p>
        </div>
    );
}

export default HomePage;