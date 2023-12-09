import React from 'react';
import SearchFiLmorDirectorComponent from "../components/home/SearchFilmorDirectorComponent";
import {ModalTitle, StyledContainer} from "../components/styles/Styles";

function HomePage() {
    return (
        <div>
            <ModalTitle>Home Page</ModalTitle>
            <SearchFiLmorDirectorComponent />
            <p>You can see films and directors following the links which on the navbar.</p>
        </div>
    );
}

export default HomePage;