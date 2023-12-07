import React, {useEffect, useState} from "react";
import { useQuery as uwu} from "@apollo/client";
import { GET_SEARCH_FILMS, GET_SEARCH_DIRECTOR} from "../../query/queries";

function SearchFilmorDirectorComponent() {
    const [searchInput, setSearchInput] = useState("");

    const { loading: lf, error: ef, data: df, refetch: rf} = uwu(GET_SEARCH_FILMS, {
        variables: { name: searchInput }
    });

    const { loading: ld, error: ed, data: dd, refetch: rd } = uwu(GET_SEARCH_DIRECTOR, {
        variables: {name: searchInput}
    });

    useEffect(() => {
        rf({ name: searchInput });
        rd({ name: searchInput });
    }, [searchInput, rf, rd]);

    function display_films() {
        if (lf) return(<li>Loading..</li>);
        if (ef) return(<li>Error:  {ef.message}</li>);

        if (df.searchFilm.length === 0) {
            return (<li>No Result..</li>);
        }else{
            return (
                df.searchFilm.map(sf => {
                    return(<li key={sf.id} value={sf.id}>{sf.name}</li>)
                })
            );
        }

    }

    function display_directors(){
        if (ld) return(<li>Loading..</li>);
        if (ed) return(<li>Error {ed.message}</li>);

        if (dd.searchDirector.length === 0){
            return (<li>No Result..</li>);
        }else {
            return (
                dd.searchDirector.map(sd => {
                    return(<li key={sd.id} value={sd.id}>{sd.name}</li>)
                })
            );
        }
    }

    return (
        <div>
            <input type="text" placeholder="Search Film or Director" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
            <div>
                <div>
                    <h3>Film List</h3>
                    <ul>
                        { display_films() }
                    </ul>
                </div>
                <div>
                    <h3>Director List</h3>
                    <ul>
                        { display_directors() }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SearchFilmorDirectorComponent;