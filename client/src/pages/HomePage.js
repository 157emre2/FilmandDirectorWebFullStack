import React from 'react';
import SearchFiLmorDirectorComponent from "../components/home/SearchFilmorDirectorComponent";
import {ModalTitle, StyledContainer} from "../components/styles/Styles";

function HomePage() {
    return (
        <div>
            <ModalTitle>Home Page</ModalTitle>
            <SearchFiLmorDirectorComponent />
        </div>
    );
}

export default HomePage;