import React from 'react';
import NavbarComponent from "../components/common/NavbarComponent";
import AddDirectorComponent from "../components/director/AddDirectorComponent";
import DirectorListComponent from "../components/director/DirectorListComponent";
import {ModalTitle} from "../components/styles/Styles";

function DirectorPage() {
    return (
        <div>
            <ModalTitle>Director Page</ModalTitle>
            <AddDirectorComponent />
            <DirectorListComponent />
        </div>
    );
}

export default DirectorPage;