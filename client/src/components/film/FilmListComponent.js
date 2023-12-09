import React from "react";
import {useQuery as uwu} from "@apollo/client";
import {GET_FILMS} from "../../query/queries";
import {Link} from "react-router-dom";
import {H2Title, H3Title, StyledLink, StyledP, StyledUl} from "../styles/Styles";

function FilmListComponent() {
    function get_films() {
        const { loading, error, data} = uwu(GET_FILMS);

        if (loading) return(<li>Loading..</li>);
        if (error) return(<li>Error: {error.message}</li>);


        return data.films.slice().reverse().map(f => {
            return(<li  key={f.id} value={f.id}>
                <H3Title><StyledLink type={'secondary'} hrefLang="#">{f.name}</StyledLink></H3Title>
                <StyledP>{f.genre}</StyledP>
                <StyledP>{f.imdb}</StyledP>
                <StyledP>{f.director.name}</StyledP>
            </li> )
        });
    }
    return (
        <div>
            <H2Title>Film List</H2Title>
            <StyledUl>
                { get_films() }
            </StyledUl>
        </div>
    );
}

export default FilmListComponent;