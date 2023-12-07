import React from 'react';
import NavbarComponent from "../components/common/NavbarComponent";
import AddFilmComponent from "../components/film/AddFilmComponent";
import FilmListComponent from "../components/film/FilmListComponent";

function FilmPage() {
    return (
        <div>
            <h1>Film Page</h1>
            <AddFilmComponent />
            <FilmListComponent />
        </div>
    );
}

export default FilmPage;