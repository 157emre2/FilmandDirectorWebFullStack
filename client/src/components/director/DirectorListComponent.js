import React from "react";
import {useQuery as uwu} from "@apollo/client";
import {GET_DIRECTORS_FULL} from "../../query/queries";

function DirectorListComponent() {
    function get_directors() {
        const {loading, error, data} = uwu(GET_DIRECTORS_FULL);

        if (loading) return(<li>Loading..</li>);
        if (error) return(<li>Error: {error}</li>);

        return data.directors.map(d => {
            return(<li key={d.id} value={d.id}>
                <h3>{d.name}</h3>
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
            <h2>Director List</h2>
            <ul>
                { get_directors() }
            </ul>
        </div>
    );
}

export default DirectorListComponent;