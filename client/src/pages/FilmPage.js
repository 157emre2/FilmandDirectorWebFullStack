import React from 'react';
import NavbarComponent from "../components/common/NavbarComponent";
import AddFilmComponent from "../components/film/AddFilmComponent";
import FilmListComponent from "../components/film/FilmListComponent";
import {ModalTitle} from "../components/styles/Styles";

function FilmPage() {
    return (
        <div>
            <ModalTitle>Film Page</ModalTitle>
            <AddFilmComponent />
            <FilmListComponent />
        </div>
    );
}

export default FilmPage;