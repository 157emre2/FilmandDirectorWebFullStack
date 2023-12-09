import React from "react";
import {useQuery as uwu} from "@apollo/client";
import {GET_DIRECTORS_FULL} from "../../query/queries";
import {H2Title, H3Title, StyledUl} from "../styles/Styles";

function DirectorListComponent() {
    function get_directors() {
        const {loading, error, data} = uwu(GET_DIRECTORS_FULL);

        if (loading) return(<li>Loading..</li>);
        if (error) return(<li>Error: {error}</li>);

        return data.directors.map(d => {
            return(<li key={d.id} value={d.id}>
                <H3Title>{d.name}</H3Title>
                <ul>
                    {d.films.map(f => {
                        return(<li key={f.id}>{f.name}</li>)
                    })}
                </ul>
            </li> )
        });
    }

    return(
        <div>
            <H2Title>Director List</H2Title>
            <StyledUl>
                { get_directors() }
            </StyledUl>
        </div>
    );
}

export default DirectorListComponent;