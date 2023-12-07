import React from 'react';
import NavbarComponent from "../components/common/NavbarComponent";
import AddDirectorComponent from "../components/director/AddDirectorComponent";
import DirectorListComponent from "../components/director/DirectorListComponent";

function DirectorPage() {
    return (
        <div>
            <h1>Director Page</h1>
            <AddDirectorComponent />
            <DirectorListComponent />
        </div>
    );
}

export default DirectorPage;