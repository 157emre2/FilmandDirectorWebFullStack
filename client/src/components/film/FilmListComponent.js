import React from "react";
import {useQuery as uwu} from "@apollo/client";
import {GET_FILMS} from "../../query/queries";
import {Link} from "react-router-dom";

function FilmListComponent() {
    function get_films() {
        const { loading, error, data} = uwu(GET_FILMS);

        if (loading) return(<li>Loading..</li>);
        if (error) return(<li>Error: {error.message}</li>);


        return data.films.slice().reverse().map(f => {
            return(<li key={f.id} value={f.id}>
                <h3><Link hrefLang="#">{f.name}</Link></h3>
                <p>{f.genre}</p>
                <p>{f.imdb}</p>
                <p>{f.director.name}</p>
            </li> )
        });
    }
    return (
        <div>
            <h2>Film List</h2>
            <ul>
                { get_films() }
            </ul>
        </div>
    );
}

export default FilmListComponent;